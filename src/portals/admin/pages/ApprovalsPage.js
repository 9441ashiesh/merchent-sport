import React, { useState } from 'react';

const ApprovalsPage = () => {

  const approvals = [
    { id: 1, type: 'Product', vendor: 'SportGear Store', title: 'Nike Basketball Shoes', status: 'Pending' },
    { id: 2, type: 'Event', vendor: 'Marathon Events Co', title: 'City Marathon 2025', status: 'Pending' },
    { id: 3, type: 'Program', vendor: 'Elite Coaching', title: 'Advanced Tennis Program', status: 'Pending' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Approval Queue</h2>
      <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden', marginTop: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#f8f9fa' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Vendor</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Item</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvals.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px' }}><span style={{ background: '#cfe2ff', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>{item.type}</span></td>
                <td style={{ padding: '12px' }}>{item.vendor}</td>
                <td style={{ padding: '12px' }}>{item.title}</td>
                <td style={{ padding: '12px' }}>
                  <button style={{ marginRight: '5px', padding: '6px 12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Approve</button>
                  <button style={{ padding: '6px 12px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovalsPage;
