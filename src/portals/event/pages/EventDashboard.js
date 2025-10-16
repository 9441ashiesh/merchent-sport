import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import StatCard from '../../../components/ui/StatCard';
import ChartCard from '../../../components/ui/ChartCard';
import './EventDashboard.css';

const EventDashboard = () => {
  const { user } = useAuth();
  const [timeRange, setTimeRange] = useState('month');

  const stats = {
    tickets: '1,247',
    revenue: '$62,350',
    events: '12',
    checkin: '92%',
    ticketsChange: '+25%',
    revenueChange: '+18.5%',
    eventsChange: '+2',
    checkinChange: '+5%',
  };

  const upcomingEvents = [
    { id: 1, name: 'Basketball Tournament 2024', date: 'Dec 20, 2024', tickets: 450, revenue: '$22,500' },
    { id: 2, name: 'Annual Marathon', date: 'Jan 15, 2025', tickets: 320, revenue: '$16,000' },
    { id: 3, name: 'Tennis Championship', date: 'Feb 10, 2025', tickets: 280, revenue: '$14,000' },
  ];

  return (
    <div className="modern-dashboard">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Event Dashboard</h1>
          <p className="dashboard-subtitle">Welcome back, {user?.name}! 👋 Your event analytics overview</p>
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
          icon="🎟️"
          title="Total Tickets Sold"
          value={stats.tickets}
          change={stats.ticketsChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="blue"
        />
        <StatCard
          icon="💰"
          title="Revenue"
          value={stats.revenue}
          change={stats.revenueChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="green"
        />
        <StatCard
          icon="📅"
          title="Upcoming Events"
          value={stats.events}
          change={stats.eventsChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="orange"
        />
        <StatCard
          icon="✓"
          title="Check-in Rate"
          value={stats.checkin}
          change={stats.checkinChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="purple"
        />
      </div>

      {/* Upcoming Events Table */}
      <ChartCard title="Upcoming Events" subtitle="Your scheduled events">
        <div className="modern-table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Tickets Sold</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {upcomingEvents.map((evt) => (
                <tr key={evt.id}>
                  <td className="table-id">{evt.name}</td>
                  <td className="table-time">{evt.date}</td>
                  <td className="table-amount">{evt.tickets}</td>
                  <td className="table-amount" style={{ color: '#10b981' }}>{evt.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </div>
  );
};

export default EventDashboard;
