import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { experienceCategories } from '../data/content';

const FarmVisitDetail = () => {
  const { experienceId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const intervalRef = useRef(null);

  // Find the farm visit experience
  const farmVisit = experienceCategories['responsible-tourism']?.items.find(
    item => item.title === 'Farm Visit'
  );

  // Auto-scroll gallery every 2 seconds
  useEffect(() => {
    if (isAutoPlaying && farmVisit) {
      intervalRef.current = setInterval(() => {
        const newIndex = (currentImageIndex + 1) % (farmVisit.gallery?.length || 6);
        setCurrentImageIndex(newIndex);
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, currentImageIndex, farmVisit]);

  // Gallery images
  const galleryImages = farmVisit?.gallery || [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=800",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
  ];

  // YouTube videos about farming
  const youtubeVideos = [
    { id: 'dQw4w9WgXcQ', title: 'Traditional Farming Techniques' },
    { id: 'M7lc1UVf-VE', title: 'Rice Cultivation Process' },
    { id: 'ScMzIvxBSi4', title: 'Organic Farming Methods' }
  ];

  // Farming villages data
  const farmingVillages = [
    { name: 'Ramanayuni', district: 'East Godavari', mainCrop: 'Rice', area: '450 hectares', farmers: 120 },
    { name: 'Korumam', district: 'East Godavari', mainCrop: 'Coconut', area: '320 hectares', farmers: 85 },
    { name: 'Kakinada', district: 'East Godavari', mainCrop: 'Vegetables', area: '280 hectares', farmers: 95 },
    { name: 'Kadiyam', district: 'East Godavari', mainCrop: 'Flowers', area: '190 hectares', farmers: 150 },
    { name: 'Rajahmundry', district: 'East Godavari', mainCrop: 'Pulses', area: '360 hectares', farmers: 110 },
    { name: 'Peddapuram', district: 'East Godavari', mainCrop: 'Oil Seeds', area: '410 hectares', farmers: 130 }
  ];

  if (!farmVisit) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', textAlign: 'center', minHeight: '100vh' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>Experience not found</h2>
        <Link to="/experiences" style={{ color: '#FF9D00', textDecoration: 'none', fontSize: '1.1rem' }}>← Back to Experiences</Link>
      </div>
    );
  }

  const goToPrevious = () => {
    const newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="page-container" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Hero Section with Farm Image */}
      <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        <img 
          src={farmVisit.image} 
          alt={farmVisit.title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'brightness(0.8)'
          }} 
        />
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)' 
        }}></div>
        
        {/* Breadcrumb and Title */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          textAlign: 'center', 
          color: 'white', 
          zIndex: 5,
          maxWidth: '800px',
          padding: '0 2rem'
        }}>
          <p style={{ fontSize: '14px', marginBottom: '1rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '2px' }}>
            Responsible Tourism • {farmVisit.location}
          </p>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontFamily: 'Georgia, serif', 
            fontWeight: '400', 
            margin: 0, 
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            lineHeight: '1.2'
          }}>
            {farmVisit.title}
          </h1>
        </div>

        {/* Back Button */}
        <Link 
          to="/experiences" 
          style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            color: '#333',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            zIndex: 10,
            backdropFilter: 'blur(10px)'
          }}
        >
          ← Back to Experiences
        </Link>
      </div>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        
        {/* Farm Information Section */}
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto 4rem',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'linear-gradient(135deg, #FF9D00, #FF6B35)',
              color: 'white',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Responsible Tourism
            </div>
            
            <h2 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '2.5rem',
              fontWeight: '400',
              color: '#333',
              marginBottom: '1.5rem',
              lineHeight: '1.3'
            }}>
              {farmVisit.title}
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#666',
              marginBottom: '1.5rem',
              textAlign: 'justify'
            }}>
              {farmVisit.description}
            </p>
            
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.8',
              color: '#555',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Experience the authentic rural lifestyle of East Godavari through our immersive farm visit program. 
              Spend a day with local farmers and learn about sustainable agricultural practices that have been passed 
              down through generations. Get your hands dirty while participating in daily farming activities like 
              planting, harvesting, and caring for livestock. Enjoy fresh, organic meals prepared from farm-fresh 
              ingredients. This unique experience connects you with the land and the people who cultivate it, 
              offering a genuine glimpse into the heart of East Godavari's agricultural heritage.
            </p>

            {farmVisit.location && (
              <p style={{
                fontSize: '16px',
                color: '#FF9D00',
                fontWeight: '600',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {farmVisit.location}
              </p>
            )}

            {/* Experience Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              marginTop: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid #e0e0e0'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏱️</div>
                <p style={{ fontSize: '14px', color: '#999', margin: '0 0 0.25rem' }}>Duration</p>
                <p style={{ fontSize: '16px', fontWeight: '600', color: '#333', margin: 0 }}>Full Day</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
                <p style={{ fontSize: '14px', color: '#999', margin: '0 0 0.25rem' }}>Group Size</p>
                <p style={{ fontSize: '16px', fontWeight: '600', color: '#333', margin: 0 }}>Max 15</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⭐</div>
                <p style={{ fontSize: '14px', color: '#999', margin: '0 0 0.25rem' }}>Rating</p>
                <p style={{ fontSize: '16px', fontWeight: '600', color: '#333', margin: 0 }}>4.9/5</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
                <p style={{ fontSize: '14px', color: '#999', margin: '0 0 0.25rem' }}>Price</p>
                <p style={{ fontSize: '16px', fontWeight: '600', color: '#333', margin: 0 }}>From ₹1,299</p>
              </div>
            </div>
          </div>
        </div>

        {/* Farming Villages Table */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ 
              fontFamily: 'Georgia, serif',
              fontSize: '2.5rem',
              fontWeight: '400',
              color: '#333',
              marginBottom: '0.5rem'
            }}>
              🌾 Farming Villages
            </h2>
            <p style={{ fontSize: '16px', color: '#666' }}>
              Explore the agricultural heartland of East Godavari
            </p>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #FF9D00, #FF6B35)', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '16px', fontWeight: '600' }}>Village Name</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '16px', fontWeight: '600' }}>District</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '16px', fontWeight: '600' }}>Main Crop</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '16px', fontWeight: '600' }}>Area</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '16px', fontWeight: '600' }}>Farmers</th>
                </tr>
              </thead>
              <tbody>
                {farmingVillages.map((village, index) => (
                  <tr 
                    key={index}
                    style={{ 
                      borderBottom: index % 2 === 0 ? '1px solid #f0f0f0' : '1px solid #e8e8e8',
                      transition: 'background 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#f8f9fa'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                  >
                    <td style={{ padding: '1rem', fontSize: '15px', color: '#333', fontWeight: '500' }}>{village.name}</td>
                    <td style={{ padding: '1rem', fontSize: '15px', color: '#666' }}>{village.district}</td>
                    <td style={{ padding: '1rem', fontSize: '15px', color: '#666' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        background: '#e8f5e9',
                        color: '#2e7d32',
                        borderRadius: '12px',
                        fontSize: '13px',
                        fontWeight: '500'
                      }}>
                        {village.mainCrop}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', fontSize: '15px', color: '#666' }}>{village.area}</td>
                    <td style={{ padding: '1rem', fontSize: '15px', color: '#666' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          background: 'linear-gradient(135deg, #FF9D00, #FF6B35)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContentContent: 'center',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          {village.farmers}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Map Section */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ 
              fontFamily: 'Georgia, serif',
              fontSize: '2.5rem',
              fontWeight: '400',
              color: '#333',
              marginBottom: '0.5rem'
            }}>
              📍 Farm Locations
            </h2>
            <p style={{ fontSize: '16px', color: '#666' }}>
              Explore farming villages across East Godavari
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{
              width: '100%',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48389.123456789!2d81.7000!3d17.1000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA4JzQ1LjQiTiA4McKwNDUnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allowFullScreen=""
                loading="lazy"
                title="Farm Locations Map"
              />
            </div>
          </div>
        </div>

        {/* Photo Gallery - Auto-scrolling */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ 
              fontFamily: 'Georgia, serif',
              fontSize: '2.5rem',
              fontWeight: '400',
              color: '#333',
              marginBottom: '0.5rem'
            }}>
              📷 Photo Gallery
            </h2>
            <p style={{ fontSize: '16px', color: '#666' }}>
              Explore the beauty of farm life
            </p>
          </div>

          {/* Auto-scrolling Gallery */}
          <div 
            style={{ 
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div style={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentImageIndex * 100}%)`
            }}>
              {galleryImages.map((imgUrl, index) => (
                <div 
                  key={index} 
                  style={{ 
                    minWidth: '100%',
                    height: '500px',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={imgUrl} 
                    alt={`Farm Visit - Photo ${index + 1}`} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }} 
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={goToPrevious}
              style={{
                position: 'absolute',
                top: '50%',
                left: '1rem',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 10,
                fontWeight: 'bold'
              }}
            >
              ‹
            </button>
            <button 
              onClick={goToNext}
              style={{
                position: 'absolute',
                top: '50%',
                right: '1rem',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 10,
                fontWeight: 'bold'
              }}
            >
              ›
            </button>

            {/* Dots Indicator */}
            <div style={{ 
              position: 'absolute', 
              bottom: '1.5rem', 
              left: '50%', 
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.5rem'
            }}>
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    width: currentImageIndex === index ? '24px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: currentImageIndex === index ? '#FF9D00' : 'rgba(255, 255, 255, 0.7)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Auto-play indicator */}
          <div style={{ 
            textAlign: 'center', 
            marginTop: '1rem',
            fontSize: '14px',
            color: '#999'
          }}>
            {isAutoPlaying ? '🔄 Auto-scrolling every 2 seconds' : '⏸️ Paused - Hover to pause'}
          </div>
        </div>

        {/* Video Gallery Section */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ 
              fontFamily: 'Georgia, serif',
              fontSize: '2.5rem',
              fontWeight: '400',
              color: '#333',
              marginBottom: '0.5rem'
            }}>
              🎥 Video Gallery
            </h2>
            <p style={{ fontSize: '16px', color: '#666' }}>
              Watch videos and learn about traditional farming
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {youtubeVideos.map((video, index) => (
              <div 
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
                {activeVideo === index ? (
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  </div>
                ) : (
                  <>
                    <div 
                      style={{
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                        background: '#000'
                      }}
                      onClick={() => setActiveVideo(index)}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.8
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80px',
                        height: '80px',
                        background: 'rgba(255, 157, 0, 0.9)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                      }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ 
                        fontFamily: 'Georgia, serif',
                        fontSize: '1.2rem', 
                        margin: 0,
                        color: '#333'
                      }}>
                        {video.title}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* More Experiences Section */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ 
              fontFamily: 'Georgia, serif',
              fontSize: '2.5rem',
              fontWeight: '400',
              color: '#333',
              marginBottom: '0.5rem'
            }}>
              More Experiences Like This
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {experienceCategories['responsible-tourism']?.items
              .filter(item => item.title !== 'Farm Visit')
              .slice(0, 3)
              .map((relatedExp, index) => (
                <Link
                  key={index}
                  to={`/experience/responsible-tourism/${relatedExp.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  >
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={relatedExp.image} 
                      alt={relatedExp.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem', background: 'white' }}>
                    <h3 style={{ 
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.2rem', 
                      marginBottom: '0.5rem',
                      color: '#333'
                    }}>
                      {relatedExp.title}
                    </h3>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#666',
                      lineHeight: '1.5',
                      margin: 0
                    }}>
                      {relatedExp.description}
                    </p>
                  </div>
                </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          right: '2rem', 
          width: '50px', 
          height: '50px', 
          borderRadius: '50%', 
          background: 'white', 
          border: '2px solid #FF9D00', 
          color: '#FF9D00', 
          fontSize: '1.5rem', 
          cursor: 'pointer', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)', 
          zIndex: 100,
          fontWeight: 'bold'
        }}
      >
        ↑
      </button>
    </div>
  );
};

export default FarmVisitDetail;