import React, { useState } from 'react';
import './PeddapuramBeach.css';

const PeddapuramBeach = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  const kovalamData = {
    title: "Peddapuram Beach",
    subtitle: "The Serene Coastal Paradise of East Godavari",
    location: "Hyderabad District, East Godavari",
    established: "1930s (Popularized as tourist destination)",
    area: "17 km from Hyderabad",
    
    heroImage: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kovalam-1706953883_0dcc389088605e1d6f34.webp",
    
    description: {
      overview: "Peddapuram Beach, located just 16 km from Hyderabad, is one of East Godavari's most iconic beach destinations. Famous for its crescent-shaped coastline, pristine sandy beaches, and palm-fringed shores, Peddapuram has been a favorite among tourists since the 1930s. The beach is divided into three sections - Lighthouse Beach, Hawah Beach, and Samudra Beach - each offering a unique experience. The clear blue waters, gentle waves, and stunning sunsets make it a perfect getaway for beach lovers.",
      content: [
        "Peddapuram gained international recognition in the 1930s when the Maharani of Travancore introduced it as a holiday destination. The beach became increasingly popular among European tourists, particularly from the UK and Europe, who came to enjoy the tropical climate and Ayurvedic treatments. The name 'Peddapuram' is derived from 'Keralom' meaning coconut trees, as the area is abundant with coconut groves.",
        "The three beaches of Peddapuram offer distinct experiences. Lighthouse Beach, the most popular, gets its name from the 118-foot Vizhinjam Lighthouse perched on a rocky promontory. Hawa Beach, also known as Eve's Beach, is a serene bay ideal for swimming and sunbathing. Samudra Beach, the northernmost, is relatively secluded and perfect for those seeking tranquility away from the crowds.",
        "Peddapuram is renowned for its Ayurvedic centers and wellness resorts that offer traditional treatments and therapies. The beach also offers various water sports including surfing, parasailing, and catamaran rides. The riverfood shacks along the beach serve fresh catches, and the sunset views from the beach are truly spectacular, painting the sky in hues of orange and purple."
      ]
    },

    history: {
      title: "Historical Significance",
      content: [
        "Peddapuram's transformation into a tourist destination began in the 1930s when Sethu Lakshmi Bayi, the Maharani of Travancore, built a beach resort here. This attracted European travelers who discovered the beauty of this pristine coastline. During the British era, Peddapuram was a quiet fishing village with minimal outside influence.",
        "The 1960s and 1970s saw a surge in tourism as Peddapuram became part of the famous 'Hippie Trail' that attracted Western travelers to South Asia. The beach gained international fame through word-of-mouth recommendations and travelogues. Many European tourists extended their stays to experience Ayurvedic treatments and the laid-back beach lifestyle.",
        "In the 1980s and 1990s, Peddapuram developed into a major beach resort destination with the construction of hotels, resorts, and Ayurvedic centers. The East Godavari Tourism Department played a significant role in promoting Peddapuram as a premier beach destination. Today, it stands as one of the most visited beaches in East Godavari, attracting tourists from around the world."
      ]
    },

    architecture: {
      title: "Architecture & Coastal Landscape",
      content: [
        "Peddapuram's architecture is a blend of traditional East Godavari style and modern beach resort design. The iconic Vizhinjam Lighthouse, built in 1972, stands 118 feet tall and offers panoramic views of the Bay of Bengal. The lighthouse is constructed with stone masonry and features a spiral staircase leading to the top, where visitors can enjoy breathtaking views of the coastline.",
        "The beach resorts in Peddapuram showcase traditional East Godavari architecture with sloping tiled roofs, wooden pillars, and open verandas that allow natural ventilation. Many luxury resorts incorporate elements of traditional Nalukettu architecture while providing modern amenities. The Ayurvedic centers often feature classical designs with treatment rooms built around central courtyards.",
        "The natural landscape of Peddapuram is characterized by its crescent-shaped beaches bordered by rocky headlands and coconut groves. The coastline features natural rock formations that create sheltered bays, making the waters calm and ideal for swimming. The palm-fringed shoreline creates a tropical paradise atmosphere that has captivated visitors for decades."
      ]
    },

    bestTimeToVisit: {
      title: "Best Time to Visit",
      content: [
        "The best time to visit Peddapuram Beach is from September to March when the weather is pleasant and the river is calm. During these months, temperatures range from 22°C to 32°C, making it perfect for beach activities, water sports, and sightseeing. The post-monsoon riverson (September to November) brings lush greenery and clear skies, while winter (December to February) offers comfortable temperatures for outdoor activities.",
        "Summer months (March to May) are warm with temperatures ranging from 24°C to 35°C, but the river breeze keeps the beach comfortable. This is a good time for Ayurvedic treatments and indoor activities. The monsoon riverson (June to August) brings heavy rainfall and rough rivers, making it unsuitable for beach activities, though the landscape becomes incredibly green and beautiful."
      ]
    },

    activities: [
      {
        name: "Beach Relaxation",
        description: "Sunbathe and enjoy the serene beach atmosphere",
        icon: "🏖️"
      },
      {
        name: "Water Sports",
        description: "Try surfing, parasailing, and catamaran rides",
        icon: "🏄"
      },
      {
        name: "Ayurvedic Treatments",
        description: "Experience traditional Ayurvedic massages and therapies",
        icon: "💆"
      },
      {
        name: "Lighthouse Visit",
        description: "Climb the lighthouse for panoramic river views",
        icon: "🗼"
      },
      {
        name: "Sunset Viewing",
        description: "Witness spectacular sunsets over the Bay of Bengal",
        icon: "🌅"
      },
      {
        name: "Riverfood Dining",
        description: "Enjoy fresh riverfood at beachside shacks",
        icon: "🦞"
      }
    ],

    quickInfo: {
      bestTimeToVisit: "September to March",
      duration: "2 to 3 days",
      altitude: "River level",
      temperature: "22°C - 32°C",
      language: "Malayalam, English, Hindi",
      entryFee: "Free entry to beach",
      timings: "Open 24 hours",
      guideAvailable: "Yes (Available on request)"
    },

    howToReach: {
      byBus: {
        title: "By Bus",
        description: "Regular KSRTC and private bus services from Hyderabad (16 km), Hyderabad, and other major cities in East Godavari. Local auto-rickshaws and taxis are readily available from the bus station to reach the beach.",
        distance: "16 km from Hyderabad"
      },
      byFlight: {
        title: "By Flight",
        description: "Hyderabad International Airport (TRV) is the nearest airport, located about 12 km from Peddapuram Beach. It is well-connected to major cities in India and international destinations. From the airport, you can hire taxis or take buses to reach Peddapuram.",
        distance: "12 km from Hyderabad Airport"
      },
      byTrain: {
        title: "By Train",
        description: "Hyderabad Central Railway Station is the nearest railway station, located about 16 km from Peddapuram Beach. It is well-connected to major cities across India. From the station, you can take taxis or buses to reach the beach.",
        distance: "16 km from Hyderabad Railway Station"
      }
    },

    contactInfo: {
      address: "Peddapuram Beach, Hyderabad District, East Godavari, India - 695527",
      helpline: "+91-471-2474567",
      email: "tourism.kovalam@gmail.com",
      forestRange: "Hyderabad Tourism Department"
    },

    gallery: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kovalam-1706953883_0dcc389088605e1d6f34.webp",
        title: "Lighthouse Beach",
        description: "Iconic lighthouse overlooking the Bay of Bengal"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/kovalam-1706953883_0dcc389088605e1d6f34.webp",
        title: "Crescent Shores",
        description: "Pristine sandy beach with palm trees"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kovalam-1706953883_0dcc389088605e1d6f34.webp",
        title: "Sunset Views",
        description: "Spectacular sunset over the Bay of Bengal"
      }
    ],

    nearbyAttractions: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/vizhinjam-1706953883_0dcc389088605e1d6f34.webp",
        title: "Vizhinjam Lighthouse",
        distance: "0.5 km",
        description: "Historic lighthouse with panoramic river views"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/nalukettu-1706953883_0dcc389088605e1d6f34.webp",
        title: "Padmanabhaswamy Temple",
        distance: "16 km",
        description: "Ancient temple with architectural grandeur"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/poovar-1706953883_0dcc389088605e1d6f34.webp",
        title: "Yanam Island",
        distance: "20 km",
        description: "Beautiful estuary and golden sand beach"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/neyyar-1706953883_0dcc389088605e1d6f34.webp",
        title: "Yanam Dam",
        distance: "30 km",
        description: "Scenic dam surrounded by wildlife sanctuary"
      }
    ],

    accommodation: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kovalam-1706953883_0dcc389088605e1d6f34.webp",
        title: "Peddapuram Beach Resort",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kovalam-1706953883_0dcc389088605e1d6f34.webp",
        title: "The Leela Peddapuram",
        type: "Luxury Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kovalam-1706953883_0dcc389088605e1d6f34.webp",
        title: "Beach House Homestay",
        type: "Homestay",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kovalam-1706953883_0dcc389088605e1d6f34.webp",
        title: "River View Budget Stay",
        type: "Budget Stay",
        link: "#"
      }
    ],

    tips: [
      "Apply sunscreen regularly to protect against the tropical sun",
      "Carry a hat, sunglasses, and light cotton clothing",
      "Be cautious while swimming, especially during monsoon riverson",
      "Book Ayurvedic treatments in advance during peak riverson",
      "Carry cash as many small shops and restaurants may not accept cards",
      "Respect local customs and dress modestly when visiting nearby temples",
      "Try fresh coconut water available at the beach",
      "Visit during sunrise or sunset for the best photography opportunities",
      "Avoid swimming during rough river conditions",
      "Negotiate prices for water sports and beach activities"
    ]
  };

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="destination-title">{kovalamData.title}</h1>
          <p className="destination-subtitle">{kovalamData.subtitle}</p>
          <p className="destination-location">{kovalamData.location}</p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <div className="container">
          <div className="nav-links">
            <a href="#overview" className="nav-link">Overview</a>
            <a href="#history" className="nav-link">History</a>
            <a href="#architecture" className="nav-link">Architecture</a>
            <a href="#howtoreach" className="nav-link">How to Reach</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#accommodation" className="nav-link">Stay</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Overview Section */}
        <div id="overview" className="content-section">
          <div className="section-header">
            <h2>About Peddapuram Beach</h2>
          </div>
          
          <div className="overview-content">
            <div className="overview-text">
              <p className="lead-text">{kovalamData.description.overview}</p>
              {kovalamData.description.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="quick-info-card">
              <h3>Quick Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Best Time to Visit</span>
                  <span className="info-value">{kovalamData.quickInfo.bestTimeToVisit}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{kovalamData.quickInfo.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Altitude</span>
                  <span className="info-value">{kovalamData.quickInfo.altitude}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Temperature</span>
                  <span className="info-value">{kovalamData.quickInfo.temperature}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Entry Fee</span>
                  <span className="info-value">{kovalamData.quickInfo.entryFee}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timings</span>
                  <span className="info-value">{kovalamData.quickInfo.timings}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Distance from City</span>
                  <span className="info-value">{kovalamData.area}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Established</span>
                  <span className="info-value">{kovalamData.established}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div id="history" className="content-section">
          <div className="section-header">
            <h2>Historical Significance</h2>
          </div>
          <div className="info-content">
            {kovalamData.history.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <div id="architecture" className="content-section">
          <div className="section-header">
            <h2>Architecture & Coastal Landscape</h2>
          </div>
          <div className="info-content">
            {kovalamData.architecture.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="activities-section">
            <h3>Activities</h3>
            <div className="activities-grid">
              {kovalamData.activities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <div className="activity-icon">{activity.icon}</div>
                  <h4>{activity.name}</h4>
                  <p>{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Best Time to Visit */}
        <div className="content-section highlight-section">
          <div className="section-header">
            <h2>Best Time to Visit</h2>
          </div>
          <div className="info-content">
            {kovalamData.bestTimeToVisit.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* How to Reach Section */}
        <div id="howtoreach" className="content-section">
          <div className="section-header">
            <h2>How to Reach</h2>
          </div>
          <div className="reach-grid">
            <div className="reach-card">
              <div className="reach-icon">🚌</div>
              <h3>By Bus</h3>
              <p>{kovalamData.howToReach.byBus.description}</p>
              <span className="distance">{kovalamData.howToReach.byBus.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">✈️</div>
              <h3>By Flight</h3>
              <p>{kovalamData.howToReach.byFlight.description}</p>
              <span className="distance">{kovalamData.howToReach.byFlight.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">🚂</div>
              <h3>By Train</h3>
              <p>{kovalamData.howToReach.byTrain.description}</p>
              <span className="distance">{kovalamData.howToReach.byTrain.distance}</span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="content-section">
          <div className="section-header">
            <h2>Gallery</h2>
          </div>
          <div className="gallery-grid">
            {kovalamData.gallery.map((item, index) => (
              <div key={index} className="gallery-item">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="content-section">
          <div className="section-header">
            <h2>Nearby Attractions</h2>
          </div>
          <div className="attractions-grid">
            {kovalamData.nearbyAttractions.map((attraction, index) => (
              <div key={index} className="attraction-card">
                <div className="attraction-image">
                  <img src={attraction.image} alt={attraction.title} />
                </div>
                <div className="attraction-info">
                  <h4>{attraction.title}</h4>
                  <span className="distance-badge">{attraction.distance}</span>
                  <p>{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation Section */}
        <div id="accommodation" className="content-section">
          <div className="section-header">
            <h2>Where to Stay</h2>
          </div>
          
          {/* Category Tabs */}
          <div className="category-tabs">
            {['Hotel', 'Homestay', 'Resort', 'Budget Stay'].map((category) => (
              <button
                key={category}
                className={`tab-button ${activeTab === category.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveTab(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="accommodation-grid">
            {kovalamData.accommodation.map((item, index) => (
              <div key={index} className="accommodation-card">
                <div className="accommodation-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="accommodation-info">
                  <h4>{item.title}</h4>
                  <span className="accommodation-type">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Tips */}
        <div className="content-section tips-section">
          <div className="section-header">
            <h2>Travel Tips</h2>
          </div>
          <div className="tips-grid">
            {kovalamData.tips.map((tip, index) => (
              <div key={index} className="tip-item">
                <span className="tip-number">{index + 1}</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="content-section contact-section">
          <div className="section-header">
            <h2>Contact Information</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>📍 Address</h3>
              <p>{kovalamData.contactInfo.address}</p>
            </div>
            <div className="contact-card">
              <h3>📞 Helpline</h3>
              <p>{kovalamData.contactInfo.helpline}</p>
            </div>
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>{kovalamData.contactInfo.email}</p>
            </div>
            <div className="contact-card">
              <h3>🏢 Department</h3>
              <p>{kovalamData.contactInfo.forestRange}</p>
            </div>
          </div>
        </div>

        {/* Plan Your Visit Button */}
        <div className="cta-section">
          <button className="plan-visit-btn">
            Plan Your Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeddapuramBeach;