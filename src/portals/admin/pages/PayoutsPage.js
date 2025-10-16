import React from 'react';

const PayoutsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Payout Management</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px', marginBottom: '30px' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>PENDING PAYOUTS</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff6b6b' }}>$87,450</p>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>PROCESSED THIS WEEK</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}>$98,500</p>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>FAILED</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc3545' }}>2</p>
      </div>
    </div>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <button style={{ marginBottom: '15px', padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>Process Batch Payout</button>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
        <thead style={{ background: '#f8f9fa' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Vendor</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Amount</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>SportGear Store</td>
            <td style={{ padding: '12px' }}>$15,250</td>
            <td style={{ padding: '12px' }}><span style={{ background: '#fff3cd', padding: '4px 8px', borderRadius: '4px', color: '#856404', fontSize: '12px' }}>Pending</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PayoutsPage;
