import React from 'react';
import { motion } from 'framer-motion';

const DesktopIcon = ({ icon: Icon, label, onClick, variant = 'folder' }) => {
  const isApp = variant === 'app';
  
  return (
    <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="flex flex-col items-center gap-2 p-2 rounded-lg cursor-pointer w-24 text-center group"
    >
      {isApp ? (
         // App Style (Square, Dark Olive)
         <div className="w-16 h-16 bg-[#4A5D45] rounded-xl border-2 border-[#3a4936] flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition-transform relative overflow-hidden">
             <div className="absolute inset-0 border-2 border-white/20 rounded-xl"></div>
             <span className="font-mono text-3xl font-bold text-[#F2F0E9]">h</span>
         </div>
      ) : (
         // Folder Style (Cream/Yellow folder look)
         <div className="w-16 h-14 bg-[#F0E68C] relative rounded-md border-2 border-[#DAA520] shadow-md group-hover:-translate-y-1 transition-transform flex items-center justify-center mt-2">
            {/* Folder Tab */}
            <div className="absolute -top-3 left-0 w-6 h-4 bg-[#F0E68C] rounded-t-md border-t-2 border-l-2 border-r-2 border-[#DAA520]"></div>
            {/* Blue accent on folder */}
            <div className="absolute top-2 left-2 w-8 h-5 bg-blue-400/80 rounded-sm border border-blue-500/50"></div>
         </div>
      )}
      
      <span className="text-retro-text font-bold text-sm bg-retro-cream/80 px-2 rounded-md border border-retro-olive/20 backdrop-blur-sm shadow-sm">
        {label}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;
