import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './PortalSwitcher.css';

const PortalSwitcher = () => {
  const { userPortals, portalType, switchPortal } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Only show if user has multiple portals
  if (!userPortals || userPortals.length <= 1) {
    return null;
  }

  const currentPortal = userPortals.find(p => p.portal === portalType);

  const handleSwitchPortal = (portal, role) => {
    switchPortal(portal, role);
    navigate(`/${portal}`);
    setIsOpen(false);
  };

  return (
    <div className="portal-switcher">
      <button 
        className="switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Switch Portal"
      >
        <span className="portal-icon">{currentPortal?.icon || '🔄'}</span>
        <span className="portal-label">{currentPortal?.label}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="switcher-dropdown">
          <div className="dropdown-header">Available Portals</div>
          <div className="portal-options">
            {userPortals.map((portalOption, idx) => (
              <button
                key={idx}
                className={`portal-option ${portalOption.portal === portalType ? 'active' : ''}`}
                onClick={() => handleSwitchPortal(portalOption.portal, portalOption.role)}
              >
                <span className="option-icon">{portalOption.icon}</span>
                <div className="option-details">
                  <div className="option-label">{portalOption.label}</div>
                  <div className="option-role">{portalOption.role}</div>
                </div>
                {portalOption.portal === portalType && <span className="checkmark">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortalSwitcher;
