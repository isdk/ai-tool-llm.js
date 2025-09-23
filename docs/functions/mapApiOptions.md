[**@isdk/ai-tool-llm**](../README.md)

***

[@isdk/ai-tool-llm](../globals.md) / mapApiOptions

# Function: mapApiOptions()

> **mapApiOptions**\<`TAIOptions`\>(`opts?`, `AIOptionsMap?`): `TAIOptions`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-options.ts:115](https://github.com/isdk/ai-tool-llm.js/blob/5fb2d6a1dff4fec5f518e0409c4643d47c5f9643/src/llm-options.ts#L115)

Maps properties from the provided options object to a new object according to the mappings defined in AIOptionsMap.
Supports both simple property names and paths (e.g., 'foo.bar') for nested properties.

## Type Parameters

### TAIOptions

`TAIOptions` = `any`

## Parameters

### opts?

`TAIOptions`

The original options object whose properties (including nested ones) will be copied to the new object based on the mapping.

### AIOptionsMap?

`Record`\<`string`, `string` \| `string`[]\>

A mapping table defining how properties (or paths) in opts map to properties in the target object.

## Returns

`TAIOptions`

A new object containing properties copied from opts based on the defined mappings, including support for nested properties.

## Example

```ts
const originalOpts = { user: { name: 'Alice', age: 30 }, active: true };
const mapping = { 'user.name': 'userName', 'active': 'isActive' };
const mappedOpts = mapApiOptions(originalOpts, mapping);
// mappedOpts is now { userName: 'Alice', isActive: true }
```
