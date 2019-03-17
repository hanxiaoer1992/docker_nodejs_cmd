const Config = require('./config/config');
const mysql      = require('mysql');
const connection = mysql.createConnection(Config.dataBase);
connection.connect();
process.on('SIGINT', () => {
  connection.end(() => {
    console.log('mysql closed')
  })
})
module.exports = connection;