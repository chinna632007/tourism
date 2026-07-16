import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Spirituality.css';

const categories = [
  {
    id: 'temples',
    title: 'Temples',
    icon: '🛕',
    color: '#FF6B35',
    bgColor: '#FFF5EB',
    description: 'Explore the ancient temples of East Godavari, where centuries-old architecture meets spiritual serenity.',
    link: '/spirituality/temples'
  },
  {
    id: 'churches',
    title: 'Churches',
    icon: '⛪',
    color: '#4A90D9',
    bgColor: '#EBF5FF',
    description: 'Discover the beautiful churches of East Godavari, where stunning architecture and peaceful sanctuaries offer solace to the soul.',
    link: '/spirituality/churches'
  },
  {
    id: 'masjids',
    title: 'Masjids',
    icon: '🕌',
    color: '#2E8B57',
    bgColor: '#F0FFF4',
    description: 'Experience the peaceful ambiance of East Godavari\'s mosques, where Islamic architecture and spiritual devotion create an atmosphere of serenity.',
    link: '/spirituality/masjids'
  }
];

const Spirituality = () => {
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

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="spirituality-page">
      <Helmet>
        <title>Spirituality in East Godavari - Temples, Churches & Mosques | East Godavari Tourism</title>
        <meta name="description" content="Explore the spiritual heritage of East Godavari - ancient temples, serene churches, and peaceful mosques that reflect the region's diverse religious harmony." />
      </Helmet>

      {/* Hero Section */}
      <section className="spirituality-hero">
        <div className="hero-video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/header.jpg"
            preload="metadata"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source src="/spirit.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="spirituality-hero-overlay"></div>
        <div className="hero-content">
          <div className="container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className="hero-content-inner">
              <div className="hero-content-body">
                <hr aria-orientation="vertical" className="hero-divider" />
                <h6 className="hero-category">Spiritual Journey</h6>
                <h1 className="hero-title">
                  Discover the Divine
                  <span className="hero-highlight"> Soul of East Godavari</span>
                </h1>
                <p className="hero-description">
                  Explore ancient temples, serene churches, and peaceful mosques in East Godavari.
                </p>
                <Link to="/destinations" className="hero-btn">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="spirituality-categories-section">
        <div className="container">
          <h2 className="section-heading fade-in">Choose Your Path</h2>
          <p className="section-subheading fade-in">Click on a category to explore its sacred places</p>
          <div className="spirituality-categories-grid">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.link}
                className="spirituality-category-card fade-in"
                style={{ 
                  '--cat-color': cat.color,
                  '--cat-bg': cat.bgColor
                }}
              >
                <div className="spirituality-category-card-image" style={{ background: cat.bgColor }}>
                  <span className="spirituality-category-icon">{cat.icon}</span>
                </div>
                <div className="spirituality-category-card-content">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                  <span className="spirituality-category-card-btn" style={{ color: cat.color }}>
                    Explore {cat.title} <span className="arrow">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Spirituality;