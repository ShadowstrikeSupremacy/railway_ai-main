import React from "react";
import { motion } from "framer-motion";
import { Train } from "lucide-react";

type TrainStatus = "on-time" | "delayed" | "early";

interface Train {
  id: string;
  name: string;
  type: string;
  track: string;
  from: string;
  to: string;
  scheduledTime: string;
  actualTime: string;
  status: TrainStatus;
  delay: number;
  platform: string;
}

const trains: Train[] = [
  {
    id: "12951",
    name: "Mumbai Rajdhani",
    type: "premium",
    track: "UP",
    from: "Mumbai Central",
    to: "New Delhi",
    scheduledTime: "12:40",
    actualTime: "12:40",
    status: "on-time",
    delay: 0,
    platform: "2",
  },
  {
    id: "12137",
    name: "Punjab Mail",
    type: "express",
    track: "UP",
    from: "Mumbai CST",
    to: "Firozpur",
    scheduledTime: "13:12",
    actualTime: "13:20",
    status: "delayed",
    delay: 8,
    platform: "1",
  },
  {
    id: "18609",
    name: "Loco Pilot Special",
    type: "local",
    track: "DN",
    from: "Kasara",
    to: "Mumbai Central",
    scheduledTime: "12:50",
    actualTime: "12:52",
    status: "delayed",
    delay: 2,
    platform: "S5",
  },
  {
    id: "59381",
    name: "Freight Train",
    type: "freight",
    track: "Loop",
    from: "Kalyan",
    to: "Igatpuri",
    scheduledTime: "14:03",
    actualTime: "14:15",
    status: "delayed",
    delay: 12,
    platform: "Loop",
  },
];

const statusColors: Record<TrainStatus, string> = {
  "on-time": "text-green-400",
  delayed: "text-yellow-400",
  early: "text-blue-400",
};

export const ScheduleView = () => (
  <section className="py-20 bg-gray-900 max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-white mb-8">Schedule Preview</h2>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto"
    >
      <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="p-4 text-left">Train</th>
            <th>Type</th>
            <th>Route</th>
            <th>Schedule</th>
            <th>Actual</th>
            <th>Status</th>
            <th>Platform</th>
            <th>Track</th>
          </tr>
        </thead>
        <tbody>
          {trains.map(
            (
              {
                id,
                name,
                type,
                from,
                to,
                scheduledTime,
                actualTime,
                status,
                platform,
                track,
              },
              i
            ) => (
              <motion.tr
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-gray-700 hover:bg-gray-700"
              >
                <td className="p-4 flex items-center space-x-3">
                  <Train className="text-indigo-400" />
                  <div>
                    <div className="font-semibold text-white">{name}</div>
                    <div className="text-sm text-gray-400">{id}</div>
                  </div>
                </td>
                <td className="text-center capitalize">{type}</td>
                <td className="text-center">
                  {from} → {to}
                </td>
                <td className="text-center">{scheduledTime}</td>
                <td className="text-center">{actualTime}</td>
                <td
                  className={`text-center font-semibold ${
                    statusColors[status] ?? "text-gray-400"
                  }`}
                >
                  {status.replace("-", " ")}
                </td>
                <td className="text-center">{platform}</td>
                <td className="text-center">{track}</td>
              </motion.tr>
            )
          )}
        </tbody>
      </table>
    </motion.div>
  </section>
);
