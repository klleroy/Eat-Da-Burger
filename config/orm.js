const connection = require("./connection.js");

function dbQuery(sql, inputs) {
     return new Promise((resolve, reject) => {
          const query = connection.query(sql, inputs, (err, res) => {
               if (err) reject(err, res);
               resolve(res);
          });

          console.log(query.sql);
     });
}

const orm = {
     selectAll: (table) => {
          return dbQuery(
               'select * from ??;',
               [table]);
     },
     insertOne: (table, column, value) => {
          return dbQuery(
               'insert into ?? (??) values (?);',
               [table, column, value]);
     },
     updateOne: (table, updateObject, value, condition) => {
          return dbQuery(
               'update ?? SET ?=? where ??=? limit 1;',
               [table, updateObject, value, condition]);
     }
}

module.exports = orm;

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;