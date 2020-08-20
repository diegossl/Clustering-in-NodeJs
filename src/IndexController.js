const { response } = require("express")

module.exports = {
  index (request, response) {
    return response.send('Hello World')
  }
}