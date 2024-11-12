import axios from 'axios';

const API_URL = '/api/manager/orders';

const getOrders = () => axios.get(API_URL);
const updateOrderStatus = (orderId, status) => axios.put(`${API_URL}/status`, { orderId, status });

export default { getOrders, updateOrderStatus };
