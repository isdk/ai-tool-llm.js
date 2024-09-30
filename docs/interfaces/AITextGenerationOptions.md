[**@isdk/ai-tool-llm**](../README.md) • **Docs**

***

[@isdk/ai-tool-llm](../globals.md) / AITextGenerationOptions

# Interface: AITextGenerationOptions

## Extends

- [`AIOptions`](AIOptions.md)

## Properties

### content\_size?

> `optional` **content\_size**: `number`

Specify the context window size of the model that you have loaded.

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:39](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L39)

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:83](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L83)

***

### gen\_count?

> `optional` **gen\_count**: `number`

Number of texts to generate.

Specifies the number of responses or completions the model should generate for a given prompt.
This is useful when you need multiple different outputs or ideas for a single prompt.
The model will generate 'n' distinct responses, each based on the same initial prompt.
In a streaming model this will result in both responses streamed back in real time.

Does nothing if the model does not support this setting.

Example: `gen_count: 3` // The model will produce 3 different responses.

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:70](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L70)

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Specifies the maximum number of tokens (words, punctuation, parts of words) that the model can generate in a single response.
It helps to control the length of the output.

Does nothing if the model does not support this setting.

Example: `max_tokens: 1000`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:33](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L33)

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:84](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L84)

***

### response\_format?

> `optional` **response\_format**: [`AIResponseFormat`](AIResponseFormat.md)

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:82](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L82)

***

### seed?

> `optional` **seed**: `number`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:85](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L85)

***

### stop?

> `optional` **stop**: `string` \| `string`[]

the alias of stop_words

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:56](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L56)

***

### stop\_words?

> `optional` **stop\_words**: `string` \| `string`[]

Stop sequences to use.
Stop sequences are an array of strings or a single string that the model will recognize as end-of-text indicators.
The model stops generating more content when it encounters any of these strings.
This is particularly useful in scripted or formatted text generation, where a specific end point is required.
Stop sequences not included in the generated text.

Does nothing if the model does not support this setting.

Example: `stop_words: ['\n', 'END']`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:52](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L52)

***

### stream?

> `optional` **stream**: `boolean`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:80](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L80)

***

### temperature?

> `optional` **temperature**: `number`

Adjust the randomness of the generated text.

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:23](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L23)

***

### top\_k?

> `optional` **top\_k**: `number`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:87](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L87)

***

### top\_p?

> `optional` **top\_p**: `number`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:86](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L86)

***

### trim?

> `optional` **trim**: `boolean`

When true, the leading and trailing white space and line terminator characters
are removed from the generated text.

Default: true.

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:78](https://github.com/isdk/ai-tool-llm.js/blob/315c5c48f20c16c3cb62039cc17ee2a5600b85aa/src/llm-options.ts#L78)
