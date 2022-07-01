"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    static associate(models) {
      Track.hasMany(models.Routes, {
        as: "track_routes",
        foreignKey: "trackId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Track.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Track",
      tableName: "tracks",
      freezeTableName: true,
    }
  );
  return Track;
};
