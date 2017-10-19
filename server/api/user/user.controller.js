
'use strict'

const {User} = require('../../sqldb')

function findAll(req, res){
	console.log('API USERS')
	res.status(200).json({message: 'API Users'})
}

module.exports = {
  findAll
}
