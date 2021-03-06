'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userBiodata.belongsTo(models.UserAuth, {as: 'UserAuth', foreignKey: 'user_id', sourceKey: 'id' });
    }
  }
  userBiodata.init({
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userBiodata',
  });
  return userBiodata;
};