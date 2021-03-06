// Sequelize - standard library
var Sequelize = require("sequelize");

// sequelize - connection to the database
var sequelize = require("../config/connection.js");

var Chirp = sequelize.define("chirp", {
  author: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
},
 {
  timestamps: false
});

Chirp.sync();

module.exports = Chirp;