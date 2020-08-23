const cluster  = require('cluster')
const { cpus } = require('os')

const isMaster   = cluster.isMaster
const numWorkers = cpus().length

if (isMaster) {
  console.log(`Forking ${numWorkers} workers`)

  for (let index = 0; index < numWorkers; index++) {
    cluster.fork()
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`)
  })
  
  cluster.on('exit', (worker, exitCode) => {
    console.log(`Worker ${worker.process.id} exited with code ${exitCode}`)
    console.log(`Starting a new worker`)
    cluster.fork()
  })
}