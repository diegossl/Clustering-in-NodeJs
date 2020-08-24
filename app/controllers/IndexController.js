const path = require('path')
const primeNumber = path.resolve(__dirname, '..', 'jobs', 'primeNumber.js')
const { isMainThread, Worker } = require('worker_threads')

module.exports = {
  calculate (request, response) {
    try {
      if (isMainThread) {
        let thread = new Worker(primeNumber)

        thread.on('error', err => {
          console.error('Thread', err)
        })

        thread.on('exit', code => {
          if (code != 0) console.error(`Worker stopped with exit code ${code}`)
        })

        return response.status(200).send('Calculations performed successfully.')
      }
    } catch (error) {
      return response.status(500).send('Failed to try to calculate.')
    }
  }
}