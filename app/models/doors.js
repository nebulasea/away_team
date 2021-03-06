module.exports = function (sequelize, DataTypes) {
  var Door = sequelize.define("Door", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    effect: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.INTEGER
    },
    treasure: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING
    }
  }
  );
  return Door;
};

