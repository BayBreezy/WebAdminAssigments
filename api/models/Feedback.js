const { DataTypes } = require("sequelize");
const db = require("../database");

const Feedback = db.define("feedbacks", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  a1: DataTypes.STRING,
  a2: DataTypes.STRING,
  a3: DataTypes.STRING,
  a4: DataTypes.STRING,
  u1: DataTypes.STRING,
  u2: DataTypes.STRING,
  u3: DataTypes.STRING,
  u4: DataTypes.STRING,
  u5: DataTypes.STRING,
  p1: DataTypes.STRING,
  p2: DataTypes.STRING
});

module.exports = Feedback;
