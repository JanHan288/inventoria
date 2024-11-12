// // src/components/UserForm.js
// import React, { useState } from 'react';

// const UserForm = ({ onUserAdded }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('user'); // Default role
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null); // Reset previous error

//         const userData = { name, email, password, role };

//         try {
//             const response = await fetch('/api/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${localStorage.getItem('token')}`, // Add token for authorization
//                 },
//                 body: JSON.stringify(userData),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json(); // Get error response
//                 throw new Error(errorData.message || 'Failed to add user');
//             }

//             const newUser = await response.json();
//             onUserAdded(newUser); // Notify parent component
//             // Clear form
//             setName('');
//             setEmail('');
//             setPassword('');
//             setRole('user');
//         } catch (error) {
//             setError(error.message); // Set error message to state
//             console.error('Error adding user:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Add User</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <select value={role} onChange={(e) => setRole(e.target.value)}>
//                 <option value="user">User</option>
//                 <option value="manager">Manager</option>
//             </select>
//             <button type="submit">Add User</button>
//         </form>
//     );
// };

// export default UserForm;


// // src/components/AddUserForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const AddUserForm = ({ onClose }) => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('user'); // Default to 'user' role

//     const handleAddUser = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/admin/add-user', {
//                 username,
//                 email,
//                 password,
//                 role,
//             });
//             alert('User added successfully!');
//             onClose(); // Close the form and return to Admin dashboard
//         } catch (error) {
//             console.error('Error adding user:', error);
//             alert('Failed to add user. Please try again.');
//         }
//     };

//     return (
//         <div className="add-user-form">
//             <h3>Add New User/Manager</h3>
//             <form onSubmit={handleAddUser}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <select value={role} onChange={(e) => setRole(e.target.value)}>
//                     <option value="user">User</option>
//                     <option value="manager">Manager</option>
//                 </select>
//                 <button type="submit">Add User</button>
//             </form>
//             <button onClick={onClose}>Cancel</button>
//         </div>
//     );
// };

// export default AddUserForm;

// src/components/AddUserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = ({ onAddUser }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/admin/add-user', {
                username,
                email,
                password,
                role,
            });
            onAddUser(response.data); // Pass the added user back to parent component
            setUsername('');
            setEmail('');
            setPassword('');
            setRole('user');
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Failed to add user. Please try again.');
        }
    };

    return (
        <div className="add-user-form">
            <h3>Add New User/Manager</h3>
            <form onSubmit={handleAddUser}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                </select>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUserForm;
