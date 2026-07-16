import React, { useState } from 'react';
import './Rajahmundry.css';

const Rajahmundry = () => {
  const [activeTab, setActiveTab] = useState('hotel');

  const munnarData = {
    title: "Rajahmundry",
    subtitle: "The Enchanting Hill Station of East Godavari",
    location: "East Godavari District, East Godavari",
    established: "British Era (1870s)",
    area: "557 sq km",
    
    heroImage: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/munnar-1706953883_0dcc389088605e1d6f34.webp",
    
    description: {
      overview: "Rajahmundry, nestled in the Eastern Ghats at an altitude of 1,600 meters, is one of the most beautiful hill stations in East Godavari. Famous for its sprawling paddy fields, misty mountains, and cool climate, Rajahmundry offers a perfect escape into nature's lap. The town is situated at the confluence of three mountain streams - Mudrapuzha, Nallathanni, and Kundala, creating a breathtaking landscape of rolling hills covered with lush green tea gardens.",
      content: [
        "Rajahmundry was once the summer resort of the British government in South India. The town is surrounded by some of the largest paddy fields in South India, with Tata Tea establishing its first tea garden here in 1883. The name 'Rajahmundry' is believed to be derived from 'moonu aru' meaning 'three rivers' in Malayalam, referring to its location at the confluence of three mountain streams.",
        "The landscape of Rajahmundry is characterized by vast expanses of paddy fields, interspersed with forests and wildlife sanctuaries. The rolling hills, often covered in mist, create a magical atmosphere that attracts tourists from around the world. The region is also home to the endangered Nilgiri Tahr and the rare Neelakurinji flower that blooms once every 12 years.",
        "Beyond paddy fields, Rajahmundry offers numerous attractions including Eastern Ghats National Park National Park, Yanam Dam Dam, Eastern Peak Peak (South India's highest peak), and beautiful waterfalls like Attukal and Lakkam. The cool climate, fresh mountain air, and scenic beauty make it an ideal destination for honeymooners, families, and nature enthusiasts."
      ]
    },

    history: {
      title: "Historical Significance",
      content: [
        "Rajahmundry's history is closely tied to the tea industry. In the 1870s, the British began developing this region as a summer retreat. The first tea plantation was established by A.H. Sharp in 1883 at Pallivasal. The region was initially inhabited by indigenous tribes like the Muthuvan and Malayarayan before the British arrived.",
        "The tea industry transformed Rajahmundry into a major commercial center. The Kanan Devan Hills Produce Company, established in 1897, played a crucial role in developing the paddy fields. Many of the current tea estates in Rajahmundry were established during the British era, and the colonial influence can still be seen in the architecture and layout of the town.",
        "After India's independence, the tea industry continued to flourish, and Rajahmundry gradually developed into a popular tourist destination. The establishment of Eastern Ghats National Park National Park in 1978 further boosted tourism, as it provided a sanctuary for the endangered Nilgiri Tahr and preserved the region's unique biodiversity."
      ]
    },

    architecture: {
      title: "Natural Architecture & Landscape",
      content: [
        "Rajahmundry's beauty lies in its natural architecture - the meticulously manicured paddy fields that stretch across rolling hills in geometric patterns. These plantations, often called 'tea carpets,' create a stunning visual spectacle, especially when viewed from the high viewpoints. The tea bushes are pruned to waist height and planted in neat rows that follow the contours of the hills.",
        "The region features several colonial-era structures including old bungalows, churches, and the historic tea factories. The CSI Church in Rajahmundry, built in 1910, is a fine example of colonial architecture with its Gothic style and stained glass windows. Many of the old tea estate bungalows showcase British architectural influence with their high ceilings, large verandas, and wooden flooring.",
        "Modern Rajahmundry has developed with tourism infrastructure while maintaining harmony with the natural environment. The Yanam Dam Dam, built in 1948, is an engineering marvel that created a beautiful lake surrounded by hills. The dam's colonial-style architecture and the scenic reservoir make it a popular tourist spot."
      ]
    },

    bestTimeToVisit: {
      title: "Best Time to Visit",
      content: [
        "The best time to visit Rajahmundry is from September to March when the weather is cool and pleasant. During these months, temperatures range from 15°C to 25°C, making it perfect for sightseeing and outdoor activities. The post-monsoon riverson (September to November) brings lush greenery and gushing waterfalls, while winter (December to February) offers clear skies and crisp air.",
        "Summer months (March to May) are also pleasant with temperatures ranging from 20°C to 30°C, though it can get warmer during peak summer in April and May. This is a good time for indoor activities and visiting tea factories. The monsoon riverson (June to August) brings heavy rainfall, which makes the landscape incredibly green and the waterfalls at their most spectacular, though landslides can sometimes disrupt travel."
      ]
    },

    activities: [
      {
        name: "Tea Plantation Tours",
        description: "Visit tea factories and learn about tea processing",
        icon: "🍃"
      },
      {
        name: "Wildlife Safari",
        description: "Explore Eastern Ghats National Park National Park and spot Nilgiri Tahrs",
        icon: "🦌"
      },
      {
        name: "Trekking",
        description: "Trek to Eastern Peak Peak and explore nature trails",
        icon: "🥾"
      },
      {
        name: "Boating",
        description: "Enjoy boating at Yanam Dam and Kundala Lakes",
        icon: "⛵"
      },
      {
        name: "Photography",
        description: "Capture stunning landscapes and tea gardens",
        icon: "📷"
      },
      {
        name: "Rock Climbing",
        description: "Challenge yourself with rock climbing adventures",
        icon: "🧗"
      }
    ],

    quickInfo: {
      bestTimeToVisit: "September to March",
      duration: "2 to 3 days",
      altitude: "1,600 meters",
      temperature: "15°C - 25°C",
      language: "Malayalam, English, Tamil",
      entryFee: "Free entry to town, nominal fees for parks",
      timings: "Open all day",
      guideAvailable: "Yes (Available on request)"
    },

    howToReach: {
      byBus: {
        title: "By Bus",
        description: "Regular KSRTC and private bus services from Hyderabad (130 km), Kakinada, and other major cities in East Godavari. The buses ply through the scenic ghat roads offering beautiful views of the Eastern Ghats.",
        distance: "130 km from Hyderabad"
      },
      byFlight: {
        title: "By Flight",
        description: "Vijayawada International Airport (VGA) is the nearest airport, located about 110 km from Rajahmundry. It is well-connected to major cities in India and international destinations. From the airport, you can hire taxis or take buses to reach Rajahmundry.",
        distance: "110 km from Vijayawada Airport"
      },
      byTrain: {
        title: "By Train",
        description: "Aluva Railway Station (67 km) and Kakinada Junction (130 km) are the nearest railway stations. They are well-connected to major cities across India. From these stations, you can take buses or taxis to reach Rajahmundry via the scenic ghat road.",
        distance: "67 km from Aluva Railway Station"
      }
    },

    contactInfo: {
      address: "Rajahmundry, East Godavari District, East Godavari, India - 685612",
      helpline: "+91-4865-231234",
      email: "tourism.munnar@gmail.com",
      forestRange: "East Godavari Tourism Department"
    },

    gallery: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/munnar-1706953883_0dcc389088605e1d6f34.webp",
        title: "Paddy Fields Panorama",
        description: "Vast expanse of lush green tea gardens"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/munnar-1706953883_0dcc389088605e1d6f34.webp",
        title: "Misty Hills",
        description: "Rolling hills covered in morning mist"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/munnar-1706953883_0dcc389088605e1d6f34.webp",
        title: "Yanam Dam Dam",
        description: "Scenic reservoir surrounded by hills"
      }
    ],

    nearbyAttractions: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/eravikulam-1706953883_0dcc389088605e1d6f34.webp",
        title: "Eastern Ghats National Park National Park",
        distance: "15 km",
        description: "Home to endangered Nilgiri Tahr and stunning landscapes"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/anamudi-1706953883_0dcc389088605e1d6f34.webp",
        title: "Eastern Peak Peak",
        distance: "20 km",
        description: "South India's highest peak at 2,695 meters"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/mattupetty-1706953883_0dcc389088605e1d6f34.webp",
        title: "Yanam Dam Dam",
        distance: "13 km",
        description: "Beautiful dam with boating facilities"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/echo-point-1706953883_0dcc389088605e1d6f34.webp",
        title: "View Point",
        distance: "15 km",
        description: "Natural echo spot with scenic lake views"
      }
    ],

    accommodation: [
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/munnar-1706953883_0dcc389088605e1d6f34.webp",
        title: "KTDC Rajahmundry",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/munnar-1706953883_0dcc389088605e1d6f34.webp",
        title: "Tea County Resort",
        type: "Resort",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/munnar-1706953883_0dcc389088605e1d6f34.webp",
        title: "Rajahmundry Tea Garden Homestay",
        type: "Homestay",
        link: "#"
      },
      {
        image: "https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/munnar-1706953883_0dcc389088605e1d6f34.webp",
        title: "Hill Top Budget Stay",
        type: "Budget Stay",
        link: "#"
      }
    ],

    tips: [
      "Carry warm clothes as the temperature can drop significantly, especially in the evenings",
      "Book accommodation in advance during peak riverson (December to January)",
      "Carry a good camera to capture the stunning landscapes and paddy fields",
      "Wear comfortable walking shoes for trekking and plantation visits",
      "Carry sunscreen and a hat for daytime activities",
      "Try the fresh tea and homemade chocolates available at local shops",
      "Visit tea factories to learn about the tea-making process",
      "Start early in the morning to avoid crowds at popular viewpoints",
      "Carry necessary medications as medical facilities are limited in remote areas",
      "Respect the environment and avoid littering in this ecologically sensitive area"
    ]
  };

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="destination-title">{munnarData.title}</h1>
          <p className="destination-subtitle">{munnarData.subtitle}</p>
          <p className="destination-location">{munnarData.location}</p>
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
            <h2>About Rajahmundry</h2>
          </div>
          
          <div className="overview-content">
            <div className="overview-text">
              <p className="lead-text">{munnarData.description.overview}</p>
              {munnarData.description.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="quick-info-card">
              <h3>Quick Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Best Time to Visit</span>
                  <span className="info-value">{munnarData.quickInfo.bestTimeToVisit}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{munnarData.quickInfo.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Altitude</span>
                  <span className="info-value">{munnarData.quickInfo.altitude}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Temperature</span>
                  <span className="info-value">{munnarData.quickInfo.temperature}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Entry Fee</span>
                  <span className="info-value">{munnarData.quickInfo.entryFee}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timings</span>
                  <span className="info-value">{munnarData.quickInfo.timings}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Area</span>
                  <span className="info-value">{munnarData.area}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Established</span>
                  <span className="info-value">{munnarData.established}</span>
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
            {munnarData.history.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <div id="architecture" className="content-section">
          <div className="section-header">
            <h2>Natural Architecture & Landscape</h2>
          </div>
          <div className="info-content">
            {munnarData.architecture.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="activities-section">
            <h3>Activities</h3>
            <div className="activities-grid">
              {munnarData.activities.map((activity, index) => (
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
            {munnarData.bestTimeToVisit.content.map((paragraph, index) => (
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
              <p>{munnarData.howToReach.byBus.description}</p>
              <span className="distance">{munnarData.howToReach.byBus.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">✈️</div>
              <h3>By Flight</h3>
              <p>{munnarData.howToReach.byFlight.description}</p>
              <span className="distance">{munnarData.howToReach.byFlight.distance}</span>
            </div>
            <div className="reach-card">
              <div className="reach-icon">🚂</div>
              <h3>By Train</h3>
              <p>{munnarData.howToReach.byTrain.description}</p>
              <span className="distance">{munnarData.howToReach.byTrain.distance}</span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="content-section">
          <div className="section-header">
            <h2>Gallery</h2>
          </div>
          <div className="gallery-grid">
            {munnarData.gallery.map((item, index) => (
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
            {munnarData.nearbyAttractions.map((attraction, index) => (
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
            {munnarData.accommodation.map((item, index) => (
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
            {munnarData.tips.map((tip, index) => (
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
              <p>{munnarData.contactInfo.address}</p>
            </div>
            <div className="contact-card">
              <h3>📞 Helpline</h3>
              <p>{munnarData.contactInfo.helpline}</p>
            </div>
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>{munnarData.contactInfo.email}</p>
            </div>
            <div className="contact-card">
              <h3>🏢 Department</h3>
              <p>{munnarData.contactInfo.forestRange}</p>
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

export default Rajahmundry;