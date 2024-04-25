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
  ResServerTools,
  ResServerFuncParams,
  NotFoundError,
  ErrorCode,
  FuncItem,
  CommonError,
  ServerFuncParams,
  // EventBusName,
} from "@isdk/ai-tool";

import { IKVObjItem, KVSqlite } from "@isdk/ai-tool-sqlite";
import { DownloadName, download } from '@isdk/ai-tool-download'

import { AIModelSettings } from './llm-settings';
import { getHFUrl } from './utils';
import { LLMProviderName, llm } from './llm-provider';
import { LLMArguments } from './llm-options';

const MODELS_DB_NAME = '.modelsdb'
// const eventBus = event.runSync()

interface LlmModelsFuncParams extends AIModelSettings, ResServerFuncParams {
  _id?: string
  query?: string
  size?: number
  page?: number
  overwrite?: boolean
}

export class LlmModelsFunc extends ResServerTools {
  rootDir: string|undefined
  db: KVSqlite
  usingMirror: boolean|undefined

  depends = {
    [DownloadName]: download,
    [LLMProviderName]: llm,
  }

  constructor(name: string|Function|FuncItem, options: FuncItem|any = {}) {
    super(name, options)

    if (this.rootDir) {
      this.db = new KVSqlite(path.join(this.rootDir, MODELS_DB_NAME))
      download.rootDir = this.rootDir
    } else {
      throw new CommonError('rootDir is required', 'LlmModels', ErrorCode.InvalidArgument)
    }
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
              }
            }
          } else {
            console.error(model._id, 'model location not exists', location)
            if (model.location) delete model.location
            model.downloaded = false
          }
        }
      }
      if (model.downloaded !== downloaded) {
        this.db.set(model as IKVObjItem)
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

  list(options?: LlmModelsFuncParams){
    const { query, size, page } = options || {}
    const result = this.db.list(query, size, page) as AIModelSettings

    return result;
  }

  get({_id}: LlmModelsFuncParams) {
    if (_id !== undefined) {
      const result = this.db.get(_id) as AIModelSettings
      if (!result) {
        throw new NotFoundError(_id, 'LlmModels.get')
      }
    } else {
      throw new CommonError('_id is required', 'LlmModels.get', ErrorCode.InvalidArgument)
    }
  }

  put(model: LlmModelsFuncParams) {
    if (model._id) {
      if (this.db.isExists(model._id)) {
        this.verifyDownloaded(model)
        return this.db.set(model as IKVObjItem, { overwrite: false})
      } else {
        throw new NotFoundError(model._id, 'LlmModels.put')
      }
    } else {
      throw new CommonError('_id is required', 'LlmModels.put', ErrorCode.InvalidArgument)
    }
  }

  post(model: LlmModelsFuncParams) {
    if (!model._id) {
      throw new CommonError('_id is required', 'LlmModels.post', ErrorCode.InvalidArgument)
    }

    if (this.db.isExists(model._id)) {
      throw new AlreadyExistsError(model._id, 'LlmModels.post')
    }

    return this.db.set(model as IKVObjItem)
  }

  delete({_id}: LlmModelsFuncParams) {
    if (_id !== undefined) {
      if (this.db.isExists(_id)) {
        return this.db.del(_id)
      } else {
        throw new NotFoundError(_id, 'LlmModels.delete')
      }
    } else {
      throw new CommonError('_id is required', 'LlmModels.delete', ErrorCode.InvalidArgument)
    }
  }

  async $download(model: LlmModelsFuncParams) {
    if (model.downloaded) {
      throw new AlreadyExistsError(model._id!, 'LlmModels.download')
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
