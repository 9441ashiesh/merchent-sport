import React from 'react';
import { useAuth } from '../../../context/AuthContext';

const CoachingDashboard = () => {
  const { user } = useAuth();

  const metrics = [
    { label: 'Total Enrollments', value: '324', change: '+15%', positive: true },
    { label: 'Active Programs', value: '12', change: '+2', positive: true },
    { label: 'Attendance Rate', value: '88%', change: '+4%', positive: true },
    { label: 'Revenue This Month', value: '$18,500', change: '+22%', positive: true },
  ];

  const programsList = [
    { name: 'Basketball Training', level: 'Beginner', enrollments: 45, capacity: 50 },
    { name: 'Soccer Coaching', level: 'Intermediate', enrollments: 32, capacity: 40 },
    { name: 'Tennis Lessons', level: 'Advanced', enrollments: 18, capacity: 20 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Welcome, {user?.name}! 👋</h2>
        <p style={{ color: '#999' }}>Your coaching center performance overview</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {metrics.map((m, idx) => (
          <div key={idx} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderLeft: '4px solid #ffe66d' }}>
            <p style={{ color: '#999', fontSize: '12px', marginBottom: '8px' }}>{m.label}</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>{m.value}</p>
            <p style={{ color: m.positive ? '#28a745' : '#dc3545', fontSize: '12px' }}>
              {m.positive ? '↑' : '↓'} {m.change}
            </p>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '15px' }}>Active Programs</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#f8f9fa' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Program Name</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Level</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Enrollments</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #eee' }}>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {programsList.map((prog, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px' }}>{prog.name}</td>
                <td style={{ padding: '12px' }}>{prog.level}</td>
                <td style={{ padding: '12px', fontWeight: '600' }}>{prog.enrollments}</td>
                <td style={{ padding: '12px' }}>{prog.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoachingDashboard;
