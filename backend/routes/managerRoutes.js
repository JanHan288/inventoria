// const express = require('express');
// const { getInventory, updateStock } = require('../controllers/InventoryController');
// const { getOrders, updateOrderStatus } = require('../controllers/OrderController');
// const router = express.Router();

// router.get('/inventory', getInventory);
// router.put('/inventory/update', updateStock);

// router.get('/orders', getOrders);
// router.put('/orders/status', updateOrderStatus);

// module.exports = router;

// routes/managerRoutes.js
const express = require('express');
const { getInventory, addProduct, updateStock, searchProduct } = require('../controllers/InventoryController');
const { authorizeRoles, authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

// Protect these routes by checking if the user is a manager
router.use(authMiddleware);
router.use(authorizeRoles('manager')); // Only managers can access these routes

// Route to get all inventory items
router.get('/inventory', getInventory);

// Route to add a new product to inventory
router.post('/inventory', addProduct);

// Route to update stock for an existing inventory item
router.put('/inventory/update', updateStock);

// Route to search for products by name
router.get('/inventory/search', searchProduct);

module.exports = router;
