import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, PenTool, Terminal } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-slate-800 transition-all group"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
        <Icon className="text-blue-400 group-hover:text-blue-300" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-white/5 hover:border-blue-500/30 hover:text-white transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["C++", "Java", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React.js", "Three.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express.js", "MySQL", "MongoDB"]
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Jest", "CI/CD"]
    },
    {
      title: "Soft Skills",
      icon: PenTool,
      skills: ["Problem Solving", "Teamwork", "Analytical Thinking", "Adaptability"]
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
          Technical Skills
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
        >
          A comprehensive overview of my technical expertise and the technologies I work with.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <SkillCard
            key={category.title}
            {...category}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
