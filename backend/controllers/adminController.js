const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

// Fetch users within a specified date range
const getUsersByDateRange = async (req, res) => {
    const { startDate, endDate } = req.query;

    try {
        if (!startDate || !endDate) {
            return res.status(400).json({ message: 'Start and end dates are required' });
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);

        const users = await User.findAll({
            where: {
                createdAt: {
                    [Op.between]: [start, end],
                },
            },
            attributes: ['id', 'username', 'email', 'role', 'createdAt'],
        });

        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users by date range:', error);
        res.status(500).json({ message: 'Error fetching users by date range', error });
    }
};

// Add a new user (Admin only)
const addUser = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error adding user', error });
    }
};

// Update user role (Admin only)
const updateUserRole = async (req, res) => {
    const { userId } = req.params;
    const { role } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        user.role = role;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user role', error });
    }
};

module.exports = { addUser, updateUserRole, getUsersByDateRange};
