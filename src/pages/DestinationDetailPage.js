import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ExperienceDetail.css';
import explorePeddapuramBeach from '../assets/images/explore-peddapuram-beach.jpg';
import exploreKakinadaBeach from '../assets/images/explore-kakinada-beach.jpg';
import exploreCoringaBeach from '../assets/images/explore-coringa-beach.jpg';
import exploreYanamBeach from '../assets/images/explore-yanam-beach.jpg';
import exploreGautamiRiver from '../assets/images/explore-gautami-river.jpg';
import exploreKorukondaFort from '../assets/images/explore-korukonda-fort.jpg';
import exploreRamanayuniTemple from '../assets/images/explore-ramanayuni-temple.jpg';
import explorePeddapuramFort from '../assets/images/explore-peddapuram-fort.jpg';
import exploreRajahmundryBridge from '../assets/images/explore-rajahmundry-bridge.jpg';
import exploreKotipalliTemple from '../assets/images/explore-kotipalli-temple.jpg';
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
import exploreKakindaRamalayam from '../assets/images/explore-kakinda-ramalayam.jpg';
import exploreVinayakaTemple from '../assets/images/explore-vinayaka-temple.jpg';
import exploreKorukondaTemple from '../assets/images/explore-korukonda-temple.jpg';
import explorePithampurMarket from '../assets/images/explore-pithampur-market.jpg';
import exploreKakinadaShopping from '../assets/images/explore-kakinada-shopping.jpg';
import exploreAmalapuramMarket from '../assets/images/explore-amalapuram-market.jpg';
import explorePeddapuramMarket from '../assets/images/explore-peddapuram-market.jpg';
import exploreAnnavaramMart from '../assets/images/explore-annavaram-mart.jpg';
import exploreHopeIsland from '../assets/images/explore-hope-island.jpg';
import explorePallamIsland from '../assets/images/explore-pallam-island.jpg';

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

// Map categoryImages to destination data
const destinationDetails = {
  1: { title: 'Peddapuram Beach', description: 'Golden sands and serene beach experience', fullDescription: ['Peddapuram Beach offers pristine coastline with golden sands and gentle waves. The beach is perfect for relaxation and water activities.'], location: 'Peddapuram, East Godavari', category: 'beaches', image: explorePeddapuramBeach },
  2: { title: 'Kakinada Beach', description: 'Popular beach destination with scenic views', fullDescription: ['Kakinada Beach is known for its beautiful sunrise views and peaceful atmosphere.'], location: 'Kakinada, East Godavari', category: 'beaches', image: exploreKakinadaBeach },
  3: { title: 'Coringa Beach', description: 'Tranquil beach with mangrove forests', fullDescription: ['Coringa Beach is surrounded by lush mangroves and offers a unique coastal experience.'], location: 'Kakinada, East Godavari', category: 'beaches', image: exploreCoringaBeach },
  4: { title: 'Yanam Beach', description: 'Beautiful beach in Yanam', fullDescription: ['Yanam Beach is a hidden gem with calm waters and scenic beauty.'], location: 'Yanam, East Godavari', category: 'beaches', image: exploreYanamBeach },
  5: { title: 'Gautami River', description: 'Sacred river with spiritual significance', fullDescription: ['The Gautami River flows through the region and is considered sacred by locals.'], location: 'Kakinada, East Godavari', category: 'beaches', image: exploreGautamiRiver },
  6: { title: 'Korukonda Fort', description: 'Historic fort with architectural marvels', fullDescription: ['Korukonda Fort is a 17th-century fort offering panoramic views of the surrounding area.'], location: 'Rajahmundry, East Godavari', category: 'heritage', image: exploreKorukondaFort },
  7: { title: 'Ramanayuni Temple', description: 'Ancient temple with historical significance', fullDescription: ['Ramanayuni Temple is dedicated to Lord Rama and showcases beautiful architecture.'], location: 'Kadiyam, East Godavari', category: 'heritage', image: exploreRamanayuniTemple },
  8: { title: 'Peddapuram Fort', description: 'Historic fort in Peddapuram', fullDescription: ['Peddapuram Fort stands as a testament to the region\'s rich history.'], location: 'Peddapuram, East Godavari', category: 'heritage', image: explorePeddapuramFort },
  9: { title: 'Rajahmundry Bridge', description: 'Iconic bridge over Godavari River', fullDescription: ['The Rajahmundry Bridge is an architectural marvel spanning the Godavari River.'], location: 'Rajahmundry, East Godavari', category: 'heritage', image: exploreRajahmundryBridge },
  10: { title: 'Kotipalli Temple', description: 'Sacred temple on the river island', fullDescription: ['Kotipalli Temple is located on a beautiful river island and attracts devotees.'], location: 'Nuzvid, East Godavari', category: 'heritage', image: exploreKotipalliTemple },
  11: { title: 'Kotipalli River', description: 'Scenic river island experience', fullDescription: ['Kotipalli River offers beautiful river island experiences with boating and nature.'], location: 'Nuzvid, East Godavari', category: 'river islands', image: exploreKotipalliRiver },
  12: { title: 'Hope Island', description: 'Picturesque island in the river', fullDescription: ['Hope Island is a serene destination perfect for nature lovers and bird watchers.'], location: 'Rajahmundry, East Godavari', category: 'river islands', image: exploreHopeIsland },
  13: { title: 'Pallam Island', description: 'Tranquil river island', fullDescription: ['Pallam Island offers peaceful surroundings and beautiful river views.'], location: 'Rajahmundry, East Godavari', category: 'river islands', image: explorePallamIsland },
  14: { title: 'Godavari Island', description: 'Island in the mighty Godavari', fullDescription: ['Godavari Island is formed by the river and offers unique experiences.'], location: 'Rajahmundry, East Godavari', category: 'river islands', image: exploreGodavariIsland },
  15: { title: 'Yalamanchili Lanka', description: 'Island destination with scenic beauty', fullDescription: ['Yalamanchili Lanka is known for its natural beauty and peaceful environment.'], location: 'Rajahmundry, East Godavari', category: 'river islands', image: exploreYalamanchiliLanka },
  16: { title: 'Gudisa Hill', description: 'Hill station with panoramic views', fullDescription: ['Gudisa Hill offers breathtaking views of the surrounding landscape.'], location: 'Rajahmundry, East Godavari', category: 'hills', image: exploreGudisaHill },
  17: { title: 'Pithampur Hills', description: 'Scenic hills with lush greenery', fullDescription: ['Pithampur Hills are covered with dense forests and offer trekking opportunities.'], location: 'Amalapuram, East Godavari', category: 'hills', image: explorePithampurHills },
  18: { title: 'Maridimilli Hill', description: 'Beautiful hill destination', fullDescription: ['Maridimilli Hill is known for its natural beauty and peaceful atmosphere.'], location: 'Rajahmundry, East Godavari', category: 'hills', image: exploreMaridimilliHill },
  19: { title: 'Kakinada Hill View', description: 'Hill viewpoint in Kakinada', fullDescription: ['Kakinada Hill View offers panoramic views of the city and surrounding areas.'], location: 'Kakinada, East Godavari', category: 'hills', image: exploreKakinadaHillView },
  20: { title: 'Papi Hills', description: 'Cluster of scenic river islands', fullDescription: ['Papi Hills is a cluster of beautiful river islands on the Godavari River.'], location: 'Rajahmundry, East Godavari', category: 'hills', image: explorePapiHill },
  21: { title: 'Amruthadhara Falls', description: 'Beautiful waterfall in the forest', fullDescription: ['Amruthadhara Waterfalls is a stunning cascade surrounded by lush greenery.'], location: 'Rajahmundry, East Godavari', category: 'waterfalls', image: exploreAmruthandhraWaterfall },
  22: { title: 'Godavari Waterfall', description: 'Waterfall on the Godavari river', fullDescription: ['Godavari Waterfall is a natural wonder along the river.'], location: 'Rajahmundry, East Godavari', category: 'waterfalls', image: exploreGodavariWaterfall },
  23: { title: 'Dharapalli Falls', description: 'Scenic waterfall destination', fullDescription: ['Dharapalli Falls offers a refreshing experience in a natural setting.'], location: 'Kakinada, East Godavari', category: 'waterfalls', image: exploreDharapalliWaterfalls },
  24: { title: 'Polluru Waterfall', description: 'Hidden waterfall in the hills', fullDescription: ['Polluru Waterfall is a hidden gem in the Eastern Ghats.'], location: 'Amalapuram, East Godavari', category: 'waterfalls', image: explorePolluruWaterfall },
  25: { title: 'Rampa Waterfall', description: 'Beautiful cascade in the forest', fullDescription: ['Rampa Waterfall is surrounded by dense forests and offers a peaceful retreat.'], location: 'Rajahmundry, East Godavari', category: 'waterfalls', image: exploreRampaWaterfall },
  26: { title: 'Yanam Tiger Reserve', description: 'Wildlife sanctuary with tigers', fullDescription: ['Yanam Tiger Reserve is home to diverse wildlife including tigers and elephants.'], location: 'Yanam, East Godavari', category: 'wildlife', image: exploreYanamTiger },
  27: { title: 'Coringa Wildlife', description: 'Mangrove wildlife sanctuary', fullDescription: ['Coringa Wildlife Sanctuary is known for its mangrove ecosystem.'], location: 'Kakinada, East Godavari', category: 'wildlife', image: exploreCoringaWildlife },
  28: { title: 'Ramanayuni Wildlife', description: 'Bird sanctuary with diverse species', fullDescription: ['Ramanayuni Wildlife is a haven for bird watchers and nature enthusiasts.'], location: 'Kadiyam, East Godavari', category: 'wildlife', image: exploreRamanayuniWildlife },
  29: { title: 'Atreyapuram Wildlife', description: 'Forest wildlife area', fullDescription: ['Atreyapuram Wildlife offers opportunities to spot various animal species.'], location: 'Rajahmundry, East Godavari', category: 'wildlife', image: exploreAtreyapuramWildlife },
  30: { title: 'Papikonda Wildlife', description: 'Protected wildlife area', fullDescription: ['Papikonda Wildlife is known for its conservation efforts and biodiversity.'], location: 'Rajahmundry, East Godavari', category: 'wildlife', image: explorePapikondaWildlife },
  31: { title: 'Kotipalli Temple', description: 'Ancient temple on the island', fullDescription: ['Kotipalli Temple is a sacred place located on a beautiful river island.'], location: 'Nuzvid, East Godavari', category: 'spirituality', image: exploreKotipalliTemple },
  32: { title: 'Ramanayuni Temple', description: 'Temple dedicated to Lord Rama', fullDescription: ['Ramanayuni Temple attracts devotees with its spiritual significance.'], location: 'Kadiyam, East Godavari', category: 'spirituality', image: exploreRamanayuniTemple },
  33: { title: 'Korukonda Temple', description: 'Historic temple near the fort', fullDescription: ['Korukonda Temple is an ancient shrine with architectural beauty.'], location: 'Rajahmundry, East Godavari', category: 'spirituality', image: exploreKorukondaTemple },
  34: { title: 'Kakinada Ramalayam', description: 'Temple with Ram idol', fullDescription: ['Kakinada Ramalayam is dedicated to Lord Rama and is a place of worship.'], location: 'Kakinada, East Godavari', category: 'spirituality', image: exploreKakindaRamalayam },
  35: { title: 'Vinayaka Temple', description: 'Temple dedicated to Lord Ganesha', fullDescription: ['Vinayaka Temple is a popular shrine dedicated to Lord Ganesha.'], location: 'Rajahmundry, East Godavari', category: 'spirituality', image: exploreVinayakaTemple },
  36: { title: 'Pithampur Market', description: 'Traditional market in the hills', fullDescription: ['Pithampur Market offers local handicrafts and traditional items.'], location: 'Amalapuram, East Godavari', category: 'shopping', image: explorePithampurMarket },
  37: { title: 'Kakinada Shopping', description: 'Shopping destination in Kakinada', fullDescription: ['Kakinada Shopping offers a variety of local and modern shopping options.'], location: 'Kakinada, East Godavari', category: 'shopping', image: exploreKakinadaShopping },
  38: { title: 'Amalapuram Market', description: 'Traditional market area', fullDescription: ['Amalapuram Market is known for its local products and traditional goods.'], location: 'Amalapuram, East Godavari', category: 'shopping', image: exploreAmalapuramMarket },
  39: { title: 'Peddapuram Market', description: 'Local market with variety', fullDescription: ['Peddapuram Market offers fresh produce and local specialties.'], location: 'Peddapuram, East Godavari', category: 'shopping', image: explorePeddapuramMarket },
  40: { title: 'Annavaram Mart', description: 'Shopping destination near temple', fullDescription: ['Annavaram Mart is located near the famous Annavaram temple.'], location: 'Rajahmundry, East Godavari', category: 'shopping', image: exploreAnnavaramMart }
};

const DestinationDetailPage = () => {
  const { id } = useParams();
  const dest = destinationDetails[parseInt(id)];

  if (!dest) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Destination not found</h2>
        <Link to="/destinations">Back to Destinations</Link>
      </div>
    );
  }

  const coords = locationCoords[dest.location] || { lat: 17.0, lng: 81.8 };

  return (
    <div className="page-container" style={{ paddingTop: '0', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>
        <img src={dest.image} alt={dest.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)' }}></div>

        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 5 }}>
          <p style={{ fontSize: '14px', marginBottom: '1rem', opacity: 0.9 }}>Home - Destinations - {dest.title}</p>
          <h1 style={{ fontSize: '4rem', fontFamily: 'Georgia, serif', fontWeight: '400', margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{dest.title}</h1>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 5 }}>
          <div style={{ width: '2px', height: '40px', background: 'white' }}></div>
          <span style={{ fontSize: '16px' }}>{dest.category}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Left: Wikipedia-style content + About Location */}
          <div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', lineHeight: '1.3', marginBottom: '2rem', color: '#333' }}>
              {dest.title}
            </h2>
            {dest.fullDescription.map((paragraph, index) => (
              <p key={index} style={{ fontSize: '16px', lineHeight: '1.8', color: '#4F5051', marginBottom: '1.5rem' }}>{paragraph}</p>
            ))}
            
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginTop: '2rem', marginBottom: '1rem', color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9D00" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              About the Location
            </h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
              {dest.location} is a beautiful destination in East Godavari, known for its rich cultural heritage and natural beauty. 
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
            <a href={`https://www.google.com/maps/dir/current+location/${coords.lat},${coords.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' }}>
              <iframe 
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${coords.lat},${coords.lng}&center=${coords.lat},${coords.lng}&zoom=14`} 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title={`Map of ${dest.title}`} 
              />
            </a>
          </div>
        </div>

        {/* How to Reach Section */}
        <div style={{ marginBottom: '4rem', paddingTop: '1rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '2rem', color: '#333', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9D00" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            How to Reach
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {/* Air */}
            <div style={{ background: '#f0f8ff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e0f0fe', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>✈️</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>By Air</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>Nearest airport: Rajahmundry Airport (RJY) - well connected to major cities.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={`https://www.google.com/maps/dir/current+location/${coords.lat},${coords.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.makemytrip.com/flights" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>

            {/* Bus */}
            <div style={{ background: '#f0faf0', borderRadius: '16px', padding: '1.5rem', border: '1px solid #d0ead0', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🚌</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>By Bus</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>Regular APSRTC/TSRTC buses from major cities. Private buses also available.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={`https://www.google.com/maps/dir/current+location/${coords.lat},${coords.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.apsrtc.ap.gov.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>

            {/* Train */}
            <div style={{ background: '#fff8f0', borderRadius: '16px', padding: '1.5rem', border: '1px solid #fde8d0', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🚂</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>By Train</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>Well-connected via Rajahmundry & Kakinada railway stations. Express & superfast trains.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={`https://www.google.com/maps/dir/current+location/${coords.lat},${coords.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>

            {/* Local Transport */}
            <div style={{ background: '#f5f0ff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e0d0fe', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🚕</span>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', margin: 0, color: '#333' }}>Local Transport</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>Auto-rickshaws, taxis, and local buses available within town for easy commute.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a href={`https://www.google.com/maps/dir/current+location/${coords.lat},${coords.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#1a6b7a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Map
                </a>
                <a href="https://www.olacabs.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.4rem 0.8rem', background: '#FF9D00', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '12px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Photo Gallery */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '0.5rem', color: '#333', textAlign: 'center' }}>📷 Photo Gallery</h2>
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '2rem' }}>Explore the beauty of {dest.title} through our lens</p>
          
          {(() => {
            const galleryImages = [
              'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
              'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
              'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=800',
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
              'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
              'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
            ];
            
            return (
              <div>
                <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', paddingBottom: '1rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="photo-gallery-scroll" id={`gallery-scroll-${dest.title?.replace(/\s/g, '-')}`}>
                  {galleryImages.map((imgUrl, index) => (
                    <div key={index} style={{ flex: '0 0 auto', width: '320px', height: '240px', borderRadius: '12px', overflow: 'hidden', scrollSnapAlign: 'start', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', cursor: 'pointer', position: 'relative' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                      <img src={imgUrl} alt={`${dest.title} ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', color: 'white', fontSize: '12px', textAlign: 'right', paddingRight: '1rem' }}>{index + 1}/{galleryImages.length}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  {galleryImages.map((_, index) => (
                    <div key={index} style={{ width: '10px', height: '10px', borderRadius: '50%', background: index === 0 ? '#FF9D00' : '#ddd', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => { const scroll = document.getElementById(`gallery-scroll-${dest.title?.replace(/\s/g, '-')}`); if (scroll) { scroll.scrollTo({ left: index * 336, behavior: 'smooth' }); } }} />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Video Gallery */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '0.5rem', color: '#333', textAlign: 'center' }}>🎥 Video Gallery</h2>
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '2rem' }}>Watch visual stories of {dest.title}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <iframe src="https://www.youtube.com/embed/X0Lg9E0Z0kA" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allowFullScreen title="Travel Video 1" />
            </div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <iframe src="https://www.youtube.com/embed/6AbC6Rwh-Fk" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allowFullScreen title="Travel Video 2" />
            </div>
          </div>
        </div>

        {/* Nearby Destinations */}
        {(() => {
          const nearbyPlaces = Object.entries(destinationDetails)
            .filter(([key, value]) => value.category === dest.category && value.title !== dest.title)
            .slice(0, 4)
            .map(([key, value]) => ({ id: parseInt(key), ...value }));
          
          return nearbyPlaces.length > 0 ? (
            <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontWeight: '400', marginBottom: '0.5rem', color: '#333', textAlign: 'center' }}>📍 Nearby Destinations</h2>
              <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '2rem' }}>Explore more {dest.category} destinations nearby</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                {nearbyPlaces.map((place) => (
                  <Link key={place.id} to={`/destination-page/${place.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '280px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                      onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <img src={place.image} alt={place.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)', color: 'white' }}>
                        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', margin: 0 }}>{place.title}</h3>
                        <p style={{ fontSize: '0.8rem', margin: '0.3rem 0 0', opacity: 0.9 }}>{place.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null;
        })()}
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '50px', height: '50px', borderRadius: '50%', background: 'white', border: '2px solid #FF9D00', color: '#FF9D00', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', zIndex: 100 }}>↑</button>
    </div>
  );
};

export default DestinationDetailPage;