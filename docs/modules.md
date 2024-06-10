[@isdk/ai-tool-llm](README.md) / Exports

# @isdk/ai-tool-llm

## Table of contents

### Enumerations

- [AIModelQuantType](enums/AIModelQuantType.md)
- [AIModelType](enums/AIModelType.md)

### Classes

- [LLMProvider](classes/LLMProvider.md)
- [LlmModelsFunc](classes/LlmModelsFunc.md)

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
- [MODELS\_DB\_NAME](modules.md#models_db_name)
- [llm](modules.md#llm)

### Functions

- [flip](modules.md#flip)
- [getHFUrl](modules.md#gethfurl)
- [joinUrl](modules.md#joinurl)
- [mapApiOptions](modules.md#mapapioptions)
- [paramsSizeToScaleStr](modules.md#paramssizetoscalestr)
- [scaleStrToParamsSize](modules.md#scalestrtoparamssize)

## Type Aliases

### AIModelInternalSkillName

Ƭ **AIModelInternalSkillName**: typeof [`AIModelInternalSKillNames`](modules.md#aimodelinternalskillnames)[`number`]

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:44](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-skills.ts#L44)

___

### AIModelParams

Ƭ **AIModelParams**: [`AIModelSimpleSettings`](interfaces/AIModelSimpleSettings.md) & [`AIModelFileSettings`](interfaces/AIModelFileSettings.md)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:135](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-settings.ts#L135)

___

### AIModelPublicSkillName

Ƭ **AIModelPublicSkillName**: typeof [`AIModelPublicSkillNames`](modules.md#aimodelpublicskillnames)[`number`]

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:35](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-skills.ts#L35)

___

### AIModelSkillName

Ƭ **AIModelSkillName**: [`AIModelPublicSkillName`](modules.md#aimodelpublicskillname) \| [`AIModelInternalSkillName`](modules.md#aimodelinternalskillname)

Combines both public and internal skills into a single namespace for convenience.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:47](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-skills.ts#L47)

___

### AIModelSkillScoreType

Ƭ **AIModelSkillScoreType**: typeof [`AIModelSkillScoreTypes`](modules.md#aimodelskillscoretypes)[`number`]

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:13](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-skills.ts#L13)

___

### AIModelSkillType

Ƭ **AIModelSkillType**: typeof [`AIModelSkillTypes`](modules.md#aimodelskilltypes)[`number`]

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:4](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-skills.ts#L4)

___

### AIModelSource

Ƭ **AIModelSource**: typeof [`AIModelSources`](modules.md#aimodelsources)[`number`] & `string`

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:7](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-settings.ts#L7)

___

### AIResponseFormatType

Ƭ **AIResponseFormatType**: typeof `AIResponseFormatTypes`[`number`] \| `string` & {}

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:10](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-options.ts#L10)

___

### AITextGenerationResult

Ƭ **AITextGenerationResult**: `AIResult`\<`string`\>

#### Defined in

[packages/ai-tool-llm/src/llm-options.ts:86](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-options.ts#L86)

## Variables

### AIModelInternalSKillNames

• `Const` **AIModelInternalSKillNames**: readonly [``"Extract"``, ``"Embeddings"``, ``"Summary"``]

Lists the names of skills that are internal to the system and not directly observable by users.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:38](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-skills.ts#L38)

___

### AIModelPublicSkillNames

• `Const` **AIModelPublicSkillNames**: readonly [``"Knowledge"``, ``"Reasoning"``, ``"Roleplay"``, ``"Coding"``, ``"Math"``, ``"History"``, ``"Science"``, ``"Tool"``]

Lists the names of publicly recognized skills known to users.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:24](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-skills.ts#L24)

___

### AIModelSkillScoreTypes

• `Const` **AIModelSkillScoreTypes**: readonly [``"open_llm"``, ``"user"``]

Defines types of skill scores, indicating whether they are rated by an external authority or users.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:7](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-skills.ts#L7)

___

### AIModelSkillTypes

• `Const` **AIModelSkillTypes**: readonly [``"internal"``, ``"public"``]

Types and definitions for skills within the Language Model (LLM) system.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:3](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-skills.ts#L3)

___

### AIModelSources

• `Const` **AIModelSources**: readonly [``"huggingface"``]

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:6](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-settings.ts#L6)

___

### LLMProviderName

• `Const` **LLMProviderName**: ``"llm"``

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:28](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L28)

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

[packages/ai-tool-llm/src/llm-settings.ts:147](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-settings.ts#L147)

___

### MODELS\_DB\_NAME

• `Const` **MODELS\_DB\_NAME**: ``".modelsdb"``

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:19](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-models.ts#L19)

___

### llm

• `Const` **llm**: [`LLMProvider`](classes/LLMProvider.md)

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:232](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L232)

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

[packages/ai-tool-llm/src/llm-options.ts:120](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-options.ts#L120)

___

### getHFUrl

▸ **getHFUrl**(`params`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.hubUrl?` | `string` | - |
| `params.path` | `string` | - |
| `params.raw?` | `boolean` | If true, will download the raw git file. For example, when calling on a file stored with Git LFS, the pointer file will be downloaded instead. |
| `params.repo` | `RepoDesignation` | - |
| `params.revision?` | `string` | - |

#### Returns

`string`

#### Defined in

[packages/ai-tool-llm/src/utils/huggingface.ts:18](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/utils/huggingface.ts#L18)

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

[packages/ai-tool-llm/src/llm-provider.ts:216](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L216)

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

[packages/ai-tool-llm/src/llm-options.ts:103](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-options.ts#L103)

___

### paramsSizeToScaleStr

▸ **paramsSizeToScaleStr**(`paramsSize`, `fractionDigits?`): `string`

Formats a parameter size in bytes into a string with an appropriate scale (T, B, M, or K),
optionally specifying the number of fractional digits to display.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `paramsSize` | `number` | `undefined` | The parameter size in bytes. |
| `fractionDigits` | `number` | `0` | The number of fractional digits to include in the formatted output. Default is 0 (no fractional digits). |

#### Returns

`string`

A string representing the formatted parameter size with the appropriate scale unit and the specified number of fractional digits.

#### Defined in

[packages/ai-tool-llm/src/utils/convert-params-size.ts:11](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/utils/convert-params-size.ts#L11)

___

### scaleStrToParamsSize

▸ **scaleStrToParamsSize**(`scale`): `number`

Converts a formatted parameters size string (with units T, B, M, or K) back to its byte value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `string` | The formatted parameter size string (e.g., "1.23B", "456M", "789K", or "123"). |

#### Returns

`number`

The parameter size in bytes.

#### Defined in

[packages/ai-tool-llm/src/utils/convert-params-size.ts:44](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/utils/convert-params-size.ts#L44)
