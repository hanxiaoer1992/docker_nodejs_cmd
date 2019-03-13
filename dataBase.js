const Config = require('./config/config');
const mysql      = require('mysql');
const connection = mysql.createConnection(Config.dataBase);
connection.connect();
module.exports = connection;