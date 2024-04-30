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

import { AIModelFileSettings, AIModelQuantType, AIModelSettings } from './llm-settings';
import { getHFUrl } from './utils';
import { LLMProviderName, llm } from './llm-provider';
import { LLMArguments } from './llm-options';

export const MODELS_DB_NAME = '.modelsdb'
// const eventBus = event.runSync()

interface LlmModelsFuncParams extends AIModelSettings, KVSqliteResFuncParams {
}

function findModelFileByQuant(files: AIModelFileSettings[], quant: AIModelQuantType) {
  return files.find(file => file.quant === quant)
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
    if (!rootDir) {throw new CommonError('rootDir is required', 'LlmModelsFunc', ErrorCode.InvalidArgument)}
    download.rootDir = rootDir
    if (!options.dbPath) {options.dbPath = path.join(rootDir, MODELS_DB_NAME)}

    super(name, options)
  }

  initDB() {
    const filename = path.resolve(this.rootDir!, '..', 'models', 'gguf-models.json');
    if (fs.existsSync(filename)) {
      const configs = JSON.parse(fs.readFileSync(filename, 'utf8'));
      this.db.bulkDocs(configs);
    }
  }

  verifyDownloaded(model: AIModelSettings) {
    // for (const model of models) {
      const downloaded = model.downloaded
      if (downloaded) {
        if (model.location) {
          const location = model.location ?? path.join(this.rootDir!, model._id!)
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

  getFileInfo(id: string, quant: AIModelQuantType) {
    const model = this.db.get(id)
    if (!model) {
      throw new NotFoundError(id, this.name + '.getFileInfo')
    }
    const fileInfo = findModelFileByQuant(model.files, quant) as AIModelFileSettings
    if (!fileInfo) {
      throw new NotFoundError(`${id}.${quant}`, this.name + '.getFileInfo')
    }
    fileInfo.hf_repo = model.hf_repo
    return fileInfo
  }

  getPath(fileInfo: string|AIModelSettings, quant: AIModelQuantType) {
    if (typeof fileInfo === 'string') {
      fileInfo = this.getFileInfo(fileInfo, quant)
    }
    const result = fileInfo.location ?? fileInfo.file_name
    return result
  }

  getUrl(fileInfo: string|AIModelFileSettings, quant: AIModelQuantType) {
    if (typeof fileInfo === 'string') {
      fileInfo = this.getFileInfo(fileInfo, quant)
    }
    const result = fileInfo.url ?? this.getUrlFromHf(fileInfo)
    return result
  }

  getUrlFromHf(fileInfo: AIModelFileSettings, hubUrl?: string) {
    if (fileInfo.hf_repo && fileInfo.hf_path) {
      if (this.usingMirror && !hubUrl) {
        hubUrl = 'https://hf-mirror.com'
      }

      return getHFUrl({
        repo: fileInfo.hf_repo,
        path: fileInfo.hf_path,
        hubUrl,
      })
    }
  }

  put(model: LlmModelsFuncParams) {
    const id = model.id
    const val = model.val
    if (id && val) {
      val._id = id
      this.verifyDownloaded(val)
    }
    return super.put(model)
  }

  async _getUrlByParams({id, quant}: LlmModelsFuncParams) {
    if (!id) {
      throw new CommonError('id is required', this.name + '._getUrlByParams', ErrorCode.InvalidArgument)
    }
    if (!quant) {
      throw new CommonError('quant is required', this.name + '._getUrlByParams', ErrorCode.InvalidArgument)
    }

    if (typeof quant === 'string') { quant = AIModelQuantType[quant as any] }

    if (AIModelQuantType[quant] === undefined) {
      throw new CommonError('quant is invalid', this.name + '._getUrlByParams', ErrorCode.InvalidArgument)
    }

    const model = this.db.get(id) as AIModelSettings

    if (!model) {
      throw new NotFoundError(id, this.name + '._getUrlByParams')
    }

    const file = this.getFileInfo(id, quant)

    const url = this.getUrl(file, quant)
    const filepath = this.getPath(file, quant)
    if (!url || !filepath) {
      throw new CommonError('Can not get url or filepath', this.name + '._getUrlByParams', ErrorCode.InvalidArgument)
    }
    return {url, filepath, file, id, quant}
  }

  async $getUrl(params: LlmModelsFuncParams) {
    const {url, filepath} = await this._getUrlByParams(params)
    return {url, filepath}
  }

  async $download(params: LlmModelsFuncParams) {
    let {overwrite} = params

    const {url, filepath, file, id, quant} = await this._getUrlByParams(params)

    if (file.downloaded) {
      throw new AlreadyExistsError(`${id}.${quant}`, this.name + '.download')
    }

    overwrite = overwrite ?? false
    const result = await download.post({
      url,
      filepath,
      overwrite,
      start: true,
    })
    return result;
  }

  async $run(input: LLMArguments) {
    return llm.func(input)
  }
}

LlmModelsFunc.defineProperties(LlmModelsFunc, {
  rootDir: { type: 'string' },
  usingMirror: { type: 'boolean' },
})
