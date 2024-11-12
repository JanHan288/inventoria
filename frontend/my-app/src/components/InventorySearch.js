// // src/components/InventorySearch.js
// import React, { useState } from 'react';

// const InventorySearch = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (e) => {
//         e.preventDefault();
//         onSearch(searchTerm);
//     };

//     return (
//         <form onSubmit={handleSearch}>
//             <input type="text" placeholder="Search by Product Name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//             <button type="submit">Search</button>
//         </form>
//     );
// };

// export default InventorySearch;

// src/components/InventorySearch.js
import React, { useState } from 'react';
import InventoryService from '../services/InventoryService';

const InventorySearch = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await InventoryService.searchProduct(searchTerm);
      onSearchResults(response.data); // Pass search results to parent
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default InventorySearch;
