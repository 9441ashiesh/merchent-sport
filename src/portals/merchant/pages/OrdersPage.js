import React from 'react';

const OrdersPage = () => (
  <div className="page-content">
    <h2>Order Management</h2>
    <p>View, process, and fulfill customer orders.</p>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
      <h3>Active Orders</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #eee' }}>
            <th style={{ textAlign: 'left', padding: '10px' }}>Order ID</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Customer</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Items</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Total</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px' }}>#ORD-001</td>
            <td style={{ padding: '10px' }}>John Doe</td>
            <td style={{ padding: '10px' }}>2x Basketball</td>
            <td style={{ padding: '10px' }}>$51.98</td>
            <td style={{ padding: '10px' }}><span style={{ background: '#fff3cd', padding: '4px 8px', borderRadius: '4px', color: '#856404' }}>Processing</span></td>
            <td style={{ padding: '10px' }}><button style={{ padding: '6px 12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Process</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OrdersPage;
