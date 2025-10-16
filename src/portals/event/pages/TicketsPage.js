import React from 'react';

const TicketsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Ticket Management</h2>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>Ticket Types</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
        <thead style={{ background: '#f8f9fa' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Type</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Price</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Quantity</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Sold</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>General Admission</td>
            <td style={{ padding: '12px' }}>$50</td>
            <td style={{ padding: '12px' }}>300</td>
            <td style={{ padding: '12px' }}>285</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>VIP</td>
            <td style={{ padding: '12px' }}>$100</td>
            <td style={{ padding: '12px' }}>100</td>
            <td style={{ padding: '12px' }}>95</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TicketsPage;
