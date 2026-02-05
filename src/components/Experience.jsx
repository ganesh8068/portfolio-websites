import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceCard = ({ role, company, period, description, type, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-8 pb-12 border-l-2 border-retro-olive/20 last:pb-0"
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-retro-olive border-4 border-retro-cream" />
    
    <div className="bg-white p-6 rounded-xl border border-retro-olive/10 hover:border-retro-olive hover:shadow-lg transition-all group">
      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-retro-text group-hover:text-retro-olive transition-colors">{role}</h3>
          <p className="text-retro-olive font-medium">{company}</p>
        </div>
        <div className="text-right">
          <span className="inline-block px-3 py-1 bg-retro-olive/10 text-retro-olive text-sm font-bold rounded-full mb-1">
            {period}
          </span>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">{type}</p>
        </div>
      </div>
      
      <p className="text-gray-600 leading-relaxed font-serif">
        {description}
      </p>
    </div>
  </motion.div>
);

const Experience = () => {
    const experiences = [
        {
          role: "Summer Training",
          company: "CipherSchool",
          period: "June 2025 - July 2025",
          type: "Internship",
          description: "Learned core Data Structures and Algorithms, solved 100+ problems, and improved code efficiency and problem-solving skills. Tech stacks used: Java, DSA, OOP, Git, GitHub"
        },
        {
          role: "Summer Internship",
          company: "Hertz Technology Pvt. Ltd.",
          period: "June 2024 - Aug 2024",
          type: "Internship",
          description: "Developed and optimized responsive user interfaces using React.js, Bootstrap, and Tailwind CSS, resulting in a 25% improvement in load time. Tech stacks used: React.js, Three.js, JavaScript, Bootstrap, Tailwind CSS"
        },
        {
          role: "Web Developer",
          company: "ElightLabs",
          period: "Apr 2023 - July 2023",
          type: "Internship",
          description: "Enhanced application responsiveness and cross-browser support, contributing to a 15% increase in session duration. Tech stacks used: HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, GitHub"
        }
    ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            {...exp}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
