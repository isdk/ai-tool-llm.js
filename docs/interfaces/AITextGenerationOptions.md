[@isdk/ai-tool-llm](../README.md) / [Exports](../modules.md) / AITextGenerationOptions

# Interface: AITextGenerationOptions

## Hierarchy

- [`AIOptions`](AIOptions.md)

  ↳ **`AITextGenerationOptions`**

## Table of contents

### Properties

- [content\_size](AITextGenerationOptions.md#content_size)
- [frequency\_penalty](AITextGenerationOptions.md#frequency_penalty)
- [gen\_count](AITextGenerationOptions.md#gen_count)
- [max\_tokens](AITextGenerationOptions.md#max_tokens)
- [presence\_penalty](AITextGenerationOptions.md#presence_penalty)
- [response\_format](AITextGenerationOptions.md#response_format)
- [seed](AITextGenerationOptions.md#seed)
- [stop](AITextGenerationOptions.md#stop)
- [stop\_words](AITextGenerationOptions.md#stop_words)
- [stream](AITextGenerationOptions.md#stream)
- [temperature](AITextGenerationOptions.md#temperature)
- [top\_k](AITextGenerationOptions.md#top_k)
- [top\_p](AITextGenerationOptions.md#top_p)
- [trim](AITextGenerationOptions.md#trim)

## Properties

### content\_size

• `Optional` **content\_size**: `number`

Specify the context window size of the model that you have loaded.

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:37](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L37)

___

### frequency\_penalty

• `Optional` **frequency\_penalty**: `number`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:81](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L81)

___

### gen\_count

• `Optional` **gen\_count**: `number`

Number of texts to generate.

Specifies the number of responses or completions the model should generate for a given prompt.
This is useful when you need multiple different outputs or ideas for a single prompt.
The model will generate 'n' distinct responses, each based on the same initial prompt.
In a streaming model this will result in both responses streamed back in real time.

Does nothing if the model does not support this setting.

Example: `gen_count: 3` // The model will produce 3 different responses.

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:68](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L68)

___

### max\_tokens

• `Optional` **max\_tokens**: `number`

Specifies the maximum number of tokens (words, punctuation, parts of words) that the model can generate in a single response.
It helps to control the length of the output.

Does nothing if the model does not support this setting.

Example: `max_tokens: 1000`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:31](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L31)

___

### presence\_penalty

• `Optional` **presence\_penalty**: `number`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:82](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L82)

___

### response\_format

• `Optional` **response\_format**: [`AIResponseFormat`](AIResponseFormat.md)

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:80](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L80)

___

### seed

• `Optional` **seed**: `number`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:83](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L83)

___

### stop

• `Optional` **stop**: `string` \| `string`[]

the alias of stop_words

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:54](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L54)

___

### stop\_words

• `Optional` **stop\_words**: `string` \| `string`[]

Stop sequences to use.
Stop sequences are an array of strings or a single string that the model will recognize as end-of-text indicators.
The model stops generating more content when it encounters any of these strings.
This is particularly useful in scripted or formatted text generation, where a specific end point is required.
Stop sequences not included in the generated text.

Does nothing if the model does not support this setting.

Example: `stop_words: ['\n', 'END']`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:50](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L50)

___

### stream

• `Optional` **stream**: `boolean`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:78](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L78)

___

### temperature

• `Optional` **temperature**: `number`

Adjust the randomness of the generated text.

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:21](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L21)

___

### top\_k

• `Optional` **top\_k**: `number`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:85](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L85)

___

### top\_p

• `Optional` **top\_p**: `number`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:84](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L84)

___

### trim

• `Optional` **trim**: `boolean`

When true, the leading and trailing white space and line terminator characters
are removed from the generated text.

Default: true.

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:76](https://github.com/isdk/ai-tool-llm.js/blob/3f5b7587d36e42fec20e053d3cf13eddc9014435/src/llm-options.ts#L76)
