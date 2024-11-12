// // src/components/CommonDashboardControls.js
// import React from 'react';
// import ManageOrders from './ManageOrders';
// import InventoryManagement from './InventoryManagement';
// import UserManagement from './UserManagement';

// const CommonDashboardControls = ({ role }) => {
//     return (
//         <div className="dashboard-controls">
//             <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h2>

//             {role === 'admin' && (
//                 <div className="admin-controls">
//                     <h3>Admin Controls</h3>
//                     <UserManagement />
//                     <button onClick={() => console.log('System Settings')}>System Settings</button>
//                 </div>
//             )}

//             {(role === 'manager' || role === 'admin') && (
//                 <div className="manager-controls">
//                     <h3>Manager Controls</h3>
//                     <ManageOrders />
//                     <InventoryManagement />
//                     <button onClick={() => console.log('Supplier Management')}>Supplier Management</button>
//                 </div>
//             )}

//             {role === 'user' && (
//                 <div className="user-controls">
//                     <h3>User Dashboard</h3>
//                     <button onClick={() => console.log('View My Orders')}>View My Orders</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CommonDashboardControls;

// // src/components/CommonDashboardControls.js
// import React, { useState, useEffect } from 'react';
// import ManageOrders from './ManageOrders';
// import InventoryManagement from './InventoryManagement';
// import UserManagement from './UserManagement';
// import AddUserForm from './AddUserForm';

// const CommonDashboardControls = ({ role }) => {
//     const [users, setUsers] = useState([]);

//     // Fetch users from the backend (API call)
//     const fetchUsers = async () => {
//         try {
//             const response = await fetch('/api/users'); // Adjust API endpoint as needed
//             const data = await response.json();
//             setUsers(data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     useEffect(() => {
//         if (role === 'admin') {
//             fetchUsers();
//         }
//     }, [role]);

//     const handleAddUser = async (newUser) => {
//         try {
//             const response = await fetch('/api/users', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(newUser),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to add user');
//             }

//             const addedUser = await response.json();
//             setUsers((prevUsers) => [...prevUsers, addedUser]);
//         } catch (error) {
//             console.error('Error adding user:', error);
//         }
//     };

//     const handleChangeUserRole = async (userId, newRole) => {
//         try {
//             const response = await fetch(`/api/users/${userId}`, {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ role: newRole }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to update user role');
//             }

//             fetchUsers(); // Refresh the user list after updating
//         } catch (error) {
//             console.error('Error updating user role:', error);
//         }
//     };

//     return (
//         <div className="dashboard-controls">
//             <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h2>

//             {role === 'admin' && (
//                 <div className="admin-controls">
//                     <h3>Admin Controls</h3>
//                     <AddUserForm onAddUser={handleAddUser} />
//                     <h4>Manage Users</h4>
//                     <ul>
//                         {users.map((user) => (
//                             <li key={user.id}>
//                                 {user.name} - {user.role}
//                                 <select
//                                     value={user.role}
//                                     onChange={(e) => handleChangeUserRole(user.id, e.target.value)}
//                                 >
//                                     <option value="user">User</option>
//                                     <option value="manager">Manager</option>
//                                 </select>
//                             </li>
//                         ))}
//                     </ul>
//                     <button onClick={() => console.log('System Settings')}>System Settings</button>
//                 </div>
//             )}

//             {(role === 'manager' || role === 'admin') && (
//                 <div className="manager-controls">
//                     <h3>Manager Controls</h3>
//                     <ManageOrders />
//                     <InventoryManagement />
//                     <button onClick={() => console.log('Supplier Management')}>Supplier Management</button>
//                 </div>
//             )}

//             {role === 'user' && (
//                 <div className="user-controls">
//                     <h3>User Dashboard</h3>
//                     <button onClick={() => console.log('View My Orders')}>View My Orders</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CommonDashboardControls;

// // src/components/CommonDashboardControls.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddUserForm from './AddUserForm';

// const CommonDashboardControls = ({ role }) => {
//     const [users, setUsers] = useState([]);
//     const [showAddUserForm, setShowAddUserForm] = useState(false);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/admin/users');
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     useEffect(() => {
//         if (role === 'admin') {
//             fetchUsers();
//         }
//     }, [role]);

//     const handleAddUser = (newUser) => {
//         setUsers((prevUsers) => [...prevUsers, newUser]);
//         setShowAddUserForm(false); // Hide form after adding a user
//     };

//     const handleChangeUserRole = async (userId, newRole) => {
//         try {
//             await axios.put(`http://localhost:5000/api/admin/users/${userId}`, { role: newRole });
//             fetchUsers(); // Refresh user list
//         } catch (error) {
//             console.error('Error updating user role:', error);
//         }
//     };

//     return (
//         <div className="dashboard-controls">
//             <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h2>

//             {role === 'admin' && (
//                 <div className="admin-controls">
//                     <h3>Admin Controls</h3>
//                     <button onClick={() => setShowAddUserForm(!showAddUserForm)}>
//                         {showAddUserForm ? 'Cancel' : 'Add User/Manager'}
//                     </button>

//                     {showAddUserForm && <AddUserForm onAddUser={handleAddUser} />}

//                     <h4>Manage Users</h4>
//                     <ul>
//                         {users.map((user) => (
//                             <li key={user.id}>
//                                 {user.username} - {user.role}
//                                 <select
//                                     value={user.role}
//                                     onChange={(e) => handleChangeUserRole(user.id, e.target.value)}
//                                 >
//                                     <option value="user">User</option>
//                                     <option value="manager">Manager</option>
//                                     <option value="admin">Admin</option>
//                                 </select>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CommonDashboardControls;

// // src/components/CommonDashboardControls.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import AddUserForm from './AddUserForm';
// import UserManagement from './UserManagement';

// const CommonDashboardControls = ({ role }) => {
//     const [showAddUserForm, setShowAddUserForm] = useState(false);
//     const [showUserManagement, setShowUserManagement] = useState(false);

//     const toggleAddUserForm = () => setShowAddUserForm((prev) => !prev);
//     const toggleUserManagement = () => setShowUserManagement((prev) => !prev);

//     return (
//         <div className="dashboard-controls">
//             <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h2>

//             {role === 'admin' && (
//                 <div className="admin-controls">
//                     <h3>Admin Controls</h3>
//                     {/* Toggle Add User Form */}
//                     <button onClick={toggleAddUserForm}>
//                         {showAddUserForm ? 'Close Add User Form' : 'Add User/Manager'}
//                     </button>
//                     {showAddUserForm && <AddUserForm onAddUser={() => setShowAddUserForm(false)} />}

//                     {/* Toggle User Management Section */}
//                     <button onClick={toggleUserManagement}>
//                         {showUserManagement ? 'Close User Management' : 'User Management'}
//                     </button>
//                     {showUserManagement && <UserManagement />}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CommonDashboardControls;

// src/components/CommonDashboardControls.js
import React, { useState } from 'react';
import AddUserForm from './AddUserForm';
import UserManagement from './UserManagement';

const CommonDashboardControls = ({ role }) => {
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [showUserManagement, setShowUserManagement] = useState(false);

    return (
        <div className="dashboard-controls">
            <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h2>

            {role === 'admin' && (
                <div className="admin-controls">
                    <h3>Admin Controls</h3>

                    {/* Toggle Add User Form */}
                    <button onClick={() => setShowAddUserForm(!showAddUserForm)}>
                        {showAddUserForm ? 'Close Add User Form' : 'Add User/Manager'}
                    </button>
                    {showAddUserForm && <AddUserForm onAddUser={() => setShowAddUserForm(false)} />}

                    {/* Toggle User Management Section */}
                    <button onClick={() => setShowUserManagement(!showUserManagement)}>
                        {showUserManagement ? 'Close User Management' : 'User Management'}
                    </button>

                    {/* Conditional Rendering for User Management Section */}
                    {showUserManagement && <UserManagement />}
                </div>
            
            
                
            )}
        </div>
    );
};

export default CommonDashboardControls;
