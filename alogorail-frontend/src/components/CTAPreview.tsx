import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState, useEffect } from 'react';
const Dashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  
  const metrics = [
    { label: "Punctuality", value: "87.16%", change: "+2.3%", trend: "up" },
    { label: "Throughput", value: "145", change: "+12", trend: "up" },
    { label: "Average Delay", value: "4.67min", change: "-0.8min", trend: "down" },
    { label: "Track Utilization", value: "79.81%", change: "+5.2%", trend: "up" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <section id="dashboard" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Live Operations Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time monitoring and intelligent control of railway operations
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Railway Traffic Control</h3>
              <p className="text-gray-400">Delhi Junction - System Online</p>
            </div>
            <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Live</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activeMetric === index 
                    ? 'bg-blue-500/10 border-blue-500/30' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-gray-400 text-sm mb-2">{metric.label}</div>
                <div className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Button */}
          <div className="text-center">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 122, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Access Full Dashboard
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Dashboard;