const { Worker, isMainThread } = require('worker_threads')
const path = require('path')
const primeNumber = path.resolve(__dirname, 'jobs', 'primeNumber.js')

console.log('Calculating with thread...')
if (isMainThread) {
  const thread = new Worker(primeNumber)

  thread.on('error', err => {
    console.error('Thread', err)
  })

  thread.on('exit', code => {
    if (code != 0) console.error(`Worker stopped with exit code ${code}`)
  })
}
