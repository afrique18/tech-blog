const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Blogpost extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
}

Blogpost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true,
                    len: [8]
                },
            },
        },
            {
        hooks: {
            beforeCreate: async (newBlogbPostData) => {
                newBlogbPostData.password = await bcrypt.hash(newBlogbPostData.password, 11);
                return newBlogbPostData;
            },
            beforeCreate: async (updatedBlogbPostData) => {
                updatedBlogbPostData.password = await bcrypt.hash(updatedBlogbPostData.password, 11);
                return updatedBlogbPostData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost',
    }
);

module.exports = Blogpost;