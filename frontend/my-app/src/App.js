// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import DashboardPage from './pages/DashboardPage';
// import { AuthProvider, useAuth } from './context/AuthContext';

// const PrivateRoute = ({ children }) => {
//     const { role } = useAuth();
//     return role ? children : <Navigate to="/login" />;
// };

// function App() {
//     return (
//         <AuthProvider>
//             <Router>
//                 <Routes>
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/register" element={<RegisterPage />} />
//                     <Route
//                         path="/dashboard"
//                         element={
//                             <PrivateRoute>
//                                 <DashboardPage />
//                             </PrivateRoute>
//                         }
//                     />
//                     {/* Redirect to login if no route matches */}
//                     <Route path="*" element={<Navigate to="/login" />} />
//                 </Routes>
//             </Router>
//         </AuthProvider>
//     );
// }
// export default App;

// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import DashboardPage from './pages/DashboardPage';
// import { AuthProvider, useAuth } from './context/AuthContext';

// const PrivateRoute = ({ children }) => {
//     const { role } = useAuth();
//     return role ? children : <Navigate to="/login" />;
// };

// function App() {
//     return (
//         <AuthProvider>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Navigate to="/register" />} /> {/* Default to register */}
//                     <Route path="/register" element={<RegisterPage />} />
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route
//                         path="/dashboard"
//                         element={
//                             <PrivateRoute>
//                                 <DashboardPage />
//                             </PrivateRoute>
//                         }
//                     />
//                     {/* Redirect all other paths to /register */}
//                     <Route path="*" element={<Navigate to="/register" />} />
//                 </Routes>
//             </Router>
//         </AuthProvider>
//     );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider, useAuth } from './context/AuthContext';

// PrivateRoute now checks for specific roles
const PrivateRoute = ({ children, roles }) => {
    const { role } = useAuth();
    return roles.includes(role) ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Default route to registration */}
                    <Route path="/" element={<Navigate to="/register" />} />
                    
                    {/* Public routes */}
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    
                    {/* Role-protected dashboard route */}
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute roles={['admin', 'manager', 'user']}>
                                <DashboardPage />
                            </PrivateRoute>
                        }
                    />
                    
                    {/* Admin-only route example (replace with actual component when created) */}
                    <Route
                        path="/admin/users"
                        element={
                            <PrivateRoute roles={['admin']}>
                                <div>Admin User Management</div> {/* Replace with actual AdminUserManagement component */}
                            </PrivateRoute>
                        }
                    />

                    {/* Manager-only route example */}
                    <Route
                        path="/manager/orders"
                        element={
                            <PrivateRoute roles={['manager', 'admin']}>
                                <div>Order Management</div> {/* Replace with actual ManageOrders component */}
                            </PrivateRoute>
                        }
                    />
                    
                    {/* Redirect all undefined paths to /register */}
                    <Route path="*" element={<Navigate to="/register" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
