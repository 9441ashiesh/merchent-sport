import React from 'react';

const ModerationPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Content Moderation</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px', marginBottom: '30px' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>FLAGGED CONTENT</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff6b6b' }}>8</p>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>PENDING REVIEW</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffe66d' }}>3</p>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>RESOLVED</p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}>125</p>
      </div>
    </div>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ marginBottom: '15px' }}>Recent Flags</h3>
      <div style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
        <p style={{ fontWeight: '600', marginBottom: '5px' }}>Inappropriate product image</p>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>Product: "Running Shoes" - SportGear Store</p>
        <button style={{ padding: '6px 12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Review</button>
      </div>
    </div>
  </div>
);

export default ModerationPage;
