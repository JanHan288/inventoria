// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Supplier = sequelize.define('Supplier', {
//     supplier_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     contact_info: { type: DataTypes.STRING },
// }, { timestamps: true });

// module.exports = Supplier;

// // models/supplier.js
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Supplier = sequelize.define('Supplier', {
//     supplier_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     contact_info: {
//         type: DataTypes.STRING,
//     },
//     // created_at: {
//     //     type: DataTypes.TIMESTAMP,
//     //     defaultValue: Sequelize.NOW,
//     // },
// });

// // module.exports = Supplier;
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Inventory = require('./Inventory');

// const Supplier = sequelize.define('Supplier', {
//     supplier_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     contact_info: { type: DataTypes.STRING, allowNull: true },
//     created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
// }, { timestamps: false });

// // Define the association
// Supplier.hasMany(Inventory, { foreignKey: 'supplier_id', as: 'inventoryItems' });

// module.exports = Supplier;

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Supplier = sequelize.define('Supplier', {
//     supplier_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     contact_info: {
//         type: DataTypes.STRING,
//     },
//     created_at: {
//         type: DataTypes.DATE,
//         defaultValue: DataTypes.NOW,
//     },
// }, {
//     timestamps: false,
//     tableName: 'suppliers',
// });

// module.exports = Supplier;

// models/Supplier.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Supplier = sequelize.define('Supplier', {
    supplier_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact_info: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
    tableName: 'suppliers',
});

module.exports = Supplier;
