import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceCard = ({ company, role, period, description, tech, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 md:pl-0"
  >
    {/* Timeline Line */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />
    
    {/* Timeline Dot */}
    <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 bg-blue-500 rounded-full md:-translate-x-[5.5px] border border-slate-900" />

    <div className={`md:flex justify-between items-start gap-10 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 mb-8 md:mb-0">
         <div className={`flex flex-col ${index % 2 === 0 && 'md:items-start'} ${index % 2 !== 0 && 'md:items-end'}`}>
            <div className={`bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all w-full ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{role}</h3>
                <span className="text-sm text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded flex items-center gap-1">
                   <Calendar size={12} />
                   {period}
                </span>
              </div>
              <h4 className="text-lg text-blue-300 mb-4 flex items-center gap-2">
                <Briefcase size={16} />
                {company}
              </h4>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
         </div>
      </div>
      <div className="hidden md:block md:w-1/2" />
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      company: "CipherSchool",
      role: "Summer Training",
      period: "June 2025 - July 2025",
      description: "Learned core Data Structures and Algorithms, solved 100+ problems, and improved code efficiency and problem-solving skills.",
      tech: ["Java", "DSA", "OOP", "Git", "GitHub"]
    },
    {
      company: "Hertz Technology Pvt. Ltd.",
      role: "Summer Internship",
      period: "June 2024 - Aug 2024",
      description: "Developed and optimized responsive user interfaces using React.js, Bootstrap, and Tailwind CSS, resulting in a 25% improvement in load time and 30% increase in mobile responsiveness.",
      tech: ["React.js", "Three.js", "JavaScript", "Bootstrap", "Tailwind CSS"]
    },
    {
      company: "ElightLabs",
      role: "Web Developer",
      period: "April 2023 - July 2023",
      description: "Enhanced application responsiveness and cross-browser support, contributing to a 15% increase in session duration and contributor to a platform that saw a 20% increase in daily active users.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Professional Experience
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
        >
          My journey in the tech industry, including internships and training.
        </motion.p>
      </div>

      <div className="space-y-8 md:space-y-0 relative">
         {/* Vertical line for mobile - hidden on md up because component handles it */}
         <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-slate-800" />
         
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            index={index}
            {...exp}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
