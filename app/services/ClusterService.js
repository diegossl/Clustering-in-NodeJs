const cluster  = require('cluster')
const { cpus } = require('os')

const isMaster   = cluster.isMaster
const numCores = cpus().length

if (isMaster) {
  console.log(`Master cluster setting up ${numCores} workers`)

  let workers = []
  for (let index = 0; index < numWorkers; index++) {
    workers.push(cluster.fork())
    workers[index].on('message', (message) => {
      console.log(message)
    })
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`)
  })
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`)
    console.log('Starting a new worker')
    workers.push(cluster.fork())
    workers[workers.length-1].on('message', (message) => {
      console.log(message)
    })
  })
}