import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { heroSlides, events, photoGallery, destinations, gallary_Kalaripayattu, gallary_peddapuram_beach, memories_cuisine, memories_village_life, memories_trekking, memories_agri_tourism, memories_artforms, memories_monsoon, memories_river_cruise, godavari_pushkaram, godavari_river, peddapuram, jack_fruit } from '../data/content';
import exploreKotipalliTemple from '../assets/images/explore-kotipalli-temple.jpg';
import exploreRamanayuniTemple from '../assets/images/explore-ramanayuni-temple.jpg';
import exploreKorukondaTemple from '../assets/images/explore-korukonda-temple.jpg';
import exploreKakindaRamalayam from '../assets/images/explore-kakinda-ramalayam.jpg';
import exploreVinayakaTemple from '../assets/images/explore-vinayaka-temple.jpg';
const ArrowIcon = ({ color = "#fff" }) => (
  <svg width="0.5em" height="0.5em" viewBox="0 0 24.336 24.336">
    <g transform="translate(8 24.336) rotate(-135)">
      <path d="M5.879,13.766H15.5a2.2,2.2,0,0,1,.384.043,1.79,1.79,0,0,1,1.207,2.339,1.753,1.753,0,0,1-1.4,1.052,1.433,1.433,0,0,1-.193.01H1.722l-.1,0a1.412,1.412,0,0,1-.191-.022A1.761,1.761,0,0,1,.01,15.681,1.785,1.785,0,0,1,0,15.488V1.711A1.784,1.784,0,0,1,2.382.12a1.761,1.761,0,0,1,1.052,1.4,1.809,1.809,0,0,1,.01.193l-.25,12.042c-.081-.052-1.131,0,2.685.012Z" fill={color}></path>
    </g>
  </svg>
);

const SectionHeader = ({ heading, description, light = false }) => (
  <div className="section-header" style={light ? { color: 'white' } : {}}>
    <h2 style={light ? { color: 'white' } : {}}>{heading}</h2>
    <p style={light ? { color: 'white', opacity: 0.9 } : {}}>{description}</p>
  </div>
);

const Hero = () => {
  const slide = heroSlides[0];

  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video
          key={slide.video}
          height="100%" width="100%"
          poster={slide.poster}
          preload="metadata"
          playsInline
          muted
          autoPlay
          loop
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className="hero-content-inner">
            <div className="hero-content-body">
              <hr aria-orientation="vertical" className="hero-divider" />
              <h6 className="hero-category" style={{ fontSize: '3.25rem', fontWeight: 'bold' }}>{slide.heading}</h6>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatsNew = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const whatsNewItems = [
    {
      heading: "Godavari River Festival 2026",
      description: "The 12th edition of the Godavari River Festival is set to take place from July 30 to August 2, 2026, in the exhilarating waters of the Godavari River in Eluru.",
      image: godavari_pushkaram,
      video: "/pushkaralu.mp4",
      btnText: "More",
      link: "https://www.east-godavariadventure.org/godavari-river-festival/"
    },
    {
      heading: "East Godavari Travel Mart 2026",
      description: "Register now to participate in East Godavari's biggest international travel trade event and connect with the global tourism community.",
      image: godavari_river,
      btnText: "Register Now",
      link: "https://www.east-godavaritravelmart.org/ktm-2026-registrations-open-for-buyers-media/"
    },
    {
      heading: "Destination Wedding",
      description: "Whether it's sandy beaches, serene hills, or tranquil river islands, East Godavari offers a variety of perfect destination spots to provide the most memorable backdrop for your special day.",
      image: peddapuram,
      btnText: "Explore",
      link: "#"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % whatsNewItems.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [whatsNewItems.length]);

  const goToSlide = (index) => {
    setCurrent(index);
    clearInterval(timerRef.current);
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % whatsNewItems.length), 12000);
    timerRef.current = timer;
  };

  const item = whatsNewItems[current];

  return (
    <section className="section">
      <div className="container">
        <div className="container-xl" style={{ margin: '0 auto' }}>
          <SectionHeader heading="What's New" description="Here's a quick glance on what's trending in Land of Riches now." />
        </div>
        <div className="whats-new-slider">
          <div className="whats-new-item active">
            <div className="whats-new-image">
              {item.video ? (
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.375rem" }}
                />
              ) : (
                <img src={item.image} alt={item.heading} loading="lazy" width="500" height="750" decoding="async" data-nimg="1" style={{ color: "transparent", width: "100%", height: "100%", borderRadius: "0.375rem", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }} />
              )}
              <div className="whats-new-overlay"></div>
            </div>
            <div className="whats-new-text">
              <h4>{item.heading}</h4>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="whats-new-btn">{item.btnText} <ArrowIcon color="#fff" /></a>
            </div>
          </div>
        </div>
        <div className="whats-new-dots">
          {whatsNewItems.map((_, i) => (
            <button key={i} className={`whats-new-dot ${i === current ? 'active' : ''}`} onClick={() => goToSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StunningWonders = () => {
  const wonders = [
    { heading: "Discover East Godavari's Religious Heritage", description: "Explore ancient temples, serene churches, historic mosques, vibrant rituals of Theyyam and Padayani that showcase the rich religious heritage of this divine land.", image: gallary_Kalaripayattu, link: "/experiences?category=artforms" },
    { heading: "Discover North East Godavari", description: "Every day in North East Godavari is a sensory delight. Explore the serene coastal beauty, historic forts, and exquisite culinary wonders that define this vibrant region of East Godavari.", image: gallary_peddapuram_beach, link: "/experiences?category=eco-tourism" },
    { heading: "Experience East Godavari's Wellness Retreats", description: "Discover traditional Ayurvedic treatments, yoga retreats, wellness resorts, and therapeutic practices rooted in centuries-old traditions for a holistic rejuvenation.", image: memories_cuisine, link: "/experiences?category=cuisine" }
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="container-xl" style={{ margin: '0 auto' }}>
          <SectionHeader heading="East Godavari's Stunning Wonders" description="Enjoy the magnificent and varied allure of Land of Riches" />
        </div>
        <div className="wonders-grid">
          {wonders.map((item, i) => (
            <Link key={i} to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="wonder-card">
                <div className="wonder-image-wrapper">
                  <img src={item.image} alt={item.heading} loading="lazy" width="500" height="750" decoding="async" data-nimg="1" style={{ color: "transparent", width: "100%", height: "100%", borderRadius: "2%", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }} />
                </div>
                <div className="wonder-card-content">
                  <h4>{item.heading}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const MemoriesForALifetime = () => {
  const bgVideo = "https://placehold.co/1920x1080/2E7D32/FFFFFF?text=East+Godavari+Tourism";
  const items = [
    { heading: "Village Life Experience", image: memories_village_life },
    { heading: "Trekking and Safaris", image: memories_trekking },
    { heading: "Agri Tourism", image: memories_agri_tourism },
    { heading: "Cuisine", image: memories_cuisine },
    { heading: "Artforms", image: memories_artforms },
    { heading: "Monsoon", image: memories_monsoon },
    { heading: "River Cruise", image: memories_river_cruise }
  ];
  return (
    <section className="memories-section">
      <video className="memories-bg-video" src={bgVideo} autoPlay muted loop playsInline />
      <div className="memories-overlay"></div>
      <div className="memories-content">
        <div className="container">
          <SectionHeader heading="Memories for a Lifetime" description="Here is a bouquet of unforgettable experiences East Godavari offers: charming village life, thrilling treks, serene safaris, vibrant farms, unique cuisine, tranquil river cruises and the magic of monsoon. Each moment in East Godavari is a story waiting to be told, a memory etched in time." light />
          <div className="memories-grid">
            {items.map((item, i) => (
              <Link key={i} to="/experiences" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="memories-card">
                  <img src={item.image} alt={item.heading} loading="lazy" width="500" height="750" decoding="async" data-nimg="1" style={{ color: "transparent", width: "100%", height: "100%", borderRadius: "var(--east-godavari-tourism-radii-md)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }} />
                  <div className="memories-card-label">{item.heading}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GatewayToEastGodavari = () => (
  <section className="section">
    <div className="container">
      <div className="gateway-section">
        <div className="gateway-text">
          <SectionHeader heading="Gateway to East Godavari" description="Let Land of Riches inspire your next journey" />
          <div className="gateway-feature">
            <h3>Jackfruit</h3>
            <p>In East Godavari, jackfruit is more than food-it is part of daily life and tradition. Known for its versatility and deep cultural roots, jackfruit (chakka) is East Godavari's official state fruit and a rising global culinary trend</p>
            <Link to="/destinations" className="hero-btn" style={{ color: '#333', borderColor: '#d9d9d9', marginTop: '1rem', display: 'inline-flex', alignItems: 'center' }}>
              More <ArrowIcon color="#333" />
            </Link>
          </div>
        </div>
        <div className="gateway-image">
          <img src={jack_fruit} alt="Jackfruit" />
        </div>
      </div>
    </div>
  </section>
);



const Events = () => (
  <section className="section">
    <div className="container">
      <div className="container-xl" style={{ margin: '0 auto' }}>
        <SectionHeader heading="Events" description="The land of rich cultures and traditions! Mark the major events for your next visit." />
      </div>
      <div className="events-grid">
        {events.slice(0, 8).map((event, i) => (
          <Link key={i} to={`/events/${event.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <article className="event-card" style={{ cursor: 'pointer' }}>
              <img src={event.image} alt={event.heading} loading="lazy" />
              <div className="event-card-overlay">
                <span className="event-date-badge">{event.date}</span>
                <h4>{event.heading}</h4>
                {event.description && <p>{event.description}</p>}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const PopularDestinations = () => {
  const items = destinations.slice(0, 20);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header" style={{ paddingBottom: "1.25rem" }}>
          <h2>Popular Destinations</h2>
          <p>Check out these enthralling tourism spots that cast a magical spell!</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
            gap: "1.5rem",
          }}
        >
          {items.map((dest, i) => (
            <Link
              key={i}
              to={`/destination/${dest.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  height: "300px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <img
                  src={dest.image}
                  alt={dest.heading}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "24px",
                    background: "rgba(0,0,0,0.7)",
                    color: "white",
                  }}
                >
                  <h4>{dest.heading}</h4>
                  <p>{dest.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Spirituality = () => {
  const spiritualityItems = [
    { title: "Kotipalli Temple", image: exploreKotipalliTemple, description: "Ancient temple by the river banks", link: "/destination-page/31" },
    { title: "Ramanayuni Temple", image: exploreRamanayuniTemple, description: "Sacred shrine with rich heritage", link: "/destination-page/32" },
    { title: "Korukonda Temple", image: exploreKorukondaTemple, description: "Hilltop temple with panoramic views", link: "/destination-page/33" },
    { title: "Kakinada Ramalayam", image: exploreKakindaRamalayam, description: "Divine temple dedicated to Lord Rama", link: "/destination-page/34" },
    { title: "Vinayaka Temple", image: exploreVinayakaTemple, description: "Temple dedicated to Lord Ganesha", link: "/destination-page/35" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, #fdf6f0 0%, #fff5eb 50%, #fef0e6 100%)', overflow: 'hidden' }}>
      <div className="container">
        <div className="container-xl" style={{ margin: '0 auto' }}>
          <SectionHeader heading="Spirituality" description="Embark on a divine journey through the sacred temples and spiritual heritage of East Godavari." />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '2rem',
          padding: '1rem 0'
        }}>
          {spiritualityItems.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '400px',
                  cursor: 'pointer',
                  boxShadow: activeIndex === i ? '0 20px 60px rgba(255, 154, 77, 0.3), 0 8px 24px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transform: activeIndex === i ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                  border: activeIndex === i ? '2px solid #ff9a4d' : '2px solid transparent',
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(0)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
                    transform: activeIndex === i ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                  padding: '2rem 1.5rem 1.5rem',
                  color: 'white',
                }}>
                  <div style={{
                    width: '40px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #ff9a4d, #ff6b35)',
                    borderRadius: '2px',
                    marginBottom: '0.75rem',
                  }} />
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 0 0.35rem 0',
                    fontFamily: 'Georgia, serif',
                    letterSpacing: '0.5px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    margin: 0,
                    opacity: 0.9,
                    lineHeight: '1.4',
                    fontWeight: '400',
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhotoGallery = () => (
  <section className="section">
    <div className="container">
      <div className="container-xl" style={{ margin: '0 auto' }}>
        <SectionHeader heading="Photo Gallery" description="Photographs that capture the spirit and splendour of Land of Riches." />
      </div>
      <div className="gallery-slider">
        {photoGallery.map((item, i) => (
          <Link key={i} to="/photo-gallery" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="gallery-item">
              <img src={item.image} alt={item.heading} loading="lazy" width="1920" height="850" decoding="async" data-nimg="1" style={{ color: "transparent", width: "100%", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }} />
              <div className="gallery-item-content">
                <h4>{item.heading}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const VideoGallery = () => (
  <section className="section">
    <div className="container">
      <div className="container-xl" style={{ margin: '0 auto' }}>
        <SectionHeader heading="Video Gallery" description="Take a virtual expedition through our video gallery" />
      </div>
      <div className="video-gallery-wrapper">
        <iframe src="https://youtu.be/M5TPr506adk?si=WZF8Bc7LsdHyw6dN" title="East Godavari Tourism Video" allowFullScreen></iframe>
      </div>
    </div>
  </section>
);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`scroll-to-top ${visible ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <svg className="progress-circle" viewBox="-1 -1 102 102" width="100%" height="100%">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" fill="none" />
      </svg>
    </div>
  );
};

const Home = () => (
  <>
    <Helmet>
      <title>Welcome to East Godavari Tourism - Official Website of Department of Tourism, Government of East Godavari</title>
      <meta name="description" content="East Godavari Tourism official website provides text, photos, video, on travel destinations, hotels, accommodation, culture, heritage, art forms and people of God's own Country" />
      <meta property="og:title" content="Welcome to East Godavari Tourism - Official Website of Department of Tourism, Government of East Godavari" />
    </Helmet>
    <Hero />
    <WhatsNew />
    <StunningWonders />
    <MemoriesForALifetime />
    <GatewayToEastGodavari />

    <Events />
    <PopularDestinations />
    <Spirituality />
    <PhotoGallery />
    <VideoGallery />
    
    
    <ScrollToTop />
  </>
);

export default Home;