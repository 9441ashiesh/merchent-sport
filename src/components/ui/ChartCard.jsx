import React from 'react';
import './ChartCard.css';

const ChartCard = ({ title, subtitle, children, actions }) => {
  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title-section">
          <h3 className="chart-card-title">{title}</h3>
          {subtitle && <p className="chart-card-subtitle">{subtitle}</p>}
        </div>
        {actions && <div className="chart-card-actions">{actions}</div>}
      </div>
      <div className="chart-card-content">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
