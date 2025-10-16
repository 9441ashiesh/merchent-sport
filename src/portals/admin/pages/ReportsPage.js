import React from 'react';

const ReportsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Platform Reports</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '10px' }}>Revenue Report</h3>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Monthly revenue by vendor type</p>
        <button style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Download</button>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '10px' }}>Vendor Performance</h3>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Top performers and compliance scores</p>
        <button style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Download</button>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '10px' }}>Dispute Report</h3>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Refunds, disputes, and chargebacks</p>
        <button style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Download</button>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '10px' }}>User Analytics</h3>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Customer demographics and trends</p>
        <button style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Download</button>
      </div>
    </div>
  </div>
);

export default ReportsPage;
