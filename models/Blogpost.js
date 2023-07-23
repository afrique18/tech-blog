const { Model, DataTypes, Sequelize } = require ('sequelize');
const sequelize = require('../config/connection');

class Blogpost extends Model {}

Blogpost.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
        // title: {
        //     type: DataTypes.STRING,
        //     allowNullL: false,
        // },
        // content: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
         timestamps: true,
        // freezeTableName: true,
        // underscored: true,
        // modelName: 'blogpost',

    }
);

module.exports = Blogpost;