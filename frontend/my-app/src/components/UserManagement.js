// // src/components/UserManagement.js
// import React, { useState, useEffect } from 'react';

// const UserManagement = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         // Fetch user data from API (mocked for example)
//         setUsers([
//             { id: 1, username: 'adminUser', role: 'admin' },
//             { id: 2, username: 'managerUser', role: 'manager' },
//         ]);
//     }, []);

//     return (
//         <div>
//             <h3>User Management</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>User ID</th>
//                         <th>Username</th>
//                         <th>Role</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.username}</td>
//                             <td>{user.role}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={() => console.log('Add User')}>Add User</button>
//         </div>
//     );
// };

// export default UserManagement;

// // src/components/UserManagement.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserManagement = () => {
//     const [users, setUsers] = useState([]);
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/admin/users', {
//                 params: { startDate, endDate },
//             });
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     const handleRoleChange = async (userId, newRole) => {
//         try {
//             await axios.put(`http://localhost:5000/api/admin/users/${userId}`, { role: newRole });
//             fetchUsers(); // Refresh users list after role update
//         } catch (error) {
//             console.error('Error updating user role:', error);
//         }
//     };

//     const handleFilterByDate = () => {
//         fetchUsers(); // Fetch users based on date range
//     };

//     return (
//         <div>
//             <h3>User Management</h3>
//             <div>
//                 <label>Start Date:</label>
//                 <input
//                     type="date"
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                 />
//                 <label>End Date:</label>
//                 <input
//                     type="date"
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                 />
//                 <button onClick={handleFilterByDate}>Filter Users by Date</button>
//             </div>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>Role</th>
//                         <th>Created At</th>
//                         <th>Change Role</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.username}</td>
//                             <td>{user.email}</td>
//                             <td>{user.role}</td>
//                             <td>{new Date(user.createdAt).toISOString().split('T')[0]}</td>
//                             <td>
//                                 <select
//                                     value={user.role}
//                                     onChange={(e) => handleRoleChange(user.id, e.target.value)}
//                                 >
//                                     <option value="user">User</option>
//                                     <option value="manager">Manager</option>
//                                     <option value="admin">Admin</option>
//                                 </select>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UserManagement;

// // src/components/UserManagement.js
// import React, { useEffect, useState } from 'react';
// import UserService from '../services/UserServices';

// const UserManagement = () => {
//     const [users, setUsers] = useState([]);
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         if (startDate && endDate) {
//             fetchUsers();
//         }
//     }, [startDate, endDate]);

//     const fetchUsers = async () => {
//         setLoading(true); // Set loading state
//         setError(''); // Clear previous error
//         try {
//             const data = await UserService.getFilteredUsers(startDate, endDate);
//             setUsers(data);
//         } catch (err) {
//             console.error('Failed to fetch users:', err);
//             setError('Failed to fetch users');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleRoleChange = async (userId, currentRole) => {
//         const newRole = currentRole === 'user' ? 'manager' : 'user'; // Toggle role
//         try {
//             await UserService.updateUserRole(userId, newRole);
//             fetchUsers(); // Refresh user list after updating
//         } catch (err) {
//             console.error('Failed to update role:', err);
//             setError('Failed to update role');
//         }
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div>
//             <h2>User Management</h2>
//             <div>
//                 <label>Start Date:</label>
//                 <input
//                     type="date"
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                 />
//                 <label>End Date:</label>
//                 <input
//                     type="date"
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                 />
//                 <button onClick={fetchUsers}>Filter Users</button>
//             </div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>Role</th>
//                         <th>Created At</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.username}</td>
//                             <td>{user.email}</td>
//                             <td>{user.role}</td>
//                             <td>{new Date(user.created_at).toLocaleString()}</td>
//                             <td>
//                                 <button onClick={() => handleRoleChange(user.id, user.role)}>
//                                     Change to {user.role === 'user' ? 'Manager' : 'User'}
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UserManagement;

// src/components/UserManagement.js
import React, { useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Fetch users within the date range
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/admin/users', {
                params: { startDate, endDate },
            });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Handle role change
    const handleRoleChange = async (userId, newRole) => {
        try {
            await axios.put(`http://localhost:5000/api/admin/users/${userId}`, { role: newRole });
            fetchUsers(); // Refresh user list after updating role
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    };

    // Filter users by date range
    const handleFilterByDate = () => {
        if (startDate && endDate) {
            fetchUsers();
        } else {
            alert('Please select both start and end dates.');
        }
    };

    return (
        <div>
            <h3>User Management</h3>
            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <label>End Date:</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <button onClick={handleFilterByDate}>Filter Users by Date</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created At</th>
                        <th>Change Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{new Date(user.createdAt).toISOString().split('T')[0]}</td>
                            <td>
                                <select
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="manager">Manager</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
