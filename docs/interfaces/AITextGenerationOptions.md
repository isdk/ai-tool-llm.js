[**@isdk/ai-tool-llm**](../README.md)

***

[@isdk/ai-tool-llm](../globals.md) / AITextGenerationOptions

# Interface: AITextGenerationOptions

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:19](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L19)

## Extends

- [`AIOptions`](AIOptions.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### content\_size?

> `optional` **content\_size**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:39](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L39)

Specify the context window size of the model that you have loaded.

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:83](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L83)

***

### gen\_count?

> `optional` **gen\_count**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:70](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L70)

Number of texts to generate.

Specifies the number of responses or completions the model should generate for a given prompt.
This is useful when you need multiple different outputs or ideas for a single prompt.
The model will generate 'n' distinct responses, each based on the same initial prompt.
In a streaming model this will result in both responses streamed back in real time.

Does nothing if the model does not support this setting.

Example: `gen_count: 3` // The model will produce 3 different responses.

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:33](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L33)

Specifies the maximum number of tokens (words, punctuation, parts of words) that the model can generate in a single response.
It helps to control the length of the output.

Does nothing if the model does not support this setting.

Example: `max_tokens: 1000`

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:84](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L84)

***

### response\_format?

> `optional` **response\_format**: [`AIResponseFormat`](AIResponseFormat.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:82](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L82)

***

### seed?

> `optional` **seed**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:85](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L85)

***

### stop?

> `optional` **stop**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:56](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L56)

the alias of stop_words

***

### stop\_words?

> `optional` **stop\_words**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:52](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L52)

Stop sequences to use.
Stop sequences are an array of strings or a single string that the model will recognize as end-of-text indicators.
The model stops generating more content when it encounters any of these strings.
This is particularly useful in scripted or formatted text generation, where a specific end point is required.
Stop sequences not included in the generated text.

Does nothing if the model does not support this setting.

Example: `stop_words: ['\n', 'END']`

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:80](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L80)

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:23](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L23)

Adjust the randomness of the generated text.

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:87](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L87)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:86](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L86)

***

### trim?

> `optional` **trim**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:78](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L78)

When true, the leading and trailing white space and line terminator characters
are removed from the generated text.

Default: true.
