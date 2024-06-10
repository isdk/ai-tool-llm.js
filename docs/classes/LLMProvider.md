[@isdk/ai-tool-llm](../README.md) / [Exports](../modules.md) / LLMProvider

# Class: LLMProvider

## Hierarchy

- [`AIProviderSettings`](../interfaces/AIProviderSettings.md)

- `ToolFunc`

  ↳ **`LLMProvider`**

## Table of contents

### Constructors

- [constructor](LLMProvider.md#constructor)

### Properties

- [$attributes](LLMProvider.md#$attributes)
- [apiKey](LLMProvider.md#apikey)
- [apiUrl](LLMProvider.md#apiurl)
- [constructor](LLMProvider.md#constructor-1)
- [defaultOptions](LLMProvider.md#defaultoptions)
- [depends](LLMProvider.md#depends)
- [description](LLMProvider.md#description)
- [name](LLMProvider.md#name)
- [nonExported1stChar](LLMProvider.md#nonexported1stchar)
- [params](LLMProvider.md#params)
- [prior](LLMProvider.md#prior)
- [result](LLMProvider.md#result)
- [rule](LLMProvider.md#rule)
- [scope](LLMProvider.md#scope)
- [setup](LLMProvider.md#setup)
- [supports](LLMProvider.md#supports)
- [tags](LLMProvider.md#tags)
- [current](LLMProvider.md#current)
- [dataPath](LLMProvider.md#datapath)
- [items](LLMProvider.md#items)

### Methods

- [addModel](LLMProvider.md#addmodel)
- [arr2ObjParams](LLMProvider.md#arr2objparams)
- [assign](LLMProvider.md#assign)
- [assignProperty](LLMProvider.md#assignproperty)
- [assignPropertyTo](LLMProvider.md#assignpropertyto)
- [assignTo](LLMProvider.md#assignto)
- [clone](LLMProvider.md#clone)
- [cloneTo](LLMProvider.md#cloneto)
- [defineProperties](LLMProvider.md#defineproperties)
- [deleteModel](LLMProvider.md#deletemodel)
- [exportTo](LLMProvider.md#exportto)
- [formatPrompt](LLMProvider.md#formatprompt)
- [func](LLMProvider.md#func)
- [getChatTemplate](LLMProvider.md#getchattemplate)
- [getCurrentProvider](LLMProvider.md#getcurrentprovider)
- [getDefaultParameters](LLMProvider.md#getdefaultparameters)
- [getFunc](LLMProvider.md#getfunc)
- [getFuncWithPos](LLMProvider.md#getfuncwithpos)
- [getModelInfo](LLMProvider.md#getmodelinfo)
- [getProperties](LLMProvider.md#getproperties)
- [hasOwnProperty](LLMProvider.md#hasownproperty)
- [initialize](LLMProvider.md#initialize)
- [isModelNameMatched](LLMProvider.md#ismodelnamematched)
- [isPrototypeOf](LLMProvider.md#isprototypeof)
- [isSame](LLMProvider.md#issame)
- [isStream](LLMProvider.md#isstream)
- [listModels](LLMProvider.md#listmodels)
- [listProviders](LLMProvider.md#listproviders)
- [mergeTo](LLMProvider.md#mergeto)
- [obj2ArrParams](LLMProvider.md#obj2arrparams)
- [propertyIsEnumerable](LLMProvider.md#propertyisenumerable)
- [register](LLMProvider.md#register)
- [run](LLMProvider.md#run)
- [runAs](LLMProvider.md#runas)
- [runAsSync](LLMProvider.md#runassync)
- [runSync](LLMProvider.md#runsync)
- [runWithPos](LLMProvider.md#runwithpos)
- [runWithPosAs](LLMProvider.md#runwithposas)
- [runWithPosAsSync](LLMProvider.md#runwithposassync)
- [runWithPosSync](LLMProvider.md#runwithpossync)
- [setCurrentProvider](LLMProvider.md#setcurrentprovider)
- [toJSON](LLMProvider.md#tojson)
- [toLocaleString](LLMProvider.md#tolocalestring)
- [toObject](LLMProvider.md#toobject)
- [toString](LLMProvider.md#tostring)
- [unregister](LLMProvider.md#unregister)
- [updateModel](LLMProvider.md#updatemodel)
- [valueOf](LLMProvider.md#valueof)
- [assign](LLMProvider.md#assign-1)
- [create](LLMProvider.md#create)
- [defineProperties](LLMProvider.md#defineproperties-1)
- [defineProperty](LLMProvider.md#defineproperty)
- [entries](LLMProvider.md#entries)
- [freeze](LLMProvider.md#freeze)
- [fromEntries](LLMProvider.md#fromentries)
- [get](LLMProvider.md#get)
- [getAllByTag](LLMProvider.md#getallbytag)
- [getByModel](LLMProvider.md#getbymodel)
- [getByTag](LLMProvider.md#getbytag)
- [getCurrentProvider](LLMProvider.md#getcurrentprovider-1)
- [getFunc](LLMProvider.md#getfunc-1)
- [getFuncWithPos](LLMProvider.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](LLMProvider.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](LLMProvider.md#getownpropertydescriptors)
- [getOwnPropertyNames](LLMProvider.md#getownpropertynames)
- [getOwnPropertySymbols](LLMProvider.md#getownpropertysymbols)
- [getProperties](LLMProvider.md#getproperties-1)
- [getPrototypeOf](LLMProvider.md#getprototypeof)
- [is](LLMProvider.md#is)
- [isExtensible](LLMProvider.md#isextensible)
- [isFrozen](LLMProvider.md#isfrozen)
- [isSealed](LLMProvider.md#issealed)
- [keys](LLMProvider.md#keys)
- [list](LLMProvider.md#list)
- [preventExtensions](LLMProvider.md#preventextensions)
- [register](LLMProvider.md#register-1)
- [run](LLMProvider.md#run-1)
- [runSync](LLMProvider.md#runsync-1)
- [runWithPos](LLMProvider.md#runwithpos-1)
- [runWithPosSync](LLMProvider.md#runwithpossync-1)
- [seal](LLMProvider.md#seal)
- [setPrototypeOf](LLMProvider.md#setprototypeof)
- [unregister](LLMProvider.md#unregister-1)
- [values](LLMProvider.md#values)

## Constructors

### constructor

• **new LLMProvider**(`name`, `options?`): [`LLMProvider`](LLMProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `FuncItem` |
| `options?` | `any` |

#### Returns

[`LLMProvider`](LLMProvider.md)

#### Inherited from

AIProviderSettings.constructor

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:58

## Properties

### $attributes

• **$attributes**: `Properties`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### apiKey

• `Optional` **apiKey**: `string`

#### Inherited from

[AIProviderSettings](../interfaces/AIProviderSettings.md).[apiKey](../interfaces/AIProviderSettings.md#apikey)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:22](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-settings.ts#L22)

___

### apiUrl

• `Optional` **apiUrl**: `string`

#### Inherited from

[AIProviderSettings](../interfaces/AIProviderSettings.md).[apiUrl](../interfaces/AIProviderSettings.md#apiurl)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:23](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-settings.ts#L23)

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:125

___

### defaultOptions

• **defaultOptions**: `Object`

The default options for export and assign

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assign?` | `IMergeOptions` |
| `export?` | `IMergeOptions` |

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### depends

• **depends**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event-bus` | `EventToolFunc` |

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:42](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L42)

___

### description

• **description**: `string` = `'run LLM model'`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:35](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L35)

___

### name

• `Optional` **name**: `string`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:22

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• **params**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `model` | \{ `description`: `string` = 'the LLM model name'; `name`: `string` = 'model'; `type`: `string` = 'string' } |
| `model.description` | `string` |
| `model.name` | `string` |
| `model.type` | `string` |
| `options` | \{ `description`: `string` = 'the LLM model options'; `name`: `string` = 'options'; `type`: `string` = 'any' } |
| `options.description` | `string` |
| `options.name` | `string` |
| `options.type` | `string` |
| `value` | \{ `description`: `string` = 'the value pass to model'; `name`: `string` = 'value'; `type`: `string` = 'any' } |
| `value.description` | `string` |
| `value.name` | `string` |
| `value.type` | `string` |

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:36](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L36)

___

### prior

• **prior**: `number`

#### Inherited from

[AIProviderSettings](../interfaces/AIProviderSettings.md).[prior](../interfaces/AIProviderSettings.md#prior)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:20](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-settings.ts#L20)

___

### result

• **result**: `string` = `'object'`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:41](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L41)

___

### rule

• **rule**: `AIModelNameRules`

#### Inherited from

[AIProviderSettings](../interfaces/AIProviderSettings.md).[rule](../interfaces/AIProviderSettings.md#rule)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:19](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-settings.ts#L19)

___

### scope

• `Optional` **scope**: `any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:25

___

### setup

• `Optional` **setup**: (`this`: `ToolFunc`, `options?`: `FuncItem`) => `void`

#### Type declaration

▸ (`this`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ToolFunc` |
| `options?` | `FuncItem` |

##### Returns

`void`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:27

___

### supports

• **supports**: [`AIModelType`](../enums/AIModelType.md) \| [`AIModelType`](../enums/AIModelType.md)[]

#### Inherited from

[AIProviderSettings](../interfaces/AIProviderSettings.md).[supports](../interfaces/AIProviderSettings.md#supports)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:21](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-settings.ts#L21)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:26

___

### current

▪ `Static` `Optional` **current**: `string`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:31](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L31)

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:43

___

### items

▪ `Static` **items**: `Object` = `LLMProviders`

#### Index signature

▪ [name: `string`]: [`LLMProvider`](LLMProvider.md)

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:33](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L33)

## Methods

### addModel

▸ **addModel**(`modelName`, `model`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |
| `model` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:23](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L23)

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:61

___

### assign

▸ **assign**(`src`, `options?`): `this`

Assign the values from the src object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`this`

this object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:106

___

### assignProperty

▸ **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign a property of src to this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the src object |
| `name` | `string` | the property name to assign |
| `value` | `any` | the property value to assign |
| `attrs?` | `any` | the attributes object |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:117

___

### assignPropertyTo

▸ **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign the property value from the src to destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `src` | `any` | The src object |
| `name` | `string` | The property name |
| `value` | `any` | The property value |
| `attrs?` | `any` | The attributes object of the property |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:131

___

### assignTo

▸ **assignTo**(`dest?`, `options?`): `any`

Assign this attributes to the dest object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest?` | `any` | the destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:191

___

### clone

▸ **clone**(`options?`): `any`

Create a new object with the same values of attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IMergeOptions` |

#### Returns

`any`

the new object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:155

___

### cloneTo

▸ **cloneTo**(`dest`, `options?`): `any`

Create and assign the values to the destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IMergeOptions` |  |

#### Returns

`any`

the new dest object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:148

___

### defineProperties

▸ **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aProperties` | `SimplePropDescriptors` | the defined attributes of the object |

#### Returns

`any`

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

___

### deleteModel

▸ **deleteModel**(`modelName`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:24](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L24)

___

### exportTo

▸ **exportTo**(`dest`, `options?`): `any`

Export attributes to the dest json object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IExportOptions` | - |

#### Returns

`any`

the dest object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:173

___

### formatPrompt

▸ **formatPrompt**(`messages`, `modelInfo?`, `options?`): `Promise`\<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `AIChatMessageParam`[] |
| `modelInfo?` | `string` \| [`AIModelParams`](../modules.md#aimodelparams) |
| `options` | `Object` |
| `options.add_generation_prompt?` | `boolean` |
| `options.chatTemplate?` | `AIPromptResult` |
| `options.defaultTemplate?` | `boolean` |
| `options.prompt?` | `any` |
| `options.type?` | `AIPromptType` |

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:169](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L169)

___

### func

▸ **func**(`input`): `Promise`\<`AIResult`\<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`LLMArguments`](../interfaces/LLMArguments.md) |

#### Returns

`Promise`\<`AIResult`\<`any`, `any`\>\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:77](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L77)

___

### getChatTemplate

▸ **getChatTemplate**(`modelInfo?`, `options?`): `Promise`\<`undefined` \| `AIPromptResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelInfo?` | `string` \| [`AIModelParams`](../modules.md#aimodelparams) |
| `options` | `Object` |
| `options.defaultTemplate?` | `boolean` |
| `options.type?` | `AIPromptType` |

#### Returns

`Promise`\<`undefined` \| `AIPromptResult`\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:134](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L134)

___

### getCurrentProvider

▸ **getCurrentProvider**(): `undefined` \| [`LLMProvider`](LLMProvider.md)

#### Returns

`undefined` \| [`LLMProvider`](LLMProvider.md)

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:108](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L108)

___

### getDefaultParameters

▸ **getDefaultParameters**(`chatTemplate`, `model`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatTemplate` | `AIPromptSettings` |
| `model` | `string` |

#### Returns

`any`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:211](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L211)

___

### getFunc

▸ **getFunc**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:67

___

### getFuncWithPos

▸ **getFuncWithPos**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:72

___

### getModelInfo

▸ **getModelInfo**(`modelName?`): `Promise`\<`undefined` \| [`AIModelParams`](../modules.md#aimodelparams)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName?` | `string` |

#### Returns

`Promise`\<`undefined` \| [`AIModelParams`](../modules.md#aimodelparams)\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:120](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L120)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:98

___

### hasOwnProperty

▸ **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

___

### initialize

▸ **initialize**(`src?`): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src?` | `any` |

#### Returns

`this`

this object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:139

___

### isModelNameMatched

▸ **isModelNameMatched**(`modelName`, `rule?`): `undefined` \| `string` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |
| `rule?` | `AIModelNameRules` |

#### Returns

`undefined` \| `string` \| `RegExpExecArray`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:68](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L68)

___

### isPrototypeOf

▸ **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `Object` | Another object whose prototype chain is to be checked. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:146

___

### isSame

▸ **isSame**(`src`, `options?`): `boolean`

Check the src object whether “equals” this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | The source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:200

___

### isStream

▸ **isStream**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ServerFuncParams` |

#### Returns

`any`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:73](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L73)

___

### listModels

▸ **listModels**(): `Promise`\<`undefined` \| `string`[]\>

#### Returns

`Promise`\<`undefined` \| `string`[]\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:21](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L21)

___

### listProviders

▸ **listProviders**(`options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.all?` | `boolean` |
| `options.filter?` | `AIModelNameRules` |

#### Returns

`Object`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:93](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L93)

___

### mergeTo

▸ **mergeTo**(`dest`, `options?`): `any`

Merge this attributes to dest object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:164

___

### obj2ArrParams

▸ **obj2ArrParams**(`params?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`[]

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:62

___

### propertyIsEnumerable

▸ **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### register

▸ **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:59

___

### run

▸ **run**(`params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:64

___

### runAs

▸ **runAs**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:65

___

### runAsSync

▸ **runAsSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:66

___

### runSync

▸ **runSync**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:63

___

### runWithPos

▸ **runWithPos**(`...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:70

___

### runWithPosAs

▸ **runWithPosAs**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:71

___

### runWithPosAsSync

▸ **runWithPosAsSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:69

___

### runWithPosSync

▸ **runWithPosSync**(`...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:68

___

### setCurrentProvider

▸ **setCurrentProvider**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:112](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L112)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:131

___

### toObject

▸ **toObject**(`options?`): `any`

Convert the attributes to the json object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`any`

the json object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:60

___

### updateModel

▸ **updateModel**(`modelName`, `model`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |
| `model` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:22](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L22)

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:134

___

### assign

▸ **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source` | `U` | The source object from which to copy properties. |

#### Returns

`T` & `U`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:284

▸ **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |

#### Returns

`T` & `U` & `V`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:293

▸ **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |
| `W` | `W` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |
| `source3` | `W` | The third source object from which to copy properties. |

#### Returns

`T` & `U` & `V` & `W`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:303

▸ **assign**(`target`, `...sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The target object to copy to. |
| `...sources` | `any`[] | One or more source objects from which to copy properties |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:311

___

### create

▸ **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:188

▸ **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null |
| `properties` | `PropertyDescriptorMap` & `ThisType`\<`any`\> | JavaScript object that contains one or more property descriptors. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:195

___

### defineProperties

▸ **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aTarget` | `any` |
| `aProperties` | `PropDescriptors` |
| `recreate?` | `boolean` |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:11

___

### defineProperty

▸ **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object. |
| `p` | `PropertyKey` | The property name. |
| `attributes` | `PropertyDescriptor` & `ThisType`\<`any`\> | Descriptor for the property. It can be for a data property or an accessor property. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:203

___

### entries

▸ **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `T`][]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:36

▸ **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `any`][]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:42

___

### freeze

▸ **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:222

▸ **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | extends `string` \| `number` \| `bigint` \| `boolean` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:228

▸ **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:234

___

### fromEntries

▸ **fromEntries**\<`T`\>(`entries`): `Object`

Returns an object created by key-value entries for properties and methods

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly [`PropertyKey`, `T`]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`Object`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:26

▸ **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly `any`[]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:32

___

### get

▸ **get**(`name`): `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`ToolFunc`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:44

___

### getAllByTag

▸ **getAllByTag**(`tagName`): `ToolFunc`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`ToolFunc`[]

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:47

___

### getByModel

▸ **getByModel**(`modelName?`): `undefined` \| [`LLMProvider`](LLMProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName?` | `string` |

#### Returns

`undefined` \| [`LLMProvider`](LLMProvider.md)

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:44](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L44)

___

### getByTag

▸ **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:46

___

### getCurrentProvider

▸ **getCurrentProvider**(): `undefined` \| [`LLMProvider`](LLMProvider.md)

#### Returns

`undefined` \| [`LLMProvider`](LLMProvider.md)

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:62](https://github.com/isdk/ai-tool-llm.js/blob/adf4281f624679e744ead8368261a1e5d0c4f7cd/src/llm-provider.ts#L62)

___

### getFunc

▸ **getFunc**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:50

___

### getFuncWithPos

▸ **getFuncWithPos**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:53

___

### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the property. |
| `p` | `PropertyKey` | Name of the property. |

#### Returns

`undefined` \| `PropertyDescriptor`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:175

___

### getOwnPropertyDescriptors

▸ **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

Returns an object containing all own property descriptors of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

\{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:48

___

### getOwnPropertyNames

▸ **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the own properties. |

#### Returns

`string`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:182

___

### getOwnPropertySymbols

▸ **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to retrieve the symbols from. |

#### Returns

`symbol`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:10

___

### getPrototypeOf

▸ **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object that references the prototype. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:167

___

### is

▸ **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `any` | The first value. |
| `value2` | `any` | The second value. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:330

___

### isExtensible

▸ **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:258

___

### isFrozen

▸ **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:252

___

### isSealed

▸ **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:246

___

### keys

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:264

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): `Funcs`

#### Returns

`Funcs`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:45

___

### preventExtensions

▸ **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object to make non-extensible. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:240

___

### register

▸ **register**(`name`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:54

▸ **register**(`func`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:55

▸ **register**(`name`, `options?`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `ToolFunc` \| `FuncItem` |
| `options?` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:56

___

### run

▸ **run**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:48

___

### runSync

▸ **runSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:49

___

### runWithPos

▸ **runWithPos**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:51

___

### runWithPosSync

▸ **runWithPosSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:52

___

### seal

▸ **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:216

___

### setPrototypeOf

▸ **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object to change its prototype. |
| `proto` | ``null`` \| `object` | The value of the new prototype or null. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### unregister

▸ **unregister**(`name`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:57

___

### values

▸ **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`T`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:24

▸ **values**(`o`): `any`[]

Returns an array of values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`any`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
