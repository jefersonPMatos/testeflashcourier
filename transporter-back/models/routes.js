"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Routes extends Model {
    static associate(models) {
      Routes.belongsTo(models.Track, {
        as: "routes_track",
        foreignKey: "trackId",
        onDelete: "CASCADE",
      });
    }
  }
  Routes.init(
    {
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Routes",
      tableName: "routes",
      freezeTableName: true,
    }
  );
  return Routes;
};
