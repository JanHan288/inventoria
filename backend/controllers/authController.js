// // controllers/authController.js
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/Users'); 
// require('dotenv').config();

// // const secretKey = process.env.SECRET_KEY || 'secret-key';

// const register = async (req, res) => {
//     const { username, email, password, role } = req.body;

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = await User.create({ username, email, password: hashedPassword, role });

//         const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         res.status(201).json({ message: 'User registered', token });
//     } catch (error) {
//         res.status(500).json({ message: 'Error registering user', error });
//     }
// };

// const login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ where: { email } });
//         if (!user) return res.status(404).json({ message: 'User not found' });

//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) return res.status(400).json({ message: 'Invalid password' });

//         const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         res.status(200).json({ message: 'Login successful', token, role: user.role });
//     } catch (error) {
//         res.status(500).json({ message: 'Error logging in', error });
//     }
// };

// module.exports = { register, login };


// // controllers/authController.js
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/Users');  // Ensure correct path
// require('dotenv').config();

// const register = async (req, res) => {
//     const { username, email, password, role } = req.body;

//     try {
//         // Check if the user already exists
//         const existingUser = await User.findOne({ where: { email } });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists. Please log in.' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create new user
//         const newUser = await User.create({ username, email, password: hashedPassword, role });

//         // Generate a token
//         const token = jwt.sign(
//             { id: newUser.id, role: newUser.role },
//             process.env.JWT_SECRET || 'default_secret_key',  // Fallback if env variable is missing
//             { expiresIn: '1h' }
//         );

//         // Send success response
//         res.status(201).json({ message: 'User registered successfully. Please log in.' });
//     } catch (error) {
//         console.error("Registration error:", error);
//         res.status(500).json({ message: 'Error registering user', error });
//     }
// };

// const login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Check if user exists
//         const user = await User.findOne({ where: { email } });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found. Please register.' });
//         }

//         // Check password validity
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(400).json({ message: 'Invalid password' });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: user.id, role: user.role },
//             process.env.JWT_SECRET || 'default_secret_key',  // Ensure token can be generated even if env is missing
//             { expiresIn: '1h' }
//         );

//         // Send success response with role and token
//         res.status(200).json({ message: 'Login successful', token, role: user.role });
//     } catch (error) {
//         console.error("Login error:", error);
//         res.status(500).json({ message: 'Error logging in', error });
//     }
// };

// module.exports = { register, login };

// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');  // Make sure the path and filename are correct
require('dotenv').config();

const register = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        console.log("Received registration request with data:", req.body);

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists. Please log in.' }); //When repeated user tries to register with same details.
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({ username, email, password: hashedPassword, role });

        // Generate a token
        const token = jwt.sign(
            { id: newUser.id, role: newUser.role },
            process.env.JWT_SECRET || 'default_secret_key',  // Ensure the secret is set
            { expiresIn: '1h' }
        );

        // Send success response
        res.status(201).json({ message: 'User registered successfully. Please log in.' });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: 'Error registering user', error });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found. Please register.' });
        }

        // Check password validity
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET || 'default_secret_key',  // Ensure token can be generated even if env is missing
            { expiresIn: '1h' }
        );

        // Send success response with role and token
        res.status(200).json({ message: 'Login successful', token, role: user.role });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Error logging in', error });
    }
};

module.exports = { register, login };
