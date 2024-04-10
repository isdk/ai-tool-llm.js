import { AIResult, EventBusName, NotFoundError, NotImplementationError, ToolFunc, event } from '@isdk/ai-tool'
import { LLMArguments } from './llm-options'
import { AIModelNameRules, AIProviderSettings } from './llm-settings'

export interface LLMProvider extends AIProviderSettings {
  listModels?(): Promise<string[]|undefined>
  updateModel?(modelName: string, model: any): Promise<any>
  addModel?(modelName: string, model: any): Promise<any>
  deleteModel?(modelName: string): Promise<any>
}

const LLMProviders: {[name: string]: LLMProvider} = {}

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

  static getByModel(modelName: string) {
    const items = this.items
    for (const name of Object.keys(items)) {
      const item = items[name]
      if (item.isModelNameMatched(modelName)) return item
    }
  }

  static getCurrentProvider() {
    if (LLMProvider.current) {
      return LLMProvider.get(LLMProvider.current) as LLMProvider
    }
  }

  isModelNameMatched(modelName: string, rule?: AIModelNameRules) {
    if (!rule) {rule = this.rule}
    switch (typeof rule) {
      case 'string':
        if (modelName === rule) {return true}
        break
      case 'object':
        if (Array.isArray(rule)) {
          for (const item of rule) {
            if (typeof item === 'string') {
              if (modelName === item) {return true}
            } else if (item instanceof RegExp) {
              if (item.test(modelName)) {return true}
            }
          }
        } else if (rule instanceof RegExp) {
          if (rule.test(modelName)) {return true}
        }
        break
      case 'function':
        if (rule.call(this, modelName)) {return true}
        break
    }
    return false
  }

  async func(input: LLMArguments): Promise<AIResult> {
    const current = LLMProvider.getCurrentProvider()
    if (current) {
      return current.func(input)
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
      throw new NotFoundError(`no provider named ${name}`)
    }
  }

  async getModelInfo(modelName: string): Promise<{provider?: string; [name:string]:any}|undefined> {
    const provider = LLMProvider.getByModel(modelName)
    if (provider) {
      const result = await provider.getModelInfo(modelName)
      if (result) {
        result['provider'] = provider.name
        return result
      }
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

export const LLMProviderSchema = {
  rule: {type: ['string', 'RegExp']},
  enabled: {type: 'boolean', value: true},
  url: {type: 'string'},
}

// backendEventable(LLMProvider)
LLMProvider.defineProperties(LLMProvider, LLMProviderSchema)

export const llm = new LLMProvider('llm')
