import React, { useState } from 'react';
import './SimpleLineChart.css';

const SimpleLineChart = ({ data, color = '#6366f1', height = 200 }) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  if (!data || data.length === 0) return null;

  const max = Math.max(...data.map(d => d.value));
  const min = Math.min(...data.map(d => d.value));
  const range = max - min || 1;

  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = ((max - item.value) / range) * 80 + 10;
    return { x, y, value: item.value, label: item.label };
  });

  const pointsString = points.map(p => `${p.x},${p.y}`).join(' ');

  const handlePointHover = (point, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredPoint(point);
    setTooltipPos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  return (
    <div className="simple-line-chart" style={{ height }} onMouseLeave={handleMouseLeave}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Grid lines */}
        <line x1="0" y1="25" x2="100" y2="25" stroke="#f0f0f0" strokeWidth="0.2" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="#f0f0f0" strokeWidth="0.2" />
        <line x1="0" y1="75" x2="100" y2="75" stroke="#f0f0f0" strokeWidth="0.2" />
        
        {/* Area fill */}
        <polygon
          points={`0,100 ${pointsString} 100,100`}
          fill={color}
          fillOpacity="0.1"
          className="chart-area"
        />
        
        {/* Line */}
        <polyline
          points={pointsString}
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="chart-line"
        />

        {/* Interactive data points */}
        {points.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r="1.5"
              fill={color}
              className={`chart-point ${hoveredPoint?.label === point.label ? 'hovered' : ''}`}
              onMouseEnter={(e) => handlePointHover(point, e)}
              style={{ cursor: 'pointer' }}
            />
            {hoveredPoint?.label === point.label && (
              <circle
                cx={point.x}
                cy={point.y}
                r="2.5"
                fill={color}
                opacity="0.3"
                className="chart-point-ring"
              />
            )}
          </g>
        ))}
      </svg>
      
      {/* Tooltip */}
      {hoveredPoint && (
        <div 
          className="chart-tooltip"
          style={{ 
            left: `${tooltipPos.x}px`, 
            top: `${tooltipPos.y - 40}px` 
          }}
        >
          <div className="tooltip-label">{hoveredPoint.label}</div>
          <div className="tooltip-value">${(hoveredPoint.value / 1000).toFixed(1)}K</div>
        </div>
      )}
      
      <div className="chart-labels">
        {data.map((item, index) => (
          index % Math.ceil(data.length / 6) === 0 && (
            <span key={index} className="chart-label">
              {item.label}
            </span>
          )
        ))}
      </div>
    </div>
  );
};

export default SimpleLineChart;
