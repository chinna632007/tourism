import React from 'react';
import './KadiyamElephantFestival.css';

const KadiyamElephantFestival = () => {
  const eventData = {
    title: "Elephant Festival",
    temple: "Kadiyam Temple",
    date: "July 17, 2026",
    description: "Elephant Festival is a traditional elephant feeding festival held at the Kadiyam Temple. This unique cultural event showcases the deep connection between elephants and East Godavari's heritage, where these magnificent creatures are honored and fed with delicious traditional food.",
    location: "Kadiyam, East Godavari",
    imageUrl: "https://placehold.co/600x800/FF9800/FFFFFF?text=Elephant+Festival",
    highlights: [
      "Traditional elephant feeding ceremony",
      "Cultural performances and rituals",
      "Traditional East Godavari cuisine",
      "Temple festivities",
      "Community participation"
    ],
    timings: "Morning - 9:00 AM onwards",
    entryFee: "Free Entry",
    significance: "Elephant Feeding (Elephant Feeding) is a significant cultural event in East Godavari that celebrates the bond between humans and elephants. The festival involves feeding elephants with traditional food items including bananas, jaggery, and other delicacies as an offering to the deity.",
    history: "The Elephant Festival festival has been celebrated for generations at the Kadiyam Temple. It is an important religious and cultural event that attracts devotees and tourists from across the region, showcasing East Godavari's unique tradition of elephant worship and care."
  };

  return (
    <div className="event-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="event-title">{eventData.title}</h1>
          <p className="event-temple">{eventData.temple}</p>
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
                <span className="meta-label">Timings:</span>
                <span className="meta-value">{eventData.timings}</span>
              </div>
              
              <div className="meta-item">
                <span className="meta-label">Entry Fee:</span>
                <span className="meta-value">{eventData.entryFee}</span>
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

            <button className="register-btn">
              Plan Your Visit
            </button>
          </div>
        </div>

        {/* Significance Section */}
        <div className="additional-info">
          <h2>Significance</h2>
          <p>{eventData.significance}</p>
        </div>

        {/* History Section */}
        <div className="additional-info">
          <h2>History</h2>
          <p>{eventData.history}</p>
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
              <h4>Godavari River Festival</h4>
              <p>Eluru</p>
              <span className="event-date">July 30 - August 2, 2026</span>
            </div>
            <div className="event-card">
              <h4>Harvest Festival</h4>
              <p>All over East Godavari</p>
              <span className="event-date">August 12, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KadiyamElephantFestival;
