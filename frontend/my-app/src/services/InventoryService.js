// import axios from 'axios';

// // Update the API_URL to match the adjusted path in app.js
// const API_URL = 'http://localhost:5000/api/inventory';

// const InventoryService = {
//     getInventory: () => axios.get(API_URL),
//     updateStock: (itemId, quantity) => axios.put(`${API_URL}/update`, { itemId, quantity }),
//     addProduct: (productData) => axios.post(API_URL, productData),
// };

// export default InventoryService;

// // src/services/InventoryService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/manager/inventory';

// const getInventory = () => axios.get(API_URL);
// const addProduct = (productData) => axios.post(API_URL, productData);
// const updateItem = (itemId, productData) => axios.put(`${API_URL}/${itemId}`, productData);
// const updateStock = (itemId, quantity) => axios.put(`${API_URL}/update-stock`, { itemId, quantity });
// const searchProduct = (name) => axios.get(`${API_URL}/search`, { params: { name } });

// const InventoryService = {getInventory,
//     addProduct,
//     updateItem,
//     updateStock,
//     searchProduct}
// export default InventoryService;

// // src/services/InventoryService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/manager/inventory';

// // Fetch all inventory items
// const getInventory = () => axios.get(API_URL);

// // Add a new product to the inventory using supplier name
// const addProduct = (productData) => axios.post(API_URL, productData);

// // Update an existing inventory item
// const updateItem = (itemId, productData) => axios.put(`${API_URL}/${itemId}`, productData);

// // Update stock for an inventory item incrementally
// const updateStock = (itemId, quantity) => axios.put(`${API_URL}/update-stock`, { itemId, quantity });

// // Search products by name with supplier details
// const searchProduct = (name) => axios.get(`${API_URL}/search`, { params: { name } });

// const InventoryService = {
//     getInventory,
//     addProduct,
//     updateItem,
//     updateStock,
//     searchProduct
// };

// export default InventoryService;


// src/services/InventoryService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/manager/inventory';

const getInventory = () => axios.get(API_URL);
const addProduct = (productData) => axios.post(API_URL, productData);
const updateItem = (itemId, productData) => axios.put(`${API_URL}/${itemId}`, productData);
const updateStock = (itemId, quantity) => axios.put(`${API_URL}/update-stock`, { itemId, quantity });
const searchProduct = (name) => axios.get(`${API_URL}/search`, { params: { name } });

const InventoryService = { getInventory, addProduct, updateItem, updateStock, searchProduct };
export default InventoryService;
