import React, { useState, useEffect } from 'react';
import { FaUsers, FaStar, FaCity, FaChartLine } from 'react-icons/fa';
import './StatsSlider.css';

const StatsSlider = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [counts, setCounts] = useState({
    customers: 0,
    rating: 0,
    cities: 0,
    satisfaction: 0
  });

  const stats = [
    {
      id: 1,
      icon: <FaUsers className="stat-icon" />,
      target: 10000,
      suffix: "+",
      label: "Happy Customers",
      color: "#FF6B6B",
      prefix: ""
    },
    {
      id: 2,
      icon: <FaStar className="stat-icon" />,
      target: 4.9,
      suffix: "",
      label: "Average Rating",
      color: "#FFD700",
      prefix: "",
      decimal: true
    },
    {
      id: 3,
      icon: <FaCity className="stat-icon" />,
      target: 50,
      suffix: "+",
      label: "Cities",
      color: "#6BCBFF",
      prefix: ""
    },
    {
      id: 4,
      icon: <FaChartLine className="stat-icon" />,
      target: 100,
      suffix: "%",
      label: "Satisfaction",
      color: "#00A86B",
      prefix: ""
    }
  ];

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000); // Change stat every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Animate count when currentStat changes
  useEffect(() => {
    const currentTarget = stats[currentStat].target;
    const isDecimal = stats[currentStat].decimal;
    let start = 0;
    const duration = 2000; // 2 seconds animation
    const increment = currentTarget / (duration / 16);

    const timer = setInterval(() => {
      if (!isDecimal) {
        if (start < currentTarget) {
          start += increment;
          if (start > currentTarget) start = currentTarget;
          
          setCounts(prev => ({
            ...prev,
            [stats[currentStat].label.toLowerCase().replace(/ /g, '')]: Math.floor(start)
          }));
        } else {
          clearInterval(timer);
        }
      } else {
        if (start < currentTarget) {
          start += increment / 10;
          if (start > currentTarget) start = currentTarget;
          
          setCounts(prev => ({
            ...prev,
            [stats[currentStat].label.toLowerCase().replace(/ /g, '')]: start.toFixed(1)
          }));
        } else {
          clearInterval(timer);
        }
      }
    }, 16);

    return () => clearInterval(timer);
  }, [currentStat]);

  const getCurrentValue = () => {
    const label = stats[currentStat].label.toLowerCase().replace(/ /g, '');
    return counts[label] || 0;
  };

  return (
    <section className="stats-slider">
      <div className="container">
        <h2 className="stats-title">
          <span>Our Impact in Numbers</span>
        </h2>
        
        <div className="stats-wrapper">
          <div className="stats-card" style={{ '--stat-color': stats[currentStat].color }}>
            <div className="stat-icon-wrapper">
              {stats[currentStat].icon}
            </div>
            <div className="stat-number-wrapper">
              <span className="stat-number">
                {getCurrentValue()}{stats[currentStat].suffix}
              </span>
            </div>
            <h3 className="stat-label-text">{stats[currentStat].label}</h3>
            <div className="stat-progress">
              <div 
                className="stat-progress-bar"
                style={{ 
                  width: `${(getCurrentValue() / stats[currentStat].target) * 100}%`,
                  backgroundColor: stats[currentStat].color
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="stats-dots">
          {stats.map((_, idx) => (
            <span
              key={idx}
              className={`stat-dot ${idx === currentStat ? 'active' : ''}`}
              onClick={() => setCurrentStat(idx)}
            ></span>
          ))}
        </div>
        
        <p className="stats-auto-text">✨ Automatically changing every 3 seconds ✨</p>
      </div>
    </section>
  );
};

export default StatsSlider;