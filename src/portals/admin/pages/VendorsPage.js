import React from 'react';

const VendorsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Vendor Management</h2>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#f8f9fa' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Vendor Name</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Type</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Join Date</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>SportGear Store</td>
            <td style={{ padding: '12px' }}>Merchant</td>
            <td style={{ padding: '12px' }}>Jan 5, 2025</td>
            <td style={{ padding: '12px' }}><span style={{ background: '#d4edda', padding: '4px 8px', borderRadius: '4px', color: '#155724', fontSize: '12px' }}>Active</span></td>
            <td style={{ padding: '12px' }}><button style={{ padding: '6px 12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default VendorsPage;
