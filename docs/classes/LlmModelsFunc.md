[@isdk/ai-tool-llm](../README.md) / [Exports](../modules.md) / LlmModelsFunc

# Class: LlmModelsFunc

## Hierarchy

- `KVSqliteResFunc`\<`LlmModelsFuncParams`\>

  ↳ **`LlmModelsFunc`**

## Table of contents

### Constructors

- [constructor](LlmModelsFunc.md#constructor)

### Properties

- [$attributes](LlmModelsFunc.md#$attributes)
- [action](LlmModelsFunc.md#action)
- [allowExportFunc](LlmModelsFunc.md#allowexportfunc)
- [apiRoot](LlmModelsFunc.md#apiroot)
- [constructor](LlmModelsFunc.md#constructor-1)
- [db](LlmModelsFunc.md#db)
- [dbPath](LlmModelsFunc.md#dbpath)
- [defaultOptions](LlmModelsFunc.md#defaultoptions)
- [depends](LlmModelsFunc.md#depends)
- [fetchOptions](LlmModelsFunc.md#fetchoptions)
- [initDir](LlmModelsFunc.md#initdir)
- [methods](LlmModelsFunc.md#methods)
- [name](LlmModelsFunc.md#name)
- [nonExported1stChar](LlmModelsFunc.md#nonexported1stchar)
- [params](LlmModelsFunc.md#params)
- [result](LlmModelsFunc.md#result)
- [rootDir](LlmModelsFunc.md#rootdir)
- [scope](LlmModelsFunc.md#scope)
- [setup](LlmModelsFunc.md#setup)
- [stream](LlmModelsFunc.md#stream)
- [tags](LlmModelsFunc.md#tags)
- [usingMirror](LlmModelsFunc.md#usingmirror)
- [dataPath](LlmModelsFunc.md#datapath)
- [items](LlmModelsFunc.md#items)

### Accessors

- [apiRoot](LlmModelsFunc.md#apiroot-1)

### Methods

- [$count](LlmModelsFunc.md#$count)
- [$download](LlmModelsFunc.md#$download)
- [$getFileInfo](LlmModelsFunc.md#$getfileinfo)
- [$run](LlmModelsFunc.md#$run)
- [$search](LlmModelsFunc.md#$search)
- [$searchEx](LlmModelsFunc.md#$searchex)
- [\_getUrlByParams](LlmModelsFunc.md#_geturlbyparams)
- [arr2ObjParams](LlmModelsFunc.md#arr2objparams)
- [assign](LlmModelsFunc.md#assign)
- [assignProperty](LlmModelsFunc.md#assignproperty)
- [assignPropertyTo](LlmModelsFunc.md#assignpropertyto)
- [assignTo](LlmModelsFunc.md#assignto)
- [cast](LlmModelsFunc.md#cast)
- [clone](LlmModelsFunc.md#clone)
- [cloneTo](LlmModelsFunc.md#cloneto)
- [defineProperties](LlmModelsFunc.md#defineproperties)
- [delete](LlmModelsFunc.md#delete)
- [exportTo](LlmModelsFunc.md#exportto)
- [func](LlmModelsFunc.md#func)
- [get](LlmModelsFunc.md#get)
- [getDocsFromDir](LlmModelsFunc.md#getdocsfromdir)
- [getFileInfo](LlmModelsFunc.md#getfileinfo)
- [getFunc](LlmModelsFunc.md#getfunc)
- [getFuncWithPos](LlmModelsFunc.md#getfuncwithpos)
- [getMethodFromParams](LlmModelsFunc.md#getmethodfromparams)
- [getPath](LlmModelsFunc.md#getpath)
- [getProperties](LlmModelsFunc.md#getproperties)
- [getUrl](LlmModelsFunc.md#geturl)
- [getUrlFromHf](LlmModelsFunc.md#geturlfromhf)
- [hasOwnProperty](LlmModelsFunc.md#hasownproperty)
- [initDB](LlmModelsFunc.md#initdb)
- [initialize](LlmModelsFunc.md#initialize)
- [intDBFromDir](LlmModelsFunc.md#intdbfromdir)
- [isPrototypeOf](LlmModelsFunc.md#isprototypeof)
- [isSame](LlmModelsFunc.md#issame)
- [isStream](LlmModelsFunc.md#isstream)
- [list](LlmModelsFunc.md#list)
- [mergeTo](LlmModelsFunc.md#mergeto)
- [obj2ArrParams](LlmModelsFunc.md#obj2arrparams)
- [post](LlmModelsFunc.md#post)
- [propertyIsEnumerable](LlmModelsFunc.md#propertyisenumerable)
- [put](LlmModelsFunc.md#put)
- [register](LlmModelsFunc.md#register)
- [run](LlmModelsFunc.md#run)
- [runAs](LlmModelsFunc.md#runas)
- [runAsSync](LlmModelsFunc.md#runassync)
- [runSync](LlmModelsFunc.md#runsync)
- [runWithPos](LlmModelsFunc.md#runwithpos)
- [runWithPosAs](LlmModelsFunc.md#runwithposas)
- [runWithPosAsSync](LlmModelsFunc.md#runwithposassync)
- [runWithPosSync](LlmModelsFunc.md#runwithpossync)
- [toJSON](LlmModelsFunc.md#tojson)
- [toLocaleString](LlmModelsFunc.md#tolocalestring)
- [toObject](LlmModelsFunc.md#toobject)
- [toString](LlmModelsFunc.md#tostring)
- [unregister](LlmModelsFunc.md#unregister)
- [updateDBFromDir](LlmModelsFunc.md#updatedbfromdir)
- [valueOf](LlmModelsFunc.md#valueof)
- [verifyFileExists](LlmModelsFunc.md#verifyfileexists)
- [assign](LlmModelsFunc.md#assign-1)
- [create](LlmModelsFunc.md#create)
- [defineProperties](LlmModelsFunc.md#defineproperties-1)
- [defineProperty](LlmModelsFunc.md#defineproperty)
- [entries](LlmModelsFunc.md#entries)
- [freeze](LlmModelsFunc.md#freeze)
- [fromEntries](LlmModelsFunc.md#fromentries)
- [get](LlmModelsFunc.md#get-1)
- [getAllByTag](LlmModelsFunc.md#getallbytag)
- [getByTag](LlmModelsFunc.md#getbytag)
- [getFunc](LlmModelsFunc.md#getfunc-1)
- [getFuncWithPos](LlmModelsFunc.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](LlmModelsFunc.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](LlmModelsFunc.md#getownpropertydescriptors)
- [getOwnPropertyNames](LlmModelsFunc.md#getownpropertynames)
- [getOwnPropertySymbols](LlmModelsFunc.md#getownpropertysymbols)
- [getProperties](LlmModelsFunc.md#getproperties-1)
- [getPrototypeOf](LlmModelsFunc.md#getprototypeof)
- [is](LlmModelsFunc.md#is)
- [isExtensible](LlmModelsFunc.md#isextensible)
- [isFrozen](LlmModelsFunc.md#isfrozen)
- [isSealed](LlmModelsFunc.md#issealed)
- [keys](LlmModelsFunc.md#keys)
- [list](LlmModelsFunc.md#list-1)
- [preventExtensions](LlmModelsFunc.md#preventextensions)
- [register](LlmModelsFunc.md#register-1)
- [run](LlmModelsFunc.md#run-1)
- [runSync](LlmModelsFunc.md#runsync-1)
- [runWithPos](LlmModelsFunc.md#runwithpos-1)
- [runWithPosSync](LlmModelsFunc.md#runwithpossync-1)
- [seal](LlmModelsFunc.md#seal)
- [setApiRoot](LlmModelsFunc.md#setapiroot)
- [setPrototypeOf](LlmModelsFunc.md#setprototypeof)
- [toJSON](LlmModelsFunc.md#tojson-1)
- [unregister](LlmModelsFunc.md#unregister-1)
- [values](LlmModelsFunc.md#values)

## Constructors

### constructor

• **new LlmModelsFunc**(`name`, `options?`): [`LlmModelsFunc`](LlmModelsFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `FuncItem` |
| `options` | `any` |

#### Returns

[`LlmModelsFunc`](LlmModelsFunc.md)

#### Overrides

KVSqliteResFunc\&lt;LlmModelsFuncParams\&gt;.constructor

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:38](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L38)

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

KVSqliteResFunc.$attributes

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### action

• **action**: ``"put"`` \| ``"list"`` \| ``"get"`` \| ``"post"`` \| ``"delete"`` \| ``"patch"`` \| ``"res"``

#### Inherited from

KVSqliteResFunc.action

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:550

___

### allowExportFunc

• `Optional` **allowExportFunc**: `boolean`

#### Inherited from

KVSqliteResFunc.allowExportFunc

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:396

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Inherited from

KVSqliteResFunc.apiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:130

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

KVSqliteResFunc.constructor

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:125

___

### db

• **db**: `KVSqlite`

#### Inherited from

KVSqliteResFunc.db

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:164

___

### dbPath

• **dbPath**: `undefined` \| `string`

#### Inherited from

KVSqliteResFunc.dbPath

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:162

___

### defaultOptions

• **defaultOptions**: `Object`

The default options for export and assign

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assign?` | `IMergeOptions` |
| `export?` | `IMergeOptions` |

#### Inherited from

KVSqliteResFunc.defaultOptions

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### depends

• **depends**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `download` | `DownloadFunc` |
| `llm` | [`LLMProvider`](LLMProvider.md) |

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:33](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L33)

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Inherited from

KVSqliteResFunc.fetchOptions

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:132

___

### initDir

• **initDir**: `undefined` \| `string`

#### Inherited from

KVSqliteResFunc.initDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:163

___

### methods

• **methods**: `string`[]

#### Inherited from

KVSqliteResFunc.methods

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:542

___

### name

• `Optional` **name**: `string`

#### Inherited from

KVSqliteResFunc.name

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:22

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

KVSqliteResFunc.nonExported1stChar

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• **params**: `FuncParams`

#### Inherited from

KVSqliteResFunc.params

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:551

___

### result

• `Optional` **result**: `string`

#### Inherited from

KVSqliteResFunc.result

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:24

___

### rootDir

• **rootDir**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:30](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L30)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

KVSqliteResFunc.scope

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

#### Inherited from

KVSqliteResFunc.setup

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:27

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

KVSqliteResFunc.stream

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:133

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

KVSqliteResFunc.tags

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:26

___

### usingMirror

• **usingMirror**: `undefined` \| `boolean`

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:31](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L31)

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

KVSqliteResFunc.dataPath

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:43

___

### items

▪ `Static` **items**: `Funcs`

#### Inherited from

KVSqliteResFunc.items

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:42

## Accessors

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

KVSqliteResFunc.apiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:403

## Methods

### $count

▸ **$count**(`options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `KVSqliteResFuncParams` |

#### Returns

`number`

#### Inherited from

KVSqliteResFunc.$count

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:178

___

### $download

▸ **$download**(`params`): `Promise`\<`undefined` \| \{ `downloaded`: `undefined` \| `boolean` = file.downloaded; `filepath`: `undefined` \| `string` ; `id`: `string` ; `model`: `undefined` \| `string` = model.\_id; `quant`: `undefined` \| [`AIModelQuantType`](../enums/AIModelQuantType.md) = file.quant; `size`: `undefined` \| `number` = file.size; `url`: `string`  }[] \| \{ `[name: string]`: `any`; `id`: `string`  } \| (`undefined` \| \{ `[name: string]`: `any`; `id`: `string`  })[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `LlmModelsFuncParams` |

#### Returns

`Promise`\<`undefined` \| \{ `downloaded`: `undefined` \| `boolean` = file.downloaded; `filepath`: `undefined` \| `string` ; `id`: `string` ; `model`: `undefined` \| `string` = model.\_id; `quant`: `undefined` \| [`AIModelQuantType`](../enums/AIModelQuantType.md) = file.quant; `size`: `undefined` \| `number` = file.size; `url`: `string`  }[] \| \{ `[name: string]`: `any`; `id`: `string`  } \| (`undefined` \| \{ `[name: string]`: `any`; `id`: `string`  })[]\>

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:182](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L182)

___

### $getFileInfo

▸ **$getFileInfo**(`params`): `Promise`\<\{ `file`: [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md) \| [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md)[] ; `filepath`: `any` ; `id`: `string` \| `number` ; `model`: [`AIModelSettings`](../interfaces/AIModelSettings.md) ; `quant`: `any` ; `url`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `LlmModelsFuncParams` |

#### Returns

`Promise`\<\{ `file`: [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md) \| [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md)[] ; `filepath`: `any` ; `id`: `string` \| `number` ; `model`: [`AIModelSettings`](../interfaces/AIModelSettings.md) ; `quant`: `any` ; `url`: `string`  }\>

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:177](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L177)

___

### $run

▸ **$run**(`input`): `Promise`\<`AIResult`\<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`LLMArguments`](../interfaces/LLMArguments.md) |

#### Returns

`Promise`\<`AIResult`\<`any`, `any`\>\>

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:244](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L244)

___

### $search

▸ **$search**(`options?`): `LlmModelsFuncParams`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `KVSqliteResFuncParams` |

#### Returns

`LlmModelsFuncParams`[]

#### Inherited from

KVSqliteResFunc.$search

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:177

___

### $searchEx

▸ **$searchEx**(`options?`): `LlmModelsFuncParams`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `KVSqliteResFuncParams` |

#### Returns

`LlmModelsFuncParams`[]

#### Inherited from

KVSqliteResFunc.$searchEx

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:176

___

### \_getUrlByParams

▸ **_getUrlByParams**(`«destructured»`): `Promise`\<\{ `file`: [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md) \| [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md)[] ; `filepath`: `any` ; `id`: `string` \| `number` ; `model`: [`AIModelSettings`](../interfaces/AIModelSettings.md) ; `quant`: `any` ; `url`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `LlmModelsFuncParams` |

#### Returns

`Promise`\<\{ `file`: [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md) \| [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md)[] ; `filepath`: `any` ; `id`: `string` \| `number` ; `model`: [`AIModelSettings`](../interfaces/AIModelSettings.md) ; `quant`: `any` ; `url`: `string`  }\>

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:144](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L144)

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Inherited from

KVSqliteResFunc.arr2ObjParams

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

#### Inherited from

KVSqliteResFunc.assign

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

#### Inherited from

KVSqliteResFunc.assignProperty

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

#### Inherited from

KVSqliteResFunc.assignPropertyTo

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

#### Inherited from

KVSqliteResFunc.assignTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:191

___

### cast

▸ **cast**(`key`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.cast

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:170

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

#### Inherited from

KVSqliteResFunc.clone

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

#### Inherited from

KVSqliteResFunc.cloneTo

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

#### Inherited from

KVSqliteResFunc.defineProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

___

### delete

▸ **delete**(`«destructured»`): `SqliteRunResult` \| `SqliteRunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `KVSqliteResFuncParams` |

#### Returns

`SqliteRunResult` \| `SqliteRunResult`[]

#### Inherited from

KVSqliteResFunc.delete

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:175

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

#### Inherited from

KVSqliteResFunc.exportTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:173

___

### func

▸ **func**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ResServerFuncParams` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.func

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:555

___

### get

▸ **get**(`«destructured»`): `LlmModelsFuncParams`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `KVSqliteResFuncParams` |

#### Returns

`LlmModelsFuncParams`

#### Inherited from

KVSqliteResFunc.get

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:172

___

### getDocsFromDir

▸ **getDocsFromDir**(`dir`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`any`[]

#### Overrides

KVSqliteResFunc.getDocsFromDir

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:51](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L51)

___

### getFileInfo

▸ **getFileInfo**(`id`, `quant`, `model?`): [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md) \| [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `quant` | [`AIModelQuantType`](../enums/AIModelQuantType.md) |
| `model?` | [`AIModelSettings`](../interfaces/AIModelSettings.md) |

#### Returns

[`AIModelFileSettings`](../interfaces/AIModelFileSettings.md) \| [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md)[]

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:83](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L83)

___

### getFunc

▸ **getFunc**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.getFunc

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

#### Inherited from

KVSqliteResFunc.getFuncWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:72

___

### getMethodFromParams

▸ **getMethodFromParams**(`params`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ResServerFuncParams` |

#### Returns

`undefined` \| `string`

#### Inherited from

KVSqliteResFunc.getMethodFromParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:554

___

### getPath

▸ **getPath**(`fileInfo`, `quant`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileInfo` | `string` \| [`AIModelSettings`](../interfaces/AIModelSettings.md) |
| `quant` | [`AIModelQuantType`](../enums/AIModelQuantType.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:100](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L100)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Inherited from

KVSqliteResFunc.getProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:98

___

### getUrl

▸ **getUrl**(`fileInfo`, `quant`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileInfo` | `string` \| [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md) |
| `quant` | [`AIModelQuantType`](../enums/AIModelQuantType.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:111](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L111)

___

### getUrlFromHf

▸ **getUrlFromHf**(`fileInfo`, `hubUrl?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileInfo` | [`AIModelFileSettings`](../interfaces/AIModelFileSettings.md) |
| `hubUrl?` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:123](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L123)

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

#### Inherited from

KVSqliteResFunc.hasOwnProperty

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

___

### initDB

▸ **initDB**(`initDir?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initDir?` | `string` |

#### Returns

`void`

#### Inherited from

KVSqliteResFunc.initDB

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:166

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

#### Inherited from

KVSqliteResFunc.initialize

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:139

___

### intDBFromDir

▸ **intDBFromDir**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Inherited from

KVSqliteResFunc.intDBFromDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:167

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

#### Inherited from

KVSqliteResFunc.isPrototypeOf

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

#### Inherited from

KVSqliteResFunc.isSame

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

#### Overrides

KVSqliteResFunc.isStream

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:79](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L79)

___

### list

▸ **list**(`options?`): `LlmModelsFuncParams`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `KVSqliteResFuncParams` |

#### Returns

`LlmModelsFuncParams`[]

#### Inherited from

KVSqliteResFunc.list

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:171

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

#### Inherited from

KVSqliteResFunc.mergeTo

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

#### Inherited from

KVSqliteResFunc.obj2ArrParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:62

___

### post

▸ **post**(`model`): `SqliteRunResult` \| `SqliteRunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `KVSqliteResFuncParams` |

#### Returns

`SqliteRunResult` \| `SqliteRunResult`[]

#### Inherited from

KVSqliteResFunc.post

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:174

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

#### Inherited from

KVSqliteResFunc.propertyIsEnumerable

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### put

▸ **put**(`model`): `SqliteRunResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `LlmModelsFuncParams` |

#### Returns

`SqliteRunResult`

#### Overrides

KVSqliteResFunc.put

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:134](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L134)

___

### register

▸ **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

KVSqliteResFunc.register

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

#### Inherited from

KVSqliteResFunc.run

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

#### Inherited from

KVSqliteResFunc.runAs

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

#### Inherited from

KVSqliteResFunc.runAsSync

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

#### Inherited from

KVSqliteResFunc.runSync

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

#### Inherited from

KVSqliteResFunc.runWithPos

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

#### Inherited from

KVSqliteResFunc.runWithPosAs

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

#### Inherited from

KVSqliteResFunc.runWithPosAsSync

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

#### Inherited from

KVSqliteResFunc.runWithPosSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:68

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.toJSON

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

KVSqliteResFunc.toLocaleString

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

#### Inherited from

KVSqliteResFunc.toObject

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

KVSqliteResFunc.toString

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.unregister

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:60

___

### updateDBFromDir

▸ **updateDBFromDir**(`dir?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir?` | `string` |

#### Returns

`void`

#### Inherited from

KVSqliteResFunc.updateDBFromDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:169

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

KVSqliteResFunc.valueOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:134

___

### verifyFileExists

▸ **verifyFileExists**(`model`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`AIModelSettings`](../interfaces/AIModelSettings.md) |

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/ai-tool-llm/src/llm-models.ts:60](https://github.com/isdk/ai-tool-llm.js/blob/b3f77e7db57d6b30c2a90b64effe92d0651a2e37/src/llm-models.ts#L60)

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

#### Inherited from

KVSqliteResFunc.assign

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

#### Inherited from

KVSqliteResFunc.assign

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

#### Inherited from

KVSqliteResFunc.assign

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

#### Inherited from

KVSqliteResFunc.assign

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

#### Inherited from

KVSqliteResFunc.create

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

#### Inherited from

KVSqliteResFunc.create

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

#### Inherited from

KVSqliteResFunc.defineProperties

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

#### Inherited from

KVSqliteResFunc.defineProperty

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

#### Inherited from

KVSqliteResFunc.entries

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

#### Inherited from

KVSqliteResFunc.entries

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

#### Inherited from

KVSqliteResFunc.freeze

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

#### Inherited from

KVSqliteResFunc.freeze

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

#### Inherited from

KVSqliteResFunc.freeze

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

#### Inherited from

KVSqliteResFunc.fromEntries

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

#### Inherited from

KVSqliteResFunc.fromEntries

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

#### Inherited from

KVSqliteResFunc.get

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

#### Inherited from

KVSqliteResFunc.getAllByTag

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:47

___

### getByTag

▸ **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

KVSqliteResFunc.getByTag

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:46

___

### getFunc

▸ **getFunc**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.getFunc

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

#### Inherited from

KVSqliteResFunc.getFuncWithPos

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

#### Inherited from

KVSqliteResFunc.getOwnPropertyDescriptor

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

#### Inherited from

KVSqliteResFunc.getOwnPropertyDescriptors

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

#### Inherited from

KVSqliteResFunc.getOwnPropertyNames

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

#### Inherited from

KVSqliteResFunc.getOwnPropertySymbols

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

KVSqliteResFunc.getProperties

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

#### Inherited from

KVSqliteResFunc.getPrototypeOf

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

#### Inherited from

KVSqliteResFunc.is

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

#### Inherited from

KVSqliteResFunc.isExtensible

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

#### Inherited from

KVSqliteResFunc.isFrozen

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

#### Inherited from

KVSqliteResFunc.isSealed

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

#### Inherited from

KVSqliteResFunc.keys

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

#### Inherited from

KVSqliteResFunc.keys

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): `Funcs`

#### Returns

`Funcs`

#### Inherited from

KVSqliteResFunc.list

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

#### Inherited from

KVSqliteResFunc.preventExtensions

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

#### Inherited from

KVSqliteResFunc.register

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

#### Inherited from

KVSqliteResFunc.register

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

#### Inherited from

KVSqliteResFunc.register

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

#### Inherited from

KVSqliteResFunc.run

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

#### Inherited from

KVSqliteResFunc.runSync

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

#### Inherited from

KVSqliteResFunc.runWithPos

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

#### Inherited from

KVSqliteResFunc.runWithPosSync

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

#### Inherited from

KVSqliteResFunc.seal

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:216

___

### setApiRoot

▸ **setApiRoot**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`void`

#### Inherited from

KVSqliteResFunc.setApiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:404

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

#### Inherited from

KVSqliteResFunc.setPrototypeOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

KVSqliteResFunc.toJSON

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:405

___

### unregister

▸ **unregister**(`name`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

KVSqliteResFunc.unregister

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

#### Inherited from

KVSqliteResFunc.values

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

#### Inherited from

KVSqliteResFunc.values

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
