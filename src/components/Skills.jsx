import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Coffee, FileCode, Atom, Box, Layout, Wind, Server, Zap, Database, 
  TestTube, Repeat, Github, GitBranch, Figma, Send, Terminal, Container, 
  Puzzle, Users, Brain, Shuffle 
} from 'lucide-react';

const SkillCategoryCard = ({ title, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="bg-white p-6 rounded-xl border border-retro-olive/20 hover:border-retro-olive hover:shadow-[4px_4px_0px_0px_rgba(74,93,69,1)] transition-all h-full"
  >
    <h3 className="font-bold text-xl text-retro-text mb-6 pb-2 border-b-2 border-retro-olive/10">{title}</h3>
    
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div key={skill.name} className="flex flex-col gap-2 p-2 rounded-lg hover:bg-retro-olive/5 transition-colors">
            <div className="flex items-center gap-2">
                {skill.icon && <skill.icon className="text-retro-olive" size={20} />}
                <span className="font-bold text-retro-text text-sm">{skill.name}</span>
            </div>
            
            <div className="w-full bg-retro-beige rounded-full h-1.5 overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: delay + (index * 0.1) }}
                    className="bg-retro-olive h-full rounded-full"
                />
            </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
    // Consolidated skills data
    const allSkills = [
        // Languages
        { name: "C++", level: 85, category: "Languages", icon: Code },
        { name: "Java", level: 85, category: "Languages", icon: Coffee },
        { name: "JavaScript", level: 90, category: "Languages", icon: FileCode },
        
        // Frontend Technology
        { name: "React.js", level: 90, category: "Frontend Technology", icon: Atom },
        { name: "TypeScript", level: 80, category: "Frontend Technology", icon: FileCode },
        { name: "Three.js", level: 75, category: "Frontend Technology", icon: Box },
        { name: "Bootstrap", level: 85, category: "Frontend Technology", icon: Layout },
        { name: "Tailwind CSS", level: 95, category: "Frontend Technology", icon: Wind },
        
        // Backend Technology
        { name: "Node.js", level: 85, category: "Backend Technology", icon: Server },
        { name: "Express.js", level: 80, category: "Backend Technology", icon: Zap },
        { name: "MySQL", level: 80, category: "Backend Technology", icon: Database },
        { name: "MongoDB", level: 80, category: "Backend Technology", icon: Database },
        
        // Tools/Platforms
        { name: "Jest", level: 70, category: "Tools & Platforms", icon: TestTube },
        { name: "CI/CD", level: 75, category: "Tools & Platforms", icon: Repeat },
        { name: "GitHub", level: 90, category: "Tools & Platforms", icon: Github },
        { name: "Git", level: 85, category: "Tools & Platforms", icon: GitBranch },
        { name: "Figma", level: 80, category: "Tools & Platforms", icon: Figma },
        { name: "Postman", level: 85, category: "Tools & Platforms", icon: Send },
        { name: "VS Code", level: 95, category: "Tools & Platforms", icon: Terminal },
        { name: "Docker", level: 65, category: "Tools & Platforms", icon: Container },
        
        // Soft Skills
        { name: "Problem Solving", level: 90, category: "Soft Skills", icon: Puzzle },
        { name: "Teamwork", level: 95, category: "Soft Skills", icon: Users },
        { name: "Analytical Thinking", level: 85, category: "Soft Skills", icon: Brain },
        { name: "Adaptability", level: 90, category: "Soft Skills", icon: Shuffle }
    ];

    // Group skills by category
    const categories = ["Languages", "Frontend Technology", "Backend Technology", "Tools & Platforms", "Soft Skills"];
    const groupedSkills = categories.map(category => ({
        title: category,
        skills: allSkills.filter(s => s.category === category)
    }));

  return (
    <div className="w-full p-8 bg-retro-cream h-full overflow-y-auto">
      <div className="text-center mb-12">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-retro-text mb-4 font-display"
        >
          Technical Arsenal
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto font-serif"
        >
          A comprehensive overview of my technical skills and proficiency levels.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-12">
        {groupedSkills.map((group, index) => (
          <SkillCategoryCard
            key={group.title}
            title={group.title}
            skills={group.skills}
            delay={index * 0.1}
          />
        ))}
      </div>
       {/* Full-width card for Soft Skills if odd number, or just let it flow in grid */}
    </div>
  );
};
export default Skills;
