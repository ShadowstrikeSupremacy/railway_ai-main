import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
          
            <p className="text-gray-400 mt-4 max-w-md">
              Revolutionizing railway operations through artificial intelligence and advanced optimization algorithms.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#algorithms" className="block text-gray-400 hover:text-white transition-colors">Algorithms</a>
              <a href="#dashboard" className="block text-gray-400 hover:text-white transition-colors">Dashboard</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {currentYear} AlgoRail. Built for Smart India Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;