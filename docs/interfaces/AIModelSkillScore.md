[**@isdk/ai-tool-llm**](../README.md) • **Docs**

***

[@isdk/ai-tool-llm](../globals.md) / AIModelSkillScore

# Interface: AIModelSkillScore

Represents a skill score, including its type and numerical value.

## Properties

### score

> **score**: `number`

A numeric value representing the quality of the skill, as determined by its rating source.

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:20](https://github.com/isdk/ai-tool-llm.js/blob/91036fde2392dfc52f5b7e20305699862b61dc63/src/llm-skills.ts#L20)

***

### type

> **type**: `"open_llm"` \| `"user"`

The source or authority that rated this skill (e.g., an open_llm benchmark or user feedback).

#### Defined in

[packages/ai-tool-llm/src/llm-skills.ts:18](https://github.com/isdk/ai-tool-llm.js/blob/91036fde2392dfc52f5b7e20305699862b61dc63/src/llm-skills.ts#L18)
