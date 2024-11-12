// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/manager/suppliers';

// const addSupplier = (supplierData) => axios.post(API_URL, supplierData);
// const getAllSuppliers = () => axios.get(API_URL);
// const getSupplierItems = (supplierName) => axios.get(`${API_URL}/${supplierName}/items`);

// export default {
//     addSupplier,
//     getAllSuppliers,
//     getSupplierItems,
// };

// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/manager/suppliers';

// const addSupplier = (supplierData) => axios.post(API_URL, supplierData);
// const getSupplierItems = (supplierName) =>
//     axios.get(`${API_URL}/${supplierName}/items`);
// const getAllSuppliers = () => axios.get(API_URL);
// const searchSuppliers = (name) =>
//     axios.get(API_URL, { params: { name } });

// const SupplierService = {addSupplier,
//     getSupplierItems,
//     getAllSuppliers,
//     searchSuppliers};
// export default SupplierService;

// src/services/SupplierService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/manager/suppliers';

// Get all suppliers
const getAllSuppliers = () => axios.get(API_URL);

// Add a new supplier
const addSupplier = (supplierData) => axios.post(API_URL, supplierData);

// Get supplier details and inventory items
const getSupplierItems = (supplierName) => axios.get(`${API_URL}/${supplierName}/items`);

// Search suppliers by name
const searchSupplier = (name) => axios.get(`${API_URL}/search`, { params: { name } });

const SupplierService = {
  getAllSuppliers,
  addSupplier,
  getSupplierItems,
  searchSupplier
};

export default SupplierService;
