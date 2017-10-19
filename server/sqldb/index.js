
'use strict';

const config = require('../config')
const Sequelize = require('sequelize')

let db = {
  Sequelize,
  sequelize: new Sequelize(config.db.uri, config.db.options)
}
//Models Sequelize
db.User = db.sequelize.import('../api/user/user.model');

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db
