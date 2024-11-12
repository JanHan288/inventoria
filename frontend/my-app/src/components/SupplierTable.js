// // src/components/SupplierTable.js
// import React from 'react';

// const SupplierTable = ({ suppliers }) => (
//     <table>
//         <thead>
//             <tr>
//                 <th>Supplier ID</th>
//                 <th>Supplier Name</th>
//                 <th>Contact Info</th>
//                 <th>Actions</th>
//             </tr>
//         </thead>
//         <tbody>
//             {suppliers.map((supplier) => (
//                 <tr key={supplier.supplier_id}>
//                     <td>{supplier.supplier_id}</td>
//                     <td>{supplier.name}</td>
//                     <td>{supplier.contact_info}</td>
//                     <td>
//                         <button>View Inventory</button> {/* Click to view inventory */}
//                     </td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
// );

// export default SupplierTable;


// src/components/SupplierTable.js
import React from 'react';

const SupplierTable = ({ suppliers, onViewDetails }) => (
    <table>
        <thead>
            <tr>
                <th>Supplier Name</th>
                <th>Contact Info</th>
                <th>Created At</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {suppliers.map((supplier) => (
                <tr key={supplier.supplier_id}>
                    <td>{supplier.name}</td>
                    <td>{supplier.contact_info}</td>
                    <td>{new Date(supplier.created_at).toLocaleString()}</td>
                    <td>
                        <button onClick={() => onViewDetails(supplier.name)}>
                            View Details
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default SupplierTable;
