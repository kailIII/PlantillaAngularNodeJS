module.exports = {
  port: process.env.PORT || 3000,
  db: {
  	uri: process.env.SEQUELIZE_URI || 'postgres://user:password@localhost:5432/example',
  	options: {
  		host: process.env.HOST_DB || 'localhost',
  		dialect: 'postgres',
  		pool: {
    		max: 5,
    		min: 0,
    		idle: 10000
  		}
  	} 
  },
  SECRET_TOKEN: process.env.SECRET_TOKEN
}
