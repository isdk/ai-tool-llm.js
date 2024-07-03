import path from 'path'
import fs from 'fs'
import {
  ErrorCode,
  FuncItem,
  CommonError,
  ServerFuncParams,
  NotFoundError,
} from "@isdk/ai-tool"

import { KVSqliteResFunc, KVSqliteResFuncParams,  } from "@isdk/ai-tool-sqlite"
import { DownloadName, DownloadStatusEventName, FileDownloadStatus, download } from '@isdk/ai-tool-downloader'

import { AIModelFileSettings, AIModelQuantType, AIModelSettings } from './llm-settings'
import { getHFUrl } from './utils'
import { LLMProviderName, llm } from './llm-provider'
import { LLMArguments } from './llm-options'

export const MODELS_DB_NAME = '.modelsdb'

interface LlmModelsFuncParams extends AIModelSettings, KVSqliteResFuncParams {
  dryRun?: boolean
}

function findModelFileByQuant(files: AIModelFileSettings[], quant: AIModelQuantType) {
  return files.find(file => Array.isArray(file) ? file[0]?.quant === quant : file.quant === quant)
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
    const docs = super.getDocsFromDir(dir)
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
    } else {
      if (model.downloaded === true) {
        delete model.downloaded
        changed = true
      }
    }
    return changed
  }

  isStream(params: ServerFuncParams) {
    return params?.stream
  }

  getFileInfo(id: string, quant: AIModelQuantType, model?: AIModelSettings) {
    if (!model) {model = this.db.get(id) as AIModelSettings}
    if (!model) {
      throw new NotFoundError(id, this.name + '.getFileInfo')
    }
    const fileInfo = findModelFileByQuant(model.files!, quant) as AIModelFileSettings|AIModelFileSettings[]
    if (!fileInfo) {
      throw new NotFoundError(`${id}.${quant}`, this.name + '.getFileInfo')
    }
    if (Array.isArray(fileInfo)) {
      fileInfo[0].hf_repo = model.hf_repo
    } else {
      fileInfo.hf_repo = model.hf_repo
    }
    return fileInfo
  }

  getPath(fileInfo: string|AIModelSettings, quant: AIModelQuantType) {
    if (typeof fileInfo === 'string') {
      fileInfo = this.getFileInfo(fileInfo, quant)
    }
    if (Array.isArray(fileInfo)) {
      fileInfo = fileInfo[0] as AIModelFileSettings
    }
    const result = fileInfo.location ?? fileInfo.file_name
    return result
  }

  getUrl(fileInfo: string|AIModelFileSettings, quant: AIModelQuantType) {
    if (typeof fileInfo === 'string') {
      fileInfo = this.getFileInfo(fileInfo, quant)
    }
    if (Array.isArray(fileInfo)) {
      fileInfo = fileInfo[0] as AIModelFileSettings
    }
    const result = fileInfo.url ?? this.getUrlFromHf(fileInfo)
    return result
  }

  // internal method, must call getFileInfo first to get hf_repo
  getUrlFromHf(fileInfo: AIModelFileSettings, hubUrl?: string) {
    if (fileInfo.hf_repo && fileInfo.hf_path) {

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

    const file = this.getFileInfo(id as any, quant, model)

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
    let {overwrite} = params || {}
    overwrite = overwrite ?? false
    const hubUrl = params.url
    const dryRun = params.dryRun

    const {file, model} = await this._getUrlByParams(params)

    const files = Array.isArray(file) ? file : [file]

    // TODO: refactor this for other sources
    // the getUrlFromHf need hf_repo
    files.forEach(file => file.hf_repo = model.hf_repo)
    if (dryRun) {
      return files.filter(file => !file.downloaded).map((file) => {
        const url = this.getUrlFromHf(file, hubUrl) as string
        return {
          id: download.getId({url})!,
          url,
          filepath: file.location ?? file.file_name,
          size: file.size,
          downloaded: file.downloaded,
          model: model._id,
          quant: file.quant,
        }
      })
    }

    let taskIds: ({id: string, [name: string]: any}|undefined)[] = []
    const that = this
    for (const file of files) {
      if (file.downloaded) {
        continue
      }

      const url = this.getUrlFromHf(file, hubUrl)
      if (!url) {throw new CommonError('Can not get url for ' + file.file_name, this.name + '.$download', ErrorCode.InvalidArgument)}
      const filepath = file.location ?? file.file_name
      const result = await download.post({
        url,
        filepath,
        overwrite,
        start: true,
      }) as {id: string, [name: string]: any}

      if (result?.id) {
        result.url = url
        result.filepath = filepath
        download.on(DownloadStatusEventName+':'+result.id, function(_name: string, status: FileDownloadStatus, idInfo: {url: string, id: string, filepath: string}) {
          if (status === 'completed') {
            file.downloaded = true
            file.location = path.resolve(download.rootDir!, idInfo.filepath)
            model.downloaded = true
            that.put({val: model as any})
          }
        })
      }
      taskIds.push(result)
    }

    return taskIds.length === 1 ? taskIds[0] : taskIds.length > 0 ? taskIds: undefined;
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
      const _isExists = verifyModelFileExists(f, options)
      if (!_isExists) {
        isExists = false
      }
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
    if (file.downloaded != isExists) {
      options.changed = true
    }
    if (isExists) {file.downloaded = isExists} else {delete file.downloaded}
  }
  return isExists
}
