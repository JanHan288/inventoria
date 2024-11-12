// // models/Inventory.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Inventory = sequelize.define('Inventory', {
//     item: { type: DataTypes.STRING, allowNull: false },
//     stock: { type: DataTypes.INTEGER, defaultValue: 0 },
// }, { timestamps: true });

// module.exports = Inventory;

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Inventory = sequelize.define('Inventory', {
//     item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     product_name: { type: DataTypes.STRING, allowNull: false },
//     quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
//     supplier_id: { type: DataTypes.INTEGER, references: { model: 'suppliers', key: 'supplier_id' } }
// }, { timestamps: true });

// module.exports = Inventory;

// // models/Inventory.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Inventory = sequelize.define('Inventory', {
//     item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     product_name: { type: DataTypes.STRING, allowNull: false },
//     quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
//     price: { type: DataTypes.DECIMAL(10, 2), allowNull: true }, // Added price field
//     supplier_id: { type: DataTypes.INTEGER, references: { model: 'suppliers', key: 'supplier_id' } },
//     created_at: { type: DataTypes.TIMESTAMP, defaultValue: sequelize.literal('CURRENT_TIMESTAMP') },
// }, { timestamps: true });

// module.exports = Inventory;

// // models/inventory.js
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database'); // Your sequelize instance
// const Supplier = require('./Supplier'); // Import the supplier model


// const Inventory = sequelize.define('Inventory', {
//     item_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     product_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     quantity: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0,
//     },
//     price: {
//         type: DataTypes.DECIMAL(10, 2),
//     },
//     // created_at: {
//     //     type: DataTypes.TIMESTAMP,
//     //     defaultValue: Sequelize.NOW,
//     // },
//     supplier_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Supplier,
//             key: 'supplier_id',
//         },
//     },
// });

// // Define association with Supplier
// Inventory.belongsTo(Supplier, {
//     foreignKey: 'supplier_id',
//     targetKey: 'supplier_id',
// });

// module.exports = Inventory;

// // models/inventory.js
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Supplier = require('./Supplier');

// const Inventory = sequelize.define('Inventory', {
//     item_id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     product_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     quantity: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0
//     },
//     price: {
//         type: DataTypes.DECIMAL(10, 2)
//     },
//     supplier_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Supplier,
//             key: 'supplier_id'
//         }
//     }
// });

// // Define the association between Inventory and Supplier
// Inventory.belongsTo(Supplier, { foreignKey: 'supplier_id' });

// module.exports = Inventory;

// // models/Inventory.js
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Supplier = require('./Supplier');

// const Inventory = sequelize.define('Inventory', {
//     item_id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     product_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     quantity: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0,
//     },
//     price: {
//         type: DataTypes.DECIMAL(10, 2),
//     },
//     supplier_id: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//     },
//     created_at: {
//         type: DataTypes.DATE,
//         defaultValue: Sequelize.NOW,
//     },
// });

// // module.exports = Inventory;
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Inventory = sequelize.define('Inventory', {
//     item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     product_name: { type: DataTypes.STRING, allowNull: false },
//     quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
//     price: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
//     supplier_id: { type: DataTypes.INTEGER },
//     created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
// }, { timestamps: false });

// module.exports = Inventory;

// // models/Inventory.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Inventory = sequelize.define('Inventory', {
//     item_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     product_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     quantity: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0,
//     },
//     price: {
//         type: DataTypes.DECIMAL(10, 2),
//     },
//     supplier_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'suppliers',
//             key: 'supplier_id',
//         },
//     },
//     created_at: {
//         type: DataTypes.DATE,
//         defaultValue: DataTypes.NOW,
//     },
// }, {
//     timestamps: false,
//     tableName: 'inventory',
// });

// module.exports = Inventory;

// models/Inventory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Supplier = require('./Supplier');

const Inventory = sequelize.define('Inventory', {
    item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Supplier,
            key: 'supplier_id',
        },
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
    tableName: 'inventory',
});

// Define association
Inventory.belongsTo(Supplier, { foreignKey: 'supplier_id' });

module.exports = Inventory;
