import React from 'react';
import { Link } from 'react-router-dom';

const WhereToGo = () => {
  return (
    <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh', background: '#f5f5f5' }}>
      <div className="container" style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, #FF9D00 0%, #FF6B00 100%)',
          padding: '3rem',
          borderRadius: '16px',
          boxShadow: '0 4px 15px rgba(255, 157, 0, 0.3)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontFamily: 'Georgia, serif',
            color: 'white',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Explore Destinations
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.95)',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            Discover the beauty and diversity of East Godavari. From pristine beaches to majestic hills, 
            ancient temples to vibrant cities, explore our curated collection of destinations.
          </p>
          <Link
            to="/destinations"
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#FF6B00',
              padding: '1rem 2.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhereToGo;
