// models/Notification.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notification = sequelize.define('Notification', {
    itemId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Inventory', key: 'id' } },
    message: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'unread' },
}, { timestamps: true });

module.exports = Notification;
