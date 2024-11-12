// controllers/UserController.js
const { Op } = require('sequelize');
const User = require('../models/Users'); // Make sure the User model is defined correctly

// Fetch users with date filtering based on created_at
const getFilteredUsers = async (req, res) => {
    const { startDate, endDate } = req.query; // Get start and end dates from query
    try {
        // Make sure the dates are valid
        if (!startDate || !endDate) {
            return res.status(400).json({ message: 'Start date and end date are required.' });
        }

        // Fetch users created within the date range
        const users = await User.findAll({
            where: {
                created_at: {
                    [Op.between]: [new Date(startDate), new Date(endDate)],
                },
            },
            attributes: ['id', 'username', 'email', 'role', 'created_at'], // Select relevant columns
        });
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

// Create a new user
const createUser = async (req, res) => {
    const { name, email, password, role } = req.body; // Adjust based on your User model structure
    try {
        const newUser = await User.create({ name, email, password, role }); // Save new user
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: 'Error adding user', error });
    }
};
// Update user role
const updateUserRole = async (req, res) => {
    const { userId, newRole } = req.body; // Get userId and newRole from request body
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.role = newRole; // Update the user role
        await user.save(); // Save the updated user
        res.status(200).json({ message: 'User role updated successfully' });
    } catch (error) {
        console.error("Error updating user role:", error);
        res.status(500).json({ message: 'Error updating user role', error });
    }
};
module.exports = { getFilteredUsers, createUser, updateUserRole };
