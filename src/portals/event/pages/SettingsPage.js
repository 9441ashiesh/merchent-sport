import React from 'react';

const SettingsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Event Settings</h2>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Organization Name</label>
        <input type="text" placeholder="Your Organization" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email Address</label>
        <input type="email" placeholder="contact@example.com" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
      </div>
      <button style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>Save Changes</button>
    </div>
  </div>
);

export default SettingsPage;
