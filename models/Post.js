const { Post } = require(".");
const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
    // checkPassword(loginPW) {
    //     return bcrypt.compareSync(loginPw, this.password);
    // }
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            },
            detail: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            blogpost_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'blogpost',
                    key: 'id',
                },
            },
        },
    {
       
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

module.exports = Post;
