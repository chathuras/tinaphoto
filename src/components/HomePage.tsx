import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            {/* <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Tina Photo Solutions</h1>
                    <p>Capturing life's beautiful moments, one frame at a time</p>
                    <button className="cta-button">View Portfolio</button>
                </div>
            </section> */}

            {/* About Section */}
            {/* <section className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About Me</h2>
                            <p>Hi, I'm Tina, a passionate photographer with over 8 years of experience capturing life's most precious moments. From intimate weddings to stunning landscapes, I believe every photograph tells a unique story.</p>
                            <p>My approach combines technical expertise with artistic vision, ensuring that each image not only looks beautiful but also captures the genuine emotion and essence of the moment.</p>
                            <div className="stats">
                                <div className="stat">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">8+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Weddings</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop" alt="Tina - Photographer" />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <h2>My Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">📸</div>
                            <h3>Portrait Photography</h3>
                            <p>Professional headshots, family portraits, and creative personal branding sessions that capture your authentic self.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💒</div>
                            <h3>Wedding Photography</h3>
                            <p>Complete wedding coverage from engagement to reception, preserving your special day's precious memories.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🏞️</div>
                            <h3>Landscape Photography</h3>
                            <p>Breathtaking nature and cityscape photography, perfect for home decor and commercial use.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🎉</div>
                            <h3>Event Photography</h3>
                            <p>Corporate events, parties, and special occasions captured with style and professionalism.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section className="featured-work-section">
                <div className="container">
                    <h2>Featured Work</h2>
                    <div className="featured-grid">
                        <div className="featured-item">
                            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop" alt="Wedding Photography" />
                            <div className="featured-overlay">
                                <h3>Wedding Collection</h3>
                                <p>Love stories captured beautifully</p>
                            </div>
                        </div>
                        <div className="featured-item">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" alt="Portrait Photography" />
                            <div className="featured-overlay">
                                <h3>Portrait Series</h3>
                                <p>Professional headshots & branding</p>
                            </div>
                        </div>
                        <div className="featured-item">
                            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Landscape Photography" />
                            <div className="featured-overlay">
                                <h3>Nature & Landscapes</h3>
                                <p>World's beauty through my lens</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2>What My Clients Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>"Tina captured our wedding day perfectly! Every photo tells a story and brings back the emotions of that special day."</p>
                            <div className="client-info">
                                <strong>Sarah & Mike</strong>
                                <span>Wedding Clients</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>"Professional, creative, and incredibly talented. Our family portraits turned out better than we could have imagined."</p>
                            <div className="client-info">
                                <strong>The Johnson Family</strong>
                                <span>Portrait Session</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>"Tina's landscape photography is absolutely stunning. We have her work displayed throughout our home and office."</p>
                            <div className="client-info">
                                <strong>David Chen</strong>
                                <span>Art Collector</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="contact-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Create Something Beautiful?</h2>
                        <p>Let's discuss your photography needs and create stunning images together.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="primary-button">Book a Session</Link>
                            <Link to="/contact" className="secondary-button">Get in Touch</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
