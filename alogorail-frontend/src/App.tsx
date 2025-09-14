import React from 'react';
import Navigation from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Algorithms from './components/Algorithms';
import Dashboard from './components/CTAPreview'; // This seems to be your dashboard preview
import CTA from './components/CTA'; // You'll need to create this
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Features />
      <Algorithms />
      <Dashboard />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;