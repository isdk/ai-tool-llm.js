import { AIResult, EventBusName, NotImplementationError, ToolFunc, event } from '@isdk/ai-tool'
import { LLMArguments } from './llm-options'
import { AIModelNameRules, AIProviderSettings } from './llm-settings'

export interface LLMProvider extends AIProviderSettings {
}

const LLMProviders: {[name: string]: LLMProvider} = {}

export class LLMProvider extends ToolFunc {
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
    throw new NotImplementationError
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
}

// backendEventable(LLMProvider)
LLMProvider.defineProperties(LLMProvider, LLMProviderSchema)

export const llm = new LLMProvider('llm')
