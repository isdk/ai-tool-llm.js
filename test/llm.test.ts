import { AIChatMessageParam, AIResult, ToolFunc } from "@isdk/ai-tool"
import { AIPromptsFunc, AIPromptsName } from '@isdk/ai-tool-prompt'
import { LLMArguments } from "../src/llm-options"
import { LLMProvider } from "../src/llm-provider"
import { AIModelParams } from "../src/llm-settings"


class TestLLMProvider extends LLMProvider {
  rule = /.test$/
  async func(input: LLMArguments): Promise<AIResult> {
    return {
      content: 'test',
      finishReason: 'stop',
      options: input,
    }
  }
  async getModelInfo(modelName?: string): Promise<AIModelParams | undefined> {
    return {
      name: modelName,
    }
  }
}
const promptsFunc = new AIPromptsFunc(AIPromptsName, {dbPath: ':memory:'})
const testLLMProvider = new TestLLMProvider('LLMTest')

describe('LLMProvider', ()=>{
  beforeAll(()=>{
    ToolFunc.register(promptsFunc)
    testLLMProvider.register()
  })
  afterAll(()=>{
    testLLMProvider.unregister()
  })
  it('isModelNameMatched', ()=>{
    expect(testLLMProvider.isModelNameMatched('c:\\df\\cc\\abc.test')).toBeTruthy()
    expect(testLLMProvider.isModelNameMatched('c:\\df\\cc\\abc.tes')).toBeFalsy()
  })

  it('getByModel', ()=>{
    const result = LLMProvider.getByModel('hi/world/no.test')
    expect(result).toStrictEqual(testLLMProvider)
  })

  it('getChatTemplate', async ()=>{
    const result = await testLLMProvider.getChatTemplate('phi-3.test')
    expect(result).toHaveProperty('prompt')
    const id = result!.prompt._id
    expect(id).toStrictEqual('Phi-3')
  })

  it('formatPrompt', async ()=>{
    const messages = [
      {role: 'user', content: '1+2='},
      {role: 'assistant', content: '3'},
      {role: 'user', content: '2+3='},
    ] as AIChatMessageParam[]
    const options = {} as any
    const result = await testLLMProvider.formatPrompt(messages, 'phi-3.test', options)
    expect(options).toHaveProperty('chatTemplate')
    expect(options.chatTemplate).toHaveProperty('prompt')
    expect(options.chatTemplate.prompt).toHaveProperty('_id', 'Phi-3')
    expect(result).toMatchInlineSnapshot(`
      "<|system|>
      You are a helpful AI assistant.<|end|>
      <|user|>
      1+2=<|end|>
      <|assistant|>
      3<|end|>
      <|user|>
      2+3=<|end|>
      <|assistant|>
      "
    `)

  })
})