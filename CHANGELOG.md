# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## 0.0.2 (2024-06-07)


### Features

* add AIModelFileSettings ([62e80bd](https://github.com/isdk/ai-tool-llm.js/commit/62e80bdacd840c004cbcd480413a9fcd052fdd1a))
* add downloaded to AIModelSimpleSettings ([e5a76fc](https://github.com/isdk/ai-tool-llm.js/commit/e5a76fcfecbc3df01a87ca37c1d42c97d7153761))
* add hugginface utils ([ede0a5e](https://github.com/isdk/ai-tool-llm.js/commit/ede0a5edb9c899f09c1cf6aab8fbec8134289be3))
* add LlmModels Resource Sever API ([cace5cb](https://github.com/isdk/ai-tool-llm.js/commit/cace5cba048e16dd2f49a0eec20d2cb0a96360ec))
* add optional response_format option to AITextGenerationOptions ([52cb89b](https://github.com/isdk/ai-tool-llm.js/commit/52cb89bcb3f2e73394aee5e1d0d80d983997bee7))
* add scaleStrToParamsSize, paramsSizeToScaleStr funcs ([c5ae9cb](https://github.com/isdk/ai-tool-llm.js/commit/c5ae9cb92b70bfc00d92be735e8d2d7280bac46c))
* add source to AIModelSimpleSettings ([6083f3e](https://github.com/isdk/ai-tool-llm.js/commit/6083f3e07c62ff48f0e21e29c820d2deaa89daad))
* add supports for the prompt template priority less than 0 indicates that if there are built-in template in the model, it will be used first. ([6e39402](https://github.com/isdk/ai-tool-llm.js/commit/6e39402c4cbd1decc7da36d9127f51fd658bd85e))
* **AIModelType:** add embedding type ([c77d6b8](https://github.com/isdk/ai-tool-llm.js/commit/c77d6b867bd8a847ba76dd9ff28008212abd398e))
* assign scale option from params_size for getModelInfo ([72c9bf4](https://github.com/isdk/ai-tool-llm.js/commit/72c9bf4a6e66702f4c9329c42db95d4671335cff))
* can run func without model name ([568e91b](https://github.com/isdk/ai-tool-llm.js/commit/568e91bf07b6d82cd4ac903359b8d79713f65b9d))
* export more ([0ff21ab](https://github.com/isdk/ai-tool-llm.js/commit/0ff21ab632b51dc51da49ec65a23c7d867fb8aef))
* **llm-models:** add dryRun option to $download method ([5bc203b](https://github.com/isdk/ai-tool-llm.js/commit/5bc203bc1c0597db996fda875fee8e5eb5308110))
* **LLMProvider:** add getChatTemplate and formatPrompt methods ([c9c799a](https://github.com/isdk/ai-tool-llm.js/commit/c9c799a8302483fedf10b4c33a65bd4232116d1e))
* **LLMProvider:** add getDefaultParameters method ([9f7821e](https://github.com/isdk/ai-tool-llm.js/commit/9f7821ec8b4cfcf554ca3a21a5cb043ad96e7150))
* **LLMProvider:** add getModelInfo, listProviders, getCurrentProvider/setCurrentProvider and enabled option ([f229326](https://github.com/isdk/ai-tool-llm.js/commit/f229326455b7f2c42284ebd57be1ef36965727c1))
* **LlmProvider:** add isStream and LLMProviderName ([4c00a7b](https://github.com/isdk/ai-tool-llm.js/commit/4c00a7b3ebb234e5820526412c98d1eb7f692a4c))
* **LLMProvider:** add provider option to LLMProvider.func ([8b3e31c](https://github.com/isdk/ai-tool-llm.js/commit/8b3e31c0fe368aac6da10055a32ffa840f214786))
* pass overwrite option to $download ([a992458](https://github.com/isdk/ai-tool-llm.js/commit/a992458872db34ebe7325e5cb021eb15f8bcacd0))
* **ts:** use AIModelSettings to getModelInfo ([7cebaed](https://github.com/isdk/ai-tool-llm.js/commit/7cebaede37855cc4c3ad109a92067dacd1b0e0db))
* use AIModelFileSettings ([810fa5f](https://github.com/isdk/ai-tool-llm.js/commit/810fa5f58f887628c9528f6de796e8c3e21bfd55))


### Bug Fixes

* **build:** commonjs export error ([5386542](https://github.com/isdk/ai-tool-llm.js/commit/5386542aec3e6c8b0fd1453a67b0ad4c3097360d))
* content_size should be all lowercase ([64c0672](https://github.com/isdk/ai-tool-llm.js/commit/64c0672213ad805aaec1a02d93046c1bc63e0896))
* **mapApiOptions:** should assign unknown options ([ef164b8](https://github.com/isdk/ai-tool-llm.js/commit/ef164b8e2225e7ad2d1e30d0029930d01774fc96))
* **ts:** id as any ([46685f4](https://github.com/isdk/ai-tool-llm.js/commit/46685f4e22105ee1d88ee4509652553b78561080))