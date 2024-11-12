// // routes/inventoryRoutes.js
// const express = require('express');
// const InventoryController = require('../controllers/InventoryController');
// const router = express.Router();

// // Route to get all inventory items
// router.get('/api/manager/inventory', InventoryController.getInventory);

// // Route to add a new product to inventory
// router.post('/api/manager/inventory', InventoryController.addProduct);

// // Route to update stock for an existing inventory item
// router.put('/api/manager/inventory/update', InventoryController.updateStock);

// // module.exports = router;

// const express = require('express');
// const InventoryController = require('../controllers/InventoryController');
// const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');
// const router = express.Router();

// // Manager routes
// router.get('/manager/inventory', authMiddleware, authorizeRoles('manager'), InventoryController.getInventory);
// router.post('/manager/inventory', authMiddleware, authorizeRoles('manager'), InventoryController.addProduct);
// router.put('/manager/inventory/update', authMiddleware, authorizeRoles('manager'), InventoryController.updateStock);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const InventoryController = require('../controllers/InventoryController');

// // Define routes for inventory actions
// router.get('/', InventoryController.getInventory);                // Get all inventory items
// router.post('/add', InventoryController.addProduct);              // Add a new product
// router.put('/update-stock', InventoryController.updateStock);     // Update stock of an item
// router.get('/search', InventoryController.searchProduct);         // Search products by name

// module.exports = router;

// // routes/inventoryRoutes.js
// const express = require('express');
// const InventoryController = require('../controllers/InventoryController');
// const router = express.Router();

// // Route to fetch all inventory items with supplier details
// router.get('/', InventoryController.getInventory);

// // Route to add a new product to the inventory
// router.post('/', InventoryController.addProduct);

// // Route to update an existing inventory item
// router.put('/:item_id', InventoryController.updateItem);

// // Route to incrementally update stock quantity
// router.put('/update-stock', InventoryController.updateStock);

// // Route to search products by name
// router.get('/search', InventoryController.searchProduct);

// module.exports = router;

// // routes/InventoryRoutes.js
// const express = require('express');
// const InventoryController = require('../controllers/InventoryController');
// const router = express.Router();

// // Route to fetch all inventory items (with supplier details)
// router.get('/', InventoryController.getInventory);

// // Route to add a new product to inventory (using supplier_name)
// router.post('/', InventoryController.addProduct);

// // Route to update an existing inventory item (using supplier_name)
// router.put('/:item_id', InventoryController.updateItem);

// // Route to update stock of an inventory item
// router.patch('/stock', InventoryController.updateStock);

// // Route to search for products by name with supplier details
// router.get('/search', InventoryController.searchProduct);

// module.exports = router;

// routes/InventoryRoutes.js
const express = require('express');
const InventoryController = require('../controllers/InventoryController');
const router = express.Router();

router.get('/', InventoryController.getInventory);
router.post('/', InventoryController.addProduct);
router.put('/:item_id', InventoryController.updateItem);
router.patch('/stock', InventoryController.updateStock);
router.get('/search', InventoryController.searchProduct);

module.exports = router;
