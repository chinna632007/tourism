import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const TourGuide = () => {
  const { destinationId } = useParams();

  const allGuides = {
    munnar: [
      { id: 1, name: 'Rajesh Kumar', phone: '+91 98765 43201', experience: '8 years', rating: 5, specialty: 'Heritage & Temple Tours' },
      { id: 2, name: 'Suresh Babu', phone: '+91 98765 43202', experience: '5 years', rating: 3, specialty: 'River & Beach Tours' },
      { id: 3, name: 'Venkat Rao', phone: '+91 98765 43203', experience: '10 years', rating: 5, specialty: 'Wildlife & Nature' },
      { id: 4, name: 'Ravi Teja', phone: '+91 98765 43204', experience: '3 years', rating: 3, specialty: 'City Tours' },
      { id: 5, name: 'Krishna Murthy', phone: '+91 98765 43205', experience: '12 years', rating: 5, specialty: 'Historical Places' },
      { id: 6, name: 'Srinivas Rao', phone: '+91 98765 43206', experience: '6 years', rating: 3, specialty: 'Cultural Tours' },
      { id: 7, name: 'Madhu Babu', phone: '+91 98765 43207', experience: '9 years', rating: 5, specialty: 'Adventure Tours' },
      { id: 8, name: 'Phani Kumar', phone: '+91 98765 43208', experience: '4 years', rating: 3, specialty: 'Food & Cuisine Tours' },
      { id: 9, name: 'Nagendra', phone: '+91 98765 43209', experience: '7 years', rating: 5, specialty: 'Photography Tours' },
      { id: 10, name: 'Siva Prasad', phone: '+91 98765 43210', experience: '2 years', rating: 3, specialty: 'Budget Tours' }
    ],
    thekkady: [
      { id: 1, name: 'K. Srinivas', phone: '+91 98765 43211', experience: '9 years', rating: 5, specialty: 'Beach Tours' },
      { id: 2, name: 'R. Nageswarao', phone: '+91 98765 43212', experience: '4 years', rating: 3, specialty: 'Port Tours' },
      { id: 3, name: 'P. Ramesh', phone: '+91 98765 43213', experience: '11 years', rating: 5, specialty: 'Historical Tours' },
      { id: 4, name: 'M. Surya', phone: '+91 98765 43214', experience: '3 years', rating: 3, specialty: 'City Walks' },
      { id: 5, name: 'D. Venkat', phone: '+91 98765 43215', experience: '8 years', rating: 5, specialty: 'Cultural Tours' },
      { id: 6, name: 'T. Vara', phone: '+91 98765 43216', experience: '6 years', rating: 3, specialty: 'Food Tours' },
      { id: 7, name: 'B. Krishna', phone: '+91 98765 43217', experience: '10 years', rating: 5, specialty: 'Wildlife Tours' },
      { id: 8, name: 'C. Siva', phone: '+91 98765 43218', experience: '2 years', rating: 3, specialty: 'Budget Tours' },
      { id: 9, name: 'P. Deepak', phone: '+91 98765 43219', experience: '7 years', rating: 5, specialty: 'Photography Tours' },
      { id: 10, name: 'A. Anjali', phone: '+91 98765 43220', experience: '5 years', rating: 3, specialty: 'Family Tours' }
    ],
    wayanad: [
      { id: 1, name: 'S. Ravi Teja', phone: '+91 98765 43221', experience: '7 years', rating: 5, specialty: 'Market Tours' },
      { id: 2, name: 'D. Venkat Rao', phone: '+91 98765 43222', experience: '3 years', rating: 3, specialty: 'Temple Tours' },
      { id: 3, name: 'K. Padma', phone: '+91 98765 43223', experience: '9 years', rating: 5, specialty: 'Village Tours' },
      { id: 4, name: 'P. Vara', phone: '+91 98765 43224', experience: '4 years', rating: 3, specialty: 'Canal Tours' },
      { id: 5, name: 'G. Madhu', phone: '+91 98765 43225', experience: '11 years', rating: 5, specialty: 'Heritage Tours' },
      { id: 6, name: 'L. Narasimha', phone: '+91 98765 43226', experience: '6 years', rating: 3, specialty: 'Cultural Tours' },
      { id: 7, name: 'M. Sunitha', phone: '+91 98765 43227', experience: '8 years', rating: 5, specialty: 'Food Tours' },
      { id: 8, name: 'R. Lalitha', phone: '+91 98765 43228', experience: '2 years', rating: 3, specialty: 'Budget Tours' },
      { id: 9, name: 'V. Pravallika', phone: '+91 98765 43229', experience: '5 years', rating: 5, specialty: 'Photography Tours' },
      { id: 10, name: 'N. Anjali', phone: '+91 98765 43230', experience: '7 years', rating: 3, specialty: 'Family Tours' }
    ],
    kumarakom: [
      { id: 1, name: 'P. Vara Prasad', phone: '+91 98765 43231', experience: '10 years', rating: 5, specialty: 'Temple Tours' },
      { id: 2, name: 'K. Srinivasa Rao', phone: '+91 98765 43232', experience: '4 years', rating: 3, specialty: 'Village Tours' },
      { id: 3, name: 'D. Satyanarayana', phone: '+91 98765 43233', experience: '8 years', rating: 5, specialty: 'Lake Tours' },
      { id: 4, name: 'A. Siva Prasad', phone: '+91 98765 43234', experience: '3 years', rating: 3, specialty: 'Bus Tours' },
      { id: 5, name: 'P. Subba Rao', phone: '+91 98765 43235', experience: '12 years', rating: 5, specialty: 'Heritage Tours' },
      { id: 6, name: 'G. Nageswar', phone: '+91 98765 43236', experience: '6 years', rating: 3, specialty: 'Cultural Tours' },
      { id: 7, name: 'B. Venkatesh', phone: '+91 98765 43237', experience: '9 years', rating: 5, specialty: 'Food Tours' },
      { id: 8, name: 'K. Siva Sankar', phone: '+91 98765 43238', experience: '2 years', rating: 3, specialty: 'Budget Tours' },
      { id: 9, name: 'P. Radhika', phone: '+91 98765 43239', experience: '7 years', rating: 5, specialty: 'Photography Tours' },
      { id: 10, name: 'M. Suryanarayana', phone: '+91 98765 43240', experience: '5 years', rating: 3, specialty: 'Family Tours' }
    ],
    kovalam: [
      { id: 1, name: 'L. Narasimha', phone: '+91 98765 43241', experience: '9 years', rating: 5, specialty: 'Fort Tours' },
      { id: 2, name: 'G. Madhu Babu', phone: '+91 98765 43242', experience: '3 years', rating: 3, specialty: 'Market Tours' },
      { id: 3, name: 'P. Ramesh Babu', phone: '+91 98765 43243', experience: '11 years', rating: 5, specialty: 'Village Tours' },
      { id: 4, name: 'M. Sunitha', phone: '+91 98765 43244', experience: '4 years', rating: 3, specialty: 'Railway Tours' },
      { id: 5, name: 'K. Gopala Rao', phone: '+91 98765 43245', experience: '8 years', rating: 5, specialty: 'Temple Tours' },
      { id: 6, name: 'D. Phani Kumar', phone: '+91 98765 43246', experience: '6 years', rating: 3, specialty: 'Cultural Tours' },
      { id: 7, name: 'M. Srinivasulu', phone: '+91 98765 43247', experience: '10 years', rating: 5, specialty: 'Food Tours' },
      { id: 8, name: 'R. Lalitha', phone: '+91 98765 43248', experience: '2 years', rating: 3, specialty: 'Budget Tours' },
      { id: 9, name: 'V. Pravallika', phone: '+91 98765 43249', experience: '7 years', rating: 5, specialty: 'Photography Tours' },
      { id: 10, name: 'S. Rama Devi', phone: '+91 98765 43250', experience: '5 years', rating: 3, specialty: 'Family Tours' }
    ],
    bekal: [
      { id: 1, name: 'B. Krishna Murthy', phone: '+91 98765 43251', experience: '10 years', rating: 5, specialty: 'Fort Tours' },
      { id: 2, name: 'C. Siva Kumar', phone: '+91 98765 43252', experience: '4 years', rating: 3, specialty: 'Village Tours' },
      { id: 3, name: 'T. Vara Lakshmi', phone: '+91 98765 43253', experience: '8 years', rating: 5, specialty: 'River Tours' },
      { id: 4, name: 'P. Deepak', phone: '+91 98765 43254', experience: '3 years', rating: 3, specialty: 'Bus Tours' },
      { id: 5, name: 'K. Gopala Rao', phone: '+91 98765 43255', experience: '12 years', rating: 5, specialty: 'View Point Tours' },
      { id: 6, name: 'D. Phani Kumar', phone: '+91 98765 43256', experience: '6 years', rating: 3, specialty: 'Cultural Tours' },
      { id: 7, name: 'M. Srinivasulu', phone: '+91 98765 43257', experience: '9 years', rating: 5, specialty: 'Photography Tours' },
      { id: 8, name: 'R. Lalitha', phone: '+91 98765 43258', experience: '2 years', rating: 3, specialty: 'Budget Tours' },
      { id: 9, name: 'V. Pravallika', phone: '+91 98765 43259', experience: '7 years', rating: 5, specialty: 'Food Tours' },
      { id: 10, name: 'S. Rama Devi', phone: '+91 98765 43260', experience: '5 years', rating: 3, specialty: 'Family Tours' }
    ],
    athirappilly: [
      { id: 1, name: 'K. Gopala Rao', phone: '+91 98765 43261', experience: '9 years', rating: 5, specialty: 'Waterfall Tours' },
      { id: 2, name: 'D. Phani Kumar', phone: '+91 98765 43262', experience: '3 years', rating: 3, specialty: 'Forest Tours' },
      { id: 3, name: 'M. Srinivasulu', phone: '+91 98765 43263', experience: '11 years', rating: 5, specialty: 'Market Tours' },
      { id: 4, name: 'R. Lalitha', phone: '+91 98765 43264', experience: '4 years', rating: 3, specialty: 'Bus Tours' },
      { id: 5, name: 'V. Pravallika', phone: '+91 98765 43265', experience: '8 years', rating: 5, specialty: 'View Point Tours' },
      { id: 6, name: 'S. Rama Devi', phone: '+91 98765 43266', experience: '6 years', rating: 3, specialty: 'Cultural Tours' },
      { id: 7, name: 'P. Nagendra', phone: '+91 98765 43267', experience: '10 years', rating: 5, specialty: 'Photography Tours' },
      { id: 8, name: 'K. Surya Prakash', phone: '+91 98765 43268', experience: '2 years', rating: 3, specialty: 'Budget Tours' },
      { id: 9, name: 'D. Satyanarayana', phone: '+91 98765 43269', experience: '7 years', rating: 5, specialty: 'Food Tours' },
      { id: 10, name: 'A. Siva Prasad', phone: '+91 98765 43270', experience: '5 years', rating: 3, specialty: 'Family Tours' }
    ],
    thattekkad: [
      { id: 1, name: 'S. Rama Devi', phone: '+91 98765 43271', experience: '8 years', rating: 5, specialty: 'Bird Watching Tours' },
      { id: 2, name: 'P. Nagendra', phone: '+91 98765 43272', experience: '4 years', rating: 3, specialty: 'Nursery Tours' },
      { id: 3, name: 'K. Surya Prakash', phone: '+91 98765 43273', experience: '10 years', rating: 5, specialty: 'Lake Tours' },
      { id: 4, name: 'D. Satyanarayana', phone: '+91 98765 43274', experience: '3 years', rating: 3, specialty: 'Bus Tours' },
      { id: 5, name: 'A. Siva Prasad', phone: '+91 98765 43275', experience: '7 years', rating: 5, specialty: 'Garden Tours' },
      { id: 6, name: 'P. Subba Rao', phone: '+91 98765 43276', experience: '5 years', rating: 3, specialty: 'Cultural Tours' },
      { id: 7, name: 'G. Nageswar', phone: '+91 98765 43277', experience: '9 years', rating: 5, specialty: 'Photography Tours' },
      { id: 8, name: 'B. Venkatesh', phone: '+91 98765 43278', experience: '2 years', rating: 3, specialty: 'Budget Tours' },
      { id: 9, name: 'K. Siva Sankar', phone: '+91 98765 43279', experience: '6 years', rating: 5, specialty: 'Food Tours' },
      { id: 10, name: 'P. Radhika', phone: '+91 98765 43280', experience: '4 years', rating: 3, specialty: 'Family Tours' }
    ],
    kavvayi: [
      { id: 1, name: 'D. Satyanarayana', phone: '+91 98765 43281', experience: '9 years', rating: 5, specialty: 'River Tours' },
      { id: 2, name: 'A. Siva Prasad', phone: '+91 98765 43282', experience: '3 years', rating: 3, specialty: 'Island Tours' },
      { id: 3, name: 'P. Subba Rao', phone: '+91 98765 43283', experience: '11 years', rating: 5, specialty: 'Ferry Tours' },
      { id: 4, name: 'G. Nageswar', phone: '+91 98765 43284', experience: '4 years', rating: 3, specialty: 'Bus Tours' },
      { id: 5, name: 'B. Venkatesh', phone: '+91 98765 43285', experience: '8 years', rating: 5, specialty: 'Temple Tours' },
      { id: 6, name: 'K. Siva Sankar', phone: '+91 98765 43286', experience: '6 years', rating: 3, specialty: 'Cultural Tours' },
      { id: 7, name: 'P. Radhika', phone: '+91 98765 43287', experience: '10 years', rating: 5, specialty: 'Photography Tours' },
      { id: 8, name: 'M. Suryanarayana', phone: '+91 98765 43288', experience: '2 years', rating: 3, specialty: 'Budget Tours' },
      { id: 9, name: 'K. Srinivas', phone: '+91 98765 43289', experience: '7 years', rating: 5, specialty: 'Food Tours' },
      { id: 10, name: 'R. Nageswarao', phone: '+91 98765 43290', experience: '5 years', rating: 3, specialty: 'Family Tours' }
    ],
    vagamon: [
      { id: 1, name: 'G. Nageswar Rao', phone: '+91 98765 43291', experience: '10 years', rating: 5, specialty: 'Hill Tours' },
      { id: 2, name: 'B. Venkatesh', phone: '+91 98765 43292', experience: '4 years', rating: 3, specialty: 'Temple Tours' },
      { id: 3, name: 'K. Siva Sankar', phone: '+91 98765 43293', experience: '8 years', rating: 5, specialty: 'Meadow Tours' },
      { id: 4, name: 'P. Radhika', phone: '+91 98765 43294', experience: '3 years', rating: 3, specialty: 'Bus Tours' },
      { id: 5, name: 'M. Suryanarayana', phone: '+91 98765 43295', experience: '12 years', rating: 5, specialty: 'View Point Tours' },
      { id: 6, name: 'K. Srinivas', phone: '+91 98765 43296', experience: '6 years', rating: 3, specialty: 'Cultural Tours' },
      { id: 7, name: 'R. Nageswarao', phone: '+91 98765 43297', experience: '9 years', rating: 5, specialty: 'Photography Tours' },
      { id: 8, name: 'P. Vara Prasad', phone: '+91 98765 43298', experience: '2 years', rating: 3, specialty: 'Budget Tours' },
      { id: 9, name: 'D. Satyanarayana', phone: '+91 98765 43299', experience: '7 years', rating: 5, specialty: 'Food Tours' },
      { id: 10, name: 'A. Siva Prasad', phone: '+91 98765 43300', experience: '5 years', rating: 3, specialty: 'Family Tours' }
    ]
  };

  const guides = allGuides[destinationId] || allGuides['munnar'];

  const getDestinationName = (id) => {
    const names = {
      'munnar': 'Rajahmundry',
      'thekkady': 'Kakinada',
      'wayanad': 'Amalapuram',
      'kumarakom': 'Ramanayuni',
      'kovalam': 'Peddapuram',
      'bekal': 'Korumam Fort',
      'athirappilly': 'Pithampur',
      'thattekkad': 'Kadiyam',
      'kavvayi': 'Kotipalli River Islands',
      'vagamon': 'Gurunandan'
    };
    return names[id] || id;
  };

  const destName = getDestinationName(destinationId);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? '#FFD700' : '#ddd', fontSize: '1rem' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="service-detail-page" style={{ paddingTop: '0', minHeight: '100vh' }}>
      <section className="service-detail-hero">
        <div className="service-detail-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="service-detail-particle" style={{
              width: `${4 + Math.random() * 4}px`, height: `${4 + Math.random() * 4}px`,
              left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`, animationDuration: `${6 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        <div className="service-detail-hero-content">
          <div className="service-detail-hero-badge">
            <span>👤</span>
            <span>Licensed Guides</span>
          </div>
          <h1>{destName} - Tour Guides</h1>
          <p>Professional licensed guides for sightseeing and tours in {destName}</p>
        </div>
      </section>

      <div className="service-detail-content">
        <Link to="/all-tour-guides" className="service-detail-back">
          ‹ Back to All Guides
        </Link>

        <div className="service-detail-section-header">
          <div className="service-detail-section-badge">Expert Guides</div>
          <h2>Available Tour Guides</h2>
        </div>

        <div className="service-detail-grid">
          {guides.map((guide, index) => (
            <div key={guide.id} className="service-detail-card" style={{ '--card-color': '#2E7D32' }}>
              <div className="service-detail-card-icon" style={{ background: 'rgba(46, 125, 50, 0.12)', color: '#2E7D32' }}>
                👤
              </div>

              <h3 className="service-detail-card-title">{guide.name}</h3>

              <p className="service-detail-card-description">
                Specialty: {guide.specialty}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#6b7280' }}>
                  <span>📞</span>
                  <span>{guide.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#6b7280' }}>
                  <span>🕐</span>
                  <span>{guide.experience} experience</span>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                {renderStars(guide.rating)}
              </div>

              <a href={`tel:${guide.phone}`} className="service-card-btn" style={{ textDecoration: 'none' }}>
                <span>Call Now</span>
              </a>
            </div>
          ))}
        </div>

        <div className="service-detail-bottom-back">
          <Link to="/all-tour-guides" className="service-detail-btn">
            ‹ Back to All Guides
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourGuide;