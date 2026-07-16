
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { experienceCategories } from '../data/content';
import './ExperiencesPage.css';

const ExperiencesPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl || 'responsible-tourism');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const observerRef = useRef(null);
  const categoryRefs = useRef({});
  const videoRef = useRef(null);

  // Memoized tab click handler
  const handleTabClick = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  // Create subcategory card
  const createSubcategoryCard = useCallback((item, index, categoryKey) => (
    <Link
      key={`${categoryKey}-${index}`} 
      to={`/experience/${categoryKey}/${index}`}
      className="subcategory-card fade-in" 
      id={`card-${categoryKey}-${index}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="card-image-wrapper">
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="card-image-overlay"></div>
        <span className="card-badge">Discover</span>
      </div>
      <div className="subcategory-card-content">
       
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        {item.location && <p className="card-location">{item.location}</p>}
      </div>
      <div className="card-explore-btn">
        <span>Explore</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  ), []);


  // Initialize intersection observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeCategory]);

  // Track video load
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoad = () => setVideoLoaded(true);
      video.addEventListener('loadeddata', handleLoad);
      return () => video.removeEventListener('loadeddata', handleLoad);
    }
  }, []);

  // Auto-scroll to category section when category changes or page loads
  useEffect(() => {
    if (categoryFromUrl && categoryRefs.current[categoryFromUrl]) {
      setTimeout(() => {
        categoryRefs.current[categoryFromUrl].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [categoryFromUrl, activeCategory]);

  return (
    <div className="experiences-page">
      {/* ===== STUNNING VIDEO HERO SECTION ===== */}
      <section className="hero">
        {/* Video Background */}
        <video 
          ref={videoRef}
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/header.jpg"
        >
          <source src="/experience.mp4" type="video/mp4" />
          <source src="/godavari.mp4" type="video/mp4" />
          <source src="/pushkaralu.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="hero-overlay"></div>

        {/* Animated decorative elements */}
        <div className="hero-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="hero-particle" style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }} />
          ))}
        </div>

        {/* Hero Content */}
        <div className={`hero-content ${videoLoaded ? 'hero-content-visible' : ''}`}>
          <div className="hero-subtitle-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>East Godavari Tourism</span>
          </div>
          <h1>Unforgettable Experiences</h1>
          <p>Discover the magic of East Godavari through immersive journeys that stay with you forever</p>
          
          
        </div>
      </section>

      {/* ===== CATEGORIES SECTION ===== */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label">Explore By Category</div>
            <h2>Choose Your <span className="text-gradient">Experience</span></h2>
            <p>Discover unique adventures across Responsible Tourism, Arts & Culture, Cuisine, and Eco Tourism</p>
          </div>
          <div className="nav-tabs-wrapper">
            <div className="nav-tabs">
              {Object.entries(experienceCategories).map(([key, category]) => (
                <button
                  key={key}
                  className={`nav-tab ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => handleTabClick(key)}
                  type="button"
                >
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {key === 'responsible-tourism' && (
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    )}
                    {key === 'eco-tourism' && (
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    )}
                    {key === 'artforms' && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                      </>
                    )}
                    {key === 'cuisine' && (
                      <>
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                        <line x1="6" y1="1" x2="6" y2="4" />
                        <line x1="10" y1="1" x2="10" y2="4" />
                        <line x1="14" y1="1" x2="14" y2="4" />
                      </>
                    )}
                  </svg>
                  <span className="nav-tab-text">{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY CONTENT SECTIONS ===== */}
      {Object.entries(experienceCategories).map(([key, category]) => (
        <section
          key={key}
          id={key}
          ref={(el) => (categoryRefs.current[key] = el)}
          className={`category-section ${activeCategory === key ? 'active' : ''}`}
        >
          <div className="container">
            <div className="section-header fade-in" id={`header-${key}`}>
              <div className="section-label">{category.subtitle || 'Curated Collection'}</div>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
            <div className="subcategories">
              {category.items.map((item, index) => createSubcategoryCard(item, index, key))}
            </div>
          </div>
        </section>
      ))}

     
      {/* ===== FEATURED CTA SECTION ===== */}
      
    </div>
  );
};

export default ExperiencesPage;