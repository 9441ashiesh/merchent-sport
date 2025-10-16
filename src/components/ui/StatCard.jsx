import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, change, changeType, icon, trend }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-icon">{icon}</span>
        <span className="stat-title">{title}</span>
      </div>
      <div className="stat-value">{value}</div>
      {change && (
        <div className="stat-footer">
          <span className={`stat-change ${changeType}`}>
            {changeType === 'positive' ? '↑' : '↓'} {change}
          </span>
          {trend && <span className="stat-trend">{trend}</span>}
        </div>
      )}
    </div>
  );
};

export default StatCard;
