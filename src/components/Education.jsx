import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const EducationCard = ({ degree, institution, year, score, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-6 rounded-xl border border-retro-olive/10 hover:border-retro-olive hover:shadow-md transition-all h-full flex flex-col justify-between"
  >
    <div>
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-retro-olive/10 rounded-lg text-retro-olive">
                <GraduationCap size={24} />
            </div>
            <span className="text-sm font-bold text-gray-500 bg-retro-beige px-3 py-1 rounded-full">
                {year}
            </span>
        </div>
        
        <h3 className="text-xl font-bold text-retro-text mb-2 font-display">{degree}</h3>
        <p className="text-retro-olive font-medium mb-4">{institution}</p>
    </div>
    
    <div className="mt-auto pt-4 border-t border-retro-olive/10">
        <span className="text-sm text-gray-600 font-bold">
            Grade: <span className="text-retro-text">{score}</span>
        </span>
    </div>
  </motion.div>
);

const Education = () => {
    const education = [
        {
            degree: "Bachelor of Technology - Computer Science and Engineering",
            institution: "Lovely Professional University",
            year: "Aug 2024 - Present",
            score: "CGPA: 6.94"
        },
        {
            degree: "Diploma in Computer Engineering",
            institution: "Vidhalankar Polytechnic",
            year: "Aug 2021 - July 2024",
            score: "80.29%"
        },
        {
            degree: "Matriculation",
            institution: "Shri Gauridutt Mittal Vidyalaya",
            year: "Apr 2020 - Mar 2021",
            score: "74.20%"
        }
    ];

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {education.map((edu, index) => (
        <EducationCard
          key={index}
          {...edu}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};

export default Education;
