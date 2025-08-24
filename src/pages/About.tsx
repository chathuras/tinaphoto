import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Tina</h1>
          <p>Passionate photographer capturing life's beautiful moments</p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-story">
          <div className="story-text">
            <h2>My Story</h2>
            <p>Hi, I'm Tina, a passionate photographer with over 8 years of experience capturing life's most precious moments. My journey began when I received my first camera as a birthday gift - from that moment, I knew I had found my calling.</p>
            <p>I believe that every photograph tells a unique story, and my mission is to capture the genuine emotions, authentic moments, and beautiful memories that make life special. Whether it's a couple's first look on their wedding day, a family's laughter during a portrait session, or the breathtaking beauty of nature, I strive to create images that will be treasured for generations.</p>
            <p>My approach combines technical expertise with artistic vision, ensuring that each image not only looks beautiful but also captures the essence and emotion of the moment. I work closely with my clients to understand their vision and create photographs that exceed their expectations.</p>
          </div>
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop" alt="Tina - Photographer" />
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Weddings</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Photos Delivered</div>
          </div>
        </div>

        <div className="about-philosophy">
          <h2>My Photography Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <div className="philosophy-icon">🎯</div>
              <h3>Authentic Moments</h3>
              <p>I focus on capturing genuine, unposed moments that reflect the true personality and emotions of my subjects.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">✨</div>
              <h3>Artistic Vision</h3>
              <p>Every photograph is crafted with attention to composition, lighting, and artistic detail to create stunning visual stories.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">💝</div>
              <h3>Personal Connection</h3>
              <p>I build relationships with my clients to understand their vision and create photographs that truly represent their story.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">🌟</div>
              <h3>Quality Excellence</h3>
              <p>From capture to delivery, I maintain the highest standards of quality in every aspect of my work.</p>
            </div>
          </div>
        </div>

        <div className="about-equipment">
          <h2>Equipment & Expertise</h2>
          <div className="equipment-content">
            <div className="equipment-text">
              <p>I use professional-grade Canon and Sony equipment to ensure the highest quality images. My kit includes multiple camera bodies, a variety of prime and zoom lenses, and professional lighting equipment for all conditions.</p>
              <p>I'm proficient in both natural light and studio photography, and I'm constantly learning and adapting to new techniques and technologies to provide the best possible service to my clients.</p>
            </div>
            <div className="equipment-list">
              <h3>My Gear:</h3>
              <ul>
                <li>Canon EOS R5 & R6</li>
                <li>Sony A7R IV</li>
                <li>Professional L-series lenses</li>
                <li>Studio lighting equipment</li>
                <li>Professional editing software</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-testimonials">
          <h2>What My Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>"Tina has an incredible eye for capturing the perfect moment. Our wedding photos are absolutely stunning and bring back all the emotions of our special day."</p>
              <div className="testimonial-author">- Sarah & Mike, Wedding Clients</div>
            </div>
            <div className="testimonial">
              <p>"Professional, creative, and incredibly talented. Our family portraits turned out better than we could have imagined. Highly recommend!"</p>
              <div className="testimonial-author">- The Johnson Family</div>
            </div>
            <div className="testimonial">
              <p>"Tina's landscape photography is absolutely breathtaking. We have her work displayed throughout our home and receive compliments constantly."</p>
              <div className="testimonial-author">- David Chen, Art Collector</div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h2>Ready to Create Beautiful Memories Together?</h2>
          <p>Let's discuss your photography needs and create something truly special.</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
