// // routes/userRoutes.js
// const express = require('express');
// const router = express.Router();
// const UserController = require('../controllers/UserController');
// const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');

// router.get('/', authMiddleware, authorizeRoles('admin'), UserController.getAllUsers);
// router.post('/', authMiddleware, authorizeRoles('admin'), UserController.createUser);

// module.exports = router;
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { getFilteredUsers, updateUserRole } = require('../controllers/UserController');
const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');

// Get all users (Admin only)
// router.get('/', authMiddleware, authorizeRoles('admin'), UserController.getAllUsers);

// Create a new user (Admin only)
// router.post('/', authMiddleware, authorizeRoles('admin'), UserController.createUser);
router.post('/', UserController.createUser);
// Update user role (Admin only)
// router.put('/:id', authMiddleware, authorizeRoles('admin'), UserController.updateUserRole);
router.get('/users', authMiddleware, getFilteredUsers); // Fetch users based on created_at date range
router.post('/users/update-role', authMiddleware, updateUserRole); // Update user role

module.exports = router;
