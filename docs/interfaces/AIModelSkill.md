[@isdk/ai-tool-llm](../README.md) / [Exports](../modules.md) / AIModelSkill

# Interface: AIModelSkill

Defines the structure of an individual skill, including its name, description (optional), type, and scores (if available).

## Table of contents

### Properties

- [description](AIModelSkill.md#description)
- [name](AIModelSkill.md#name)
- [score](AIModelSkill.md#score)
- [type](AIModelSkill.md#type)

## Properties

### description

• `Optional` **description**: `string`

An optional textual description providing additional context about the skill's function or purpose.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:54](https://github.com/isdk/ai-tool-llm.js/blob/16d7f90cf65554ae1376e9ee19bdd937fa34f7af/src/llm-skills.ts#L54)

___

### name

• **name**: [`AIModelSkillName`](../modules.md#aimodelskillname)

The name of the skill as recognized by users or internal to the system.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:52](https://github.com/isdk/ai-tool-llm.js/blob/16d7f90cf65554ae1376e9ee19bdd937fa34f7af/src/llm-skills.ts#L52)

___

### score

• `Optional` **score**: [`AIModelSkillScore`](AIModelSkillScore.md)[]

An array of scores associated with this skill, reflecting evaluations by different authorities or user feedback.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:58](https://github.com/isdk/ai-tool-llm.js/blob/16d7f90cf65554ae1376e9ee19bdd937fa34f7af/src/llm-skills.ts#L58)

___

### type

• `Optional` **type**: ``"internal"`` \| ``"public"``

Indicates whether this skill is internal (system-specific) or public (user-facing). Defaults to 'public'.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:56](https://github.com/isdk/ai-tool-llm.js/blob/16d7f90cf65554ae1376e9ee19bdd937fa34f7af/src/llm-skills.ts#L56)
