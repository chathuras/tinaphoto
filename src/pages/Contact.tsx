import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Ready to create beautiful memories together? Let's start a conversation.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-content">
              <h3>Email</h3>
              <p>hello@tinaphotos.com</p>
              <p>I typically respond within 24 hours</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
              <p>Available Mon-Fri, 9AM-6PM</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h3>Location</h3>
              <p>San Francisco, CA</p>
              <p>Serving the Bay Area and beyond</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="#" className="social-link">📸 Instagram</a>
              <a href="#" className="social-link">📘 Facebook</a>
              <a href="#" className="social-link">🐦 Twitter</a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="portraits">Portrait Photography</option>
                <option value="weddings">Wedding Photography</option>
                <option value="landscapes">Landscape Photography</option>
                <option value="events">Event Photography</option>
                <option value="custom">Custom Package</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your photography needs, event details, or any questions you have..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How far in advance should I book?</h3>
            <p>For weddings, I recommend booking 6-12 months in advance. For other sessions, 2-4 weeks notice is typically sufficient.</p>
          </div>
          <div className="faq-item">
            <h3>Do you travel for sessions?</h3>
            <p>Yes! I'm available for travel throughout the Bay Area and beyond. Travel fees may apply for locations outside my standard service area.</p>
          </div>
          <div className="faq-item">
            <h3>How long until I receive my photos?</h3>
            <p>Portrait sessions: 1-2 weeks. Weddings: 4-6 weeks. Events: 1-3 weeks. Rush delivery is available for an additional fee.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer payment plans?</h3>
            <p>Yes! I offer flexible payment plans for wedding packages and larger sessions. A deposit is required to secure your date.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
