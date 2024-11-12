// src/components/SupplierManagement.js
import React, { useState, useEffect } from 'react';
import SupplierService from '../services/SupplierService';
import SupplierSearch from './SupplierSearch';
import SupplierTable from './SupplierTable';
import AddSupplierForm from './AddSupplierForm';

const SupplierManagement = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedSupplierDetails, setSelectedSupplierDetails] = useState(null);

    // Fetch all suppliers
    const fetchSuppliers = async () => {
        try {
            const response = await SupplierService.getAllSuppliers();
            setSuppliers(response.data);
        } catch (error) {
            console.error('Error fetching suppliers:', error);
        }
    };

    // Handle supplier search
    const handleSearch = async (searchTerm) => {
        try {
            const response = await SupplierService.searchSupplier(searchTerm);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching suppliers:', error);
        }
    };

    // Handle supplier detail view
    const handleViewDetails = async (supplierName) => {
        try {
            const response = await SupplierService.getSupplierItems(supplierName);
            setSelectedSupplierDetails(response.data);
        } catch (error) {
            console.error('Error fetching supplier details:', error);
        }
    };

    useEffect(() => {
        fetchSuppliers();
    }, []);

    return (
        <div>
            <h3>Supplier Management</h3>
            
            <AddSupplierForm onAdd={fetchSuppliers} />
            
            <SupplierSearch onSearch={handleSearch} />
            
            <SupplierTable suppliers={searchResults.length ? searchResults : suppliers} onViewDetails={handleViewDetails} />

            {selectedSupplierDetails && (
                <div>
                    <h4>Supplier Details</h4>
                    <p>Name: {selectedSupplierDetails.name}</p>
                    <p>Contact Info: {selectedSupplierDetails.contact_info}</p>
                    <h5>Inventory Provided:</h5>
                    <ul>
                        {selectedSupplierDetails.Inventory?.map((item) => (
                            <li key={item.item_id}>
                                {item.product_name} - {item.quantity} units - ${item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SupplierManagement;



