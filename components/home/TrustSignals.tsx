"use client";

import { motion } from "framer-motion";
import { Shield, Users, Globe, Award } from "lucide-react";

const trustMetrics = [
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
    description: "Across 30+ countries",
  },
  {
    icon: Shield,
    number: "99.9%",
    label: "Uptime Guarantee",
    description: "Enterprise-grade reliability",
  },
  {
    icon: Globe,
    number: "50+",
    label: "Countries Served",
    description: "Global presence & support",
  },
  {
    icon: Award,
    number: "15+",
    label: "Industry Awards",
    description: "Recognition for excellence",
  },
];

const clientLogos = [
  "Microsoft",
  "Google",
  "Amazon",
  "Meta",
  "Apple",
  "Tesla",
  "Netflix",
  "Spotify",
];

export default function TrustSignals() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mb-4 mx-auto"
              >
                <metric.icon className="h-8 w-8 text-white" />
              </motion.div>
              <motion.div
                className="text-3xl font-poppins font-bold text-gray-900 mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {metric.number}
              </motion.div>
              <div className="font-semibold text-gray-700 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-500">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
