import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-decoration" style={{ width: '600px', height: '600px', top: '-10%', left: '-5%' }}></div>
        <div className="contact-hero-decoration" style={{ width: '400px', height: '400px', bottom: '-5%', right: '-5%' }}></div>

        <div className="contact-hero-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="contact-hero-particle" style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
            }} />
          ))}
        </div>

        <div className="contact-hero-content">
          <div className="contact-hero-badge">
            <span>📞</span>
            <span>East Godavari Tourism</span>
          </div>
          <h1>Get In Touch</h1>
          <p>We're here to assist you with any questions or concerns about your East Godavari tourism experience</p>
        </div>
      </section>

      <div className="container">
        {/* Emergency Contacts Section */}
        <section className="contact-section">
          <div className="section-header-modern">
            <div className="section-badge">Immediate Assistance</div>
            <h2>Emergency Contacts</h2>
            <p>Get in touch with the Department of Tourism, East Godavari</p>
          </div>

          <div className="emergency-cards-container">
            <div className="emergency-card">
              <div className="emergency-card-icon">🚨</div>
              <h3>Police Service</h3>
              <p>Emergency Response</p>
              <div className="emergency-card-numbers">
                <a href="tel:100">100</a>
                <a href="tel:112">112</a>
              </div>
            </div>

            <div className="emergency-card">
              <div className="emergency-card-icon">🚑</div>
              <h3>Ambulance</h3>
              <p>Medical Emergency</p>
              <div className="emergency-card-numbers">
                <a href="tel:102">102</a>
                <a href="tel:108">108</a>
              </div>
            </div>

            <div className="emergency-card">
              <div className="emergency-card-icon">🚒</div>
              <h3>Fire Service</h3>
              <p>Fire Emergency</p>
              <div className="emergency-card-numbers">
                <a href="tel:101">101</a>
              </div>
            </div>

            <div className="emergency-card">
              <div className="emergency-card-icon">ℹ️</div>
              <h3>Tourist Helpline</h3>
              <p>Tourist Assistance</p>
              <div className="emergency-card-numbers">
                <a href="tel:1313">1313</a>
              </div>
            </div>
          </div>
        </section>

        {/* Department Info Section */}
        <section className="contact-section">
          <div className="section-header-modern">
            <div className="section-badge">About Us</div>
            <h2>Department of East Godavari Tourism</h2>
            <p>Your gateway to exploring the Land of Riches</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <div className="card-icon-wrapper"></div>
              <h3>Head Office</h3>
              <p>
                <strong>Department of Tourism</strong><br />
                Government of East Godavari<br />
                Tourism Bhavan, Kakinada<br />
                East Godavari District, Andhra Pradesh
              </p>
            </div>

            <div className="contact-info-card">
              <div className="card-icon-wrapper">📞</div>
              <h3>Contact Information</h3>
              <p>
                <strong>Phone:</strong> <a href="tel:+919988776600">+91 99887 76600</a><br />
                <strong>Email:</strong> <a href="mailto:info@eastgodavaritourism.com">info@eastgodavaritourism.com</a><br />
                <strong>Helpline:</strong> <a href="tel:1313">1313</a> (Toll Free)<br />
                <strong>Working Hours:</strong> 9:00 AM - 5:30 PM (Mon-Sat)
              </p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="back-button-container">
          <Link to="/" className="back-button">
            <ArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;