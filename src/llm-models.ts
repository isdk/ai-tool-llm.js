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
} from "@isdk/ai-tool"

import { KVSqliteResFunc, KVSqliteResFuncParams,  } from "@isdk/ai-tool-sqlite"
import { DownloadName, DownloadStatusEventName, FileDownloadStatus, download } from '@isdk/ai-tool-download'

import { AIModelFileSettings, AIModelQuantType, AIModelSettings } from './llm-settings'
import { getHFUrl } from './utils'
import { LLMProviderName, llm } from './llm-provider'
import { LLMArguments } from './llm-options'

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
    if (options.dbPath[0] !== ':' && !path.isAbsolute(options.dbPath)) {
      options.dbPath = path.resolve(rootDir, options.dbPath)
    }
    if (!options.initDir) {options.initDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'models')} //, 'gguf-models.json'

    super(name, options)
  }

  getDocsFromDir(dir: string) {
    const docs = super.getDocsFromDir(dir).flat()
    for (const doc of docs) {
      const model = doc as AIModelSettings
      this.verifyFileExists(model)
    }
    return docs
  }

  verifyFileExists(model: AIModelSettings) {
    let changed: boolean|undefined
    let hasDownloaded: boolean|undefined
    const rootDir = this.rootDir!
    for (const file of model.files!) {
      const opts = {rootDir, changed: false}
      const isExists = verifyModelFileExists(file, opts)
      if (isExists) {hasDownloaded = true}
      if (opts.changed) {changed = true}
    }
    if (hasDownloaded) {
      if (model.downloaded !== true) {
        model.downloaded = true
        changed = true
      }
    }
    return changed
  }

  isStream(params: ServerFuncParams) {
    return params?.stream
  }

  getFileInfo(id: string, quant: AIModelQuantType, model?: AIModelSettings) {
    if (!model) {model = this.db.get(id)}
    if (!model) {
      throw new NotFoundError(id, this.name + '.getFileInfo')
    }
    const fileInfo = findModelFileByQuant(model.files!, quant) as AIModelFileSettings
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
    const val = model.val
    const id = model.id ?? val?._id
    if (id && val) {
      val._id = id
      this.verifyFileExists(val)
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

    this.verifyFileExists(model)

    if (!model) {
      throw new NotFoundError(id, this.name + '._getUrlByParams')
    }

    const file = this.getFileInfo(id, quant, model)

    const url = this.getUrl(file, quant)
    const filepath = this.getPath(file, quant)
    if (!url || !filepath) {
      throw new CommonError('Can not get url or filepath', this.name + '._getUrlByParams', ErrorCode.InvalidArgument)
    }
    return {url, filepath, file, id, quant, model}
  }

  // get a file info by model id and quant
  async $getFileInfo(params: LlmModelsFuncParams) {
    const result = await this._getUrlByParams(params)
    return result
  }

  async $download(params: LlmModelsFuncParams) {
    let {overwrite} = params

    const {url, filepath, file, model} = await this._getUrlByParams(params)

    if (file.downloaded) {
      throw new AlreadyExistsError(`file "${filepath}"`, this.name + '.download')
    }

    overwrite = overwrite ?? false
    const result = await download.post({
      url,
      filepath,
      overwrite,
      start: true,
    })

    if (result?.id) {
      const that = this
      download.on(DownloadStatusEventName+':'+result.id, function(_name: string, status: FileDownloadStatus, idInfo: {url: string, id: string, filepath: string}) {
        if (status === 'completed') {
          file.downloaded = true
          file.location = path.resolve(download.rootDir!, idInfo.filepath)
          model.downloaded = true
          that.put({val: model as any})
        }
      })
    }
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

function isSameFileSize(location: string, file: AIModelFileSettings) {
  if (file.file_size) {
    const stat = fs.statSync(location)
    if (stat.size !== file.file_size) {
      console.warn(file.file_name, 'file size not match', location)
      return false
    }
  }
}

function verifyModelFileExists(file: AIModelFileSettings|AIModelFileSettings[], options: {rootDir: string, changed?: boolean}) {
  const {rootDir} = options
  let isExists: boolean|undefined
  if (Array.isArray(file)) {
    for (const f of file) {
      isExists = verifyModelFileExists(f, options)
      if (!isExists) {break}
    }
  } else {
    const defaultLocation = path.resolve(rootDir, file.file_name!)
    const location = file.location ?? defaultLocation
    isExists = fs.existsSync(location)
    if (isExists) {
      if (isSameFileSize(location, file) === false) {
        isExists = false
      } else {
        file.downloaded = true
        if (file.location !== location) {
          file.location = location
          options.changed = true
        }
      }
    } else {
      if (file.location) {
        options.changed = true
        console.error('verifyModelFileExists:', file.file_name, 'model location not exists', location)
        delete file.location
        if (location !== defaultLocation) {
          isExists = fs.existsSync(defaultLocation)
          if (isExists) {
            if (isSameFileSize(defaultLocation, file) === false) {
              isExists = false
            } else {
              file.location = defaultLocation
            }
          }
        }
      }
    }
    if (file.downloaded && !isExists) {
      file.downloaded = false
      options.changed = true
    }
  }
  return isExists
}
