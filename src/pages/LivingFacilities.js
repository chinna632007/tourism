import React from 'react';
import { Link } from 'react-router-dom';
import './LivingFacilities.css';

const livingFacilities = [
  {
    name: 'Hotel Rajahmundry Inn',
    location: 'Rajahmundry',
    type: 'Luxury Hotel',
    rating: '4.5',
    features: ['AC Rooms', 'Restaurant', 'Pool', 'Free WiFi'],
    contact: '+91 98765 43210',
    gradient: 'linear-gradient(135deg, #e0f7f9 0%, #b2ebf2 100%)'
  },
  {
    name: 'River View Residency',
    location: 'Rajahmundry',
    type: 'Premium Hotel',
    rating: '4.3',
    features: ['Godavari View', 'Restaurant', 'Parking'],
    contact: '+91 98765 43211',
    gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)'
  },
  {
    name: 'Kakinada Beach Resort',
    location: 'Kakinada',
    type: 'Beach Resort',
    rating: '4.4',
    features: ['Beach Access', 'AC Rooms', 'Restaurant'],
    contact: '+91 98765 43212',
    gradient: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)'
  },
  {
    name: 'Grand Amalapuram Hotel',
    location: 'Amalapuram',
    type: 'Budget Hotel',
    rating: '4.0',
    features: ['AC/Non-AC', 'Restaurant', 'Parking'],
    contact: '+91 98765 43213',
    gradient: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
  },
  {
    name: 'Hotel Pithapuram Palace',
    location: 'Pithapuram',
    type: 'Heritage Hotel',
    rating: '4.2',
    features: ['Heritage Rooms', 'Restaurant', 'Garden'],
    contact: '+91 98765 43214',
    gradient: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)'
  },
  {
    name: 'Papikondalu Houseboat Stay',
    location: 'Papikondalu',
    type: 'Houseboat',
    rating: '4.6',
    features: ['River Cruise', 'Meals', 'AC Rooms'],
    contact: '+91 98765 43215',
    gradient: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)'
  },
  {
    name: 'Coringa Eco Lodge',
    location: 'Coringa',
    type: 'Eco Stay',
    rating: '4.1',
    features: ['Nature Walk', 'Bird Watching', 'Meals'],
    contact: '+91 98765 43216',
    gradient: 'linear-gradient(135deg, #f1f8e9 0%, #c5e1a5 100%)'
  },
  {
    name: 'Hotel Pushpak',
    location: 'Rajahmundry',
    type: 'Budget Hotel',
    rating: '4.0',
    features: ['AC/Non-AC', '24hr Check-in', 'Restaurant'],
    contact: '+91 98765 43217',
    gradient: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)'
  },
  {
    name: 'Delta River Resort',
    location: 'Kakinada',
    type: 'Premium Resort',
    rating: '4.5',
    features: ['Pool', 'Spa', 'Restaurant', 'River View'],
    contact: '+91 98765 43218',
    gradient: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)'
  }
];

const typeIcons = {
  'Luxury Hotel': '🌴',
  'Premium Hotel': '🏨',
  'Beach Resort': '🏖️',
  'Budget Hotel': '🛏️',
  'Heritage Hotel': '🏛️',
  'Houseboat': '🚢',
  'Eco Stay': '🌿',
  'Premium Resort': '🌟'
};

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const LivingFacilities = () => {
  return (
    <div className="living-facilities-page">
      {/* Hero Section */}
      <section className="living-hero">
        <div className="living-hero-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="living-hero-particle" style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
            }} />
          ))}
        </div>

        <div className="living-hero-content">
          <div className="living-hero-badge">
            <span>🏡</span>
            <span>Where to Stay</span>
          </div>
          <h1>Accommodations</h1>
          <p>Discover the perfect accommodation for your East Godavari journey</p>
        </div>
      </section>

      <div className="container">
        {/* Accommodation Section */}
        <section className="accommodation-section">
          <div className="accommodation-header">
            <div className="accommodation-badge">Stay Options</div>
            <h2>Where to Stay</h2>
            <p>From luxury resorts to cozy homestays, find the perfect place to rest</p>
          </div>

          {/* Facilities Grid */}
          <div className="facilities-grid">
            {livingFacilities.map((facility, index) => (
              <div
                key={index}
                className="facility-card"
                style={{ '--card-gradient': facility.gradient }}
              >
                <div className="facility-card-bg">
                  <div className="facility-icon-wrapper">
                    {typeIcons[facility.type] || '🏨'}
                  </div>
                </div>
                <div className="facility-card-content">
                  <div className="facility-type">{facility.type}</div>
                  <h3 className="facility-name">{facility.name}</h3>
                  
                  <div className="facility-location">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{facility.location}</span>
                  </div>
                  
                  <div className="facility-rating">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF9D00" stroke="#FF9D00" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span>{facility.rating}/5 Rating</span>
                  </div>

                  {/* Features as Tags */}
                  <div className="facility-features">
                    {facility.features.map((feature, i) => (
                      <span key={i} className="facility-feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="facility-contact">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.5 19.5 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>{facility.contact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="back-button-wrapper">
            <Link to="/plan-trip" className="living-back-button">
              <ArrowLeft />
              Back to Plan Trip
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LivingFacilities;