// src/components/ManagerDashboardControls.js
import React from 'react';
import ManageOrders from './ManageOrders';
import ManageInventory from './ManageInventory';
import SupplierManagement from './SupplierManagement';

const ManagerDashboardControls = () => {
    return (
        <div className="manager-dashboard-controls">
            <h2>Manager Dashboard</h2>

            {/* Manage Orders Section */}
            <div className="manager-section">
                <h3>Manage Orders</h3>
                <ManageOrders />
            </div>

            {/* Inventory Management Section */}
            <div className="manager-section">
                <h3>Inventory Management</h3>
                <ManageInventory />
            </div>

            {/* Supplier Management Section */}
            <div className="manager-section">
                <h3>Supplier Management</h3>
                <SupplierManagement />
            </div>
        </div>
    );
};

export default ManagerDashboardControls;
