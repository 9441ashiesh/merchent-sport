import React from 'react';

const InventoryPage = () => (
  <div className="page-content">
    <h2>Inventory Management</h2>
    <p>Manage stock levels, warehouse locations, and inventory alerts.</p>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
      <h3>Stock Summary</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #eee' }}>
            <th style={{ textAlign: 'left', padding: '10px' }}>SKU</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Product</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Warehouse A</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Warehouse B</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Total</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px' }}>BALL-001</td>
            <td style={{ padding: '10px' }}>Basketball</td>
            <td style={{ padding: '10px' }}>75</td>
            <td style={{ padding: '10px' }}>75</td>
            <td style={{ padding: '10px', fontWeight: 'bold' }}>150</td>
            <td style={{ padding: '10px' }}><span style={{ background: '#d4edda', padding: '4px 8px', borderRadius: '4px', color: '#155724' }}>In Stock</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default InventoryPage;
