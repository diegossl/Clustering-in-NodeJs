const Job = require('../jobs/arrayCalculate')

module.exports = {
  index (request, response) {
    return response.status(200).send('Success')
  },

  calculate (request, response) {
    Job.runJob()
    return response.status(200).send('Calculated')
  }
}