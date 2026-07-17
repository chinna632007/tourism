import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import explorePeddapuramBeach from '../assets/images/explore-peddapuram-beach.jpg';
import exploreKakinadaBeach from '../assets/images/explore-kakinada-beach.jpg';
import exploreCoringaBeach from '../assets/images/explore-coringa-beach.jpg';
import exploreYanamBeach from '../assets/images/explore-yanam-beach.jpg';
import exploreGautamiRiver from '../assets/images/explore-gautami-river.jpg';
import exploreKorukondaFort from '../assets/images/explore-korukonda-fort.jpg';
import exploreRamanayuniTemple from '../assets/images/explore-ramanayuni-temple.jpg';
import explorePeddapuramFort from '../assets/images/explore-peddapuram-fort.jpg';
import exploreRajahmundryBridge from '../assets/images/explore-rajahmundry-bridge.jpg';
import exploreMahakaleshwarTemple from '../assets/images/explore-kotipalli-temple.jpg';
import exploreKotipalliRiver from '../assets/images/explore-kotipalli-river.jpg';
import exploreKakinadaHillView from '../assets/images/explore-kakinada-hill-view.jpg';
import exploreGodavariIsland from '../assets/images/explore-godavari-island.jpg';
import explorePapiHill from '../assets/images/explore-papi-hill.jpg';
import exploreYalamanchiliLanka from '../assets/images/explore-yalamanchili-lanka.jpg';
import exploreGudisaHill from '../assets/images/explore-gudisa-hill.jpg';
import explorePithampurHills from '../assets/images/explore-pithampur-hills.jpg';
import exploreMaridimilliHill from '../assets/images/explore-maredimilli-hill.jpg';
import exploreAmruthandhraWaterfall from '../assets/images/explore-amruthandhra-waterfall.jpg';
import exploreGodavariWaterfall from '../assets/images/explore-godavari-waterfall.jpg';
import exploreDharapalliWaterfalls from '../assets/images/explore-dharapalli-waterfalls.jpg';
import explorePolluruWaterfall from '../assets/images/explore-polluru-waterfall.jpg';
import exploreRampaWaterfall from '../assets/images/explore-rampa-waterfall.jpg';
import exploreYanamTiger from '../assets/images/explore-yanam-tiger.jpg';
import exploreCoringaWildlife from '../assets/images/explore-coringa-willdlife.jpg';
import exploreRamanayuniWildlife from '../assets/images/explore-ramanayuni-wildlife.jpg';
import explorePapikondaWildlife from '../assets/images/explore-papikonda-wildlife.jpg';
import exploreAtreyapuramWildlife from '../assets/images/explore-atreyapuram-wildlife.jpg';
import exploreMavidadaRamalayam from '../assets/images/explore-kakinda-ramalayam.jpg';
import exploreVinayakaTemple from '../assets/images/explore-vinayaka-temple.jpg';
import exploreKorukondaTemple from '../assets/images/explore-korukonda-temple.jpg';
import explorePithampurMarket from '../assets/images/explore-pithampur-market.jpg';
import exploreKakinadaShopping from '../assets/images/explore-kakinada-shopping.jpg';
import exploreAmalapuramMarket from '../assets/images/explore-amalapuram-market.jpg';
import explorePeddapuramMarket from '../assets/images/explore-peddapuram-market.jpg';
import exploreAnnavaramMart from '../assets/images/explore-annavaram-mart.jpg';
import exploreHopeIsland from '../assets/images/explore-hope-island.jpg';
import explorePallamIsland from '../assets/images/explore-pallam-island.jpg';
import exploreCottonBridge from '../assets/images/heritage-cottonbridge.webp';
import exploreDeviChowk from '../assets/images/spirituality-devichowk.webp';

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const [categoryFromUrl] = useState(searchParams.get('category'));
  const [activeFilter, setActiveFilter] = useState(categoryFromUrl || 'all');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Track video load
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Auto-scroll to category section when category changes or page loads
  useEffect(() => {
    if (categoryFromUrl) {
      setActiveFilter(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'hills', label: 'Hill Stations' },
    { id: 'beaches', label: 'Beaches' },
    { id: 'river islands', label: 'River Islands' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'heritage', label: 'Heritage' },
    { id: 'waterfalls', label: 'Waterfalls' },
    { id: 'spirituality', label: 'Spirituality' },
    { id: 'shopping', label: 'Shopping & Malls' }
  ];

  const categoryImages = [
    // Beaches (5)
    { id: 1, category: 'beaches', title: 'Peddapuram Beach', alt: 'Peddapuram Beach', src: explorePeddapuramBeach, description: 'A serene beach with golden sands and gentle waves, perfect for evening walks and sunset views.', address: 'Peddapuram, East Godavari, Andhra Pradesh' },
    { id: 2, category: 'beaches', title: 'Kakinada Beach', alt: 'Kakinada Beach', src: exploreKakinadaBeach, description: 'Pristine coastline with beautiful sunrise views and peaceful atmosphere for beach lovers.', address: 'Kakinada Beach Road, Kakinada, East Godavari' },
    { id: 3, category: 'beaches', title: 'Coringa Beach', alt: 'Coringa Beach', src: exploreCoringaBeach, description: 'Untouched beach near the Coringa Wildlife Sanctuary offering pristine natural beauty.', address: 'Coringa, East Godavari, Andhra Pradesh' },
    { id: 4, category: 'beaches', title: 'Yanam Beach', alt: 'Yanam Beach', src: exploreYanamBeach, description: 'Scenic beach in the French colony of Yanam with unique cultural heritage.', address: 'Yanam, Puducherry (Near East Godavari)' },
    { id: 5, category: 'beaches', title: 'Gautami River', alt: 'Gautami River', src: exploreGautamiRiver, description: 'Majestic river confluence offering breathtaking views and peaceful boat rides.', address: 'Gautami River, East Godavari, Andhra Pradesh' },
    
    // Heritage (5)
    { id: 6, category: 'heritage', title: 'Korukonda Fort', alt: 'Korukonda Fort', src: exploreKorukondaFort, description: 'Historic fort with ancient architecture and panoramic views of the surrounding landscape.', address: 'Korukonda, East Godavari, Andhra Pradesh' },
    { id: 7, category: 'heritage', title: 'Ramanayuni Temple', alt: 'Ramanayuni Temple', src: exploreRamanayuniTemple, description: 'Ancient temple with intricate carvings and rich spiritual heritage dating back centuries.', address: 'Ramanayuni, East Godavari, Andhra Pradesh' },
    { id: 8, category: 'heritage', title: 'Peddapuram Fort', alt: 'Peddapuram Fort', src: explorePeddapuramFort, description: 'Magnificent historical fort showcasing the architectural brilliance of ancient India.', address: 'Peddapuram, East Godavari, Andhra Pradesh' },
    { id: 9, category: 'heritage', title: 'Rajahmundry Bridge', alt: 'Rajahmundry Bridge', src: exploreRajahmundryBridge, description: 'Iconic bridge across Godavari River, an engineering marvel and popular tourist attraction.', address: 'Rajahmundry, East Godavari, Andhra Pradesh' },
    { id: 10, category: 'heritage', title: 'Mahakaleshwar Temple', alt: 'Mahakaleshwar  Temple', src: exploreMahakaleshwarTemple, description: 'Sacred temple dedicated to Lord Shiva with beautiful architecture and religious significance.', address: 'Kotipalli, East Godavari, Andhra Pradesh' },
    { id: 41, category: 'heritage', title: 'Cotton Bridge', alt: 'Cotton Bridge', src: exploreCottonBridge, description: 'Historic cotton bridge showcasing colonial-era engineering and architecture over the Godavari.', address: 'Rajahmundry, East Godavari, Andhra Pradesh' },
    
    // River Islands (5)
    { id: 11, category: 'river islands', title: 'Kotipalli River', alt: 'Kotipalli River', src: exploreKotipalliRiver, description: 'Peaceful river island with lush greenery and tranquil waters perfect for nature lovers.', address: 'Kotipalli, East Godavari, Andhra Pradesh' },
    { id: 12, category: 'river islands', title: 'Hope Island', alt: 'Hope Island', src: exploreHopeIsland, description: 'Pristine island formed by the confluence of two rivers, offering unique ecosystem and serene environment.', address: 'Hope Island, Near Kakinada, East Godavari' },
    { id: 13, category: 'river islands', title: 'Pallam Island', alt: 'Pallam Island', src: explorePallamIsland, description: 'Beautiful river island with rich biodiversity and traditional village life experiences.', address: 'Pallam Island, East Godavari, Andhra Pradesh' },
    { id: 14, category: 'river islands', title: 'Godavari Island', alt: 'Godavari Island', src: '/godavari-cards.webp', description: 'Largest river island in Godavari with fertile lands and traditional farming communities.', address: 'Godavari Island, East Godavari, Andhra Pradesh' },
    { id: 15, category: 'river islands', title: 'Yalamanchili Lanka', alt: 'Yalamanchili Lanka', src: exploreYalamanchiliLanka, description: 'Charming island village showcasing authentic rural life and agricultural traditions.', address: 'Yalamanchili Lanka, East Godavari, Andhra Pradesh' },
    
    // Hills (5)
    { id: 16, category: 'hills', title: 'Gudisa Hill', alt: 'Gudisa Hill', src: exploreGudisaHill, description: 'Scenic hill station with misty peaks and stunning viewpoints for adventure enthusiasts.', address: 'Gudisa Hills, East Godavari, Andhra Pradesh' },
    { id: 17, category: 'hills', title: 'Pithapuram Hills', alt: 'Pithampur Hills', src: explorePithampurHills, description: 'Rolling hills with tea gardens and pleasant climate, ideal for trekking and nature walks.', address: 'Pithampur, East Godavari, Andhra Pradesh' },
    { id: 18, category: 'hills', title: 'Maridimilli Hill', alt: 'Maridimilli Hill', src: exploreMaridimilliHill, description: 'Picturesque hill with dense forests and rich wildlife, perfect for eco-tourism.', address: 'Maridimilli, East Godavari, Andhra Pradesh' },
    { id: 19, category: 'hills', title: 'Kakinada Hill View', alt: 'Kakinada Hill View', src: exploreKakinadaHillView, description: 'Panoramic viewpoint offering breathtaking views of the coastal landscape and city.', address: 'Kakinada Hill View Point, East Godavari' },
    { id: 20, category: 'hills', title: 'Papi Hills', alt: 'Papi Hills', src: explorePapiHill, description: 'Majestic hills with deep gorges and the mighty Godavari flowing through them.', address: 'Papi Hills, Near Bhadrachalam, East Godavari' },
    
    // Waterfalls (5)
    { id: 21, category: 'waterfalls', title: 'Amruthadhara Falls', alt: 'Amruthadhara Falls', src: exploreAmruthandhraWaterfall, description: 'Magnificent waterfall cascading from great heights surrounded by dense forests.', address: 'Amruthadhara Falls, East Godavari, Andhra Pradesh' },
    { id: 22, category: 'waterfalls', title: 'Godavari Waterfall', alt: 'Godavari Waterfall', src: exploreGodavariWaterfall, description: 'Spectacular waterfall on the Godavari River with crystal clear waters and scenic beauty.', address: 'Godavari Waterfall, East Godavari, Andhra Pradesh' },
    { id: 23, category: 'waterfalls', title: 'Dharapalli Falls', alt: 'Dharapalli Falls', src: exploreDharapalliWaterfalls, description: 'Hidden gem waterfall nestled in the hills, perfect for a refreshing getaway.', address: 'Dharapalli, East Godavari, Andhra Pradesh' },
    { id: 24, category: 'waterfalls', title: 'Polluru Waterfall', alt: 'Polluru Waterfall', src: explorePolluruWaterfall, description: 'Picturesque waterfall surrounded by lush greenery and rocky terrain.', address: 'Polluru, East Godavari, Andhra Pradesh' },
    { id: 25, category: 'waterfalls', title: 'Rampa Waterfall', alt: 'Rampa Waterfall', src: exploreRampaWaterfall, description: 'Beautiful cascade in a serene natural setting, ideal for picnics and photography.', address: 'Rampa, East Godavari, Andhra Pradesh' },
    
    // Wildlife (5)
    { id: 26, category: 'wildlife', title: 'Yanam Tiger Reserve', alt: 'Yanam Tiger Reserve', src: exploreYanamTiger, description: 'Premier wildlife sanctuary home to royal Bengal tigers and diverse fauna.', address: 'Yanam Tiger Reserve, East Godavari, Andhra Pradesh' },
    { id: 27, category: 'wildlife', title: 'Coringa Wildlife', alt: 'Coringa Wildlife', src: exploreCoringaWildlife, description: 'Unique mangrove ecosystem with rare species and bird watching opportunities.', address: 'Coringa Wildlife Sanctuary, East Godavari' },
    { id: 28, category: 'wildlife', title: 'Ramanayuni Wildlife', alt: 'Ramanayuni Wildlife', src: exploreRamanayuniWildlife, description: 'Dense forest reserve with rich biodiversity and exciting safari experiences.', address: 'Ramanayuni Wildlife Sanctuary, East Godavari' },
    { id: 29, category: 'wildlife', title: 'Atreyapuram Wildlife', alt: 'Atreyapuram Wildlife', src: exploreAtreyapuramWildlife, description: 'Natural habitat for various species with well-maintained trails and viewing points.', address: 'Atreyapuram, East Godavari, Andhra Pradesh' },
    { id: 30, category: 'wildlife', title: 'Papikonda Wildlife', alt: 'Papikonda Wildlife', src: explorePapikondaWildlife, description: 'Expansive wildlife area with diverse ecosystems and conservation efforts.', address: 'Papikonda Wildlife Sanctuary, East Godavari' },
    
    // Spirituality (5)
    { id: 31, category: 'spirituality', title: 'Mahakaleshwar  Temple', alt: 'Mahakaleshwar  Temple', src: exploreMahakaleshwarTemple, description: 'Ancient temple with divine atmosphere and traditional South Indian architecture.', address: 'Mahakaleshwar  Temple, East Godavari, Andhra Pradesh' },
    { id: 32, category: 'spirituality', title: 'Ramanayuni Temple', alt: 'Ramanayuni Temple', src: exploreRamanayuniTemple, description: 'Sacred shrine with historical significance and beautiful religious ceremonies.', address: 'Ramanayuni, East Godavari, Andhra Pradesh' },
    { id: 33, category: 'spirituality', title: 'Korukonda Temple', alt: 'Korukonda Temple', src: exploreKorukondaTemple, description: 'Peaceful temple complex with intricate sculptures and spiritual ambiance.', address: 'Korukonda, East Godavari, Andhra Pradesh' },
    { id: 34, category: 'spirituality', title: 'Mavidada Ramalayam', alt: 'Mavidada Ramalayam', src: exploreMavidadaRamalayam, description: 'Beautiful temple dedicated to Lord Rama with vibrant festivals and community events.', address: 'Mavidada Ramalayam, East Godavari, Andhra Pradesh' },
    { id: 35, category: 'spirituality', title: 'Vinayaka Temple', alt: 'Vinayaka Temple', src: exploreVinayakaTemple, description: 'Revered temple of Lord Ganesha with divine blessings and traditional rituals.', address: 'Vinayaka Temple, East Godavari, Andhra Pradesh' },
    { id: 42, category: 'spirituality', title: 'Devi Chowk Mandir', alt: 'Devi Chowk Mandir', src: exploreDeviChowk, description: 'Sacred temple dedicated to the goddess, a revered spiritual site in the heart of the region.', address: 'Devi Chowk, East Godavari, Andhra Pradesh' },
    
    // Shopping (5)
    { id: 36, category: 'shopping', title: 'Pithapur Market', alt: 'Pithampur Market', src: explorePithampurMarket, description: 'Vibrant local market offering traditional handicrafts, textiles, and authentic cuisine.', address: 'Pithampur Market, East Godavari, Andhra Pradesh' },
    { id: 37, category: 'shopping', title: 'Kakinada Shopping', alt: 'Kakinada Shopping', src: exploreKakinadaShopping, description: 'Modern shopping destination with local boutiques, malls, and traditional markets.', address: 'Kakinada Shopping Complex, Kakinada, East Godavari' },
    { id: 38, category: 'shopping', title: 'Amalapuram Market', alt: 'Amalapuram Market', src: exploreAmalapuramMarket, description: 'Bustling market known for fresh produce, spices, and local artisan products.', address: 'Amalapuram Market, East Godavari, Andhra Pradesh' },
    { id: 39, category: 'shopping', title: 'Peddapuram Market', alt: 'Peddapuram Market', src: explorePeddapuramMarket, description: 'Traditional marketplace with authentic local products and cultural shopping experience.', address: 'Peddapuram Market, East Godavari, Andhra Pradesh' },
    { id: 40, category: 'shopping', title: 'Annavaram Mart', alt: 'Annavaram Mart', src: exploreAnnavaramMart, description: 'Popular shopping center near the famous temple with religious items and souvenirs.', address: 'Annavaram Mart, Near Temple, East Godavari' }
  ];

  const filteredCategoryImages = activeFilter === 'all' 
    ? categoryImages 
    : categoryImages.filter(img => img.category === activeFilter);

  return (
    <div className="page-container">
      {/* Hero Video Section (Home Page Style) */}
      <section className="hero-section">
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            height="100%" width="100%"
            preload="metadata"
            playsInline
            muted
            autoPlay
            loop
            onLoadedData={handleVideoLoad}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source src="/godavari.mp4" type="video/mp4" />
            <source src="/experience.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-content" style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s ease' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className="hero-content-inner">
              <div className="hero-content-body">
                <hr aria-orientation="vertical" className="hero-divider" />
                <h6 className="hero-category">East Godavari Tourism</h6>
                <h1 style={{ fontFamily: "var(--kt-fonts-heading)", fontSize: '2.5rem', color: 'white', marginBottom: '0.5rem', marginLeft: '1.5rem' }}>Explore Destinations</h1>
                <p className="hero-description">Discover the diverse beauty of East Godavari</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '3rem' }}>
        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              style={{
                padding: '0.75rem 1.5rem',
                border: activeFilter === category.id ? '2px solid #1a6b7a' : '2px solid #e0e0e0',
                background: activeFilter === category.id ? '#1a6b7a' : 'white',
                color: activeFilter === category.id ? 'white' : '#333',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredCategoryImages.map((image) => (
            <Link
              key={image.id}
              to={`/destination-page/${image.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)';
                  const title = e.currentTarget.querySelector('h3');
                  const button = e.currentTarget.querySelector('.explore-btn');
                  if (title) {
                    title.style.background = 'linear-gradient(135deg, #FF9D00 0%, #FF6B35 100%)';
                    title.style.webkitBackgroundClip = 'text';
                    title.style.webkitTextFillColor = 'transparent';
                    title.style.backgroundClip = 'text';
                  }
                  if (button) {
                    button.style.background = 'linear-gradient(135deg, #FF9D00 0%, #FF6B35 100%)';
                    button.style.color = '#ffffff';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)';
                  const title = e.currentTarget.querySelector('h3');
                  const button = e.currentTarget.querySelector('.explore-btn');
                  if (title) {
                    title.style.background = 'transparent';
                    title.style.webkitTextFillColor = '#1a1a2e';
                  }
                  if (button) {
                    button.style.background = '#f8f9fc';
                    button.style.color = '#1a1a2e';
                  }
                }}
              >
                {/* Image Section */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  overflow: 'hidden'
                }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 40%)',
                    opacity: 0,
                    transition: 'opacity 0.5s ease'
                  }}></div>
                </div>

                {/* Content Section */}
                <div style={{
                  padding: '1.5rem 1.5rem 0',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  background: 'white'
                }}>
                  {/* Title */}
                  <h3 
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#1a1a2e',
                      marginBottom: '0.5rem',
                      fontFamily: 'Georgia, serif',
                      lineHeight: '1.3',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {image.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: '#6b7280',
                    margin: 0,
                    lineHeight: '1.6',
                    flex: 1
                  }}>
                    {image.description}
                  </p>
                </div>

                {/* Explore Button */}
                <div 
                  className="explore-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 2.5rem',
                    background: '#f8f9fc',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'black',
                    height: '50px',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    marginTop: 'auto',
                    borderRadius: '100px',
                    letterSpacing: '0.5px'
                  }}
                >
                  <span>Explore</span>
                  <span style={{ fontSize: '18px' }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCategoryImages.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              margin: 0
            }}>
              No images found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;