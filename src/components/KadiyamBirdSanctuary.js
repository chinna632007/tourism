import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './KadiyamBirdSanctuary.css';

const KadiyamBirdSanctuary = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  const sanctuaryData = {
    title: "Kadiyam Bird Sanctuary",
    subtitle: "A Fascinating Getaway to an Avian Paradise",
    location: "Kadiyam, Kakinada District, East Godavari",
    established: "1983",
    area: "25 sq km",
    
    Image: "/rajahmundry-card.png",
    
    description: {
      overview: "Kadiyam Bird Sanctuary, situated in the Kadiyam region of Kakinada district, is one of the finest bird sanctuaries in India. Spread over 25 sq km, it is home to hundreds of species of exotic and endemic birds. The sanctuary was designed by the legendary ornithologist Dr. Salim Ali, making it a significant site for bird watchers and nature enthusiasts.",
      content: [
        "Nestled in the lush forests of the Eastern Ghats, Kadiyam Bird Sanctuary is a paradise for ornithologists and nature lovers. Established in 1983, this 25-square-kilometer sanctuary is located on the northern bank of the Yanam River and is considered one of the richest bird habitats in India.",
        "The sanctuary was designed by Dr. Salim Ali, the renowned 'Birdman of India,' who conducted a comprehensive bird survey here in the 1930s. His findings revealed the incredible biodiversity of the region, leading to its designation as a bird sanctuary. The dense deciduous, semi-evergreen, and evergreen forests provide the perfect habitat for a diverse range of avian species.",
        "The terrain of Kadiyam varies from flatlands to rolling hills, with the Yanam River flowing through it, creating a unique ecosystem that supports both forest and aquatic birds. The sanctuary's location in the Eastern Ghats, a biodiversity hotspot, adds to its ecological significance."
      ]
    },

    birdSpecies: {
      title: "Avian Diversity",
      content: [
        "Kadiyam is home to over 500 species of birds, including many rare and endemic species. The sanctuary is particularly famous for its population of the Great Hornbill, Malabar Pied Hornbill, and the rare Ceylon Frogmouth. Other notable species include the Indian Pitta, Orange-headed Thrush, and the majestic Crested Serpent Eagle.",
        "The sanctuary is one of the best places in India to spot the Malabar Trogon, a beautiful bird with crimson and green plumage. The forest also hosts various species of woodpeckers, including the Great Spotted Woodpecker and the White-bellied Woodpecker. During the migratory riverson, visitors can witness numerous species of ducks, cranes, and other water birds.",
        "Early morning bird watching trips are highly recommended as the forest comes alive with the calls of numerous birds. The best time for bird watching is from October to March when both resident and migratory birds can be spotted."
      ]
    },

    wildlife: {
      title: "Other Wildlife",
      content: [
        "Apart from its avian residents, Kadiyam is also home to a variety of mammals including elephants, leopards, sloth bears, and the Nilgiri Langur. The sanctuary's reptile population includes various species of snakes, lizards, and turtles. The rich biodiversity makes it a complete nature experience beyond just bird watching."
      ]
    },

    bestTimeToVisit: {
      title: "Best Time to Visit",
      content: [
        "The ideal time to visit Kadiyam Bird Sanctuary is from October to March when the weather is pleasant and both resident and migratory birds are active. The post-monsoon period (October-November) is particularly good as the forest is lush and green. Early morning hours (6:00 AM to 10:00 AM) are the best for bird watching when birds are most active."
      ]
    },

    activities: [
      {
        name: "Bird Watching",
        description: "Guided bird watching tours with experienced naturalists",
        icon: "🔭"
      },
      {
        name: "Nature Walks",
        description: "Guided treks through the forest trails",
        icon: "🚶"
      },
      {
        name: "Photography",
        description: "Capture stunning wildlife and bird photography",
        icon: "📷"
      },
      {
        name: "River Cruises",
        description: "Boat rides on the Yanam River",
        icon: "⛵"
      }
    ],

    quickInfo: {
      bestTimeToVisit: "October to March",
      duration: "1-2 days",
      altitude: "300 - 800 meters",
      temperature: "20°C - 35°C",
      language: "Malayalam, English",
      entryFee: "₹30 for Indians, ₹100 for foreigners",
      timings: "6:00 AM - 6:00 PM",
      guideAvailable: "Yes (Recommended)"
    },

    howToReach: {
      byBus: {
        title: "By Bus",
        description: "Regular bus services from Kadiyam (10 km) and Kakinada (60 km). The nearest KSRTC bus stand is at Kadiyam.",
        distance: "10 km from Kadiyam"
      },
      byFlight: {
        title: "By Flight",
        description: "Vijayawada International Airport (VGA) is the nearest airport, well-connected to major cities in India and international destinations.",
        distance: "70 km from Vijayawada International Airport"
      },
      byTrain: {
        title: "By Train",
        description: "Kadiyam Railway Station is the nearest railhead, connected to Kakinada and other major cities.",
        distance: "10 km from Kadiyam Railway Station"
      }
    },

    contactInfo: {
      address: "Kadiyam Bird Sanctuary, Kadiyam, Kakinada District, East Godavari, India - 686691",
      helpline: "+91-485-2562237",
      email: "wildlife.warden.ernakulam@east-godavari.gov.in",
      forestRange: "Kadiyam Range, East Godavari Forest Department"
    },

    gallery: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/thattekkad-bird-sanctuary-1706953883_0dcc389088605e1d6f34.webp",
        title: "Kadiyam Bird Sanctuary Landscape",
        description: "Lush green forests of Kadiyam"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/thattekkad-bird-sanctuary-1706953883_0dcc389088605e1d6f34.webp",
        title: "Bird Watching at Kadiyam",
        description: "Experience the avian paradise"
      }
    ],

    nearbyAttractions: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/bhoothathankettu-1720512809_6f42e5be5064a1c09a08.webp",
        title: "Kadiyam Dam Dam",
        distance: "10 km",
        description: "A scenic dam surrounded by dense forests"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/cheramala-1720512901_6f42e5be5064a1c09a08.webp",
        title: "Cheramala",
        distance: "15 km",
        description: "Historic site with ancient connections"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kothamangalam-1720513000_6f42e5be5064a1c09a08.webp",
        title: "Kadiyam",
        distance: "10 km",
        description: "Historic town with cultural significance"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/munnar-1706954189_84294aa1d4d0ce186acc.webp",
        title: "Rajahmundry",
        distance: "80 km",
        description: "Famous hill station with paddy fields"
      }
    ],

    accommodation: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/thattekkad-bird-sanctuary-1706953883_0dcc389088605e1d6f34.webp",
        title: "KTDC Raindrops",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/thattekkad-bird-sanctuary-1706953883_0dcc389088605e1d6f34.webp",
        title: "Nature Zone Resort",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/thattekkad-bird-sanctuary-1706953883_0dcc389088605e1d6f34.webp",
        title: "Bird Watcher's Homestay",
        type: "Homestay",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/thattekkad-bird-sanctuary-1706953883_0dcc389088605e1d6f34.webp",
        title: "Jungle Inn",
        type: "Budget Stay",
        link: "#"
      }
    ],

    tips: [
      "Carry binoculars for better bird viewing",
      "Wear comfortable walking shoes and neutral-colored clothing",
      "Carry insect repellent and sunscreen",
      "Start early morning (6 AM) for the best bird watching experience",
      "Hire a local guide for better species identification",
      "Carry sufficient water and snacks",
      "Respect the sanctuary rules and maintain silence",
      "Carry a camera with good zoom lens for photography"
    ]
  };

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="destination-title">{sanctuaryData.title}</h1>
          <p className="destination-subtitle">{sanctuaryData.subtitle}</p>
          <p className="destination-location">{sanctuaryData.location}</p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <div className="container">
          <div className="nav-links">
            <a href="#overview" className="nav-link">Overview</a>
            <a href="#birds" className="nav-link">Bird Species</a>
            <a href="#wildlife" className="nav-link">Wildlife</a>
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
            <h2>About Kadiyam Bird Sanctuary</h2>
          </div>
          
          <div className="overview-content">
            <div className="overview-text">
              <p className="lead-text">{sanctuaryData.description.overview}</p>
              {sanctuaryData.description.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="quick-info-card">
              <h3>Quick Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Best Time to Visit</span>
                  <span className="info-value">{sanctuaryData.quickInfo.bestTimeToVisit}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{sanctuaryData.quickInfo.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Altitude</span>
                  <span className="info-value">{sanctuaryData.quickInfo.altitude}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Temperature</span>
                  <span className="info-value">{sanctuaryData.quickInfo.temperature}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Entry Fee</span>
                  <span className="info-value">{sanctuaryData.quickInfo.entryFee}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timings</span>
                  <span className="info-value">{sanctuaryData.quickInfo.timings}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Area</span>
                  <span className="info-value">{sanctuaryData.area}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Established</span>
                  <span className="info-value">{sanctuaryData.established}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bird Species Section */}
        <div id="birds" className="content-section">
          <div className="section-header">
            <h2>Avian Diversity</h2>
          </div>
          <div className="info-content">
            {sanctuaryData.birdSpecies.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="activities-section">
            <h3>Activities</h3>
            <div className="activities-grid">
              {sanctuaryData.activities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <div className="activity-icon">{activity.icon}</div>
                  <h4>{activity.name}</h4>
                  <p>{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wildlife Section */}
        <div id="wildlife" className="content-section">
          <div className="section-header">
            <h2>Other Wildlife</h2>
          </div>
          <div className="info-content">
            {sanctuaryData.wildlife.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Best Time to Visit */}
        <div className="content-section highlight-section">
          <div className="section-header">
            <h2>Best Time to Visit</h2>
          </div>
          <div className="info-content">
            {sanctuaryData.bestTimeToVisit.content.map((paragraph, index) => (
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
              <p>{sanctuaryData.howToReach.byBus.description}</p>
              <span className="distance">{sanctuaryData.howToReach.byBus.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">✈️</div>
              <h3>By Flight</h3>
              <p>{sanctuaryData.howToReach.byFlight.description}</p>
              <span className="distance">{sanctuaryData.howToReach.byFlight.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">🚂</div>
              <h3>By Train</h3>
              <p>{sanctuaryData.howToReach.byTrain.description}</p>
              <span className="distance">{sanctuaryData.howToReach.byTrain.distance}</span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="content-section">
          <div className="section-header">
            <h2>Gallery</h2>
          </div>
          <div className="gallery-grid">
            {sanctuaryData.gallery.map((item, index) => (
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
            {sanctuaryData.nearbyAttractions.map((attraction, index) => (
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
            {sanctuaryData.accommodation.map((item, index) => (
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
            {sanctuaryData.tips.map((tip, index) => (
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
              <p>{sanctuaryData.contactInfo.address}</p>
            </div>
            <div className="contact-card">
              <h3>📞 Helpline</h3>
              <p>{sanctuaryData.contactInfo.helpline}</p>
            </div>
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>{sanctuaryData.contactInfo.email}</p>
            </div>
            <div className="contact-card">
              <h3>🏢 Forest Range</h3>
              <p>{sanctuaryData.contactInfo.forestRange}</p>
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

export default KadiyamBirdSanctuary;