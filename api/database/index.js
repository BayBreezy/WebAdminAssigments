const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.db_name,
  process.env.db_user,
  process.env.db_pass,
  {
    logging: false,
    define: {
      freezeTableName: true
    },
    port: process.env.db_port || 3306,
    host: process.env.db_host,
    dialect: process.env.db_dialect
  }
);

module.exports = db;
