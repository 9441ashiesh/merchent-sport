import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import StatCard from '../../../components/ui/StatCard';
import ChartCard from '../../../components/ui/ChartCard';
import SimpleLineChart from '../../../components/ui/SimpleLineChart';
import BarChart from '../../../components/ui/BarChart';
import DonutChart from '../../../components/ui/DonutChart';
import './MerchantDashboard.css';

const MerchantDashboard = () => {
  const { user } = useAuth();
  
  // Interactive state management
  const [timeRange, setTimeRange] = useState('month');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showNotifications, setShowNotifications] = useState(false);

  // Data that changes based on time range
  const getRevenueData = () => {
    const datasets = {
      week: [
        { label: 'Mon', value: 8200 },
        { label: 'Tue', value: 9500 },
        { label: 'Wed', value: 7800 },
        { label: 'Thu', value: 11200 },
        { label: 'Fri', value: 13500 },
        { label: 'Sat', value: 15800 },
        { label: 'Sun', value: 12100 },
      ],
      month: [
        { label: 'Jan', value: 35000 },
        { label: 'Feb', value: 42000 },
        { label: 'Mar', value: 38000 },
        { label: 'Apr', value: 51000 },
        { label: 'May', value: 49000 },
        { label: 'Jun', value: 62000 },
        { label: 'Jul', value: 72100 },
      ],
      year: [
        { label: '2020', value: 320000 },
        { label: '2021', value: 450000 },
        { label: '2022', value: 520000 },
        { label: '2023', value: 680000 },
        { label: '2024', value: 720000 },
      ],
    };
    return datasets[timeRange];
  };

  // Stats that change based on time range
  const getStats = () => {
    const stats = {
      week: {
        sales: '$12.1K',
        orders: '87',
        products: '239K',
        users: '23',
        salesChange: '+8.2%',
        ordersChange: '+5.1%',
        productsChange: '+6.8%',
        usersChange: '+12.3%',
      },
      month: {
        sales: '$72.1K',
        orders: '1,156',
        products: '239K',
        users: '347',
        salesChange: '+12.5%',
        ordersChange: '+8.3%',
        productsChange: '+6.8%',
        usersChange: '+15.2%',
      },
      year: {
        sales: '$720K',
        orders: '12,340',
        products: '239K',
        users: '2,845',
        salesChange: '+24.5%',
        ordersChange: '+18.7%',
        productsChange: '+6.8%',
        usersChange: '+32.1%',
      },
    };
    return stats[timeRange];
  };

  const stats = getStats();

  // Orders by device
  const deviceData = [
    { label: 'Mobile', value: 456 },
    { label: 'Desktop', value: 892 },
    { label: 'Tablet', value: 234 },
    { label: 'Other', value: 98 },
  ];

  // Sales by category
  const categoryData = [
    { label: 'Sports Equipment', value: 45 },
    { label: 'Apparel', value: 30 },
    { label: 'Accessories', value: 15 },
    { label: 'Footwear', value: 10 },
  ];

  const allOrders = [
    { id: '#ORD-1245', customer: 'John Doe', product: 'Tennis Racket', amount: '$250', status: 'Shipped', time: '2 mins ago', category: 'equipment' },
    { id: '#ORD-1244', customer: 'Jane Smith', product: 'Running Shoes', amount: '$180', status: 'Processing', time: '15 mins ago', category: 'footwear' },
    { id: '#ORD-1243', customer: 'Mike Johnson', product: 'Yoga Mat', amount: '$45', status: 'Delivered', time: '1 hour ago', category: 'equipment' },
    { id: '#ORD-1242', customer: 'Sarah Lee', product: 'Dumbbells Set', amount: '$95', status: 'Pending', time: '2 hours ago', category: 'equipment' },
    { id: '#ORD-1241', customer: 'Tom Brown', product: 'Sports Jersey', amount: '$60', status: 'Shipped', time: '3 hours ago', category: 'apparel' },
    { id: '#ORD-1240', customer: 'Lisa White', product: 'Water Bottle', amount: '$25', status: 'Delivered', time: '4 hours ago', category: 'accessories' },
  ];

  // Filter orders based on search and category
  const filteredOrders = allOrders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.product.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || order.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const topProducts = [
    { name: 'Premium Tennis Racket', sales: 234, revenue: '$23,400', trend: '+12%' },
    { name: 'Running Shoes Pro', sales: 189, revenue: '$18,900', trend: '+8%' },
    { name: 'Yoga Mat Deluxe', sales: 156, revenue: '$7,020', trend: '+15%' },
    { name: 'Resistance Bands Set', sales: 145, revenue: '$4,350', trend: '+5%' },
  ];

  // Export functionality
  const handleExport = (type) => {
    alert(`Exporting data as ${type.toUpperCase()}...\nThis would download your dashboard data.`);
    console.log(`Export ${type} triggered`, { timeRange, stats, orders: filteredOrders });
  };

  // Refresh data
  const handleRefresh = () => {
    alert('Refreshing dashboard data...');
    console.log('Dashboard refreshed at:', new Date().toLocaleTimeString());
  };

  return (
    <div className="modern-dashboard">
      {/* Header Section with Interactive Controls */}
      <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">Dashboard</h2>
          <p className="dashboard-subtitle">Welcome back, {user?.name || 'Store Owner'}! 👋</p>
        </div>
        <div className="dashboard-actions">
          {/* Time Range Filter */}
          <div className="button-group">
            <button 
              className={`filter-btn ${timeRange === 'week' ? 'active' : ''}`}
              onClick={() => setTimeRange('week')}
            >
              Week
            </button>
            <button 
              className={`filter-btn ${timeRange === 'month' ? 'active' : ''}`}
              onClick={() => setTimeRange('month')}
            >
              Month
            </button>
            <button 
              className={`filter-btn ${timeRange === 'year' ? 'active' : ''}`}
              onClick={() => setTimeRange('year')}
            >
              Year
            </button>
          </div>

          {/* Action Buttons */}
          <button className="icon-btn" onClick={handleRefresh} title="Refresh">
            🔄
          </button>
          <button 
            className="icon-btn" 
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
          >
            🔔
          </button>
          <div className="export-dropdown">
            <button className="icon-btn" title="Export">
              ⬇️
            </button>
            <div className="dropdown-menu">
              <button onClick={() => handleExport('csv')}>Export as CSV</button>
              <button onClick={() => handleExport('pdf')}>Export as PDF</button>
              <button onClick={() => handleExport('excel')}>Export as Excel</button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Badge */}
      {showNotifications && (
        <div className="notification-banner">
          <span className="notification-icon">ℹ️</span>
          <span>You have 3 pending orders and 2 low-stock items.</span>
          <button onClick={() => setShowNotifications(false)}>✕</button>
        </div>
      )}

      {/* Stats Grid - Dynamic based on time range */}
      <div className="stats-grid">
        <StatCard
          icon="💰"
          title="Total Sales"
          value={stats.sales}
          change={stats.salesChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="green"
        />
        <StatCard
          icon="🛒"
          title="Total Orders"
          value={stats.orders}
          change={stats.ordersChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="blue"
        />
        <StatCard
          icon="📦"
          title="Active Products"
          value={stats.products}
          change={stats.productsChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="orange"
        />
        <StatCard
          icon="👥"
          title="New Users"
          value={stats.users}
          change={stats.usersChange}
          changeType="positive"
          trend={`vs last ${timeRange}`}
          color="purple"
        />
      </div>

      {/* Charts Row */}
      <div className="charts-grid">
        <div className="chart-col-large">
          <ChartCard 
            title="Total Sales" 
            subtitle={`Revenue performance - ${timeRange}`}
            actions={
              <div className="chart-legend-pills">
                <span className="legend-pill">
                  <span className="legend-dot" style={{ backgroundColor: '#6366f1' }}></span>
                  Revenue
                </span>
              </div>
            }
          >
            <SimpleLineChart data={getRevenueData()} color="#6366f1" height={250} />
          </ChartCard>
        </div>

        <div className="chart-col-small">
          <ChartCard title="Traffic by Device">
            <BarChart data={deviceData} />
          </ChartCard>
        </div>
      </div>

      {/* Second Charts Row */}
      <div className="charts-grid">
        <div className="chart-col-small">
          <ChartCard title="Sales by Category" subtitle="Distribution overview">
            <DonutChart data={categoryData} size={180} />
          </ChartCard>
        </div>

        <div className="chart-col-large">
          <ChartCard title="Top Products" subtitle="Best selling items this month">
            <div className="top-products-list">
              {topProducts.map((product, idx) => (
                <div key={idx} className="product-item">
                  <div className="product-rank">#{idx + 1}</div>
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    <div className="product-sales">{product.sales} sales</div>
                  </div>
                  <div className="product-revenue">{product.revenue}</div>
                  <div className="product-trend positive">{product.trend}</div>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>
      </div>

      {/* Recent Orders with Search and Filter */}
      <ChartCard 
        title="Recent Orders" 
        subtitle={`${filteredOrders.length} orders found`}
        actions={
          <div className="table-controls">
            {/* Search */}
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            
            {/* Category Filter */}
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select-small"
            >
              <option value="all">All Categories</option>
              <option value="equipment">Equipment</option>
              <option value="apparel">Apparel</option>
              <option value="footwear">Footwear</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
        }
      >
        <div className="modern-table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="table-id">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td className="table-amount">{order.amount}</td>
                    <td>
                      <span className={`modern-badge badge-${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="table-time">{order.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '24px', color: '#888' }}>
                    No orders found matching your filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </div>
  );
};

export default MerchantDashboard;
