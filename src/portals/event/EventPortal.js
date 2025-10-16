import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PortalSwitcher from '../../components/PortalSwitcher/PortalSwitcher';
import EventDashboard from './pages/EventDashboard';
import EventsPage from './pages/EventsPage';
import TicketsPage from './pages/TicketsPage';
import AttendeesPage from './pages/AttendeesPage';
import CheckInPage from './pages/CheckInPage';
import FinancePage from './pages/FinancePage';
import SettingsPage from './pages/SettingsPage';
import '../PortalLayout.css';

const EventPortal = () => {
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
            <span className="nav-item-icon">🎪</span>
            Event Organizer
          </h2>
          <p className="sidebar-subtitle">Event Management System</p>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {/* Main Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Main</h3>
            <Link 
              to="/event" 
              className={`nav-item ${isActive('/event') && !isActive('/event/events') && !isActive('/event/check-in') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">📊</span>
              <span className="nav-item-text">Dashboard</span>
            </Link>
            <Link 
              to="/event/events" 
              className={`nav-item ${isActive('/event/events') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">📅</span>
              <span className="nav-item-text">Events</span>
            </Link>
          </div>

          {/* Attendees Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Attendees</h3>
            <Link 
              to="/event/tickets" 
              className={`nav-item ${isActive('/event/tickets') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">🎫</span>
              <span className="nav-item-text">Tickets</span>
            </Link>
            <Link 
              to="/event/attendees" 
              className={`nav-item ${isActive('/event/attendees') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">👥</span>
              <span className="nav-item-text">Attendees</span>
            </Link>
            <Link 
              to="/event/check-in" 
              className={`nav-item ${isActive('/event/check-in') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">✓</span>
              <span className="nav-item-text">Check-In</span>
              <span className="nav-item-badge">5</span>
            </Link>
          </div>

          {/* Business Section */}
          <div className="nav-section">
            <h3 className="nav-section-title">Business</h3>
            <Link 
              to="/event/finance" 
              className={`nav-item ${isActive('/event/finance') ? 'active' : ''}`}
            >
              <span className="nav-item-icon">💰</span>
              <span className="nav-item-text">Finance</span>
            </Link>
            <Link 
              to="/event/settings" 
              className={`nav-item ${isActive('/event/settings') ? 'active' : ''}`}
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
              {(user?.name || 'Event Manager').charAt(0).toUpperCase()}
            </div>
            <div className="user-info">
              <p className="user-name">{user?.name || 'Event Manager'}</p>
              <p className="user-role">Event Organizer</p>
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
          <h1>Event Management</h1>
          <PortalSwitcher />
        </header>

        <Routes>
          <Route path="/" element={<EventDashboard />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/attendees" element={<AttendeesPage />} />
          <Route path="/check-in" element={<CheckInPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default EventPortal;
