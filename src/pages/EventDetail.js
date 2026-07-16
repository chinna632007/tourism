import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data/content';
import './EventsPage.css';

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="page-container" style={{paddingTop:'120px',textAlign:'center'}}>
        <h2>Event not found</h2>
        <Link to="/events">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="page-container" style={{paddingTop:'0',minHeight:'100vh'}}>
      {/* Hero Section */}
      <div style={{position:'relative',width:'100%',height:'700px',overflow:'hidden'}}>
        <img 
          src={event.image}
          alt={event.heading} 
          style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}
        />
        <div style={{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          background:'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)'
        }}></div>
        

        {/* Event Title */}
        <div style={{
          position:'absolute',
          top:'50%',
          left:'50%',
          transform:'translate(-50%, -50%)',
          textAlign:'center',
          color:'white',
          zIndex:5
        }}>
          <h1 style={{
            fontSize:'3.5rem',
            fontFamily:'Georgia, serif',
            fontWeight:'400',
            margin:0,
            textShadow:'2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            {event.heading}
          </h1>
          {event.description && (
            <p style={{
              fontSize:'1.2rem',
              marginTop:'1rem',
              opacity:0.9
            }}>
              {event.description}
            </p>
          )}
          <p style={{
            fontSize:'1.1rem',
            marginTop:'0.5rem',
            backgroundColor:'rgba(255,157,0,0.9)',
            display:'inline-block',
            padding:'0.5rem 1.5rem',
            borderRadius:'25px'
          }}>
            {event.date}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{paddingTop:'3rem',paddingBottom:'3rem'}}>
        {/* Event Description */}
        <div style={{marginBottom:'3rem'}}>
          <h2 style={{
            fontSize:'2.5rem',
            fontFamily:'Georgia, serif',
            fontWeight:'400',
            marginBottom:'1.5rem',
            color:'#333'
          }}>
            About the Event
          </h2>
          <p style={{
            fontSize:'16px',
            lineHeight:'1.8',
            color:'#4F5051',
            marginBottom:'1.5rem'
          }}>
            {event.longDesc || event.description || "Experience this unique cultural event in East Godavari."}
          </p>
        </div>

        {/* Event Details Grid */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',marginBottom:'3rem'}}>
          <div>
            <h2 style={{
              fontSize:'2rem',
              fontFamily:'Georgia, serif',
              marginBottom:'1.5rem',
              color:'#333'
            }}>
              Event Highlights
            </h2>
            <ul style={{listStyle:'none',padding:0}}>
              {event.highlights ? event.highlights.map((highlight, index) => (
                <li key={index} style={{
                  padding:'0.75rem 0',
                  borderBottom:'1px solid #eee',
                  color:'#4F5051'
                }}>
                  • {highlight}
                </li>
              )) : (
                <>
                  <li style={{padding:'0.75rem 0',borderBottom:'1px solid #eee',color:'#4F5051'}}>• Traditional cultural experience</li>
                  <li style={{padding:'0.75rem 0',borderBottom:'1px solid #eee',color:'#4F5051'}}>• Community participation</li>
                  <li style={{padding:'0.75rem 0',borderBottom:'1px solid #eee',color:'#4F5051'}}>• Authentic East Godavari heritage</li>
                </>
              )}
            </ul>
          </div>

          {/* Related Events */}
          <div>
            <h2 style={{
              fontSize:'2rem',
              fontFamily:'Georgia, serif',
              marginBottom:'1.5rem',
              color:'#333'
            }}>
              Related Events
            </h2>
            <div className="events-grid" style={{display:'grid',gridTemplateColumns:'1fr',gap:'1rem'}}>
              {events.filter(e => e.id !== id).slice(0, 3).map((relatedEvent, index) => (
                <Link
                  key={index}
                  to={`/events/${relatedEvent.id}`}
                  style={{textDecoration:'none',color:'inherit'}}
                >
                  <article className="event-card" style={{display:'flex',gap:'1.5rem',padding:'1.5rem',border:'1px solid #eee',borderRadius:'8px',cursor:'pointer',transition:'all 0.3s ease'}}>
                    <img 
                      src={relatedEvent.image} 
                      alt={relatedEvent.heading} 
                      style={{width:'150px',height:'150px',objectFit:'cover',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}
                    />
                    <div>
                      <h4 style={{margin:'0 0 0.25rem 0',fontSize:'1.1rem',color:'#333'}}>{relatedEvent.heading}</h4>
                      <p style={{margin:'0 0 0.25rem 0',fontSize:'0.9rem',color:'#666'}}>{relatedEvent.description}</p>
                      <span style={{fontSize:'0.85rem',color:'#FF9D00'}}>{relatedEvent.date}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Plan Your Visit Button */}
        <div style={{textAlign:'center',marginTop:'2rem'}}>
          <button style={{
            padding:'1rem 3rem',
            border:'none',
            background:'#FF9D00',
            color:'white',
            borderRadius:'30px',
            fontSize:'1rem',
            cursor:'pointer',
            fontWeight:'500'
          }}>
            Plan Your Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;