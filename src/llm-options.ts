import {get as getByPath, omit, set as setByPath } from 'lodash-es'
import { AIResult, } from "@isdk/ai-tool";

export interface AIOptions {
  [name: string]: any
}

const AIResponseFormatTypes = ['json_object', 'json_array'] as const

export type AIResponseFormatType = typeof AIResponseFormatTypes[number] | (string & { })

export interface AIResponseFormat {
  type: AIResponseFormatType
  schema?: any
}

export interface AITextGenerationOptions extends AIOptions {
  /**
   * Adjust the randomness of the generated text.
   */
  temperature?: number;

  /**
   * Specifies the maximum number of tokens (words, punctuation, parts of words) that the model can generate in a single response.
   * It helps to control the length of the output.
   *
   * Does nothing if the model does not support this setting.
   *
   * Example: `max_tokens: 1000`
   */
  max_tokens?: number | undefined;

  /**
   * Specify the context window size of the model that you have loaded.
   *
   */
  content_size?: number;

  /**
   * Stop sequences to use.
   * Stop sequences are an array of strings or a single string that the model will recognize as end-of-text indicators.
   * The model stops generating more content when it encounters any of these strings.
   * This is particularly useful in scripted or formatted text generation, where a specific end point is required.
   * Stop sequences not included in the generated text.
   *
   * Does nothing if the model does not support this setting.
   *
   * Example: `stop_words: ['\n', 'END']`
   */
  stop_words?: string|string[] | undefined;
  /**
   * the alias of stop_words
   */
  stop?: string|string[] | undefined;

  /**
   * Number of texts to generate.
   *
   * Specifies the number of responses or completions the model should generate for a given prompt.
   * This is useful when you need multiple different outputs or ideas for a single prompt.
   * The model will generate 'n' distinct responses, each based on the same initial prompt.
   * In a streaming model this will result in both responses streamed back in real time.
   *
   * Does nothing if the model does not support this setting.
   *
   * Example: `gen_count: 3` // The model will produce 3 different responses.
   */
  gen_count?: number;

  /**
   * When true, the leading and trailing white space and line terminator characters
   * are removed from the generated text.
   *
   * Default: true.
   */
  trim?: boolean;

  stream?: boolean

  response_format?: AIResponseFormat
  frequency_penalty?: number
  presence_penalty?: number
  seed?: number
  top_p?: number
  top_k?: number
}

export interface LLMArguments {
  model?: string
  value?: any
  options?: AIOptions
  provider?: string
}

export type AITextGenerationResult = AIResult<string>

/**
 * Maps properties from the provided options object to a new object according to the mappings defined in AIOptionsMap.
 * Supports both simple property names and paths (e.g., 'foo.bar') for nested properties.
 *
 * @param {TAIOptions | undefined} opts - The original options object whose properties (including nested ones) will be copied to the new object based on the mapping.
 * @param {Record<string, string> | undefined} AIOptionsMap - A mapping table defining how properties (or paths) in opts map to properties in the target object.
 *
 * @returns {TAIOptions} A new object containing properties copied from opts based on the defined mappings, including support for nested properties.
 *
 * @example
 * const originalOpts = { user: { name: 'Alice', age: 30 }, active: true };
 * const mapping = { 'user.name': 'userName', 'active': 'isActive' };
 * const mappedOpts = mapApiOptions(originalOpts, mapping);
 * // mappedOpts is now { userName: 'Alice', isActive: true }
 */
export function mapApiOptions<TAIOptions = any>(opts?: TAIOptions, AIOptionsMap?: Record<string, string>) {
  let result: any = omit(opts as any, Object.keys(AIOptionsMap || {}))
  if (opts) {
    if (AIOptionsMap) {
      for (const srcName in AIOptionsMap) {
        const destName = AIOptionsMap[srcName]
        const v = getByPath(opts, srcName)
        if (v != null) {
          result = setByPath(result, destName, v)
        }
      }
    }
  }
  return result as TAIOptions
}

// used to reverse AIOptionsMap
export const flip = (data: Record<string, string>) => Object.fromEntries(
  Object
    .entries(data)
    .map(([key, value]) => [value, key])
  );