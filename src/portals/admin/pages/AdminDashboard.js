import React from 'react';

const AdminDashboard = () => {
  const metrics = [
    { label: 'Active Vendors', value: '124', change: '+8 new', positive: true },
    { label: 'Total Revenue', value: '$482,500', change: '+18.5%', positive: true },
    { label: 'Pending Approvals', value: '12', change: '-3', positive: true },
    { label: 'Platform KPI', value: '94%', change: 'Health', positive: true },
  ];

  const recentActivity = [
    { type: 'Vendor Approved', message: 'SportGear Store approved for publishing', time: '2 hours ago' },
    { type: 'Refund Approved', message: '$250 refund approved for Order #ORD-5421', time: '4 hours ago' },
    { type: 'Payout Processed', message: 'Weekly payout batch completed: $98,450', time: '1 day ago' },
    { type: 'Fraud Alert', message: 'Suspicious activity detected in Event listings', time: '3 days ago' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Platform Overview 🌐</h2>
        <p style={{ color: '#999' }}>System health and vendor management</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {metrics.map((m, idx) => (
          <div key={idx} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderLeft: '4px solid #95a5a6' }}>
            <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>{m.label}</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>{m.value}</p>
            <p style={{ color: '#999', fontSize: '12px' }}>{m.change}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '15px' }}>Recent Activity</h3>
        <div>
          {recentActivity.map((activity, idx) => (
            <div key={idx} style={{ padding: '15px', borderBottom: idx < recentActivity.length - 1 ? '1px solid #eee' : 'none', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '5px' }}>{activity.type}</p>
                <p style={{ color: '#666', fontSize: '14px' }}>{activity.message}</p>
              </div>
              <p style={{ color: '#999', fontSize: '12px', whiteSpace: 'nowrap', marginLeft: '20px' }}>{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
