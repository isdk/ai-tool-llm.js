/** Types and definitions for skills within the Language Model (LLM) system. */

export const AIModelSkillTypes = ['internal', 'public'] as const
export type  AIModelSkillType = typeof AIModelSkillTypes[number]

/** Defines types of skill scores, indicating whether they are rated by an external authority or users. */
export const AIModelSkillScoreTypes = [
   // Rated by HuggingFaceH4/open_llm_leaderboard for benchmarking purposes.
   'open_llm',
   // Rated by actual users of the system for subjective feedback.
   'user'
] as const
export type AIModelSkillScoreType = typeof AIModelSkillScoreTypes[number]

/** Represents a skill score, including its type and numerical value. */
export interface AIModelSkillScore {
  /** The source or authority that rated this skill (e.g., an open_llm benchmark or user feedback). */
  type: AIModelSkillScoreType;
  /** A numeric value representing the quality of the skill, as determined by its rating source. */
  score: number;
}

/** Lists the names of publicly recognized skills known to users. */
export const AIModelPublicSkillNames = [
  'Knowledge',
  'Reasoning',
  'Roleplay',
  'Coding',
  'Math',
  'History',
  'Science',
  'Tool',
  // 'SeePic',
] as const
export type AIModelPublicSkillName = typeof AIModelPublicSkillNames[number]

/** Lists the names of skills that are internal to the system and not directly observable by users. */
export const AIModelInternalSKillNames = [
  'Extract',
  'Embeddings',
  // Generating concise summaries from text input.
  'Summary',
] as const
export type AIModelInternalSkillName = typeof AIModelInternalSKillNames[number]

/** Combines both public and internal skills into a single namespace for convenience. */
export type AIModelSkillName = AIModelPublicSkillName | AIModelInternalSkillName

/** Defines the structure of an individual skill, including its name, description (optional), type, and scores (if available). */
export interface AIModelSkill {
  /** The name of the skill as recognized by users or internal to the system. */
  name: AIModelSkillName;
  /** An optional textual description providing additional context about the skill's function or purpose. */
  description?: string;
  /** Indicates whether this skill is internal (system-specific) or public (user-facing). Defaults to 'public'. */
  type?: AIModelSkillType;
  /** An array of scores associated with this skill, reflecting evaluations by different authorities or user feedback. */
  score?: AIModelSkillScore[];
}
