import React from 'react';
import './RajahmundryElephantFeeding.css';

const RajahmundryElephantFeeding = () => {
  const eventData = {
    title: "Elephant Feeding",
    temple: "Rajahmundry Temple",
    date: "July 17, 2026",
    description: "Elephant Feeding (Elephant Feeding Festival) is one of the most spectacular and unique festivals celebrated at the Rajahmundry Temple in Godavari. This grand festival is dedicated to feeding elephants with traditional delicacies and is a magnificent display of East Godavari's deep-rooted cultural heritage and the sacred bond between humans and elephants.",
    location: "Rajahmundry Temple, Godavari, East Godavari",
    imageUrl: "https://placehold.co/600x800/FF9800/FFFFFF?text=Elephant+Feeding",
    highlights: [
      "Grand elephant feeding ceremony",
      "Over 50 elephants participate",
      "Traditional offerings of bananas, jaggery, and coconut",
      "Cultural performances and temple rituals",
      "Massive community gathering",
      "Traditional East Godavari percussion performances"
    ],
    timings: "Morning - 9:00 AM onwards",
    entryFee: "Free Entry",
    significance: "Elephant Feeding is considered one of the most important elephant festivals in East Godavari. The festival is believed to bring prosperity and good fortune. Elephants are decorated elaborately and fed with a variety of traditional food items as an offering to the deity.",
    history: "The Elephant Feeding festival at Rajahmundry Temple has a history spanning several centuries. It is conducted as part of the temple's annual festival and attracts thousands of devotees and tourists from around the world."
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
              <h4>Godavari Pooram</h4>
              <p>Godavari</p>
              <span className="event-date">April/May 2026</span>
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

export default RajahmundryElephantFeeding;
