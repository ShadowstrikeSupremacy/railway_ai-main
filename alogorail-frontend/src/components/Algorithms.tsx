import { motion, useScroll, useTransform } from "framer-motion";

const Algorithms = () => {
  const algorithms = [
    {
      name: "MILP",
      fullName: "Mixed Integer Linear Programming",
      description: "Optimal resource allocation with mathematical precision for complex railway networks",
      color: "from-blue-500 to-cyan-500",
      accuracy: "99.2%"
    },
    {
      name: "GA",
      fullName: "Genetic Algorithm",
      description: "Evolutionary optimization discovering optimal schedules through adaptive learning",
      color: "from-green-500 to-emerald-500",
      accuracy: "94.7%"
    },
    {
      name: "ACO",
      fullName: "Ant Colony Optimization",
      description: "Bio-inspired pathfinding for discovering optimal routes through collective intelligence",
      color: "from-orange-500 to-yellow-500",
      accuracy: "91.3%"
    },
    {
      name: "RL",
      fullName: "Reinforcement Learning",
      description: "Adaptive decision-making system continuously improving through environmental interaction",
      color: "from-purple-500 to-pink-500",
      accuracy: "96.8%"
    }
  ];

  return (
    <section id="algorithms" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced AI Algorithms
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by cutting-edge optimization techniques for superior railway performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {algorithms.map((algo, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center h-full relative overflow-hidden group-hover:border-opacity-50 transition-all duration-500">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${algo.color} transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${algo.color} mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {algo.name}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{algo.fullName}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{algo.description}</p>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${algo.color} bg-clip-text text-transparent mb-1`}>
                      {algo.accuracy}
                    </div>
                    <div className="text-gray-400 text-xs">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Algorithms;