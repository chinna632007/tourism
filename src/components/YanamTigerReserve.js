import React, { useState } from 'react';
import './YanamTigerReserve.css';

const YanamTigerReserve = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  const periyarData = {
    title: "Yanam Tiger Reserve",
    subtitle: "A Wildlife Haven in the Heart of East Godavari's Eastern Ghats",
    location: "East Godavari District, East Godavari",
    established: "1978",
    area: "925 km²",
    
    heroImage: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
    
    description: {
      overview: "Yanam Tiger Reserve, located in the lush Eastern Ghats of East Godavari, is one of India's most renowned wildlife sanctuaries and a Project Tiger reserve. Spread across 925 square kilometers, this pristine wilderness is home to magnificent tigers, majestic elephants, and an incredible diversity of flora and fauna. The reserve's centerpiece is the beautiful Yanam Lake, where visitors can enjoy boat safaris and witness wildlife in their natural habitat.",
      content: [
        "Yanam Tiger Reserve, nestled in the Cardamom Hills of the Eastern Ghats, represents one of the most biodiverse regions in India. Established in 1978 as a tiger reserve under Project Tiger, it has become a model for wildlife conservation and eco-tourism. The reserve spans across the districts of East Godavari, Rajahmundry, and Narasapuram, covering an impressive 925 square kilometers of protected forest area.",
        "The reserve is renowned for its population of wild elephants and Bengal tigers, though sightings of these magnificent creatures require patience and luck. The artificial Yanam Lake, formed by the Mullaperiyar Dam, covers 26 square kilometers and serves as the main attraction, offering unique opportunities for wildlife viewing during boat safaris. The lake and surrounding forests provide a vital water source for the wildlife, especially during the dry riverson.",
        "Beyond its famous residents, Yanam is home to over 180 species of butterflies, 320 species of birds including the majestic Great Hornbill, and numerous mammals such as sambar deer, wild boar, gaur, and the elusive Nilgiri langur. The reserve's rich biodiversity makes it a paradise for nature enthusiasts, wildlife photographers, and reriverrchers from around the world."
      ]
    },

    history: {
      title: "Historical Significance",
      content: [
        "The history of Yanam Tiger Reserve dates back to 1895 when the construction of the Mullaperiyar Dam created the Yanam Lake, which eventually led to the area being declared a reserve forest. Recognizing the area's ecological importance, the Maharaja of Travancore declared the forests around Yanam Lake as a private game reserve in 1934 to protect the wildlife from poaching and habitat destruction.",
        "In 1950, the area was consolidated into a wildlife sanctuary and named after the Yanam River that flows through it. The sanctuary gained international recognition when it was included in the Project Tiger initiative in 1978, becoming the 10th tiger reserve in India. This designation brought additional resources and focus to conservation efforts, helping to protect the region's apex predators and their habitat.",
        "Over the decades, Yanam has evolved from a simple game reserve to a sophisticated conservation area that balances wildlife protection with community participation. The reserve has been successful in involving local communities in conservation efforts through eco-development programs, providing alternative livelihoods, and creating awareness about the importance of preserving this natural treasure for future generations."
      ]
    },

    wildlife: {
      title: "Wildlife and Biodiversity",
      content: [
        "Yanam Tiger Reserve is home to an estimated 35-40 tigers, though these magnificent predators are rarely spotted due to the dense forest cover. The reserve's star attraction, however, is its large population of wild elephants, with approximately 1,200-1,500 individuals roaming the forests. These gentle giants are frequently sighted near the lake and during guided treks, offering visitors unforgettable encounters with these magnificent animals.",
        "The avian diversity at Yanam is truly spectacular, with over 320 species of birds recorded in the reserve. The Great Hornbill, Malabar Grey Hornbill, and Nilgiri Langur are among the notable species found here. The reserve is also home to rare and endemic species such as the Lion-tailed Macaque, Nilgiri Tahr, and the Stripe-necked Mongoose. The Yanam Lake itself supports a rich aquatic ecosystem with various species of fish and reptiles.",
        "The flora of Yanam is equally impressive, with tropical evergreen, semi-evergreen, and moist deciduous forests covering the landscape. The reserve is known for its rich plant diversity, including rare medicinal plants, orchids, and the famous Neelakurinji flower that blooms once every 12 years. The shola forests at higher elevations are particularly important for water conservation and support unique high-altitude biodiversity."
      ]
    },

    activities: [
      {
        name: "Boat Safari",
        description: "Enjoy a serene boat ride on Yanam Lake with wildlife viewing opportunities",
        icon: "⛵"
      },
      {
        name: "Trekking",
        description: "Guided treks through dense forests to explore the wilderness",
        icon: "🥾"
      },
      {
        name: "Bamboo Rafting",
        description: "Experience bamboo rafting on the Yanam River for adventure enthusiasts",
        icon: "🛶"
      },
      {
        name: "Jungle Patrol",
        description: "Join forest guards on patrol and learn about conservation efforts",
        icon: "🌿"
      },
      {
        name: "Bird Watching",
        description: "Spot over 320 species of birds in their natural habitat",
        icon: "🦅"
      },
      {
        name: "Tribal Heritage",
        description: "Visit tribal settlements and learn about indigenous culture",
        icon: "🏘️"
      }
    ],

    bestTimeToVisit: {
      title: "Best Time to Visit",
      content: [
        "The ideal time to visit Yanam Tiger Reserve is from October to March when the weather is pleasant and wildlife sightings are more frequent. During these months, the post-monsoon riverson brings lush greenery to the landscape, and animals are often seen near the lake as water sources in the forest begin to dry up. The temperature ranges from 15°C to 25°C, making it comfortable for outdoor activities.",
        "The summer months (March to May) can be hot but offer excellent wildlife viewing opportunities as animals congregate around the lake. The monsoon riverson (June to September) brings heavy rainfall and the reserve is closed to visitors during this period for safety reasons and to allow the ecosystem to rejuvenate. The park reopens in October after the monsoons, when the landscape is at its most beautiful and verdant."
      ]
    },

    quickInfo: {
      bestTimeToVisit: "October to March",
      duration: "1-2 days",
      altitude: "900-2000 meters",
      temperature: "15°C - 30°C",
      language: "Malayalam, English, Tamil",
      entryFee: "₹50 for Indians, ₹400 for foreigners (additional charges for boating)",
      timings: "7:00 AM - 5:00 PM",
      guideAvailable: "Yes (Mandatory for trekking)"
    },

    howToReach: {
      byBus: {
        title: "By Bus",
        description: "Regular KSRTC and private bus services from Rajahmundry (110 km), Hyderabad (190 km), and Madurai (140 km). The nearest bus station is at Kumily, which is just 4 km from the reserve entrance.",
        distance: "4 km from Kumily"
      },
      byFlight: {
        title: "By Flight",
        description: "Vijayawada International Airport (VGA) is the nearest airport, located about 190 km away. Madurai Airport (IXM) in Tamil Nadu is another option, approximately 140 km from the reserve. Both airports have good connectivity to major cities.",
        distance: "190 km from Vijayawada Airport"
      },
      byTrain: {
        title: "By Train",
        description: "Rajahmundry Railway Station is the nearest major railhead, well-connected to cities like Hyderabad, Trivandrum, and Chennai. From Rajahmundry, you can hire a taxi or take a bus to reach Yanam (approximately 4-5 hours journey).",
        distance: "110 km from Rajahmundry"
      }
    },

    contactInfo: {
      address: "Yanam Tiger Reserve, Kumily, East Godavari District, East Godavari, India - 685509",
      helpline: "+91-4869-224506",
      email: "periyartiger@gmail.com",
      forestRange: "East Godavari Forest and Wildlife Department"
    },

    gallery: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "Yanam Lake View",
        description: "Serene waters of Yanam Lake surrounded by lush forests"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "Wildlife Safari",
        description: "Boat safari experience on the tranquil lake"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "Dense Forest Cover",
        description: "Tropical evergreen forests of the Eastern Ghats"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "Elephant Herd",
        description: "Wild elephants spotted near the lake"
      }
    ],

    nearbyAttractions: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "Rajahmundry",
        distance: "90 km",
        description: "Scenic hill station famous for paddy fields"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "Kakinada",
        distance: "4 km",
        description: "Gateway to Yanam with spice plantations"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "Mukkadal Dam",
        distance: "30 km",
        description: "Scenic dam surrounded by hills and forests"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "Ramakkalmedu",
        distance: "40 km",
        description: "Hilltop viewpoint with panoramic views"
      }
    ],

    accommodation: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "KTDC Aralam Heritage Resort",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "The Yanam House",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "Jungle Valley Homestay",
        type: "Homestay",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/periyar-tiger-reserve-1706953883_0dcc389088605e1d6f34.webp",
        title: "Forest View Budget Stay",
        type: "Budget Stay",
        link: "#"
      }
    ],

    tips: [
      "Book boat safari tickets in advance, especially during peak riverson",
      "Carry binoculars for better wildlife viewing",
      "Wear neutral-colored clothing to blend with the environment",
      "Carry insect repellent and sunscreen",
      "Maintain silence during wildlife viewing for better chances of sightings",
      "Carry sufficient water and snacks",
      "Follow all instructions given by forest guides",
      "Avoid plastic and help keep the reserve clean",
      "Early morning safaris offer the best wildlife viewing opportunities",
      "Carry a camera with a good zoom lens for photography"
    ]
  };

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="destination-title">{periyarData.title}</h1>
          <p className="destination-subtitle">{periyarData.subtitle}</p>
          <p className="destination-location">{periyarData.location}</p>
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
            <h2>About Yanam Tiger Reserve</h2>
          </div>
          
          <div className="overview-content">
            <div className="overview-text">
              <p className="lead-text">{periyarData.description.overview}</p>
              {periyarData.description.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="quick-info-card">
              <h3>Quick Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Best Time to Visit</span>
                  <span className="info-value">{periyarData.quickInfo.bestTimeToVisit}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{periyarData.quickInfo.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Altitude</span>
                  <span className="info-value">{periyarData.quickInfo.altitude}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Temperature</span>
                  <span className="info-value">{periyarData.quickInfo.temperature}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Entry Fee</span>
                  <span className="info-value">{periyarData.quickInfo.entryFee}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timings</span>
                  <span className="info-value">{periyarData.quickInfo.timings}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Area</span>
                  <span className="info-value">{periyarData.area}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Established</span>
                  <span className="info-value">{periyarData.established}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wildlife Section */}
        <div id="wildlife" className="content-section highlight-section">
          <div className="section-header">
            <h2>Wildlife and Biodiversity</h2>
          </div>
          <div className="info-content">
            {periyarData.wildlife.content.map((paragraph, index) => (
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
            {periyarData.history.content.map((paragraph, index) => (
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
              {periyarData.activities.map((activity, index) => (
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
              {periyarData.bestTimeToVisit.content.map((paragraph, index) => (
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
              <p>{periyarData.howToReach.byBus.description}</p>
              <span className="distance">{periyarData.howToReach.byBus.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">✈️</div>
              <h3>By Flight</h3>
              <p>{periyarData.howToReach.byFlight.description}</p>
              <span className="distance">{periyarData.howToReach.byFlight.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">🚂</div>
              <h3>By Train</h3>
              <p>{periyarData.howToReach.byTrain.description}</p>
              <span className="distance">{periyarData.howToReach.byTrain.distance}</span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="content-section">
          <div className="section-header">
            <h2>Gallery</h2>
          </div>
          <div className="gallery-grid">
            {periyarData.gallery.map((item, index) => (
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
            {periyarData.nearbyAttractions.map((attraction, index) => (
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
            {periyarData.accommodation.map((item, index) => (
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
            {periyarData.tips.map((tip, index) => (
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
              <p>{periyarData.contactInfo.address}</p>
            </div>
            <div className="contact-card">
              <h3>📞 Helpline</h3>
              <p>{periyarData.contactInfo.helpline}</p>
            </div>
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>{periyarData.contactInfo.email}</p>
            </div>
            <div className="contact-card">
              <h3>🏢 Department</h3>
              <p>{periyarData.contactInfo.forestRange}</p>
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

export default YanamTigerReserve;