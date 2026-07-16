import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const allDestinationData = {
  munnar: {
    name: 'Rajahmundry',
    touristOffice: {
      title: 'Tourist Information Center',
      address: 'Tourist Complex, Main Road, Rajahmundry - 533101, Near Bus Stand',
      contact: '+91 99887 76601',
      email: 'office.rajahmundry@egtourism.org',
      officer: 'P. Satyanarayana',
      designation: 'Tourism Officer',
      hours: '9:00 AM - 6:00 PM (Daily)'
    }
  },
  thekkady: {
    name: 'Kakinada',
    touristOffice: {
      title: 'Tourist Information Center',
      address: 'Tourist Information Center, Kakinada Beach Road, Kakinada - 533001',
      contact: '+91 99887 76602',
      email: 'office.kakinada@egtourism.org',
      officer: 'V. Ramarao',
      designation: 'Tourism Officer',
      hours: '9:00 AM - 6:00 PM (Daily)'
    }
  },
  wayanad: { name: 'Amalapuram', touristOffice: { title: 'Tourist Information Center', address: 'Tourist Office, Market Road, Amalapuram - 533201', contact: '+91 99887 76603', email: 'office.amalapuram@egtourism.org', officer: 'T. Subba Rao', designation: 'Tourism Officer', hours: '9:00 AM - 6:00 PM (Daily)' } },
  kumarakom: { name: 'Ramanayuni', touristOffice: { title: 'Tourist Information Center', address: 'Tourist Information Center, Ramanayuni Temple Road, Ramanayuni - 533210', contact: '+91 99887 76604', email: 'office.ramanayuni@egtourism.org', officer: 'M. Suryanarayana', designation: 'Tourism Officer', hours: '9:00 AM - 6:00 PM (Daily)' } },
  kovalam: { name: 'Peddapuram', touristOffice: { title: 'Tourist Information Center', address: 'Tourist Office, Peddapuram Bus Stand Road, Peddapuram - 533437', contact: '+91 99887 76605', email: 'office.peddapuram@egtourism.org', officer: 'L. Narasimha', designation: 'Tourism Officer', hours: '9:00 AM - 6:00 PM (Daily)' } },
  bekal: { name: 'Korumam Fort', touristOffice: { title: 'Tourist Information Center', address: 'Tourist Information Center, Korumam Fort Road, Korumam - 533222', contact: '+91 99887 76606', email: 'office.korumam@egtourism.org', officer: 'B. Krishna Murthy', designation: 'Tourism Officer', hours: '9:00 AM - 6:00 PM (Daily)' } },
  athirappilly: { name: 'Pithampur', touristOffice: { title: 'Tourist Information Center', address: 'Tourist Office, Pithampur Town Center, Pithampur - 533250', contact: '+91 99887 76607', email: 'office.pithampur@egtourism.org', officer: 'K. Gopala Rao', designation: 'Tourism Officer', hours: '9:00 AM - 6:00 PM (Daily)' } },
  thattekkad: { name: 'Kadiyam', touristOffice: { title: 'Tourist Information Center', address: 'Tourist Information Center, Kadiyam Village, Kadiyam - 533240', contact: '+91 99887 76608', email: 'office.kadiyam@egtourism.org', officer: 'S. Rama Devi', designation: 'Tourism Officer', hours: '9:00 AM - 6:00 PM (Daily)' } },
  kavvayi: { name: 'Kotipalli River Islands', touristOffice: { title: 'Tourist Information Center', address: 'Tourist Office, Kotipalli Jetty Road, Kotipalli - 533230', contact: '+91 99887 76609', email: 'office.kotipalli@egtourism.org', officer: 'D. Satyanarayana', designation: 'Tourism Officer', hours: '9:00 AM - 6:00 PM (Daily)' } },
  vagamon: { name: 'Gurunandan', touristOffice: { title: 'Tourist Information Center', address: 'Tourist Information Center, Gurunandan Temple Complex, Gurunandan - 533260', contact: '+91 99887 76610', email: 'office.gurunandan@egtourism.org', officer: 'G. Nageswar Rao', designation: 'Tourism Officer', hours: '9:00 AM - 6:00 PM (Daily)' } }
};

const contactInfo = [
  { icon: '📞', label: 'Phone Number', field: 'contact', color: '#00acc1' },
  { icon: '📍', label: 'Address', field: 'address', color: '#4caf50' },
  { icon: '✉️', label: 'Email ID', field: 'email', color: '#f44336' },
  { icon: '👤', label: 'Officer In-Charge', field: 'officer', field2: 'designation', color: '#7b5ce6' },
  { icon: '🕐', label: 'Operating Hours', field: 'hours', color: '#ff9800' }
];

const TouristOffice = () => {
  const { destinationId } = useParams();
  const data = allDestinationData[destinationId] || { name: destinationId, touristOffice: null };

  if (!data.touristOffice) {
    return (
      <div className="service-detail-page">
        <div className="service-detail-hero">
          <div className="service-detail-hero-content">
            <h1 style={{ fontSize: '2.5rem' }}>Tourist Office</h1>
            <p>Information not available for this destination.</p>
          </div>
        </div>
        <div className="service-detail-content" style={{ textAlign: 'center' }}>
          <Link to="/all-tourist-offices" className="service-detail-btn">‹ Back to All Offices</Link>
        </div>
      </div>
    );
  }

  const office = data.touristOffice;

  return (
    <div className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-particles">
          {[...Array(6)].map((_, i) => (
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
            <span>Tourist Information Center</span>
          </div>
          <h1>{data.name} - Tourist Office</h1>
          <p>Information and assistance for visitors at {data.name}</p>
        </div>
      </section>

      <div className="service-detail-content">
        <Link to="/all-tourist-offices" className="service-detail-back">
          ‹ Back to All Offices
        </Link>

        <div className="service-detail-section-header">
          <div className="service-detail-section-badge">Contact Details</div>
          <h2>Get In Touch</h2>
        </div>

        <div className="service-detail-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-detail-card-icon" style={{ background: `${info.color}15`, color: info.color }}>
                {info.icon}
              </div>
              <h3>{info.label}</h3>
              <p>
                {office[info.field]}
                {info.field2 && (
                  <span style={{ display: 'block', fontSize: '0.85rem', color: '#888', marginTop: '0.25rem' }}>
                    {office[info.field2]}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="service-detail-bottom-back">
          <Link to="/all-tourist-offices" className="service-detail-btn">
            ‹ Back to All Offices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristOffice;