import React from 'react';
import { motion } from 'framer-motion';

// Define colors locally for the logo component
const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
};

const AppleLogo = () => {
  return (
    <motion.div 
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative w-10 h-10">
        <motion.svg
          viewBox="0 0 40 40"
          className="w-full h-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
          </defs>
          <rect 
            x="8" 
            y="12" 
            width="24" 
            height="16" 
            rx="4" 
            fill="none" 
            stroke="url(#logoGradient)" 
            strokeWidth="2"
          />
          <circle cx="14" cy="32" r="3" fill="url(#logoGradient)" />
          <circle cx="26" cy="32" r="3" fill="url(#logoGradient)" />
        </motion.svg>
      </div>
      <span className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        AlgoRail
      </span>
    </motion.div>
  );
};

export default AppleLogo;