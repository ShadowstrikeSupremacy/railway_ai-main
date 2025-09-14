import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'problem', label: 'Problem' },
    { id: 'features', label: 'Features' },
    { id: 'algorithms', label: 'Algorithms' },
    { id: 'dashboard', label: 'Dashboard' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveSection(item.id)}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  layoutId="activeNav"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 122, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Launch Dashboard
        </motion.button>
      </div>
    </motion.nav>
  );
};

// ADD THIS LINE - Default export
export default Navigation;