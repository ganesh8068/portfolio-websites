import React from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';

const Window = ({ id, title, children, onClose, onMinimize, isActive, onFocus, defaultPosition = { x: 0, y: 0 }, isClosable = true, centered = false }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onMouseDown={() => onFocus(id)}
      className={`absolute w-[95vw] md:w-[1200px] max-w-[98vw] bg-retro-cream border-2 rounded-lg shadow-xl overflow-hidden flex flex-col ${isActive ? 'z-50' : 'z-10'}`}
      style={{ 
        top: defaultPosition.y, 
        left: defaultPosition.x,
        transform: centered ? 'translate(-50%, -50%)' : 'none',
        maxHeight: '85vh',
        backgroundColor: "#f2f2f0",
        minHeight: '600px',
        // Responsive height adjustments handled via max-height, but specific overrides can be added here if needed
      }}
    >
      {/* Title Bar */}
      <div className="text-retro-cream px-4 py-2 flex items-center justify-between cursor-grab active:cursor-grabbing font-mono border-b-2" style={{ backgroundColor: "#818564" }} >
        <span className="font-bold flex items-center gap-2 text-lg tracking-wide">
            C:\GANESH\portfolio
        </span>
        <div className="flex items-center gap-2">
            {isClosable && (
                <button onClick={(e) => { e.stopPropagation(); onClose(id); }} className="bg-retro-pink hover:bg-red-400 text-white p-1 rounded-md border border-white/20 transition-colors shadow-sm">
                    <X size={16} strokeWidth={3} />
                </button>
            )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-retro-cream text-retro-text scrollbar-thin scrollbar-thumb-retro-olive/20 scrollbar-track-transparent">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
