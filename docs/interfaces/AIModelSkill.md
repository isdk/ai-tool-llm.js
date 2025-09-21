[**@isdk/ai-tool-llm**](../README.md)

***

[@isdk/ai-tool-llm](../globals.md) / AIModelSkill

# Interface: AIModelSkill

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-skills.ts:50](https://github.com/isdk/ai-tool-llm.js/blob/b85f02c051e6cb4b9c451fe72592c4077cb731a4/src/llm-skills.ts#L50)

Defines the structure of an individual skill, including its name, description (optional), type, and scores (if available).

## Properties

### description?

> `optional` **description**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-skills.ts:54](https://github.com/isdk/ai-tool-llm.js/blob/b85f02c051e6cb4b9c451fe72592c4077cb731a4/src/llm-skills.ts#L54)

An optional textual description providing additional context about the skill's function or purpose.

***

### name

> **name**: [`AIModelSkillName`](../type-aliases/AIModelSkillName.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-skills.ts:52](https://github.com/isdk/ai-tool-llm.js/blob/b85f02c051e6cb4b9c451fe72592c4077cb731a4/src/llm-skills.ts#L52)

The name of the skill as recognized by users or internal to the system.

***

### score?

> `optional` **score**: [`AIModelSkillScore`](AIModelSkillScore.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-skills.ts:58](https://github.com/isdk/ai-tool-llm.js/blob/b85f02c051e6cb4b9c451fe72592c4077cb731a4/src/llm-skills.ts#L58)

An array of scores associated with this skill, reflecting evaluations by different authorities or user feedback.

***

### type?

> `optional` **type**: `"internal"` \| `"public"`

Defined in: [@isdk/ai-tools/packages/ai-tool-llm/src/llm-skills.ts:56](https://github.com/isdk/ai-tool-llm.js/blob/b85f02c051e6cb4b9c451fe72592c4077cb731a4/src/llm-skills.ts#L56)

Indicates whether this skill is internal (system-specific) or public (user-facing). Defaults to 'public'.
