module.exports = (sequelize, DataTypes) => {
    sequelize.defind('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,

        },
        password: DataTypes.STRING
    })
}