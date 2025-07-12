import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="projects-view-more">
        <a
          href="#/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="view-more-btn"
        >
          View more Projects <FaExternalLinkAlt style={{ marginLeft: '0.5em' }} />
        </a>
      </div>
    </section>
  );
};

export default Projects; 