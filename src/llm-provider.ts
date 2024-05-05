import {
  AIResult,
  EventBusName,
  event,
  isModelNameMatched,
  NotFoundError,
  NotImplementationError,
  ToolFunc,
  type AIChatMessageParam,
  type ServerFuncParams,
  type AIModelNameRules,

} from '@isdk/ai-tool'
import { AIPromptFitResult, AIPromptResult, AIPromptType, AIPromptsName, PromptTemplateData, formatPrompt } from '@isdk/ai-tool-prompt'
import { LLMArguments } from './llm-options'
import { AIModelParams, AIProviderSettings, LLMProviderSchema } from './llm-settings'
import { paramsSizeToScaleStr } from './utils'

export interface LLMProvider extends AIProviderSettings {
  listModels?(): Promise<string[]|undefined>
  updateModel?(modelName: string, model: any): Promise<any>
  addModel?(modelName: string, model: any): Promise<any>
  deleteModel?(modelName: string): Promise<any>
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
  depends = { [EventBusName]: event }

  static getByModel(modelName?: string) {
    if (modelName) {
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
    const provider = LLMProvider.getByModel(input.model)
    if (provider) {
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
    const prompts = ToolFunc.get(AIPromptsName)
    if (modelName) {
      if (prompts) {
        const type = options.type ?? 'system'
        const promptInfo = await prompts.getPrompt({model: modelName, type}) as AIPromptResult
        if (promptInfo) {
          chatTemplate = promptInfo
        }
      }
    }
    if (!chatTemplate && modelInfo?.chat_template) {
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
      chatTemplate = await prompts.getDefaultPrompt() as AIPromptResult
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
    } = {}
  ) {
    let chatTemplate: string|AIPromptResult|undefined = options.chatTemplate
    if (!modelInfo || typeof modelInfo === 'string') {
      modelInfo = await this.getModelInfo(modelInfo)
    }
    const add_generation_prompt = options.add_generation_prompt ?? true
    const data: PromptTemplateData = {messages, add_generation_prompt, bos_token: ''}
    if (modelInfo) {
      if (modelInfo.bos_token) {data.bos_token = modelInfo.bos_token}
      if (modelInfo.eos_token) {data.eos_token = modelInfo.eos_token}
      if (modelInfo.eot_token) {data.eot_token = modelInfo.eot_token}
    }
    if (!chatTemplate) {
      chatTemplate = await this.getChatTemplate(modelInfo, options)
      if (chatTemplate?.version) {
        let version: string|AIPromptFitResult[]|undefined = chatTemplate.version
        if (Array.isArray(version)) {
          const isDefault = version.indexOf('@')
          version = isDefault ? '@' : version[0]
        }
        if (version) {
          data.version = version
        }
      }
    }
    if (chatTemplate) {
      options.chatTemplate = chatTemplate
      return await formatPrompt(data, chatTemplate.prompt)
    }
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
