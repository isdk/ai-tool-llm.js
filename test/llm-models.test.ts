// @vitest-environment node
import fastify from 'fastify'
import fs from 'fs'
import path from 'path'
import EventSource from 'eventsource'
global.EventSource = EventSource as any

import {
  ErrorCode,
  event, // event bus for server
  backendEventable,
  EventToolFunc,
  EventBusName,
  eventClient as eventOnClient,
  eventServer as eventOnServer,
  EventClient,
  NotFoundError,
  ResClientTools, ResServerTools,
  wait
} from "@isdk/ai-tool"
import {DownloadFunc, DownloadName, DownloadProgressEventName, DownloadStatusEventName, download} from '@isdk/ai-tool-download'


import { findPort, rmFile } from '@isdk/ai-tool/test/util'

import { LlmModelsFunc, MODELS_DB_NAME } from '../src/llm-models'
import { AIModelFileSettings, AIModelSettings } from '../src/llm-settings'

const FUNC_NAME = 'llm.models'
// const dbPath = __dirname + '/test.db'
// const dbPath = '/tmp/aikvsqlite-test.db'
const dbPath = ':memory:'
const rootDir = path.resolve (__dirname, '..', 'models')


const eventBus4Client = new EventToolFunc(EventBusName)
// the event-bus for server
ResServerTools.register(event)
// the event-bus for client
ResClientTools.register(eventBus4Client)
backendEventable(ResClientTools)
backendEventable(ResServerTools)
ResServerTools.register(download)

describe('LlmModelsFunc server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  const server = fastify()
  // fs.rmSync(path.resolve(rootDir, MODELS_DB_NAME), {force: true})
  const res = new LlmModelsFunc(FUNC_NAME, {rootDir, dbPath, usingMirror: true})

  beforeAll(async () => {
    console.log('🚀 ~ beforeAll ~ res.dbPath:', res.dbPath)
    server.get('/api', async function(request, reply){
      reply.send(ResServerTools)
    })

    server.all('/api/:toolId/:id?', async function(request, reply){
      const { toolId, id } = request.params as any;
      const func = ResServerTools.get(toolId)
      if (!func) {
        reply.code(404).send({error: toolId + ' Not Found', data: {what: toolId}})
      }
      let params: any
      const method = request.method
      if (method === 'GET' || method == 'DELETE') {
        params = (request.query as any).p
        if (params) {
          params = JSON.parse(params)
        } else {
          params = {}
        }
      } else {
        params = request.body;
        if (typeof params === 'string') {params = JSON.parse(params)}
      }
      params._req = request.raw
      params._res = reply.raw
      if (id !== undefined) { params.id = id }

      // const result = JSON.stringify(await func.run(params))
      try {
        let result = await func.run(params)
        if (!func.isStream(params)) {
          result = JSON.stringify(result)
          // console.log('🚀 ~ server.all ~ result:', result)
          reply.send(result)
        } else if (result) {
          reply.send(result)
        }
        // reply.send({params: request.params as any, query: request.query, url: request.url})
      } catch(e) {
        // console.log('🚀 ~ server.all ~ e:', e)
        if (e.code !== undefined) {
          const err: any = {...e, error: e.message}
          console.log('🚀 ~ server.all ~ err:', err)
          if (err.stack) {delete err.stack}
          if (typeof err.code === 'number') {
            reply.code(err.code).send(JSON.stringify(err))
          } else {
            reply.code(500).send(JSON.stringify(err))
          }
        } else if (e.message) {
          reply.code(500).send({error: e.message})
        } else {
          reply.code(500).send({error: e})
        }
      }
    })
    await wait(10)
    const port = await findPort(3000)
    const result = await server.listen({port})
    console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    ResServerTools.setApiRoot(apiRoot)

    // const res = new KVSqliteResFunc(FUNC_NAME, {dbPath})
    res.register()

    ResClientTools.setApiRoot(apiRoot)
    await ResClientTools.loadFrom()
  })

  afterAll(async () => {
    await server.close()
  })

  beforeEach(() => {
    // res.db.del()
  });

  it('should raise error to get non-exists item', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let err: any
    try {
      const res = await result.get({id: "123"})
    } catch(e) {
      err = e
    }
    expect(err).toBeInstanceOf(NotFoundError)
    expect(err.message).toBe('Could not find 123.')
    expect(err.code).toBe(ErrorCode.NotFound)
    expect(err.data).toStrictEqual({what: "123"})
    expect(err.name).toBe(FUNC_NAME+'.get')

  })

  it('should post an object', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({id: "1", val: {name: 'hello'}})
    expect(res).toHaveProperty('changes', 1)
    res = await result.get({id: "1"})
    expect(res).toHaveProperty('name', 'hello')
    res = await result.delete({id: "1"})
    expect(res).toHaveProperty('changes', 1)
  })
  it('should post multi objects', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({val: [{_id: "1", name: 'hello'}, {_id: "2", name: 'world'}]})
    expect(res).toHaveLength(2)
    res = await result.get({id: "1"})
    expect(res).toHaveProperty('name', 'hello')
    res = await result.get({id: "2"})
    expect(res).toHaveProperty('name', 'world')
    res = await result.delete({id: ["1","2"]})
    expect(res).toHaveLength(2)
  })

  it('should delete', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({val: [{_id: "1", name: 'hello'}, {_id: "2", name: 'world'}]})
    expect(res).toHaveLength(2)
    res = await result.delete({id: "1"})
    expect(res).toHaveProperty('changes', 1)
    expect(result.get({id: "1"})).rejects.toThrow(NotFoundError)

    res = await result.delete({id: "2"})
    expect(res).toHaveProperty('changes', 1)
    expect(result.get({id: "2"})).rejects.toThrow(NotFoundError)

  })

  it('should list', async () => {
    const result = ResClientTools.get(FUNC_NAME)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.list()
    expect(res.length).toBeGreaterThanOrEqual(9000)
  })

  it('should download basically', async () => {
    const modelsClient = ResClientTools.get(FUNC_NAME)
    expect(modelsClient).toBeInstanceOf(ResClientTools)
    // find a minimal file size model
    const models = await modelsClient.list()
    let minFile = getMinSizeFileFromModels(models)
    expect(minFile).toHaveProperty('_id')
    rmFile(path.resolve(__dirname, '..', 'models', minFile.file_name))
    let result = await modelsClient.download({id: minFile._id, quant: minFile.quant})
    const id = result.id
    // let url = await modelsClient.getUrl({id: minFile._id, quant: minFile.quant})
    // console.log('🚀 ~ it.only ~ url:', url)
    const downloader = ResClientTools.get(DownloadName)
    // let result = await downloader.post({...url, start: true})
    result = await downloader.get({id})
    while (result.status === 'downloading') {
      await wait(880)
      result = await downloader.get(result)
    }
    result = await downloader.get(result)

    expect(result).toHaveProperty('status', 'completed')
  })
});


function getMinSizeFileFromModels(models: AIModelSettings[]) {
  let minFile
  for (const model of models) {
    const file = getMinSizeFile(model.files!)
    if (file) {
      file.hf_repo = model.hf_repo
      file._id = model._id
      if (!minFile) {minFile = file}
      else if (minFile.file_size > file.file_size!) {
        minFile = file
      }
    }
  }
  return minFile
}
function getMinSizeFile(files: AIModelFileSettings[]) {
  let minSize = 0
  let minFile: AIModelFileSettings|undefined
  for (const file of files) {
    if (!file.file_size) {continue}
    if (minFile === undefined) {
      minFile = file
      minSize = file.file_size
    } else if (file.file_size < minSize && file.file_size > 1024*1024*10) {
      minFile = file
      minSize = file.file_size
    }
  }
  return minFile
}