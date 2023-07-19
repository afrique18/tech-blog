const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // id: {
        //     type:DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
        // message: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // date_created: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: DataTypes.NOW
        // },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id',               
        //     },
        //     blogpost_id: {
        //         type: DataTypes.INTEGER,
        //         references: {
        //             model: 'blogpost'
        //         }
        //     }
        },
        {
            sequelize
        }
);
module.exports = Comment;