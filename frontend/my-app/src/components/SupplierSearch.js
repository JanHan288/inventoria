// // src/components/SupplierSearch.js
// import React, { useState } from 'react';

// const SupplierSearch = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//         onSearch(e.target.value);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder="Search suppliers by name"
//             />
//         </div>
//     );
// };

// export default SupplierSearch;

// src/components/SupplierSearch.js
import React, { useState } from 'react';

const SupplierSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search by Supplier Name or ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SupplierSearch;
