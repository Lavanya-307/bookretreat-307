import React from "react";
import "../styles/Hero.css";
import heroimg from "../../../Asserts/heroimg.webp";

function Hero() {
  return (
    <section className="hero-section">
      {/* Background and Overlay container for perfect border-radius clipping */}
      <div
        className="hero-bg-container"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content Wrapper */}
      <div className="hero-container">
        {/* Left: Main Content */}
        <div className="hero-left">
          <div className="hero-content">
            <h1>
              We are
              <br />
              BookRetreats.com
            </h1>
            <div className="hero-line"></div>
          </div>
        </div>

        {/* Right: Trustpilot Badge */}
        <div className="hero-right">
          <div className="trustpilot-box">
            <div className="trustpilot-brand">
              <span className="trustpilot-logo-star">★</span>
              <span className="trustpilot-text">Trustpilot</span>
            </div>

            <div className="trustpilot-stars">
              <div className="star-box solid">★</div>
              <div className="star-box solid">★</div>
              <div className="star-box solid">★</div>
              <div className="star-box solid">★</div>
              <div className="star-box half">★</div>
            </div>

            <p className="trustpilot-rating-text">
              TrustScore 4.7 <span className="divider">|</span> <span className="underlined">2,421 reviews</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Overlapping Cards */}
      <div className="hero-cards-wrapper">
        <div className="hero-cards">
          <div className="hero-card">
            <span className="card-label">Trusted by</span>
            <h2 className="card-value">50 000+</h2>
          </div>

          <div className="hero-card">
            <span className="card-label">Guaranteed</span>
            <h2 className="card-value">Best price</h2>
          </div>

          <div className="hero-card">
            <span className="card-label">Cancellation policy</span>
            <h2 className="card-value">Free & flexible</h2>
          </div>

          <div className="hero-card">
            <span className="card-label">Booking & credit card</span>
            <h2 className="card-value">No fees</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;