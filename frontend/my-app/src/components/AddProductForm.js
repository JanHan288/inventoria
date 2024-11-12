// import React, { useState } from 'react';
// import { addProduct } from '../services/productService';

// const AddProductForm = () => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [price, setPrice] = useState('');
//     const [category, setCategory] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const newProduct = {
//                 name,
//                 description,
//                 price,
//                 category,
//                 quantity,
//             };
//             const result = await addProduct(newProduct);
//             setMessage(result.message);
//             setError('');
//         } catch (err) {
//             setMessage('');
//             setError(err.message);
//         }
//     };

//     return (
//         <div>
//             <h3>Add Product</h3>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder="Product Name" 
//                     value={name} 
//                     onChange={(e) => setName(e.target.value)} 
//                     required 
//                 />
//                 <textarea 
//                     placeholder="Product Description" 
//                     value={description} 
//                     onChange={(e) => setDescription(e.target.value)} 
//                     required 
//                 />
//                 <input 
//                     type="number" 
//                     placeholder="Price" 
//                     value={price} 
//                     onChange={(e) => setPrice(e.target.value)} 
//                     required 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Category" 
//                     value={category} 
//                     onChange={(e) => setCategory(e.target.value)} 
//                     required 
//                 />
//                 <input 
//                     type="number" 
//                     placeholder="Quantity" 
//                     value={quantity} 
//                     onChange={(e) => setQuantity(e.target.value)} 
//                     required 
//                 />
//                 <button type="submit">Add Product</button>
//             </form>
//             {message && <div>{message}</div>}
//             {error && <div>{error}</div>}
//         </div>
//     );
// };

// export default AddProductForm;


// // src/components/AddProductForm.js
// import React, { useState } from 'react';
// import InventoryService from '../services/InventoryService';

// const AddProductForm = ({ onAdd }) => {
//     const [product, setProduct] = useState({ product_name: '', quantity: 0, price: 0, supplier_id: '' });

//     const handleAdd = async (e) => {
//         e.preventDefault();
//         try {
//             await InventoryService.addProduct(product);
//             onAdd();
//             setProduct({ product_name: '', quantity: 0, price: 0, supplier_id: '' });
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleAdd}>
//             <input type="text" placeholder="Product Name" value={product.product_name} onChange={(e) => setProduct({ ...product, product_name: e.target.value })} required />
//             <input type="number" placeholder="Quantity" value={product.quantity} onChange={(e) => setProduct({ ...product, quantity: e.target.value })} required />
//             <input type="number" placeholder="Price" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} required />
//             <input type="number" placeholder="Supplier ID" value={product.supplier_id} onChange={(e) => setProduct({ ...product, supplier_id: e.target.value })} />
//             <button type="submit">Add Product</button>
//         </form>
//     );
// };

// export default AddProductForm;

// src/components/AddProductForm.js
import React, { useState } from 'react';
import InventoryService from '../services/InventoryService';

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [supplierName, setSupplierName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      product_name: productName,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
      supplier_name: supplierName,
    };

    try {
      const response = await InventoryService.addProduct(newProduct);
      onAddProduct(response.data); // Update the inventory list
      setProductName('');
      setQuantity('');
      setPrice('');
      setSupplierName('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Supplier Name:</label>
        <input
          type="text"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
