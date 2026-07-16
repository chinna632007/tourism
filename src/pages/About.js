import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <h2>About East Godavari Tourism</h2>
          <p>Department of Tourism, Government of East Godavari</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3rem',
          alignItems: 'start'
        }}>
          <div>
            <img 
              src="https://www.east-godavaritourism.org/ktadmin/img/pages/large-desktop/east-godavari-tourism-1706954189_84294aa1d4d0ce186acc.webp"
              alt="East Godavari Tourism"
              style={{
                width: '100%',
                borderRadius: '8px',
                marginBottom: '1.5rem'
              }}
            />
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4F5051' }}>
              East Godavari, Land of Riches, is a state located in the southwest of India. 
              It is known for its natural beauty, river islands, beaches, and rich cultural heritage.
            </p>
          </div>

          <div>
            <h3 style={{ 
              fontSize: '1.75rem', 
              fontFamily: 'Georgia, serif',
              marginBottom: '1rem',
              color: '#333'
            }}>
              Our Mission
            </h3>
            <p style={{ lineHeight: '1.8', color: '#4F5051' }}>
              To promote East Godavari as a premier global tourism destination while ensuring 
              sustainable development of tourism resources and equitable benefits to local communities.
            </p>

            <h3 style={{ 
              fontSize: '1.75rem', 
              fontFamily: 'Georgia, serif',
              marginTop: '2rem',
              marginBottom: '1rem',
              color: '#333'
            }}>
              Contact Information
            </h3>
            <p style={{ lineHeight: '1.8', color: '#4F5051' }}>
              Department of Tourism, Government of East Godavari<br />
              Park View, Hyderabad<br />
              East Godavari, India - 695 033<br />
              Tel: +91 8812 222 222<br />
              Email: info@east-godavaritourism.org
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/" style={{
            color: '#FF9D00',
            textDecoration: 'none',
            fontSize: '1rem'
          }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
