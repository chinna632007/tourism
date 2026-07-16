import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const AllTourGuides = () => {
  const allGuides = {
    munnar: {
      place: 'Rajahmundry',
      guides: [
        { id: 1, name: 'Rajesh Kumar', phone: '+91 98765 43201', experience: '8 years', specialty: 'Heritage & Temple Tours' },
        { id: 2, name: 'Suresh Babu', phone: '+91 98765 43202', experience: '5 years', specialty: 'River & Beach Tours' },
        { id: 3, name: 'Venkat Rao', phone: '+91 98765 43203', experience: '10 years', specialty: 'Wildlife & Nature' }
      ]
    },
    thekkady: {
      place: 'Kakinada',
      guides: [
        { id: 1, name: 'K. Srinivas', phone: '+91 98765 43211', experience: '9 years', specialty: 'Beach Tours' },
        { id: 2, name: 'R. Nageswarao', phone: '+91 98765 43212', experience: '4 years', specialty: 'Port Tours' },
        { id: 3, name: 'P. Ramesh', phone: '+91 98765 43213', experience: '11 years', specialty: 'Historical Tours' }
      ]
    },
    wayanad: {
      place: 'Amalapuram',
      guides: [
        { id: 1, name: 'S. Ravi Teja', phone: '+91 98765 43221', experience: '7 years', specialty: 'Market Tours' },
        { id: 2, name: 'D. Venkat Rao', phone: '+91 98765 43222', experience: '3 years', specialty: 'Temple Tours' },
        { id: 3, name: 'K. Padma', phone: '+91 98765 43223', experience: '9 years', specialty: 'Village Tours' }
      ]
    },
    kumarakom: {
      place: 'Ramanayuni',
      guides: [
        { id: 1, name: 'P. Vara Prasad', phone: '+91 98765 43231', experience: '10 years', specialty: 'Temple Tours' },
        { id: 2, name: 'K. Srinivasa Rao', phone: '+91 98765 43232', experience: '4 years', specialty: 'Village Tours' },
        { id: 3, name: 'D. Satyanarayana', phone: '+91 98765 43233', experience: '8 years', specialty: 'Lake Tours' }
      ]
    },
    kovalam: {
      place: 'Peddapuram',
      guides: [
        { id: 1, name: 'L. Narasimha', phone: '+91 98765 43241', experience: '9 years', specialty: 'Fort Tours' },
        { id: 2, name: 'G. Madhu Babu', phone: '+91 98765 43242', experience: '3 years', specialty: 'Market Tours' },
        { id: 3, name: 'P. Ramesh Babu', phone: '+91 98765 43243', experience: '11 years', specialty: 'Village Tours' }
      ]
    },
    bekal: {
      place: 'Korumam Fort',
      guides: [
        { id: 1, name: 'B. Krishna Murthy', phone: '+91 98765 43251', experience: '10 years', specialty: 'Fort Tours' },
        { id: 2, name: 'C. Siva Kumar', phone: '+91 98765 43252', experience: '4 years', specialty: 'Village Tours' },
        { id: 3, name: 'T. Vara Lakshmi', phone: '+91 98765 43253', experience: '8 years', specialty: 'River Tours' }
      ]
    },
    athirappilly: {
      place: 'Pithampur',
      guides: [
        { id: 1, name: 'K. Gopala Rao', phone: '+91 98765 43261', experience: '9 years', specialty: 'Waterfall Tours' },
        { id: 2, name: 'D. Phani Kumar', phone: '+91 98765 43262', experience: '3 years', specialty: 'Forest Tours' },
        { id: 3, name: 'M. Srinivasulu', phone: '+91 98765 43263', experience: '11 years', specialty: 'Market Tours' }
      ]
    },
    thattekkad: {
      place: 'Kadiyam',
      guides: [
        { id: 1, name: 'S. Rama Devi', phone: '+91 98765 43271', experience: '8 years', specialty: 'Bird Watching Tours' },
        { id: 2, name: 'P. Nagendra', phone: '+91 98765 43272', experience: '4 years', specialty: 'Nursery Tours' },
        { id: 3, name: 'K. Surya Prakash', phone: '+91 98765 43273', experience: '10 years', specialty: 'Lake Tours' }
      ]
    },
    kavvayi: {
      place: 'Kotipalli River Islands',
      guides: [
        { id: 1, name: 'D. Satyanarayana', phone: '+91 98765 43281', experience: '9 years', specialty: 'River Tours' },
        { id: 2, name: 'A. Siva Prasad', phone: '+91 98765 43282', experience: '3 years', specialty: 'Island Tours' },
        { id: 3, name: 'P. Subba Rao', phone: '+91 98765 43283', experience: '11 years', specialty: 'Ferry Tours' }
      ]
    },
    vagamon: {
      place: 'Gurunandan',
      guides: [
        { id: 1, name: 'G. Nageswar Rao', phone: '+91 98765 43291', experience: '10 years', specialty: 'Hill Tours' },
        { id: 2, name: 'B. Venkatesh', phone: '+91 98765 43292', experience: '4 years', specialty: 'Temple Tours' },
        { id: 3, name: 'K. Siva Sankar', phone: '+91 98765 43293', experience: '8 years', specialty: 'Meadow Tours' }
      ]
    }
  };

  return (
    <div className="service-detail-page" style={{ paddingTop: '0', minHeight: '100vh' }}>
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
            <span>👤</span>
            <span>Licensed Guides</span>
          </div>
          <h1>Professional Tour Guides</h1>
          <p>Licensed tour guides available across East Godavari destinations</p>
        </div>
      </section>

      <div className="service-detail-content" style={{ maxWidth: '1400px' }}>
        <Link to="/plan-trip" className="service-detail-back">
          ‹ Back to Plan Trip
        </Link>

        <div className="service-detail-section-header">
          <div className="service-detail-section-badge">Expert Guides</div>
          <h2>All Tour Guides</h2>
          <p>Professional Licensed Tour Guides Across East Godavari</p>
        </div>

        <div className="service-detail-grid">
          {Object.entries(allGuides).map(([key, destination]) => (
            <Link
              key={key}
              to={`/services/${key}/tour-guide`}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div className="service-detail-card" style={{ '--card-color': '#7B5CE6' }}>
                <div className="service-detail-card-icon" style={{ background: 'rgba(123, 92, 230, 0.12)', color: '#7B5CE6' }}>
                  📍
                </div>
                <h3 className="service-detail-card-title">{destination.place} Guides</h3>
                <p className="service-detail-card-description">
                  {destination.guides.length} licensed guides available
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                  {destination.guides.slice(0, 2).map((guide, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
                      <span>👤</span>
                      <span>{guide.name}</span>
                    </div>
                  ))}
                </div>
                <div className="service-card-btn">
                  <span>View All Guides</span>
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

export default AllTourGuides;