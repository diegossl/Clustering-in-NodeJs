const { payloads } = require('./payloads.json')
const { Worker } = require('worker_threads')
const { resolve } = require('path')

const LEADING_ZEROES = 4
const final = []
let finishedWorkers = 0

for (let payload of payloads) {
  const worker = new Worker(resolve(__dirname, 'jobs', 'HashGenerator.js'), { env: { LEADING_ZEROES } })
  worker.once('message', (message) => {
    final.push(message)
    finishedWorkers += 1
    if (finishedWorkers === payloads.length) console.log(final)
  })
  worker.on('error', console.error)

  console.log(`Starting worker of ID ${worker.threadId} and sending the payload "${payload}"`)
  worker.postMessage(payload)
}