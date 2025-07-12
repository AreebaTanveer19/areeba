import React from 'react';
import { motion } from 'framer-motion';
import { FaFolderOpen, FaPaperPlane } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const handleHireMeClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background animation placeholder */}
      <div className="hero-bg-animation">
        {/* TODO: Add Lottie or particles animation here */}
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>
          Hi, I'm <span className="hero-name">Areeba Tanveer</span>,<br />
          a passionate Computer Science student and Developer.
        </h1>
        <p className="hero-intro">
          I specialize in building modern web applications, exploring machine learning, and crafting seamless digital experiences. Always eager to learn, collaborate, and create impactful solutions.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="hero-btn hero-btn-primary">
            <FaFolderOpen /> View Projects
          </a>
          <a href="#contact" className="hero-btn hero-btn-outline" onClick={handleHireMeClick}>
            <FaPaperPlane /> Hire Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 