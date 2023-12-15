const Sequelize = require("sequelize");
const sequelize = require("../config/database"); // Import the sequelize instance

const User = require("./user")(sequelize, Sequelize.DataTypes); // Initialize the User model

const db = {
  sequelize,
  Sequelize,
  User,
};

module.exports = db;
