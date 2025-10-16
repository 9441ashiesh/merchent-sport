import React, { useState } from 'react';
import StatCard from '../../../components/ui/StatCard';
import ChartCard from '../../../components/ui/ChartCard';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('month');

  const stats = {
    vendors: '124',
    revenue: '$482,500',
    approvals: '12',
    kpi: '94%',
    vendorsChange: '+8',
    revenueChange: '+18.5%',
    approvalsChange: '-3',
    kpiChange: '+2%',
  };

  const recentActivity = [
    { type: 'Vendor Approved', message: 'SportGear Store approved for publishing', time: '2 hours ago' },
    { type: 'Refund Approved', message: '$250 refund approved for Order #ORD-5421', time: '4 hours ago' },
    { type: 'Payout Processed', message: 'Weekly payout batch completed: $98,450', time: '1 day ago' },
    { type: 'Fraud Alert', message: 'Suspicious activity detected in Event listings', time: '3 days ago' },
  ];

  return (
    <div className="modern-dashboard">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Platform Overview</h1>
          <p className="dashboard-subtitle">System health and vendor management 🌐</p>
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
          icon="🏪"
          title="Active Vendors"
          value={stats.vendors}
          change={stats.vendorsChange}
          changeType="positive"
          trend="new vendors"
          color="blue"
        />
        <StatCard
          icon="💰"
          title="Total Revenue"
          value={stats.revenue}
          change={stats.revenueChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="green"
        />
        <StatCard
          icon="✓"
          title="Pending Approvals"
          value={stats.approvals}
          change={stats.approvalsChange}
          changeType="positive"
          trend="less than last week"
          color="orange"
        />
        <StatCard
          icon="📊"
          title="Platform Health"
          value={stats.kpi}
          change={stats.kpiChange}
          changeType="positive"
          trend="system uptime"
          color="purple"
        />
      </div>

      {/* Recent Activity Table */}
      <ChartCard title="Recent Activity" subtitle="Platform events and actions">
        <div className="modern-table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Activity Type</th>
                <th>Description</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity, idx) => (
                <tr key={idx}>
                  <td>
                    <span className="modern-badge badge-delivered">{activity.type}</span>
                  </td>
                  <td className="table-id">{activity.message}</td>
                  <td className="table-time">{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </div>
  );
};

export default AdminDashboard;
