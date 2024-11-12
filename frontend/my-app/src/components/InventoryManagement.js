// src/components/InventoryManagement.js
import React, { useState, useEffect } from 'react';

const InventoryManagement = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        // Fetch inventory data from API (mocked for example)
        setInventory([
            { id: 1, item: 'Laptop', stock: 50 },
            { id: 2, item: 'Monitor', stock: 20 },
        ]);
    }, []);

    return (
        <div>
            <h3>Inventory Management</h3>
            <table>
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.item}</td>
                            <td>{item.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => console.log('Update Stock')}>Update Stock</button>
        </div>
    );
};

export default InventoryManagement;
