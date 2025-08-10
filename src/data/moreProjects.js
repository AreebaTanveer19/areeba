import project1 from '../assets/skincare.png';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import quote from '../assets/quote.png';
import blogImg from '../assets/blog.png';
import chauffeurImg from '../assets/chauffeur.png';

export const moreProjects = [
  {
      title: 'Chauffeur Booking System',
      description: 'A full-stack MERN application for booking professional chauffeur services with real-time tracking. Features include user authentication, real-time location tracking with Google Maps, booking management, and payment integration. The application provides a seamless experience for users to book and track their chauffeur services in real-time.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Maps API', 'JWT', 'REST API'],
      image: chauffeurImg,
      github: 'https://github.com/AreebaTanveer19/taxi-booking-website',
      liveDemo: 'https://www.horizonchauffeurs.com.au/',
    },
  {
    title: 'AI-Powered Blog Summariser',
    description: 'A smart, full-stack tool that scrapes blogs using n8n, generates AI summaries, translates them to Urdu, and displays them in a modern Next.js web app. Summaries are stored in Supabase, and full content is archived in MongoDB. Features Tailwind CSS and Framer Motion for a beautiful UI.',
    stack: ['n8n', 'OpenAI', 'Google Translate API', 'Supabase', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: blogImg,
    github: 'https://github.com/AreebaTanveer19/AI-blog-summarizer',
    liveDemo: 'https://ai-blog-summarizer-ruddy.vercel.app/',
  },
  
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
    title: 'Quote Generator',
    description: 'A modern quote generator web app built with Next.js, styled using shadcn/ui and DaisyUI. Users can generate random inspirational quotes with a clean, responsive interface.',
    stack: ['Next.js', 'shadcn/ui', 'DaisyUI'],
    image: quote,
    github: 'https://github.com/AreebaTanveer19/Nexium_areeba_tanveer/tree/main/internship', 
    liveDemo: 'https://nexium-areeba-tanveer-bjtf.vercel.app/', 
  },
 
]; 