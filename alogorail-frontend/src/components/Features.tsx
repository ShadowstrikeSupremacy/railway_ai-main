import { motion, useScroll, useTransform } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Real-time Data Integration",
      description: "Seamlessly integrate timetables, signaling systems, rolling stock, and weather data for comprehensive operational awareness.",
      icon: "📊"
    },
    {
      title: "AI-Powered Scheduling",
      description: "Advanced machine learning algorithms generate optimal schedules and intelligent recommendations in real-time.",
      icon: "🤖"
    },
    {
      title: "Conflict Detection & Resolution",
      description: "Proactive identification and automatic resolution of scheduling conflicts before they impact operations.",
      icon: "⚡"
    },
    {
      title: "What-if Simulation Engine",
      description: "Test alternate scenarios and evaluate operational impacts before implementing changes to the network.",
      icon: "🔬"
    },
    {
      title: "KPI Dashboards",
      description: "Live monitoring of punctuality, throughput, and track utilization with actionable insights and trends.",
      icon: "📈"
    },
    {
      title: "Safety Validation",
      description: "Built-in safety checks and compliance validation to ensure all operations meet railway safety standards.",
      icon: "🛡️"
    }
  ];

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology meets railway operations for unprecedented efficiency and control
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full relative overflow-hidden group-hover:border-blue-500/30 transition-all duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-blue-400 to-purple-600 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;