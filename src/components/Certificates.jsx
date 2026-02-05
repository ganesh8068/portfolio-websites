import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const CertificateCard = ({ title, issuer, date, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-6 rounded-xl border border-retro-olive/10 hover:border-retro-olive hover:shadow-md transition-all group flex flex-col justify-between h-full"
  >
    <div>
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-retro-olive/10 rounded-lg text-retro-olive group-hover:bg-retro-olive group-hover:text-white transition-colors">
                <Award size={24} />
            </div>
            <span className="text-sm font-bold text-gray-500 bg-retro-beige px-3 py-1 rounded-full">
                {date}
            </span>
        </div>
        
        <h3 className="text-lg font-bold text-retro-text mb-2 font-display leading-tight">{title}</h3>
        <p className="text-retro-olive font-medium mb-4">{issuer}</p>
    </div>
    
    <div className="mt-auto pt-4 border-t border-retro-olive/10">
        <a 
            href={link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-retro-olive hover:text-retro-orange font-bold text-sm transition-colors"
        >
            <span>View Certificate</span>
            <ExternalLink size={14} />
        </a>
    </div>
  </motion.div>
);

const Certificates = () => {
    const certificates = [
        {
            title: "Introduction to Internet of Things",
            issuer: "NPTEL",
            date: "October 2025",
            link: "https://drive.google.com/file/d/1rOi7Z1sTs164I_wxY_OSVrVG9w7ILvW1/view"
        },
        {
            title: "Product Management Online Course (8 weeks)",
            issuer: "GeeksforGeeks",
            date: "June 2025",
            link: "https://www.geeksforgeeks.org/certificate/e7484c0a7cff705f50ff7e603ed41cd2"
        },
        {
            title: "ChatGPT Prompt Engineering for Developers",
            issuer: "OpenAI",
            date: "April 2025",
            link: "https://learn.deeplearning.ai/accomplishments/31f3a236-397b-430c-8e67-a56cbdcfba6c?usp=sharing"
        },
        {
            title: "Computer Communications Specialisation",
            issuer: "Coursera",
            date: "August 2024",
            link: "https://www.coursera.org/account/accomplishments/specialization/6JQDWGHICFD9"
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
          Certifications
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto font-serif"
        >
          Continuous learning and professional development achievements.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            {...cert}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
