import React from 'react';

const FinancePage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Event Finance</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>TOTAL REVENUE</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>$62,350</p>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>PLATFORM FEES</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>$3,118</p>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>NET PAYOUT</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}>$59,232</p>
      </div>
    </div>
  </div>
);

export default FinancePage;
