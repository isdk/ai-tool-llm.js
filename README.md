# ai-tool-llm

LLM(Large Language Model) 获得任意类型的大模型输出。

我需要一个配置表，用来通过model名称查找： task类型，以及可以使用的后端。
另外对于stream模式如何传递abort?可能在函数中增加额外的标识，流的实质是`EventSource`
这里绝大多数后端都能够在浏览器端直接运行。不过这里不关心到底是在那里注册。

model名配置规则，允许RegExp：
`/*.gguf$/`

我得让`providers`自己提供它的配置规则。

一个后端可以支持多种类型的model.

LLMProvider 的函数目的是根据输入产生输出,一种流式JSON Object输出,一种非流式输出。
通过静态方法`getByModel(modelName: string)` 决定使用的Provider.

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

