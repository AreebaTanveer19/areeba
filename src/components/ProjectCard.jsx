import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, stack, image, github, liveDemo } = project;

  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="project-card__image-container">
        <img src={image} alt={title} className="project-card__image" />
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__stack">
          {stack.map((tech) => (
            <span key={tech} className="project-card__stack-item">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
            <FaLink />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 