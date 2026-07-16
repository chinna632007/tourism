import React from 'react';
import { Link } from 'react-router-dom';
import './PlanTrip.css';

const transportOptions = [
  {
    mode: 'air',
    title: 'By Air',
    icon: '✈️',
    gradient: 'linear-gradient(135deg, #e0f7f9 0%, #b2ebf2 100%)',
    color: '#00acc1',
    airport: 'Rajahmundry Airport (RJY)',
    description: 'Domestic airport with flights from Hyderabad, Chennai, Bangalore, and Delhi. Located 18 km from city center.',
    link: 'https://www.goibibo.com/flights/'
  },
  {
    mode: 'train',
    title: 'By Train',
    icon: '🚂',
    gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
    color: '#ff9800',
    stations: ['Rajahmundry Railway Station', 'Kakinada Railway Station'],
    description: 'Well-connected to major cities via Indian Railways. Regular express and superfast trains available.',
    link: 'https://www.irctc.co.in'
  },
  {
    mode: 'road',
    title: 'By Road',
    icon: '🚗',
    gradient: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
    color: '#9c27b0',
    highways: ['NH-16 (Chennai to Kolkata)', 'NH-216 (Rajahmundry to Kakinada)'],
    description: 'Excellent road connectivity with regular bus services from APTS and TSRTC.',
    link: 'https://www.google.com/maps/dir/?api=1&destination=East+Godavari,+Andhra+Pradesh'
  },
{
    mode: 'bus',
    title: 'By Bus',
    icon: '🚌',
    gradient: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
    color: '#4caf50',
    services: ['APRTC', 'TSRTC', 'Private Bus Operators'],
    description: 'Regular bus services available from major cities across India.',
    link: 'https://www.apsrtc.ap.gov.in'
  }
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const HowToReach = () => {
  return (
    <div style={{ 
      paddingTop: '120px', 
      minHeight: '100vh', 
      background: 'linear-gradient(180deg, #f8fbfd 0%, #e8eaf6 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Hero Banner - Reduced Height */}
      <div style={{
        background: 'linear-gradient(135deg, #1a6b7a 0%, #00897b 100%)',
        borderRadius: '0 0 30px 30px',
        padding: '1.5rem 1rem 3rem',
        marginBottom: '2rem'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2rem',
            fontFamily: 'Georgia, serif',
            fontWeight: '800',
            marginBottom: '0.3rem',
            color: 'white'
          }}>
            ✈️ How to Reach
          </h1>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '550px',
            margin: '0 auto'
          }}>
            Transportation guide for East Godavari
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '0 1rem 2rem' }}>
        {/* Back Button */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/plan-trip" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.6rem 1.3rem',
            background: 'white',
            color: '#1a6b7a',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '600',
            boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e0e0e0'
          }}>
            ‹ Back to Plan Trip
          </Link>
        </div>

        {/* East Godavari District Section */}
        <div style={{ marginBottom: '2.5rem', maxWidth: '900px', marginLeft: 0 }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontFamily: 'Georgia, serif',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#1a6b7a',
            textAlign: 'left'
          }}>
            Discover East Godavari District
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: '#555',
            lineHeight: '1.7',
            textAlign: 'left'
          }}>
            East Godavari District, nestled in the fertile delta of the Godavari River, is a treasure trove of natural beauty and cultural heritage. The district boasts of expansive paddy fields that create a picturesque landscape, pristine coconut groves, and beautiful riverine ecosystems. Kakinada, the major port city, offers stunning beaches while Rajahmundry serves as the cultural heart with its historic temples and the famous Godavari River bridge. The region is known for its traditional crafts, especially the intricate Kondapalli toys and handloom textiles. Agriculture thrives here with paddy, coconut, and sugarcane as major crops, making it the rice bowl of Andhra Pradesh. The Coconut Research Institute at Kadiyam adds scientific importance to the district. Local cuisine features distinctive dishes like Pesarattu, Gongura Pachadi, and fresh seafood delicacies. The people are known for their warm hospitality and vibrant festivals celebrated with great fervor throughout the year.
          </p>
        </div>

        {/* Transportation Options Heading */}
        <div style={{ marginBottom: '1.5rem', maxWidth: '1200px', marginLeft: 0 }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontFamily: 'Georgia, serif',
            fontWeight: '600',
            marginBottom: '0.5rem',
            color: '#1a6b7a',
            textAlign: 'left'
          }}>
            Transportation Options
          </h2>
        </div>

        {/* Transportation Options Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {transportOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              }}
            >
              <div
                style={{
                  background: option.gradient,
                  borderRadius: '16px',
                  padding: '1.8rem',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '250px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.1)'
                }}>
                  {option.icon}
                </div>

                <h3 style={{
                  fontSize: '1.2rem',
                  fontFamily: 'Georgia, serif',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '0.5rem'
                }}>
                  {option.title}
                </h3>
                
<div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem'
                }}>
                  {option.airport && (
                    <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem', color: option.color }}>
                      {option.airport}
                    </p>
                  )}
                  {option.stations && option.stations.map((station, i) => (
                    <p key={i} style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>
                      • {station}
                    </p>
                  ))}
                  {option.highways && option.highways.map((hw, i) => (
                    <p key={i} style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>
                      • {hw}
                    </p>
                  ))}
                  {option.services && option.services.map((svc, i) => (
                    <p key={i} style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>
                      • {svc}
                    </p>
                  ))}
                </div>
                </div>
              </a>
          ))}
        </div>

        {/* YouTube Video Section */}
        <div style={{
          marginTop: '3rem',
          marginBottom: '2rem',
          maxWidth: '1200px',
          marginLeft: 0
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontFamily: 'Georgia, serif',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#1a6b7a',
            textAlign: 'left'
          }}>
            Watch: How to Reach East Godavari
          </h2>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
          }}>
<iframe
              src="https://www.youtube.com/embed/X0Lg9E0Z0kA"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allowFullScreen
              title="How to Reach East Godavari"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToReach;