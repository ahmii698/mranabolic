import React from 'react';
import { FaRedditAlien, FaTiktok, FaTelegramPlane, FaCommentDots } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import './SocialLinks.css';

const SocialLinks = () => {
  const links = [
    {
      name: 'Reddit Community',
      url: 'https://www.reddit.com/r/MRANABOLIC/s/Vk8oKJzhzf',
      icon: <FaRedditAlien className="social-icon reddit" />,
      color: '#FF4500',
    },
    {
      name: 'Zangi',
      url: 'https://services.zangi.com/dl/conversation/1018398057',
      icon: <FaCommentDots className="social-icon zangi" />,
      color: '#00A8E8',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@mranabolicuk?_r=1&_t=ZN-96FKog9LNEk',
      icon: <FaTiktok className="social-icon tiktok" />,
      color: '#000000',
    }
  ];

  return (
    <section className="social-section">
      <div className="container">
        <h2 className="section-title">Join Our Community</h2>
        <p className="social-subtitle">Connect with thousands of fitness enthusiasts</p>
        <div className="links-container">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ '--hover-color': link.color }}
            >
              <span className="link-icon">{link.icon}</span>
              <span className="link-name">{link.name}</span>
             
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;