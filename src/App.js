import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import './App.css';

// Pages
import LoginPage from './pages/LoginPage';
import MerchantPortal from './portals/merchant/MerchantPortal';
import EventPortal from './portals/event/EventPortal';
import CoachingPortal from './portals/coaching/CoachingPortal';
import AdminPortal from './portals/admin/AdminPortal';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {isAuthenticated ? (
          <>
            <Route path="/merchant/*" element={<MerchantPortal />} />
            <Route path="/event/*" element={<EventPortal />} />
            <Route path="/coaching/*" element={<CoachingPortal />} />
            <Route path="/admin/*" element={<AdminPortal />} />
            <Route path="/" element={<Navigate to="/merchant" replace />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
