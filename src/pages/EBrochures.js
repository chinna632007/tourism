import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ebrochures } from '../data/content';

const EBrochures = () => {
  return (
    <>
      <Helmet>
        <title>E-Brochures - East Godavari Tourism</title>
      </Helmet>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>E-Brochures</h2>
            <p>Digital guides for travellers planning their East Godavari vacations.</p>
          </div>
          <div className="ebrochures-slider">
            {ebrochures.map((item, i) => (
              <div key={i} className="ebrochure-item">
                <img src={item.image} alt={item.heading} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EBrochures;
