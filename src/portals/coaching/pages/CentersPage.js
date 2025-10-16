import React from 'react';

const CentersPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Coaching Centers</h2>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#f8f9fa' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Center Name</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Location</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Capacity</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Downtown Sports Complex</td>
            <td style={{ padding: '12px' }}>123 Main St</td>
            <td style={{ padding: '12px' }}>150</td>
            <td style={{ padding: '12px' }}><span style={{ background: '#d4edda', padding: '4px 8px', borderRadius: '4px', color: '#155724', fontSize: '12px' }}>Active</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default CentersPage;
