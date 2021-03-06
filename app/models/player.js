module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {

        name: DataTypes.STRING,
        level: DataTypes.INTEGER,
        effectiveLevel: DataTypes.INTEGER,
        race: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            classMethods: {

                associate: function (models) {
                    Player.hasMany(models.PlayerHand, {unique: false});
                    Player.belongsToMany(models.Item, { through: models.PlayerItem });
                }
            }


        }
    );
    return Player;
};




