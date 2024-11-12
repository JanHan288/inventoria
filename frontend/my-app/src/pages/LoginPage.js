// src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div style={styles.pageContainer}>
            <div style={styles.formContainer}>
                <h2 style={styles.heading}>Login</h2>
                <LoginForm />
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8', // Light grayish blue background
    },
    formContainer: {
        backgroundColor: '#ffffff', // White background for the form
        padding: '50px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '250px',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
        fontWeight: '600',
    },
};

export default LoginPage;
