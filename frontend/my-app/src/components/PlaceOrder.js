// src/components/PlaceOrder.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlaceOrder = () => {
    const [inventory, setInventory] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchInventory();
    }, []);

    const fetchInventory = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/inventory');
            setInventory(response.data);
        } catch (error) {
            console.error('Error fetching inventory:', error);
        }
    };

    const handlePlaceOrder = async () => {
        try {
            await axios.post('http://localhost:5000/api/inventory/order', { itemId: selectedItem, quantity });
            alert('Order placed successfully');
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
        <div>
            <h3>Place Order</h3>
            <select onChange={(e) => setSelectedItem(e.target.value)}>
                <option value="">Select Item</option>
                {inventory.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.item} (Available: {item.stock})
                    </option>
                ))}
            </select>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
};

export default PlaceOrder;
