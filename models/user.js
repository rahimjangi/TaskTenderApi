module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // Define model attributes
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Add other fields as necessary
    },
    {
      // Model options (optional)
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return User;
};
