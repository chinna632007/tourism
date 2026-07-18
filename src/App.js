import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import EventsPage from './pages/EventsPage';
import EventDetail from './pages/EventDetail';
import ExperiencesPage from './pages/ExperiencesPage';
import ExperienceDetail from './pages/ExperienceDetail';
import DestinationDetailPage from './pages/DestinationDetailPage';
import PlanTrip from './pages/PlanTrip';
import PhotoGallery from './pages/PhotoGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import WhereToGo from './pages/WhereToGo';
import TrendingPlaces from './pages/TrendingPlaces';
import DestinationServices from './pages/DestinationServices';
import NearbyDestinationDetail from './pages/NearbyDestinationDetail';
import TourGuide from './pages/TourGuide';
import PoliceServices from './pages/PoliceServices';
import HealthServices from './pages/HealthServices';
import ReligionPage from './pages/ReligionPage';
import Spirituality from './pages/Spirituality';
import Temples from './pages/Temples';
import Churches from './pages/Churches';
import Masjids from './pages/Masjids';
import NorthEastGodavari from './pages/NorthEastGodavari';
import TouristOffice from './pages/TouristOffice';
import AllTouristOffices from './pages/AllTouristOffices';
import AllTourGuides from './pages/AllTourGuides';
import HowToReach from './pages/HowToReach';
import EastGodavariMap from './pages/EastGodavariMap';
import LivingFacilities from './pages/LivingFacilities';

// ============ HEADER ============
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/experiences', label: 'Experiences' },
    { to: '/spirituality', label: 'Spirituality' },
    { to: '/plan-trip', label: 'Plan your trip' },
    { to: '/trending-places', label: 'Help' },
    { to: '/contact', label: 'Emergency' },
  ];

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-top">
        <div className="header-container">
          <div className="header-top-left">
            <div className="header-cm">
              <img src="/cm.jpg" alt="CM N. Chandrababu Naidu" className="header-cm-img" />
              <span className="header-cm-text">Sri N. Chandrababu Naidu</span>
              <span className="header-cm-subtitle">Chief Minister of Andhra Pradesh</span>
            </div>
            <div className="header-minister">
              <img src="/minister.jpg" alt="Minister" className="header-minister-img" />
              <span className="header-minister-name">Sri Durgesh Kandhula</span>
              <span className="header-minister-title">Ministry of East Godavari</span>
            </div>
          </div>

          <div className="header-top-center">
            <div className="header-title-block">
              <img src="/aplogo.webp" alt="East Godavari Tourism" className="header-emblem" />
              <h1 className="header-title">East Godavari Tourism</h1>
              <p className="header-subtitle">Department of Tourism, Government of Andhra Pradesh</p>
            </div>
          </div>

          <div className="header-top-right">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="header-social-btn" title="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="header-social-btn" title="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="header-social-btn" title="Twitter">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="mailto:info@eastgodavaritourism.com" target="_blank" rel="noopener noreferrer" className="header-social-btn" title="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>

          <button
            className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
        <div className="header-container">
          <ul className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`header-nav-link ${location.pathname === link.to ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="nav-overlay active" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </header>
  );
};

// ============ FOOTER ============
const Footer = () => (
  <footer className="footer" style={{ background: 'linear-gradient(135deg, #090909 0%, #4e1e1e 100%)', padding: '2rem 0 1rem' }}>
    <div className="container">
      <div style={{ 
        textAlign: 'center', 
        padding: '1.5rem 2rem',
        background: 'rgba(122, 31, 31, 0)',
        borderRadius: '0.5rem',
        backdropFilter: 'blur(10px)',
        maxWidth: '1000px',
        margin: '0 auto 1rem'
      }}>
        <h3 style={{ 
          color: '#fff', 
          fontSize: '2rem', 
          marginBottom: '0.5rem',
          fontFamily: "'Playfair Display', Georgia, serif",
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          fontWeight: '600',
          lineHeight: '1.2'
        }}>
          Ready to Experience East Godavari?
        </h3>
        <p style={{ 
          color: '#f0f0f0', 
          fontSize: '1rem',
          marginBottom: '1rem',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
          lineHeight: '1.6'
        }}>
          Plan your perfect East Godavari journey and create memories that will last a lifetime.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          marginBottom: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div>
            <div style={{ color: '#ff9d00', fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.25rem' }}>50+</div>
            <div style={{ color: '#fff', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Destinations</div>
          </div>
          <div>
            <div style={{ color: '#ff9d00', fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.25rem' }}>100+</div>
            <div style={{ color: '#fff', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Experiences</div>
          </div>
          <div>
            <div style={{ color: '#ff9d00', fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.25rem' }}>24/7</div>
            <div style={{ color: '#fff', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Support</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/plan-trip" 
            style={{ 
              display: 'inline-flex',
              padding: '0.625rem 1.75rem',
              background: 'linear-gradient(135deg, #ff9d00 0%, #ffb347 100%)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(255, 157, 0, 0.4)',
              transition: 'all 0.3s ease',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Plan Your Trip
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link 
            to="/contact" 
            style={{ 
              display: 'inline-flex',
              padding: '0.625rem 1.75rem',
              background: 'linear-gradient(135deg, #ff9d00 0%, #ffb347 100%)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(255, 157, 0, 0.4)',
              transition: 'all 0.3s ease',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.37 21 2 12.63 2 2.08C2 1.48 2.48 1 3.08 1H6.08C6.63 1 7.08 1.37 7.17 1.91L7.57 4.33C7.64 4.75 7.52 5.17 7.25 5.5L5.5 8.5C6.75 11.5 9.5 14.25 12.5 15.5L15.5 13.75C15.83 13.48 16.25 13.36 16.67 13.43L19.09 13.83C19.63 13.92 20 14.37 20 14.92V16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Contact Us
          </Link>
        </div>
      </div>
      
      <div className="footer-bottom" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
        <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>© 2026 Department of Tourism, Government of East Godavari. All rights reserved.</p>
        <p style={{ color: '#999', fontSize: '0.9rem' }}>Website designed and developed by East Godavari Tourism</p>
      </div>
    </div>
  </footer>
);

// ============ SCROLL TO TOP ============
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// ============ SCROLL TO TOP BUTTON ============
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{ cursor: 'pointer' }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M12 5L7 10M12 5L17 10" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

// ============ APP CONTENT ============
function AppContent() {
  const location = useLocation();
  
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <ScrollToTopButton />
      <main className={location.pathname === '/' ? 'home-page' : location.pathname === '/spirituality' ? 'spirituality-page-main' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending-places" element={<TrendingPlaces />} />
          <Route path="/where-to-go" element={<WhereToGo />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/nearby-destination/:id" element={<NearbyDestinationDetail />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/spirituality" element={<Spirituality />} />
          <Route path="/spirituality/temples" element={<Temples />} />
          <Route path="/spirituality/churches" element={<Churches />} />
          <Route path="/spirituality/masjids" element={<Masjids />} />
          <Route path="/religion-east-godavari" element={<ReligionPage />} />
          <Route path="/north-east-godavari" element={<NorthEastGodavari />} />
          <Route path="/wellness-east-godavari" element={<PhotoGallery />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/experience/:category/:experienceId" element={<ExperienceDetail />} />
          <Route path="/destination-page/:id" element={<DestinationDetailPage />} />
          <Route path="/plan-trip" element={<PlanTrip />} />          
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/video-gallery" element={<PhotoGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:destinationId" element={<DestinationServices />} />
          <Route path="/all-tour-guides" element={<AllTourGuides />} />
          <Route path="/how-to-reach" element={<HowToReach />} />
          <Route path="/east-godavari-map" element={<EastGodavariMap />} />
          <Route path="/living-facilities" element={<LivingFacilities />} />
          <Route path="/all-tourist-offices" element={<AllTouristOffices />} />
          <Route path="/services/:destinationId/tourist-office" element={<TouristOffice />} />
          <Route path="/services/:destinationId/tour-guide" element={<TourGuide />} />
          <Route path="/services/:destinationId/police-services" element={<PoliceServices />} />
          <Route path="/services/:destinationId/health-services" element={<HealthServices />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  const location = useLocation();
  
  return (
    <div className={location.pathname === '/' ? 'home-page' : ''}>
      <AppContent />
    </div>
  );
}

// ============ APP ============
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;