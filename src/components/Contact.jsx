import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    // TODO: Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_nfsxvnn'; // e.g., 'service_123abc'
    const TEMPLATE_ID = 'template_nnq0jqj'; // e.g., 'template_xyz'
    const USER_ID = 'VfpkU_96I4h1I3WNT'; // e.g., 'user_ABC123' (Public Key)

    // The keys in formData (name, email, message) must match your EmailJS template variables
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      USER_ID
    )
    .then(() => {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    }, () => {
        setFormStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      <div className="contact-container">
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="submit-btn" disabled={formStatus === 'Sending...'}>
            {formStatus === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </motion.form>
        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/AreebaTanveer19" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/areeba-tanveer-086b5625a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:areeba.mughal263@gmail.com"><FaEnvelope /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 