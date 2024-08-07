[@isdk/ai-tool-llm](../README.md) / [Exports](../modules.md) / AIModelSettings

# Interface: AIModelSettings

## Hierarchy

- [`AIModelSimpleSettings`](AIModelSimpleSettings.md)

  ↳ **`AIModelSettings`**

  ↳↳ [`AILavaModelSettings`](AILavaModelSettings.md)

## Table of contents

### Properties

- [\_id](AIModelSettings.md#_id)
- [author](AIModelSettings.md#author)
- [chat\_template](AIModelSettings.md#chat_template)
- [config](AIModelSettings.md#config)
- [content\_size](AIModelSettings.md#content_size)
- [createdAt](AIModelSettings.md#createdat)
- [description](AIModelSettings.md#description)
- [downloaded](AIModelSettings.md#downloaded)
- [downloads](AIModelSettings.md#downloads)
- [featured](AIModelSettings.md#featured)
- [files](AIModelSettings.md#files)
- [hf\_repo](AIModelSettings.md#hf_repo)
- [language](AIModelSettings.md#language)
- [license](AIModelSettings.md#license)
- [likes](AIModelSettings.md#likes)
- [logo](AIModelSettings.md#logo)
- [name](AIModelSettings.md#name)
- [params\_size](AIModelSettings.md#params_size)
- [provider](AIModelSettings.md#provider)
- [scale](AIModelSettings.md#scale)
- [skills](AIModelSettings.md#skills)
- [source](AIModelSettings.md#source)
- [supports](AIModelSettings.md#supports)
- [title](AIModelSettings.md#title)
- [type](AIModelSettings.md#type)
- [updatedAt](AIModelSettings.md#updatedat)
- [url](AIModelSettings.md#url)

## Properties

### \_id

• `Optional` **\_id**: `string`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[_id](AIModelSimpleSettings.md#_id)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:88](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L88)

___

### author

• `Optional` **author**: `string`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[author](AIModelSimpleSettings.md#author)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:122](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L122)

___

### chat\_template

• `Optional` **chat\_template**: `string`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[chat_template](AIModelSimpleSettings.md#chat_template)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:125](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L125)

___

### config

• `Optional` **config**: [`AIOptions`](AIOptions.md)

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[config](AIModelSimpleSettings.md#config)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:126](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L126)

___

### content\_size

• `Optional` **content\_size**: `number`

the content length in train

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[content_size](AIModelSimpleSettings.md#content_size)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:103](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L103)

___

### createdAt

• `Optional` **createdAt**: `Date`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[createdAt](AIModelSimpleSettings.md#createdat)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:128](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L128)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[description](AIModelSimpleSettings.md#description)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:121](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L121)

___

### downloaded

• `Optional` **downloaded**: `boolean`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[downloaded](AIModelSimpleSettings.md#downloaded)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:131](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L131)

___

### downloads

• `Optional` **downloads**: `number`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[downloads](AIModelSimpleSettings.md#downloads)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:119](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L119)

___

### featured

• `Optional` **featured**: `boolean`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[featured](AIModelSimpleSettings.md#featured)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:117](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L117)

___

### files

• `Optional` **files**: [`AIModelFileSettings`](AIModelFileSettings.md)[]

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:138](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L138)

___

### hf\_repo

• `Optional` **hf\_repo**: `string`

hugging-face repo name

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[hf_repo](AIModelSimpleSettings.md#hf_repo)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:113](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L113)

___

### language

• `Optional` **language**: `string`[]

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[language](AIModelSimpleSettings.md#language)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:127](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L127)

___

### license

• `Optional` **license**: `string`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[license](AIModelSimpleSettings.md#license)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:123](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L123)

___

### likes

• `Optional` **likes**: `number`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[likes](AIModelSimpleSettings.md#likes)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:118](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L118)

___

### logo

• `Optional` **logo**: `string`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[logo](AIModelSimpleSettings.md#logo)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:124](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L124)

___

### name

• `Optional` **name**: `string`

the model unique name, but not the unique in db

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[name](AIModelSimpleSettings.md#name)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:92](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L92)

___

### params\_size

• `Optional` **params\_size**: `number`

the model params size in bytes

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[params_size](AIModelSimpleSettings.md#params_size)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:99](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L99)

___

### provider

• `Optional` **provider**: `string`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[provider](AIModelSimpleSettings.md#provider)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:116](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L116)

___

### scale

• `Optional` **scale**: `string`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[scale](AIModelSimpleSettings.md#scale)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:105](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L105)

___

### skills

• `Optional` **skills**: [`AIModelSkillName`](../modules.md#aimodelskillname)[]

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[skills](AIModelSimpleSettings.md#skills)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:115](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L115)

___

### source

• `Optional` **source**: ``"huggingface"``

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[source](AIModelSimpleSettings.md#source)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:95](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L95)

___

### supports

• `Optional` **supports**: [`AIModelType`](../enums/AIModelType.md) \| [`AIModelType`](../enums/AIModelType.md)[]

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[supports](AIModelSimpleSettings.md#supports)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:94](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L94)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[title](AIModelSimpleSettings.md#title)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:120](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L120)

___

### type

• `Optional` **type**: [`AIModelType`](../enums/AIModelType.md)

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[type](AIModelSimpleSettings.md#type)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:93](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L93)

___

### updatedAt

• `Optional` **updatedAt**: `Date`

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[updatedAt](AIModelSimpleSettings.md#updatedat)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:129](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L129)

___

### url

• `Optional` **url**: `string`

the remote url to download the model

#### Inherited from

[AIModelSimpleSettings](AIModelSimpleSettings.md).[url](AIModelSimpleSettings.md#url)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:109](https://github.com/isdk/ai-tool-llm.js/blob/b1a069008f06d0b818c0913820aaddab45c2d2fc/src/llm-settings.ts#L109)
