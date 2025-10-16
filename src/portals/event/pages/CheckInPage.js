import React, { useState } from 'react';

const CheckInPage = () => {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = () => {
    setScanResult({ name: 'John Doe', ticketId: '#TKT-123456', status: 'Valid' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Check-In (Mobile-Friendly)</h2>
      <div style={{ background: 'white', padding: '30px', borderRadius: '8px', textAlign: 'center', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ background: '#f0f0f0', border: '3px dashed #ddd', borderRadius: '8px', padding: '60px 20px', marginBottom: '20px' }}>
          <p style={{ fontSize: '18px', color: '#999' }}>📱 QR Code Scanner Area</p>
          <p style={{ fontSize: '12px', color: '#999' }}>(Point camera at QR code)</p>
        </div>

        <button onClick={handleScan} style={{ padding: '15px 30px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', fontWeight: '600', marginBottom: '20px' }}>
          Simulate Scan
        </button>

        {scanResult && (
          <div style={{ background: '#d4edda', padding: '20px', borderRadius: '8px', color: '#155724', marginTop: '20px' }}>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>✓ Attendee: <strong>{scanResult.name}</strong></p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>Ticket: {scanResult.ticketId}</p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>Status: {scanResult.status}</p>
            <button style={{ marginTop: '15px', padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>
              Confirm Check-In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckInPage;
