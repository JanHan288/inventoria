// src/components/ManageOrders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleAddOrder = async () => {
        const newOrder = { product: 'New Product', quantity: 1 };
        try {
            await axios.post('http://localhost:5000/api/orders', newOrder);
            fetchOrders();
        } catch (error) {
            console.error('Error adding order:', error);
        }
    };

    const handleUpdateOrder = async (id, status) => {
        try {
            await axios.put(`http://localhost:5000/api/orders/${id}`, { status });
            fetchOrders();
        } catch (error) {
            console.error('Error updating order:', error);
        }
    };

    return (
        <div>
            <h3>Order Management</h3>
            <button onClick={handleAddOrder}>Add Order</button>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => handleUpdateOrder(order.id, 'Completed')}>Mark as Completed</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;
