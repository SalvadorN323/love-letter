import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg-heart" />
      <img
        className="hero-image"
        src="https://preview.redd.it/halo-4-was-the-most-emotional-fight-me-v0-tkajslmbet7d1.jpeg?width=1080&crop=smart&auto=webp&s=231bdb2f82c55691e26c380e9415109b8a90b3aa"
        alt="A touching moment from Halo 4"
      />
      <h1 className="hero-headline">To My Dearest</h1>
      <p className="hero-subheadline">A letter of love, devotion, and cherished memories<br/>crafted just for you.</p>
    </section>
  );
} 