import React, { useState } from 'react';
import './ProductsPage.css';

const ProductsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const products = [
    { id: 1, name: 'Basketball', sku: 'BALL-001', price: '$25.99', stock: 150, status: 'Published' },
    { id: 2, name: 'Soccer Ball', sku: 'BALL-002', price: '$19.99', stock: 200, status: 'Published' },
    { id: 3, name: 'Tennis Racket', sku: 'RACK-001', price: '$89.99', stock: 45, status: 'Draft' },
    { id: 4, name: 'Yoga Mat', sku: 'MAT-001', price: '$15.99', stock: 0, status: 'Published' },
  ];

  return (
    <div className="products-page">
      <div className="page-header">
        <h2>Product Management</h2>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Close' : '+ Add New Product'}
        </button>
      </div>

      {showForm && (
        <div className="product-form-container">
          <h3>Create New Product</h3>
          <form className="product-form">
            <div className="form-row">
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="e.g., Basketball" />
              </div>
              <div className="form-group">
                <label>SKU</label>
                <input type="text" placeholder="e.g., BALL-001" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Price ($)</label>
                <input type="number" placeholder="0.00" />
              </div>
              <div className="form-group">
                <label>Stock Quantity</label>
                <input type="number" placeholder="0" />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea placeholder="Product description"></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <select>
                  <option>Sports Equipment</option>
                  <option>Apparel</option>
                  <option>Accessories</option>
                </select>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select>
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-success">Save Product</button>
          </form>
        </div>
      )}

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.price}</td>
                <td>
                  <span className={`stock-badge ${product.stock === 0 ? 'out-of-stock' : ''}`}>
                    {product.stock}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${product.status.toLowerCase()}`}>
                    {product.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn edit">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
