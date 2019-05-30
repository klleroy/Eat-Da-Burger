const connection = require("./connection.js");

function dbQuery(sql, inputs) {
     return new Promise((resolve, reject) => {
          var query = connection.query(sql, inputs, (err, res) => {
               if (err) reject(err, res);
               resolve(res);
          });

          console.log(query.sql);
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
               'insert into ?? (??) values (?)',
               [table, column, value]);
     },
     updateOne: (table, column, value, id) => {
          return dbQuery(
               'update ?? SET ?? = ? where id = ? limit 1',
               [table, column, value, id]);
     }
}

module.exports = orm;