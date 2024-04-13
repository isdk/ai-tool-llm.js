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

## Refs

-----------------------------------------

cloudflare用的是[AWQ](https://github.com/mit-han-lab/llm-awq)量化
https://github.com/mit-han-lab/TinyChatEngine

### LLava

关于多模态，目前llama.cpp支持 llava-v1.5(BakLLaVA-1), llava-v1.6, mobileVLM，每一个大小都要一个对应的`mmproj`
https://www.reddit.com/r/LocalLLaMA/comments/1agrxnz/llamacpp_experimental_llava_16_quants_34b_and/

llava-v1.5可以工作在一些llama2, mistra的变体上，
llava-v1.6可以工作在一些llama2, mistra,yi的变体上, 7b, 13b, 34b

因为1.6强于1.5这里只支持1.6,

LLava1.6提供了多个已经合并了projector的模型，只需要用`llava-surgery-v2.py` split分离出projector,参考`examples/llava/README.md`
中的说明。

实际上我发现，似乎只要同参数大小，mistra的projector也可以用在llama2的变体上。

注意： llava1.6至少需要3000tokens, 建议`-c 4096`

### ModelFusion

```ts
import { ollama } from "modelfusion";

const api = ollama.Api({
  baseUrl: "http://localhost:11434",
});
```

### Cloudflare AI

https://github.com/cloudflare/workers-sdk/blob/main/packages/wrangler/src/ai/listCatalog.tsx
https://developers.cloudflare.com/workers-ai/models/ 参考它的 API定义(curl)
它的思路将其概括为： modelName 和 input， modelName直接放在url上，返回值根据model类别不同，返回不同。
model类别应该是内部配置, `npx wrangler ai models` 返回所有支持的模型
用`npx wrangler` 建立了一个demo应用 `~/Documents/mywork/public/@isdk/hello-ai` `npx wrangler ai models --json > models.json`

常规输出为：

```json
{
  "result": {"根据类别不同结果不同"},
  "success": true,
  "errors": [],
  "messages": []
}
```

model 类别有：

* ASR(Automatic speech recognition)
  * input: POST的音频文件
  * output: result 字段

  ```json
  {
    "text": "It is a good day",
    "word_count": 5,
    "words": [
      {
        "word": "It",
        "start": 0.5600000023841858,
        "end": 1
      },
    ]
  }
  ```

* Image Classification
  * input: POST的图片文件
  * output: result 字段

  ```json
  [
    { "label":"PERSIAN CAT" ,"score":0.4071170687675476 },
  ]
  ```

* ​​Image-to-Text
  * input: `{image: [...], prompt: "", max_tokens: 512}`
  * output: `{description: ""}`
* ​​Summarization
  * input: `{input_text: "", max_length: 1024}`
  * output: `{summary: ""}`
* Text Embeddings
  * input: `{text: string|string[]}` 数组不能超过100
  * output: `{shape: number[0], data: number[][]}` shape: `[2,768]` 第一个数表示数组大小，第二个表示嵌入的维度(dimensions)
* Text GenerationText Generation
  * input: `{ "prompt": "where is new york?", "stream": true }` 或者 `{ "stream": true, "messages": [{ "role": "system", "content": "You are a friendly assistant" }, { "role": "user", "content": "Why is pizza so good?" }]}`
    * 如果是stream, 用的是`EventSource`

  ```json
  {
  "type": "object",
  "oneOf": [
    {
      "properties": {
        "prompt": {
          "type": "string",
          "maxLength": 4096
        },
        "raw": {
          "type": "boolean",
          "default": false
        },
        "stream": {
          "type": "boolean",
          "default": false
        },
        "max_tokens": {
          "type": "integer",
          "default": 256
        }
      },
      "required": [
        "prompt"
      ]
    },
    {
      "properties": {
        "messages": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "role": {
                "type": "string"
              },
              "content": {
                "type": "string",
                "maxLength": 4096
              }
            },
            "required": [
              "role",
              "content"
            ]
          }
        },
        "stream": {
          "type": "boolean",
          "default": false
        },
        "max_tokens": {
          "type": "integer",
          "default": 256
        }
      },
      "required": [
        "messages"
      ]
    }
  ]
  }
  ```

  * output: 非流是 `{"response": ""}`
