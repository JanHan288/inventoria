// src/pages/AdminDashboard.js
import React, { useState } from 'react';
import AddUserForm from '../components/AddUserForm';
import ManageInventory from '../components/ManageInventory';

const AdminDashboard = () => {
    const [showAddUserForm, setShowAddUserForm] = useState(false);

    const handleAddUserClick = () => setShowAddUserForm(true);
    const handleCloseForm = () => setShowAddUserForm(false);

    return (
        <div 
            style={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                padding: '20px', 
                backgroundColor: '#f4f4f9', 
                minHeight: '100vh'
            }}
        >
            <h2 
                style={{
                    color: '#333', 
                    fontSize: '24px', 
                    marginBottom: '20px',
                }}
            >
                Admin Dashboard
            </h2>
            <button
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    fontSize: '16px',
                }}
                onClick={handleAddUserClick}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
            >
                Add User/Manager
            </button>

            {showAddUserForm ? (
                <AddUserForm onClose={handleCloseForm} />
            ) : (
                <>
                    <ManageInventory />
                    {/* Include other admin components here */}
                </>
            )}
        </div>
    );
};

export default AdminDashboard;
