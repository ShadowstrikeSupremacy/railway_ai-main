import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
        style={{ opacity }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-white">Maximizing Railway</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            Throughput
          </span>
          <span className="block text-white">with AI-Powered Precision</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          AlgoRail revolutionizes Indian Railways through intelligent train scheduling, 
          congestion reduction, and enhanced punctuality using advanced MILP, GA, ACO, and RL algorithms.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 122, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Dashboard
          </motion.button>
          
          <motion.button
            className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">92%</div>
            <div className="text-gray-400 text-sm">Average Punctuality</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">-15min</div>
            <div className="text-gray-400 text-sm">Delay Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">+25%</div>
            <div className="text-gray-400 text-sm">Throughput Increase</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;