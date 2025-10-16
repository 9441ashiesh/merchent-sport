import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PortalSwitcher from '../../components/PortalSwitcher/PortalSwitcher';
import MerchantDashboard from './pages/MerchantDashboard';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import InventoryPage from './pages/InventoryPage';
import FinancePage from './pages/FinancePage';
import SettingsPage from './pages/SettingsPage';
import '../PortalLayout.css';

const MerchantPortal = () => {
  const { logout, user } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className={`portal-layout ${sidebarOpen ? 'sidebar-open' : ''} ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}
         onClick={(e) => {
           // Close sidebar when clicking on backdrop (portal-layout background)
           if (e.target.classList.contains('portal-layout') && sidebarOpen) {
             setSidebarOpen(false);
           }
         }}>
      <aside className={`portal-sidebar ${sidebarOpen ? 'open' : ''} ${sidebarCollapsed ? 'collapsed' : ''}`}>
        {/* Close button for mobile */}
        <button 
          className="sidebar-close-btn" 
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          ✕
        </button>
        
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="sidebar-header-content">
            <h2>
              <span className="nav-item-icon">🏪</span>
              <span className="sidebar-header-text">Merchant Portal</span>
            </h2>
            <p className="sidebar-subtitle">Store Management System</p>
          </div>
          {/* Toggle button */}
          <button 
            className="sidebar-toggle-btn" 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? '→' : '←'}
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {/* Main Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Main</h3>
            <Link 
              to="/merchant" 
              className={`nav-item ${isActive('/merchant') && !isActive('/merchant/products') && !isActive('/merchant/orders') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">📊</span>
              <span className="nav-item-text">Dashboard</span>
            </Link>
            <Link 
              to="/merchant/orders" 
              className={`nav-item ${isActive('/merchant/orders') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">�</span>
              <span className="nav-item-text">Orders</span>
              <span className="nav-item-badge">18</span>
            </Link>
          </div>

          {/* Products Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Products</h3>
            <Link 
              to="/merchant/products" 
              className={`nav-item ${isActive('/merchant/products') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">📦</span>
              <span className="nav-item-text">All Products</span>
            </Link>
            <Link 
              to="/merchant/inventory" 
              className={`nav-item ${isActive('/merchant/inventory') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">�</span>
              <span className="nav-item-text">Inventory</span>
            </Link>
          </div>

          {/* Business Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Business</h3>
            <Link 
              to="/merchant/finance" 
              className={`nav-item ${isActive('/merchant/finance') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">💰</span>
              <span className="nav-item-text">Finance & Payouts</span>
            </Link>
            <Link 
              to="/merchant/settings" 
              className={`nav-item ${isActive('/merchant/settings') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">⚙️</span>
              <span className="nav-item-text">Settings</span>
            </Link>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          {/* User Profile */}
          <div className="user-profile">
            <div className="user-avatar">
              {(user?.name || 'Store Owner').charAt(0).toUpperCase()}
            </div>
            <div className="user-info">
              <p className="user-name">{user?.name || 'Store Owner'}</p>
              <p className="user-role">Merchant Account</p>
            </div>
          </div>

          {/* Logout Button */}
          <button onClick={logout} className="logout-btn">
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="portal-main">
        <header className="portal-header">
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <h1>Merchant Store Management</h1>
          <PortalSwitcher />
        </header>

        <Routes>
          <Route path="/" element={<MerchantDashboard />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default MerchantPortal;
