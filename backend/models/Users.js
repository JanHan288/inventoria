// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure this path is correct

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
    },
    role: {
        type: DataTypes.ENUM('user', 'manager', 'admin'),
        allowNull: false,
    },
}, {
    tableName: 'users',
    timestamps: true  // Disable automatic createdAt and updatedAt i needed
});

module.exports = User;
