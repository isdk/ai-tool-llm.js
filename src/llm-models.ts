import path from 'path'
import fs from 'fs'
import {
  AlreadyExistsError,
  // EventName,
  // event,
  // eventServer,
  // isValidFilepath,
  // throwError,
  // xxhashAsStr,
  ErrorCode,
  FuncItem,
  CommonError,
  ServerFuncParams,
  NotFoundError,
  // EventBusName,
} from "@isdk/ai-tool";

import { KVSqliteResFunc, KVSqliteResFuncParams,  } from "@isdk/ai-tool-sqlite";
import { DownloadName, download } from '@isdk/ai-tool-download'

import { AIModelSettings } from './llm-settings';
import { getHFUrl } from './utils';
import { LLMProviderName, llm } from './llm-provider';
import { LLMArguments } from './llm-options';

const MODELS_DB_NAME = '.modelsdb'
// const eventBus = event.runSync()

interface LlmModelsFuncParams extends AIModelSettings, KVSqliteResFuncParams {
}

export class LlmModelsFunc extends KVSqliteResFunc<LlmModelsFuncParams> {
  rootDir: string|undefined
  usingMirror: boolean|undefined

  depends = {
    [DownloadName]: download,
    [LLMProviderName]: llm,
  }

  constructor(name: string|Function|FuncItem, options: FuncItem|any = {}) {
    const rootDir = options.rootDir
    if (!rootDir) {throw new CommonError('rootDir is required', 'LlmModels', ErrorCode.InvalidArgument)}
    download.rootDir = rootDir
    options.dbPath = path.join(rootDir, MODELS_DB_NAME)

    super(name, options)
  }

  verifyDownloaded(model: AIModelSettings) {
    // for (const model of models) {
      const downloaded = model.downloaded
      if (downloaded) {
        if (model.location) {
          const location = model.location ?? path.join(this.rootDir!, model._id)
          if (fs.existsSync(location)) {
            if (model.file_size) {
              const stat = fs.statSync(location)
              if (stat.size !== model.file_size) {
                console.warn(model._id, 'file size not match', location)
              } else {
                model.location = location
              }
            }
          } else {
            console.error(model._id, 'model location not exists', location)
            if (model.location) delete model.location
            model.downloaded = false
          }
        }
      }
    // }
  }

  isStream(params: ServerFuncParams) {
    return params?.stream
  }

  getPath(model: string|AIModelSettings) {
    if (typeof model === 'string') {
      model = this.db.get(model)
    }
    let result = model.location ?? model._id
    return result
  }

  getUrl(model: string|AIModelSettings) {
    if (typeof model === 'string') {
      model = this.db.get(model)
    }
    let result = model.url ?? this.getUrlFromHf(model)
    return result
  }

  getUrlFromHf(model: AIModelSettings, hubUrl?: string) {
    if (model.hf_repo && model.hf_path) {
      if (this.usingMirror && !hubUrl) {
        hubUrl = 'https://hf-mirror.com'
      }

      return getHFUrl({
        repo: model.hf_repo,
        path: model.hf_path,
        hubUrl,
      })
    }
  }

  put(model: LlmModelsFuncParams) {
    const id = model.id
    const val = model.val
    if (id && val) {
      this.verifyDownloaded(val)
    }
    return super.put(model)
  }

  async $download({id}: LlmModelsFuncParams) {
    if (!id) {
      throw new CommonError('id is required', 'LlmModels.download', ErrorCode.InvalidArgument)
    }
    const model = this.db.get(id) as AIModelSettings

    if (!model) {
      throw new NotFoundError(id, 'LlmModels.download')
    }

    if (model.downloaded) {
      throw new AlreadyExistsError(model.id!, 'LlmModels.download')
    }

    const url = this.getUrl(model)
    const filepath = this.getPath(model)
    const overwrite = model.overwrite ?? false
    if (url && filepath) {
      const result = await download.post({
        url,
        filepath,
        overwrite,
        start: true,
      })
      return result;
    } else {
      throw new CommonError('url or filepath is required', 'LlmModels.download', ErrorCode.InvalidArgument)
    }
  }

  async $run(input: LLMArguments) {
    return llm.func(input)
  }
}

LlmModelsFunc.defineProperties(LlmModelsFunc, {
  rootDir: { type: 'string' },
  usingMirror: { type: 'boolean' },
})
