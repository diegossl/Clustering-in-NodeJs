const express = require('express')
const IndexController = require('../app/controllers/IndexController')

const router = express.Router()

router.get('/calculate', IndexController.calculate)

module.exports = router
