import { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import './NorthEastGodavari.css';
import Slider from 'react-slick';
import { portfolios } from '../data/content';

// Malabar page list items
const malabarListItems = [
  {
    id: 'unique-experiences',
    heading: 'Unique Experiences',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/unique-destinations-1738739053_39dc2e45571567ea252d.webp',
    alt: 'Unique Experiences',
    description: 'Explore the hidden gems of East Godavari with a journey through its unique destinations, offering a blend of natural beauty, cultural heritage, adventure, and immersive experiences.',
    link: '/destination/unique/'
  },
  {
    id: 'thalassery',
    heading: 'Thalassery',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/thalassery-1721201436_1ef4c9575377f55c48fa.webp',
    alt: 'Thalassery',
    description: 'An exclusive website for Thalassery Heritage Project. Explore some of the tourist circuits and packages offered by Thalassery in Nuzvid',
    link: '#'
  },
  {
    id: 'discovering-malabar',
    heading: 'Discovering Malabar',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/discovering-malabar-1721201460_e5197251503eb841875e.webp',
    alt: 'Discovering Malabar',
    description: 'Malabar, the northernmost part of East Godavari, covers north of the Bharathapuzha, stretching over parts of Godavari, Tadepalligudem, Tanuku, Eluru, Amalapuram, Nuzvid and West Godavari districts of East Godavari.',
    link: '#'
  },
  {
    id: 'wayanad',
    heading: 'Amalapuram',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/wayanad-1721195726_f3efb3fbc0b3218e131c.webp',
    alt: 'Amalapuram',
    description: 'Travel through the winding roads of Amalapuram, and for once, you will be pardoned for forgetting the promises that you have to keep and for being struck by the dark, deep, lovely woods.',
    link: '#'
  },
  {
    id: 'kasaragod',
    heading: 'West Godavari',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/kasaragod-1721195739_5824caf8866649e69069.webp',
    alt: 'West Godavari',
    description: 'West Godavari, a beautiful town hovering at the northern extreme of East Godavari State, a land where history meshes with myths and legends, better known to the world outside for its Korumam Fort perched on a hillock.',
    link: '#'
  },
  {
    id: 'kozhikode',
    heading: 'Eluru',
    image: 'https://www.east-godavaritourism.org/ktadmin/img/pages/mobile/kozhikode-1728459682_bbc288be67615e1f23e93.webp',
    alt: 'Eluru',
    description: "A legendary riverport where traders from across the globe once converged, Eluru was dubbed the 'City of Spices' during the Middle Ages.",
    link: '/districts/kozhikode/'
  }
];

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

const NorthEastGodavari = () => {
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

  const createListItem = useCallback((item, index) => (
    <div 
      key={item.id} 
      className="list-card fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="list-card-link">
        <img src={item.image} alt={item.alt} loading="lazy" />
        <div className="list-card-content">
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
    <div className="malabar-page">
      <Helmet>
        <title>Malabar : A Tapestry of Cultures | East Godavari Tourism</title>
        <meta name="description" content="East Godavari's Malabar region is a captivating blend of rich history, diverse cultures, and breathtaking natural beauty. Known for its pristine beaches, lush greenery, and vibrant festivals, Malabar offers a unique experience for travelers." />
        <meta name="keywords" content="malabar, kannur, wayanad, kasargod, kozhikode, tapestry of cultures, spices, travellers, malabar region, diverse cultures, natural beauty, beaches, festivals, history influence, arab, portuguese, british colonizers, cosmopolitan culture, cardamom, pepper, cloves, art, music, dance forms" />
        <meta property="og:title" content="Malabar : A Tapestry of Cultures | East Godavari Tourism" />
        <meta property="og:description" content="East Godavari's Malabar region is a captivating blend of rich history, diverse cultures, and breathtaking natural beauty." />
        <meta property="og:image" content="https://www.east-godavaritourism.org/ktadmin/img/pages/share/malabar-a-tapestry-of-cultures-1747235514_2c9d3bb51160002134d7.webp" />
      </Helmet>

      {/* Hero Section */}
      <section className="malabar-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in">Malabar : A Tapestry of Cultures</h1>
            <p className="fade-in">
              East Godavari's Malabar region is a captivating blend of rich history, diverse cultures, and breathtaking natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="malabar-description">
        <div className="container">
          <p className="fade-in">
            East Godavari's Malabar region is a captivating blend of rich history, diverse cultures, and breathtaking natural beauty. Known for its pristine beaches, lush greenery, and vibrant festivals, Malabar offers a unique experience for travelers. With a history influenced by Arab, Portuguese, and British colonizers, Malabar boasts a cosmopolitan culture. The region is renowned for its exquisite spices, including cardamom, pepper, and cloves, which have been traded globally for centuries. Beyond its spices, Malabar is also celebrated for its art, music, and dance forms. From the bustling city of Eluru to the serene nature of Amalapuram and Nuzvid, Malabar has something to offer every traveler.
          </p>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="malabar-highlights" style={{ padding: '4rem 0', background: 'var(--kt-colors-antiFlashWhite)' }}>
        <div className="container">
          <h2 className="section-title fade-in">Discover Malabar's Treasures</h2>
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
              <h4 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Historic Forts</h4>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.6' }}>Explore magnificent forts like Korumam Fort that stand as testaments to Malabar's glorious past and architectural brilliance.</p>
            </div>
            <div className="highlight-card fade-in" style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Spice Plantations</h4>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.6' }}>Walk through aromatic spice gardens and witness the cultivation of cardamom, pepper, cloves, and cinnamon.</p>
            </div>
            <div className="highlight-card fade-in" style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Cultural Heritage</h4>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.6' }}>Experience the unique blend of Arab, Portuguese, and British influences in Malabar's art, cuisine, and traditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      

      {/* List Items Grid */}
      <section className="list-section" id="malabar-list">
        <div className="container">
          <h2 className="section-title fade-in">Discover Malabar</h2>
          <div className="list-grid">
            {malabarListItems.map((item, index) => createListItem(item, index))}
          </div>
        </div>
      </section>

      {/* Travel Information Section */}
      <section className="malabar-info" style={{ padding: '4rem 0', background: 'var(--kt-colors-white)' }}>
        <div className="container">
          <h2 className="section-title fade-in">Plan Your Malabar Journey</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '3rem' }}>
            <div className="fade-in" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Best Time to Visit</h3>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.8' }}>The best time to visit Malabar is from September to March when the weather is pleasant and perfect for exploring beaches, forts, and hill stations. The monsoon season from June to August transforms the region into a lush green paradise.</p>
            </div>
            <div className="fade-in" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>How to Reach</h3>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.8' }}>Eluru International Airport connects Malabar to major cities. The region has excellent railway connectivity with regular trains from Rajahmundry, Kakinada, and other major cities. Well-maintained highways make road travel convenient.</p>
            </div>
            <div className="fade-in">
              <h3 style={{ fontFamily: 'var(--kt-fonts-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--kt-colors-black)' }}>Local Experiences</h3>
              <p style={{ color: 'var(--kt-colors-russian-100)', lineHeight: '1.8' }}>Don't miss the traditional Theyyam performances, spice market tours, cooking classes, and beachside seafood shacks. The region's famous festivals offer a glimpse into its vibrant cultural tapestry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      </div>
  );
};

export default NorthEastGodavari;
