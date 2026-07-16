import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const allOffices = [
  { id: 'munnar', place: 'Rajahmundry', address: 'Tourist Complex, Main Road, Rajahmundry - 533101, Near Bus Stand', contact: '+91 99887 76601', officer: 'P. Satyanarayana', hours: '9:00 AM - 6:00 PM (Daily)', color: '#00acc1' },
  { id: 'thekkady', place: 'Kakinada', address: 'Tourist Information Center, Kakinada Beach Road, Kakinada - 533001', contact: '+91 99887 76602', officer: 'V. Ramarao', hours: '9:00 AM - 6:00 PM (Daily)', color: '#ff9800' },
  { id: 'wayanad', place: 'Amalapuram', address: 'Tourist Office, Market Road, Amalapuram - 533201', contact: '+91 99887 76603', officer: 'T. Subba Rao', hours: '9:00 AM - 6:00 PM (Daily)', color: '#9c27b0' },
  { id: 'kumarakom', place: 'Ramanayuni', address: 'Tourist Information Center, Ramanayuni Temple Road, Ramanayuni - 533210', contact: '+91 99887 76604', officer: 'M. Suryanarayana', hours: '9:00 AM - 6:00 PM (Daily)', color: '#4caf50' },
  { id: 'kovalam', place: 'Peddapuram', address: 'Tourist Office, Peddapuram Bus Stand Road, Peddapuram - 533437', contact: '+91 99887 76605', officer: 'L. Narasimha', hours: '9:00 AM - 6:00 PM (Daily)', color: '#2196f3' },
  { id: 'bekal', place: 'Korumam Fort', address: 'Tourist Information Center, Korumam Fort Road, Korumam - 533222', contact: '+91 99887 76606', officer: 'B. Krishna Murthy', hours: '9:00 AM - 6:00 PM (Daily)', color: '#f44336' },
  { id: 'athirappilly', place: 'Pithampur', address: 'Tourist Office, Pithampur Town Center, Pithampur - 533250', contact: '+91 99887 76607', officer: 'K. Gopala Rao', hours: '9:00 AM - 6:00 PM (Daily)', color: '#ff5722' },
  { id: 'thattekkad', place: 'Kadiyam', address: 'Tourist Information Center, Kadiyam Village, Kadiyam - 533240', contact: '+91 99887 76608', officer: 'S. Rama Devi', hours: '9:00 AM - 6:00 PM (Daily)', color: '#795548' },
  { id: 'kavvayi', place: 'Kotipalli River Islands', address: 'Tourist Office, Kotipalli Jetty Road, Kotipalli - 533230', contact: '+91 99887 76609', officer: 'D. Satyanarayana', hours: '9:00 AM - 6:00 PM (Daily)', color: '#607d8b' },
  { id: 'vagamon', place: 'Gurunandan', address: 'Tourist Information Center, Gurunandan Temple Complex, Gurunandan - 533260', contact: '+91 99887 76610', officer: 'G. Nageswar Rao', hours: '9:00 AM - 6:00 PM (Daily)', color: '#9e9e9e' }
];

const AllTouristOffices = () => {
  return (
    <div className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="service-detail-particle" style={{
              width: `${4 + Math.random() * 4}px`, height: `${4 + Math.random() * 4}px`,
              left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`, animationDuration: `${6 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        <div className="service-detail-hero-content">
          <div className="service-detail-hero-badge">
            <span>🏢</span>
            <span>Tourist Information Centers</span>
          </div>
          <h1>Tourist Information Centers</h1>
          <p>Tourism assistance centers across East Godavari</p>
        </div>
      </section>

      <div className="service-detail-content">
        <Link to="/plan-trip" className="service-detail-back">
          ‹ Back to Plan Trip
        </Link>

        <div className="service-detail-section-header">
          <div className="service-detail-section-badge">Our Offices</div>
          <h2>All Tourist Offices</h2>
        </div>

        <div className="service-detail-grid">
          {allOffices.map((office, index) => (
            <Link key={index} to={`/services/${office.id}/tourist-office`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="service-detail-card">
                <div className="service-detail-card-icon" style={{ background: `${office.color}15`, color: office.color }}>
                  📍
                </div>
                <h3>{office.place} Tourist Office</h3>
                <p>Tourist Information Center</p>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#888' }}>
                    <span style={{ color: office.color }}>📞</span>
                    <span>{office.contact}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#888' }}>
                    <span>🕐</span>
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="service-detail-bottom-back">
          <Link to="/plan-trip" className="service-detail-btn">
            ‹ Back to Plan Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllTouristOffices;