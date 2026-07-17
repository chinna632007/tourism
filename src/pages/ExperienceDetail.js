import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { experienceCategories } from '../data/content';
import './ExperienceDetail.css';

// Location coordinates for map
const locationCoords = {
  'Rajahmundry, East Godavari': { lat: 17.0005, lng: 81.8040 },
  'Kakinada, East Godavari': { lat: 16.9333, lng: 82.2167 },
  'Amalapuram, East Godavari': { lat: 16.5333, lng: 81.8167 },
  'Peddapuram, East Godavari': { lat: 17.0800, lng: 82.3000 },
  'Yanam, East Godavari': { lat: 16.7333, lng: 82.2167 },
  'Korumam, East Godavari': { lat: 16.9333, lng: 82.2167 },
  'Kadiyam, East Godavari': { lat: 16.9333, lng: 82.2167 }
};

const ExperienceDetail = () => {
  const { category, experienceId } = useParams();
  const categoryData = experienceCategories[category];
  const currentIndex = parseInt(experienceId);
  const experience = categoryData?.items[currentIndex];

  if (!categoryData || !experience) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Experience not found</h2>
        <Link to="/experiences">Back to Experiences</Link>
      </div>
    );
  }

  const experienceDetails = {
    'artforms-0': {
      title: 'Kuchipudi Dance',
      fullDescription: [
        'Kuchipudi, one of India\'s eight classical dance forms, originated in the village of Kuchipudi in Krishna district. This ancient art form beautifully blends pure dance (nritta), expressive dance (nritya), and dramatic dance (natya).',
        'The dance is characterized by fast rhythms, sculptural poses, and expressive gestures. Performers wear traditional costumes with intricate jewelry and use elaborate makeup to enhance their expressions. The art form requires years of dedicated training to master the complex footwork and hand gestures.'
      ],
      bestTime: 'October to March',
      duration: '2-3 hours',
      location: 'Rajahmundry, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1594751566205-61a0a3b2c6d4?w=800',
        'https://images.unsplash.com/photo-1518495978162-3e7a0b20f52b?w=800',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
      ]
    },
    'artforms-1': {
      title: 'Folk Dance Traditions',
      fullDescription: [
        'East Godavari is home to diverse folk dance traditions that reflect the region\'s rich cultural tapestry. These dances are performed during festivals, harvest seasons, and community celebrations.',
        'Each folk dance tells a unique story - from the energetic Jatara dance to the graceful Perini Shivatandavam. The performances feature traditional costumes, rhythmic beats, and synchronized movements that captivate audiences.'
      ],
      bestTime: 'November to February',
      duration: '1-2 hours',
      location: 'Kakinada, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1578922746465-d99e9f4aa655?w=800',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800'
      ]
    },
    'artforms-2': {
      title: 'Classical Music',
      fullDescription: [
        'Experience the soul-stirring melodies of Carnatic classical music, a tradition that has flourished in East Godavari for centuries. The region has produced legendary musicians who have contributed to India\'s musical heritage.',
        'From intricate ragas to devotional compositions, the musical performances showcase the depth and diversity of South Indian classical tradition. Many venues offer intimate acoustic settings for an immersive experience.'
      ],
      bestTime: 'December to May',
      duration: '2-3 hours',
      location: 'Amalapuram, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        'https://images.unsplash.com/photo-1519046904884-53103b34b689?w=800',
        'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=800'
      ]
    },
    'artforms-3': {
      title: 'Theatre Arts',
      fullDescription: [
        'Theatre arts in East Godavari blend traditional storytelling with contemporary themes. Street plays and open-air performances bring communities together to celebrate art and culture.',
        'These performances often address social issues, folklore, and historical events, making them both entertaining and thought-provoking. The vibrant costumes and dramatic expressions create an unforgettable theatrical experience.'
      ],
      bestTime: 'All year round',
      duration: '1.5-2 hours',
      location: 'Peddapuram, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800',
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
        'https://images.unsplash.com/photo-1614531341774-39b7238e3d68?w=800'
      ]
    },
    'artforms-4': {
      title: 'Puppet Shows',
      fullDescription: [
        'Puppet shows in East Godavari are a captivating art form that uses beautifully crafted puppets to narrate stories from epics like Ramayana and Mahabharata. The artisans create intricate puppets from wood and cloth.',
        'The performances are accompanied by traditional music and are often interactive, engaging audiences of all ages. This ancient storytelling medium preserves cultural traditions and entertains with its unique charm.'
      ],
      bestTime: 'October to March',
      duration: '1-1.5 hours',
      location: 'Yanam, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1549366021-9f761d450616?w=800',
        'https://images.unsplash.com/photo-1575550959106-43697dc5c2f3?w=800',
        'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=800'
      ]
    },
    'artforms-5': {
      title: 'Traditional Crafts',
      fullDescription: [
        'East Godavari\'s traditional crafts reflect the artistic skills passed down through generations. From intricate wood carvings to delicate handloom textiles, each craft tells a story of cultural heritage.',
        'Artisan workshops offer hands-on experiences where visitors can learn traditional techniques and create their own souvenirs. The crafts make for perfect mementos of your cultural journey.'
      ],
      bestTime: 'All year round',
      duration: '2-4 hours',
      location: 'Korumam, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1578655544558-ba6fbfd9b3d9?w=800',
        'https://images.unsplash.com/photo-1520013415900-f2453a6e6b88?w=800',
        'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800'
      ]
    },
    'cuisine-0': {
      title: 'Seafood Delicacies',
      fullDescription: [
        'East Godavari\'s coastal location ensures the freshest seafood, prepared using traditional recipes passed down through generations. From spicy fish curry to delicate prawn fry, each dish is a flavor explosion.',
        'The cuisine combines local spices, coconut, and traditional cooking methods to create dishes that are both authentic and unforgettable. Many restaurants offer beachside dining for the complete coastal experience.'
      ],
      bestTime: 'All year round',
      duration: '1-2 hours',
      location: 'Peddapuram, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800',
        'https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=800',
        'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800'
      ]
    },
    'cuisine-1': {
      title: 'Traditional Rice Dishes',
      fullDescription: [
        'Rice is the staple of East Godavari cuisine, and the region takes pride in its variety of rice dishes. From aromatic biryanis to flavorful pulaos, each dish is prepared with locally grown rice.',
        'The secret lies in the perfect blend of spices, slow cooking techniques, and the quality of rice itself. These dishes are often accompanied by traditional pickles and papadams for a complete meal.'
      ],
      bestTime: 'All year round',
      duration: '1 hour',
      location: 'Rajahmundry, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1517384087698-da6db378eb1a?w=800',
        'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800'
      ]
    },
    'cuisine-2': {
      title: 'Local Snacks',
      fullDescription: [
        'East Godavari\'s street food culture offers a delightful array of snacks that are both tasty and affordable. From crispy vada to spicy mirchi bajji, each snack is a burst of local flavors.',
        'These savory treats are perfect accompaniments to evening tea and are available at local markets and street corners. The recipes vary by region, offering unique taste experiences throughout the district.'
      ],
      bestTime: 'Evening hours',
      duration: '30 minutes',
      location: 'Kakinada, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800'
      ]
    },
    'cuisine-3': {
      title: 'Traditional Sweets',
      fullDescription: [
        'The sweet delicacies of East Godavari are renowned for their rich flavors and traditional preparation methods. From jaggery-based sweets to coconut delights, each dessert is a celebration of local ingredients.',
        'These sweets are an integral part of festivals and celebrations, often prepared fresh in traditional sweet shops. The recipes have been preserved and passed down through generations of sweet makers.'
      ],
      bestTime: 'All year round',
      duration: '30 minutes',
      location: 'Amalapuram, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1558961366-fa8fdf85db65?w=800',
        'https://images.unsplash.com/photo-1587736836465-1f8b3a5e2e2a?w=800',
        'https://images.unsplash.com/photo-1565299624946-b9871cb9d620?w=800'
      ]
    },
    'cuisine-4': {
      title: 'Spice Blends',
      fullDescription: [
        'East Godavari\'s spice markets offer an aromatic journey through traditional masalas and blends. The region\'s climate is perfect for growing a variety of spices that form the backbone of local cuisine.',
        'From fiery red chilies to aromatic cardamom, each spice blend is carefully crafted to enhance the flavors of traditional dishes. Visitors can tour spice gardens and learn about the cultivation process.'
      ],
      bestTime: 'October to March',
      duration: '1-2 hours',
      location: 'Kadiyam, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1596040037271-6049900005eb?w=800',
        'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800',
        'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=800'
      ]
    },
    'cuisine-5': {
      title: 'Coconut Cuisine',
      fullDescription: [
        'Coconut is an integral part of East Godavari\'s culinary tradition, used in everything from curries to sweets. The region\'s abundant coconut groves ensure fresh produce for traditional cooking.',
        'Dishes range from coconut chutney and podi to elaborate curries where coconut milk forms the base. The versatility of coconut in local cuisine is truly remarkable and offers a unique gastronomic experience.'
      ],
      bestTime: 'All year round',
      duration: '1-2 hours',
      location: 'Yanam, East Godavari',
      gallery: [
        'https://images.unsplash.com/photo-1565299624946-b9871cb9d620?w=800',
        'https://images.unsplash.com/photo-1558961366-fa8fdf85db65?w=800',
        'https://images.unsplash.com/photo-1587736836465-1f8b3a5e2e2a?w=800'
      ]
    }
  };

  const details = experienceDetails[`${category}-${experienceId}`] || {
    title: experience.title,
    fullDescription: [experience.description],
    bestTime: 'All year round',
    duration: '1-2 hours',
    location: experience.location,
    gallery: []
  };

  const coords = locationCoords[details.location] || { lat: 17.0, lng: 81.8 };

  // Get sibling experiences (other items in same category)
  const siblingExperiences = categoryData.items.filter((_, idx) => idx !== currentIndex);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section - Full screen */}
      <div className="destination-detail-hero">
        <img src={experience.image} alt={details.title} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)' }}></div>

        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 5 }}>
          <p style={{ fontSize: '14px', marginBottom: '1rem', opacity: 0.9 }}>Home - Experiences - {categoryData.title} - {details.title}</p>
          <h1 style={{ fontSize: '4rem', fontFamily: 'Georgia, serif', fontWeight: '400', margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{details.title}</h1>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 5 }}>
          <div style={{ width: '2px', height: '40px', background: 'white' }}></div>
          <span style={{ fontSize: '16px' }}>{categoryData.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Left: Wikipedia-style content + About Location */}
          <div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', lineHeight: '1.3', marginBottom: '2rem', color: '#333' }}>
              {details.title}
            </h2>
            {details.fullDescription.map((paragraph, index) => (
              <p key={index} style={{ fontSize: '16px', lineHeight: '1.8', color: '#4F5051', marginBottom: '1.5rem' }}>{paragraph}</p>
            ))}
            
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginTop: '2rem', marginBottom: '1rem', color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9D00" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              About the Location
            </h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
              {details.location} is a beautiful destination in East Godavari, known for its rich cultural heritage and natural beauty. 
              The area offers a perfect blend of tradition and modernity, making it a must-visit for cultural enthusiasts.
            </p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
              The region is blessed with lush green landscapes, serene water bodies, and a pleasant climate throughout the year. 
              Ancient temples, traditional festivals, and local art forms add to the cultural richness of this area.
            </p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
              Local artisans and craftsmen have preserved age-old traditions, creating exquisite handicrafts and traditional items. 
              The cuisine is equally captivating with its unique blend of spices and traditional cooking methods passed down through generations.
            </p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '0', lineHeight: '1.6' }}>
              Visitors can experience the authentic local culture, traditional arts, and warm hospitality that East Godavari is famous for. 
              The scenic landscapes and historical significance make every moment memorable.
            </p>
          </div>

          {/* Right: Live Map - Clickable */}
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', marginBottom: '1rem', color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9D00" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Location Map
            </h3>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}&travelmode=driving`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' }}>
              <iframe 
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${coords.lat},${coords.lng}&center=${coords.lat},${coords.lng}&zoom=14`} 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title={`Map of ${details.title}`} 
              />
            </a>
          </div>
        </div>

        {/* More Experiences Like This */}
        {siblingExperiences.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '0.5rem', color: '#333' }}>More Experiences Like This</h2>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '2rem' }}>Explore other {categoryData.title.toLowerCase()} experiences</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {siblingExperiences.map((item) => {
                const actualIndex = categoryData.items.findIndex(i => i === item);
                return (
                  <Link
                    key={actualIndex}
                    to={`/experience/${category}/${actualIndex}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                  <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                    <div style={{ padding: '1rem', background: 'white' }}>
                      <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>{item.title}</h4>
                      <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem', color: '#666' }}>{item.description}</p>
                    </div>
                  </div>
                </Link>
              );
              })}
            </div>
          </div>
        )}
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '50px', height: '50px', borderRadius: '50%', background: 'white', border: '2px solid #FF9D00', color: '#FF9D00', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', zIndex: 100 }}>↑</button>
    </div>
  );
};

export default ExperienceDetail;