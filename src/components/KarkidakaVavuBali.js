import React from 'react';
import './KarkidakaVavuBali.css';

const KarkidakaVavuBali = () => {
  const eventData = {
    title: "Harvest Festival",
    subtitle: "Annual Ritual for Ancestors",
    date: "August 12, 2026",
    description: "Harvest Festival is a significant Hindu ritual performed during the month of Karkidakam (July-August) to honor and pay respects to departed ancestors. This sacred ceremony involves offering Bali (ritual offerings) to ancestors on the banks of rivers, lakes, and other water bodies, seeking their blessings and peace for their souls.",
    location: "All over East Godavari",
    imageUrl: "https://placehold.co/600x800/4CAF50/FFFFFF?text=Harvest+Festival",
    highlights: [
      "Sacred ritual for ancestors",
      "Offerings to departed souls",
      "Performed on river banks and water bodies",
      "Special pujas and ceremonies",
      "Traditional offerings include rice, sesame seeds, and flowers",
      "Community participation across East Godavari",
      "Religious significance in Hindu tradition",
      "Family gatherings and ceremonies"
    ],
    timings: "Morning - Auspicious timings as per Hindu calendar",
    entryFee: "Free for all devotees",
    significance: "Harvest Festival is an important ritual in East Godavari's Hindu tradition. It is believed that performing Bali on this day helps the departed souls attain peace and blessings. The ritual is performed during the new moon day (Amavasya) in the month of Karkidakam, which is considered highly auspicious for honoring ancestors.",
    rituals: [
      "Special pujas and homams (fire rituals)",
      "Offering of Bali to ancestors",
      "Tarpana (ritual offering of water)",
      "Feeding of Brahmins and poor people",
      "Recitation of Vedic mantras",
      "Offering of sesame seeds and rice",
      "Lighting of lamps and candles",
      "Visiting temples and holy rivers"
    ],
    bestPlaces: [
      "Hyderabad - Padmanabhaswamy Temple",
      "Kakinada - Kakinada Temple and Yanam River",
      "Godavari - Rajahmundry Temple",
      "Eluru - Tali Temple and Kallayi River",
      "Tanuku - Thirunavaya Temple",
      "Tadepalligudem - Nenmara Vallanghy Temple"
    ]
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

        {/* Rituals Section */}
        <div className="additional-info">
          <h2>Rituals and Ceremonies</h2>
          <ul className="rituals-list">
            {eventData.rituals.map((ritual, index) => (
              <li key={index}>{ritual}</li>
            ))}
          </ul>
        </div>

        {/* Best Places Section */}
        <div className="additional-info">
          <h2>Best Places to Perform Bali</h2>
          <ul className="places-list">
            {eventData.bestPlaces.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
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
              <h4>Elephant Festival</h4>
              <p>Njangattiri, East Godavari</p>
              <span className="event-date">July 17, 2026</span>
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

export default KarkidakaVavuBali;