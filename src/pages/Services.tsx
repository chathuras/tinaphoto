import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Portrait Photography',
      icon: '📸',
      description: 'Professional headshots, family portraits, and creative personal branding sessions that capture your authentic self.',
      features: [
        'Professional headshots for LinkedIn and business',
        'Family portraits and group photos',
        'Creative personal branding sessions',
        'High-resolution digital files',
        'Basic retouching included',
        'Online gallery for easy sharing'
      ],
      duration: '1-2 hours',
      price: 'Starting at $150',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Wedding Photography',
      icon: '💒',
      description: 'Complete wedding coverage from engagement to reception, preserving your special day\'s precious memories.',
      features: [
        'Engagement session included',
        'Full day wedding coverage (8-10 hours)',
        'Second photographer available',
        'Ceremony and reception coverage',
        'Professional editing and retouching',
        'Online gallery and USB with all photos',
        'Wedding album design included'
      ],
      duration: 'Full day coverage',
      price: 'Starting at $2,500',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Landscape Photography',
      icon: '🏞️',
      description: 'Breathtaking nature and cityscape photography, perfect for home decor and commercial use.',
      features: [
        'Nature and wildlife photography',
        'Cityscape and urban photography',
        'Available for commercial licensing',
        'Large format prints available',
        'Custom framing options',
        'Location scouting included'
      ],
      duration: 'Half day to full day',
      price: 'Starting at $300',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Event Photography',
      icon: '🎉',
      description: 'Corporate events, parties, and special occasions captured with style and professionalism.',
      features: [
        'Corporate events and conferences',
        'Birthday parties and celebrations',
        'Graduations and ceremonies',
        'Product launches and trade shows',
        'Professional editing included',
        'Quick turnaround time',
        'Online gallery delivery'
      ],
      duration: '2-6 hours',
      price: 'Starting at $200/hour',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Photography Services</h1>
        <p>Professional photography services tailored to your needs</p>
      </div>

      <div className="services-container">
        {services.map(service => (
          <div key={service.id} className="service-detail-card">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h2>{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>

              <div className="service-details">
                <div className="detail-item">
                  <strong>Duration:</strong> {service.duration}
                </div>
                <div className="detail-item">
                  <strong>Starting Price:</strong> {service.price}
                </div>
              </div>

              <div className="service-features">
                <h3>What's Included:</h3>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <Link to="/tinaphoto/contact" className="book-service-btn">Book This Service</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pricing-cta">
        <h2>Custom Packages Available</h2>
        <p>Need something specific? I offer custom packages tailored to your unique requirements.</p>
        <div className="cta-buttons">
          <Link to="/tinaphoto/contact" className="primary-btn">Get Custom Quote</Link>
          <Link to="/tinaphoto/services" className="secondary-btn">View Full Pricing</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
