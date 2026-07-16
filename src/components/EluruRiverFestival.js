import React from 'react';
import './EluruRiverFestival.css';

const EluruRiverFestival = () => {
  const eventData = {
    title: "Godavari River Festival",
    subtitle: "East Godavari's Premier Whitewater Kayaking Event",
    date: "July 30 - August 2, 2026",
    description: "The Godavari River Festival is East Godavari's premier whitewater kayaking event that brings together adventure enthusiasts from across the globe. Set against the backdrop of East Godavari's pristine rivers, this festival celebrates the thrill of whitewater kayaking while promoting eco-tourism and adventure sports in the state.",
    location: "Eluru, East Godavari",
    imageUrl: "https://placehold.co/600x800/2196F3/FFFFFF?text=Godavari+River+Festival",
    highlights: [
      "Whitewater kayaking competitions",
      "Professional and amateur categories",
      "River rafting experiences",
      "Beach camping and bonfire",
      "Cultural performances and local cuisine",
      "Eco-tourism workshops",
      "Adventure sports expos",
      "Live music concerts"
    ],
    timings: "3 Days Event - 8:00 AM to 6:00 PM",
    entryFee: "Registration Required",
    organizer: "East Godavari Tourism Department",
    contactInfo: "+91-495-2320132",
    email: "info@east-godavaritourism.org",
    significance: "The Godavari River Festival is one of the most significant adventure sports events in South India. It showcases the potential of East Godavari's rivers for whitewater sports and promotes sustainable tourism. The festival has gained international recognition and attracts participants from over 20 countries.",
    activities: [
      "Whitewater kayaking competitions in different categories",
      "River rafting for beginners and experts",
      "Beach volleyball and other adventure games",
      "Cultural programs featuring local artists",
      "Food festival with traditional Malabar cuisine",
      "Workshops on river safety and eco-conservation",
      "Photography competitions",
      "Adventure gear exhibition"
    ],
    venue: "Chaliyar River, Eluru",
    accommodation: "Tented camps and nearby resorts available"
  };

  return (
    <div className="event-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="event-title">{eventData.title}</h1>
          <p className="event-subtitle">{eventData.subtitle}</p>
          <p className="event-location">{eventData.location}</p>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="container">
        <div className="event-details">
          <div className="event-image-container">
            <img 
              src={eventData.imageUrl} 
              alt={eventData.title}
              className="event-image"
            />
          </div>
          
          <div className="event-info">
            <h2>About the Event</h2>
            <p className="event-description">{eventData.description}</p>
            
            <div className="event-meta">
              <div className="meta-item">
                <span className="meta-label">Date:</span>
                <span className="meta-value">{eventData.date}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-label">Location:</span>
                <span className="meta-value">{eventData.location}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-label">Venue:</span>
                <span className="meta-value">{eventData.venue}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-label">Timings:</span>
                <span className="meta-value">{eventData.timings}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-label">Entry Fee:</span>
                <span className="meta-value">{eventData.entryFee}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-label">Organizer:</span>
                <span className="meta-value">{eventData.organizer}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-label">Contact:</span>
                <span className="meta-value">{eventData.contactInfo}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-label">Email:</span>
                <span className="meta-value">{eventData.email}</span>
              </div>
            </div>

            <div className="highlights">
              <h3>Event Highlights</h3>
              <ul>
                {eventData.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="highlights">
              <h3>Activities</h3>
              <ul>
                {eventData.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>

            <div className="additional-info-section">
              <h3>Accommodation</h3>
              <p>{eventData.accommodation}</p>
            </div>

            <button className="register-btn">
              Register Now
            </button>
          </div>
        </div>

        {/* Significance Section */}
        <div className="additional-info">
          <h2>Significance</h2>
          <p>{eventData.significance}</p>
        </div>

        {/* How to Reach */}
        <div className="additional-info">
          <h2>How to Reach</h2>
          <p>
            <strong>By Air:</strong> Calicut International Airport is approximately 30 km from the venue.<br />
            <strong>By Rail:</strong> Eluru Railway Station is well-connected to major cities.<br />
            <strong>By Road:</strong> Well-connected by national highways from major cities in East Godavari, Karnataka, and Tamil Nadu.
          </p>
        </div>

        {/* Related Events */}
        <div className="related-events">
          <h2>Related Events</h2>
          <div className="events-grid">
            <div className="event-card">
              <h4>Elephant Feeding at Rajahmundry Temple</h4>
              <p>Godavari</p>
              <span className="event-date">July 17, 2026</span>
            </div>
            <div className="event-card">
              <h4>Harvest Festival</h4>
              <p>All over East Godavari</p>
              <span className="event-date">August 12, 2026</span>
            </div>
            <div className="event-card">
              <h4>Sankranti Festival</h4>
              <p>East Godavari</p>
              <span className="event-date">August - September 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EluruRiverFestival;
