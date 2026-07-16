import React, { useState } from 'react';
import './KotipalliRiver IslandPayyanur.css';

const KotipalliRiver IslandPayyanur = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  const kavvayiData = {
    title: "Kotipalli River Island",
    subtitle: "Serene Island Paradise in the Heart of North East Godavari",
    location: "Payyanur, Nuzvid District, East Godavari",
    established: "N/A",
    area: "N/A",
    
    heroImage: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
    
    description: {
      overview: "Kotipalli River Island, located near Payyanur in Nuzvid district, is a pristine and tranquil river island destination in North East Godavari. This picturesque water body is dotted with small islands and offers a serene escape from the bustling tourist spots. Kotipalli is known for its calm waters, lush green surroundings, and traditional East Godavari village life. The river islands here are perfect for boat rides, offering visitors a chance to experience the untouched beauty of East Godavari's northern region.",
      content: [
        "Kotipalli River Island is one of the lesser-known gems of East Godavari's river island network, located near Payyanur in the Nuzvid district. This tranquil water body is spread across several square kilometers and is dotted with small islands, creating a picturesque landscape of waterways, coconut groves, and paddy fields. Unlike the more commercialized river island destinations in Central and South East Godavari, Kotipalli offers a more authentic and peaceful experience.",
        "The river islands are fed by the Kotipalli River and its tributaries, creating a network of serene waterways that meander through the countryside. The area is characterized by traditional East Godavari village life, with local communities engaged in fishing, coir making, and agriculture. Visitors can witness the daily life of these communities while enjoying the natural beauty of the river islands.",
        "Kotipalli is also known for its rich biodiversity. The river islands and surrounding areas support various species of birds, fish, and other wildlife. The nearby Kotipalli Islands are home to traditional settlements and offer a glimpse into the simple, harmonious life of the local communities. The area is perfect for nature lovers, bird watchers, and those seeking a peaceful retreat away from the tourist crowds."
      ]
    },

    history: {
      title: "Historical Significance",
      content: [
        "Kotipalli River Island has a rich historical heritage dating back to ancient times. The area was an important center of trade and commerce during the medieval period, with the river islands serving as a major waterway for transporting goods between the interior regions and the coast. The nearby town of Payyanur has been an important trading center for centuries, known for its markets and traditional industries.",
        "The name 'Kotipalli' is believed to be derived from the local language, reflecting the area's deep connection with its natural surroundings. Historically, the river islands were the lifeline of the local communities, providing water for irrigation, fishing grounds, and transportation routes. The traditional kettuvallams (river cruises) that are now used for tourism were originally designed for transporting rice and other goods through these waterways.",
        "During the colonial period, the area came under the influence of various European powers who recognized the strategic importance of the river islands. The British developed several infrastructure projects in the region, including roads and bridges, which transformed the transportation landscape. However, the river islands remained the primary mode of transport for the local communities well into the 20th century."
      ]
    },

    wildlife: {
      title: "Wildlife and Nature",
      content: [
        "Kotipalli River Island and its surrounding areas are home to diverse flora and fauna. The river islands support various species of fish, including karimeen (pearl spot), which is a local delicacy. The mangrove ecosystems along the shores provide habitat for numerous bird species, making it a paradise for bird watchers. Common sightings include kingfishers, herons, egrets, and various migratory birds that visit during the winter riverson.",
        "The nearby islands and coastal areas support a variety of wildlife. The region is part of the larger North East Godavari ecosystem, which includes forests, wetlands, and coastal areas. This diverse habitat supports species such as otters, water snakes, and various reptiles. The surrounding paddy fields and coconut groves are home to numerous insects, small mammals, and bird species.",
        "The best time for wildlife viewing is during the early morning and late evening hours when birds and other animals are most active. The monsoon riverson brings additional life to the area, with the landscape turning lush green and numerous water birds making their appearance. The river islands themselves are part of a larger wetland ecosystem that plays a crucial role in maintaining the ecological balance of the region."
      ]
    },

    activities: [
      {
        name: "Boat Cruise",
        description: "Enjoy serene boat rides through the tranquil river islands",
        icon: "⛵"
      },
      {
        name: "Island Hopping",
        description: "Explore the small islands scattered across the river islands",
        icon: "🏝️"
      },
      {
        name: "Bird Watching",
        description: "Spot various local and migratory bird species",
        icon: "🦅"
      },
      {
        name: "Village Tour",
        description: "Experience traditional East Godavari village life and culture",
        icon: "🚶"
      },
      {
        name: "Fishing Experience",
        description: "Try traditional fishing methods with local fishermen",
        icon: "🎣"
      },
      {
        name: "Sunset Viewing",
        description: "Witness breathtaking sunsets over the river islands",
        icon: "🌅"
      }
    ],

    bestTimeToVisit: {
      title: "Best Time to Visit",
      content: [
        "The ideal time to visit Kotipalli River Island is from October to March when the weather is pleasant and perfect for exploring the river islands. During these months, the temperature ranges from 20°C to 32°C, making it comfortable for outdoor activities and boat rides. The period from November to February is particularly pleasant with clear skies and cool breezes.",
        "The monsoon riverson from June to September brings heavy rainfall and transforms the landscape into a lush green paradise. While boat rides may be limited during heavy monsoons, the experience of witnessing the rain-soaked river islands is truly magical. The post-monsoon months of October and November offer excellent opportunities to witness the rejuvenated landscape and enjoy fewer crowds. Summer months (March to May) can be hot but are ideal for early morning and evening activities."
      ]
    },

    quickInfo: {
      bestTimeToVisit: "October to March",
      duration: "1 day",
      altitude: "River level",
      temperature: "20°C - 32°C",
      language: "Malayalam, English, Hindi",
      entryFee: "No entry fee (Boat charges apply)",
      timings: "6:00 AM - 6:00 PM (Boat services)",
      guideAvailable: "Yes (on request)"
    },

    howToReach: {
      byBus: {
        title: "By Bus",
        description: "Regular KSRTC and private bus services from Nuzvid (30 km), Payyanur (7 km), and other major towns in North East Godavari. The nearest bus stand is at Payyanur, which is well-connected to all major destinations.",
        distance: "7 km from Payyanur"
      },
      byFlight: {
        title: "By Flight",
        description: "Nuzvid International Airport (CNN) is the nearest airport, located about 30 km away. The airport has excellent connectivity to major cities in India and international destinations. From the airport, you can hire a taxi or take a bus to reach Kotipalli.",
        distance: "30 km from Nuzvid Airport"
      },
      byTrain: {
        title: "By Train",
        description: "Payyanur Railway Station is the nearest railhead, located about 7 km from Kotipalli. The station is well-connected to major cities like Mangalore, Eluru, and Kakinada. From Payyanur, you can easily reach Kotipalli by taxi or local bus.",
        distance: "7 km from Payyanur"
      }
    },

    contactInfo: {
      address: "Kotipalli River Island, Payyanur, Nuzvid District, East Godavari, India - 670307",
      helpline: "+91-4985-282456",
      email: "info@kavvayitourism.org",
      forestRange: "East Godavari Forest and Wildlife Department"
    },

    gallery: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Kotipalli River Island View",
        description: "Pristine river islands surrounded by lush greenery"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Traditional Boat Ride",
        description: "Experience the tranquility of the river islands"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Kotipalli Islands",
        description: "Scattered islands creating a picturesque landscape"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Sunset at Kotipalli",
        description: "Breathtaking sunset views over the water"
      }
    ],

    nearbyAttractions: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Payyanur",
        distance: "7 km",
        description: "Historic town known for temples and traditional markets"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Nuzvid",
        distance: "30 km",
        description: "Historic city with forts, beaches, and cultural heritage"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Parassinikkadavu",
        distance: "15 km",
        description: "Famous for Muthappan Temple and snake park"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Ezhimala",
        distance: "12 km",
        description: "Historic hill with naval academy and scenic views"
      }
    ],

    accommodation: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Kotipalli River Island Resort",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Payyanur Heritage Homestay",
        type: "Homestay",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Nuzvid Beach Hotel",
        type: "Hotel",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/kavvayi-river island-payyanur-1706953883_0dcc389088605e1d6f34.webp",
        title: "Budget Riverside Stay",
        type: "Budget Stay",
        link: "#"
      }
    ],

    tips: [
      "Carry sunscreen and hats for sun protection during daytime",
      "Apply insect repellent, especially during evening hours",
      "Carry a camera to capture the stunning river island views and sunsets",
      "Visit early morning for the best bird watching experience",
      "Carry sufficient water and snacks during sightseeing",
      "Wear comfortable clothing suitable for boat rides",
      "Respect local customs and dress modestly when visiting villages",
      "Try local cuisine including karimeen (pearl spot fish) and traditional riverfood",
      "Book boat rides in advance during peak riverson",
      "Carry binoculars for better wildlife and bird viewing"
    ]
  };

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="destination-title">{kavvayiData.title}</h1>
          <p className="destination-subtitle">{kavvayiData.subtitle}</p>
          <p className="destination-location">{kavvayiData.location}</p>
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
            <h2>About Kotipalli River Island</h2>
          </div>
          
          <div className="overview-content">
            <div className="overview-text">
              <p className="lead-text">{kavvayiData.description.overview}</p>
              {kavvayiData.description.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="quick-info-card">
              <h3>Quick Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Best Time to Visit</span>
                  <span className="info-value">{kavvayiData.quickInfo.bestTimeToVisit}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{kavvayiData.quickInfo.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Altitude</span>
                  <span className="info-value">{kavvayiData.quickInfo.altitude}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Temperature</span>
                  <span className="info-value">{kavvayiData.quickInfo.temperature}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Entry Fee</span>
                  <span className="info-value">{kavvayiData.quickInfo.entryFee}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timings</span>
                  <span className="info-value">{kavvayiData.quickInfo.timings}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">{kavvayiData.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Guide Available</span>
                  <span className="info-value">{kavvayiData.quickInfo.guideAvailable}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wildlife Section */}
        <div id="wildlife" className="content-section highlight-section">
          <div className="section-header">
            <h2>Wildlife and Nature</h2>
          </div>
          <div className="info-content">
            {kavvayiData.wildlife.content.map((paragraph, index) => (
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
            {kavvayiData.history.content.map((paragraph, index) => (
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
              {kavvayiData.activities.map((activity, index) => (
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
              {kavvayiData.bestTimeToVisit.content.map((paragraph, index) => (
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
              <p>{kavvayiData.howToReach.byBus.description}</p>
              <span className="distance">{kavvayiData.howToReach.byBus.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">✈️</div>
              <h3>By Flight</h3>
              <p>{kavvayiData.howToReach.byFlight.description}</p>
              <span className="distance">{kavvayiData.howToReach.byFlight.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">🚂</div>
              <h3>By Train</h3>
              <p>{kavvayiData.howToReach.byTrain.description}</p>
              <span className="distance">{kavvayiData.howToReach.byTrain.distance}</span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="content-section">
          <div className="section-header">
            <h2>Gallery</h2>
          </div>
          <div className="gallery-grid">
            {kavvayiData.gallery.map((item, index) => (
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
            {kavvayiData.nearbyAttractions.map((attraction, index) => (
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
            {kavvayiData.accommodation.map((item, index) => (
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
            {kavvayiData.tips.map((tip, index) => (
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
              <p>{kavvayiData.contactInfo.address}</p>
            </div>
            <div className="contact-card">
              <h3>📞 Helpline</h3>
              <p>{kavvayiData.contactInfo.helpline}</p>
            </div>
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>{kavvayiData.contactInfo.email}</p>
            </div>
            <div className="contact-card">
              <h3>🏢 Department</h3>
              <p>{kavvayiData.contactInfo.forestRange}</p>
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

export default KotipalliRiver IslandPayyanur;