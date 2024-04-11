import { LLMProvider } from "../src/llm-provider"

const testLLMProvider = new LLMProvider('LLMTest', {
  rule: /.test$/
})

describe('LLMProvider', ()=>{
  beforeAll(()=>{
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
})