import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './DestinationServices.css';

const DestinationServices = () => {
  const { destinationId } = useParams();

  const allDestinationData = {
    munnar: {
      name: 'Rajahmundry',
      services: [
        {
          type: 'tourist-office',
          title: 'Tourist Office',
          icon: '🏢',
          description: 'Official tourism information center with travel assistance',
          address: 'Tourist Complex, Main Road, Rajahmundry - 533101, Near Bus Stand',
          contact: '+91 99887 76601',
          email: 'office.rajahmundry@egtourism.org',
          officer: 'P. Satyanarayana',
          designation: 'Tourism Officer',
          color: '#1976D2'
        },
        { type: 'tour-guide', title: 'Tour Guide', icon: '👤', description: 'Professional licensed guides for sightseeing and tours', color: '#2E7D32' },
        { type: 'police-services', title: 'Police Services', icon: '👮', description: 'Tourist police assistance and security services', color: '#D32F2F' },
        { type: 'health-services', title: 'Health Services', icon: '🏥', description: 'Medical facilities and emergency healthcare for tourists', color: '#388E3C' }
      ]
    },
    thekkady: {
      name: 'Kakinada',
      services: [
        { type: 'tourist-office', title: 'Tourist Office', icon: '🏢', description: 'Official tourism information center with travel assistance', address: 'Tourist Information Center, Kakinada Beach Road, Kakinada - 533001', contact: '+91 99887 76602', email: 'office.kakinada@egtourism.org', officer: 'V. Ramarao', designation: 'Tourism Officer', color: '#1976D2' },
        { type: 'tour-guide', title: 'Tour Guide', icon: '👤', description: 'Professional licensed guides for sightseeing and tours', color: '#2E7D32' },
        { type: 'police-services', title: 'Police Services', icon: '👮', description: 'Tourist police assistance and security services', color: '#D32F2F' },
        { type: 'health-services', title: 'Health Services', icon: '🏥', description: 'Medical facilities and emergency healthcare for tourists', color: '#388E3C' }
      ]
    },
    wayanad: {
      name: 'Amalapuram',
      services: [
        { type: 'tourist-office', title: 'Tourist Office', icon: '🏢', description: 'Official tourism information center with travel assistance', address: 'Tourist Office, Market Road, Amalapuram - 533201', contact: '+91 99887 76603', email: 'office.amalapuram@egtourism.org', officer: 'T. Subba Rao', designation: 'Tourism Officer', color: '#1976D2' },
        { type: 'tour-guide', title: 'Tour Guide', icon: '👤', description: 'Professional licensed guides for sightseeing and tours', color: '#2E7D32' },
        { type: 'police-services', title: 'Police Services', icon: '👮', description: 'Tourist police assistance and security services', color: '#D32F2F' },
        { type: 'health-services', title: 'Health Services', icon: '🏥', description: 'Medical facilities and emergency healthcare for tourists', color: '#388E3C' }
      ]
    },
    kumarakom: {
      name: 'Ramanayuni',
      services: [
        { type: 'tourist-office', title: 'Tourist Office', icon: '🏢', description: 'Official tourism information center with travel assistance', address: 'Tourist Information Center, Ramanayuni Temple Road, Ramanayuni - 533210', contact: '+91 99887 76604', email: 'office.ramanayuni@egtourism.org', officer: 'M. Suryanarayana', designation: 'Tourism Officer', color: '#1976D2' },
        { type: 'tour-guide', title: 'Tour Guide', icon: '👤', description: 'Professional licensed guides for sightseeing and tours', color: '#2E7D32' },
        { type: 'police-services', title: 'Police Services', icon: '👮', description: 'Tourist police assistance and security services', color: '#D32F2F' },
        { type: 'health-services', title: 'Health Services', icon: '🏥', description: 'Medical facilities and emergency healthcare for tourists', color: '#388E3C' }
      ]
    },
    kovalam: {
      name: 'Peddapuram',
      services: [
        { type: 'tourist-office', title: 'Tourist Office', icon: '🏢', description: 'Official tourism information center with travel assistance', address: 'Tourist Office, Peddapuram Bus Stand Road, Peddapuram - 533437', contact: '+91 99887 76605', email: 'office.peddapuram@egtourism.org', officer: 'L. Narasimha', designation: 'Tourism Officer', color: '#1976D2' },
        { type: 'tour-guide', title: 'Tour Guide', icon: '👤', description: 'Professional licensed guides for sightseeing and tours', color: '#2E7D32' },
        { type: 'police-services', title: 'Police Services', icon: '👮', description: 'Tourist police assistance and security services', color: '#D32F2F' },
        { type: 'health-services', title: 'Health Services', icon: '🏥', description: 'Medical facilities and emergency healthcare for tourists', color: '#388E3C' }
      ]
    },
    bekal: {
      name: 'Korumam Fort',
      services: [
        { type: 'tourist-office', title: 'Tourist Office', icon: '🏢', description: 'Official tourism information center with travel assistance', address: 'Tourist Information Center, Korumam Fort Road, Korumam - 533222', contact: '+91 99887 76606', email: 'office.korumam@egtourism.org', officer: 'B. Krishna Murthy', designation: 'Tourism Officer', color: '#1976D2' },
        { type: 'tour-guide', title: 'Tour Guide', icon: '👤', description: 'Professional licensed guides for sightseeing and tours', color: '#2E7D32' },
        { type: 'police-services', title: 'Police Services', icon: '👮', description: 'Tourist police assistance and security services', color: '#D32F2F' },
        { type: 'health-services', title: 'Health Services', icon: '🏥', description: 'Medical facilities and emergency healthcare for tourists', color: '#388E3C' }
      ]
    },
    athirappilly: {
      name: 'Pithampur',
      services: [
        { type: 'tourist-office', title: 'Tourist Office', icon: '🏢', description: 'Official tourism information center with travel assistance', address: 'Tourist Office, Pithampur Town Center, Pithampur - 533250', contact: '+91 99887 76607', email: 'office.pithampur@egtourism.org', officer: 'K. Gopala Rao', designation: 'Tourism Officer', color: '#1976D2' },
        { type: 'tour-guide', title: 'Tour Guide', icon: '👤', description: 'Professional licensed guides for sightseeing and tours', color: '#2E7D32' },
        { type: 'police-services', title: 'Police Services', icon: '👮', description: 'Tourist police assistance and security services', color: '#D32F2F' },
        { type: 'health-services', title: 'Health Services', icon: '🏥', description: 'Medical facilities and emergency healthcare for tourists', color: '#388E3C' }
      ]
    },
    thattekkad: {
      name: 'Kadiyam',
      services: [
        { type: 'tourist-office', title: 'Tourist Office', icon: '🏢', description: 'Official tourism information center with travel assistance', address: 'Tourist Information Center, Kadiyam Village, Kadiyam - 533240', contact: '+91 99887 76608', email: 'office.kadiyam@egtourism.org', officer: 'S. Rama Devi', designation: 'Tourism Officer', color: '#1976D2' },
        { type: 'tour-guide', title: 'Tour Guide', icon: '👤', description: 'Professional licensed guides for sightseeing and tours', color: '#2E7D32' },
        { type: 'police-services', title: 'Police Services', icon: '👮', description: 'Tourist police assistance and security services', color: '#D32F2F' },
        { type: 'health-services', title: 'Health Services', icon: '🏥', description: 'Medical facilities and emergency healthcare for tourists', color: '#388E3C' }
      ]
    },
    kavvayi: {
      name: 'Kotipalli River Islands',
      services: [
        { type: 'tourist-office', title: 'Tourist Office', icon: '🏢', description: 'Official tourism information center with travel assistance', address: 'Tourist Office, Kotipalli Jetty Road, Kotipalli - 533230', contact: '+91 99887 76609', email: 'office.kotipalli@egtourism.org', officer: 'D. Satyanarayana', designation: 'Tourism Officer', color: '#1976D2' },
        { type: 'tour-guide', title: 'Tour Guide', icon: '👤', description: 'Professional licensed guides for sightseeing and tours', color: '#2E7D32' },
        { type: 'police-services', title: 'Police Services', icon: '👮', description: 'Tourist police assistance and security services', color: '#D32F2F' },
        { type: 'health-services', title: 'Health Services', icon: '🏥', description: 'Medical facilities and emergency healthcare for tourists', color: '#388E3C' }
      ]
    },
    vagamon: {
      name: 'Gurunandan',
      services: [
        { type: 'tourist-office', title: 'Tourist Office', icon: '🏢', description: 'Official tourism information center with travel assistance', address: 'Tourist Information Center, Gurunandan Temple Complex, Gurunandan - 533260', contact: '+91 99887 76610', email: 'office.gurunandan@egtourism.org', officer: 'G. Nageswar Rao', designation: 'Tourism Officer', color: '#1976D2' },
        { type: 'tour-guide', title: 'Tour Guide', icon: '👤', description: 'Professional licensed guides for sightseeing and tours', color: '#2E7D32' },
        { type: 'police-services', title: 'Police Services', icon: '👮', description: 'Tourist police assistance and security services', color: '#D32F2F' },
        { type: 'health-services', title: 'Health Services', icon: '🏥', description: 'Medical facilities and emergency healthcare for tourists', color: '#388E3C' }
      ]
    }
  };

  const destinationData = allDestinationData[destinationId] || { name: destinationId, services: [] };
  const services = destinationData.services;

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="services-hero-particle" style={{
              width: `${4 + Math.random() * 4}px`,
              height: `${4 + Math.random() * 4}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="hero-decorative-line hero-decorative-line-1"></div>
        <div className="hero-decorative-line hero-decorative-line-2"></div>
        <div className="hero-decorative-circle hero-decorative-circle-1"></div>
        <div className="hero-decorative-circle hero-decorative-circle-2"></div>

        <div className="services-hero-content">
          <div className="services-hero-badge">
            <span>✈️</span>
            <span>Travel Smart</span>
          </div>
          <h1>East Godavari Service Center</h1>
          <p>Everything you need for your East Godavari adventure</p>
        </div>
      </section>

      <div className="services-grid-section">
        <div className="services-section-header">
          <div className="services-section-badge">Available Services</div>
          <h2>Service Centers</h2>
          <p>Click on any service card to explore detailed information and contact options</p>
        </div>

        {/* Service Cards Grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const isTouristOffice = service.type === 'tourist-office';
            const isTourGuide = service.type === 'tour-guide';
            const isPoliceServices = service.type === 'police-services';
            const isHealthServices = service.type === 'health-services';
            const isClickable = isTouristOffice || isTourGuide || isPoliceServices || isHealthServices;
            let linkPath = '';
            if (isTouristOffice) linkPath = `/services/${destinationId}/tourist-office`;
            if (isTourGuide) linkPath = `/services/${destinationId}/tour-guide`;
            if (isPoliceServices) linkPath = `/services/${destinationId}/police-services`;
            if (isHealthServices) linkPath = `/services/${destinationId}/health-services`;
            
            const CardWrapper = isClickable ? Link : 'div';
            const cardProps = isClickable ? { to: linkPath } : {};

            return (
              <CardWrapper key={index} {...cardProps} className="service-card">
                <div 
                  className="service-card-icon"
                  style={{ 
                    background: `radial-gradient(circle, ${service.color}20, ${service.color}10)`,
                    color: service.color
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                {isClickable && <div className="service-card-btn">Explore →</div>}
              </CardWrapper>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="back-button-wrapper">
          <Link to="/trending-places" className="services-back-button">
            ‹ Back to Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationServices;