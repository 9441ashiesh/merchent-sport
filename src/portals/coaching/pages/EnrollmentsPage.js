import React from 'react';

const EnrollmentsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Enrollment Management</h2>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#f8f9fa' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Learner Name</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Program</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Enrollment Date</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Alex Johnson</td>
            <td style={{ padding: '12px' }}>Basketball Training</td>
            <td style={{ padding: '12px' }}>Jan 10, 2025</td>
            <td style={{ padding: '12px' }}><span style={{ background: '#d4edda', padding: '4px 8px', borderRadius: '4px', color: '#155724', fontSize: '12px' }}>Enrolled</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default EnrollmentsPage;
