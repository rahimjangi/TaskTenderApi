const { Sequelize } = require("sequelize");

// Database Configuration
const dbName = "tt";
const dbUser = "postgres";
const dbPass = "rahmin4101";
const dbHost = "localhost";

// Setting up a new Sequelize instance
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "postgres",
  logging: false, // Set true if you want to see SQL logs in the console

  pool: {
    max: 5, // Maximum number of connection in pool
    min: 0, // Minimum number of connection in pool
    acquire: 30000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000, // The maximum time, in milliseconds, that a connection can be idle before being released
  },
});

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
