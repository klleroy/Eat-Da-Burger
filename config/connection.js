// dotenv file to contain db configuration
require('dotenv').config();

// Set up MySQL connection.
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection.mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'burgers_db'
  });
}

// Export connection for our ORM to use.
module.exports = connection;