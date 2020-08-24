module.exports = {
  async runJob () {
    let list = new Array(1e6)
    for (let index = 0; index <= list.length; index++) {
      list[index] = index * 2
    }
    process.send(`List is created in worker process id: ${process.pid}`)
  }
}