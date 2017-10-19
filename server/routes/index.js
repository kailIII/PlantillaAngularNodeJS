'use strict'

const express = require('express')
const User = require('../api/user')
const api = express.Router()

api.use('/users', User)

module.exports = api
