[**@isdk/ai-tool-llm**](../README.md) • **Docs**

***

[@isdk/ai-tool-llm](../globals.md) / AIModelSkill

# Interface: AIModelSkill

Defines the structure of an individual skill, including its name, description (optional), type, and scores (if available).

## Properties

### description?

> `optional` **description**: `string`

An optional textual description providing additional context about the skill's function or purpose.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:54](https://github.com/isdk/ai-tool-llm.js/blob/91036fde2392dfc52f5b7e20305699862b61dc63/src/llm-skills.ts#L54)

***

### name

> **name**: [`AIModelSkillName`](../type-aliases/AIModelSkillName.md)

The name of the skill as recognized by users or internal to the system.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:52](https://github.com/isdk/ai-tool-llm.js/blob/91036fde2392dfc52f5b7e20305699862b61dc63/src/llm-skills.ts#L52)

***

### score?

> `optional` **score**: [`AIModelSkillScore`](AIModelSkillScore.md)[]

An array of scores associated with this skill, reflecting evaluations by different authorities or user feedback.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:58](https://github.com/isdk/ai-tool-llm.js/blob/91036fde2392dfc52f5b7e20305699862b61dc63/src/llm-skills.ts#L58)

***

### type?

> `optional` **type**: `"internal"` \| `"public"`

Indicates whether this skill is internal (system-specific) or public (user-facing). Defaults to 'public'.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:56](https://github.com/isdk/ai-tool-llm.js/blob/91036fde2392dfc52f5b7e20305699862b61dc63/src/llm-skills.ts#L56)
