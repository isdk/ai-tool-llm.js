# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.1.12](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.11...v0.1.12) (2025-09-21)

## [0.1.11](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.10...v0.1.11) (2025-09-21)


### Features

* add static setCurrentProvider ([7488c50](https://github.com/isdk/ai-tool-llm.js/commit/7488c503a6a15b9c02956c8e646fbd0cdff7f78c))


### Bug Fixes

* can not getModelInfo if no modelName ([845600d](https://github.com/isdk/ai-tool-llm.js/commit/845600d118f1da9dd02b081586565064f34c62cb))
* unregister should remove LLMProvider.current if itself ([3689816](https://github.com/isdk/ai-tool-llm.js/commit/368981634274c9fc1877db0febc02711dbb89aed))

## [0.1.10](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.9...v0.1.10) (2025-04-04)

## [0.1.9](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.8...v0.1.9) (2025-03-22)


### Features

* should get model info with provider and URI ([f3c3cef](https://github.com/isdk/ai-tool-llm.js/commit/f3c3cef59ff3aa0ce6d3161a8d3d8cd72ec50012))

## [0.1.8](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.7...v0.1.8) (2025-03-17)


### Features

* add getProvider method ([0105e08](https://github.com/isdk/ai-tool-llm.js/commit/0105e0806703dc594a3652a122c6373b3789706e))

## [0.1.7](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.6...v0.1.7) (2025-03-17)

## [0.1.6](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.5...v0.1.6) (2025-03-16)

## [0.1.5](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.4...v0.1.5) (2025-03-16)

## [0.1.4](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.3...v0.1.4) (2025-03-16)

## [0.1.3](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.2...v0.1.3) (2025-03-16)


### Features

* add options to getModelInfo ([64689a4](https://github.com/isdk/ai-tool-llm.js/commit/64689a413b608c3d70c66ccc8c6278682e89f99f))
* add SystemTemplate option to formatPrompt ([3b16ded](https://github.com/isdk/ai-tool-llm.js/commit/3b16dedc7e3c5266a4c9572a29eebab1a36f1987))
* **flip:** add the same value supports and optional ignoreKeys argument ([ed1e8b7](https://github.com/isdk/ai-tool-llm.js/commit/ed1e8b7ba56221b9d684d289ead370ab51e837f0))


### Bug Fixes

* apply provider.model correctly ([0ede7b9](https://github.com/isdk/ai-tool-llm.js/commit/0ede7b9a883d9aef4fdb52966d83de38942433fb))
* countTokens not work ([c9cf6fb](https://github.com/isdk/ai-tool-llm.js/commit/c9cf6fb1acda0b73e0584cacda346af88294b097))
* make sure there are no extra assistant added ([08f18f6](https://github.com/isdk/ai-tool-llm.js/commit/08f18f6c75e8fb573d1c820b672b622e5dfd49b5))
* should check promptsTool first ([aefa1b0](https://github.com/isdk/ai-tool-llm.js/commit/aefa1b08083124d60dde861783cdf34247b14f09))
* should merge version prompt ([f6dd4b0](https://github.com/isdk/ai-tool-llm.js/commit/f6dd4b000b43edccad1b93501c9cc9568100dcfa))
* should try input.options too ([8e21dea](https://github.com/isdk/ai-tool-llm.js/commit/8e21dead08bd7185d28ec5bbee3b498c7e62cf3b))
* should use model system template if no template found ([d963d51](https://github.com/isdk/ai-tool-llm.js/commit/d963d51bd673de887dc524d901fa157abad6bc37))
* this.model should be default value too ([c47053e](https://github.com/isdk/ai-tool-llm.js/commit/c47053eed53fbe2bd9b20cfff131430ba11cd795))

## [0.1.2](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.1...v0.1.2) (2024-12-18)

## [0.1.1](https://github.com/isdk/ai-tool-llm.js/compare/v0.1.0...v0.1.1) (2024-12-17)

## [0.1.0](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.28...v0.1.0) (2024-12-15)


### ⚠ BREAKING CHANGES

* use options parameter
* use qwen2.5 as default llm token estimate count
* add countTokens and tokenize to provider

### Features

* add countTokens and tokenize to provider ([9a7cebb](https://github.com/isdk/ai-tool-llm.js/commit/9a7cebb1a3ef992619d73efedd29085860233b99))
* add non-stadard quatizations ([6dca0b0](https://github.com/isdk/ai-tool-llm.js/commit/6dca0b043de83937d92e2b5f936238ef46f7ef86))
* add onlyTokenizer option ([bc58d61](https://github.com/isdk/ai-tool-llm.js/commit/bc58d61b7dc8bd8b6aaf9e067bc612fb500d5730))


### Refactor

* extract llm-token to ai-tool ([46dd775](https://github.com/isdk/ai-tool-llm.js/commit/46dd775df6922d1eb03bdff8b1467a6118f3d066))
* messsages[] supports ([12dbb7b](https://github.com/isdk/ai-tool-llm.js/commit/12dbb7b7cfb542e099b82dc4643a19c2578ffc12))
* use options parameter ([b4f5fed](https://github.com/isdk/ai-tool-llm.js/commit/b4f5fed7c2e8597f9360dc35b7beb23747354927))
* use qwen2.5 as default llm token estimate count ([e236cb3](https://github.com/isdk/ai-tool-llm.js/commit/e236cb376cf8b3ff5022df20c7ca1f0158c43b11))

## [0.0.28](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.27...v0.0.28) (2024-10-04)

## [0.0.27](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.26...v0.0.27) (2024-09-30)

## [0.0.26](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.25...v0.0.26) (2024-09-25)


### Features

* add default model option ([c551b33](https://github.com/isdk/ai-tool-llm.js/commit/c551b330a82a79e61c6412bbe0899ddc282205b8))


### Refactor

* add name and description to AIResponseFormat ([fc926e2](https://github.com/isdk/ai-tool-llm.js/commit/fc926e2a50923cc67df389245f830dace92dce88))

## [0.0.25](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.24...v0.0.25) (2024-09-17)

## [0.0.24](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.23...v0.0.24) (2024-09-16)


### Bug Fixes

* ts declaration ([00bdb4d](https://github.com/isdk/ai-tool-llm.js/commit/00bdb4dabf26affba1e99ea1f0c654c315a2dfba))

## [0.0.23](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.22...v0.0.23) (2024-09-02)

## [0.0.22](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.21...v0.0.22) (2024-09-02)

## [0.0.21](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.20...v0.0.21) (2024-09-01)

## [0.0.20](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.19...v0.0.20) (2024-08-31)

## [0.0.19](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.18...v0.0.19) (2024-08-28)

## [0.0.18](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.17...v0.0.18) (2024-08-24)

## [0.0.17](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.16...v0.0.17) (2024-08-24)

## [0.0.16](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.15...v0.0.16) (2024-08-23)

## [0.0.15](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.14...v0.0.15) (2024-08-18)

## [0.0.14](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.13...v0.0.14) (2024-08-16)

## [0.0.13](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.12...v0.0.13) (2024-08-14)


### Features

* add fill to AIModelType ([f87f1bc](https://github.com/isdk/ai-tool-llm.js/commit/f87f1bc43347c3e33860764fe45e596f962961c0))


### Bug Fixes

* typo infill ([3f5b758](https://github.com/isdk/ai-tool-llm.js/commit/3f5b7587d36e42fec20e053d3cf13eddc9014435))

## [0.0.12](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.11...v0.0.12) (2024-08-11)


### Bug Fixes

* update AIModelQuantType from llama.cpp ([ff7ddc0](https://github.com/isdk/ai-tool-llm.js/commit/ff7ddc09d6fb8e595ba8892085851f6a87b2f4d2))


### Refactor

* extract model to package ([50708dd](https://github.com/isdk/ai-tool-llm.js/commit/50708dd1c1c99c19fc6dff65dc60243437054ebc))
* paramsSizeToScaleStr ([7dce953](https://github.com/isdk/ai-tool-llm.js/commit/7dce9538f1ed07183aa72267950ceb96d0cac0d0))

## [0.0.11](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.10...v0.0.11) (2024-07-08)


### Bug Fixes

* the cached downloaded flag is not correctly ([900ddb8](https://github.com/isdk/ai-tool-llm.js/commit/900ddb82241042a1fca01f33b0f3c8a2417476a8))

## [0.0.10](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.9...v0.0.10) (2024-06-21)

## [0.0.9](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.8...v0.0.9) (2024-06-13)


### Features

* add stop as stop_words alias and allow string ([4026230](https://github.com/isdk/ai-tool-llm.js/commit/40262309ef9265215df2dd0d31853b28da52b5cc))
* upgrade models info ([8294954](https://github.com/isdk/ai-tool-llm.js/commit/82949544d324d574ef766c6c982cd176df9355d5))

## [0.0.8](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.7...v0.0.8) (2024-06-11)

## [0.0.7](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.6...v0.0.7) (2024-06-10)

## [0.0.6](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.5...v0.0.6) (2024-06-10)

## [0.0.5](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.4...v0.0.5) (2024-06-09)

## [0.0.4](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.3...v0.0.4) (2024-06-09)


### Bug Fixes

* should use first matched prompt version ([335897f](https://github.com/isdk/ai-tool-llm.js/commit/335897f1d8898e0c53c1c3befe0d938285504613))

## [0.0.3](https://github.com/isdk/ai-tool-llm.js/compare/v0.0.2...v0.0.3) (2024-06-07)


### Features

* modelname add url protocol supports to select provider ([d2016c5](https://github.com/isdk/ai-tool-llm.js/commit/d2016c5d87894c79cbac26fab94e7e0d56c8f586))

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
