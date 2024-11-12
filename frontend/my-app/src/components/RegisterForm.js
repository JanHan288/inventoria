// src/components/RegisterForm.js
import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import "./RegisterForm.css"

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role is 'user'

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AuthService.register(username, email, password, role);
            alert('Registration successful! Redirecting to login page.');
            window.location.href = '/login'; // Redirect to login page
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // If a 400 error occurs (check if it’s a duplicate user error)
                if (error.response.data.message === 'User already exists. Please log in.') {
                    alert('User already exists! Redirecting to login page.');
                    window.location.href = '/login'; // Redirect existing user to login page
                }
            } else {
                console.error('Registration failed', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
                <h2 className='heading'>Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className='input'
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='input'
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='input'
                />
                <select value={role} onChange={(e) => setRole(e.target.value)} className='select'>
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit" className='button'>Register</button>
        </form>
    );
};

export default RegisterForm;
