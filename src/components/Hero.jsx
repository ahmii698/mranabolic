import React from 'react';
import { FaDumbbell, FaFire, FaTrophy, FaArrowDown } from 'react-icons/fa';
import { MdFitnessCenter } from 'react-icons/md';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title animate-slide-down">
         
          MRANABOLIC
        </h1>
        <p className="hero-subtitle animate-slide-up">
          Your Ultimate Fitness & Supplement Guide
        </p>
        <div className="hero-badge animate-fade">
          <span className="badge-item">
            <FaDumbbell className="badge-icon" /> Science-Backed
          </span>
          <span className="badge-separator">|</span>
          <span className="badge-item">
            <FaFire className="badge-icon" /> Real Results
          </span>
          <span className="badge-separator">|</span>
          <span className="badge-item">
            <FaTrophy className="badge-icon" /> Trusted by Athletes
          </span>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;