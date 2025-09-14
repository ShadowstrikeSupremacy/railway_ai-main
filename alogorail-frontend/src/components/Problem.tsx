import { motion, useScroll, useTransform } from "framer-motion";

const Problem = () => {
  const problems = [
    {
      title: "Rising Congestion",
      description: "Manual control systems limit operational efficiency and response times",
      stat: "68%",
      statLabel: "Trains Face Delays",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Mixed Traffic Complexity",
      description: "Express, suburban, and freight trains sharing scarce track infrastructure",
      stat: "12min",
      statLabel: "Average Delay",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Real-time Disturbances",
      description: "Dynamic conditions require rapid re-optimization and decision making",
      stat: "₹2.5k Cr",
      statLabel: "Annual Revenue Loss",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Railway Challenge
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Indian Railways faces unprecedented operational challenges that require intelligent solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${problem.color} transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} mb-6`}>
                    <div className="w-8 h-8 bg-white rounded-lg opacity-90" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">{problem.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{problem.description}</p>
                  
                  <div className="border-t border-white/10 pt-6">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${problem.color} bg-clip-text text-transparent mb-1`}>
                      {problem.stat}
                    </div>
                    <div className="text-gray-400 text-sm">{problem.statLabel}</div>
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
export default Problem;