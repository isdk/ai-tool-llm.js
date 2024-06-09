[@isdk/ai-tool-llm](../README.md) / [Exports](../modules.md) / AIModelSkillScore

# Interface: AIModelSkillScore

Represents a skill score, including its type and numerical value.

## Table of contents

### Properties

- [score](AIModelSkillScore.md#score)
- [type](AIModelSkillScore.md#type)

## Properties

### score

• **score**: `number`

A numeric value representing the quality of the skill, as determined by its rating source.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:20](https://github.com/isdk/ai-tool-llm.js/blob/335897f1d8898e0c53c1c3befe0d938285504613/src/llm-skills.ts#L20)

___

### type

• **type**: ``"open_llm"`` \| ``"user"``

The source or authority that rated this skill (e.g., an open_llm benchmark or user feedback).

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:18](https://github.com/isdk/ai-tool-llm.js/blob/335897f1d8898e0c53c1c3befe0d938285504613/src/llm-skills.ts#L18)
