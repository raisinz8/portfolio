import React from 'react';
import '../assets/styles/header.css'; 

const Header = () => {
  return (
    <header className="hero-section">
      <div className="container">
        <h1 className="name">Rian Gillard</h1>
        <h2 className="title">Full Stack Developer & Aspiring UI/UX Designer</h2>
        <p className="tagline">Crafting seamless digital experiences for your business.</p>
        <p className="short-bio">
          I’m Rian Gillard, a UI/UX designer and full stack developer passionate about creating user-centric digital solutions.
        </p>
        <a href="#portfolio" className="cta-button">View My Work</a>
      </div>
    </header>
  );
};

export default Header;
