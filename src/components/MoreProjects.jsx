import React from 'react';
import { moreProjects } from '../data/moreProjects';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';

const MoreProjects = () => {
  return (
    <>
      <section className="projects-section">
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All Projects
        </motion.h2>
        <div className="projects-grid">
          {moreProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0 1.5rem 0' }}>
          <Link
            to="/"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 600,
              fontSize: '1.1rem',
              border: '2px solid var(--color-primary)',
              borderRadius: '2rem',
              padding: '0.7rem 1.7rem',
              textDecoration: 'none',
              background: 'var(--color-white)',
              boxShadow: '0 2px 12px 0 rgba(108, 99, 255, 0.08)',
              transition: 'background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={e => { e.target.style.background = 'var(--color-primary)'; e.target.style.color = 'var(--color-white)'; }}
            onMouseOut={e => { e.target.style.background = 'var(--color-white)'; e.target.style.color = 'var(--color-primary)'; }}
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default MoreProjects; 