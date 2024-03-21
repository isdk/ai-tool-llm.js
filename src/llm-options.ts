import { AIResult, } from "@isdk/ai-tool";

export interface AIOptions {
  [name: string]: any
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
  stop_words?: string[] | undefined;

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
}

export interface LLMArguments {
  model?: string
  value?: any
  options?: AIOptions
}

export type AITextGenerationResult = AIResult<string>

export type AITextGenerationFinishReason =
  | "stop"
  | "length"
  | 'tool_calls'
  | 'content_filter'
  | 'function_call'
  | null;

export function mapApiOptions<TAIOptions = any>(opts?: TAIOptions, AIOptionsMap?: Record<string, string>) {
  const result: any = {}
  if (opts) {
    for (const name in opts) {
      const v = opts[name]
      if (v == null) {continue}
      const n = AIOptionsMap?.[name] ?? name
      result[n] = v
    }
  }
  return result as TAIOptions
}

export const flip = (data: Record<string, string>) => Object.fromEntries(
  Object
    .entries(data)
    .map(([key, value]) => [value, key])
  );