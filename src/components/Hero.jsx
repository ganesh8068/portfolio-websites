import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto md:mx-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-blue-400 font-medium tracking-wider mb-2 block">
            HELLO THERE, I'M
          </span>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
            Ganesh Lokhande.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-lg"
        >
          A passionate <span className="text-white font-semibold">Full Stack Developer</span> and <span className="text-white font-semibold">C++ Enthusiast</span> based in India. 
          I build accessible, pixel-perfect, and performant web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all active:scale-95"
          >
            Check out my work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:ganeshlokhande2707@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-white hover:text-white transition-all active:scale-95"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
        
        <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="mt-12 flex gap-6 text-gray-400"
        >
            <a href="https://github.com/ganesh8068/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={24} />
            </a>
            <a href="http://www.linkedin.com/in/ganesh2707" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={24} />
            </a>
        </motion.div>
      </div>
      
      {/* Abstract decorative element on the right (desktop only) */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full">
         {/* Could put a 3D model or illustration here later */}
      </div>
    </div>
  );
};

export default Hero;
