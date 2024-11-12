import React, { useEffect, useState } from 'react';
import SupplierService from '../services/SupplierService';
import InventoryTable from './InventoryTable';

const SupplierDetails = ({ supplierName }) => {
    const [supplier, setSupplier] = useState(null);

    useEffect(() => {
        const fetchSupplier = async () => {
            try {
                const data = await SupplierService.getSupplierItems(supplierName);
                setSupplier(data);
            } catch (error) {
                console.error('Error fetching supplier details:', error);
            }
        };

        fetchSupplier();
    }, [supplierName]);

    if (!supplier) return <div>Loading supplier details...</div>;

    return (
        <div>
            <h3>{supplier.name}</h3>
            <p>Contact Info: {supplier.contact_info}</p>
            <InventoryTable inventory={supplier.Inventory} />
        </div>
    );
};

export default SupplierDetails;
