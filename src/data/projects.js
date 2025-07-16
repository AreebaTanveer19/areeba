import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import blogImg from '../assets/blog.png';

export const projects = [
  {
    title: 'E-commerce skincare Website',
    description: 'A MERN stack e-commerce platform featuring user authentication with JWT, product listings, shopping cart, secure checkout, and RESTful API integration. Built using React for the frontend, Express and Node.js for the backend, and MongoDB for the database.',
    stack: ['React', 'Express', 'MongoDB', 'JWT', 'Node.js', 'HTML', 'CSS'],
    image: project1,
    github: 'https://github.com/AreebaTanveer19/skincare-website',
    liveDemo: 'https://areebatanveer19.github.io/skincare-website/',
  },
  {
    title: 'Diabetes Prediction Model',
    description: 'Developed a machine learning-based web app to predict the likelihood of diabetes using user health metrics and classification algorithms.',
    stack: ['Python', 'Numpy' ,'Scikit-learn'],
    image: project2,
    github: 'https://github.com/AreebaTanveer19/Diabetes-Prediction',
    liveDemo: 'https://github.com/AreebaTanveer19/Diabetes-Prediction',
  },
  {
    title: 'Pharmacy Management System',
    description: 'Created a full-stack pharmacy management application for inventory tracking, sales, and prescription handling with secure admin access.',
    stack: ['PHP','MYSQL', 'HTML', 'CSS', 'JS'],
    image: project3,
    github: 'https://github.com/AreebaTanveer19/Pharmacy-Management-System',
    liveDemo: 'https://github.com/AreebaTanveer19/Pharmacy-Management-System',
  },
  {
    title: 'AI-Powered Blog Summariser',
    description: 'A smart, full-stack tool that scrapes blogs using n8n, generates AI summaries, translates them to Urdu, and displays them in a modern Next.js web app. Summaries are stored in Supabase, and full content is archived in MongoDB. Features Tailwind CSS and Framer Motion for a beautiful UI.',
    stack: ['n8n', 'Groq', 'Google Translate API', 'Supabase', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: blogImg,
    github: 'https://github.com/AreebaTanveer19/AI-blog-summarizer',
    liveDemo: 'https://ai-blog-summarizer-ruddy.vercel.app/',
  },
]; 