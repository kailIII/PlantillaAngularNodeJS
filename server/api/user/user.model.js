
'use strict';

module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  return User;
}
