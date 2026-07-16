import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const PoliceServices = () => {
  const { destinationId } = useParams();

  const allPoliceServices = {
    munnar: {
      name: 'Rajahmundry',
      services: [
        { id: 1, station: 'Rajahmundry Central Police Station', address: 'Main Road, Near Bus Stand, Rajahmundry - 533101', phone: '+91 8812 256 100', officer: 'Circle Inspector', jurisdiction: 'Main City Area', available24x7: true },
        { id: 2, station: 'Godavari Ghat Police Post', address: 'Pushkar Ghat Road, Rajahmundry - 533101', phone: '+91 8812 256 101', officer: 'Sub-Inspector', jurisdiction: 'Godavari River Banks', available24x7: true },
        { id: 3, station: 'Railway Station Police', address: 'Rajahmundry Railway Station, Platform No.1', phone: '+91 8812 256 102', officer: 'Sub-Inspector', jurisdiction: 'Railway Station', available24x7: true },
        { id: 4, station: 'Tourist Police Unit', address: 'Tourist Complex, Main Road, Rajahmundry', phone: '+91 8812 256 103', officer: 'Tourist Police Officer', jurisdiction: 'Tourist Spots', available24x7: true }
      ]
    },
    thekkady: {
      name: 'Kakinada',
      services: [
        { id: 1, station: 'Kakinada Central Police Station', address: 'Main Road, Near Bus Stand, Kakinada', phone: '+91 8842 256 200', officer: 'Circle Inspector', jurisdiction: 'Main City Area', available24x7: true },
        { id: 2, station: 'Beach Road Police Post', address: 'Beach Road, Near Uppada, Kakinada', phone: '+91 8842 256 201', officer: 'Sub-Inspector', jurisdiction: 'Beach Areas', available24x7: true },
        { id: 3, station: 'Port Area Police Station', address: 'Port Area, Kakinada', phone: '+91 8842 256 202', officer: 'Sub-Inspector', jurisdiction: 'Port & Harbor', available24x7: true },
        { id: 4, station: 'Tourist Police Unit', address: 'Tourist Information Center, Beach Road, Kakinada', phone: '+91 8842 256 203', officer: 'Tourist Police Officer', jurisdiction: 'Tourist Spots & Beaches', available24x7: true }
      ]
    },
    wayanad: {
      name: 'Amalapuram',
      services: [
        { id: 1, station: 'Amalapuram Central Police Station', address: 'Main Road, Amalapuram - 533201', phone: '+91 8833 256 300', officer: 'Circle Inspector', jurisdiction: 'Main Town Area', available24x7: true },
        { id: 2, station: 'Temple Area Police Post', address: 'Temple Road, Amalapuram', phone: '+91 8833 256 301', officer: 'Sub-Inspector', jurisdiction: 'Temple Areas', available24x7: true },
        { id: 3, station: 'Market Area Police', address: 'Market Yard, Amalapuram', phone: '+91 8833 256 302', officer: 'Sub-Inspector', jurisdiction: 'Market Area', available24x7: true },
        { id: 4, station: 'Tourist Police Unit', address: 'Tourist Office, Market Road, Amalapuram', phone: '+91 8833 256 303', officer: 'Tourist Police Officer', jurisdiction: 'Tourist Spots', available24x7: true }
      ]
    },
    kumarakom: {
      name: 'Ramanayuni',
      services: [
        { id: 1, station: 'Ramanayuni Central Police Station', address: 'Main Road, Ramanayuni', phone: '+91 8844 256 400', officer: 'Circle Inspector', jurisdiction: 'Main Town Area', available24x7: true },
        { id: 2, station: 'Temple Area Police Post', address: 'Temple Entrance Road, Ramanayuni', phone: '+91 8844 256 401', officer: 'Sub-Inspector', jurisdiction: 'Temple Area', available24x7: true },
        { id: 3, station: 'Lake Side Police', address: 'Lake View Road, Ramanayuni', phone: '+91 8844 256 402', officer: 'Sub-Inspector', jurisdiction: 'Lake & Scenic Areas', available24x7: true },
        { id: 4, station: 'Tourist Police Unit', address: 'Tourist Information Center, Ramanayuni', phone: '+91 8844 256 403', officer: 'Tourist Police Officer', jurisdiction: 'Tourist Spots', available24x7: true }
      ]
    },
    kovalam: {
      name: 'Peddapuram',
      services: [
        { id: 1, station: 'Peddapuram Central Police Station', address: 'Main Road, Peddapuram - 533437', phone: '+91 8878 256 500', officer: 'Circle Inspector', jurisdiction: 'Main Town Area', available24x7: true },
        { id: 2, station: 'Fort Area Police Post', address: 'Old Fort Road, Peddapuram', phone: '+91 8878 256 501', officer: 'Sub-Inspector', jurisdiction: 'Fort & Heritage Area', available24x7: true },
        { id: 3, station: 'Market Yard Police', address: 'Market Yard, Peddapuram', phone: '+91 8878 256 502', officer: 'Sub-Inspector', jurisdiction: 'Market Area', available24x7: true },
        { id: 4, station: 'Tourist Police Unit', address: 'Tourist Office, Peddapuram', phone: '+91 8878 256 503', officer: 'Tourist Police Officer', jurisdiction: 'Tourist Spots', available24x7: true }
      ]
    },
    bekal: {
      name: 'Korumam Fort',
      services: [
        { id: 1, station: 'Korumam Fort Police Station', address: 'Main Road, Near Fort Entrance, Korumam', phone: '+91 8899 256 600', officer: 'Circle Inspector', jurisdiction: 'Fort Area', available24x7: true },
        { id: 2, station: 'Fort Entrance Police Post', address: 'Fort Entrance Road, Korumam', phone: '+91 8899 256 601', officer: 'Sub-Inspector', jurisdiction: 'Fort Monument', available24x7: true },
        { id: 3, station: 'River Bank Police', address: 'River Bank Road, Korumam', phone: '+91 8899 256 602', officer: 'Sub-Inspector', jurisdiction: 'River Banks', available24x7: true },
        { id: 4, station: 'Tourist Police Unit', address: 'Tourist Information Center, Korumam', phone: '+91 8899 256 603', officer: 'Tourist Police Officer', jurisdiction: 'Tourist Spots', available24x7: true }
      ]
    },
    athirappilly: {
      name: 'Pithampur',
      services: [
        { id: 1, station: 'Pithampur Central Police Station', address: 'Town Center, Pithampur', phone: '+91 8810 256 700', officer: 'Circle Inspector', jurisdiction: 'Main Town', available24x7: true },
        { id: 2, station: 'Forest Edge Police Post', address: 'Forest Road, Pithampur', phone: '+91 8810 256 701', officer: 'Sub-Inspector', jurisdiction: 'Forest Area', available24x7: true },
        { id: 3, station: 'Market Square Police', address: 'Market Square, Pithampur', phone: '+91 8810 256 702', officer: 'Sub-Inspector', jurisdiction: 'Market Area', available24x7: true },
        { id: 4, station: 'Tourist Police Unit', address: 'Tourist Office, Pithampur', phone: '+91 8810 256 703', officer: 'Tourist Police Officer', jurisdiction: 'Tourist Spots', available24x7: true }
      ]
    },
    thattekkad: {
      name: 'Kadiyam',
      services: [
        { id: 1, station: 'Kadiyam Central Police Station', address: 'Main Village Road, Kadiyam', phone: '+91 8821 256 800', officer: 'Circle Inspector', jurisdiction: 'Main Village', available24x7: true },
        { id: 2, station: 'Nursery Area Police Post', address: 'Plant Nursery Road, Kadiyam', phone: '+91 8821 256 801', officer: 'Sub-Inspector', jurisdiction: 'Nursery Area', available24x7: true },
        { id: 3, station: 'Lake Banks Police', address: 'Lake View Road, Kadiyam', phone: '+91 8821 256 802', officer: 'Sub-Inspector', jurisdiction: 'Lake Area', available24x7: true },
        { id: 4, station: 'Tourist Police Unit', address: 'Tourist Information Center, Kadiyam', phone: '+91 8821 256 803', officer: 'Tourist Police Officer', jurisdiction: 'Tourist Spots', available24x7: true }
      ]
    },
    kavvayi: {
      name: 'Kotipalli River Islands',
      services: [
        { id: 1, station: 'Kotipalli Central Police Station', address: 'Main Road, Kotipalli', phone: '+91 8855 256 900', officer: 'Circle Inspector', jurisdiction: 'Main Village', available24x7: true },
        { id: 2, station: 'Jetty Area Police Post', address: 'Jetty Road, Kotipalli', phone: '+91 8855 256 901', officer: 'Sub-Inspector', jurisdiction: 'Jetty Area', available24x7: true },
        { id: 3, station: 'Island Access Police', address: 'Ferry Point, Kotipalli', phone: '+91 8855 256 902', officer: 'Sub-Inspector', jurisdiction: 'Island Access', available24x7: true },
        { id: 4, station: 'Tourist Police Unit', address: 'Tourist Office, Kotipalli', phone: '+91 8855 256 903', officer: 'Tourist Police Officer', jurisdiction: 'Tourist Spots', available24x7: true }
      ]
    },
    vagamon: {
      name: 'Gurunandan',
      services: [
        { id: 1, station: 'Gurunandan Central Police Station', address: 'Temple Complex Road, Gurunandan', phone: '+91 8866 256 100', officer: 'Circle Inspector', jurisdiction: 'Temple Area', available24x7: true },
        { id: 2, station: 'Hill View Police Post', address: 'Hill View Road, Gurunandan', phone: '+91 8866 256 101', officer: 'Sub-Inspector', jurisdiction: 'Hill Areas', available24x7: true },
        { id: 3, station: 'Pilgrimage Police', address: 'Temple Steps, Gurunandan', phone: '+91 8866 256 102', officer: 'Sub-Inspector', jurisdiction: 'Temple Steps', available24x7: true },
        { id: 4, station: 'Tourist Police Unit', address: 'Tourist Information Center, Gurunandan', phone: '+91 8866 256 103', officer: 'Tourist Police Officer', jurisdiction: 'Tourist Spots', available24x7: true }
      ]
    }
  };

  const data = allPoliceServices[destinationId] || { name: destinationId, services: [] };
  const services = data.services;

  if (services.length === 0) {
    return (
      <div className="service-detail-page" style={{ paddingTop: '0', minHeight: '100vh' }}>
        <section className="service-detail-hero">
          <div className="service-detail-hero-content">
            <h1>Police Services</h1>
            <p>Information not available for this destination.</p>
          </div>
        </section>
        <div className="service-detail-content" style={{ textAlign: 'center' }}>
          <Link to="/services/munnar" className="service-detail-btn">‹ Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page" style={{ paddingTop: '0', minHeight: '100vh' }}>
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
            <span>👮</span>
            <span>Security Services</span>
          </div>
          <h1>{data.name} - Police Services</h1>
          <p>Tourist police assistance and security services in {data.name}</p>
        </div>
      </section>

      <div className="service-detail-content">
        <Link to={`/services/${destinationId}`} className="service-detail-back">
          ‹ Back to Services
        </Link>

        <div className="service-detail-section-header">
          <div className="service-detail-section-badge">Police Stations</div>
          <h2>Available Police Services</h2>
        </div>

        <div className="service-detail-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-detail-card" style={{ '--card-color': '#D32F2F' }}>
              <div className="service-detail-card-icon" style={{ background: 'rgba(211, 47, 47, 0.12)', color: '#D32F2F' }}>
                👮
              </div>
              <h3>{service.station}</h3>
              <p>{service.jurisdiction}</p>
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
                  <span>📞</span>
                  <span>{service.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
                  <span>📍</span>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{service.address}</span>
                </div>
              </div>
              <span style={{ display: 'inline-block', marginTop: '0.75rem', padding: '0.25rem 0.75rem', background: '#4CAF50', color: 'white', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>
                24/7 Available
              </span>
            </div>
          ))}
        </div>

        <div style={{ background: '#FFF5F5', border: '2px solid #D32F2F', borderRadius: '16px', padding: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
          <h3 style={{ color: '#D32F2F', marginBottom: '1rem' }}>🚨 Emergency Contact</h3>
          <p style={{ marginBottom: '1rem' }}>For immediate assistance, dial <strong style={{ color: '#D32F2F' }}>100</strong> or contact the nearest police station</p>
          <p style={{ fontSize: '0.95rem', color: '#666' }}>Tourist Police Helpline: <strong style={{ color: '#D32F2F' }}>+91 8812 256 100</strong></p>
        </div>

        <div className="service-detail-bottom-back">
          <Link to={`/services/${destinationId}`} className="service-detail-btn">
            ‹ Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoliceServices;