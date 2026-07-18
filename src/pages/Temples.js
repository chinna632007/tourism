import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import exploreKotipalliTemple from '../assets/images/explore-kotipalli-temple.jpg';
import exploreRamanayuniTemple from '../assets/images/explore-ramanayuni-temple.jpg';
import exploreKorukondaTemple from '../assets/images/explore-korukonda-temple.jpg';
import exploreKakindaRamalayam from '../assets/images/explore-kakinda-ramalayam.jpg';
import exploreVinayakaTemple from '../assets/images/explore-vinayaka-temple.jpg';
import exploreDeviChowk from '../assets/images/spirituality-devichowk.webp';

import './Spirituality.css';

const templeItems = [
  { title: 'Mahakaleshwar Temple', image: exploreKotipalliTemple, description: 'Ancient temple by the river banks, offering a serene spiritual experience.', link: '/destination-page/31' },
  { title: 'Ramanayuni Temple', image: exploreRamanayuniTemple, description: 'Sacred shrine with rich heritage and divine architecture.', link: '/destination-page/32' },
  { title: 'Korukonda Temple', image: exploreKorukondaTemple, description: 'Hilltop temple with panoramic views and spiritual ambiance.', link: '/destination-page/33' },
  { title: 'Mamidada Ramalayam', image: exploreKakindaRamalayam, description: 'Divine temple dedicated to Lord Rama, a beacon of faith.', link: '/destination-page/34' },
  { title: 'Vinayaka Temple', image: exploreVinayakaTemple, description: 'Temple dedicated to Lord Ganesha, the remover of obstacles.', link: '/destination-page/35' },
  { title: 'Devi Chowk Mandir', image: exploreDeviChowk, description: 'Sacred temple dedicated to the goddess', link: '/destination-page/42' }
];

const Temples = () => {
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
        <title>Temples in East Godavari | East Godavari Tourism</title>
        <meta name="description" content="Explore the ancient temples of East Godavari - Kotipalli, Ramanayuni, Korukonda, Kakinada Ramalayam and more." />
      </Helmet>

      {/* Hero Section */}
     

      {/* Cards Section - Matching Experiences Page Style */}
      <section className="spirituality-items-section" style={{ background: '#FFF5EB' }}>
        <div className="container">
          <div className="spirituality-items-header fade-in">
            <h2>Explore Temples</h2>
            <p>Discover the divine temples that showcase the rich spiritual heritage of East Godavari</p>
          </div>
          <div className="spirituality-items-grid">
            {templeItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="spirituality-subcategory-card fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="spirituality-card-image-wrapper">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="spirituality-card-image-overlay"></div>
                  <span className="spirituality-card-badge" style={{ color: '#FF6B35' }}>Temple</span>
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

export default Temples;