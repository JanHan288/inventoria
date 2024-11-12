// // src/components/AddSupplierForm.js
// import React, { useState } from 'react';
// import SupplierService from '../services/SupplierService';

// const AddSupplierForm = ({ onAddSupplier }) => {
//     const [supplier, setSupplier] = useState({ name: '', contact_info: '' });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await SupplierService.addSupplier(supplier);
//             onAddSupplier(); // Refresh supplier list after adding a new one
//             setSupplier({ name: '', contact_info: '' });
//         } catch (error) {
//             console.error('Error adding supplier:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Supplier Name"
//                 value={supplier.name}
//                 onChange={(e) => setSupplier({ ...supplier, name: e.target.value })}
//                 required
//             />
//             <input
//                 type="text"
//                 placeholder="Contact Info"
//                 value={supplier.contact_info}
//                 onChange={(e) => setSupplier({ ...supplier, contact_info: e.target.value })}
//             />
//             <button type="submit">Add Supplier</button>
//         </form>
//     );
// };

// export default AddSupplierForm;


// src/components/AddSupplierForm.js
import React, { useState } from 'react';
import SupplierService from '../services/SupplierService';

const AddSupplierForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await SupplierService.addSupplier({ name, contact_info: contactInfo });
            onAdd(); // Refresh the list of suppliers
        } catch (error) {
            console.error('Error adding supplier:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Supplier Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Contact Info"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
            />
            <button type="submit">Add Supplier</button>
        </form>
    );
};

export default AddSupplierForm;
