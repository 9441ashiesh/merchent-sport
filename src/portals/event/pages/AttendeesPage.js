import React from 'react';

const AttendeesPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Attendees Management</h2>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ marginBottom: '20px' }}>
        <input type="text" placeholder="Search attendees..." style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#f8f9fa' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Email</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Ticket Type</th>
            <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>John Doe</td>
            <td style={{ padding: '12px' }}>john@example.com</td>
            <td style={{ padding: '12px' }}>General Admission</td>
            <td style={{ padding: '12px' }}><span style={{ background: '#d4edda', padding: '4px 8px', borderRadius: '4px', color: '#155724', fontSize: '12px' }}>Checked In</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AttendeesPage;
