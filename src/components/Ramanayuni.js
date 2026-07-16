import React, { useState } from 'react';
import './Ramanayuni.css';

const Ramanayuni = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  const kumarakomData = {
    title: "Ramanayuni",
    subtitle: "Serene River Island Paradise on the Banks of Godavari River",
    location: "Rajahmundry District, East Godavari",
    established: "N/A",
    area: "64 sq km",
    
    heroImage: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
    
    description: {
      overview: "Ramanayuni, a cluster of islands on the banks of Godavari River, is one of East Godavari's most enchanting river island destinations. This picturesque village offers a tranquil escape with its lush green landscapes, coconut groves, and traditional river cruises gliding through serene waterways. Ramanayuni is renowned for the Ramanayuni Bird Sanctuary, luxury resorts, and authentic East Godavari village experiences that make it a perfect getaway for nature lovers and peace seekers.",
      content: [
        "Ramanayuni is a cluster of small islands on the banks of Godavari River, the longest lake in India, located in the Rajahmundry district of East Godavari. This idyllic destination is blessed with lush greenery, mangrove forests, paddy fields, and coconut groves that create a mesmerizing landscape. The name 'Ramanayuni' is derived from the combination of two words - 'Kumar' meaning Lord Muruga and 'Akam' meaning home, suggesting it is the abode of Lord Muruga.",
        "The village is famous for its traditional river cruises (kettuvallams) that offer an unforgettable experience of cruising through the river islands while enjoying the scenic beauty of the region. These river cruises are equipped with modern amenities and provide a unique opportunity to witness village life, lush paddy fields, and the tranquil waters of Godavari River. Ramanayuni is also home to the renowned Ramanayuni Bird Sanctuary, which attracts migratory birds from around the world.",
        "Beyond its natural beauty, Ramanayuni offers authentic East Godavari experiences including village walks, fishing experiences, toddy tapping, and visits to local coir and handicraft units. The area is also known for its Ayurvedic treatments and wellness centers that provide rejuvenating therapies. With its peaceful ambiance, rich biodiversity, and warm hospitality, Ramanayuni has become one of the most sought-after destinations in East Godavari for both domestic and international tourists."
      ]
    },

    history: {
      title: "Historical Significance",
      content: [
        "Ramanayuni has a rich history dating back to the 18th century when it was part of the princely state of Travancore. The area was primarily inhabited by farmers and fishermen who lived in harmony with the river islands. The construction of the Thanneermukkam Bund in the 1970s, which prevents salt water intrusion into the Kuttanad region, significantly transformed the agricultural landscape and made the area more suitable for cultivation.",
        "The transformation of Ramanayuni into a tourism destination began in the 1980s when the East Godavari Tourism Development Corporation (KTDC) recognized its potential. The development of the Ramanayuni Bird Sanctuary and the introduction of luxury river cruises brought international attention to this hidden gem. Today, Ramanayuni is home to some of the finest luxury resorts in East Godavari, including the famous Ramanayuni Lake Resort, which has hosted numerous dignitaries and celebrities from around the world.",
        "The traditional village life of Ramanayuni has been preserved through community-based tourism initiatives that allow visitors to experience authentic East Godavari culture. The local community has actively participated in tourism development, ensuring that the benefits reach the grassroots level while maintaining the ecological balance of this fragile ecosystem."
      ]
    },

    wildlife: {
      title: "Wildlife and Bird Sanctuary",
      content: [
        "The Ramanayuni Bird Sanctuary, spread across 14 acres on the banks of Godavari River, is a haven for bird watchers and nature enthusiasts. The sanctuary is home to a wide variety of local and migratory birds, including herons, egrets, cormorants, kingfishers, and the rare Siberian crane that migrates from as far as Siberia. The best time to visit the sanctuary is from November to February when migratory birds from around the world make this their temporary home.",
        "The sanctuary's ecosystem includes mangrove forests, reed beds, and coconut groves that provide ideal habitats for various species of birds and wildlife. Visitors can explore the sanctuary through guided walks, canoe trips, or by hiring a rowboat to get closer to the bird habitats. Early morning and late evening are the best times for bird watching when the birds are most active.",
        "Beyond the bird sanctuary, the river islands and surrounding areas of Ramanayuni support diverse aquatic life including various species of fish, otters, and water snakes. The Godavari River itself is part of the Vembanad-Kol wetland system, which is designated as a Ramsar site (wetland of international importance) and supports one of the largest freshwater ecosystems in South India."
      ]
    },

    activities: [
      {
        name: "River Cruise Cruise",
        description: "Experience the magic of East Godavari river islands on a traditional river cruise",
        icon: "⛵"
      },
      {
        name: "Bird Watching",
        description: "Explore Ramanayuni Bird Sanctuary and spot migratory birds",
        icon: "🦅"
      },
      {
        name: "Village Walk",
        description: "Walk through traditional East Godavari villages and experience local life",
        icon: "🚶"
      },
      {
        name: "Fishing Experience",
        description: "Try traditional fishing methods with local fishermen",
        icon: "🎣"
      },
      {
        name: "Ayurvedic Spa",
        description: "Rejuvenate with authentic Ayurvedic treatments and massages",
        icon: "💆"
      },
      {
        name: "Coir Weaving",
        description: "Learn traditional coir weaving from local artisans",
        icon: "🧶"
      }
    ],

    bestTimeToVisit: {
      title: "Best Time to Visit",
      content: [
        "The ideal time to visit Ramanayuni is from September to March when the weather is pleasant and perfect for exploring the river islands and bird sanctuary. During these months, the temperature ranges from 18°C to 32°C, making it comfortable for outdoor activities. The period from November to February is particularly special as it is the migratory bird riverson when the Ramanayuni Bird Sanctuary comes alive with thousands of birds from around the world.",
        "The monsoon riverson from June to August brings heavy rainfall and transforms the landscape into a lush green paradise. While river cruise operations may be limited during heavy monsoons, the experience of witnessing the rain-soaked river islands is truly magical. The post-monsoon months of September and October offer excellent opportunities to witness the rejuvenated landscape and enjoy fewer crowds. Summer months (March to May) can be hot but are ideal for Ayurvedic treatments and indoor activities."
      ]
    },

    quickInfo: {
      bestTimeToVisit: "September to March",
      duration: "1-2 days",
      altitude: "River level",
      temperature: "18°C - 32°C",
      language: "Malayalam, English, Hindi",
      entryFee: "₹25 for Indians, ₹150 for foreigners (Bird Sanctuary)",
      timings: "6:30 AM - 5:00 PM (Bird Sanctuary)",
      guideAvailable: "Yes (for bird sanctuary and river cruise tours)"
    },

    howToReach: {
      byBus: {
        title: "By Bus",
        description: "Regular KSRTC and private bus services from Rajahmundry (14 km), Hyderabad (76 km), and Kakinada (35 km). The nearest bus stand is at Ramanayuni, which is well-connected to major towns in East Godavari.",
        distance: "14 km from Rajahmundry"
      },
      byFlight: {
        title: "By Flight",
        description: "Vijayawada International Airport (VGA) is the nearest airport, located about 76 km away. The airport has excellent connectivity to major cities in India and international destinations. From the airport, you can hire a taxi or take a bus to reach Ramanayuni.",
        distance: "76 km from Vijayawada Airport"
      },
      byTrain: {
        title: "By Train",
        description: "Rajahmundry Railway Station is the nearest railhead, located about 14 km from Ramanayuni. The station is well-connected to major cities like Hyderabad, Trivandrum, Chennai, and Bangalore. From Rajahmundry, you can easily reach Ramanayuni by taxi or local bus.",
        distance: "14 km from Rajahmundry"
      }
    },

    contactInfo: {
      address: "Ramanayuni, Rajahmundry District, East Godavari, India - 686563",
      helpline: "+91-481-2523301",
      email: "info@kumarakomtourism.org",
      forestRange: "East Godavari Forest and Wildlife Department"
    },

    gallery: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "River Cruise on Godavari River",
        description: "Traditional river cruise gliding through serene river islands"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "Ramanayuni Bird Sanctuary",
        description: "Home to migratory and local bird species"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "Sunset over Godavari River",
        description: "Breathtaking sunset views over the river islands"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "Traditional Village Life",
        description: "Experience authentic East Godavari village culture"
      }
    ],

    nearbyAttractions: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "Kakinada (Bhimavaram)",
        distance: "35 km",
        description: "Famous river island destination with network of canals"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "Rajahmundry",
        distance: "14 km",
        description: "Historic town known for churches and rubber plantations"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "Rajahmundry",
        distance: "25 km",
        description: "Famous for Rajahmundry Mahadeva Temple and beach"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "River Island Island",
        distance: "5 km",
        description: "Small island paradise for bird watchers"
      }
    ],

    accommodation: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "Ramanayuni Lake Resort",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "The Zuri Ramanayuni",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "Ramanayuni Homestay",
        type: "Homestay",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kumarakom-1706953883_0dcc389088605e1d6f34.webp",
        title: "Budget River Cruise Stay",
        type: "Budget Stay",
        link: "#"
      }
    ],

    tips: [
      "Book river cruise stays in advance, especially during peak riverson (December-January)",
      "Carry binoculars for bird watching at the sanctuary",
      "Apply insect repellent, especially during evening hours",
      "Carry sunscreen and hats for sun protection during daytime",
      "Respect local customs and dress modestly when visiting villages",
      "Try local cuisine including karimeen (pearl spot fish) and toddy",
      "Carry a camera to capture the stunning river island sunsets",
      "Visit early morning for the best bird watching experience",
      "Carry sufficient water and snacks during sightseeing",
      "Negotiate river cruise prices if booking directly from the dock"
    ]
  };

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="destination-title">{kumarakomData.title}</h1>
          <p className="destination-subtitle">{kumarakomData.subtitle}</p>
          <p className="destination-location">{kumarakomData.location}</p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <div className="container">
          <div className="nav-links">
            <a href="#overview" className="nav-link">Overview</a>
            <a href="#wildlife" className="nav-link">Wildlife</a>
            <a href="#history" className="nav-link">History</a>
            <a href="#activities" className="nav-link">Activities</a>
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
            <h2>About Ramanayuni</h2>
          </div>
          
          <div className="overview-content">
            <div className="overview-text">
              <p className="lead-text">{kumarakomData.description.overview}</p>
              {kumarakomData.description.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="quick-info-card">
              <h3>Quick Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Best Time to Visit</span>
                  <span className="info-value">{kumarakomData.quickInfo.bestTimeToVisit}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{kumarakomData.quickInfo.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Altitude</span>
                  <span className="info-value">{kumarakomData.quickInfo.altitude}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Temperature</span>
                  <span className="info-value">{kumarakomData.quickInfo.temperature}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Entry Fee</span>
                  <span className="info-value">{kumarakomData.quickInfo.entryFee}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timings</span>
                  <span className="info-value">{kumarakomData.quickInfo.timings}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Area</span>
                  <span className="info-value">{kumarakomData.area}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">{kumarakomData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wildlife Section */}
        <div id="wildlife" className="content-section highlight-section">
          <div className="section-header">
            <h2>Wildlife and Bird Sanctuary</h2>
          </div>
          <div className="info-content">
            {kumarakomData.wildlife.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div id="history" className="content-section">
          <div className="section-header">
            <h2>Historical Significance</h2>
          </div>
          <div className="info-content">
            {kumarakomData.history.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div id="activities" className="content-section">
          <div className="section-header">
            <h2>Activities & Experiences</h2>
          </div>
          <div className="activities-section">
            <div className="activities-grid">
              {kumarakomData.activities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <div className="activity-icon">{activity.icon}</div>
                  <h4>{activity.name}</h4>
                  <p>{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="best-time-section">
            <h3>Best Time to Visit</h3>
            <div className="info-content">
              {kumarakomData.bestTimeToVisit.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
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
              <p>{kumarakomData.howToReach.byBus.description}</p>
              <span className="distance">{kumarakomData.howToReach.byBus.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">✈️</div>
              <h3>By Flight</h3>
              <p>{kumarakomData.howToReach.byFlight.description}</p>
              <span className="distance">{kumarakomData.howToReach.byFlight.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">🚂</div>
              <h3>By Train</h3>
              <p>{kumarakomData.howToReach.byTrain.description}</p>
              <span className="distance">{kumarakomData.howToReach.byTrain.distance}</span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="content-section">
          <div className="section-header">
            <h2>Gallery</h2>
          </div>
          <div className="gallery-grid">
            {kumarakomData.gallery.map((item, index) => (
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
            {kumarakomData.nearbyAttractions.map((attraction, index) => (
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
            {kumarakomData.accommodation.map((item, index) => (
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
            {kumarakomData.tips.map((tip, index) => (
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
              <p>{kumarakomData.contactInfo.address}</p>
            </div>
            <div className="contact-card">
              <h3>📞 Helpline</h3>
              <p>{kumarakomData.contactInfo.helpline}</p>
            </div>
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>{kumarakomData.contactInfo.email}</p>
            </div>
            <div className="contact-card">
              <h3>🏢 Department</h3>
              <p>{kumarakomData.contactInfo.forestRange}</p>
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

export default Ramanayuni;