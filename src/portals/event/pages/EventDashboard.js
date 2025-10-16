import React from 'react';
import { useAuth } from '../../../context/AuthContext';

const EventDashboard = () => {
  const { user } = useAuth();

  const metrics = [
    { label: 'Total Tickets Sold', value: '1,247', change: '+25%', positive: true },
    { label: 'Revenue', value: '$62,350', change: '+18.5%', positive: true },
    { label: 'Upcoming Events', value: '12', change: '+2', positive: true },
    { label: 'Check-in Rate', value: '92%', change: '+5%', positive: true },
  ];

  const upcomingEvents = [
    { id: 1, name: 'Basketball Tournament 2024', date: 'Dec 20, 2024', tickets: 450, revenue: '$22,500' },
    { id: 2, name: 'Annual Marathon', date: 'Jan 15, 2025', tickets: 320, revenue: '$16,000' },
    { id: 3, name: 'Tennis Championship', date: 'Feb 10, 2025', tickets: 280, revenue: '$14,000' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Welcome, {user?.name}! 👋</h2>
        <p style={{ color: '#999' }}>Your event analytics and performance overview</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {metrics.map((m, idx) => (
          <div key={idx} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderLeft: '4px solid #4ecdc4' }}>
            <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>{m.label}</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>{m.value}</p>
            <p style={{ color: m.positive ? '#28a745' : '#dc3545', fontSize: '12px' }}>
              {m.positive ? '↑' : '↓'} {m.change}
            </p>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '15px' }}>Upcoming Events</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#f8f9fa' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Event Name</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Date</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Tickets Sold</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {upcomingEvents.map((evt) => (
              <tr key={evt.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px' }}>{evt.name}</td>
                <td style={{ padding: '12px' }}>{evt.date}</td>
                <td style={{ padding: '12px', fontWeight: '600' }}>{evt.tickets}</td>
                <td style={{ padding: '12px', color: '#28a745', fontWeight: '600' }}>{evt.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventDashboard;
