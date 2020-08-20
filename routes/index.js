const express = require('express')
const IndexController = require('../src/IndexController')
const router = express.Router()

router.get('/', IndexController.index)

module.exports = router
