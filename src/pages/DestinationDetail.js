import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/content';
import './DestinationDetail.css';

const getNearbyDestinationPath = (nearbyDest) => {
  if (!nearbyDest) return '#';
  if (nearbyDest.link?.startsWith('/nearby-destination/')) return nearbyDest.link;
  if (nearbyDest.id) return `/nearby-destination/${nearbyDest.id}`;
  if (nearbyDest.link?.startsWith('/destination/')) {
    const id = nearbyDest.link.split('/').filter(Boolean).pop();
    return `/nearby-destination/${id}`;
  }
  return nearbyDest.link || '#';
};

const DestinationDetail = () => {
  const { id } = useParams();
  const dest = destinations.find(d => d.id === id);
  const [activeTab, setActiveTab] = useState('hotel');

  if (!dest) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Destination not found</h2>
        <Link to="/destinations">Back to Destinations</Link>
      </div>
    );
  }

  const destData = {
    breadcrumb: dest.breadcrumb || `Home - Destinations - ${dest.heading}`,
    description: dest.fullDescription || {
      title: dest.description,
      content: [dest.longDesc]
    },
    quickInfo: dest.quickInfo || {},
    howToReach: dest.howToReach || {},
    nearbyDestinations: dest.nearbyDestinations || [],
    hospitalityServices: dest.hospitalityServices || { categories: [], items: [] },
    topLinks: dest.topLinks || []
  };

  return (
    <div className="destination-page">
      {/* ===== HERO IMAGE BANNER ===== */}
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
        <img 
          src={dest.image} 
          alt={dest.heading} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)' }}></div>
      </div>


      {/* Top Navigation Links */}
      <div style={{ background: '#FFF9E1', padding: '1rem 0', borderBottom: '1px solid #e0e0e0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {destData.topLinks.map((link, index) => (
            <a key={index} href={link.link} style={{ color: '#FF9D00', textDecoration: 'none', fontSize: '14px', fontWeight: '500', padding: '0.5rem 1rem' }}>{link.title}</a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        {/* Description Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', lineHeight: '1.3', marginBottom: '2rem', color: '#333' }}>
              {destData.description.title}
            </h2>
            {destData.description.content.map((paragraph, index) => (
              <p key={index} style={{ fontSize: '16px', lineHeight: '1.8', color: '#4F5051', marginBottom: '1.5rem' }}>{paragraph}</p>
            ))}
          </div>

          {/* Right Sidebar */}
          <div>
            {/* Contact Card */}
            <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', cursor: 'pointer' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>📞</span> Contact</h3>
                <span style={{ color: '#FF9D00', fontSize: '1.5rem' }}>›</span>
              </div>
            </div>

            {/* View On Map */}
            <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', marginBottom: '1.5rem', color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>📍</span> View On Map</h3>
              <div style={{ width: '100%', height: '220px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' }}>
                {dest.coordinates ? (
                  <a href={`https://www.google.com/maps/dir/current+location/${dest.coordinates.lat},${dest.coordinates.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                    <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${dest.coordinates.lat},${dest.coordinates.lng}&center=${dest.coordinates.lat},${dest.coordinates.lng}&zoom=14`} width="100%" height="100%" style={{ border: 'none', pointerEvents: 'none' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Map of ${dest.heading}`} />
                  </a>
                ) : (
                  <div style={{ width: '100%', height: '100%', background: '#f5f5f5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#999', fontSize: '14px' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF9D00" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Map location unavailable</span>
                  </div>
                )}
              </div>
            </div>

            {/* Emergency Contacts */}
            <div style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', marginBottom: '1rem', color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>🆘</span> Emergency Contacts</h3>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '1rem' }}>24/7 Helpline Numbers</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <span style={{ fontSize: '1.3rem' }}>🚔</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Police</p>
                    <p style={{ fontSize: '1.1rem', color: '#333', margin: 0, fontWeight: '600' }}>100, 112</p>
                  </div>
                  <a href="tel:100" style={{ padding: '0.4rem 0.75rem', background: '#1a6b7a', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>Call Now</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <span style={{ fontSize: '1.3rem' }}>🚒</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Fire</p>
                    <p style={{ fontSize: '1.1rem', color: '#333', margin: 0, fontWeight: '600' }}>101</p>
                  </div>
                  <a href="tel:101" style={{ padding: '0.4rem 0.75rem', background: '#1a6b7a', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>Call Now</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <span style={{ fontSize: '1.3rem' }}>🚑</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ambulance</p>
                    <p style={{ fontSize: '1.1rem', color: '#333', margin: 0, fontWeight: '600' }}>102, 108</p>
                  </div>
                  <a href="tel:102" style={{ padding: '0.4rem 0.75rem', background: '#1a6b7a', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>Call Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Description */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4F5051', marginBottom: '1.5rem' }}>{dest.longDesc}</p>
        </div>

        {/* How to Reach Section */}
        <div id="howtoreach" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '2rem', color: '#333' }}>How To Reach</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {/* By Bus */}
            <div style={{ background: '#f0faf0', borderRadius: '16px', padding: '1.5rem', border: '1px solid #d0ead0', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🚌</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>{destData.howToReach.byBus?.title || 'By Bus'}</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>{destData.howToReach.byBus?.description || 'Regular APSRTC/TSRTC buses available.'}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={dest.coordinates ? `https://www.google.com/maps/dir/current+location/${dest.coordinates.lat},${dest.coordinates.lng}` : '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.apsrtc.ap.gov.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>

            {/* By Flight */}
            <div style={{ background: '#f0f8ff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e0f0fe', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>✈️</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>{destData.howToReach.byFlight?.title || 'By Flight'}</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>{destData.howToReach.byFlight?.description || 'Nearest: Rajahmundry Airport (RJY).'}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={dest.coordinates ? `https://www.google.com/maps/dir/current+location/${dest.coordinates.lat},${dest.coordinates.lng}` : '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.makemytrip.com/flights" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>

            {/* By Train */}
            <div style={{ background: '#fff8f0', borderRadius: '16px', padding: '1.5rem', border: '1px solid #fde8d0', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🚂</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>{destData.howToReach.byTrain?.title || 'By Train'}</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>{destData.howToReach.byTrain?.description || 'Well-connected via major railway stations.'}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={dest.coordinates ? `https://www.google.com/maps/dir/current+location/${dest.coordinates.lat},${dest.coordinates.lng}` : '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>

            {/* Local Transport */}
            <div style={{ background: '#f5f0ff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e0d0fe', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🚕</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>Local Transport</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>Auto-rickshaws, taxis & local buses available within town for easy commute.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={dest.coordinates ? `https://www.google.com/maps/dir/current+location/${dest.coordinates.lat},${dest.coordinates.lng}` : '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.olacabs.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section - Main Destination */}
        {dest.gallery && dest.gallery.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '0.5rem', color: '#333', textAlign: 'center' }}>📷 Photo Gallery</h2>
            <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '2rem' }}>Explore the beauty of {dest.heading} through our lens</p>
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', paddingBottom: '1rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="photo-gallery-scroll" id={`gallery-scroll-${dest.id}`} onScroll={(e) => {
              const scroll = e.currentTarget;
              const maxScroll = scroll.scrollWidth - scroll.clientWidth;
              const scrollPercent = scroll.scrollLeft / maxScroll;
              const dots = document.querySelectorAll(`#gallery-dots-${dest.id} .gallery-dot`);
              const activeIndex = Math.round(scrollPercent * (dots.length - 1));
              dots.forEach((dot, i) => { dot.style.background = i === activeIndex ? '#FF9D00' : '#ddd'; dot.style.transform = i === activeIndex ? 'scale(1.3)' : 'scale(1)'; });
            }}>
              {dest.gallery.map((imgUrl, index) => (
                <div key={index} style={{ flex: '0 0 auto', width: '320px', height: '240px', borderRadius: '12px', overflow: 'hidden', scrollSnapAlign: 'start', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', cursor: 'pointer', position: 'relative' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                  <img src={imgUrl} alt={`${dest.heading} ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', color: 'white', fontSize: '12px', textAlign: 'right', paddingRight: '1rem' }}>{index + 1}/{dest.gallery.length}</div>
                </div>
              ))}
            </div>
            <div id={`gallery-dots-${dest.id}`} style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              {dest.gallery.map((_, index) => (
                <div key={index} className="gallery-dot" style={{ width: '10px', height: '10px', borderRadius: '50%', background: index === 0 ? '#FF9D00' : '#ddd', cursor: 'pointer', transition: 'all 0.3s ease', transform: index === 0 ? 'scale(1.3)' : 'scale(1)' }} onClick={() => { const scroll = document.getElementById(`gallery-scroll-${dest.id}`); if (scroll) { const itemWidth = 320 + 16; scroll.scrollTo({ left: index * itemWidth, behavior: 'smooth' }); } }} />
              ))}
            </div>
          </div>
        )}

        {/* Destinations Near By */}
        <div id="nearby" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', fontWeight: '400', textAlign: 'center', marginBottom: '1rem', color: '#333' }}>Destinations Near By</h2>
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '3rem' }}>Looking for nearby destinations? Check-out these!</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {destData.nearbyDestinations.map((nearbyDest, index) => (
              <Link key={index} to={getNearbyDestinationPath(nearbyDest)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: '300px', cursor: 'pointer' }}>
                  <img src={nearbyDest.image} alt={nearbyDest.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)', color: 'white' }}>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', margin: 0 }}>{nearbyDest.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Photo Gallery for Nearby Destinations */}
        {destData.nearbyDestinations.map((nearbyDest, nearbyIndex) => nearbyDest.gallery && nearbyDest.gallery.length > 0 ? (
          <div key={`nearby-gallery-${nearbyIndex}`} style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '0.5rem', color: '#333', textAlign: 'center' }}>📷 {nearbyDest.title} Gallery</h2>
            <p style={{ textAlign: 'center', fontSize: '14px', color: '#666', marginBottom: '1.5rem' }}>Explore the beauty of {nearbyDest.title}</p>
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', paddingBottom: '1rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="photo-gallery-scroll" id={`nearby-gallery-scroll-${nearbyIndex}`} onScroll={(e) => {
              const scroll = e.currentTarget;
              const maxScroll = scroll.scrollWidth - scroll.clientWidth;
              const scrollPercent = scroll.scrollLeft / maxScroll;
              const dots = document.querySelectorAll(`#nearby-gallery-dots-${nearbyIndex} .gallery-dot`);
              const activeIndex = Math.round(scrollPercent * (dots.length - 1));
              dots.forEach((dot, i) => { dot.style.background = i === activeIndex ? '#FF9D00' : '#ddd'; dot.style.transform = i === activeIndex ? 'scale(1.3)' : 'scale(1)'; });
            }}>
              {nearbyDest.gallery.map((imgUrl, index) => (
                <div key={index} style={{ flex: '0 0 auto', width: '280px', height: '200px', borderRadius: '8px', overflow: 'hidden', scrollSnapAlign: 'start', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', cursor: 'pointer', position: 'relative' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                  <img src={imgUrl} alt={`${nearbyDest.title} ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', color: 'white', fontSize: '11px', textAlign: 'right', paddingRight: '1rem' }}>{index + 1}/{nearbyDest.gallery.length}</div>
                </div>
              ))}
            </div>
            <div id={`nearby-gallery-dots-${nearbyIndex}`} style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              {nearbyDest.gallery.map((_, index) => (
                <div key={index} className="gallery-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: index === 0 ? '#FF9D00' : '#ddd', cursor: 'pointer', transition: 'all 0.3s ease', transform: index === 0 ? 'scale(1.2)' : 'scale(1)' }} onClick={() => { const scroll = document.getElementById(`nearby-gallery-scroll-${nearbyIndex}`); if (scroll) { const itemWidth = 280 + 16; scroll.scrollTo({ left: index * itemWidth, behavior: 'smooth' }); } }} />
              ))}
            </div>
          </div>
        ) : null)}

        {/* Hospitality Services */}
        <div id="hospitality" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', fontWeight: '400', textAlign: 'center', marginBottom: '1rem', color: '#333' }}>Hospitality Services</h2>
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '2rem' }}>Here's a wide range of accredited hospitality services available in {dest.heading}.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {destData.hospitalityServices.categories.map((category, index) => (
              <button key={index} style={{ padding: '0.75rem 1.5rem', border: '1px solid #FF9D00', background: activeTab === category.toLowerCase() ? '#FF9D00' : 'white', color: activeTab === category.toLowerCase() ? 'white' : '#FF9D00', borderRadius: '25px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }} onClick={() => setActiveTab(category.toLowerCase())}>{category}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {destData.hospitalityServices.items.map((item, index) => (
              <div key={index} style={{ borderRadius: '8px', overflow: 'hidden', height: '250px', position: 'relative', cursor: 'default' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)', color: 'white' }}>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', margin: 0 }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '50px', height: '50px', borderRadius: '50%', background: 'white', border: '2px solid #FF9D00', color: '#FF9D00', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', zIndex: 100 }}>↑</button>
    </div>
  );
};

export default DestinationDetail;