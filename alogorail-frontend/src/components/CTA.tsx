import { motion, useScroll, useTransform } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Railway Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join the future of intelligent railway management with AlgoRail's revolutionary AI-powered platform.
          </p>
          
          <motion.button
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
export default CTA;