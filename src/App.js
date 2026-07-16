import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import apLogo from './assets/images/ap-logo.jpg';
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
            <img src={apLogo} alt="East Godavari Tourism" className="header-emblem" />
            <div className="header-title-block">
              <h1 className="header-title">East Godavari Tourism</h1>
              <p className="header-subtitle">Department of Tourism, Government of Andhra Pradesh</p>
            </div>
          </div>

          <div className="header-top-center">
            <Link to="/" className="header-logo-link">
              <img src={apLogo} alt="East Godavari" className="header-logo-img" />
            </Link>
          </div>

          <div className="header-top-right">
            <Link to="/plan-trip" className="header-btn header-btn-primary">Plan Your Trip</Link>
            <Link to="/contact" className="header-btn header-btn-outline">Contact Us</Link>
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
  <footer className="footer" style={{ background: 'linear-gradient(135deg, #090909 0%, #4e1e1e 100%)', padding: '4rem 0 2rem' }}>
    <div className="container">
      <div style={{ 
        textAlign: 'center', 
        padding: '2.5rem 2rem',
        background: 'rgba(122, 31, 31, 0)',
        borderRadius: '0.5rem',
        backdropFilter: 'blur(10px)',
        maxWidth: '1000px',
        margin: '0 auto 2rem'
      }}>
        <h3 style={{ 
          color: '#fff', 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontFamily: "'Playfair Display', Georgia, serif",
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          fontWeight: '600',
          lineHeight: '1.2'
        }}>
          Ready to Experience East Godavari?
        </h3>
        <p style={{ 
          color: '#f0f0f0', 
          fontSize: '1.15rem',
          marginBottom: '2rem',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
          lineHeight: '1.6'
        }}>
          Plan your perfect East Godavari journey and create memories that will last a lifetime.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '3rem', 
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}>
          <div>
            <div style={{ color: '#ff9d00', fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>50+</div>
            <div style={{ color: '#fff', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Destinations</div>
          </div>
          <div>
            <div style={{ color: '#ff9d00', fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>100+</div>
            <div style={{ color: '#fff', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Experiences</div>
          </div>
          <div>
            <div style={{ color: '#ff9d00', fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>24/7</div>
            <div style={{ color: '#fff', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Support</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/plan-trip" 
            style={{ 
              display: 'inline-flex',
              padding: '0.875rem 2.5rem',
              background: 'linear-gradient(135deg, #ff9d00 0%, #ffb347 100%)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(255, 157, 0, 0.4)',
              transition: 'all 0.3s ease',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Plan Your Trip
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link 
            to="/contact" 
            style={{ 
              display: 'inline-flex',
              padding: '0.875rem 2.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1.1rem',
              border: '2px solid rgba(255, 255, 255, 0.3)',
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
      
      <div className="footer-bottom" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
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
      <main className={location.pathname === '/' ? 'home-page' : ''}>
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