import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  // Mobile number to role mapping - now supports multiple portals per user
  const mobileRoleMap = {
    '9876543210': { 
      portals: [
        { role: 'owner', portal: 'merchant', label: 'Merchant Store Owner', icon: '🏪' }
      ],
      name: 'Raj Kumar' 
    },
    '9876543211': { 
      portals: [
        { role: 'manager', portal: 'event', label: 'Event Manager', icon: '🎪' }
      ],
      name: 'Priya Singh' 
    },
    '9876543212': { 
      portals: [
        { role: 'owner', portal: 'coaching', label: 'Coaching Center Owner', icon: '🏃' }
      ],
      name: 'Amit Patel' 
    },
    '9876543213': { 
      portals: [
        { role: 'admin', portal: 'admin', label: 'Platform Admin', icon: '🛡️' }
      ],
      name: 'Admin User' 
    },
    // Example: User with multiple portal access
    '9876543220': { 
      portals: [
        { role: 'owner', portal: 'merchant', label: 'Merchant Store Owner', icon: '🏪' },
        { role: 'manager', portal: 'event', label: 'Event Manager', icon: '🎪' }
      ],
      name: 'Multi Portal User' 
    },
    // Also support with country code
    '+919876543210': { 
      portals: [
        { role: 'owner', portal: 'merchant', label: 'Merchant Store Owner', icon: '🏪' }
      ],
      name: 'Raj Kumar' 
    },
    '+919876543211': { 
      portals: [
        { role: 'manager', portal: 'event', label: 'Event Manager', icon: '🎪' }
      ],
      name: 'Priya Singh' 
    },
    '+919876543212': { 
      portals: [
        { role: 'owner', portal: 'coaching', label: 'Coaching Center Owner', icon: '🏃' }
      ],
      name: 'Amit Patel' 
    },
    '+919876543213': { 
      portals: [
        { role: 'admin', portal: 'admin', label: 'Platform Admin', icon: '🛡️' }
      ],
      name: 'Admin User' 
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Normalize mobile number (remove spaces and dashes)
    const normalizedMobile = mobileNumber.replace(/[\s-]/g, '');
    const userData = mobileRoleMap[normalizedMobile];
    
    if (!userData) {
      alert('Mobile number not registered. Try: 9876543210, 9876543211, 9876543212, 9876543213, or 9876543220 (multi-portal)');
      return;
    }

    if (!password) {
      alert('Please enter password');
      return;
    }

    // Get the first portal as default
    const firstPortal = userData.portals[0];
    login(
      normalizedMobile, 
      password, 
      firstPortal.role, 
      firstPortal.portal,
      userData.portals // Pass all portals the user has access to
    );
    navigate(`/${firstPortal.portal}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Vendor Portals</h1>
        <p className="subtitle">Platform</p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
            <p className="hint-text">Demo: 9876543210, 9876543211, 9876543212, 9876543213, 9876543220 (multi)</p>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn-login">Sign In</button>
        </form>

        <footer className="login-footer">
          <p>© 2024 Vendor Portals</p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
