import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './PlanTrip.css';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const PlanTrip = () => {
  const menuItems = useMemo(() => [
    {
      title: 'Tourist Information Centers',
      link: '/all-tourist-offices',
      description: 'Find tourist information centers across East Godavari',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#00acc1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="9" r="2.5" stroke="#00acc1" strokeWidth="2"/>
          <path d="M9 21c0-1.5 1.5-3 3-3s3 1.5 3 3" stroke="#00acc1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #e0f7f9 0%, #b2ebf2 100%)',
      color: '#00acc1',
      colorLight: '#00838f'
    },
    {
      title: 'How to Reach',
      link: '/how-to-reach',
      description: 'Transportation options to reach East Godavari',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 7v6c0 5.25 3.75 10.15 8 11 4.25-.85 8-5.75 8-11V7l-8-5z" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="#ff9800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
      color: '#ff9800',
      colorLight: '#f57c00'
    },
    {
      title: 'Maps',
      link: '/east-godavari-map',
      description: 'Interactive maps and route guides',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" stroke="#9c27b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
      color: '#9c27b0',
      colorLight: '#7b1fa2'
    },
    {
      title: 'Emergency Contact',
      link: '/contact',
      description: '24/7 emergency helpline numbers',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#f44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)',
      color: '#f44336',
      colorLight: '#d32f2f'
    },
    {
      title: 'Where to Stay',
      link: '/living-facilities',
      description: 'Hotels, resorts and accommodation options',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
      color: '#4caf50',
      colorLight: '#388e3c'
    },
    {
      title: 'Tour Guide',
      link: '/all-tour-guides',
      description: 'Professional tour guides for your journey',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#2196f3" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="7" r="4" stroke="#2196f3" strokeWidth="2"/>
          <path d="M12 11v4m-2-2h4" stroke="#2196f3" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
      color: '#2196f3',
      colorLight: '#1976d2'
    },
  ], []);

  return (
    <div className="plan-trip-page">
      {/* Hero Section */}
      <section className="plan-trip-hero">
        <div className="plan-trip-hero-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="plan-trip-hero-particle" style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
            }} />
          ))}
        </div>

        <div className="plan-trip-hero-content">
          <div className="plan-trip-hero-badge">
            <span>✈️</span>
            <span>Travel Smart</span>
          </div>
          <h1>Plan Your Journey</h1>
          <p>Everything you need for your East Godavari adventure</p>
        </div>
      </section>

      <div className="container">
        {/* Travel Essentials Section */}
        <section className="travel-essentials-section">
          <div className="essentials-header">
            <div className="essentials-badge">Travel Essentials</div>
            <h2>Everything You Need</h2>
            <p>Plan your perfect trip with our comprehensive travel services</p>
          </div>

          {/* Menu Grid */}
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="menu-card"
                style={{
                  '--card-color': item.color,
                  '--card-color-light': item.colorLight,
                  '--card-gradient': item.gradient,
                }}
              >
                <div className="menu-card-bg">
                  <div className="menu-icon-wrapper">
                    {item.icon}
                  </div>
                </div>
                <div className="menu-card-content">
                  <h3 className="menu-card-title">{item.title}</h3>
                  <p className="menu-card-description">{item.description}</p>
                  <div className="menu-card-button" style={{ background: item.color }}>
                    Explore <ArrowIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlanTrip;