// const Inventory = require('../models/Inventory');
// const Supplier = require('../models/Supplier');

// exports.getInventory = async (req, res) => {
//     try {
//         const inventory = await Inventory.findAll({ include: [Supplier] });
//         res.status(200).json(inventory);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching inventory', error });
//     }
// };

// exports.updateStock = async (req, res) => {
//     const { itemId, quantity } = req.body;
//     try {
//         const item = await Inventory.findByPk(itemId);
//         item.quantity += quantity;
//         await item.save();
//         res.status(200).json({ message: 'Stock updated successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating stock', error });
//     }
// };

// // controllers/InventoryController.js
// const Inventory = require('../models/Inventory');

// // Fetch all inventory items
// exports.getInventory = async (req, res) => {
//     try {
//         const inventory = await Inventory.findAll();
//         res.status(200).json(inventory);
//     } catch (error) {
//         console.error('Error fetching inventory:', error);
//         res.status(500).json({ message: 'Error fetching inventory', error });
//     }
// };

// // Add a new product to the inventory
// exports.addProduct = async (req, res) => {
//     const { product_name, quantity, supplier_id } = req.body;
//     try {
//         const newProduct = await Inventory.create({ product_name, quantity, supplier_id });
//         res.status(201).json(newProduct);
//     } catch (error) {
//         console.error('Error adding product:', error);
//         res.status(500).json({ message: 'Error adding product', error });
//     }
// };

// // Update stock for an inventory item
// exports.updateStock = async (req, res) => {
//     const { itemId, quantity } = req.body;
//     try {
//         const item = await Inventory.findByPk(itemId);
//         if (!item) return res.status(404).json({ message: 'Item not found' });

//         item.quantity += quantity;
//         await item.save();

//         res.status(200).json({ message: 'Stock updated successfully', item });
//     } catch (error) {
//         console.error('Error updating stock:', error);
//         res.status(500).json({ message: 'Error updating stock', error });
//     }
// };

// // controllers/inventoryController.js
// const Inventory = require('../models/Inventory');
// const Sequelize = require('sequelize');
// const Supplier = require('../models/Supplier');

// // Get all inventory items
// const getInventory = async (req, res) => {
//     try {
//         const inventoryItems = await Inventory.findAll({
//             include: {
//                 model: Supplier,
//                 attributes: ['name'], // Get supplier name along with inventory item
//             },
//         });
//         res.json(inventoryItems);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error fetching inventory' });
//     }
// };

// // Add a new inventory item
// const addInventoryItem = async (req, res) => {
//     const { product_name, quantity, price, supplier_id } = req.body;

//     try {
//         const newInventoryItem = await Inventory.create({
//             product_name,
//             quantity,
//             price,
//             supplier_id,
//         });
//         res.status(201).json(newInventoryItem);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error adding inventory item' });
//     }
// };

// // Search inventory items by product name
// const searchInventory = async (req, res) => {
//     const { product_name } = req.query;

//     try {
//         const items = await Inventory.findAll({
//             where: {
//                 product_name: {
//                     [Sequelize.Op.like]: `%${product_name}%`, // Search using LIKE
//                 },
//             },
//         });
//         res.json(items);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error searching inventory' });
//     }
// };

// module.exports = {
//     getInventory,
//     addInventoryItem,
//     searchInventory,
// };


// // controllers/InventoryController.js
// const Inventory = require('../models/Inventory');
// const Supplier = require('../models/Supplier');

// // Fetch all inventory items
// exports.getInventory = async (req, res) => {
//     try {
//         const inventory = await Inventory.findAll({
//             include: Supplier, // Include supplier info
//         });
//         res.status(200).json(inventory);
//     } catch (error) {
//         console.error('Error fetching inventory:', error);
//         res.status(500).json({ message: 'Error fetching inventory', error });
//     }
// };

// // Add a new product to the inventory
// exports.addProduct = async (req, res) => {
//     const { product_name, quantity, price, supplier_id } = req.body;
//     try {
//         const newProduct = await Inventory.create({ product_name, quantity, price, supplier_id });
//         res.status(201).json(newProduct);
//     } catch (error) {
//         console.error('Error adding product:', error);
//         res.status(500).json({ message: 'Error adding product', error });
//     }
// };

// // Update stock for an inventory item
// exports.updateStock = async (req, res) => {
//     const { itemId, quantity } = req.body;
//     try {
//         const item = await Inventory.findByPk(itemId);
//         if (!item) return res.status(404).json({ message: 'Item not found' });

//         item.quantity += quantity;
//         await item.save();

//         res.status(200).json({ message: 'Stock updated successfully', item });
//     } catch (error) {
//         console.error('Error updating stock:', error);
//         res.status(500).json({ message: 'Error updating stock', error });
//     }
// };

// // Search for products by name
// exports.searchProduct = async (req, res) => {
//     const { name } = req.query; // Product name to search
//     try {
//         const products = await Inventory.findAll({
//             where: {
//                 product_name: { [Op.like]: `%${name}%` }, // Search for products matching the name
//             },
//             include: Supplier,
//         });
//         res.status(200).json(products);
//     } catch (error) {
//         console.error('Error searching products:', error);
//         res.status(500).json({ message: 'Error searching products', error });
//     }
// };

// const { Op } = require('sequelize'); // Ensure that Op is imported for Sequelize operators
// const Inventory = require('../models/Inventory');
// const Supplier = require('../models/Supplier');

// // Fetch all inventory items
// const getInventory = async (req, res) => {
//     try {
//         const inventory = await Inventory.findAll({
//             include: {
//                 model: Supplier, // Include supplier info
//                 attributes: ['name'], // Include specific attributes from Supplier
//             },
//         });
//         res.status(200).json(inventory);
//     } catch (error) {
//         console.error('Error fetching inventory:', error);
//         res.status(500).json({ message: 'Error fetching inventory', error });
//     }
// };

// // Add a new product to the inventory
// const addProduct = async (req, res) => {
//     const { product_name, quantity, price, supplier_id } = req.body;
//     try {
//         const newProduct = await Inventory.create({
//             product_name,
//             quantity,
//             price,
//             supplier_id
//         });
//         res.status(201).json(newProduct);
//     } catch (error) {
//         console.error('Error adding product:', error);
//         res.status(500).json({ message: 'Error adding product', error });
//     }
// };

// // Update stock for an inventory item
// const updateStock = async (req, res) => {
//     const { itemId, quantity } = req.body;
//     try {
//         const item = await Inventory.findByPk(itemId);
//         if (!item) return res.status(404).json({ message: 'Item not found' });

//         item.quantity += quantity;
//         await item.save();

//         res.status(200).json({ message: 'Stock updated successfully', item });
//     } catch (error) {
//         console.error('Error updating stock:', error);
//         res.status(500).json({ message: 'Error updating stock', error });
//     }
// };

// // Search for products by name
// const searchProduct = async (req, res) => {
//     const { name } = req.query; // Product name to search
//     try {
//         const products = await Inventory.findAll({
//             where: {
//                 product_name: {
//                     [Op.like]: `%${name}%`, // Search for products matching the name
//                 },
//             },
//             include: {
//                 model: Supplier,
//                 attributes: ['name'], // Include specific attributes from Supplier
//             },
//         });
//         res.status(200).json(products);
//     } catch (error) {
//         console.error('Error searching products:', error);
//         res.status(500).json({ message: 'Error searching products', error });
//     }
// };

// // Export all functions at the end, consistent with UserController.js structure
// module.exports = {
//     getInventory,
//     addProduct,
//     updateStock,
//     searchProduct
// };

// // controllers/InventoryController.js
// const { Op } = require('sequelize'); // Sequelize operators for advanced queries
// const Inventory = require('../models/Inventory');
// const Supplier = require('../models/Supplier');

// // Fetch all inventory items with supplier details
// const getInventory = async (req, res) => {
//     try {
//         const inventory = await Inventory.findAll({
//             include: {
//                 model: Supplier, // Include supplier info
//                 attributes: ['name'], // Only fetch supplier name for simplicity
//             },
//         });
//         res.status(200).json(inventory);
//     } catch (error) {
//         console.error('Error fetching inventory:', error);
//         res.status(500).json({ message: 'Error fetching inventory', error });
//     }
// };

// // Add a new product to the inventory
// const addProduct = async (req, res) => {
//     const { product_name, quantity, price, supplier_id } = req.body;
//     try {
//         const newProduct = await Inventory.create({
//             product_name,
//             quantity,
//             price,
//             supplier_id
//         });
//         res.status(201).json(newProduct);
//     } catch (error) {
//         console.error('Error adding product:', error);
//         res.status(500).json({ message: 'Error adding product', error });
//     }
// };

// // Update an existing inventory item
// const updateItem = async (req, res) => {
//     const { item_id } = req.params;
//     const { product_name, quantity, price, supplier_id } = req.body;
//     try {
//         const item = await Inventory.findByPk(item_id);
//         if (!item) return res.status(404).json({ message: 'Item not found' });

//         // Update only the provided fields
//         item.product_name = product_name || item.product_name;
//         item.quantity = quantity !== undefined ? quantity : item.quantity;
//         item.price = price !== undefined ? price : item.price;
//         item.supplier_id = supplier_id || item.supplier_id;
        
//         await item.save();
//         res.status(200).json({ message: 'Item updated successfully', item });
//     } catch (error) {
//         console.error('Error updating inventory item:', error);
//         res.status(500).json({ message: 'Error updating inventory item', error });
//     }
// };

// // Update stock for an inventory item incrementally
// const updateStock = async (req, res) => {
//     const { itemId, quantity } = req.body;
//     try {
//         const item = await Inventory.findByPk(itemId);
//         if (!item) return res.status(404).json({ message: 'Item not found' });

//         item.quantity += quantity; // Increment quantity
//         await item.save();

//         res.status(200).json({ message: 'Stock updated successfully', item });
//     } catch (error) {
//         console.error('Error updating stock:', error);
//         res.status(500).json({ message: 'Error updating stock', error });
//     }
// };

// // Search for products by name with supplier details
// const searchProduct = async (req, res) => {
//     const { name } = req.query;
//     try {
//         const products = await Inventory.findAll({
//             where: {
//                 product_name: {
//                     [Op.like]: `%${name}%`, // Partial match search
//                 },
//             },
//             include: {
//                 model: Supplier,
//                 attributes: ['name'], // Include supplier name
//             },
//         });
//         res.status(200).json(products);
//     } catch (error) {
//         console.error('Error searching products:', error);
//         res.status(500).json({ message: 'Error searching products', error });
//     }
// };

// // Export functions for use in routes
// module.exports = {
//     getInventory,
//     addProduct,
//     updateItem,
//     updateStock,
//     searchProduct
// };

// // controllers/InventoryController.js
// const { Op } = require('sequelize');
// const Inventory = require('../models/Inventory');
// const Supplier = require('../models/Supplier');

// // Fetch all inventory items with supplier details
// const getInventory = async (req, res) => {
//     try {
//         const inventory = await Inventory.findAll({
//             include: {
//                 model: Supplier, // Include supplier info
//                 attributes: ['name'], // Only fetch supplier name for simplicity
//             },
//         });
//         res.status(200).json(inventory);
//     } catch (error) {
//         console.error('Error fetching inventory:', error);
//         res.status(500).json({ message: 'Error fetching inventory', error });
//     }
// };

// // Add a new product to the inventory using supplier name instead of supplier_id
// const addProduct = async (req, res) => {
//     const { product_name, quantity, price, supplier_name } = req.body;

//     try {
//         // Find the supplier by name
//         const supplier = await Supplier.findOne({
//             where: {
//                 name: {
//                     [Op.iLike]: supplier_name, // Case-insensitive search
//                 },
//             },
//         });

//         if (!supplier) {
//             return res.status(404).json({ message: 'Supplier not found' });
//         }

//         // Add the product to the inventory using the supplier's id
//         const newProduct = await Inventory.create({
//             product_name,
//             quantity,
//             price,
//             supplier_id: supplier.supplier_id, // Use supplier's ID
//         });

//         res.status(201).json(newProduct);
//     } catch (error) {
//         console.error('Error adding product:', error);
//         res.status(500).json({ message: 'Error adding product', error });
//     }
// };

// // Update an existing inventory item using supplier name instead of supplier_id
// const updateItem = async (req, res) => {
//     const { item_id } = req.params;
//     const { product_name, quantity, price, supplier_name } = req.body;

//     try {
//         const item = await Inventory.findByPk(item_id);
//         if (!item) return res.status(404).json({ message: 'Item not found' });

//         // If supplier_name is provided, find the supplier and update the supplier_id
//         if (supplier_name) {
//             const supplier = await Supplier.findOne({
//                 where: {
//                     name: {
//                         [Op.iLike]: supplier_name, // Case-insensitive search
//                     },
//                 },
//             });
//             if (!supplier) {
//                 return res.status(404).json({ message: 'Supplier not found' });
//             }
//             item.supplier_id = supplier.supplier_id; // Update with the supplier's ID
//         }

//         // Update other fields
//         item.product_name = product_name || item.product_name;
//         item.quantity = quantity !== undefined ? quantity : item.quantity;
//         item.price = price !== undefined ? price : item.price;
        
//         await item.save();
//         res.status(200).json({ message: 'Item updated successfully', item });
//     } catch (error) {
//         console.error('Error updating inventory item:', error);
//         res.status(500).json({ message: 'Error updating inventory item', error });
//     }
// };

// // Update stock for an inventory item incrementally
// const updateStock = async (req, res) => {
//     const { itemId, quantity } = req.body;
//     try {
//         const item = await Inventory.findByPk(itemId);
//         if (!item) return res.status(404).json({ message: 'Item not found' });

//         item.quantity += quantity; // Increment quantity
//         await item.save();

//         res.status(200).json({ message: 'Stock updated successfully', item });
//     } catch (error) {
//         console.error('Error updating stock:', error);
//         res.status(500).json({ message: 'Error updating stock', error });
//     }
// };

// // Search for products by name with supplier details
// const searchProduct = async (req, res) => {
//     const { name } = req.query;
//     try {
//         const products = await Inventory.findAll({
//             where: {
//                 product_name: {
//                     [Op.like]: `%${name}%`, // Partial match search
//                 },
//             },
//             include: {
//                 model: Supplier,
//                 attributes: ['name'], // Include supplier name
//             },
//         });
//         res.status(200).json(products);
//     } catch (error) {
//         console.error('Error searching products:', error);
//         res.status(500).json({ message: 'Error searching products', error });
//     }
// };

// // Export functions for use in routes
// module.exports = {
//     getInventory,
//     addProduct,
//     updateItem,
//     updateStock,
//     searchProduct
// };


// controllers/InventoryController.js
// const { Op } = require('sequelize');
const { Op, fn, col } = require('sequelize');
const Inventory = require('../models/Inventory');
const Supplier = require('../models/Supplier');

// Fetch all inventory items with supplier details
const getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findAll({
            include: {
                model: Supplier,
                attributes: ['name'], // Only fetch supplier name
            },
        });
        res.status(200).json(inventory);
    } catch (error) {
        console.error('Error fetching inventory:', error);
        res.status(500).json({ message: 'Error fetching inventory', error });
    }
};
// Add a new product to the inventory using supplier_name
const addProduct = async (req, res) => {
    const { product_name, quantity, price, supplier_name } = req.body;

    try {
        // Find the supplier by name (MySQL does not support ILIKE, so we use LOWER for case-insensitive search)
        const supplier = await Supplier.findOne({
            where: {
                name: {
                    [Op.like]: `%${supplier_name}%`,  // Use LIKE for case-insensitive search in MySQL
                },
            },
        });

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        // Add the product to the inventory using the supplier's id
        const newProduct = await Inventory.create({
            product_name,
            quantity,
            price,
            supplier_id: supplier.supplier_id, // Use supplier's ID
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error adding product:', error.message); // Log error
        res.status(500).json({ message: 'Error adding product', error: error.message });
    }
};

// Update an existing inventory item
const updateItem = async (req, res) => {
    const { item_id } = req.params;
    const { product_name, quantity, price, supplier_name } = req.body;

    try {
        const item = await Inventory.findByPk(item_id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        // Find and set supplier_id if supplier_name is provided
        if (supplier_name) {
            const supplier = await Supplier.findOne({
                where: { name: { [Op.iLike]: supplier_name } },
            });
            if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
            item.supplier_id = supplier.supplier_id;
        }

        // Update other fields
        item.product_name = product_name || item.product_name;
        item.quantity = quantity !== undefined ? quantity : item.quantity;
        item.price = price !== undefined ? price : item.price;

        await item.save();
        res.status(200).json({ message: 'Item updated successfully', item });
    } catch (error) {
        console.error('Error updating item:', error);
        res.status(500).json({ message: 'Error updating item', error });
    }
};

// Increment stock for an inventory item
const updateStock = async (req, res) => {
    const { itemId, quantity } = req.body;

    try {
        const item = await Inventory.findByPk(itemId);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        item.quantity += quantity; // Increment quantity
        await item.save();

        res.status(200).json({ message: 'Stock updated successfully', item });
    } catch (error) {
        console.error('Error updating stock:', error);
        res.status(500).json({ message: 'Error updating stock', error });
    }
};

// Search for products by name with supplier details
const searchProduct = async (req, res) => {
    const { name } = req.query;

    try {
        const products = await Inventory.findAll({
            where: { product_name: { [Op.like]: `%${name}%` } },
            include: { model: Supplier, attributes: ['name'] },
        });
        res.status(200).json(products);
    } catch (error) {
        console.error('Error searching products:', error);
        res.status(500).json({ message: 'Error searching products', error });
    }
};

// Export functions for use in routes
module.exports = {
    getInventory,
    addProduct,
    updateItem,
    updateStock,
    searchProduct,
};
