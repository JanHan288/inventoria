// src/pages/DashboardPage.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import CommonDashboardControls from '../components/CommonDashboardControls';
import ManagerDashboardControls from '../components/ManagerDashboardControls'; // New Manager-specific controls

const DashboardPage = () => {
    const { role } = useAuth(); // Get the role from AuthContext

    return (
        <div className="dashboard-page" style={styles.dashboardPage}>
            <div className="common-controls" style={styles.commonControls}>
                <CommonDashboardControls role={role} />
            </div>
            
            {/* Render Admin controls if role is admin */}
            {role === 'admin' }
            
            {/* Manager-specific controls */}
            {role === 'manager' && (
                <div style={styles.managerControls}>
                    <ManagerDashboardControls />
                </div>
            )}
        </div>
    );
};

// Inline CSS styles
const styles = {
    dashboardPage: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        background: 'linear-gradient(to diagonal, #38a2d7, #561139)', // Gradient background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        // color: '#fff', // Text color to contrast with the background
    },
    commonControls: {
        backgroundColor: '#ffffff',
        width: '100%',
        maxWidth: '1000px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
        color: '#333', // Text color for content inside the control box
    },
    adminControls: {
        backgroundColor: '#2ecc71',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '1000px',
        textAlign: 'center',
        marginBottom: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    managerControls: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '1000px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
};

export default DashboardPage;


