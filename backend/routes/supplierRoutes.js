// // routes/supplierRoutes.js
// const express = require('express');
// const { getSuppliers, addSupplier, updateSupplier } = require('../controllers/SupplierController');
// const router = express.Router();

// // Get all suppliers
// router.get('/api/suppliers', getSuppliers);

// // Add a new supplier
// router.post('/api/suppliers', addSupplier);

// // Update an existing supplier
// router.put('/api/suppliers/:supplier_id', updateSupplier);

// module.exports = router;

// const express = require('express');
// const { getSuppliers, addSupplier, updateSupplier } = require('../controllers/SupplierController');
// const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');
// const router = express.Router();

// router.get('/suppliers', authMiddleware, authorizeRoles('manager'), getSuppliers);
// router.post('/suppliers', authMiddleware, authorizeRoles('manager'), addSupplier);
// router.put('/suppliers/:supplier_id', authMiddleware, authorizeRoles('manager'), updateSupplier);

// module.exports = router;

// // routes/supplierRoutes.js
// const express = require('express');
// const supplierController = require('../controllers/SupplierController'); // Importing the controller
// const authMiddleware = require('../middlewares/authMiddleware'); // Assuming this exists for authentication

// const router = express.Router();

// // Route to get all suppliers (GET /api/suppliers)
// router.get('/', authMiddleware, supplierController.getSuppliers);

// // Route to add a new supplier (POST /api/suppliers)
// router.post('/', authMiddleware, supplierController.addSupplier);

// // Route to get suppliers by date range (GET /api/suppliers/date-range)
// router.get('/date-range', authMiddleware, supplierController.getSuppliersByDateRange);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const SupplierController = require('../controllers/SupplierController');

// // Define routes for supplier actions
// router.get('/', SupplierController.getSuppliers);                      // Get all suppliers
// router.post('/add', SupplierController.addSupplier);                   // Add a new supplier
// router.get('/date-range', SupplierController.getSuppliersByDateRange); // Get suppliers within a date range

// module.exports = router;



const express = require('express');
const SupplierController = require('../controllers/SupplierController');
const router = express.Router();

// Route to add a new supplier
router.post('/', SupplierController.addSupplier);

// Route to get items of a specific supplier by name
router.get('/:supplier_name/items', SupplierController.getSupplierItems);

// Route to fetch all supplier details (for manager view)
router.get('/', SupplierController.getAllSuppliers);

// Route to search suppliers by name
router.get('/search', SupplierController.searchSupplier);

module.exports = router;
