import React from 'react';
import '../../src/assets/styleSheet/Landing.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          Your Financial App
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Financial App</h1>
          <p>Your one-stop solution for managing your finances efficiently.</p>
          <a href="/signup" className="cta-button">Get Started</a>
        </div>
      </section>

      <section id="features" className="features">
        <div className="feature">
          <h2>Easy Saving</h2>
          <p>Save money effortlessly with our intuitive savings features.</p>
        </div>
        <div className="feature">
          <h2>Secure Transfers</h2>
          <p>Transfer money securely with advanced encryption technology.</p>
        </div>
        <div className="feature">
          <h2>Financial Insights</h2>
          <p>Gain insights into your financial health with detailed reports.</p>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are dedicated to providing the best financial solutions to help you achieve your financial goals.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to <a href="/contact">contact us</a>.</p>
      </section>
    </div>
  );
};

export default LandingPage;
