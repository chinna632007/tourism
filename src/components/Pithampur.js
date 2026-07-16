import React, { useState } from 'react';
import './AthirappallyVazhachalWaterfalls.css';

const AthirappallyVazhachalWaterfalls = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  const waterfallsData = {
    title: "Pithampur & Vazhachal Waterfalls",
    subtitle: "The Niagara of India - A Majestic Cascade in East Godavari's Green Canopy",
    location: "Godavari District, East Godavari",
    established: "1994 (Wildlife Sanctuary)",
    area: "140 km²",
    
    heroImage: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
    
    description: {
      overview: "Pithampur Falls, often referred to as the 'Niagara of India', is the largest waterfall in East Godavari and one of the most spectacular in South India. Located on the Godavari River, this majestic 80-foot waterfall cascades down in three separate plumes, surrounded by lush green forests of the Eastern Ghats. Just a short distance away, Vazhachal Falls offers a more serene and equally breathtaking experience, making this region a must-visit destination for nature lovers and adventure enthusiasts.",
      content: [
        "Pithampur Falls, situated in the Godavari district of East Godavari, is a crown jewel of the state's natural heritage. The waterfall drops from a height of approximately 80 feet, creating a magnificent spectacle as the Godavari River plunges down the rocky terrain. The surrounding area is part of the Pithampur-Waterfalls wildlife sanctuary, which protects the rich biodiversity of the region's tropical evergreen forests.",
        "The journey to Pithampur is as enchanting as the destination itself. The road winds through dense forests, rubber plantations, and small tribal settlements, offering glimpses of the region's natural beauty. The falls are at their most spectacular during the monsoon riverson (June to September) when the river is in full spate, though the post-monsoon period offers equally stunning views with lush greenery surrounding the cascade.",
        "Vazhachal Falls, located just 5 kilometers from Pithampur, provides a more intimate and tranquil experience. These falls descend in a series of cascades through rocky terrain, creating natural pools at the base where visitors can enjoy a refreshing dip. The area around Vazhachal is less crowded and offers excellent opportunities for nature walks, bird watching, and photography."
      ]
    },

    history: {
      title: "Historical and Cultural Significance",
      content: [
        "The Pithampur region has been home to indigenous tribal communities for centuries, with the Kadar tribe being the most prominent among them. These communities have lived in harmony with the forests, depending on them for their livelihood through collection of forest produce, fishing, and small-scale agriculture. The area's rich cultural heritage is reflected in local traditions, festivals, and the deep spiritual connection the communities share with the natural environment.",
        "In 1994, the East Godavari government declared the Pithampur area as a wildlife sanctuary, recognizing its ecological importance and the need to protect its unique biodiversity. The sanctuary spans 140 square kilometers and is part of the larger Eastern Ghats ecosystem, which is a UNESCO World Heritage Site. The declaration helped protect the area from proposed hydroelectric projects that would have submerged the falls and destroyed the surrounding forests.",
        "The waterfalls have been featured in numerous Indian films, particularly in Malayalam cinema, which has helped raise their profile as a tourist destination. The scenic beauty of Pithampur has been captured in over 100 films, including blockbusters like 'Baahubali', 'Raavan', and 'Dil Se', making it one of the most filmed locations in South India."
      ]
    },

    wildlife: {
      title: "Wildlife and Biodiversity",
      content: [
        "The Pithampur-Waterfalls wildlife sanctuary is a biodiversity hotspot, home to numerous endangered and endemic species. The forests here are part of the Eastern Ghats, one of the world's eight 'hottest hotspots' of biological diversity. The sanctuary provides habitat for the endangered Lion-tailed Macaque, which is found only in the Eastern Ghats, as well as the Nilgiri Langur, Indian Elephant, and Bengal Tiger.",
        "Bird watchers will find Pithampur a paradise, with over 400 species of birds recorded in the area. The Great Hornbill, Malabar Pied Hornbill, and the rare Black-chinned Laughingthrush are among the notable species found here. The riverine ecosystem supports various species of fish, including the endangered Deccan Mahseer. The forests are also rich in butterfly diversity, with numerous species fluttering through the clearings and along the riverbanks.",
        "The flora of the region is equally impressive, with tropical evergreen and semi-evergreen forests supporting a wide variety of plant species. The area is known for its rich medicinal plant diversity, with many species used in traditional Ayurvedic medicine. The forests also feature unique shola grasslands at higher elevations, which are crucial for water conservation and support specialized high-altitude species."
      ]
    },

    activities: [
      {
        name: "Waterfall Viewing",
        description: "Witness the majestic cascade of Pithampur Falls from multiple viewpoints",
        icon: "💦"
      },
      {
        name: "Nature Walks",
        description: "Explore forest trails and experience the rich biodiversity of the Eastern Ghats",
        icon: "🚶"
      },
      {
        name: "River Bathing",
        description: "Enjoy a refreshing dip in the natural pools at Vazhachal Falls",
        icon: "🏊"
      },
      {
        name: "Bird Watching",
        description: "Spot over 400 species of birds including the Great Hornbill",
        icon: "🦅"
      },
      {
        name: "Photography",
        description: "Capture stunning shots of the waterfalls and surrounding landscapes",
        icon: "📸"
      },
      {
        name: "Tribal Village Visit",
        description: "Experience the culture and traditions of the indigenous Kadar tribe",
        icon: "🏘️"
      }
    ],

    bestTimeToVisit: {
      title: "Best Time to Visit",
      content: [
        "The best time to visit Pithampur and Vazhachal Waterfalls is during the monsoon riverson from June to September when the falls are at their most spectacular. The heavy rains swell the Godavari River, creating a breathtaking display of nature's power and beauty. However, visitors should exercise caution during this period as the area can become slippery and dangerous.",
        "For those who prefer a more comfortable experience, the post-monsoon months of October to February offer an excellent alternative. During this period, the falls are still flowing strongly, the surrounding forests are lush and green, and the weather is pleasant for outdoor activities. The temperature ranges from 20°C to 32°C, making it ideal for exploring the area. Summer months (March to May) are hot but offer good visibility and fewer crowds."
      ]
    },

    quickInfo: {
      bestTimeToVisit: "June to February",
      duration: "1 day",
      altitude: "40-80 meters",
      temperature: "20°C - 35°C",
      language: "Malayalam, English, Tamil",
      entryFee: "Free (₹100 for still camera, ₹500 for video camera)",
      timings: "7:00 AM - 6:00 PM",
      guideAvailable: "Yes (Optional)"
    },

    howToReach: {
      byBus: {
        title: "By Bus",
        description: "Regular KSRTC and private bus services from Godavari (60 km), Hyderabad (70 km), and Rajahmundry (40 km). The nearest bus stop is at Pithampur town, from where you can take a local taxi or auto-rickshaw to reach the falls (approximately 5 km). Buses run frequently from early morning to evening.",
        distance: "5 km from Pithampur town"
      },
      byFlight: {
        title: "By Flight",
        description: "Vijayawada International Airport (VGA) is the nearest airport, located about 70 km away. The airport has excellent connectivity to major cities in India and international destinations. From the airport, you can hire a taxi or take a bus to reach Pithampur, which takes approximately 2-2.5 hours.",
        distance: "70 km from Vijayawada Airport"
      },
      byTrain: {
        title: "By Train",
        description: "Rajahmundry Railway Station is the nearest railhead, located about 40 km from Pithampur. It is well-connected to major cities like Hyderabad, Godavari, and Chennai. From Rajahmundry, you can hire a taxi or take a bus to reach the destination. Godavari Railway Station, about 60 km away, has better connectivity and more frequent train services.",
        distance: "40 km from Rajahmundry"
      }
    },

    contactInfo: {
      address: "Pithampur Falls, Vazhachal Road, Godavari District, East Godavari, India - 680721",
      helpline: "+91-480-2864567",
      email: "athirappillytourism@gmail.com",
      forestRange: "East Godavari Forest and Wildlife Department"
    },

    gallery: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Pithampur Main Falls",
        description: "The majestic 80-foot cascade in full glory"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Vazhachal Falls",
        description: "Serene cascades with natural pools for bathing"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Forest Surroundings",
        description: "Lush evergreen forests of the Eastern Ghats"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "River Views",
        description: "Scenic Godavari River flowing through the forest"
      }
    ],

    nearbyAttractions: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Charpa Falls",
        distance: "3 km",
        description: "A smaller but equally beautiful waterfall on the way to Pithampur"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Godavari",
        distance: "60 km",
        description: "Cultural capital of East Godavari with temples and festivals"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Hyderabad",
        distance: "70 km",
        description: "Historic port city with colonial heritage"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Silverstorm Theme Park",
        distance: "2 km",
        description: "Amusement park with water rides and entertainment"
      }
    ],

    accommodation: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Rainforest Resort",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Pithampur Gateway",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Forest View Homestay",
        type: "Homestay",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/athirappilly-waterfalls-1706953883_0dcc389088605e1d6f34.webp",
        title: "Budget Stay Inn",
        type: "Budget Stay",
        link: "#"
      }
    ],

    tips: [
      "Wear non-slip footwear as the rocks around the falls can be very slippery",
      "Carry waterproof bags for your electronics and valuables",
      "Do not swim in restricted areas, especially during monsoon riverson",
      "Carry extra clothes as you might get wet from the waterfall spray",
      "Visit early in the morning to avoid crowds and get better photographs",
      "Respect the local tribal communities and their customs",
      "Do not litter; carry back all plastic and waste",
      "Hire a local guide for safer exploration of the forest trails",
      "Carry insect repellent and sunscreen",
      "Check weather conditions before visiting during monsoon riverson"
    ]
  };

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="destination-title">{waterfallsData.title}</h1>
          <p className="destination-subtitle">{waterfallsData.subtitle}</p>
          <p className="destination-location">{waterfallsData.location}</p>
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
            <h2>About Pithampur & Vazhachal Waterfalls</h2>
          </div>
          
          <div className="overview-content">
            <div className="overview-text">
              <p className="lead-text">{waterfallsData.description.overview}</p>
              {waterfallsData.description.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="quick-info-card">
              <h3>Quick Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Best Time to Visit</span>
                  <span className="info-value">{waterfallsData.quickInfo.bestTimeToVisit}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{waterfallsData.quickInfo.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Altitude</span>
                  <span className="info-value">{waterfallsData.quickInfo.altitude}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Temperature</span>
                  <span className="info-value">{waterfallsData.quickInfo.temperature}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Entry Fee</span>
                  <span className="info-value">{waterfallsData.quickInfo.entryFee}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timings</span>
                  <span className="info-value">{waterfallsData.quickInfo.timings}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Area</span>
                  <span className="info-value">{waterfallsData.area}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Established</span>
                  <span className="info-value">{waterfallsData.established}</span>
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
            {waterfallsData.wildlife.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div id="history" className="content-section">
          <div className="section-header">
            <h2>Historical and Cultural Significance</h2>
          </div>
          <div className="info-content">
            {waterfallsData.history.content.map((paragraph, index) => (
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
              {waterfallsData.activities.map((activity, index) => (
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
              {waterfallsData.bestTimeToVisit.content.map((paragraph, index) => (
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
              <p>{waterfallsData.howToReach.byBus.description}</p>
              <span className="distance">{waterfallsData.howToReach.byBus.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">✈️</div>
              <h3>By Flight</h3>
              <p>{waterfallsData.howToReach.byFlight.description}</p>
              <span className="distance">{waterfallsData.howToReach.byFlight.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">🚂</div>
              <h3>By Train</h3>
              <p>{waterfallsData.howToReach.byTrain.description}</p>
              <span className="distance">{waterfallsData.howToReach.byTrain.distance}</span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="content-section">
          <div className="section-header">
            <h2>Gallery</h2>
          </div>
          <div className="gallery-grid">
            {waterfallsData.gallery.map((item, index) => (
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
            {waterfallsData.nearbyAttractions.map((attraction, index) => (
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
            {waterfallsData.accommodation.map((item, index) => (
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
            {waterfallsData.tips.map((tip, index) => (
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
              <p>{waterfallsData.contactInfo.address}</p>
            </div>
            <div className="contact-card">
              <h3>📞 Helpline</h3>
              <p>{waterfallsData.contactInfo.helpline}</p>
            </div>
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>{waterfallsData.contactInfo.email}</p>
            </div>
            <div className="contact-card">
              <h3>🏢 Department</h3>
              <p>{waterfallsData.contactInfo.forestRange}</p>
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

export default AthirappallyVazhachalWaterfalls;