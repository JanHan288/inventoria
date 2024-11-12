// // routes/authRoutes.js
// const express = require('express');
// const { register, login } = require('../controllers/authController');
// const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.get('/dashboard', authMiddleware, (req, res) => {
//     res.send('Dashboard accessible to logged-in users.');
// });

// module.exports = router;

// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/dashboard', authMiddleware, (req, res) => {
    res.send(`Welcome to the dashboard, ${req.user.role}`);
});

module.exports = router;
