// // src/components/InventoryTable.js
// import React from 'react';

// const InventoryTable = ({ inventory }) => (
//     <table>
//         <thead>
//             <tr>
//                 <th>Product Name</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Supplier</th>
//             </tr>
//         </thead>
//         <tbody>
//             {inventory.map((item) => (
//                 <tr key={item.item_id}>
//                     <td>{item.product_name}</td>
//                     <td>{item.quantity}</td>
//                     <td>{item.price}</td>
//                     <td>{item.Supplier?.name || 'No Supplier'}</td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
// );

// export default InventoryTable;


// // src/components/InventoryTable.js
// import React from 'react';

// const InventoryTable = ({ inventoryItems }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Product Name</th>
//           <th>Quantity</th>
//           <th>Price</th>
//           <th>Supplier Name</th>
//         </tr>
//       </thead>
//       <tbody>
//         {inventoryItems.length === 0 ? (
//           <tr>
//             <td colSpan="4">No products found</td>
//           </tr>
//         ) : (
//           inventoryItems.map((item) => (
//             <tr key={item.item_id}>
//               <td>{item.product_name}</td>
//               <td>{item.quantity}</td>
//               <td>{item.price}</td>
//               <td>{item.supplier.name}</td>
//             </tr>
//           ))
//         )}
//       </tbody>
//     </table>
//   );
// };

// export default InventoryTable;

// src/components/InventoryTable.js
import React from 'react';

const InventoryTable = ({ inventoryItems }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Supplier Name</th>
        </tr>
      </thead>
      <tbody>
        {inventoryItems.length === 0 ? (
          <tr>
            <td colSpan="4">No products found</td>
          </tr>
        ) : (
          inventoryItems.map((item) => (
            <tr key={item.item_id}>
              <td>{item.product_name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              {/* Use optional chaining to safely access supplier's name */}
              <td>{item.supplier?.name || 'No supplier'}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default InventoryTable;
