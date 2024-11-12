const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add a new product
router.post('/add-product', productController.addProduct);

// Update product stock
router.post('/update-stock', productController.updateStock);

// Check low stock for a specific product
router.get('/check-low-stock/:product_id', productController.checkLowStock);

module.exports = router;

// Remove this