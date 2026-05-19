import React, { useState } from 'react';
import { FaBed, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { GiMuscleUp, GiHeartPlus, GiEnergyShield } from 'react-icons/gi';
import './ImportanceSection.css';

const ImportanceSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Sirf 3 images - ek hi image mein left (fat) aur right (fit)
  const transformations = [
    {
      image: "/img1.jpg",      // Left side fat, Right side fit
      title: "12 Weeks Transformation",
      description: "From 25% body fat to 15% body fat"
    },
    {
      image: "/img2.jpg",      // Left side fat, Right side fit
      title: "6 Months Journey",
      description: "Complete body recomposition journey"
    },
    {
      image: "/img3.jpg",      // Left side fat, Right side fit
      title: "Body Recomposition",
      description: "Fat loss + Muscle gain transformation"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % transformations.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const importanceData = [
    {
      icon: <GiHeartPlus className="importance-icon" />,
      title: "Fill Nutritional Gaps",
      description: "Even with a perfect diet, modern farming depletes soil nutrients. Supplements ensure your body gets what it needs.",
      color: "#ff6b6b"
    },
    {
      icon: <GiEnergyShield className="importance-icon" />,
      title: "Enhance Performance",
      description: "Boost strength, endurance, and recovery with targeted supplementation for serious athletes.",
      color: "#ffd93d"
    },
    {
      icon: <FaBed className="importance-icon" />,
      title: "Optimize Recovery",
      description: "Reduce muscle soreness, improve sleep, and repair faster after intense training sessions.",
      color: "#6bcbff"
    }
  ];

  return (
    <section className="importance">
      <div className="container">
        
        {/* 1. Transformation Section - Pehle */}
        <div className="transformation">
          <h3>
        
            Real Transformation Stories
           
          </h3>
          
          <div className="transformation-slider">
            <button className="slider-btn prev" onClick={prevImage}>
              <FaArrowLeft />
            </button>
            
            <div className="split-image-container">
              <div className="split-image-wrapper">
                <img 
                  src={transformations[currentImage].image} 
                  alt="Transformation"
                  className="split-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Found";
                  }}
                />
                <div className="split-labels">
                  <div className="label before-label">
                    <span> BEFORE</span>
                    <small>Fat / Out of Shape</small>
                  </div>
                  <div className="label after-label">
                    <span> AFTER</span>
                    <small>Fit / Muscular</small>
                  </div>
                </div>
                <div className="split-divider">
                  <div className="divider-line"></div>
                  <div className="vs-circle">VS</div>
                </div>
              </div>
            </div>
            
            <button className="slider-btn next" onClick={nextImage}>
              <FaArrowRight />
            </button>
          </div>
          
          <div className="transformation-info">
            <p className="transformation-title">{transformations[currentImage].title}</p>
            <p className="transformation-desc">{transformations[currentImage].description}</p>
            <div className="dots">
              {transformations.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`dot ${idx === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(idx)}
                ></span>
              ))}
            </div>
            <p className="transformation-text">
               With proper nutrition + right supplements
            </p>
          </div>
        </div>

        {/* 2. Why Supplements Matter - Baad mein */}
        <div className="supplements-section">
          <h2 className="section-title">
            Why Supplements Matter?
          </h2>
          
          <div className="importance-grid">
            {importanceData.map((item, index) => (
              <div className="importance-card" key={index} style={{ '--hover-color': item.color }}>
                <div className="icon-wrapper">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImportanceSection;