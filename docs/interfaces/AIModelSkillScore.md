[**@isdk/ai-tool-llm**](../README.md)

***

[@isdk/ai-tool-llm](../globals.md) / AIModelSkillScore

# Interface: AIModelSkillScore

Defined in: [packages/ai-tool-llm/src/llm-skills.ts:16](https://github.com/isdk/ai-tool-llm.js/blob/f3c3cef59ff3aa0ce6d3161a8d3d8cd72ec50012/src/llm-skills.ts#L16)

Represents a skill score, including its type and numerical value.

## Properties

### score

> **score**: `number`

Defined in: [packages/ai-tool-llm/src/llm-skills.ts:20](https://github.com/isdk/ai-tool-llm.js/blob/f3c3cef59ff3aa0ce6d3161a8d3d8cd72ec50012/src/llm-skills.ts#L20)

A numeric value representing the quality of the skill, as determined by its rating source.

***

### type

> **type**: `"open_llm"` \| `"user"`

Defined in: [packages/ai-tool-llm/src/llm-skills.ts:18](https://github.com/isdk/ai-tool-llm.js/blob/f3c3cef59ff3aa0ce6d3161a8d3d8cd72ec50012/src/llm-skills.ts#L18)

The source or authority that rated this skill (e.g., an open_llm benchmark or user feedback).
