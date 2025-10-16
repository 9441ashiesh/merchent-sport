import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PortalSwitcher from '../../components/PortalSwitcher/PortalSwitcher';
import CoachingDashboard from './pages/CoachingDashboard';
import CentersPage from './pages/CentersPage';
import ProgramsPage from './pages/ProgramsPage';
import EnrollmentsPage from './pages/EnrollmentsPage';
import AttendancePage from './pages/AttendancePage';
import FinancePage from './pages/FinancePage';
import SettingsPage from './pages/SettingsPage';
import '../PortalLayout.css';

const CoachingPortal = () => {
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
            <span className="nav-item-icon">🏃</span>
            Coaching Center
          </h2>
          <p className="sidebar-subtitle">Sports Training Platform</p>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {/* Main Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Main</h3>
            <Link 
              to="/coaching" 
              className={`nav-item ${isActive('/coaching') && !isActive('/coaching/programs') && !isActive('/coaching/attendance') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">📊</span>
              <span className="nav-item-text">Dashboard</span>
            </Link>
            <Link 
              to="/coaching/centers" 
              className={`nav-item ${isActive('/coaching/centers') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">🏢</span>
              <span className="nav-item-text">Centers</span>
            </Link>
          </div>

          {/* Programs Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Programs</h3>
            <Link 
              to="/coaching/programs" 
              className={`nav-item ${isActive('/coaching/programs') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">📚</span>
              <span className="nav-item-text">Programs</span>
            </Link>
            <Link 
              to="/coaching/enrollments" 
              className={`nav-item ${isActive('/coaching/enrollments') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">📝</span>
              <span className="nav-item-text">Enrollments</span>
              <span className="nav-item-badge">12</span>
            </Link>
            <Link 
              to="/coaching/attendance" 
              className={`nav-item ${isActive('/coaching/attendance') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">✓</span>
              <span className="nav-item-text">Attendance</span>
            </Link>
          </div>

          {/* Business Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Business</h3>
            <Link 
              to="/coaching/finance" 
              className={`nav-item ${isActive('/coaching/finance') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">💰</span>
              <span className="nav-item-text">Finance</span>
            </Link>
            <Link 
              to="/coaching/settings" 
              className={`nav-item ${isActive('/coaching/settings') ? 'active' : ''}`}
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
              {(user?.name || 'Coach').charAt(0).toUpperCase()}
            </div>
            <div className="user-info">
              <p className="user-name">{user?.name || 'Coach'}</p>
              <p className="user-role">Coaching Director</p>
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
          <h1>Coaching Center Management</h1>
          <PortalSwitcher />
        </header>

        <Routes>
          <Route path="/" element={<CoachingDashboard />} />
          <Route path="/centers" element={<CentersPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/enrollments" element={<EnrollmentsPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default CoachingPortal;
