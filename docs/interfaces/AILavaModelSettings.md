[@isdk/ai-tool-llm](../README.md) / [Exports](../modules.md) / AILavaModelSettings

# Interface: AILavaModelSettings

## Hierarchy

- [`AIModelSettings`](AIModelSettings.md)

  ↳ **`AILavaModelSettings`**

## Table of contents

### Properties

- [\_id](AILavaModelSettings.md#_id)
- [author](AILavaModelSettings.md#author)
- [chat\_template](AILavaModelSettings.md#chat_template)
- [config](AILavaModelSettings.md#config)
- [content\_size](AILavaModelSettings.md#content_size)
- [createdAt](AILavaModelSettings.md#createdat)
- [description](AILavaModelSettings.md#description)
- [downloaded](AILavaModelSettings.md#downloaded)
- [downloads](AILavaModelSettings.md#downloads)
- [featured](AILavaModelSettings.md#featured)
- [files](AILavaModelSettings.md#files)
- [hf\_repo](AILavaModelSettings.md#hf_repo)
- [language](AILavaModelSettings.md#language)
- [license](AILavaModelSettings.md#license)
- [likes](AILavaModelSettings.md#likes)
- [logo](AILavaModelSettings.md#logo)
- [model](AILavaModelSettings.md#model)
- [name](AILavaModelSettings.md#name)
- [params\_size](AILavaModelSettings.md#params_size)
- [provider](AILavaModelSettings.md#provider)
- [scale](AILavaModelSettings.md#scale)
- [skills](AILavaModelSettings.md#skills)
- [source](AILavaModelSettings.md#source)
- [supports](AILavaModelSettings.md#supports)
- [title](AILavaModelSettings.md#title)
- [type](AILavaModelSettings.md#type)
- [updatedAt](AILavaModelSettings.md#updatedat)
- [url](AILavaModelSettings.md#url)

## Properties

### \_id

• `Optional` **\_id**: `string`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[_id](AIModelSettings.md#_id)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:92](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L92)

___

### author

• `Optional` **author**: `string`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[author](AIModelSettings.md#author)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:126](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L126)

___

### chat\_template

• `Optional` **chat\_template**: `string`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[chat_template](AIModelSettings.md#chat_template)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:129](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L129)

___

### config

• `Optional` **config**: [`AIOptions`](AIOptions.md)

#### Inherited from

[AIModelSettings](AIModelSettings.md).[config](AIModelSettings.md#config)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:130](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L130)

___

### content\_size

• `Optional` **content\_size**: `number`

the content length in train

#### Inherited from

[AIModelSettings](AIModelSettings.md).[content_size](AIModelSettings.md#content_size)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:107](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L107)

___

### createdAt

• `Optional` **createdAt**: `Date`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[createdAt](AIModelSettings.md#createdat)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:132](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L132)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[description](AIModelSettings.md#description)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:125](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L125)

___

### downloaded

• `Optional` **downloaded**: `boolean`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[downloaded](AIModelSettings.md#downloaded)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:135](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L135)

___

### downloads

• `Optional` **downloads**: `number`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[downloads](AIModelSettings.md#downloads)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:123](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L123)

___

### featured

• `Optional` **featured**: `boolean`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[featured](AIModelSettings.md#featured)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:121](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L121)

___

### files

• `Optional` **files**: [`AIModelFileSettings`](AIModelFileSettings.md)[]

#### Inherited from

[AIModelSettings](AIModelSettings.md).[files](AIModelSettings.md#files)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:142](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L142)

___

### hf\_repo

• `Optional` **hf\_repo**: `string`

hugging-face repo name

#### Inherited from

[AIModelSettings](AIModelSettings.md).[hf_repo](AIModelSettings.md#hf_repo)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:117](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L117)

___

### language

• `Optional` **language**: `string`[]

#### Inherited from

[AIModelSettings](AIModelSettings.md).[language](AIModelSettings.md#language)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:131](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L131)

___

### license

• `Optional` **license**: `string`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[license](AIModelSettings.md#license)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:127](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L127)

___

### likes

• `Optional` **likes**: `number`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[likes](AIModelSettings.md#likes)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:122](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L122)

___

### logo

• `Optional` **logo**: `string`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[logo](AIModelSettings.md#logo)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:128](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L128)

___

### model

• **model**: `AIModelNameRule` \| `AIModelNameRule`[]

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:148](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L148)

___

### name

• `Optional` **name**: `string`

the model unique name, but not the unique in db

#### Inherited from

[AIModelSettings](AIModelSettings.md).[name](AIModelSettings.md#name)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:96](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L96)

___

### params\_size

• `Optional` **params\_size**: `number`

the model params size in bytes

#### Inherited from

[AIModelSettings](AIModelSettings.md).[params_size](AIModelSettings.md#params_size)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:103](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L103)

___

### provider

• `Optional` **provider**: `string`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[provider](AIModelSettings.md#provider)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:120](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L120)

___

### scale

• `Optional` **scale**: `string`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[scale](AIModelSettings.md#scale)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:109](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L109)

___

### skills

• `Optional` **skills**: [`AIModelSkillName`](../modules.md#aimodelskillname)[]

#### Inherited from

[AIModelSettings](AIModelSettings.md).[skills](AIModelSettings.md#skills)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:119](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L119)

___

### source

• `Optional` **source**: ``"huggingface"``

#### Inherited from

[AIModelSettings](AIModelSettings.md).[source](AIModelSettings.md#source)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:99](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L99)

___

### supports

• `Optional` **supports**: [`AIModelType`](../enums/AIModelType.md) \| [`AIModelType`](../enums/AIModelType.md)[]

#### Inherited from

[AIModelSettings](AIModelSettings.md).[supports](AIModelSettings.md#supports)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:98](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L98)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[title](AIModelSettings.md#title)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:124](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L124)

___

### type

• `Optional` **type**: [`AIModelType`](../enums/AIModelType.md)

#### Inherited from

[AIModelSettings](AIModelSettings.md).[type](AIModelSettings.md#type)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:97](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L97)

___

### updatedAt

• `Optional` **updatedAt**: `Date`

#### Inherited from

[AIModelSettings](AIModelSettings.md).[updatedAt](AIModelSettings.md#updatedat)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:133](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L133)

___

### url

• `Optional` **url**: `string`

the remote url to download the model

#### Inherited from

[AIModelSettings](AIModelSettings.md).[url](AIModelSettings.md#url)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:113](https://github.com/isdk/ai-tool-llm.js/blob/43a17d2fbebc5f5e0656e84cf4591b2a68261993/src/llm-settings.ts#L113)
