import React from 'react';

const ProgramsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Programs Management</h2>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <button style={{ marginBottom: '15px', padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>+ Add Program</button>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#f8f9fa' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Program</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Trainer</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Schedule</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Price/Session</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Basketball Training</td>
            <td style={{ padding: '12px' }}>Coach Mike</td>
            <td style={{ padding: '12px' }}>M, W, F 4-5PM</td>
            <td style={{ padding: '12px' }}>$20</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ProgramsPage;
