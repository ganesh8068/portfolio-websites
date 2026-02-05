import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ title, description, tech, delay, type, githubLink, liveLink }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative bg-white rounded-2xl overflow-hidden border-2 border-retro-olive/10 hover:border-retro-olive hover:shadow-[4px_4px_0px_0px_rgba(74,93,69,1)] transition-all"
  >
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
            <span className="text-retro-olive font-bold text-xs tracking-wider mb-2 block uppercase">{type}</span>
            <h3 className="text-2xl font-bold text-retro-text group-hover:text-retro-orange transition-colors font-display">{title}</h3>
        </div>
        <div className="flex gap-3">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-retro-olive/10 rounded-full hover:bg-retro-olive text-retro-olive hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-retro-olive/10 rounded-full hover:bg-retro-olive text-retro-olive hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed font-serif">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-retro-beige text-xs font-bold text-retro-text rounded-full border border-retro-olive/20 flex items-center gap-1">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Optimizer AI",
      type: "Full Stack",
      description: "Developed Web app that analyzes uploaded resumes and LinkedIn exports with Google Gemini to produce ATS scores, rewritten resume content, STAR bullets, keywords, and LinkedIn optimizations.",
      tech: ["React.js", "Typescript", "Node.js", "Express.js", "Firebase", "JWT", "RESTful APIs", "CI/CD", "Jest", "Google Gemini", "GitHub"],
      githubLink: "https://github.com/ganesh8068/Optimizer-AI",
      liveLink: "https://optimizer-ai-k0hi.onrender.com"
    },
    {
      title: "Student Forum",
      type: "MERN Stack",
      description: "Optimized Student Forum is a student-focused discussion app where users create and join conversations, share study materials, and upvote helpful posts. Built with a Node.js/Express backend and a React + Vite frontend, it emphasizes simple UX, secure authentication, and easy resource discovery.",
      tech: ["React.js", "Typescript", "Node.js", "Express.js", "Firebase", "JWT", "RESTful APIs", "CI/CD", "Jest", "Google Gemini", "GitHub"],
      githubLink: "https://github.com/ganesh8068/Student-Forum",
      liveLink: "https://student-forum-f.onrender.com"
    },
    {
      title: "Crypto Hunter – Real-Time Cryptocurrency Tracker",
      type: "Full Stack",
      description: "Improved a cryptocurrency tracking system that allows users to monitor real-time market prices, save favorite cryptocurrencies, and access news updates. Utilised a robust tech stack to implement front-end features and secure backend services with JWT authentication.",
      tech: ["React.js", "JavaScript", "Node.js", "Express.js", "Firebase", "JWT", "RESTful APIs", "CI/CD", "GitHub"],
      githubLink: "https://github.com/ganesh8068/Crypto_Hunter",
      liveLink: "#"
    },
    {
      title: "Vingo – Food Delivery Web-App",
      type: "Full Stack",
      description: "Developed a full-stack food delivery platform featuring real-time order tracking, multi-role authentication (admin, restaurant, delivery partner, user), and location-based services. Built performance-optimized APIs That achieved up to 40% faster response times through intelligent caching and query optimization.",
      tech: ["React.js", "Redux", "JavaScript", "Node.js", "Express.js", "Firebase", "JWT", "RESTful APIs", "GitHub"],
      githubLink: "https://github.com/ganesh8068/Vingo",
      liveLink: "#"
    },
    {
      title: "Scroll Magic – Interactive Scrolling Website",
      type: "UI Development",
      description: "Designed an interactive scrolling website to enhance user engagement through smooth animations and transitions, creating an immersive experience. Focused on optimizing performance to ensure fast load times and seamless interactions.",
      tech: ["HTML5", "CSS3", "JavaScript", "Three.js", "React.js Animations", "GitHub"],
      githubLink: "https://github.com/ganesh8068",
      liveLink: "#"
    }
  ];

  return (
    <div className="w-full p-8 bg-retro-cream h-full overflow-y-auto">
      <div className="text-center mb-12">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-retro-text mb-4 font-display"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto font-serif"
        >
          Showcase of my recent work in web development and software engineering.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
