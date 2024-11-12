// // routes/adminRoutes.js
// const express = require('express');
// const { addUser } = require('../controllers/AdminController');
// const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

// const router = express.Router();

// // Only admins can add users
// router.post('/add-user', authMiddleware, roleMiddleware(['admin']), addUser);

// module.exports = router;

// routes/adminRoutes.js
const express = require('express');
const { addUser, updateUserRole, getUsersByDateRange } = require('../controllers/AdminController');
const router = express.Router();

// Add a new user (Admin only)
router.post('/add-user', addUser);

// Update a user's role (Admin only)
router.put('/users/:userId', updateUserRole);

// Get users within a specified date range
router.get('/users', getUsersByDateRange);

module.exports = router;
