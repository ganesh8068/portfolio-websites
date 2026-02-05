import React from 'react';
import { Linkedin, Github, Dribbble, Twitter } from 'lucide-react';

const Taskbar = () => {
    const socialLinks = [
        { icon: Linkedin, href: "http://www.linkedin.com/in/ganesh2707", bg: "bg-blue-400" },
        { icon: Github, href: "https://github.com/ganesh8068", bg: "bg-gray-800" },
        { icon: Dribbble, href: "#", bg: "bg-blue-600" },
        { icon: Twitter, href: "#", bg: "bg-pink-400" },
    ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 z-50 flex items-center justify-center px-4 border-t-4 border-green-800" style={{ backgroundColor: "#818564" }}>
        <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
                <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${link.bg} rounded-lg border-2 border-retro-cream flex items-center justify-center text-white shadow-lg hover:-translate-y-1 transition-transform`}
                >
                    <link.icon size={20} />
                </a>
            ))}
        </div>
    </div>
  );
};

export default Taskbar;
