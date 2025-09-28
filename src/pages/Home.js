import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ Navbar at top
import "../styles.css";

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Gifts that say it like you mean it.</h1>
          <p className="hero-subtitle">
            Find the perfect gift for every occasion, beautifully wrapped with love.
          </p>
          <Link to="/products" className="shop-link">
            <button className="shop-button">Shop Now</button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>We make gifting simple, fast, and meaningful.</p>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🎁</div>
            <h3>Wide Variety</h3>
            <p>From flowers to gadgets, we've got gifts for every occasion.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>We ensure your gifts reach on time, with love and care.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Personalized</h3>
            <p>Add a personal touch with custom messages and wrapping.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
