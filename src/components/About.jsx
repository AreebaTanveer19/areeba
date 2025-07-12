import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import profilePic from '../assets/profile.jpeg';
import './About.css';

const about = {
  name: 'Areeba Tanveer',
  education: 'BSc Computer Science, XYZ University',
  cgpa: 3.7,
  bio: `I'm a Computer Science student passionate about React.js, Spring Boot, and Machine Learning. I love building impactful web apps and exploring new tech.`,
  highlights: ['React.js', 'Artificial Intelligence', 'Machine Learning'],
  experience: 2,
  projects: 8,
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-img"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img src={profilePic} alt={about.name} />
      </motion.div>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I'm a <span className="highlight">Computer Science</span> student passionate about{' '}
          {about.highlights.map((kw, i) => (
            <span key={kw} className="highlight">{kw}{i < about.highlights.length - 1 ? ', ' : ''}</span>
          ))}
          . I love building impactful web apps and exploring new tech.
        </p>
        <div className="about-counters">
          <AnimatedCounter label="Years Experience" value={about.experience} />
          <AnimatedCounter label="Projects" value={about.projects} />
          <AnimatedCounter label="CGPA" value={about.cgpa} decimals={1} />
        </div>
      </motion.div>
    </section>
  );
};

export default About; 