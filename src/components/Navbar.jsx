import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
             Ganesh.dev
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="hidden md:flex gap-4">
                <a href="https://github.com/ganesh8068/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <Github size={20} />
                </a>
                <a href="http://www.linkedin.com/in/ganesh2707" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <Linkedin size={20} />
                </a>
                <a href="mailto:ganeshlokhande2707@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    <Mail size={20} />
                </a>
            </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {menuItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-gray-800"
          >
            <ul className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="block py-2 text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
                <div className="flex gap-4 pt-4 border-t border-gray-800">
                    <a href="https://github.com/ganesh8068/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <Github size={20} />
                    </a>
                    <a href="http://www.linkedin.com/in/ganesh2707" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <Linkedin size={20} />
                    </a>
                     <a href="mailto:ganeshlokhande2707@gmail.com" className="text-gray-300 hover:text-white">
                        <Mail size={20} />
                    </a>
                </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
