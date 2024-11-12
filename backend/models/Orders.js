const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Inventory = require('./Inventory');

const Orders = sequelize.define('Orders', {
    order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    item_id: { type: DataTypes.INTEGER, references: { model: Inventory, key: 'item_id' } },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.ENUM('pending', 'processed', 'shipped'), defaultValue: 'pending' }
}, { timestamps: true });

module.exports = Orders;
