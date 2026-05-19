import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import './CustomerSlider.css';

const CustomerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const customers = [
    {
      id: 1,
      name: "Rahul Sharma",
      location: "Mumbai, India",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      review: "MRANABOLIC supplements completely transformed my physique! In just 3 months, I gained 8kg of pure muscle. Their guidance is top-notch! 💪",
      achievement: "Lost 15kg body fat",
      verified: true
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Delhi, India",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      review: "Best decision ever! The supplement stack recommended by MRANABOLIC helped me achieve my dream body. Energy levels are through the roof! 🔥",
      achievement: "Gained 6kg muscle",
      verified: true
    },
    {
      id: 3,
      name: "Amit Kumar",
      location: "Bangalore, India",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4.5,
      review: "Incredible results! My recovery time has reduced significantly. The community support on Reddit is amazing. Highly recommended!",
      achievement: "Increased bench press by 50kg",
      verified: true
    },
    {
      id: 4,
      name: "Neha Singh",
      location: "Pune, India",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      review: "Finally found a brand that cares about real results. Their science-backed approach and transparency is what I love the most!",
      achievement: "Transformed from skinny to fit",
      verified: true
    },
    {
      id: 5,
      name: "Vikram Rathore",
      location: "Jaipur, India",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      review: "The before/after transformation speaks for itself. MRANABOLIC changed my life completely. Best investment in my health ever!",
      achievement: "Lost 20kg in 6 months",
      verified: true
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % customers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + customers.length) % customers.length);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star filled" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half" />);
    }
    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} className="star empty" />);
    }
    return stars;
  };

  return (
    <section className="customer-slider">
      <div className="container">
        <div className="slider-header">
          <h2 className="slider-title">
            <span className="title-emoji">💪</span>
            Happy Customers
            <span className="title-emoji">🏆</span>
          </h2>
          <p className="slider-subtitle">Join 10,000+ satisfied customers who transformed their lives</p>
        </div>

        <div className="slider-container">
          <button className="slider-nav prev-btn" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="slider-track">
            <div 
              className="slider-slides"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {customers.map((customer, idx) => (
                <div className="slide" key={customer.id}>
                  <div className="review-card">
                    <FaQuoteLeft className="quote-icon" />
                    
                    <div className="customer-profile">
                      <div className="profile-image">
                        <img src={customer.image} alt={customer.name} />
                        {customer.verified && <MdVerified className="verified-badge" />}
                      </div>
                      <div className="customer-info">
                        <h4>{customer.name}</h4>
                        <p className="location">{customer.location}</p>
                        <div className="rating">
                          {renderStars(customer.rating)}
                          <span className="rating-value">{customer.rating}</span>
                        </div>
                      </div>
                    </div>

                    <p className="review-text">"{customer.review}"</p>
                    
                    <div className="achievement">
                      <span className="achievement-badge">🏆 {customer.achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-nav next-btn" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="slider-stats">
          <div className="stat">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Cities</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Natural Results</span>
          </div>
        </div>

        <div className="dots-container">
          {customers.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSlider;