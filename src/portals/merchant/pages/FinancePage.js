import React from 'react';

const FinancePage = () => (
  <div className="page-content">
    <h2>Finance & Payouts</h2>
    <p>View earnings, fees, and manage payouts.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>TOTAL EARNINGS</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>$45,280</p>
        <p style={{ color: '#28a745', fontSize: '12px' }}>↑ +12.5% this month</p>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>PLATFORM FEES</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>$2,264</p>
        <p style={{ color: '#999', fontSize: '12px' }}>5% commission</p>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>NET EARNINGS</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>$43,016</p>
        <p style={{ color: '#999', fontSize: '12px' }}>Available for payout</p>
      </div>
    </div>
  </div>
);

export default FinancePage;
