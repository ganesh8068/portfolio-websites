import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const EducationCard = ({ school, degree, year, score, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-4 mb-8"
  >
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
        <GraduationCap size={20} />
      </div>
      <div className="w-0.5 h-full bg-slate-800 my-2" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white">{school}</h3>
      <p className="text-blue-400 font-medium">{degree}</p>
      <div className="flex gap-4 text-sm text-gray-500 mt-1">
        <span>{year}</span>
        <span>•</span>
        <span>{score}</span>
      </div>
    </div>
  </motion.div>
);

const CertificateCard = ({ title, issuer, date, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-slate-800/30 p-4 rounded-lg border border-white/5 flex items-center gap-4 hover:border-purple-500/30 transition-colors"
  >
    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
      <Award size={20} />
    </div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      <p className="text-sm text-gray-400">{issuer} • {date}</p>
    </div>
  </motion.div>
);

const Education = () => {
  const education = [
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology - CSE",
      year: "Aug 2024 - Present",
      score: "CGPA: 6.94"
    },
    {
      school: "Vidhalankar Polytechnic",
      degree: "Diploma in Computer Engineering",
      year: "Aug 2021 - July 2024",
      score: "Percentage: 80.29%"
    },
    {
      school: "Shri Gauridutt Mittal Vidyalaya",
      degree: "Matriculation",
      year: "April 2020 - March 2021",
      score: "Percentage: 74.20%"
    }
  ];

  const certificates = [
    {
      title: "Introduction to Internet of Things",
      issuer: "NPTL",
      date: "Oct 2025"
    },
    {
      title: "Product Management",
      issuer: "GeeksforGeeks",
      date: "June 2025"
    },
    {
      title: "ChatGPT Prompt Engineering",
      issuer: "OpenAI",
      date: "April 2025"
    },
    {
      title: "Computer Communications",
      issuer: "Coursera",
      date: "Aug 2024"
    }
  ];

  return (
    <div className="w-full grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            Education
        </h3>
        <div>
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} delay={index * 0.1} />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            Certifications
        </h3>
        <div className="grid gap-4">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
