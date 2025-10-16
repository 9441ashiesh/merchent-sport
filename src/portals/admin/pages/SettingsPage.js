import React from 'react';

const SettingsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Platform Settings</h2>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ marginBottom: '20px' }}>Commission & Fees</h3>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Merchant Commission (%)</label>
        <input type="number" placeholder="5" step="0.1" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Event Commission (%)</label>
        <input type="number" placeholder="8" step="0.1" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Coaching Commission (%)</label>
        <input type="number" placeholder="10" step="0.1" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
      </div>
      <button style={{ padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>Save Settings</button>
    </div>
  </div>
);

export default SettingsPage;
