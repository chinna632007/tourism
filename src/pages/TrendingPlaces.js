import React from 'react';
import { Link } from 'react-router-dom';
import './TrendingPlaces.css';
import rajahmundryCard from "../assets/images/dest_rajahmundry.jpg";
import contactKakinada from "../assets/images/contact-kakinada.jpg";
import contactAmalapuram from "../assets/images/contact-amalapuram.jpg";
import contactPeddapuram from "../assets/images/contact-peddapuram.jpg";
import contactKadiyam from "../assets/images/contact-kadiyam.jpg";
import contactKorumamFort from "../assets/images/contact-korumam-fort.jpg";
import contactKotipalliRiver from "../assets/images/contact-kotipalli-river.jpg";
import contactRamanayuni from "../assets/images/contact-ramanayuni.jpg";
import contactGurunandhan from "../assets/images/contact-gurunandhan.jpg";
import contactPithampur from "../assets/images/contact-pithampur.jpg";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const TrendingPlaces = () => {
  const trendingPlaces = [
    {
      id: "munnar",
      title: "Rajahmundry",
      description: "Cultural and spiritual hub on the banks of River Godavari",
      image: rajahmundryCard,
      link: "/services/munnar",
    },
    {
      id: 'thekkady',
      title: 'Kakinada',
      description: 'Coastal beauty with pristine beaches and rich history',
      image: contactKakinada,
      link: '/services/thekkady'
    },
    {
      id: 'wayanad',
      title: 'Amalapuram',
      description: 'Serene backwaters and traditional village experiences',
      image: contactAmalapuram,
      link: '/services/wayanad'
    },
    {
      id: 'kumarakom',
      title: 'Ramanayuni',
      description: 'Peaceful temple town with spiritual significance',
      image: contactRamanayuni,
      link: '/services/kumarakom'
    },
    {
      id: 'kovalam',
      title: 'Peddapuram',
      description: 'Historic destination with architectural marvels',
      image: contactPeddapuram,
      link: '/services/kovalam'
    },
    {
      id: 'bekal',
      title: 'Korumam Fort',
      description: 'Ancient fort with panoramic river views',
      image: contactKorumamFort,
      link: '/services/bekal'
    },
    {
      id: 'athirappilly',
      title: 'Pithampur',
      description: 'Natural beauty with waterfalls and wildlife',
      image: contactPithampur,
      link: '/services/athirappilly'
    },
    {
      id: 'thattekkad',
      title: 'Kadiyam',
      description: 'Famous nurseries and peaceful countryside',
      image: contactKadiyam,
      link: '/services/thattekkad'
    },
    {
      id: 'kavvayi',
      title: 'Kotipalli River',
      description: 'Sacred river confluence with stunning sunsets',
      image: contactKotipalliRiver,
      link: '/services/kavvayi'
    },
    {
      id: 'vagamon',
      title: 'Gurunandan',
      description: 'Scenic hills and tranquil retreats',
      image: contactGurunandhan,
      link: '/services/vagamon'
    }
  ];

  return (
    <div className="trending-page">
      {/* Hero Section */}
      <section className="trending-hero">
        <div className="trending-hero-content">
          <h1>East Godavari Help Center</h1>
          <p>Discover the most popular destinations in East Godavari that are capturing hearts and creating unforgettable memories.</p>
        </div>
      </section>

      <div className="container">
        {/* Back Button */}
        <div className="back-button-wrapper">
          <Link to="/" className="trending-back-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Places Grid */}
        <div className="trending-places-grid">
          {trendingPlaces.map((place, index) => (
            <Link
              key={index}
              to={place.link}
              className="trending-place-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="card-image-wrapper">
                <img 
                  src={place.image}
                  alt={place.title}
                />
                <div className="card-image-overlay"></div>
                <span className="card-badge">Popular</span>
              </div>
              <div className="trending-place-content">
                
                <h3 className="trending-place-title">{place.title}</h3>
                <p className="trending-place-description">{place.description}</p>
              </div>
              <div className="card-explore-btn">
                <span>Explore</span>
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingPlaces;