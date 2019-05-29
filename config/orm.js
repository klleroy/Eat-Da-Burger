const connection = require("./connection.js");

function dbQuery(sql, inputs) {
     return new Promise((resolve, reject) => {
          connection.query(sql, inputs, (err, res) => {
               if (err) reject(err, res);
               resolve(res);
          });
     });
}

const orm = {
     selectAll: (table) => {
          return dbQuery(
               'select * from ??',
               [table]);
     },
     insertOne: (table, column, value) => {
          return dbQuery(
               'insert into ?? values ?',
               [table, column, value]);
     },
     updateOne: (table, column, value) => {
          return dbQuery(
               'update ?? SET ?? = ? where id = ? limit 1',
               [table, column, value]);
     }
}

module.exports = orm;