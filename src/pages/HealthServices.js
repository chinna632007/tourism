import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const HealthServices = () => {
  const { destinationId } = useParams();

  const allHealthServices = {
    munnar: {
      name: 'Rajahmundry',
      services: [
        { id: 1, hospital: 'Rajahmundry Government General Hospital', type: 'Government Hospital', address: 'Main Road, Near Bus Stand, Rajahmundry - 533101', phone: '+91 8812 257 100', ambulanceNumber: '+91 8812 257 199' },
        { id: 2, hospital: 'Godavari Institute of Medical Sciences', type: 'Medical College', address: 'Godavari Ghat Road, Rajahmundry - 533101', phone: '+91 8812 257 101', ambulanceNumber: '+91 8812 257 198' },
        { id: 3, hospital: 'Tourist Health Center', type: 'Specialty Clinic', address: 'Tourist Complex, Main Road, Rajahmundry - 533101', phone: '+91 8812 257 102', ambulanceNumber: '+91 8812 257 197' },
        { id: 4, hospital: 'Railway Hospital', type: 'Railway Hospital', address: 'Rajahmundry Railway Station, Platform No.1, Rajahmundry - 533101', phone: '+91 8812 257 103', ambulanceNumber: '+91 8812 257 196' }
      ]
    },
    thekkady: {
      name: 'Kakinada',
      services: [
        { id: 1, hospital: 'Kakinada Government General Hospital', type: 'Government Hospital', address: 'Main Road, Near Bus Stand, Kakinada - 533001', phone: '+91 8842 257 200', ambulanceNumber: '+91 8842 257 299' },
        { id: 2, hospital: 'Beach Road Medical Center', type: 'Private Hospital', address: 'Beach Road, Near Uppada, Kakinada - 533001', phone: '+91 8842 257 201', ambulanceNumber: '+91 8842 257 298' },
        { id: 3, hospital: 'Port Area Health Clinic', type: 'Clinic', address: 'Port Area, Kakinada - 533001', phone: '+91 8842 257 202', ambulanceNumber: '+91 8842 257 297' },
        { id: 4, hospital: 'Tourist Health Center', type: 'Specialty Clinic', address: 'Tourist Information Center, Beach Road, Kakinada - 533001', phone: '+91 8842 257 203', ambulanceNumber: '+91 8842 257 296' }
      ]
    },
    wayanad: {
      name: 'Amalapuram',
      services: [
        { id: 1, hospital: 'Amalapuram Government Hospital', type: 'Government Hospital', address: 'Main Road, Near Market, Amalapuram - 533201', phone: '+91 8856 257 300', ambulanceNumber: '+91 8856 257 399' },
        { id: 2, hospital: 'Temple Area Medical Center', type: 'Private Clinic', address: 'Temple Road, Near Someswara Temple, Amalapuram - 533201', phone: '+91 8856 257 301', ambulanceNumber: '+91 8856 257 398' },
        { id: 3, hospital: 'Bus Stand Health Clinic', type: 'Clinic', address: 'APS RTC Bus Stand, Amalapuram - 533201', phone: '+91 8856 257 302', ambulanceNumber: '+91 8856 257 397' },
        { id: 4, hospital: 'Tourist Health Center', type: 'Specialty Clinic', address: 'Tourist Office, Market Road, Amalapuram - 533201', phone: '+91 8856 257 303', ambulanceNumber: '+91 8856 257 396' }
      ]
    },
    kumarakom: {
      name: 'Ramanayuni',
      services: [
        { id: 1, hospital: 'Ramanayuni Primary Health Center', type: 'Government Hospital', address: 'Main Road, Near Temple, Ramanayuni - 533210', phone: '+91 8867 257 400', ambulanceNumber: '+91 8867 257 499' },
        { id: 2, hospital: 'Temple Complex Medical Center', type: 'Clinic', address: 'Temple Complex Road, Ramanayuni - 533210', phone: '+91 8867 257 401', ambulanceNumber: '+91 8867 257 498' },
        { id: 3, hospital: 'Lake View Health Clinic', type: 'Clinic', address: 'Lake View Road, Ramanayuni - 533210', phone: '+91 8867 257 402', ambulanceNumber: '+91 8867 257 497' },
        { id: 4, hospital: 'Tourist Health Center', type: 'Specialty Clinic', address: 'Tourist Information Center, Ramanayuni Temple Road, Ramanayuni - 533210', phone: '+91 8867 257 403', ambulanceNumber: '+91 8867 257 496' }
      ]
    },
    kovalam: {
      name: 'Peddapuram',
      services: [
        { id: 1, hospital: 'Peddapuram Government Hospital', type: 'Government Hospital', address: 'Main Road, Near Bus Stand, Peddapuram - 533437', phone: '+91 8878 257 500', ambulanceNumber: '+91 8878 257 599' },
        { id: 2, hospital: 'Fort Area Medical Center', type: 'Private Hospital', address: 'Old Fort Road, Peddapuram - 533437', phone: '+91 8878 257 501', ambulanceNumber: '+91 8878 257 598' },
        { id: 3, hospital: 'Market Yard Clinic', type: 'Clinic', address: 'Market Yard, Peddapuram - 533437', phone: '+91 8878 257 502', ambulanceNumber: '+91 8878 257 597' },
        { id: 4, hospital: 'Tourist Health Center', type: 'Specialty Clinic', address: 'Tourist Office, Peddapuram Bus Stand Road, Peddapuram - 533437', phone: '+91 8878 257 503', ambulanceNumber: '+91 8878 257 596' }
      ]
    },
    bekal: {
      name: 'Korumam Fort',
      services: [
        { id: 1, hospital: 'Korumam Fort Primary Health Center', type: 'Government Hospital', address: 'Main Road, Near Fort Entrance, Korumam - 533222', phone: '+91 8899 257 600', ambulanceNumber: '+91 8899 257 699' },
        { id: 2, hospital: 'Fort Area Medical Center', type: 'Clinic', address: 'Fort Entrance Road, Korumam - 533222', phone: '+91 8899 257 601', ambulanceNumber: '+91 8899 257 698' },
        { id: 3, hospital: 'River Bank Health Clinic', type: 'Clinic', address: 'River Bank Road, Korumam - 533222', phone: '+91 8899 257 602', ambulanceNumber: '+91 8899 257 697' },
        { id: 4, hospital: 'Tourist Health Center', type: 'Specialty Clinic', address: 'Tourist Information Center, Korumam Fort Road, Korumam - 533222', phone: '+91 8899 257 603', ambulanceNumber: '+91 8899 257 696' }
      ]
    },
    athirappilly: {
      name: 'Pithampur',
      services: [
        { id: 1, hospital: 'Pithampur Government Hospital', type: 'Government Hospital', address: 'Town Center, Main Road, Pithampur - 533250', phone: '+91 8810 257 700', ambulanceNumber: '+91 8810 257 799' },
        { id: 2, hospital: 'Forest Edge Medical Center', type: 'Private Hospital', address: 'Forest Road, Pithampur - 533250', phone: '+91 8810 257 701', ambulanceNumber: '+91 8810 257 798' },
        { id: 3, hospital: 'Market Square Clinic', type: 'Clinic', address: 'Market Square, Pithampur - 533250', phone: '+91 8810 257 702', ambulanceNumber: '+91 8810 257 797' },
        { id: 4, hospital: 'Tourist Health Center', type: 'Specialty Clinic', address: 'Tourist Office, Pithampur Town Center, Pithampur - 533250', phone: '+91 8810 257 703', ambulanceNumber: '+91 8810 257 796' }
      ]
    },
    thattekkad: {
      name: 'Kadiyam',
      services: [
        { id: 1, hospital: 'Kadiyam Primary Health Center', type: 'Government Hospital', address: 'Main Village Road, Kadiyam - 533240', phone: '+91 8821 257 800', ambulanceNumber: '+91 8821 257 899' },
        { id: 2, hospital: 'Nursery Area Medical Center', type: 'Clinic', address: 'Plant Nursery Road, Kadiyam - 533240', phone: '+91 8821 257 801', ambulanceNumber: '+91 8821 257 898' },
        { id: 3, hospital: 'Lake Side Health Clinic', type: 'Clinic', address: 'Lake View Road, Kadiyam - 533240', phone: '+91 8821 257 802', ambulanceNumber: '+91 8821 257 897' },
        { id: 4, hospital: 'Tourist Health Center', type: 'Specialty Clinic', address: 'Tourist Information Center, Kadiyam Village, Kadiyam - 533240', phone: '+91 8821 257 803', ambulanceNumber: '+91 8821 257 896' }
      ]
    },
    kavvayi: {
      name: 'Kotipalli River Islands',
      services: [
        { id: 1, hospital: 'Kotipalli Primary Health Center', type: 'Government Hospital', address: 'Main Road, Near Jetty, Kotipalli - 533230', phone: '+91 8832 257 900', ambulanceNumber: '+91 8832 257 999' },
        { id: 2, hospital: 'Island Medical Center', type: 'Clinic', address: 'River Island Entrance, Kotipalli - 533230', phone: '+91 8832 257 901', ambulanceNumber: '+91 8832 257 998' },
        { id: 3, hospital: 'Ferry Ghat Health Clinic', type: 'Clinic', address: 'Ferry Ghat, Kotipalli - 533230', phone: '+91 8832 257 902', ambulanceNumber: '+91 8832 257 997' },
        { id: 4, hospital: 'Tourist Health Center', type: 'Specialty Clinic', address: 'Tourist Office, Kotipalli Jetty Road, Kotipalli - 533230', phone: '+91 8832 257 903', ambulanceNumber: '+91 8832 257 996' }
      ]
    },
    vagamon: {
      name: 'Gurunandan',
      services: [
        { id: 1, hospital: 'Gurunandan Primary Health Center', type: 'Government Hospital', address: 'Main Road, Near Temple, Gurunandan - 533260', phone: '+91 8843 257 000', ambulanceNumber: '+91 8843 257 099' },
        { id: 2, hospital: 'Temple Complex Medical Center', type: 'Clinic', address: 'Temple Complex, Gurunandan - 533260', phone: '+91 8843 257 001', ambulanceNumber: '+91 8843 257 098' },
        { id: 3, hospital: 'Hill View Health Clinic', type: 'Clinic', address: 'Hill Top Road, Gurunandan - 533260', phone: '+91 8843 257 002', ambulanceNumber: '+91 8843 257 097' },
        { id: 4, hospital: 'Tourist Health Center', type: 'Specialty Clinic', address: 'Tourist Information Center, Gurunandan Temple Complex, Gurunandan - 533260', phone: '+91 8843 257 003', ambulanceNumber: '+91 8843 257 096' }
      ]
    }
  };

  const destinationData = allHealthServices[destinationId] || { name: destinationId, services: [] };
  const healthServices = destinationData.services;

  if (healthServices.length === 0) {
    return (
      <div className="service-detail-page" style={{ paddingTop: '0', minHeight: '100vh' }}>
        <section className="service-detail-hero">
          <div className="service-detail-hero-content">
            <h1>Health Services</h1>
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
            <span>🏥</span>
            <span>Medical Services</span>
          </div>
          <h1>{destinationData.name} - Health Services</h1>
          <p>Medical facilities and emergency healthcare services in {destinationData.name}</p>
        </div>
      </section>

      <div className="service-detail-content">
        <Link to={`/services/${destinationId}`} className="service-detail-back">
          ‹ Back to Services
        </Link>

        <div className="service-detail-section-header">
          <div className="service-detail-section-badge">Medical Facilities</div>
          <h2>Hospitals & Health Centers</h2>
        </div>

        <div className="service-detail-grid">
          {healthServices.map((service, index) => (
            <div key={service.id} className="service-detail-card" style={{ '--card-color': '#388E3C' }}>
              <div className="service-detail-card-icon" style={{ background: 'rgba(56, 142, 60, 0.12)', color: '#388E3C' }}>
                🏥
              </div>
              <h3>{service.hospital}</h3>
              <p>{service.type}</p>
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
                  <span>📞</span>
                  <span>{service.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
                  <span>🚑</span>
                  <span>{service.ambulanceNumber}</span>
                </div>
              </div>
              <span style={{ display: 'inline-block', marginTop: '0.75rem', padding: '0.25rem 0.75rem', background: '#4CAF50', color: 'white', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>
                24/7 Available
              </span>
            </div>
          ))}
        </div>

        <div style={{ background: '#E8F5E9', border: '2px solid #388E3C', borderRadius: '16px', padding: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
          <h3 style={{ color: '#388E3C', marginBottom: '1rem' }}>🏥 Emergency Medical Contact</h3>
          <p style={{ marginBottom: '1rem' }}>For medical emergency, dial <strong style={{ color: '#388E3C' }}>108</strong> or contact the nearest hospital</p>
          <p style={{ fontSize: '0.95rem', color: '#666' }}>Tourist Health Helpline: <strong style={{ color: '#388E3C' }}>+91 8812 257 100</strong></p>
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

export default HealthServices;