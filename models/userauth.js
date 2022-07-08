'use strict';
const { Model } = require('sequelize');
const { hashPassword} = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class UserAuth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAuth.hasOne(models.userbiodata, {
        as: 'userbiodata',
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
      UserAuth.hasMany(models.user_game_history, {
        as: 'user_game_history',
        foreignKey: 'user_id',
        sourceKey: 'id',
      })

    }
  }
  UserAuth.init({
    user_id: DataTypes.UUID,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 20],
          msg: "Password must be between 8 and 20 characters"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'UserAuth',
    hooks: {
      beforeCreate(userauth, options) {
        userauth.password = hashPassword(userauth.password);
      },
      beforeUpdate(userauth, options) {
        userauth.password = hashPassword(userauth.password);
      }
    }
  });
  return UserAuth;
};