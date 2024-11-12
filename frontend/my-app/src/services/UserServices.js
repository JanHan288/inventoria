// src/services/UserService.js
import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

const getFilteredUsers = async (startDate, endDate) => {
    const response = await axios.get(`${API_URL}/users`, {
        params: { startDate, endDate },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

const updateUserRole = async (userId, newRole) => {
    const response = await axios.post(`${API_URL}/users/update-role`, {
        userId,
        newRole,
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};
const UserServices = { getFilteredUsers, updateUserRole };
export default UserServices
