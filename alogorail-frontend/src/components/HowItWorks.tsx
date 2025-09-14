import React from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Monitor } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Ingestion",
    description:
      "Real-time data collection from timetables, signaling, rolling stock, and weather.",
  },
  {
    icon: Cpu,
    title: "AI Optimization",
    description: "Multi-algorithm scheduling and recommendation generation.",
  },
  {
    icon: Monitor,
    title: "Controller Interaction",
    description: "Presentation of intelligent recommendations and monitoring.",
  },
];

export const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-gray-900 max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {steps.map(({ icon: Icon, title, description }, idx) => (
        <motion.div
          key={idx}
          className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-indigo-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.2, duration: 0.5 }}
        >
          <Icon className="text-indigo-400 mb-4" size={48} />
          <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
