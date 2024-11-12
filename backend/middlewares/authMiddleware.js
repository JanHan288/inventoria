// // middlewares/authMiddleware.js
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const authMiddleware = (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) return res.status(403).json({ message: 'Token required' });

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: 'Unauthorized' });
//     }
// };

// const roleMiddleware = (roles) => (req, res, next) => {
//     if (roles.includes(req.user.role)) {
//         return next();
//     }
//     res.status(403).json({ message: 'Forbidden' });
// };

// module.exports = { authMiddleware, roleMiddleware };

// // middlewares/authMiddleware.js
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const authMiddleware = (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) return res.status(403).json({ message: 'Token required' });

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded; // Attach user info to request
//         next();
//     } catch (error) {
//         res.status(401).json({ message: 'Unauthorized' });
//     }
// };

// module.exports = { authMiddleware };

// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Token required' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

// Role-based authorization middleware
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied. Insufficient privileges.' });
        }
        next();
    };
};

module.exports = { authMiddleware, authorizeRoles };
