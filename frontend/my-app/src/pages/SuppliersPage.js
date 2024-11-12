import React, { useState } from 'react';
import SupplierDetails from '../components/SupplierDetails';

const SupplierPage = ({ match }) => {
    const { supplierName } = match.params;
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Items' : 'Show Items'}
            </button>
            {showDetails && <SupplierDetails supplierName={supplierName} />}
        </div>
    );
};

export default SupplierPage;
