require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize("burger_db_2", "root", "password", {
  host: "localhost",
  dialect: "mysql",

  // To create a pool of connections
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = db;
// connection is exported to orm.js
