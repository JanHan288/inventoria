// // src/services/AuthService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/auth';

// const register = async (username, email, password, role) => {
//     const response = await axios.post(`${API_URL}/register`, { username, email, password, role });
//     return response.data;
// };

// const login = async (email, password) => {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('role', response.data.role);
//     }
//     return response.data;
// };

// const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
// };
// const AuthService = {register, login, logout}
// export default AuthService;

// // src/services/AuthService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/auth';

// const register = async (username, email, password, role) => {
//     const response = await axios.post(`${API_URL}/register`, { username, email, password, role });
//     return response.data;
// };

// const login = async (email, password) => {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     if (response.data.token) {
//         localStorage.setItem('token', response.data.token);  // Store token in localStorage
//         localStorage.setItem('role', response.data.role);
//     }
//     return response.data;
// };

// const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
// };

// const getToken = () => localStorage.getItem('token');

// export default { register, login, logout, getToken };

// src/services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = async (username, email, password, role) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { username, email, password, role });
        return response.data;
    } catch (error) {
        console.error('Registration failed', error);
        throw error; // Re-throw for handling in context
    }
};

const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
        }
        return response.data;
    } catch (error) {
        console.error('Login failed', error);
        throw error; // Re-throw for handling in context
    }
};

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
};

const getToken = () => localStorage.getItem('token');

export default { register, login, logout, getToken };
