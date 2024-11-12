// // src/context/AuthContext.js
// import React, { createContext, useContext, useState } from 'react';
// import AuthService from '../services/AuthService';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [role, setRole] = useState(localStorage.getItem('role'));

//     const login = async (email, password) => {
//         const data = await AuthService.login(email, password);
//         setRole(data.role);
//     };

//     const logout = () => {
//         AuthService.logout();
//         setRole(null);
//     };

//     return (
//         <AuthContext.Provider value={{ role, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };


// // src/context/AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import AuthService from '../services/AuthService';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [role, setRole] = useState(localStorage.getItem('role'));

//     const login = async (email, password) => {
//         const data = await AuthService.login(email, password);
//         setRole(data.role);
//     };

//     const logout = () => {
//         AuthService.logout();
//         setRole(null);
//     };

//     useEffect(() => {
//         if (!AuthService.getToken()) {
//             setRole(null); // Remove role if no token is found
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{ role, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };


// // src/context/AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import AuthService from '../services/AuthService';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [role, setRole] = useState(localStorage.getItem('role')); // Initialize role from localStorage

//     const login = async (email, password) => {
//         // Call the AuthService to handle login
//         const data = await AuthService.login(email, password);
        
//         // Save role and token in localStorage
//         localStorage.setItem('role', data.role);
//         localStorage.setItem('token', data.token);
        
//         // Update role state
//         setRole(data.role);
//     };

//     const logout = () => {
//         // Clear AuthService, state, and localStorage
//         AuthService.logout();
//         setRole(null);
//         localStorage.removeItem('role');
//         localStorage.removeItem('token');
//     };

//     useEffect(() => {
//         // Check for token and set role on load or reload
//         if (!AuthService.getToken()) {
//             setRole(null);
//             localStorage.removeItem('role');
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{ role, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// // src/context/AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import AuthService from '../services/AuthService';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [role, setRole] = useState(localStorage.getItem('role'));

//     const login = async (email, password) => {
//         const data = await AuthService.login(email, password);
//         setRole(data.role);
//         localStorage.setItem('token', data.token);
//     };

//     const logout = () => {
//         AuthService.logout();
//         setRole(null);
//         localStorage.removeItem('token');
//     };

//     useEffect(() => {
//         if (!AuthService.getToken()) {
//             setRole(null);
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{ role, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AuthService from '../services/AuthService';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(localStorage.getItem('role') || null);

    const login = async (email, password) => {
        try {
            const data = await AuthService.login(email, password);
            setRole(data.role);
            localStorage.setItem('role', data.role); // Ensure the role is also saved
        } catch (error) {
            console.error('Login failed', error);
            // Handle error display or state updates as needed
        }
    };

    const logout = () => {
        AuthService.logout();
        setRole(null);
    };

    useEffect(() => {
        if (!AuthService.getToken()) {
            setRole(null);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
