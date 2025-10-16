import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import StatCard from '../../../components/ui/StatCard';
import ChartCard from '../../../components/ui/ChartCard';
import './CoachingDashboard.css';

const CoachingDashboard = () => {
  const { user } = useAuth();
  const [timeRange, setTimeRange] = useState('month');

  // Stats data
  const stats = {
    enrollments: '324',
    programs: '12',
    attendance: '88%',
    revenue: '$18,500',
    enrollmentsChange: '+15%',
    programsChange: '+2',
    attendanceChange: '+4%',
    revenueChange: '+22%',
  };

  const programsList = [
    { name: 'Basketball Training', level: 'Beginner', enrollments: 45, capacity: 50 },
    { name: 'Soccer Coaching', level: 'Intermediate', enrollments: 32, capacity: 40 },
    { name: 'Tennis Lessons', level: 'Advanced', enrollments: 18, capacity: 20 },
  ];

  return (
    <div className="modern-dashboard">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Coaching Dashboard</h1>
          <p className="dashboard-subtitle">Welcome back, {user?.name}! 👋 Your coaching center overview</p>
        </div>
        <div className="dashboard-actions">
          <div className="button-group">
            <button className={`filter-btn ${timeRange === 'week' ? 'active' : ''}`} onClick={() => setTimeRange('week')}>Week</button>
            <button className={`filter-btn ${timeRange === 'month' ? 'active' : ''}`} onClick={() => setTimeRange('month')}>Month</button>
            <button className={`filter-btn ${timeRange === 'year' ? 'active' : ''}`} onClick={() => setTimeRange('year')}>Year</button>
          </div>
          <button className="icon-btn">📊</button>
          <button className="icon-btn">🔔</button>
        </div>
      </div>

      {/* Stats Grid with Pastel Colors */}
      <div className="stats-grid">
        <StatCard
          icon="📚"
          title="Total Enrollments"
          value={stats.enrollments}
          change={stats.enrollmentsChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="blue"
        />
        <StatCard
          icon="🎓"
          title="Active Programs"
          value={stats.programs}
          change={stats.programsChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="purple"
        />
        <StatCard
          icon="✓"
          title="Attendance Rate"
          value={stats.attendance}
          change={stats.attendanceChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="green"
        />
        <StatCard
          icon="💰"
          title="Revenue This Month"
          value={stats.revenue}
          change={stats.revenueChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="orange"
        />
      </div>

      {/* Active Programs Table */}
      <ChartCard title="Active Programs" subtitle="Your coaching programs">
        <div className="modern-table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Program Name</th>
                <th>Level</th>
                <th>Enrollments</th>
                <th>Capacity</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {programsList.map((prog, idx) => (
                <tr key={idx}>
                  <td className="table-id">{prog.name}</td>
                  <td>
                    <span className="modern-badge badge-delivered">{prog.level}</span>
                  </td>
                  <td className="table-amount">{prog.enrollments}</td>
                  <td>{prog.capacity}</td>
                  <td>
                    <div style={{ width: '100px', background: '#f0f0f0', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
                      <div style={{ width: `${(prog.enrollments / prog.capacity) * 100}%`, background: '#10b981', height: '100%', borderRadius: '4px' }}></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </div>
  );
};

export default CoachingDashboard;
