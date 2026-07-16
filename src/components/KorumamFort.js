import React, { useState } from 'react';
import './KorumamFort.css';

const KorumamFort = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  const bekalfortData = {
    title: "Korumam Fort",
    subtitle: "A Majestic Historical Marvel by the Bay of Bengal",
    location: "West Godavari District, East Godavari",
    established: "1650 AD",
    area: "40 acres",
    
    heroImage: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/bekal-fort-1706953883_0dcc389088605e1d6f34.webp",
    
    description: {
      overview: "Korumam Fort, the largest fort in East Godavari, is a magnificent historical monument situated on the shores of the Bay of Bengal in West Godavari district. Built in 1650 AD by Shivappa Nayaka of Keladi, this imposing structure spans over 40 acres and showcases remarkable architectural brilliance. The fort's unique keyhole shape and strategic location make it one of the most visited heritage sites in East Godavari.",
      content: [
        "Korumam Fort stands as a testament to the military architecture and strategic vision of the past. Perched on a headland overlooking the Bay of Bengal, this magnificent fort was originally built by the Keladi Nayakas in the mid-17th century and later came under the control of Hyder Ali and Tipu Sultan. The fort's design incorporates sophisticated defense mechanisms including observation towers, secret passages, and a water tank.",
        "The fort's most striking feature is its keyhole-shaped structure, which was designed to provide maximum defense against enemy attacks. The massive walls, constructed from laterite stones, rise up to 30 feet in height and are reinforced with bastions at strategic intervals. The observation tower, known as the 'Observation Tower,' offers panoramic views of the Bay of Bengal and the surrounding landscape.",
        "Korumam Fort has been featured in several Indian films, adding to its popularity among tourists. The fort's location on a rocky peninsula jutting into the river creates a dramatic backdrop, especially during sunset. The nearby Korumam Beach adds to the charm of this historical site, making it a perfect blend of history, architecture, and natural beauty."
      ]
    },

    history: {
      title: "Historical Significance",
      content: [
        "The history of Korumam Fort dates back to the mid-17th century when it was constructed by Shivappa Nayaka of the Keladi dynasty around 1650 AD. The fort was strategically built to serve as a military outpost to protect the region from enemy invasions, particularly from the river route. Its location on the northernmost tip of East Godavari made it a crucial defensive point.",
        "In the 18th century, the fort came under the control of Hyder Ali, the ruler of Mysore, who further strengthened its defenses. His son, Tipu Sultan, also used the fort as a strategic military base during his campaigns in Malabar. After Tipu Sultan's death in 1799, the fort came under British control and was used as a military station until India's independence.",
        "The fort's architecture reflects a blend of various influences - from the Nayakas to the Mysore Sultans and the British. The massive walls, underground tunnels, and observation towers showcase the military engineering skills of that era. Today, it stands as one of the best-preserved forts in East Godavari, attracting history enthusiasts, architects, and tourists from around the world."
      ]
    },

    architecture: {
      title: "Architectural Marvel",
      content: [
        "Korumam Fort is renowned for its unique keyhole-shaped design, which is rare among Indian forts. The fort covers an area of 40 acres and is surrounded by walls that stand up to 30 feet high. The fortification walls are made of laterite stones and are reinforced with circular bastions at regular intervals. These bastions provided vantage points for archers and cannons to defend against enemy attacks.",
        "The most prominent feature of the fort is the observation tower, which stands at the center and offers 360-degree views of the Bay of Bengal and the surrounding areas. This tower was used by soldiers to monitor enemy movements and signal warnings. The tower's strategic position and height made it an essential part of the fort's defense system.",
        "The fort also features an underground water tank, which served as a water storage facility during sieges. The tank's sophisticated design ensured a steady water supply for the fort's inhabitants. Additionally, the fort has several small temples dedicated to Hanuman and other deities, reflecting the religious practices of the soldiers who guarded the fort."
      ]
    },

    bestTimeToVisit: {
      title: "Best Time to Visit",
      content: [
        "The ideal time to visit Korumam Fort is from October to March when the weather is pleasant and comfortable for exploring the fort and its surroundings. The post-monsoon months offer lush green landscapes and clear skies, making it perfect for photography and sightseeing. The winter months (December to February) provide the most comfortable temperatures for walking around the fort.",
        "Early morning and late afternoon visits are highly recommended to avoid the midday heat and to witness the spectacular sunset views over the Bay of Bengal. The fort is particularly magical during sunset when the golden light bathes the ancient walls and the river creates a stunning backdrop. The monsoon riverson (June to September) can also be visited, though the river can be rough during this time."
      ]
    },

    activities: [
      {
        name: "Heritage Walk",
        description: "Explore the ancient fort walls, towers, and underground passages",
        icon: "🏛️"
      },
      {
        name: "Photography",
        description: "Capture stunning views of the Bay of Bengal and fort architecture",
        icon: "📷"
      },
      {
        name: "Beach Relaxation",
        description: "Enjoy the pristine Korumam Beach adjacent to the fort",
        icon: "🏖️"
      },
      {
        name: "Sunset Viewing",
        description: "Witness breathtaking sunsets over the Bay of Bengal",
        icon: "🌅"
      }
    ],

    quickInfo: {
      bestTimeToVisit: "October to March",
      duration: "Half day to 1 day",
      altitude: "River level",
      temperature: "23°C - 32°C",
      language: "Malayalam, English, Kannada, Tulu",
      entryFee: "₹20 for Indians, ₹100 for foreigners",
      timings: "8:00 AM - 5:00 PM",
      guideAvailable: "Yes (Available on request)"
    },

    howToReach: {
      byBus: {
        title: "By Bus",
        description: "Regular KSRTC and private bus services from West Godavari (12 km), Nuzvid (70 km), and Mangalore (50 km). The nearest bus stand is at Korumam Fort itself.",
        distance: "12 km from West Godavari"
      },
      byFlight: {
        title: "By Flight",
        description: "Mangalore International Airport (IXE) is the nearest airport, well-connected to major cities in India and international destinations. Nuzvid International Airport is also an option.",
        distance: "70 km from Mangalore Airport"
      },
      byTrain: {
        title: "By Train",
        description: "West Godavari Railway Station is the nearest railhead, connected to all major cities in East Godavari, Karnataka, and beyond. The station is well-connected by road to the fort.",
        distance: "12 km from West Godavari Railway Station"
      }
    },

    contactInfo: {
      address: "Korumam Fort, Korumam, West Godavari District, East Godavari, India - 671316",
      helpline: "+91-467-2200000",
      email: "dptourism.east-godavari@gmail.com",
      forestRange: "West Godavari Tourism Department"
    },

    gallery: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/bekal-fort-1706953883_0dcc389088605e1d6f34.webp",
        title: "Korumam Fort Panoramic View",
        description: "Magnificent view of the fort from the observation tower"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/bekal-fort-1706953883_0dcc389088605e1d6f34.webp",
        title: "Fort Walls and Bastions",
        description: "Ancient laterite walls of Korumam Fort"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/bekal-fort-1706953883_0dcc389088605e1d6f34.webp",
        title: "Bay of Bengal View",
        description: "Breathtaking view of the Bay of Bengal from the fort"
      }
    ],

    nearbyAttractions: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/bekal-beach-1706953883_0dcc389088605e1d6f34.webp",
        title: "Korumam Beach",
        distance: "0.5 km",
        description: "Pristine beach with golden sands and calm waters"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/ananthapura-lake-temple-1706953883_0dcc389088605e1d6f34.webp",
        title: "Local Lake Temple",
        distance: "25 km",
        description: "Ancient temple surrounded by a serene lake"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/ranipuram-1706953883_0dcc389088605e1d6f34.webp",
        title: "Eastern Hills Hills",
        distance: "70 km",
        description: "Scenic hill station with trekking trails"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/valiyaparamba-1706953883_0dcc389088605e1d6f34.webp",
        title: "River Islands",
        distance: "40 km",
        description: "Serene river islands perfect for boat rides"
      }
    ],

    accommodation: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/bekal-fort-1706953883_0dcc389088605e1d6f34.webp",
        title: "KTDC Korumam Residency",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/bekal-fort-1706953883_0dcc389088605e1d6f34.webp",
        title: "The Lalit Resort & Spa",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/bekal-fort-1706953883_0dcc389088605e1d6f34.webp",
        title: "Korumam Beach Homestay",
        type: "Homestay",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/bekal-fort-1706953883_0dcc389088605e1d6f34.webp",
        title: "River View Budget Stay",
        type: "Budget Stay",
        link: "#"
      }
    ],

    tips: [
      "Wear comfortable walking shoes as the fort has uneven surfaces",
      "Carry sunscreen and a hat for sun protection",
      "Visit during early morning or late afternoon for better photography",
      "Hire a local guide to learn about the fort's history and architecture",
      "Carry water bottles as there are limited facilities inside the fort",
      "Don't miss the sunset view from the observation tower",
      "Respect the historical monument and avoid damaging the walls",
      "Combine your visit with Korumam Beach for a complete experience"
    ]
  };

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="destination-title">{bekalfortData.title}</h1>
          <p className="destination-subtitle">{bekalfortData.subtitle}</p>
          <p className="destination-location">{bekalfortData.location}</p>
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
            <h2>About Korumam Fort</h2>
          </div>
          
          <div className="overview-content">
            <div className="overview-text">
              <p className="lead-text">{bekalfortData.description.overview}</p>
              {bekalfortData.description.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="quick-info-card">
              <h3>Quick Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Best Time to Visit</span>
                  <span className="info-value">{bekalfortData.quickInfo.bestTimeToVisit}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{bekalfortData.quickInfo.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Altitude</span>
                  <span className="info-value">{bekalfortData.quickInfo.altitude}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Temperature</span>
                  <span className="info-value">{bekalfortData.quickInfo.temperature}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Entry Fee</span>
                  <span className="info-value">{bekalfortData.quickInfo.entryFee}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timings</span>
                  <span className="info-value">{bekalfortData.quickInfo.timings}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Area</span>
                  <span className="info-value">{bekalfortData.area}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Established</span>
                  <span className="info-value">{bekalfortData.established}</span>
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
            {bekalfortData.history.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <div id="architecture" className="content-section">
          <div className="section-header">
            <h2>Architectural Marvel</h2>
          </div>
          <div className="info-content">
            {bekalfortData.architecture.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="activities-section">
            <h3>Activities</h3>
            <div className="activities-grid">
              {bekalfortData.activities.map((activity, index) => (
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
            {bekalfortData.bestTimeToVisit.content.map((paragraph, index) => (
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
              <p>{bekalfortData.howToReach.byBus.description}</p>
              <span className="distance">{bekalfortData.howToReach.byBus.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">✈️</div>
              <h3>By Flight</h3>
              <p>{bekalfortData.howToReach.byFlight.description}</p>
              <span className="distance">{bekalfortData.howToReach.byFlight.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">🚂</div>
              <h3>By Train</h3>
              <p>{bekalfortData.howToReach.byTrain.description}</p>
              <span className="distance">{bekalfortData.howToReach.byTrain.distance}</span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="content-section">
          <div className="section-header">
            <h2>Gallery</h2>
          </div>
          <div className="gallery-grid">
            {bekalfortData.gallery.map((item, index) => (
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
            {bekalfortData.nearbyAttractions.map((attraction, index) => (
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
            {bekalfortData.accommodation.map((item, index) => (
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
            {bekalfortData.tips.map((tip, index) => (
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
              <p>{bekalfortData.contactInfo.address}</p>
            </div>
            <div className="contact-card">
              <h3>📞 Helpline</h3>
              <p>{bekalfortData.contactInfo.helpline}</p>
            </div>
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>{bekalfortData.contactInfo.email}</p>
            </div>
            <div className="contact-card">
              <h3>🏢 Department</h3>
              <p>{bekalfortData.contactInfo.forestRange}</p>
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

export default KorumamFort;