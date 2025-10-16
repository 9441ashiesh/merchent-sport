import React, { useState } from 'react';
import StatCard from '../../../components/ui/StatCard';
import ChartCard from '../../../components/ui/ChartCard';
import SimpleLineChart from '../../../components/ui/SimpleLineChart';
import BarChart from '../../../components/ui/BarChart';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [activeTab, setActiveTab] = useState('overview'); // overview, vendors, events, coaching
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

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

  // All Vendors Data
  const allVendors = [
    { id: 'V-001', name: 'SportGear Pro', type: 'Merchant', email: 'contact@sportgear.com', phone: '9876543210', status: 'Active', revenue: '$45,200', joined: '2024-01-15', products: 45, orders: 234 },
    { id: 'V-002', name: 'FitZone Events', type: 'Event Organizer', email: 'info@fitzone.com', phone: '9876543211', status: 'Active', revenue: '$78,900', joined: '2024-02-20', events: 12, tickets: 1456 },
    { id: 'V-003', name: 'Elite Coaching Academy', type: 'Coaching Center', email: 'admin@elitecoaching.com', phone: '9876543212', status: 'Active', revenue: '$56,700', joined: '2024-03-10', programs: 8, students: 156 },
    { id: 'V-004', name: 'Sports World Store', type: 'Merchant', email: 'hello@sportsworld.com', phone: '9876543214', status: 'Pending', revenue: '$0', joined: '2024-10-15', products: 12, orders: 0 },
    { id: 'V-005', name: 'Marathon Masters', type: 'Event Organizer', email: 'events@marathon.com', phone: '9876543215', status: 'Pending', revenue: '$0', joined: '2024-10-16', events: 2, tickets: 0 },
    { id: 'V-006', name: 'Pro Training Center', type: 'Coaching Center', email: 'info@protraining.com', phone: '9876543216', status: 'Active', revenue: '$34,500', joined: '2024-04-05', programs: 5, students: 89 },
    { id: 'V-007', name: 'Athletic Gear Hub', type: 'Merchant', email: 'support@athletichub.com', phone: '9876543217', status: 'Active', revenue: '$67,800', joined: '2024-01-28', products: 78, orders: 456 },
    { id: 'V-008', name: 'Championship Events', type: 'Event Organizer', email: 'contact@championship.com', phone: '9876543218', status: 'Suspended', revenue: '$12,300', joined: '2024-05-12', events: 5, tickets: 234 },
    { id: 'V-009', name: 'Youth Sports Academy', type: 'Coaching Center', email: 'admin@youthsports.com', phone: '9876543219', status: 'Pending', revenue: '$0', joined: '2024-10-17', programs: 3, students: 0 },
    { id: 'V-010', name: 'Game On Sports', type: 'Merchant', email: 'hello@gameon.com', phone: '9876543220', status: 'Active', revenue: '$89,400', joined: '2024-02-14', products: 92, orders: 678 },
  ];

  // Pending Event Approvals
  const pendingEvents = [
    { id: 'E-101', name: 'City Marathon 2024', organizer: 'Marathon Masters', type: 'Running', date: '2024-11-20', capacity: 500, ticketPrice: '$50', status: 'Pending', submittedOn: '2024-10-16' },
    { id: 'E-102', name: 'Basketball Championship', organizer: 'FitZone Events', type: 'Basketball', date: '2024-12-05', capacity: 200, ticketPrice: '$30', status: 'Pending', submittedOn: '2024-10-15' },
    { id: 'E-103', name: 'Yoga Retreat Weekend', organizer: 'Championship Events', type: 'Yoga', date: '2024-11-28', capacity: 50, ticketPrice: '$120', status: 'Pending', submittedOn: '2024-10-14' },
  ];

  // Pending Coaching Programs
  const pendingPrograms = [
    { id: 'C-201', name: 'Advanced Tennis Training', center: 'Elite Coaching Academy', duration: '3 months', fee: '$450', capacity: 20, ageGroup: '12-18', status: 'Pending', submittedOn: '2024-10-16' },
    { id: 'C-202', name: 'Youth Football Camp', center: 'Youth Sports Academy', duration: '6 weeks', fee: '$350', capacity: 30, ageGroup: '8-14', status: 'Pending', submittedOn: '2024-10-17' },
    { id: 'C-203', name: 'Swimming Pro Program', center: 'Pro Training Center', duration: '4 months', fee: '$500', capacity: 15, ageGroup: '10-16', status: 'Pending', submittedOn: '2024-10-15' },
  ];

  // Revenue trend data
  const revenueData = [
    { label: 'Jan', value: 320000 },
    { label: 'Feb', value: 350000 },
    { label: 'Mar', value: 380000 },
    { label: 'Apr', value: 420000 },
    { label: 'May', value: 450000 },
    { label: 'Jun', value: 470000 },
    { label: 'Jul', value: 482500 },
  ];

  // Vendor distribution
  const vendorDistribution = [
    { label: 'Merchants', value: 56 },
    { label: 'Event Organizers', value: 38 },
    { label: 'Coaching Centers', value: 30 },
  ];

  // Filter vendors
  const filteredVendors = allVendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || vendor.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Action handlers
  const handleApproveVendor = (vendorId) => {
    alert(`✅ Vendor ${vendorId} has been approved and activated!`);
  };

  const handleRejectVendor = (vendorId) => {
    const reason = prompt('Enter rejection reason:');
    if (reason) {
      alert(`❌ Vendor ${vendorId} has been rejected.\nReason: ${reason}`);
    }
  };

  const handleApproveEvent = (eventId) => {
    alert(`✅ Event ${eventId} has been approved and published!`);
  };

  const handleRejectEvent = (eventId) => {
    const reason = prompt('Enter rejection reason:');
    if (reason) {
      alert(`❌ Event ${eventId} has been rejected.\nReason: ${reason}`);
    }
  };

  const handleApproveProgram = (programId) => {
    alert(`✅ Coaching Program ${programId} has been approved and published!`);
  };

  const handleRejectProgram = (programId) => {
    const reason = prompt('Enter rejection reason:');
    if (reason) {
      alert(`❌ Coaching Program ${programId} has been rejected.\nReason: ${reason}`);
    }
  };

  const handleViewDetails = (id, type) => {
    alert(`📋 Viewing detailed information for ${type} ${id}`);
  };

  return (
    <div className="modern-dashboard">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Admin Panel - Platform Overview</h1>
          <p className="dashboard-subtitle">Vendor management, approvals & system monitoring 🛡️</p>
        </div>
        <div className="dashboard-actions">
          <div className="button-group">
            <button className={`filter-btn ${timeRange === 'week' ? 'active' : ''}`} onClick={() => setTimeRange('week')}>Week</button>
            <button className={`filter-btn ${timeRange === 'month' ? 'active' : ''}`} onClick={() => setTimeRange('month')}>Month</button>
            <button className={`filter-btn ${timeRange === 'year' ? 'active' : ''}`} onClick={() => setTimeRange('year')}>Year</button>
          </div>
          <button className="icon-btn">�</button>
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">⬇️</button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="admin-tabs">
        <button 
          className={`admin-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📊 Overview
        </button>
        <button 
          className={`admin-tab ${activeTab === 'vendors' ? 'active' : ''}`}
          onClick={() => setActiveTab('vendors')}
        >
          🏪 All Vendors ({allVendors.length})
        </button>
        <button 
          className={`admin-tab ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          🎪 Event Approvals ({pendingEvents.length})
        </button>
        <button 
          className={`admin-tab ${activeTab === 'coaching' ? 'active' : ''}`}
          onClick={() => setActiveTab('coaching')}
        >
          🏃 Coaching Approvals ({pendingPrograms.length})
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <>
          {/* Stats Grid */}
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
              icon="⏳"
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

          {/* Charts Row */}
          <div className="charts-grid">
            <div className="chart-col-large">
              <ChartCard title="Platform Revenue" subtitle="Total revenue across all vendors">
                <SimpleLineChart data={revenueData} color="#10b981" height={250} />
              </ChartCard>
            </div>
            <div className="chart-col-small">
              <ChartCard title="Vendor Distribution" subtitle="By type">
                <BarChart data={vendorDistribution} />
              </ChartCard>
            </div>
          </div>
        </>
      )}

      {/* All Vendors Tab */}
      {activeTab === 'vendors' && (
        <ChartCard 
          title="All Vendors" 
          subtitle={`${filteredVendors.length} vendors found`}
          actions={
            <div className="table-controls">
              <input
                type="text"
                placeholder="Search vendors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select-small"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
          }
        >
          <div className="modern-table-container">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Vendor ID</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Contact</th>
                  <th>Status</th>
                  <th>Revenue</th>
                  <th>Joined</th>
                  <th>Stats</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredVendors.map((vendor) => (
                  <tr key={vendor.id}>
                    <td className="table-id">{vendor.id}</td>
                    <td><strong>{vendor.name}</strong></td>
                    <td>
                      <span className="vendor-type-badge">
                        {vendor.type === 'Merchant' && '🏪'} 
                        {vendor.type === 'Event Organizer' && '🎪'} 
                        {vendor.type === 'Coaching Center' && '🏃'} 
                        {' '}{vendor.type}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '12px' }}>
                        <div>{vendor.email}</div>
                        <div style={{ color: '#888' }}>{vendor.phone}</div>
                      </div>
                    </td>
                    <td>
                      <span className={`modern-badge badge-${vendor.status.toLowerCase()}`}>
                        {vendor.status}
                      </span>
                    </td>
                    <td className="table-amount">{vendor.revenue}</td>
                    <td className="table-time">{vendor.joined}</td>
                    <td style={{ fontSize: '12px' }}>
                      {vendor.type === 'Merchant' && `${vendor.products} products, ${vendor.orders} orders`}
                      {vendor.type === 'Event Organizer' && `${vendor.events} events, ${vendor.tickets} tickets`}
                      {vendor.type === 'Coaching Center' && `${vendor.programs} programs, ${vendor.students} students`}
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button 
                          className="action-btn-small btn-view"
                          onClick={() => handleViewDetails(vendor.id, 'Vendor')}
                          title="View Details"
                        >
                          👁️
                        </button>
                        {vendor.status === 'Pending' && (
                          <>
                            <button 
                              className="action-btn-small btn-approve"
                              onClick={() => handleApproveVendor(vendor.id)}
                              title="Approve"
                            >
                              ✅
                            </button>
                            <button 
                              className="action-btn-small btn-reject"
                              onClick={() => handleRejectVendor(vendor.id)}
                              title="Reject"
                            >
                              ❌
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>
      )}

      {/* Event Approvals Tab */}
      {activeTab === 'events' && (
        <ChartCard 
          title="Pending Event Approvals" 
          subtitle={`${pendingEvents.length} events awaiting review`}
        >
          <div className="modern-table-container">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Event ID</th>
                  <th>Event Name</th>
                  <th>Organizer</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Capacity</th>
                  <th>Ticket Price</th>
                  <th>Submitted</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingEvents.map((event) => (
                  <tr key={event.id}>
                    <td className="table-id">{event.id}</td>
                    <td><strong>{event.name}</strong></td>
                    <td>{event.organizer}</td>
                    <td>
                      <span className="modern-badge badge-processing">{event.type}</span>
                    </td>
                    <td>{event.date}</td>
                    <td>{event.capacity} people</td>
                    <td className="table-amount">{event.ticketPrice}</td>
                    <td className="table-time">{event.submittedOn}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button 
                          className="action-btn-small btn-view"
                          onClick={() => handleViewDetails(event.id, 'Event')}
                          title="View Details"
                        >
                          👁️
                        </button>
                        <button 
                          className="action-btn-small btn-approve"
                          onClick={() => handleApproveEvent(event.id)}
                          title="Approve Event"
                        >
                          ✅
                        </button>
                        <button 
                          className="action-btn-small btn-reject"
                          onClick={() => handleRejectEvent(event.id)}
                          title="Reject Event"
                        >
                          ❌
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>
      )}

      {/* Coaching Approvals Tab */}
      {activeTab === 'coaching' && (
        <ChartCard 
          title="Pending Coaching Program Approvals" 
          subtitle={`${pendingPrograms.length} programs awaiting review`}
        >
          <div className="modern-table-container">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Program ID</th>
                  <th>Program Name</th>
                  <th>Coaching Center</th>
                  <th>Duration</th>
                  <th>Fee</th>
                  <th>Capacity</th>
                  <th>Age Group</th>
                  <th>Submitted</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingPrograms.map((program) => (
                  <tr key={program.id}>
                    <td className="table-id">{program.id}</td>
                    <td><strong>{program.name}</strong></td>
                    <td>{program.center}</td>
                    <td>{program.duration}</td>
                    <td className="table-amount">{program.fee}</td>
                    <td>{program.capacity} students</td>
                    <td>
                      <span className="modern-badge badge-draft">{program.ageGroup} years</span>
                    </td>
                    <td className="table-time">{program.submittedOn}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button 
                          className="action-btn-small btn-view"
                          onClick={() => handleViewDetails(program.id, 'Program')}
                          title="View Details"
                        >
                          👁️
                        </button>
                        <button 
                          className="action-btn-small btn-approve"
                          onClick={() => handleApproveProgram(program.id)}
                          title="Approve Program"
                        >
                          ✅
                        </button>
                        <button 
                          className="action-btn-small btn-reject"
                          onClick={() => handleRejectProgram(program.id)}
                          title="Reject Program"
                        >
                          ❌
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>
      )}
    </div>
  );
};

export default AdminDashboard;
