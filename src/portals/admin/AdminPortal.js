import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PortalSwitcher from '../../components/PortalSwitcher/PortalSwitcher';
import AdminDashboard from './pages/AdminDashboard';
import ApprovalsPage from './pages/ApprovalsPage';
import VendorsPage from './pages/VendorsPage';
import ModerationPage from './pages/ModerationPage';
import PayoutsPage from './pages/PayoutsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import '../PortalLayout.css';

const AdminPortal = () => {
  const { logout, user } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="portal-layout">
      <aside className={`portal-sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <h2>
            <span className="nav-item-icon">🛡️</span>
            Admin Panel
          </h2>
          <p className="sidebar-subtitle">Platform Management</p>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {/* Main Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Main</h3>
            <Link 
              to="/admin" 
              className={`nav-item ${isActive('/admin') && !isActive('/admin/approvals') && !isActive('/admin/reports') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">📊</span>
              <span className="nav-item-text">Dashboard</span>
            </Link>
            <Link 
              to="/admin/approvals" 
              className={`nav-item ${isActive('/admin/approvals') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">✓</span>
              <span className="nav-item-text">Approvals Queue</span>
              <span className="nav-item-badge">7</span>
            </Link>
          </div>

          {/* Management Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Management</h3>
            <Link 
              to="/admin/vendors" 
              className={`nav-item ${isActive('/admin/vendors') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">👥</span>
              <span className="nav-item-text">Vendors</span>
            </Link>
            <Link 
              to="/admin/moderation" 
              className={`nav-item ${isActive('/admin/moderation') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">🚨</span>
              <span className="nav-item-text">Moderation</span>
              <span className="nav-item-badge">3</span>
            </Link>
            <Link 
              to="/admin/payouts" 
              className={`nav-item ${isActive('/admin/payouts') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">💳</span>
              <span className="nav-item-text">Payouts</span>
            </Link>
          </div>

          {/* Analytics Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Analytics</h3>
            <Link 
              to="/admin/reports" 
              className={`nav-item ${isActive('/admin/reports') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">📈</span>
              <span className="nav-item-text">Reports</span>
            </Link>
            <Link 
              to="/admin/settings" 
              className={`nav-item ${isActive('/admin/settings') ? 'active' : ''}`}
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
              {(user?.name || 'Admin').charAt(0).toUpperCase()}
            </div>
            <div className="user-info">
              <p className="user-name">{user?.name || 'Admin'}</p>
              <p className="user-role">System Administrator</p>
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
          <h1>Platform Administration</h1>
          <PortalSwitcher />
        </header>

        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/approvals" element={<ApprovalsPage />} />
          <Route path="/vendors" element={<VendorsPage />} />
          <Route path="/moderation" element={<ModerationPage />} />
          <Route path="/payouts" element={<PayoutsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPortal;
