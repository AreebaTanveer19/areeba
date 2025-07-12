import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import './Skills.css';

const Skills = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1, y: -5 }}
            viewport={{ once: true }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 