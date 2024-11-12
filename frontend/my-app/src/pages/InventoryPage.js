// // src/pages/InventoryPage.js
// import React, { useState } from 'react';
// import InventoryService from '../services/InventoryService';
// import AddProductForm from '../components/AddProductForm';
// import InventorySearch from '../components/InventorySearch';
// import InventoryTable from '../components/InventoryTable';

// const InventoryPage = () => {
//   const [inventoryItems, setInventoryItems] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle adding a product to the inventory
//   const handleAddProduct = (newProduct) => {
//     setInventoryItems([...inventoryItems, newProduct]);
//   };

//   // Handle search results update
//   const handleSearchResults = (results) => {
//     setSearchResults(results);
//   };

//   // Fetch inventory data when the button is clicked
//   const fetchInventory = async () => {
//     setIsLoading(true);
//     try {
//       const response = await InventoryService.getInventory();
//       setInventoryItems(response.data);
//     } catch (error) {
//       console.error('Error fetching inventory:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Inventory Management</h1>
      
//       {/* Add Product Form */}
//       <AddProductForm onAddProduct={handleAddProduct} />

//       {/* Inventory Search */}
//       <InventorySearch onSearchResults={handleSearchResults} />

//       {/* Fetch Inventory Button */}
//       <button onClick={fetchInventory} disabled={isLoading}>
//         {isLoading ? 'Loading...' : 'Fetch Inventory'}
//       </button>

//       {/* Inventory Table */}
//       <InventoryTable inventoryItems={searchResults.length ? searchResults : inventoryItems} />
//     </div>
//   );
// };

// export default InventoryPage;
