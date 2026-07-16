import React from 'react';
import { Link } from 'react-router-dom';

const EastGodavariMap = () => {
  return (
    <div style={{ 
      paddingTop: '120px', 
      minHeight: '100vh', 
      background: 'linear-gradient(180deg, #f8fbfd 0%, #e8eaf6 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
        borderRadius: '0 0 20px 20px',
        padding: '1.5rem 1rem 2.5rem',
        marginBottom: '1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '-30px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-30px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)'
        }}></div>
        
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontFamily: 'Georgia, serif',
            fontWeight: '800',
            marginBottom: '0.5rem',
            color: 'white',
            letterSpacing: '-1px'
          }}>
            🗺️ Explore East Godavari
          </h1>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            Interactive map showing all major destinations, temples, and tourist attractions
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '0 1rem 3rem' }}>
        {/* Map Card */}
        <div style={{
          background: 'white',
          borderRadius: '28px',
          padding: '2.5rem',
          boxShadow: '0 20px 50px rgba(156, 39, 176, 0.15)',
          border: '1px solid rgba(255,255,255,0.6)',
          position: 'relative',
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          {/* Top Accent Bar */}
          <div style={{
            height: '6px',
            background: 'linear-gradient(90deg, #9c27b0 0%, #673ab7 100%)',
            borderRadius: '3px',
            marginBottom: '2rem'
          }}></div>

          {/* Map Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              flexShrink: 0
            }}>
              📍
            </div>
            <div>
              <h2 style={{
                fontSize: '2rem',
                fontFamily: 'Georgia, serif',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '0.25rem'
              }}>
                East Godavari District Map
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Complete interactive map showing all major destinations, temples, beaches, and tourist attractions
              </p>
            </div>
          </div>

          {/* Embedded Map */}
          <div style={{
            width: '100%',
            height: '600px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            marginBottom: '2rem'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122129.67085908364!2d81.7167!3d17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395d3341b2b5c1%3A0x81b4b8c4c4c4c4c4!2sEast%20Godavari%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="East Godavari District Map"
            />
          </div>

          {/* Map Legend */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '2rem'
          }}>
            {[
              { icon: '🏛️', title: 'Temples' },
              { icon: '🏖️', title: 'Beaches' },
              { icon: '🌳', title: 'Parks' },
              { icon: '🏨', title: 'Hotels' }
            ].map((item, index) => (
              <div key={index} style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '1px solid #e0e0e8'
              }}>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <span style={{ fontWeight: '600', color: '#333' }}>{item.title}</span>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/plan-trip" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
              color: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 8px 25px rgba(156, 39, 176, 0.3)',
              transition: 'all 0.3s ease'
            }}>
              ‹ Back to Plan Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EastGodavariMap;