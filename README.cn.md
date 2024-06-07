# ai-tool-llm

## LLMProvider

LLM(Large Language Model) 获得任意类型的大模型输出。
所有LLM Provider的基类,从这里派生.一个后端允许支持多种类型的model.

LLM提供者至少需要定义:

* `rule`: optional, `RegExp|string|function` 只对匹配的model名进行服务
  * eg, llama.cpp 为 `/[.]gguf$/`
* `async func(input: LLMArguments)`: 接收输入,返回大模型输出
  * LLMProvider 的函数目的是根据输入产生输出,一种流式JSON Object输出,一种非流式输出。

注意: 注册的provider名称会被作为url协议名部分.

大模型返回的是`JSON Object`:

```js
export type AITextGenerationFinishReason =
  | 'stop' // model generated stop sequence
  | 'length' // model generated maximum number of tokens
  | 'content-filter' // content filter violation stopped the model
  | 'tool-calls' // model triggered tool calls
  | 'error' // model stopped because of an error
  | 'other' | null; // model stopped for other reasons

export interface AIResult<TValue = any, TOptions = any> {
  /**
   * The generated value.
   */
  content?: TValue;

  /**
   * The reason why the generation stopped.
   */
  finishReason?: AITextGenerationFinishReason;
  options?: TOptions
}
```

如果是流式输出，则返回的JSON 对象中没有`finishReason`, 只有`content`,options是可选的.

注册各种LLM后端,调用LLM返回结果.
当没有指定LLM后端,使用`current`指定的LLM后端默认大模型,进行处理.
能够获得当前LLM的大模型的参数大小.

通过静态方法`getByModel(modelName: string)` 决定使用的Provider.
