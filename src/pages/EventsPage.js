import React from 'react';
import { events } from '../data/content';
import { Link } from 'react-router-dom';
import './EventsPage.css';

const EventsPage = () => (
  <div className="page-container" style={{paddingTop:'120px',minHeight:'100vh'}}>
    <div className="container">
      <div className="section">
        <div className="section-header">
          <h2>Events</h2>
          <p>The land of rich cultures and traditions! Mark the major events for your next visit.</p>
        </div>
        <div className="events-explore-wrapper">
          <a href="#/coming-soon" className="explore-btn" title="Read more about Events">
            Explore
            <svg width="0.5em" height="0.5em" viewBox="0 0 24.336 24.336">
              <g rotate="0" transform="translate(0 0) rotate(0)">
                <path d="M5.879,13.766H15.5a2.2,2.2,0,0,1,.384.043,1.79,1.79,0,0,1,1.207,2.339,1.753,1.753,0,0,1-1.4,1.052,1.433,1.433,0,0,1-.193.01H1.722l-.1,0a1.412,1.412,0,0,1-.191-.022A1.761,1.761,0,0,1,.01,15.681,1.785,1.785,0,0,1,0,15.488V1.711A1.784,1.784,0,0,1,2.382.12a1.761,1.761,0,0,1,1.052,1.4,1.809,1.809,0,0,1,.01.193l-.25,12.042c-.081-.052-1.131,0,2.685.012Z" transform="translate(8 24.336) rotate(-135)" fill="#000"></path>
                <line x1="25" fill="none" opacity="0" strokeLinecap="round" strokeWidth="3"></line>
              </g>
            </svg>
          </a>
        </div>
        <div className="events-grid">
          {events.map((event, i) => (
            <Link key={i} to={`/events/${event.id}`} style={{textDecoration:'none',color:'inherit'}}>
              <article className="event-card" style={{cursor:'pointer'}}>
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
    </div>
  </div>
);

export default EventsPage;