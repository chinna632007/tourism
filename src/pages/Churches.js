import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Spirituality.css';

const churchItems = [
  { title: 'St. Ann\'s Church', image: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=500&h=400&fit=crop', description: 'Historic church known for its stunning Gothic architecture and peaceful ambiance.', link: '#' },
  { title: 'CSI Church Kakinada', image: 'https://images.unsplash.com/photo-1548624313-0396c75f6b1a?w=500&h=400&fit=crop', description: 'One of the oldest churches in the region with beautiful stained glass windows.', link: '#' },
  { title: 'St. Peter\'s Basilica', image: 'https://images.unsplash.com/photo-1601830632759-5a9d1c8efff5?w=500&h=400&fit=crop', description: 'A magnificent place of worship with rich spiritual traditions and serene surroundings.', link: '#' }
];

const Churches = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    fadeElements.forEach((el) => observer.observe(el));
    const fallbackTimer = setTimeout(() => {
      fadeElements.forEach((el) => el.classList.add('visible'));
    }, 500);
    return () => { clearTimeout(fallbackTimer); observer.disconnect(); };
  }, []);

  return (
    <div className="spirituality-page">
      <Helmet>
        <title>Churches in East Godavari | East Godavari Tourism</title>
        <meta name="description" content="Discover the beautiful churches of East Godavari - historic sanctuaries of peace and grace." />
      </Helmet>

      {/* Hero Section */}
      <section className="spirituality-hero churches-hero">
        <div className="spirituality-hero-bg"></div>
        <div className="spirituality-hero-overlay"></div>
        <div className="container">
          <div className="spirituality-hero-content">
            <div className="spirituality-hero-badge fade-in">
              <span>⛪</span> Churches
            </div>
            <h1 className="fade-in">
              Havens of <span className="hero-highlight" style={{ background: 'linear-gradient(135deg, #4A90D9, #7BB3E0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Peace & Grace</span>
            </h1>
            <div className="spirituality-quote fade-in">
              <div className="quote-mark quote-mark-top" style={{ color: '#4A90D9', opacity: 0.3 }}>"</div>
              <p className="quote-text">
                Discover the beautiful churches of East Godavari, where stunning architecture and peaceful sanctuaries offer solace to the soul. A testament to the region's rich Christian heritage.
              </p>
              <div className="quote-mark quote-mark-bottom" style={{ color: '#4A90D9', opacity: 0.3 }}>"</div>
            </div>
            <Link to="/spirituality" className="spirituality-back-link fade-in" style={{ color: '#4A90D9' }}>
              ← Back to Spirituality
            </Link>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="spirituality-items-section" style={{ background: '#EBF5FF' }}>
        <div className="container">
          <div className="spirituality-items-header fade-in">
            <h2>Explore Churches</h2>
            <p>Discover the beautiful churches that showcase the rich Christian heritage of East Godavari</p>
          </div>
          <div className="spirituality-items-grid">
            {churchItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="spirituality-subcategory-card fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="spirituality-card-image-wrapper">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="spirituality-card-image-overlay"></div>
                  <span className="spirituality-card-badge" style={{ color: '#4A90D9' }}>Church</span>
                </div>
                <div className="spirituality-subcategory-card-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="spirituality-card-explore-btn">
                  <span>Explore</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Churches;