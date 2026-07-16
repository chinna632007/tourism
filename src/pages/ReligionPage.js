import { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import './ReligionPage.css';
import Slider from 'react-slick';
import { portfolios } from '../data/content';

// Navigation items for the gallery grid section
const navigationItems = [
  {
    id: 'row1',
    items: [
      { heading: 'Ayurveda', image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/ayurveda-1694598240_fe440a50c0f7683f980c.jpg', alt: 'Ayurveda', link: '#' },
      { heading: 'Events', image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/events-1723010610_81f769d481fd9baa79ac.webp', alt: 'Events', link: '/event/' },
      { heading: 'Artforms', image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/artforms-1722941328_979aba0cca7b5b49c626.webp', alt: 'Artforms', link: '/artforms/' }
    ]
  },
  {
    id: 'row2',
    items: [
      { heading: 'Photo Gallery', image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/photo-gallery-1722942212_09b95872a144f6bc331f.webp', alt: 'Photo Gallery', link: '/photo-gallery/' },
      { heading: 'Cuisine', image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/vertical/cuisine-1722941699_b85794f02a319683eb69.webp', alt: 'Cuisine', link: '/east-godavari-food/' },
      { heading: 'E-brochure', image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/e-brochure-1694599797_526286c75b4c39a4fe13.jpg', alt: 'E-brochure', link: '/ebrochures/' }
    ]
  }
];

// Main spiritual journey items
const spiritualJourneyItems = [
  {
    id: 'sabarimala',
    heading: 'Sabarimala',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/sabarimala-1733907419_763f7221b767262801c3.webp',
    alt: 'Sabarimala',
    description: 'The Sabarimala Sree Dharma Sastha Temple is dedicated to Lord Ayyappa. Situated atop a hillock, the temple is surrounded by mountains and dense forests. It is one of the largest annual pilgrimage sites in the world.',
    link: '#'
  },
  {
    id: 'christianity-in-east-godavari',
    heading: 'Christianity in East Godavari',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/christianity-in-east-godavari-1720768586_853cfd2e33356bd8070c.webp',
    alt: 'Christianity',
    description: 'Christianity is the third-most practised religion in East Godavari, accounting for 18% of the population according to the Indian census. Although a minority, the Christian population of East Godavari is proportionally much larger than that of India as a whole.',
    link: '#'
  },
  {
    id: 'judaism-in-east-godavari',
    heading: 'Judaism in East Godavari',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/judaism-in-east-godavari-1720768601_35df04f5d6c3cfffb3d5.webp',
    alt: 'Judaism',
    description: 'The history of the first Jewish diaspora in East Godavari or East Godavari\'s exposure to Judaism or, to put it even more differently, the story of the granting of asylum to the Jews in East Godavari is a long and interesting one.',
    link: '#'
  },
  {
    id: 'temples-of-east-godavari',
    heading: 'Temples of East Godavari',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/temples-of-east-godavari-1720718357_d2cca15e105d18523a72.webp',
    alt: 'Temples',
    description: 'Here we have curated a set of architecturally unique and iconic temples in East Godavari. Discover 100 of the state\'s temples that are famed for their extraordinary construction and architectural brilliance',
    link: '#'
  },
  {
    id: 'padayani-festivals',
    heading: 'Padayani Festivals',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/padayani-festivals-1720718618_b4fab02fd35f8a6766da.webp',
    alt: 'Padayani',
    description: 'An art form which is a unique blend of life and myths, Padayani provides a multifaceted view of the cultural richness and unity of the people.',
    link: '#'
  },
  {
    id: 'theyyam-calendar',
    heading: 'Theyyam Calendar',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/theyyam-calendar-1720718632_4bd373db27894a0a8868.webp',
    alt: 'Theyyam',
    description: 'A traditional art form which is more than eight centuries old, Theyyam is one of the most spectacular of the ritual arts forms of Northern East Godavari.',
    link: '#'
  }
];

// Slider settings
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};

const ReligionPage = () => {
  // Initialize intersection observer for animations
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const makeVisible = () => {
      fadeElements.forEach((el) => el.classList.add('visible'));
    };

    if (!('IntersectionObserver' in window)) {
      makeVisible();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    fadeElements.forEach((el) => observer.observe(el));

    const fallbackTimer = setTimeout(makeVisible, 500);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  const createReligionCard = useCallback((item, index) => (
    <div 
      key={item.id} 
      className="religion-card fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="religion-card-link">
        <img src={item.image} alt={item.alt} loading="lazy" />
        <div className="religion-card-content">
          <h4>{item.heading}</h4>
          <p>{item.description}</p>
        </div>
      </a>
    </div>
  ), []);

  const createNavigationCard = useCallback((item, index, rowId) => (
    <div key={`nav-${rowId}-${index}`} className="navigation-card fade-in">
      <a href={item.link} className="navigation-card-link">
        <img src={item.image} alt={item.alt} loading="lazy" />
        <div className="navigation-card-content">
          <h5>{item.heading}</h5>
          <span className="explore-text">Explore</span>
        </div>
      </a>
    </div>
  ), []);

  return (
    <div className="religion-page">
      <Helmet>
        <title>East Godavari | Spiritual Journey | Religion</title>
        <meta name="description" content="East Godavari, often hailed as Land of Riches, is a vibrant mosaic of diverse religions and cultures. This page offers a glimpse into the rich spiritual heritage of this enchanting state." />
        <meta name="keywords" content="christianity, padayani, islam, judaism, temples, theyyam calendar, east-godavari, religious heritage" />
        <meta property="og:title" content="East Godavari | Spiritual Journey | Religion" />
        <meta property="og:description" content="East Godavari, often hailed as Land of Riches, is a vibrant mosaic of diverse religions and cultures." />
        <meta property="og:image" content="https://www.east-godavaritourism.org/ktadmin/img/pages/share/east-godavaris-spiritual-journey-1747234812_083514bf5483a4c8735d.webp" />
      </Helmet>

      {/* Hero Section */}
      <section className="religion-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in">East Godavari's Spiritual Journey</h1>
            <p className="fade-in">Discover the grandeur of East Godavari's ancient temples, delve into the mesmerizing world of Padayani, explore the legacy of Christianity and Judaism, and immerse yourself in the vibrant rituals of Theyyam.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="religion-description">
        <div className="container">
          <p className="fade-in">East Godavari, often hailed as "Land of Riches," is a vibrant mosaic of diverse religions and cultures. This page offers a glimpse into the rich spiritual heritage of this enchanting state. Discover the grandeur of East Godavari's ancient temples, delve into the mesmerizing world of Padayani, explore the legacy of Christianity and Judaism, and immerse yourself in the vibrant rituals of Theyyam.</p>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="religion-highlights" style={{ padding: '4rem 0', background: 'var(--kt-colors-antiFlashWhite)' }}>
        <div className="container">
          <h2 className="section-title fade-in">Why Explore East Godavari's Spiritual Heritage?</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div className="highlight-card fade-in" style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Ancient Temples</h4>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.6' }}>Explore architecturally stunning temples dating back centuries, each with unique stories and spiritual significance.</p>
            </div>
            <div className="highlight-card fade-in" style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Cultural Festivals</h4>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.6' }}>Witness vibrant festivals like Theyyam and Padayani that showcase the living traditions of East Godavari.</p>
            </div>
            <div className="highlight-card fade-in" style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Interfaith Harmony</h4>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.6' }}>Experience the unique coexistence of temples, churches, mosques, and synagogues in perfect harmony.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
     

      {/* Spiritual Journey Items Grid */}
      <section className="spiritual-journey-section" id="east-godavaris-spiritual-journey">
        <div className="container">
          <h2 className="section-title fade-in">Spiritual Heritage</h2>
          <div className="spiritual-journey-grid">
            {spiritualJourneyItems.map((item, index) => createReligionCard(item, index))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="religion-info" style={{ padding: '4rem 0', background: 'var(--kt-colors-white)' }}>
        <div className="container">
          <h2 className="section-title fade-in">Plan Your Spiritual Journey</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '3rem' }}>
            <div className="fade-in" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Best Time to Visit</h3>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.8' }}>The ideal time to explore East Godavari's religious sites is from October to March, when the weather is pleasant and many festivals take place. The cooler months provide comfortable conditions for temple visits and outdoor cultural experiences.</p>
            </div>
            <div className="fade-in" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Getting Around</h3>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.8' }}>East Godavari has excellent connectivity with major cities. Rajahmundry Airport and railway station provide easy access to all major religious sites. Local transportation including buses and taxis are readily available for temple visits.</p>
            </div>
            <div className="fade-in">
              <h3 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Cultural Etiquette</h3>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.8' }}>When visiting temples and religious sites, modest dress is recommended. Remove footwear before entering temple premises. Photography may be restricted in certain areas. Always respect local customs and traditions during festivals and ceremonies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
          </div>
  );
};

export default ReligionPage;