const orm = require('../config/orm');

const burger = {
    selectAll: () => {
      return orm.selectAll('burgers');
    },
    // The variables cols and vals are arrays.
    insertOne: (burgerName) => {
      return orm.insertOne('burgers', 'burger_name', burgerName)
    },
    updateOne: (updateObject, condition) => {
      return orm.updateOne('burgers', 'devoured', updateObject, condition);
    }
  };
  
  // Export the database functions for the controller (bugers_controllers.js).
  module.exports = burger;