import React, { useState } from 'react';
import './BarChart.css';

const BarChart = ({ data, colors = ['#6366f1', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b'] }) => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [clickedBar, setClickedBar] = useState(null);

  if (!data || data.length === 0) return null;

  const max = Math.max(...data.map(d => d.value));

  const handleBarClick = (item, index) => {
    setClickedBar(clickedBar === index ? null : index);
    console.log(`Clicked: ${item.label} - ${item.value} orders`);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-container">
        {data.map((item, index) => {
          const height = (item.value / max) * 100;
          const color = colors[index % colors.length];
          const isHovered = hoveredBar === index;
          const isClicked = clickedBar === index;
          
          return (
            <div 
              key={index} 
              className="bar-wrapper"
              onMouseEnter={() => setHoveredBar(index)}
              onMouseLeave={() => setHoveredBar(null)}
              onClick={() => handleBarClick(item, index)}
            >
              <div className={`bar-value ${isHovered || isClicked ? 'active' : ''}`}>
                {item.value}
              </div>
              <div 
                className={`bar ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
                style={{ 
                  height: `${height}%`,
                  backgroundColor: color,
                  opacity: isHovered || isClicked ? 1 : 0.8
                }}
              >
                {(isHovered || isClicked) && (
                  <div className="bar-tooltip">
                    <div className="bar-tooltip-label">{item.label}</div>
                    <div className="bar-tooltip-value">{item.value} orders</div>
                  </div>
                )}
              </div>
              <div className="bar-label">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;
