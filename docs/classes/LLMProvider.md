[**@isdk/ai-tool-llm**](../README.md)

***

[@isdk/ai-tool-llm](../globals.md) / LLMProvider

# Class: LLMProvider

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:26](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L26)

## Extends

- [`AIProviderSettings`](../interfaces/AIProviderSettings.md).`ToolFunc`

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### new LLMProvider()

> **new LLMProvider**(`name`, `options`?): [`LLMProvider`](LLMProvider.md)

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:69

#### Parameters

##### name

`string` | `Function` | `FuncItem`

##### options?

`any`

#### Returns

[`LLMProvider`](LLMProvider.md)

#### Inherited from

`AIProviderSettings.constructor`

## Properties

### $attributes

> **$attributes**: `Properties`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### apiKey?

> `optional` **apiKey**: `string`

Defined in: [packages/ai-tool-llm/src/llm-settings.ts:23](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-settings.ts#L23)

#### Inherited from

[`AIProviderSettings`](../interfaces/AIProviderSettings.md).[`apiKey`](../interfaces/AIProviderSettings.md#apikey)

***

### apiUrl?

> `optional` **apiUrl**: `string`

Defined in: [packages/ai-tool-llm/src/llm-settings.ts:24](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-settings.ts#L24)

#### Inherited from

[`AIProviderSettings`](../interfaces/AIProviderSettings.md).[`apiUrl`](../interfaces/AIProviderSettings.md#apiurl)

***

### constructor

> **constructor**: `Function`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

***

### depends

> **depends**: `object`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:49](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L49)

#### Index Signature

\[`name`: `string`\]: `ToolFunc`

***

### description

> **description**: `string` = `'run LLM model'`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:42](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L42)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:31

***

### model?

> `optional` **model**: `string`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:31](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L31)

***

### name?

> `optional` **name**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:25

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

the property with the default prefix '$' will not be exported.

***

### params

> **params**: `object`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:43](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L43)

#### model

> **model**: `object`

##### model.description

> **description**: `string` = `'the LLM model name'`

##### model.name

> **name**: `string` = `'model'`

##### model.type

> **type**: `string` = `'string'`

#### options

> **options**: `object`

##### options.description

> **description**: `string` = `'the LLM model options'`

##### options.name

> **name**: `string` = `'options'`

##### options.type

> **type**: `string` = `'any'`

#### value

> **value**: `object`

##### value.description

> **description**: `string` = `'the value pass to model'`

##### value.name

> **name**: `string` = `'value'`

##### value.type

> **type**: `string` = `'any'`

***

### prior

> **prior**: `number`

Defined in: [packages/ai-tool-llm/src/llm-settings.ts:21](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-settings.ts#L21)

#### Inherited from

[`AIProviderSettings`](../interfaces/AIProviderSettings.md).[`prior`](../interfaces/AIProviderSettings.md#prior)

***

### result

> **result**: `string` = `'object'`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:48](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L48)

***

### rule

> **rule**: `AIModelNameRules`

Defined in: [packages/ai-tool-llm/src/llm-settings.ts:20](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-settings.ts#L20)

#### Inherited from

[`AIProviderSettings`](../interfaces/AIProviderSettings.md).[`rule`](../interfaces/AIProviderSettings.md#rule)

***

### scope?

> `optional` **scope**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:28

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:30

#### Parameters

##### this

`ToolFunc`

##### options?

`FuncItem`

#### Returns

`void`

***

### stream?

> `optional` **stream**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:32

***

### supports

> **supports**: [`AIModelType`](../enumerations/AIModelType.md) \| [`AIModelType`](../enumerations/AIModelType.md)[]

Defined in: [packages/ai-tool-llm/src/llm-settings.ts:22](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-settings.ts#L22)

#### Inherited from

[`AIProviderSettings`](../interfaces/AIProviderSettings.md).[`supports`](../interfaces/AIProviderSettings.md#supports)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:29

***

### current?

> `static` `optional` **current**: `string`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:38](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L38)

***

### dataPath

> `static` **dataPath**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:53

***

### items

> `static` **items**: `object` = `LLMProviders`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:40](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L40)

#### Index Signature

\[`name`: `string`\]: [`LLMProvider`](LLMProvider.md)

## Methods

### addModel()?

> `optional` **addModel**(`modelName`, `model`): `Promise`\<`any`\>

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:29](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L29)

#### Parameters

##### modelName

`string`

##### model

`any`

#### Returns

`Promise`\<`any`\>

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:72

#### Parameters

##### params

`any`[]

#### Returns

`any`[]

***

### assign()

> **assign**(`src`, `options`?): `this`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

Assign the values from the src object.

#### Parameters

##### src

`any`

the source object

##### options?

`IMergeOptions`

#### Returns

`this`

this object

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:117

Assign a property of src to this object.

#### Parameters

##### src

`any`

the src object

##### name

`string`

the property name to assign

##### value

`any`

the property value to assign

##### attrs?

`any`

the attributes object

##### options?

`IMergeOptions`

#### Returns

`void`

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:131

Assign the property value from the src to destination object.

#### Parameters

##### dest

`any`

The destination object

##### src

`any`

The src object

##### name

`string`

The property name

##### value

`any`

The property value

##### attrs?

`any`

The attributes object of the property

##### options?

`IMergeOptions`

#### Returns

`void`

***

### assignTo()

> **assignTo**(`dest`?, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

Assign this attributes to the dest object

#### Parameters

##### dest?

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the dest object

***

### clone()

> **clone**(`options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:155

Create a new object with the same values of attributes.

#### Parameters

##### options?

`IMergeOptions`

#### Returns

`any`

the new object

***

### cloneTo()

> **cloneTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:148

Create and assign the values to the destination object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the new dest object

***

### countTokens()

> **countTokens**(`text`, `options`?): `Promise`\<`number`\>

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:268](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L268)

#### Parameters

##### text

`string` | `AIChatMessageParam`[]

##### options?

[`AITokenizeOptions`](../interfaces/AITokenizeOptions.md)

#### Returns

`Promise`\<`number`\>

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

Define the attributes of this object.

#### Parameters

##### aProperties

`SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

***

### deleteModel()?

> `optional` **deleteModel**(`modelName`): `Promise`\<`any`\>

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:30](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L30)

#### Parameters

##### modelName

`string`

#### Returns

`Promise`\<`any`\>

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

Export attributes to the dest json object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IExportOptions`

#### Returns

`any`

the dest object.

***

### formatPrompt()

> **formatPrompt**(`messages`, `modelInfo`?, `options`?): `Promise`\<`undefined` \| `string`\>

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:186](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L186)

#### Parameters

##### messages

`AIChatMessageParam`[]

##### modelInfo?

`string` | [`AIModelParams`](../type-aliases/AIModelParams.md)

##### options?

###### add_generation_prompt?

`boolean`

###### chatTemplate?

`AIPromptResult`

###### defaultTemplate?

`boolean`

###### prompt?

`any`

###### SystemTemplate?

`AIPromptResult`

###### type?

`AIPromptType`

#### Returns

`Promise`\<`undefined` \| `string`\>

***

### func()

> **func**(`input`): `Promise`\<`AIResult`\<`any`, `any`\>\>

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:84](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L84)

#### Parameters

##### input

[`LLMArguments`](../interfaces/LLMArguments.md)

#### Returns

`Promise`\<`AIResult`\<`any`, `any`\>\>

***

### getChatTemplate()

> **getChatTemplate**(`modelInfo`?, `options`?): `Promise`\<`undefined` \| `AIPromptResult`\>

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:144](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L144)

#### Parameters

##### modelInfo?

`string` | [`AIModelParams`](../type-aliases/AIModelParams.md)

##### options?

###### defaultTemplate?

`boolean`

###### type?

`AIPromptType`

#### Returns

`Promise`\<`undefined` \| `AIPromptResult`\>

***

### getCurrentProvider()

> **getCurrentProvider**(): `undefined` \| [`LLMProvider`](LLMProvider.md)

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:118](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L118)

#### Returns

`undefined` \| [`LLMProvider`](LLMProvider.md)

***

### getDefaultParameters()

> **getDefaultParameters**(`chatTemplate`, `model`): `any`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:254](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L254)

#### Parameters

##### chatTemplate

`AIPromptSettings`

##### model

`string`

#### Returns

`any`

***

### getFunc()

> **getFunc**(`name`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:78

#### Parameters

##### name?

`string`

#### Returns

`any`

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:83

#### Parameters

##### name?

`string`

#### Returns

`any`

***

### getModelInfo()

> **getModelInfo**(`modelName`?, `options`?): `Promise`\<`undefined` \| [`AIModelParams`](../type-aliases/AIModelParams.md)\>

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:130](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L130)

#### Parameters

##### modelName?

`string`

##### options?

`any`

#### Returns

`Promise`\<`undefined` \| [`AIModelParams`](../type-aliases/AIModelParams.md)\>

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:84

#### Parameters

##### feature

`AsyncFeatureBits`

#### Returns

`boolean`

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:140

Determines whether an object has a property with the specified name.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

***

### initialize()

> **initialize**(`src`?): `this`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

Initialize object and assign attribute values from src if src exists.

#### Parameters

##### src?

`any`

#### Returns

`this`

this object.

***

### isModelNameMatched()

> **isModelNameMatched**(`modelName`, `rule`?): `undefined` \| `string` \| `RegExpExecArray`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:75](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L75)

#### Parameters

##### modelName

`string`

##### rule?

`AIModelNameRules`

#### Returns

`undefined` \| `string` \| `RegExpExecArray`

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:146

Determines whether an object exists in another object's prototype chain.

#### Parameters

##### v

`Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

***

### isSame()

> **isSame**(`src`, `options`?): `boolean`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

Check the src object whether “equals” this object.

#### Parameters

##### src

`any`

The source object

##### options?

`IMergeOptions`

#### Returns

`boolean`

***

### isStream()

> **isStream**(`params`): `any`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:80](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L80)

#### Parameters

##### params

`ServerFuncParams`

#### Returns

`any`

***

### listModels()?

> `optional` **listModels**(): `Promise`\<`undefined` \| `string`[]\>

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:27](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L27)

#### Returns

`Promise`\<`undefined` \| `string`[]\>

***

### listProviders()

> **listProviders**(`options`?): `object`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:103](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L103)

#### Parameters

##### options?

###### all?

`boolean`

###### filter?

`AIModelNameRules`

#### Returns

`object`

***

### mergeTo()

> **mergeTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

Merge this attributes to dest object.

#### Parameters

##### dest

`any`

The destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the dest object.

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:73

#### Parameters

##### params?

`any`

#### Returns

`any`[]

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:152

Determines whether a specified property is enumerable.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

***

### register()

> **register**(): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:70

#### Returns

`boolean` \| `ToolFunc`

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:75

#### Parameters

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:76

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:77

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

***

### runSync()

> **runSync**(`params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:74

#### Parameters

##### params?

`any`

#### Returns

`any`

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:81

#### Parameters

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:82

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:80

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:79

#### Parameters

##### params

...`any`[]

#### Returns

`any`

***

### setCurrentProvider()

> **setCurrentProvider**(`name`): `void`

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:122](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L122)

#### Parameters

##### name

`string`

#### Returns

`void`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

#### Returns

`any`

***

### tokenize()

> **tokenize**(`text`, `options`): `Promise`\<`number`[]\>

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:258](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L258)

#### Parameters

##### text

`string` | `AIChatMessageParam`[]

##### options

[`AITokenizeOptions`](../interfaces/AITokenizeOptions.md) = `{}`

#### Returns

`Promise`\<`number`[]\>

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

***

### toObject()

> **toObject**(`options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

Convert the attributes to the json object

#### Parameters

##### options?

`any`

#### Returns

`any`

the json object.

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

***

### unregister()

> **unregister**(): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:71

#### Returns

`any`

***

### updateModel()?

> `optional` **updateModel**(`modelName`, `model`): `Promise`\<`any`\>

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:28](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L28)

#### Parameters

##### modelName

`string`

##### model

`any`

#### Returns

`Promise`\<`any`\>

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

##### Parameters

###### target

`T`

The target object to copy to.

###### source

`U`

The source object from which to copy properties.

##### Returns

`T` & `U`

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

• **W**

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

###### source3

`W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

#### Call Signature

> `static` **assign**(`target`, ...`sources`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

###### target

`object`

The target object to copy to.

###### sources

...`any`[]

One or more source objects from which to copy properties

##### Returns

`any`

***

### create()

#### Call Signature

> `static` **create**(`o`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:188

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

###### o

Object to use as a prototype. May be null.

`null` | `object`

##### Returns

`any`

#### Call Signature

> `static` **create**(`o`, `properties`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:195

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

###### o

Object to use as a prototype. May be null

`null` | `object`

###### properties

`PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:11

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

##### aTarget

`any`

##### aProperties

`PropDescriptors`

##### recreate?

`boolean`

#### Returns

`any`

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:203

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

##### p

`PropertyKey`

The property name.

##### attributes

`PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

***

### entries()

#### Call Signature

> `static` **entries**\<`T`\>(`o`): \[`string`, `T`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\} | `ArrayLike`\<`T`\>

##### Returns

\[`string`, `T`\][]

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

\[`string`, `any`\][]

***

### freeze()

#### Call Signature

> `static` **freeze**\<`T`\>(`f`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:222

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `Function`

##### Parameters

###### f

`T`

Object on which to lock the attributes.

##### Returns

`T`

#### Call Signature

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:228

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `object`

• **U** *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

#### Call Signature

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:234

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T**

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

***

### fromEntries()

#### Call Signature

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

Returns an object created by key-value entries for properties and methods

##### Type Parameters

• **T** = `any`

##### Parameters

###### entries

`Iterable`\<readonly \[`PropertyKey`, `T`\]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

#### Call Signature

> `static` **fromEntries**(`entries`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

Returns an object created by key-value entries for properties and methods

##### Parameters

###### entries

`Iterable`\<readonly `any`[]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

***

### get()

> `static` **get**(`name`): `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:54

#### Parameters

##### name

`string`

#### Returns

`ToolFunc`

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): `ToolFunc`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:57

#### Parameters

##### tagName

`string`

#### Returns

`ToolFunc`[]

***

### getByModel()

> `static` **getByModel**(`modelName`?): `undefined` \| [`LLMProvider`](LLMProvider.md)

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:51](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L51)

#### Parameters

##### modelName?

`string`

#### Returns

`undefined` \| [`LLMProvider`](LLMProvider.md)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:56

#### Parameters

##### tagName

`string`

#### Returns

`undefined` \| `ToolFunc`

***

### getCurrentProvider()

> `static` **getCurrentProvider**(): `undefined` \| [`LLMProvider`](LLMProvider.md)

Defined in: [packages/ai-tool-llm/src/llm-provider.ts:69](https://github.com/isdk/ai-tool-llm.js/blob/1e1b7ab3f06396b8a60947ad8324e2fc8804a53b/src/llm-provider.ts#L69)

#### Returns

`undefined` \| [`LLMProvider`](LLMProvider.md)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:61

#### Parameters

##### name

`string`

#### Returns

`any`

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:64

#### Parameters

##### name

`string`

#### Returns

`any`

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:175

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

##### o

`any`

Object that contains the property.

##### p

`PropertyKey`

Name of the property.

#### Returns

`undefined` \| `PropertyDescriptor`

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

Returns an object containing all own property descriptors of an object

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:182

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

##### o

`any`

Object that contains the own properties.

#### Returns

`string`[]

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

Returns an array of all symbol properties found directly on object o.

#### Parameters

##### o

`any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:167

Returns the prototype of an object.

#### Parameters

##### o

`any`

The object that references the prototype.

#### Returns

`any`

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:58

#### Parameters

##### feature

`AsyncFeatureBits`

#### Returns

`boolean`

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

Returns true if the values are the same value, false otherwise.

#### Parameters

##### value1

`any`

The first value.

##### value2

`any`

The second value.

#### Returns

`boolean`

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:258

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:252

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:246

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

***

### keys()

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:264

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

`object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

***

### list()

> `static` **list**(): `Funcs`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:55

#### Returns

`Funcs`

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:240

Prevents the addition of new properties to an object.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object to make non-extensible.

#### Returns

`T`

***

### register()

#### Call Signature

> `static` **register**(`name`, `options`): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:65

##### Parameters

###### name

`string`

###### options

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:66

##### Parameters

###### func

`Function`

###### options

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

#### Call Signature

> `static` **register**(`name`, `options`?): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:67

##### Parameters

###### name

`string` | `Function` | `ToolFunc` | `FuncItem`

###### options?

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:59

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:60

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:62

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:63

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:216

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object on which to lock the attributes.

#### Returns

`T`

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

##### o

`any`

The object to change its prototype.

##### proto

The value of the new prototype or null.

`null` | `object`

#### Returns

`any`

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:68

#### Parameters

##### name

`string`

#### Returns

`undefined` \| `ToolFunc`

***

### values()

#### Call Signature

> `static` **values**\<`T`\>(`o`): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\} | `ArrayLike`\<`T`\>

##### Returns

`T`[]

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]
