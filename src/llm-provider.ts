import {
  AIResult,
  encodeLLMTokens,
  EventBusName,
  event,
  isModelNameMatched,
  NotFoundError,
  NotImplementationError,
  ToolFunc,
  type AIChatMessageParam,
  type ServerFuncParams,
  type AIModelNameRules,
  matchUrlProtocol,
  paramsSizeToScaleStr,
  CommonError,
  ErrorCode,
} from '@isdk/ai-tool'
import { AIPromptFitResult, AIPromptResult, AIPromptSettings, AIPromptType, AIPromptsName, PromptTemplateData, formatPrompt, getLLMParameters } from '@isdk/ai-tool-prompt'
import { AIOptions, LLMArguments } from './llm-options'
import { AIModelParams, AIProviderSettings, LLMProviderSchema } from './llm-settings'

export interface AITokenizeOptions extends AIOptions {
  model?: string
}

export interface LLMProvider extends AIProviderSettings {
  listModels?(): Promise<string[]|undefined>
  updateModel?(modelName: string, model: any): Promise<any>
  addModel?(modelName: string, model: any): Promise<any>
  deleteModel?(modelName: string): Promise<any>
  model?: string
}

const LLMProviders: {[name: string]: LLMProvider} = {}
export const LLMProviderName = 'llm'

export class LLMProvider extends ToolFunc {
  static current?: string

  static items = LLMProviders

  description = 'run LLM model'
  params = {
    model: {name: 'model', type: 'string', description: 'the LLM model name'},
    value: {name: 'value', type: 'any', description: 'the value pass to model'},
    options: {name: 'options', type: 'any', description: 'the LLM model options'},
  }
  result = 'object'
  depends: {[name: string]: ToolFunc} = { [EventBusName]: event }

  static getByModel(modelName?: string) {
    if (modelName) {
      const protocol = matchUrlProtocol(modelName)
      if (protocol) {
        const provider = LLMProvider.get(protocol) as LLMProvider
        if (provider) {return provider}
        throw new NotFoundError(`provider:${protocol}`, modelName)
      }
      const items = this.items
      for (const name of Object.keys(items)) {
        const item = items[name]
        if (item.isModelNameMatched(modelName)) return item
      }
    } else {
      return this.getCurrentProvider()
    }
  }

  static getCurrentProvider() {
    if (LLMProvider.current) {
      return LLMProvider.get(LLMProvider.current) as LLMProvider
    }
  }

  isModelNameMatched(modelName: string, rule?: AIModelNameRules) {
    if (!rule) {rule = this.rule}
    return isModelNameMatched.call(this, modelName, rule)
  }

  isStream(params: ServerFuncParams) {
    return params?.stream
  }

  async func(input: LLMArguments): Promise<AIResult> {
    const model = input.model
    const provider = input.provider ? LLMProvider.get(input.provider) as LLMProvider ?? LLMProvider.getByModel(model) : LLMProvider.getByModel(model)
    if (provider) {
      if (model) {
        const protocol = matchUrlProtocol(model)
        if (protocol) {
          input.model = model.replace(protocol+'://', '')
        }
      }
      if (input.onlyTokenizer) {
        return provider.tokenize(input.value, input)
      }
      return provider.func(input)
    } else {
      throw new NotImplementationError('no current provider')
    }
  }

  listProviders(options?: {filter?: AIModelNameRules, all?: boolean}) {
    const items = LLMProvider.items
    const filter = options?.filter
    const all = options?.all
    const result = {} as {[name: string]: LLMProvider}
    for (const [name, item] of Object.entries(items)) {
      if (all || item.enabled) {
        if (!filter || item.isModelNameMatched(name, filter)) {
          result[name] = item
        }
      }
    }
    return result
  }

  getCurrentProvider() {
    return LLMProvider.getCurrentProvider()
  }

  setCurrentProvider(name: string) {
    if (LLMProvider.get(name)) {
      LLMProvider.current = name
    } else {
      throw new NotFoundError(name, 'LLMProvider')
    }
  }

  async getModelInfo(modelName?: string): Promise<AIModelParams|undefined> {
    const provider = LLMProvider.getByModel(modelName)
    if (provider) {
      const result = await provider.getModelInfo(modelName)
      if (result) {
        result['provider'] = provider.name
        if (result.params_size && !result.scale) {
          result.scale = paramsSizeToScaleStr(result.params_size)
        }
        return result
      }
    }
  }

  async getChatTemplate(modelInfo?: AIModelParams|string, options: {defaultTemplate?: boolean, type?: AIPromptType} = {}) {
    let modelName: string|undefined = modelInfo as string
    if (!modelInfo || typeof modelInfo === 'string') {
      modelInfo = await this.getModelInfo(modelInfo)
    } else {
      modelName = modelInfo.name
    }
    let chatTemplate: AIPromptResult | undefined
    const promptsTool = ToolFunc.get(AIPromptsName)
    if (modelName) {
      if (promptsTool) {
        const type = options.type ?? 'system'
        const promptInfo = await promptsTool.getPrompt({model: modelName, type}) as AIPromptResult
        if (promptInfo) {
          chatTemplate = promptInfo
        }
      }
    }
    if ((!chatTemplate || chatTemplate.prompt.priority! < 0) && modelInfo?.chat_template) {
      chatTemplate = {
        prompt: {
          template: modelInfo.chat_template,
          type: 'system',
          templateFormat: 'hf',
        }
      } as AIPromptResult
    }
    const requiredDefault = options.defaultTemplate ?? true
    if (!chatTemplate && requiredDefault) {
      chatTemplate = await promptsTool.getDefaultPrompt() as AIPromptResult
    }

    return chatTemplate
  }

  async formatPrompt(
    messages: AIChatMessageParam[],
    modelInfo?: AIModelParams|string,
    options: {
      defaultTemplate?: boolean,
      add_generation_prompt?: boolean,
      chatTemplate?: AIPromptResult,
      type?: AIPromptType,
      prompt?: any,
      SystemTemplate?: AIPromptResult,
    } = {}
  ) {
    let chatTemplate: string|AIPromptResult|undefined = options.chatTemplate || options.SystemTemplate

    if (!modelInfo || typeof modelInfo === 'string') {
      modelInfo = await this.getModelInfo(modelInfo)
    }
    const lastMsg = messages[messages.length - 1]
    const add_generation_prompt = lastMsg?.role === 'assistant' ? false : options.add_generation_prompt ?? true

    const data: PromptTemplateData = {bos_token: '', ...options, messages, add_generation_prompt}
    if (modelInfo) {
      if (modelInfo.bos_token) {data.bos_token = modelInfo.bos_token}
      if (modelInfo.eos_token) {data.eos_token = modelInfo.eos_token}
      if (modelInfo.eot_token) {data.eot_token = modelInfo.eot_token}
    }
    if (!chatTemplate || typeof chatTemplate === 'string') {
      chatTemplate = await this.getChatTemplate(chatTemplate || modelInfo, options)
      if (chatTemplate?.version) {
        let version: string|AIPromptFitResult[]|undefined = chatTemplate.version
        if (Array.isArray(version)) {
          // const isDefault = version.indexOf('@')
          // version = isDefault ? '@' : version[0]
          version = version[0]
        }
        if (version) {
          data.version = version
        }
      }
    } else if (!chatTemplate.prompt) {
      const id = chatTemplate.id
      let version = chatTemplate.version
      if (!id) {
        throw new CommonError('SystemTemplate missing id', 'LLMProvider.formatPrompt', ErrorCode.InvalidArgument)
      }
      const promptsTool = ToolFunc.get(AIPromptsName)
      chatTemplate = await promptsTool.get(id) as AIPromptResult
      if (!chatTemplate) {
        throw new NotFoundError(id, 'LLMProvider.formatPrompt')
      }
      if (!version) {version = chatTemplate.version}
      if (Array.isArray(version)) {
        version = version[0]
      }
      if (version) {
        data.version = version
      }
    }
    if (chatTemplate) {
      options.chatTemplate = chatTemplate
      return await formatPrompt(data, chatTemplate.prompt)
    }
  }

  getDefaultParameters(chatTemplate: AIPromptSettings, model: string) {
    return getLLMParameters(chatTemplate, model)
  }

  async tokenize(text: string|AIChatMessageParam[], options: AITokenizeOptions = {}) {
    const model = options.model ?? 'qwen2.5'
    if (Array.isArray(text)) {
      const prompt = await this.formatPrompt(text, model, options as any)
      if (!prompt) {throw new NotFoundError('ChatTemplate:'+ model, 'LLMProvider.tokenize')}
      text = prompt
    }
    return encodeLLMTokens(text, model)
  }

  async countTokens(text: string|AIChatMessageParam[], options?: AITokenizeOptions) {
    const tokens = await this.tokenize(text, options)
    return tokens?.length
  }
}

export function joinUrl(baseUrl: string, url: string) {
  // ensure base path ends without a slash
  if (baseUrl.endsWith("/")) {
    baseUrl = baseUrl.slice(0, -1)
  }

  // ensure path starts with a slash
  if (!url.startsWith("/")) {
    url = `/${url}`;
  }
  return `${baseUrl}${url}`
}

// backendEventable(LLMProvider)
LLMProvider.defineProperties(LLMProvider, LLMProviderSchema)

export const llm = new LLMProvider(LLMProviderName)
