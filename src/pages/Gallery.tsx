import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'landscapes', name: 'Landscapes' },
    { id: 'events', name: 'Events' }
  ];

  const photos = [
    // Wedding Photos
    { id: 1, category: 'weddings', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop', alt: 'Wedding Ceremony', title: 'Romantic Ceremony' },
    { id: 2, category: 'weddings', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop', alt: 'Wedding Couple', title: 'Newlyweds' },
    { id: 3, category: 'weddings', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop', alt: 'Wedding Reception', title: 'Celebration' },

    // Portrait Photos
    { id: 4, category: 'portraits', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', alt: 'Professional Portrait', title: 'Executive Portrait' },
    { id: 5, category: 'portraits', src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop', alt: 'Family Portrait', title: 'Family Love' },
    { id: 6, category: 'portraits', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop', alt: 'Creative Portrait', title: 'Artistic Vision' },

    // Landscape Photos
    { id: 7, category: 'landscapes', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', alt: 'Mountain Landscape', title: 'Mountain Majesty' },
    { id: 8, category: 'landscapes', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', alt: 'Forest Path', title: 'Forest Serenity' },
    { id: 9, category: 'landscapes', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop', alt: 'Ocean Waves', title: 'Ocean Power' },
    { id: 10, category: 'landscapes', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', alt: 'Sunset', title: 'Golden Hour' },

    // Event Photos
    { id: 11, category: 'events', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop', alt: 'Corporate Event', title: 'Business Meeting' },
    { id: 12, category: 'events', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop', alt: 'Birthday Party', title: 'Celebration' },
    { id: 13, category: 'events', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', alt: 'Conference', title: 'Professional Event' }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  const openModal = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto.id);
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      navigatePhoto('prev');
    } else if (e.key === 'ArrowRight') {
      navigatePhoto('next');
    }
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Photo Gallery</h1>
        <p>Explore my collection of captured moments and beautiful memories</p>
      </div>

      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredPhotos.map(photo => (
          <div 
            key={photo.id} 
            className="gallery-item"
            onClick={() => openModal(photo)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openModal(photo)}
          >
            <img src={photo.src} alt={photo.alt} />
            <div className="gallery-overlay">
              <h3>{photo.title}</h3>
              <p>{photo.alt}</p>
              <div className="click-hint">Click to preview</div>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-cta">
        <h2>Interested in a Custom Photo Session?</h2>
        <p>Let's create beautiful memories together</p>
        <Link to="/contact" className="cta-button">Book Your Session</Link>
      </div>

      {/* Photo Preview Modal */}
      {isModalOpen && selectedPhoto && (
        <div 
          className="photo-modal-overlay"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            
            <div className="modal-image-container">
              <img 
                src={selectedPhoto.src.replace('w=400&h=300', 'w=800&h=600')} 
                alt={selectedPhoto.alt} 
                className="modal-image"
              />
            </div>
            
            <div className="modal-content">
              <h2>{selectedPhoto.title}</h2>
              <p>{selectedPhoto.alt}</p>
              <div className="modal-category">
                Category: <span>{categories.find(cat => cat.id === selectedPhoto.category)?.name}</span>
              </div>
            </div>
            
            <button 
              className="modal-nav modal-nav-prev" 
              onClick={() => navigatePhoto('prev')}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button 
              className="modal-nav modal-nav-next" 
              onClick={() => navigatePhoto('next')}
              aria-label="Next photo"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
