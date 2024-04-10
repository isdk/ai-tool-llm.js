import { AIModelSkillName } from "./llm-skills"

export enum AIModelType {
  t2t,  // text to text
  i2t,  // image to text
  a2t,  // audio to text
  t2i,  // text to image
  t2a,  // text to audio
}

export type AIModelNameRuleFn = (name: string) => boolean

export type AIModelNameRule = string|RegExp
export type AIModelNameRules = AIModelNameRule|AIModelNameRule[]|AIModelNameRuleFn

export interface AIProviderSettings {
  rule: AIModelNameRules
  prior: number
  supports: AIModelType|AIModelType[]
  apiKey?: string
  apiUrl?: string
}

export interface AIModelSettings {
  name: string
  type: AIModelType|AIModelType[]
  // the model scale/size: 7b, 13b,...
  scale: string
  url?: string
  location?:string
  skills?: AIModelSkillName[]
  provider?: string
  chatTemplate?: string
  [name: string]: any
}

// the projector model
export interface AILavaModelSettings extends AIModelSettings {
  // the llava supported models
  model: AIModelNameRule|AIModelNameRule[]
}

export const LLMProviderSchema = {
  rule: {type: ['string', 'RegExp', 'function']},
  enabled: {type: 'boolean', value: true},
  apiUrl: {type: 'string'},
  apiKey: {type: 'string'},
  supports: {
    type: 'number',
    anyOf: [
      {type: 'number'},
      {
        type: 'array',
        items: {
          type: 'number',
        },
      },
    ],
  },
  prior: {type: 'number'},
}
