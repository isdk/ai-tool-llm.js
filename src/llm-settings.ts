import { FileDownloadStatus } from "@isdk/ai-tool-downloader"
import { AIOptions } from "./llm-options"
import { AIModelSkillName } from "./llm-skills"
import { AIModelNameRule, AIModelNameRules } from "@isdk/ai-tool"

export const AIModelSources = ['huggingface'] as const
export type AIModelSource = (typeof AIModelSources[number]) & string

export enum AIModelType {
  chat,  // text to text
  vision,  // image to text
  stt,  // audio to text
  drawing,  // text to image
  tts,  // text to audio
  embedding,
  infill, // fill in middle text
}

export interface AIProviderSettings {
  rule: AIModelNameRules
  prior: number
  supports: AIModelType|AIModelType[]
  apiKey?: string
  apiUrl?: string
}

export enum AIModelQuantType {
  F32           = 0,
  F16           = 1,  // except 1d tensors
  Q4_0          = 2,  // except 1d tensors
  Q4_1          = 3,  // except 1d tensors
  Q4_1_SOME_F16 = 4,  // tok_embeddings.weight and output.weight are F16
  // Q4_2       = 5,  // support has been removed
  // Q4_3       = 6,  // support has been removed
  Q8_0          = 7,  // except 1d tensors
  Q5_0          = 8,  // except 1d tensors
  Q5_1          = 9,  // except 1d tensors
  Q2_K          = 10, // except 1d tensors
  Q3_K_S        = 11, // except 1d tensors
  Q3_K_M        = 12, // except 1d tensors
  Q3_K_L        = 13, // except 1d tensors
  Q4_K_S        = 14, // except 1d tensors
  Q4_K_M        = 15, // except 1d tensors
  Q5_K_S        = 16, // except 1d tensors
  Q5_K_M        = 17, // except 1d tensors
  Q6_K          = 18, // except 1d tensors
  IQ2_XXS       = 19, // except 1d tensors
  IQ2_XS        = 20, // except 1d tensors
  Q2_K_S        = 21, // except 1d tensors
  IQ3_XS        = 22, // except 1d tensors
  IQ3_XXS       = 23, // except 1d tensors
  IQ1_S         = 24, // except 1d tensors
  IQ4_NL        = 25, // except 1d tensors
  IQ3_S         = 26, // except 1d tensors
  IQ3_M         = 27, // except 1d tensors
  IQ2_S         = 28, // except 1d tensors
  IQ2_M         = 29, // except 1d tensors
  IQ4_XS        = 30, // except 1d tensors
  IQ1_M         = 31, // except 1d tensors
  BF16          = 32, // except 1d tensors
  Q4_0_4_4      = 33, // except 1d tensors
  Q4_0_4_8      = 34, // except 1d tensors
  Q4_0_8_8      = 35, // except 1d tensors

  GUESSED = 1024, // not specified in the model file
  // the standard quantization method with the embeddings and output weights quantized to Q8_0:
  Q4_K_L = 1025,
  Q3_K_XL = 1026,
  Q2_K_L = 1027,
}

export interface AIModelFileSettings {
  /**
   * the model unique name, include extension name
   */
  file_name?: string
  /**
   * the quanted model size in bytes
   */
  size?: number
  file_size?: number
  quant?: AIModelQuantType
  location?: string
  // the split file index
  index?: number
  count?: number
  url?: string
  hf_path?: string
  downloaded?: boolean
  downloading?: FileDownloadStatus
  [name: string]: any
}

export interface AIModelSimpleSettings {
  // the unique id in db: author/name
  _id?: string
  /**
   * the model unique name, but not the unique in db
   */
  name?: string
  type?: AIModelType
  supports?: AIModelType|AIModelType[]
  source?: AIModelSource
  /**
   * the model params size in bytes
   */
  params_size?: number
  /**
   * the content length in train
   */
  content_size?: number
  // the model params scale/size: 7b, 13b,...
  scale?: string
  /**
   * the remote url to download the model
   */
  url?: string
  /**
   * hugging-face repo name
   */
  hf_repo?: string
  // hf_path?: string
  skills?: AIModelSkillName[]
  provider?: string
  featured?: boolean
  likes?: number
  downloads?: number
  title?: string
  description?: string
  author?: string
  license?: string
  logo?: string
  chat_template?: string
  config?: AIOptions
  language?: string[]
  createdAt?: Date
  updatedAt?: Date
  // which means some files are downloaded
  downloaded?: boolean
  [name: string]: any
}

export type AIModelParams = AIModelSimpleSettings & AIModelFileSettings

export interface AIModelSettings extends AIModelSimpleSettings {
  files?: AIModelFileSettings[]
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
  model: {type: 'string'},
}
