import React from 'react';
import { Link } from 'react-router-dom';

const Rajahmundry = () => {
  const services = [
    {
      id: 1,
      title: 'Tourist Guides',
      icon: '👤',
      description: 'Professional licensed tourist guides available for sightseeing and trekking',
      contact: '+91 4865 230 456',
      email: 'guides.rajahmundry@east-godavaritourism.org',
      timing: '8:00 AM - 6:00 PM'
    },
    {
      id: 2,
      title: 'Tourist Office',
      icon: '🏢',
      description: 'Official East Godavari Tourism information center for Rajahmundry region',
      contact: '+91 4865 230 123',
      email: 'info.rajahmundry@east-godavaritourism.org',
      timing: '9:00 AM - 5:00 PM'
    },
    {
      id: 3,
      title: 'Police Services',
      icon: '👮',
      description: 'Tourist police station for assistance and security',
      contact: '100 / +91 4865 232 100',
      email: 'police.rajahmundry@east-godavari.gov.in',
      timing: '24 Hours'
    },
    {
      id: 4,
      title: 'Health Services',
      icon: '🏥',
      description: 'Government hospital and emergency medical services',
      contact: '108 / +91 4865 232 108',
      email: 'health.rajahmundry@east-godavari.gov.in',
      timing: '24 Hours Emergency'
    }
  ];

  return (
    <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh', background: '#f5f5f5' }}>
      <div className="container" style={{ padding: '3rem 1rem' }}>
        <Link to="/" style={{
          display:'inline-flex',
          alignItems:'center',
          gap:'0.5rem',
          padding:'0.75rem 1.5rem',
          border:'2px solid #333',
          borderRadius:'25px',
          textDecoration:'none',
          color:'#333',
          fontSize:'14px',
          fontWeight:'500',
          marginBottom:'2rem',
          background:'white'
        }}>
          ‹ Back
        </Link>

        <div style={{
          background:'white',
          padding:'50px',
          borderRadius:'8px',
          boxShadow:'0 2px 8px rgba(0,0,0,0.1)',
          marginBottom:'3rem',
          maxWidth:'87%',
          marginLeft:'auto',
          marginRight:'auto',
          textAlign:'center'
        }}>
          <h2 style={{
            fontSize:'2rem',
            fontFamily:'Georgia, serif',
            fontWeight:'600',
            marginBottom:'1rem',
            color:'#333'
          }}>
            Rajahmundry Tourism Services
          </h2>
          <p style={{
            fontSize:'16px',
            lineHeight:'1.8',
            color:'#666',
            marginBottom:'1.5rem'
          }}>
            Essential services and contact information for tourists visiting Rajahmundry
          </p>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',
          gap:'2rem'
        }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{
                position:'relative',
                borderRadius:'8px',
                overflow:'hidden',
                height:'350px',
                boxShadow:'0 4px 12px rgba(0,0,0,0.1)',
                transition:'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                background: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                position:'absolute',
                top:0,
                left:0,
                right:0,
                bottom:0,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                color: 'white'
              }}>
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1rem'
                }}>
                  {service.icon}
                </div>
                
                <h3 style={{
                  fontSize: '1.75rem',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '1rem',
                  fontWeight: '500',
                  textAlign: 'center'
                }}>
                  {service.title}
                </h3>
                
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  opacity: '0.95'
                }}>
                  {service.description}
                </p>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  padding: '1rem',
                  borderRadius: '8px',
                  width: '100%'
                }}>
                  <p style={{ margin: '0.4rem 0', fontSize: '0.9rem' }}>
                    <strong>📞 Contact:</strong> {service.contact}
                  </p>
                  <p style={{ margin: '0.4rem 0', fontSize: '0.9rem' }}>
                    <strong>✉️ Email:</strong> {service.email}
                  </p>
                  <p style={{ margin: '0.4rem 0', fontSize: '0.9rem' }}>
                    <strong>🕐 Timing:</strong> {service.timing}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          marginTop: '3rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontFamily: 'Georgia, serif',
            color: '#333',
            marginBottom: '1rem'
          }}>
            Important Information
          </h3>
          <ul style={{
            lineHeight: '1.8',
            color: '#4F5051',
            paddingLeft: '1.5rem'
          }}>
            <li>Carry valid ID proof at all times</li>
            <li>Save emergency numbers in your phone before exploring</li>
            <li>Tourist guides are recommended for trekking and wildlife visits</li>
            <li>Keep the tourist office informed about your travel plans</li>
            <li>In case of emergency, dial 112 for immediate assistance</li>
          </ul>
        </div>

        {/* Back Button */}
        <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF9D00 0%, #FF6B00 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            ← Back to Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rajahmundry;