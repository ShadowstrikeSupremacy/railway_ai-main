import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hand, Unlock, AlertTriangle, RotateCcw } from "lucide-react";

const actions = [
  {
    id: "hold",
    label: "Hold Selected Train",
    icon: Hand,
    variant: "warning",
    description: "Hold the train at next stop",
    confirmation: true,
  },
  {
    id: "release",
    label: "Release Track Section",
    icon: Unlock,
    variant: "success",
    description: "Clear the track for operations",
  },
  {
    id: "override",
    label: "Override Signal",
    icon: AlertTriangle,
    variant: "danger",
    description: "Manual override, use with caution",
    confirmation: true,
  },
  {
    id: "emergency",
    label: "Emergency Routing",
    icon: RotateCcw,
    variant: "danger",
    description: "Activate emergency modes",
    confirmation: true,
  },
];

export const QuickActions = () => {
  const [pending, setPending] = useState<string | null>(null);

  function handleAction(id: string, requiresConfirm = false) {
    if (requiresConfirm && pending !== id) {
      setPending(id);
      setTimeout(() => setPending(null), 4000);
      return;
    }
    setPending(null);
    alert(`Action executed: ${id}`);
  }

  return (
    <section className="py-10 bg-gray-900 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-white mb-8">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {actions.map(({ id, label, icon: Icon, variant, description, confirmation }) => (
          <motion.button
            key={id}
            onClick={() => handleAction(id, confirmation)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-lg shadow-lg focus:outline-none transition-colors ${
              variant === "warning"
                ? "bg-yellow-600 text-black"
                : variant === "success"
                ? "bg-green-600 text-white"
                : variant === "danger"
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            <Icon size={40} className="mb-4" />
            <div className="font-semibold">{pending === id ? "Click to Confirm" : label}</div>
            <div className="mt-2 text-sm text-gray-300">{description}</div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};
