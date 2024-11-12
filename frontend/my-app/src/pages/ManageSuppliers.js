import React, { useState, useEffect } from 'react';
import SupplierService from '../services/SupplierService';
import SupplierList from '../components/SupplierList';
import AddSupplierForm from '../components/AddSupplierForm';
import SupplierSearch from '../components/SupplierSearch';

const ManageSuppliers = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const data = await SupplierService.getAllSuppliers();
                setSuppliers(data);
            } catch (error) {
                console.error('Error fetching suppliers:', error);
            }
        };

        fetchSuppliers();
    }, []);

    const handleSearch = async (name) => {
        try {
            const data = await SupplierService.searchSuppliers(name);
            setSearchResults(data);
        } catch (error) {
            console.error('Error searching suppliers:', error);
        }
    };

    return (
        <div>
            <h3>Manage Suppliers</h3>

            <AddSupplierForm onAdd={() => setSuppliers([...suppliers, supplier])} />
            <SupplierSearch onSearch={handleSearch} />
            <SupplierList
                suppliers={searchResults.length > 0 ? searchResults : suppliers}
                onClick={(name) => console.log('View items for', name)}
            />
        </div>
    );
};

export default ManageSuppliers;
