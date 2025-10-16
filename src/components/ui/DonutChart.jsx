import React, { useState } from 'react';
import './DonutChart.css';

const DonutChart = ({ data, size = 200 }) => {
  const [hoveredSegment, setHoveredSegment] = useState(null);
  const [selectedSegment, setSelectedSegment] = useState(null);

  if (!data || data.length === 0) return null;

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b'];
  
  let currentAngle = -90;
  const segments = data.map((item, index) => {
    const percentage = (item.value / total) * 100;
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    
    return {
      ...item,
      percentage: percentage.toFixed(1),
      startAngle,
      endAngle: currentAngle,
      color: colors[index % colors.length],
      index
    };
  });

  const createArc = (startAngle, endAngle, radius = 40, innerRadius = 28, expand = false) => {
    if (expand) {
      radius += 2;
      innerRadius -= 1;
    }
    
    const start = polarToCartesian(50, 50, radius, endAngle);
    const end = polarToCartesian(50, 50, radius, startAngle);
    const innerStart = polarToCartesian(50, 50, innerRadius, endAngle);
    const innerEnd = polarToCartesian(50, 50, innerRadius, startAngle);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    
    return [
      'M', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      'L', innerEnd.x, innerEnd.y,
      'A', innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
      'Z'
    ].join(' ');
  };

  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  const handleSegmentClick = (segment) => {
    setSelectedSegment(selectedSegment === segment.index ? null : segment.index);
    console.log(`${segment.label}: ${segment.value} (${segment.percentage}%)`);
  };

  const handleLegendClick = (index) => {
    setSelectedSegment(selectedSegment === index ? null : index);
  };

  return (
    <div className="donut-chart-container">
      <div className="donut-chart-wrapper">
        <svg width={size} height={size} viewBox="0 0 100 100" className="donut-chart">
          {segments.map((segment) => {
            const isHovered = hoveredSegment === segment.index;
            const isSelected = selectedSegment === segment.index;
            const isActive = isHovered || isSelected;
            
            return (
              <path
                key={segment.index}
                d={createArc(segment.startAngle, segment.endAngle, 40, 28, isActive)}
                fill={segment.color}
                opacity={isActive ? 1 : (hoveredSegment !== null || selectedSegment !== null) ? 0.4 : 0.85}
                className={`donut-segment ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setHoveredSegment(segment.index)}
                onMouseLeave={() => setHoveredSegment(null)}
                onClick={() => handleSegmentClick(segment)}
                style={{ 
                  cursor: 'pointer',
                  filter: isActive ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' : 'none'
                }}
              />
            );
          })}
          
          {/* Center text */}
          <text
            x="50"
            y="45"
            textAnchor="middle"
            fontSize="8"
            fill="#888"
            fontWeight="500"
          >
            Total
          </text>
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fontSize="10"
            fill="#1a1a1a"
            fontWeight="700"
          >
            {total}
          </text>
        </svg>
      </div>
      
      <div className="donut-legend">
        {segments.map((segment) => {
          const isHovered = hoveredSegment === segment.index;
          const isSelected = selectedSegment === segment.index;
          const isActive = isHovered || isSelected;
          
          return (
            <div 
              key={segment.index} 
              className={`legend-item ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setHoveredSegment(segment.index)}
              onMouseLeave={() => setHoveredSegment(null)}
              onClick={() => handleLegendClick(segment.index)}
              style={{ cursor: 'pointer' }}
            >
              <span 
                className="legend-color" 
                style={{ 
                  backgroundColor: segment.color,
                  transform: isActive ? 'scale(1.2)' : 'scale(1)',
                  boxShadow: isActive ? `0 0 8px ${segment.color}` : 'none'
                }}
              />
              <span className="legend-label">{segment.label}</span>
              <span className="legend-value">{segment.percentage}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DonutChart;
