import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Spirituality.css';

const masjidItems = [
  { title: 'Jama Masjid', image: 'https://images.unsplash.com/photo-1592578629295-73a151d69c96?w=500&h=400&fit=crop', description: 'Grand mosque with elegant minarets and peaceful prayer halls for spiritual reflection.', link: '#' },
  { title: 'Masjid-e-Azam', image: 'https://images.unsplash.com/photo-1566926136287-5251b7a65eab?w=500&h=400&fit=crop', description: 'Historical mosque showcasing beautiful Indo-Islamic architecture and serene ambiance.', link: '#' },
  { title: 'Islamic Heritage Centre', image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=500&h=400&fit=crop', description: 'A center for spiritual learning, community gatherings, and cultural exchange.', link: '#' }
];

const Masjids = () => {
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
        <title>Masjids in East Godavari | East Godavari Tourism</title>
        <meta name="description" content="Experience the peaceful ambiance of East Godavari's mosques - tranquil abodes of prayer." />
      </Helmet>

      {/* Hero Section */}
      <section className="spirituality-hero masjids-hero">
        <div className="spirituality-hero-bg"></div>
        <div className="spirituality-hero-overlay"></div>
        <div className="container">
          <div className="spirituality-hero-content">
            <div className="spirituality-hero-badge fade-in">
              <span>🕌</span> Masjids
            </div>
            <h1 className="fade-in">
              Tranquil <span className="hero-highlight" style={{ background: 'linear-gradient(135deg, #2E8B57, #66BB6A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Abodes of Prayer</span>
            </h1>
            <div className="spirituality-quote fade-in">
              <div className="quote-mark quote-mark-top" style={{ color: '#ca5a0a', opacity: 0.3 }}>"</div>
              <p className="quote-text">
                Experience the peaceful ambiance of East Godavari\'s mosques, where Islamic architecture and spiritual devotion create an atmosphere of serenity and reflection.
              </p>
              <div className="quote-mark quote-mark-bottom" style={{ color: '#ca5a0a', opacity: 0.3 }}>"</div>
            </div>
            <Link to="/spirituality" className="spirituality-back-link fade-in" style={{ color: '#ca5a0a' }}>
              ← Back to Spirituality
            </Link>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="spirituality-items-section" style={{ background: '#F0FFF4' }}>
        <div className="container">
          <div className="spirituality-items-header fade-in">
            <h2>Explore Masjids</h2>
            <p>Discover the peaceful mosques that reflect the rich Islamic heritage of East Godavari</p>
          </div>
          <div className="spirituality-items-grid">
            {masjidItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="spirituality-subcategory-card fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="spirituality-card-image-wrapper">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="spirituality-card-image-overlay"></div>
                  <span className="spirituality-card-badge" style={{ color: '#2E8B57' }}>Masjid</span>
                </div>
                <div className="spirituality-subcategory-card-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="spirituality-card-explore-btn" style={{ background: 'linear-gradient(135deg, #2E8B57, #66BB6A)' }}>
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

export default Masjids;