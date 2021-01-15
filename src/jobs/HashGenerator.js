const { parentPort } = require('worker_threads')
const { createHash } = require('crypto')

parentPort.once('message', (message) => {
  const payload = message
  let nonce = 0
  let generatedHash = ''

  do {
    generatedHash = createHash('sha256').update(payload + nonce).digest('hex')
    nonce += 1
  } while (generatedHash.slice(0, process.env.LEADING_ZEROES) !== '0'
    .repeat(process.env.LEADING_ZEROES))

  parentPort.postMessage({ payload: message, nonce, hash: generatedHash })
})