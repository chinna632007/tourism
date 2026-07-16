import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { hospitalityServices } from '../data/content';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = hospitalityServices[id];

  if (!service) {
    return (
      <div className="page-container" style={{paddingTop:'120px',textAlign:'center'}}>
        <h2>Service not found</h2>
        <Link to="/destinations">Back to Destinations</Link>
      </div>
    );
  }

  return (
    <div className="page-container" style={{paddingTop:'0',minHeight:'100vh'}}>
      {/* Hero Section */}
      <div style={{position:'relative',width:'100%',height:'600px',overflow:'hidden'}}>
        <img 
          src={service.image}
          alt={service.title} 
          style={{width:'100%',height:'100%',objectFit:'cover'}}
        />
        <div style={{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          background:'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)'
        }}></div>
        

        {/* Breadcrumb */}
        <div style={{
          position:'absolute',
          top:'40%',
          left:'50%',
          transform:'translate(-50%, -50%)',
          textAlign:'center',
          color:'white',
          zIndex:5
        }}>
          <p style={{fontSize:'14px',marginBottom:'1rem',opacity:0.9}}>{service.breadcrumb}</p>
          <h1 style={{
            fontSize:'4rem',
            fontFamily:'Georgia, serif',
            fontWeight:'400',
            margin:0,
            textShadow:'2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            {service.title}
          </h1>
        </div>

        {/* Bottom Label */}
        <div style={{
          position:'absolute',
          bottom:'2rem',
          right:'2rem',
          color:'white',
          display:'flex',
          alignItems:'center',
          gap:'1rem',
          zIndex:5
        }}>
          <div style={{
            width:'2px',
            height:'40px',
            background:'white'
          }}></div>
          <span style={{fontSize:'16px'}}>{service.title}</span>
        </div>
      </div>

      {/* Top Navigation Links */}
      <div style={{
        background:'#FFF9E1',
        padding:'1rem 0',
        borderBottom:'1px solid #e0e0e0'
      }}>
        <div className="container" style={{
          display:'flex',
          justifyContent:'center',
          gap:'2rem',
          flexWrap:'wrap'
        }}>
          <a href="#overview" style={{
            color:'#FF9D00',
            textDecoration:'none',
            fontSize:'14px',
            fontWeight:'500',
            padding:'0.5rem 1rem'
          }}>
            OVERVIEW
          </a>
          <a href="#features" style={{
            color:'#FF9D00',
            textDecoration:'none',
            fontSize:'14px',
            fontWeight:'500',
            padding:'0.5rem 1rem'
          }}>
            FEATURES
          </a>
          <a href="#gallery" style={{
            color:'#FF9D00',
            textDecoration:'none',
            fontSize:'14px',
            fontWeight:'500',
            padding:'0.5rem 1rem'
          }}>
            GALLERY
          </a>
          <a href="#contact" style={{
            color:'#FF9D00',
            textDecoration:'none',
            fontSize:'14px',
            fontWeight:'500',
            padding:'0.5rem 1rem'
          }}>
            CONTACT
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{paddingTop:'3rem',paddingBottom:'3rem'}}>
        {/* Description Section */}
        <div id="overview" style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:'3rem',marginBottom:'3rem'}}>
          <div>
            <h2 style={{
              fontSize:'2.5rem',
              fontFamily:'Georgia, serif',
              fontWeight:'400',
              lineHeight:'1.3',
              marginBottom:'2rem',
              color:'#333'
            }}>
              {service.description.title}
            </h2>
            {service.description.content.map((paragraph, index) => (
              <p key={index} style={{
                fontSize:'16px',
                lineHeight:'1.8',
                color:'#4F5051',
                marginBottom:'1.5rem'
              }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Sidebar */}
          <div>
            {/* Quick Info Card */}
            <div style={{
              background:'white',
              border:'1px solid #e0e0e0',
              borderRadius:'8px',
              padding:'2rem',
              marginBottom:'2rem'
            }}>
              <h3 style={{
                fontSize:'1.5rem',
                fontFamily:'Georgia, serif',
                marginBottom:'1.5rem',
                color:'#333'
              }}>
                Quick Info
              </h3>
              <div style={{marginBottom:'1rem'}}>
                <p style={{fontSize:'14px',color:'#666',margin:'0.25rem 0'}}><strong>Location:</strong> {service.quickInfo.location}</p>
              </div>
              <div style={{marginBottom:'1rem'}}>
                <p style={{fontSize:'14px',color:'#666',margin:'0.25rem 0'}}><strong>Price Range:</strong> {service.quickInfo.priceRange}</p>
              </div>
              <div style={{marginBottom:'1rem'}}>
                <p style={{fontSize:'14px',color:'#666',margin:'0.25rem 0'}}><strong>Amenities:</strong> {service.quickInfo.amenities}</p>
              </div>
              <div style={{marginBottom:'1rem'}}>
                <p style={{fontSize:'14px',color:'#666',margin:'0.25rem 0'}}><strong>Contact:</strong> {service.quickInfo.contact}</p>
              </div>
              <div>
                <p style={{fontSize:'14px',color:'#666',margin:'0.25rem 0'}}><strong>Email:</strong> {service.quickInfo.email}</p>
              </div>
            </div>

            {/* Contact Card */}
            <div style={{
              background:'white',
              border:'1px solid #e0e0e0',
              borderRadius:'8px',
              padding:'2rem',
              marginBottom:'2rem'
            }}>
              <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                marginBottom:'1rem',
                cursor:'pointer'
              }}>
                <h3 style={{
                  fontSize:'1.5rem',
                  fontFamily:'Georgia, serif',
                  margin:0,
                  display:'flex',
                  alignItems:'center',
                  gap:'0.5rem'
                }}>
                  <span>📞</span> Contact
                </h3>
                <span style={{color:'#FF9D00',fontSize:'1.5rem'}}>›</span>
              </div>
            </div>

            {/* View On Map */}
            <div style={{
              background:'white',
              border:'1px solid #e0e0e0',
              borderRadius:'8px',
              padding:'2rem'
            }}>
              <h3 style={{
                fontSize:'1.5rem',
                fontFamily:'Georgia, serif',
                marginBottom:'1.5rem',
                color:'#333'
              }}>
                View On Map
              </h3>
              <div style={{
                width:'100%',
                height:'200px',
                background:'#f5f5f5',
                borderRadius:'8px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                position:'relative'
              }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FF9D00" strokeWidth="1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" style={{marginBottom:'4rem'}}>
          <h2 style={{
            fontSize:'2.5rem',
            fontFamily:'Georgia, serif',
            fontWeight:'400',
            marginBottom:'2rem',
            color:'#333'
          }}>
            Features & Amenities
          </h2>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(2, 1fr)',
            gap:'1.5rem'
          }}>
            {service.features.map((feature, index) => (
              <div key={index} style={{
                display:'flex',
                alignItems:'center',
                gap:'1rem',
                padding:'1rem',
                background:'#f9f9f9',
                borderRadius:'8px'
              }}>
                <span style={{color:'#FF9D00',fontSize:'1.5rem'}}>✓</span>
                <p style={{fontSize:'16px',color:'#333',margin:0}}>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" style={{marginBottom:'4rem'}}>
          <h2 style={{
            fontSize:'2.5rem',
            fontFamily:'Georgia, serif',
            fontWeight:'400',
            marginBottom:'2rem',
            color:'#333',
            textAlign:'center'
          }}>
            Gallery
          </h2>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(3, 1fr)',
            gap:'2rem'
          }}>
            {service.gallery.map((image, index) => (
              <div key={index} style={{
                position:'relative',
                borderRadius:'8px',
                overflow:'hidden',
                height:'300px'
              }}>
                <img 
                  src={image}
                  alt={`${service.title} - ${index + 1}`}
                  style={{width:'100%',height:'100%',objectFit:'cover'}}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" style={{marginBottom:'4rem'}}>
          <h2 style={{
            fontSize:'2.5rem',
            fontFamily:'Georgia, serif',
            fontWeight:'400',
            marginBottom:'2rem',
            color:'#333',
            textAlign:'center'
          }}>
            Get In Touch
          </h2>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(2, 1fr)',
            gap:'2rem',
            maxWidth:'800px',
            margin:'0 auto'
          }}>
            <div style={{
              background:'white',
              border:'1px solid #e0e0e0',
              borderRadius:'8px',
              padding:'2rem',
              textAlign:'center'
            }}>
              <div style={{fontSize:'2rem',marginBottom:'1rem'}}>📞</div>
              <h3 style={{fontFamily:'Georgia, serif',fontSize:'1.25rem',marginBottom:'0.5rem'}}>Call Us</h3>
              <p style={{fontSize:'16px',color:'#666'}}>{service.quickInfo.contact}</p>
            </div>
            <div style={{
              background:'white',
              border:'1px solid #e0e0e0',
              borderRadius:'8px',
              padding:'2rem',
              textAlign:'center'
            }}>
              <div style={{fontSize:'2rem',marginBottom:'1rem'}}>✉️</div>
              <h3 style={{fontFamily:'Georgia, serif',fontSize:'1.25rem',marginBottom:'0.5rem'}}>Email Us</h3>
              <p style={{fontSize:'16px',color:'#666'}}>{service.quickInfo.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button style={{
        position:'fixed',
        bottom:'2rem',
        right:'2rem',
        width:'50px',
        height:'50px',
        borderRadius:'50%',
        background:'white',
        border:'2px solid #FF9D00',
        color:'#FF9D00',
        fontSize:'1.5rem',
        cursor:'pointer',
        boxShadow:'0 2px 8px rgba(0,0,0,0.2)',
        zIndex:100
      }}>
        ↑
      </button>
    </div>
  );
};

export default ServiceDetail;