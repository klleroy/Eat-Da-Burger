const orm = require('../config/orm');

const burger = {
    selectAll: () => {
      return orm.selectAll('burgers');
    },
    // The variables cols and vals are arrays.
    insertOne: (burgerName) => {
      return orm.insertOne('burgers', 'burger_name', burgerName)
    },
    updateOne: (id) => {
      return orm.updateOne('burgers', id, 'devoured', true);
    }
  };
  
  // Export the database functions for the controller (bugers_controllers.js).
  module.exports = burger;