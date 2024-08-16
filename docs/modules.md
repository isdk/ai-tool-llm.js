[@isdk/ai-tool-llm](README.md) / Exports

# @isdk/ai-tool-llm

## Table of contents

### Enumerations

- [AIModelQuantType](enums/AIModelQuantType.md)
- [AIModelType](enums/AIModelType.md)

### Classes

- [LLMProvider](classes/LLMProvider.md)

### Interfaces

- [AILavaModelSettings](interfaces/AILavaModelSettings.md)
- [AIModelFileSettings](interfaces/AIModelFileSettings.md)
- [AIModelSettings](interfaces/AIModelSettings.md)
- [AIModelSimpleSettings](interfaces/AIModelSimpleSettings.md)
- [AIModelSkill](interfaces/AIModelSkill.md)
- [AIModelSkillScore](interfaces/AIModelSkillScore.md)
- [AIOptions](interfaces/AIOptions.md)
- [AIProviderSettings](interfaces/AIProviderSettings.md)
- [AIResponseFormat](interfaces/AIResponseFormat.md)
- [AITextGenerationOptions](interfaces/AITextGenerationOptions.md)
- [LLMArguments](interfaces/LLMArguments.md)

### Type Aliases

- [AIModelInternalSkillName](modules.md#aimodelinternalskillname)
- [AIModelParams](modules.md#aimodelparams)
- [AIModelPublicSkillName](modules.md#aimodelpublicskillname)
- [AIModelSkillName](modules.md#aimodelskillname)
- [AIModelSkillScoreType](modules.md#aimodelskillscoretype)
- [AIModelSkillType](modules.md#aimodelskilltype)
- [AIModelSource](modules.md#aimodelsource)
- [AIResponseFormatType](modules.md#airesponseformattype)
- [AITextGenerationResult](modules.md#aitextgenerationresult)

### Variables

- [AIModelInternalSKillNames](modules.md#aimodelinternalskillnames)
- [AIModelPublicSkillNames](modules.md#aimodelpublicskillnames)
- [AIModelSkillScoreTypes](modules.md#aimodelskillscoretypes)
- [AIModelSkillTypes](modules.md#aimodelskilltypes)
- [AIModelSources](modules.md#aimodelsources)
- [LLMProviderName](modules.md#llmprovidername)
- [LLMProviderSchema](modules.md#llmproviderschema)
- [llm](modules.md#llm)

### Functions

- [flip](modules.md#flip)
- [joinUrl](modules.md#joinurl)
- [mapApiOptions](modules.md#mapapioptions)

## Type Aliases

### AIModelInternalSkillName

Ƭ **AIModelInternalSkillName**: typeof [`AIModelInternalSKillNames`](modules.md#aimodelinternalskillnames)[`number`]

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:44](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-skills.ts#L44)

___

### AIModelParams

Ƭ **AIModelParams**: [`AIModelSimpleSettings`](interfaces/AIModelSimpleSettings.md) & [`AIModelFileSettings`](interfaces/AIModelFileSettings.md)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:139](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-settings.ts#L139)

___

### AIModelPublicSkillName

Ƭ **AIModelPublicSkillName**: typeof [`AIModelPublicSkillNames`](modules.md#aimodelpublicskillnames)[`number`]

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:35](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-skills.ts#L35)

___

### AIModelSkillName

Ƭ **AIModelSkillName**: [`AIModelPublicSkillName`](modules.md#aimodelpublicskillname) \| [`AIModelInternalSkillName`](modules.md#aimodelinternalskillname)

Combines both public and internal skills into a single namespace for convenience.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:47](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-skills.ts#L47)

___

### AIModelSkillScoreType

Ƭ **AIModelSkillScoreType**: typeof [`AIModelSkillScoreTypes`](modules.md#aimodelskillscoretypes)[`number`]

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:13](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-skills.ts#L13)

___

### AIModelSkillType

Ƭ **AIModelSkillType**: typeof [`AIModelSkillTypes`](modules.md#aimodelskilltypes)[`number`]

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:4](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-skills.ts#L4)

___

### AIModelSource

Ƭ **AIModelSource**: typeof [`AIModelSources`](modules.md#aimodelsources)[`number`] & `string`

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:7](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-settings.ts#L7)

___

### AIResponseFormatType

Ƭ **AIResponseFormatType**: typeof `AIResponseFormatTypes`[`number`] \| `string` & {}

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:10](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-options.ts#L10)

___

### AITextGenerationResult

Ƭ **AITextGenerationResult**: `AIResult`\<`string`\>

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:95](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-options.ts#L95)

## Variables

### AIModelInternalSKillNames

• `Const` **AIModelInternalSKillNames**: readonly [``"Extract"``, ``"Embeddings"``, ``"Summary"``]

Lists the names of skills that are internal to the system and not directly observable by users.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:38](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-skills.ts#L38)

___

### AIModelPublicSkillNames

• `Const` **AIModelPublicSkillNames**: readonly [``"Knowledge"``, ``"Reasoning"``, ``"Roleplay"``, ``"Coding"``, ``"Math"``, ``"History"``, ``"Science"``, ``"Tool"``]

Lists the names of publicly recognized skills known to users.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:24](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-skills.ts#L24)

___

### AIModelSkillScoreTypes

• `Const` **AIModelSkillScoreTypes**: readonly [``"open_llm"``, ``"user"``]

Defines types of skill scores, indicating whether they are rated by an external authority or users.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:7](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-skills.ts#L7)

___

### AIModelSkillTypes

• `Const` **AIModelSkillTypes**: readonly [``"internal"``, ``"public"``]

Types and definitions for skills within the Language Model (LLM) system.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:3](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-skills.ts#L3)

___

### AIModelSources

• `Const` **AIModelSources**: readonly [``"huggingface"``]

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:6](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-settings.ts#L6)

___

### LLMProviderName

• `Const` **LLMProviderName**: ``"llm"``

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:27](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-provider.ts#L27)

___

### LLMProviderSchema

• `Const` **LLMProviderSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey` | \{ `type`: `string` = 'string' } |
| `apiKey.type` | `string` |
| `apiUrl` | \{ `type`: `string` = 'string' } |
| `apiUrl.type` | `string` |
| `enabled` | \{ `type`: `string` = 'boolean'; `value`: `boolean` = true } |
| `enabled.type` | `string` |
| `enabled.value` | `boolean` |
| `prior` | \{ `type`: `string` = 'number' } |
| `prior.type` | `string` |
| `rule` | \{ `type`: `string`[]  } |
| `rule.type` | `string`[] |
| `supports` | \{ `anyOf`: (\{ `items?`: `undefined` ; `type`: `string` = 'number' } \| \{ `items`: \{ `type`: `string` = 'number' } ; `type`: `string` = 'array' })[] ; `type`: `string` = 'number' } |
| `supports.anyOf` | (\{ `items?`: `undefined` ; `type`: `string` = 'number' } \| \{ `items`: \{ `type`: `string` = 'number' } ; `type`: `string` = 'array' })[] |
| `supports.type` | `string` |

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:151](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-settings.ts#L151)

___

### llm

• `Const` **llm**: [`LLMProvider`](classes/LLMProvider.md)

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:231](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-provider.ts#L231)

## Functions

### flip

▸ **flip**(`data`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`\<`string`, `string`\> |

#### Returns

`Object`

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:129](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-options.ts#L129)

___

### joinUrl

▸ **joinUrl**(`baseUrl`, `url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:215](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-provider.ts#L215)

___

### mapApiOptions

▸ **mapApiOptions**\<`TAIOptions`\>(`opts?`, `AIOptionsMap?`): `TAIOptions`

Maps properties from the provided options object to a new object according to the mappings defined in AIOptionsMap.
Supports both simple property names and paths (e.g., 'foo.bar') for nested properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAIOptions` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `TAIOptions` | The original options object whose properties (including nested ones) will be copied to the new object based on the mapping. |
| `AIOptionsMap?` | `Record`\<`string`, `string`\> | A mapping table defining how properties (or paths) in opts map to properties in the target object. |

#### Returns

`TAIOptions`

A new object containing properties copied from opts based on the defined mappings, including support for nested properties.

**`Example`**

```ts
const originalOpts = { user: { name: 'Alice', age: 30 }, active: true };
const mapping = { 'user.name': 'userName', 'active': 'isActive' };
const mappedOpts = mapApiOptions(originalOpts, mapping);
// mappedOpts is now { userName: 'Alice', isActive: true }
```

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:112](https://github.com/isdk/ai-tool-llm.js/blob/264101dcc3b40890a6eb484b7aa94c049c6c4963/src/llm-options.ts#L112)
