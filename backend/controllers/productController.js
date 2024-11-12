const Product = require('../models/Product');

// Add a new product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, quantity } = req.body;
        const newProduct = await Product.create({
            name,
            description,
            price,
            category,
            quantity
        });
        res.status(201).json({ message: 'Product added successfully', newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error: error.message });
    }
};

// Update the stock of an existing product
const updateStock = async (req, res) => {
    try {
        const { product_id, quantity } = req.body;
        const product = await Product.findByPk(product_id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        product.quantity += quantity;
        await product.save();
        res.status(200).json({ message: 'Stock updated successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error updating stock', error: error.message });
    }
};

// Check if stock is low for a product
const checkLowStock = async (req, res) => {
    try {
        const { product_id } = req.params;
        const product = await Product.findByPk(product_id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        if (product.quantity < 10) {
            return res.status(200).json({ message: `Low stock for product ID ${product_id}`, status: 'low' });
        }
        res.status(200).json({ message: 'Stock level sufficient', status: 'sufficient' });
    } catch (error) {
        res.status(500).json({ message: 'Error checking low stock', error: error.message });
    }
};

module.exports = {
    addProduct,
    updateStock,
    checkLowStock
};

// Remove this