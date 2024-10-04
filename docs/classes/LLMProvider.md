[**@isdk/ai-tool-llm**](../README.md) • **Docs**

***

[@isdk/ai-tool-llm](../globals.md) / LLMProvider

# Class: LLMProvider

## Extends

- [`AIProviderSettings`](../interfaces/AIProviderSettings.md).`ToolFunc`

## Constructors

### new LLMProvider()

> **new LLMProvider**(`name`, `options`?): [`LLMProvider`](LLMProvider.md)

#### Parameters

• **name**: `string` \| `Function` \| `FuncItem`

• **options?**: `any`

#### Returns

[`LLMProvider`](LLMProvider.md)

#### Inherited from

`AIProviderSettings.constructor`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:80

## Properties

### $attributes

> **$attributes**: `Properties`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### apiKey?

> `optional` **apiKey**: `string`

#### Inherited from

[`AIProviderSettings`](../interfaces/AIProviderSettings.md).[`apiKey`](../interfaces/AIProviderSettings.md#apikey)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:23](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-settings.ts#L23)

***

### apiUrl?

> `optional` **apiUrl**: `string`

#### Inherited from

[`AIProviderSettings`](../interfaces/AIProviderSettings.md).[`apiUrl`](../interfaces/AIProviderSettings.md#apiurl)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:24](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-settings.ts#L24)

***

### constructor

> **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:125

***

### defaultOptions

> **defaultOptions**: `object`

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

***

### depends

> **depends**: `object`

#### Index Signature

 \[`name`: `string`\]: `ToolFunc`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:42](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L42)

***

### description

> **description**: `string` = `'run LLM model'`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:35](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L35)

***

### isApi?

> `optional` **isApi**: `boolean`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:42

***

### model?

> `optional` **model**: `string`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:24](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L24)

***

### name?

> `optional` **name**: `string`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:36

***

### nonExported1stChar

> **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

***

### params

> **params**: `object`

#### model

> **model**: `object`

#### model.description

> **description**: `string` = `'the LLM model name'`

#### model.name

> **name**: `string` = `'model'`

#### model.type

> **type**: `string` = `'string'`

#### options

> **options**: `object`

#### options.description

> **description**: `string` = `'the LLM model options'`

#### options.name

> **name**: `string` = `'options'`

#### options.type

> **type**: `string` = `'any'`

#### value

> **value**: `object`

#### value.description

> **description**: `string` = `'the value pass to model'`

#### value.name

> **name**: `string` = `'value'`

#### value.type

> **type**: `string` = `'any'`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:36](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L36)

***

### prior

> **prior**: `number`

#### Inherited from

[`AIProviderSettings`](../interfaces/AIProviderSettings.md).[`prior`](../interfaces/AIProviderSettings.md#prior)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:21](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-settings.ts#L21)

***

### result

> **result**: `string` = `'object'`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:41](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L41)

***

### rule

> **rule**: `AIModelNameRules`

#### Inherited from

[`AIProviderSettings`](../interfaces/AIProviderSettings.md).[`rule`](../interfaces/AIProviderSettings.md#rule)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:20](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-settings.ts#L20)

***

### scope?

> `optional` **scope**: `any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:39

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

#### Parameters

• **this**: `ToolFunc`

• **options?**: `FuncItem`

#### Returns

`void`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:41

***

### stream?

> `optional` **stream**: `boolean`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:43

***

### supports

> **supports**: [`AIModelType`](../enumerations/AIModelType.md) \| [`AIModelType`](../enumerations/AIModelType.md)[]

#### Inherited from

[`AIProviderSettings`](../interfaces/AIProviderSettings.md).[`supports`](../interfaces/AIProviderSettings.md#supports)

#### Defined in

[packages/ai-tool-llm/src/llm-settings.ts:22](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-settings.ts#L22)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:40

***

### current?

> `static` `optional` **current**: `string`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:31](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L31)

***

### dataPath

> `static` **dataPath**: `string`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:64

***

### items

> `static` **items**: `object` = `LLMProviders`

#### Index Signature

 \[`name`: `string`\]: [`LLMProvider`](LLMProvider.md)

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:33](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L33)

## Methods

### addModel()?

> `optional` **addModel**(`modelName`, `model`): `Promise`\<`any`\>

#### Parameters

• **modelName**: `string`

• **model**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:22](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L22)

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

#### Parameters

• **params**: `any`[]

#### Returns

`any`[]

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:83

***

### assign()

> **assign**(`src`, `options`?): `this`

Assign the values from the src object.

#### Parameters

• **src**: `any`

the source object

• **options?**: `IMergeOptions`

#### Returns

`this`

this object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

Assign a property of src to this object.

#### Parameters

• **src**: `any`

the src object

• **name**: `string`

the property name to assign

• **value**: `any`

the property value to assign

• **attrs?**: `any`

the attributes object

• **options?**: `IMergeOptions`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:117

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

Assign the property value from the src to destination object.

#### Parameters

• **dest**: `any`

The destination object

• **src**: `any`

The src object

• **name**: `string`

The property name

• **value**: `any`

The property value

• **attrs?**: `any`

The attributes object of the property

• **options?**: `IMergeOptions`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:131

***

### assignTo()

> **assignTo**(`dest`?, `options`?): `any`

Assign this attributes to the dest object

#### Parameters

• **dest?**: `any`

the destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the dest object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

***

### clone()

> **clone**(`options`?): `any`

Create a new object with the same values of attributes.

#### Parameters

• **options?**: `IMergeOptions`

#### Returns

`any`

the new object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:155

***

### cloneTo()

> **cloneTo**(`dest`, `options`?): `any`

Create and assign the values to the destination object.

#### Parameters

• **dest**: `any`

the destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the new dest object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:148

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

• **aProperties**: `SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

***

### deleteModel()?

> `optional` **deleteModel**(`modelName`): `Promise`\<`any`\>

#### Parameters

• **modelName**: `string`

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:23](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L23)

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

Export attributes to the dest json object.

#### Parameters

• **dest**: `any`

the destination object

• **options?**: `IExportOptions`

#### Returns

`any`

the dest object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

***

### formatPrompt()

> **formatPrompt**(`messages`, `modelInfo`?, `options`?): `Promise`\<`undefined` \| `string`\>

#### Parameters

• **messages**: `AIChatMessageParam`[]

• **modelInfo?**: `string` \| [`AIModelParams`](../type-aliases/AIModelParams.md)

• **options?** = `{}`

• **options.add\_generation\_prompt?**: `boolean`

• **options.chatTemplate?**: `AIPromptResult`

• **options.defaultTemplate?**: `boolean`

• **options.prompt?**: `any`

• **options.type?**: `AIPromptType`

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:169](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L169)

***

### func()

> **func**(`input`): `Promise`\<`AIResult`\<`any`, `any`\>\>

#### Parameters

• **input**: [`LLMArguments`](../interfaces/LLMArguments.md)

#### Returns

`Promise`\<`AIResult`\<`any`, `any`\>\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:77](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L77)

***

### getChatTemplate()

> **getChatTemplate**(`modelInfo`?, `options`?): `Promise`\<`undefined` \| `AIPromptResult`\>

#### Parameters

• **modelInfo?**: `string` \| [`AIModelParams`](../type-aliases/AIModelParams.md)

• **options?** = `{}`

• **options.defaultTemplate?**: `boolean`

• **options.type?**: `AIPromptType`

#### Returns

`Promise`\<`undefined` \| `AIPromptResult`\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:134](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L134)

***

### getCurrentProvider()

> **getCurrentProvider**(): `undefined` \| [`LLMProvider`](LLMProvider.md)

#### Returns

`undefined` \| [`LLMProvider`](LLMProvider.md)

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:108](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L108)

***

### getDefaultParameters()

> **getDefaultParameters**(`chatTemplate`, `model`): `any`

#### Parameters

• **chatTemplate**: `AIPromptSettings`

• **model**: `string`

#### Returns

`any`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:211](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L211)

***

### getFunc()

> **getFunc**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:89

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:94

***

### getModelInfo()

> **getModelInfo**(`modelName`?): `Promise`\<`undefined` \| [`AIModelParams`](../type-aliases/AIModelParams.md)\>

#### Parameters

• **modelName?**: `string`

#### Returns

`Promise`\<`undefined` \| [`AIModelParams`](../type-aliases/AIModelParams.md)\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:120](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L120)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: `AsyncFeatureBits`

#### Returns

`boolean`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:95

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:140

***

### initialize()

> **initialize**(`src`?): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

• **src?**: `any`

#### Returns

`this`

this object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

***

### isModelNameMatched()

> **isModelNameMatched**(`modelName`, `rule`?): `undefined` \| `string` \| `RegExpExecArray`

#### Parameters

• **modelName**: `string`

• **rule?**: `AIModelNameRules`

#### Returns

`undefined` \| `string` \| `RegExpExecArray`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:68](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L68)

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

• **v**: `Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:146

***

### isSame()

> **isSame**(`src`, `options`?): `boolean`

Check the src object whether “equals” this object.

#### Parameters

• **src**: `any`

The source object

• **options?**: `IMergeOptions`

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

***

### isStream()

> **isStream**(`params`): `any`

#### Parameters

• **params**: `ServerFuncParams`

#### Returns

`any`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:73](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L73)

***

### listModels()?

> `optional` **listModels**(): `Promise`\<`undefined` \| `string`[]\>

#### Returns

`Promise`\<`undefined` \| `string`[]\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:20](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L20)

***

### listProviders()

> **listProviders**(`options`?): `object`

#### Parameters

• **options?**

• **options.all?**: `boolean`

• **options.filter?**: `AIModelNameRules`

#### Returns

`object`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:93](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L93)

***

### mergeTo()

> **mergeTo**(`dest`, `options`?): `any`

Merge this attributes to dest object.

#### Parameters

• **dest**: `any`

The destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the dest object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

#### Parameters

• **params?**: `any`

#### Returns

`any`[]

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:84

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:152

***

### register()

> **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:81

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

#### Parameters

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:86

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:87

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:88

***

### runSync()

> **runSync**(`params`?): `any`

#### Parameters

• **params?**: `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:85

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

#### Parameters

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:92

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:93

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:91

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

#### Parameters

• ...**params**: `any`[]

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:90

***

### setCurrentProvider()

> **setCurrentProvider**(`name`): `void`

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:112](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L112)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

***

### toLocaleString()

> **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:131

***

### toObject()

> **toObject**(`options`?): `any`

Convert the attributes to the json object

#### Parameters

• **options?**: `any`

#### Returns

`any`

the json object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:128

***

### unregister()

> **unregister**(): `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:82

***

### updateModel()?

> `optional` **updateModel**(`modelName`, `model`): `Promise`\<`any`\>

#### Parameters

• **modelName**: `string`

• **model**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:21](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L21)

***

### valueOf()

> **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:134

***

### assign()

#### assign(target, source)

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source**: `U`

The source object from which to copy properties.

##### Returns

`T` & `U`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

#### assign(target, source1, source2)

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source1**: `U`

The first source object from which to copy properties.

• **source2**: `V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

#### assign(target, source1, source2, source3)

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

• **W**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source1**: `U`

The first source object from which to copy properties.

• **source2**: `V`

The second source object from which to copy properties.

• **source3**: `W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

#### assign(target, sources)

> `static` **assign**(`target`, ...`sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

• **target**: `object`

The target object to copy to.

• ...**sources**: `any`[]

One or more source objects from which to copy properties

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

***

### create()

#### create(o)

> `static` **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

• **o**: `null` \| `object`

Object to use as a prototype. May be null.

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:188

#### create(o, properties)

> `static` **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

• **o**: `null` \| `object`

Object to use as a prototype. May be null

• **properties**: `PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:195

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

• **aTarget**: `any`

• **aProperties**: `PropDescriptors`

• **recreate?**: `boolean`

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:11

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

• **p**: `PropertyKey`

The property name.

• **attributes**: `PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:203

***

### entries()

#### entries(o)

> `static` **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

• **o**: `object` \| `ArrayLike`\<`T`\>

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

[`string`, `T`][]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

#### entries(o)

> `static` **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

[`string`, `any`][]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

***

### freeze()

#### freeze(f)

> `static` **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `Function`

##### Parameters

• **f**: `T`

Object on which to lock the attributes.

##### Returns

`T`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:222

#### freeze(o)

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `object`

• **U** *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

• **o**: `T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:228

#### freeze(o)

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T**

##### Parameters

• **o**: `T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:234

***

### fromEntries()

#### fromEntries(entries)

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Returns an object created by key-value entries for properties and methods

##### Type Parameters

• **T** = `any`

##### Parameters

• **entries**: `Iterable`\<readonly [`PropertyKey`, `T`], `any`, `any`\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

#### fromEntries(entries)

> `static` **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

##### Parameters

• **entries**: `Iterable`\<readonly `any`[], `any`, `any`\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

***

### get()

> `static` **get**(`name`): `ToolFunc`

#### Parameters

• **name**: `string`

#### Returns

`ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:65

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): `ToolFunc`[]

#### Parameters

• **tagName**: `string`

#### Returns

`ToolFunc`[]

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:68

***

### getByModel()

> `static` **getByModel**(`modelName`?): `undefined` \| [`LLMProvider`](LLMProvider.md)

#### Parameters

• **modelName?**: `string`

#### Returns

`undefined` \| [`LLMProvider`](LLMProvider.md)

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:44](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L44)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

• **tagName**: `string`

#### Returns

`undefined` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:67

***

### getCurrentProvider()

> `static` **getCurrentProvider**(): `undefined` \| [`LLMProvider`](LLMProvider.md)

#### Returns

`undefined` \| [`LLMProvider`](LLMProvider.md)

#### Defined in

[packages/ai-tool-llm/src/llm-provider.ts:62](https://github.com/isdk/ai-tool-llm.js/blob/6d637e2cbb195f8d75ce36ff2cada54b2888e8ae/src/llm-provider.ts#L62)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:72

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:75

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

• **o**: `any`

Object that contains the property.

• **p**: `PropertyKey`

Name of the property.

#### Returns

`undefined` \| `PropertyDescriptor`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:175

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Returns an object containing all own property descriptors of an object

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

• **o**: `any`

Object that contains the own properties.

#### Returns

`string`[]

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:182

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

• **o**: `any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

• **o**: `any`

The object that references the prototype.

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:167

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: `AsyncFeatureBits`

#### Returns

`boolean`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:69

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

• **value1**: `any`

The first value.

• **value2**: `any`

The second value.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:258

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:252

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:246

***

### keys()

#### keys(o)

> `static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

• **o**: `object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:264

#### keys(o)

> `static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

***

### list()

> `static` **list**(): `Funcs`

#### Returns

`Funcs`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:66

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object to make non-extensible.

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:240

***

### register()

#### register(name, options)

> `static` **register**(`name`, `options`): `boolean` \| `ToolFunc`

##### Parameters

• **name**: `string`

• **options**: `FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:76

#### register(func, options)

> `static` **register**(`func`, `options`): `boolean` \| `ToolFunc`

##### Parameters

• **func**: `Function`

• **options**: `FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:77

#### register(name, options)

> `static` **register**(`name`, `options`?): `boolean` \| `ToolFunc`

##### Parameters

• **name**: `string` \| `Function` \| `ToolFunc` \| `FuncItem`

• **options?**: `FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:78

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:70

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:71

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:73

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:74

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object on which to lock the attributes.

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:216

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

• **o**: `any`

The object to change its prototype.

• **proto**: `null` \| `object`

The value of the new prototype or null.

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| `ToolFunc`

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `ToolFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:79

***

### values()

#### values(o)

> `static` **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

• **o**: `object` \| `ArrayLike`\<`T`\>

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`T`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

#### values(o)

> `static` **values**(`o`): `any`[]

Returns an array of values of the enumerable own properties of an object

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:30
