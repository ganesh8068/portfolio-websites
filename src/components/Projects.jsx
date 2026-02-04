import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ title, description, tech, delay, type }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
            <span className="text-blue-400 text-sm font-mono mb-2 block">{type}</span>
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{title}</h3>
        </div>
        <div className="flex gap-3">
          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <p className="text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-slate-900/50 text-xs font-medium text-gray-300 rounded-full border border-white/5 flex items-center gap-1">
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
      title: "Crypto Hunter",
      type: "Full Stack",
      description: "A real-time cryptocurrency tracking system allowing users to monitor market prices, save favorites, and access news. Features secure backend services with JWT authentication.",
      tech: ["React.js", "Node.js", "Express.js", "Firebase", "JWT", "Rest API"]
    },
    {
      title: "Vingo - Food Delivery Web-App",
      type: "Full Stack",
      description: "Full-stack food delivery platform featuring real-time order tracking and multi-role authentication. achieved up to 40% faster response times through intelligent caching.",
      tech: ["React.js", "Redux", "Node.js", "Firebase", "JWT"]
    },
    {
      title: "Scroll Magic",
      type: "UI Development",
      description: "Interactive scrolling website designed to enhance user engagement through smooth animations and transitions, creating an immersive experience with optimized performance.",
      tech: ["HTML5", "CSS3", "JavaScript", "Three.js", "React Animations"]
    }
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
        >
          Showcase of my recent work in web development and software engineering.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
