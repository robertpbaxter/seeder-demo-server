module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  });
  return User;
};
