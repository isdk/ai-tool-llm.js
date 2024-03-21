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
  url?: string
}

export interface AIModelSettings {
  name: AIModelNameRule
  type: AIModelType|AIModelType[]
  // the model scale/size: 7b, 13b,...
  scale: string
  url?: string
  location?:string
  skills?: AIModelSkillName[]
  provider?: string
  // the system prompt template
  prompt?: string
  [name: string]: any
}

// the projector model
export interface AILavaModelSettings extends AIModelSettings {
  // the llava supported models
  model: AIModelNameRule|AIModelNameRule[]
}
