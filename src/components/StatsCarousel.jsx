import React from 'react';
import { FaUsers, FaStar, FaCity, FaChartLine, FaDumbbell, FaFire, FaTrophy, FaHeartbeat } from 'react-icons/fa';
import './StatsCarousel.css';

const StatsCarousel = () => {
  // 8 stats
  const allStats = [
    { id: 1, icon: <FaUsers />, value: "10,000+", label: "Happy Customers", color: "#FF6B6B" },
    { id: 2, icon: <FaStar />, value: "4.9", label: "Average Rating", color: "#FFD700" },
    { id: 3, icon: <FaCity />, value: "50+", label: "Cities Covered", color: "#6BCBFF" },
    { id: 4, icon: <FaChartLine />, value: "100%", label: "Satisfaction", color: "#00A86B" },
    { id: 5, icon: <FaDumbbell />, value: "25K+", label: "Kgs Lifted", color: "#E31B23" },
    { id: 6, icon: <FaFire />, value: "50K+", label: "Calories Burned", color: "#FF8C00" },
    { id: 7, icon: <FaTrophy />, value: "500+", label: "Transformations", color: "#FFD700" },
    { id: 8, icon: <FaHeartbeat />, value: "98%", label: "Health Score", color: "#00CED1" }
  ];

  // Double the array for seamless loop
  const duplicateStats = [...allStats, ...allStats, ...allStats];

  return (
    <section className="stats-carousel">
      <div className="container">
        <h2 className="carousel-title">
          <span>Our Achievements</span>
        </h2>
        <p className="carousel-subtitle">Trusted by thousands worldwide</p>

        <div className="marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-track">
              {duplicateStats.map((stat, index) => (
                <div className="stat-box" key={index} style={{ '--stat-color': stat.color }}>
                  <div className="stat-box-icon">{stat.icon}</div>
                  <div className="stat-box-value">{stat.value}</div>
                  <div className="stat-box-label">{stat.label}</div>
                  <div className="stat-hover-effect"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default StatsCarousel;