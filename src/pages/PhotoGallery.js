import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { photoGallery } from '../data/content';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <h2>Photo Gallery</h2>
          <p>Photographs that capture the spirit and splendour of Land of Riches</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {photoGallery.map((photo, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImage(photo)}
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '300px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={photo.image}
                alt={photo.heading}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=' + photo.heading;
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                padding: '1.5rem',
                color: 'white'
              }}>
                <h4 style={{ margin: 0 }}>{photo.heading}</h4>
                <p style={{ 
                  fontSize: '0.85rem', 
                  opacity: 0.9,
                  marginTop: '0.25rem' 
                }}>
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              cursor: 'pointer',
              padding: '2rem'
            }}
          >
            <div style={{ maxWidth: '90%', maxHeight: '90%', position: 'relative' }}>
              <img
                src={selectedImage.image}
                alt={selectedImage.heading}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-60px',
                left: 0,
                right: 0,
                textAlign: 'center',
                color: 'white'
              }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{selectedImage.heading}</h3>
                <p style={{ margin: 0 }}>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

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

export default PhotoGallery;
