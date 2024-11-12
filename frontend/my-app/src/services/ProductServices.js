import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/products';  // Base URL for your backend API

// Add a product
export const addProduct = async (productData) => {
    try {
        const response = await axios.post(`${apiUrl}/add-product`, productData);
        return response.data;  // Return response data for frontend handling
    } catch (error) {
        throw error.response?.data || 'Error adding product';
    }
};

// Update stock
export const updateStock = async (productID, quantity) => {
    try {
        const response = await axios.post(`${apiUrl}/update-stock`, { product_id: productID, quantity });
        return response.data;
    } catch (error) {
        throw error.response?.data || 'Error updating stock';
    }
};

// Check if stock is low
export const checkLowStock = async (productID) => {
    try {
        const response = await axios.get(`${apiUrl}/check-low-stock/${productID}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || 'Error checking low stock';
    }
};
