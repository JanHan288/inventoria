// // controllers/SupplierController.js
// const Supplier = require('../models/Supplier');

// // Get all suppliers
// exports.getSuppliers = async (req, res) => {
//     try {
//         const suppliers = await Supplier.findAll();
//         res.status(200).json(suppliers);
//     } catch (error) {
//         console.error('Error fetching suppliers:', error);
//         res.status(500).json({ message: 'Error fetching suppliers', error });
//     }
// };

// // Add a new supplier
// exports.addSupplier = async (req, res) => {
//     const { name, contact_info } = req.body;
//     try {
//         const newSupplier = await Supplier.create({ name, contact_info });
//         res.status(201).json(newSupplier);
//     } catch (error) {
//         console.error('Error adding supplier:', error);
//         res.status(500).json({ message: 'Error adding supplier', error });
//     }
// };

// // Update supplier info
// exports.updateSupplier = async (req, res) => {
//     const { supplier_id } = req.params;
//     const { name, contact_info } = req.body;

//     try {
//         const supplier = await Supplier.findByPk(supplier_id);
//         if (!supplier) return res.status(404).json({ message: 'Supplier not found' });

//         supplier.name = name;
//         supplier.contact_info = contact_info;
//         await supplier.save();

//         res.status(200).json(supplier);
//     } catch (error) {
//         console.error('Error updating supplier:', error);
//         res.status(500).json({ message: 'Error updating supplier', error });
//     }
// };

// // controllers/SupplierController.js
// const Supplier = require('../models/Supplier');
// const Inventory = require('../models/Inventory');
// const { Op } = require('sequelize'); // Ensure Sequelize Op is imported

// // Fetch all suppliers
// exports.getSuppliers = async (req, res) => {
//     try {
//         const suppliers = await Supplier.findAll({
//             include: {
//                 model: Inventory,
//                 attributes: ['product_name'], // Include product names
//             },
//         });
//         res.status(200).json(suppliers);
//     } catch (error) {
//         console.error('Error fetching suppliers:', error);
//         res.status(500).json({ message: 'Error fetching suppliers', error });
//     }
// };

// // Add a new supplier
// exports.addSupplier = async (req, res) => {
//     const { name, contact_info } = req.body;
//     try {
//         const newSupplier = await Supplier.create({
//             name,
//             contact_info,
//         });
//         res.status(201).json(newSupplier);
//     } catch (error) {
//         console.error('Error adding supplier:', error);
//         res.status(500).json({ message: 'Error adding supplier', error });
//     }
// };

// // Fetch suppliers by date range with their products
// exports.getSuppliersByDateRange = async (req, res) => {
//     const { start_date, end_date } = req.query;

//     try {
//         const suppliers = await Supplier.findAll({
//             where: {
//                 created_at: {
//                     [Op.between]: [new Date(start_date), new Date(end_date)], // Using Sequelize Op for date range filtering
//                 },
//             },
//             include: {
//                 model: Inventory,
//                 attributes: ['product_name'],
//             },
//         });
//         res.status(200).json(suppliers);
//     } catch (error) {
//         console.error('Error fetching suppliers by date range:', error);
//         res.status(500).json({ message: 'Error fetching suppliers by date range', error });
//     }
// };


// const Supplier = require('../models/Supplier');
// const Inventory = require('../models/Inventory');
// const { Op } = require('sequelize'); // Ensure Sequelize Op is imported

// // Fetch all suppliers
// const getSuppliers = async (req, res) => {
//     try {
//         const suppliers = await Supplier.findAll({
//             include: {
//                 model: Inventory,
//                 attributes: ['product_name'], // Include product names
//             },
//         });
//         res.status(200).json(suppliers);
//     } catch (error) {
//         console.error('Error fetching suppliers:', error);
//         res.status(500).json({ message: 'Error fetching suppliers', error });
//     }
// };

// // Add a new supplier
// const addSupplier = async (req, res) => {
//     const { name, contact_info } = req.body;
//     try {
//         const newSupplier = await Supplier.create({
//             name,
//             contact_info,
//         });
//         res.status(201).json(newSupplier);
//     } catch (error) {
//         console.error('Error adding supplier:', error);
//         res.status(500).json({ message: 'Error adding supplier', error });
//     }
// };

// // Fetch suppliers by date range with their products
// const getSuppliersByDateRange = async (req, res) => {
//     const { start_date, end_date } = req.query;

//     try {
//         const suppliers = await Supplier.findAll({
//             where: {
//                 created_at: {
//                     [Op.between]: [new Date(start_date), new Date(end_date)], // Using Sequelize Op for date range filtering
//                 },
//             },
//             include: {
//                 model: Inventory,
//                 attributes: ['product_name'],
//             },
//         });
//         res.status(200).json(suppliers);
//     } catch (error) {
//         console.error('Error fetching suppliers by date range:', error);
//         res.status(500).json({ message: 'Error fetching suppliers by date range', error });
//     }
// };

// // Export all functions at the end, similar to the structure in UserController.js
// module.exports = {
//     getSuppliers,
//     addSupplier,
//     getSuppliersByDateRange
// };

const { Op } = require('sequelize'); // Required for filtering with Sequelize
const Supplier = require('../models/Supplier');
const Inventory = require('../models/Inventory');

// Function to add a new supplier
const addSupplier = async (req, res) => {
    try {
        const { name, contact_info } = req.body;
        const newSupplier = await Supplier.create({
            name,
            contact_info,
        });
        res.status(201).json(newSupplier);
    } catch (error) {
        console.error('Error adding supplier:', error);
        res.status(500).json({ message: 'Error adding supplier' });
    }
};

// Function to get supplier details along with the items they supplied
const getSupplierItems = async (req, res) => {
    try {
        const { supplier_name } = req.params;

        // Find supplier by name
        const supplier = await Supplier.findOne({
            where: {
                name: {
                    [Op.iLike]: supplier_name, // Case-insensitive search
                },
            },
            include: [
                {
                    model: Inventory,
                    where: { supplier_id: sequelize.col('Supplier.supplier_id') },
                    required: false, // Include even if no items found
                },
            ],
        });

        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json(supplier);
    } catch (error) {
        console.error('Error fetching supplier items:', error);
        res.status(500).json({ message: 'Error fetching supplier items' });
    }
};

// Function to get all suppliers details (on button click)
const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.status(200).json(suppliers);
    } catch (error) {
        console.error('Error fetching all suppliers:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Method to search suppliers by name
const searchSupplier = async (req, res) => {
    const { name } = req.query; // Get the name query parameter from the request
    try {
        // Use Sequelize's Op.like for partial matching (case-insensitive search)
        const suppliers = await Supplier.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`, // Searches for suppliers whose name contains the query 'name'
                },
            },
        });

        if (suppliers.length === 0) {
            return res.status(404).json({ message: 'No suppliers found' });
        }

        res.status(200).json(suppliers); // Return the list of suppliers found
    } catch (error) {
        console.error('Error searching suppliers:', error);
        res.status(500).json({ message: 'Error searching suppliers' });
    }
};

module.exports = {
    addSupplier,
    getSupplierItems,
    getAllSuppliers,
    searchSupplier
};
