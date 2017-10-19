
'use strict'

const express = require('express')
const controller = require('./user.controller.js')

const router = express.Router()

router.get('/', controller.findAll)

module.exports = router