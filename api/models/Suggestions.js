const { DataTypes } = require("sequelize");
const db = require("../database");

const Suggestion = db.define("suggestions", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  suggestionType: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
});

module.exports = Suggestion;
