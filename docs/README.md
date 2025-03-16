**@isdk/ai-tool-llm**

***

# ai-tool-llm

## LLMProvider

LLMProvider serves as the base class for all Large Language Model (LLM) backends, enabling support for various model types from a single backend. This class is pivotal in obtaining outputs from any LLM.

Every LLM provider must define:

* `rule`: `RegExp | string | function`: optional, Determines which model names this provider will service. For instance, lama.cpp might use the pattern `/[.]gguf$/`.
* `async function(input: LLMArguments)`: Accepts input and returns the LLM's output. The function's objective is to generate output based on the input, which can be either a streamed JSON object or a non-streamed response.

Note: the registered provider name will be treat as model url protocol name part.

The LLM's output is structured as a JSON Object adhering to the following schema:

```js
export type AITextGenerationFinishReason =
  | 'stop'       // Model generated a stop sequence
  | 'length'     // Maximum token limit reached
  | 'content-filter' // Content violated filters
  | 'tool-calls'  // Model invoked tool calls
  | 'abort',      // aborted by user or timeout for stream
  | 'error'      // Model halted due to an error
  | 'other'      // Other termination reasons
  | null;        // No specified reason

export interface AIResult<TValue = any, TOptions = any> {
  /**
   * Generated content.
   */
  content?: TValue;

  /**
   * Reason for generation termination.
   */
  finishReason?: AITextGenerationFinishReason;

  /**
   * Optional parameters associated with the result.
   */
  options?: TOptions;
}
```

In the case of streaming output, the returned JSON objects exclude `finishReason` and only include `content`. `options` are optional.

To register diverse LLM backends and retrieve results, invoke the LLM method. If no specific LLM backend is designated, the default one set via current will process requests. It also facilitates querying the parameter size of the `current` LLM model.

Static method `getByModel(modelName: string)` is employed to determine the appropriate Provider based on the model name provided.
