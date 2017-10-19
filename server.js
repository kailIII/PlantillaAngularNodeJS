'use strict'

const mongoose = require('mongoose')
const app = require('./server/app')
const config = require('./server/config')
const sqldb = require('./server/sqldb')

sqldb.sequelize
  .authenticate()
  .then(() => result())
  .catch(err => error(err))

function result(){
    console.log('Connection has been established successfully.')
    listen()  
}

function listen(){
  app.listen(config.port, () => {
    console.log(`API Eventos Angel http://localhost:${config.port}`)
  })
}

function error(err){
  console.error('Unable to connect to the database: ', err)
}