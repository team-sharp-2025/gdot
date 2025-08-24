"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Code,
  Rocket,
  Headphones,
  CheckCircle,
} from "lucide-react";

const WhyChooseUs = () => {
  const processes = [
    {
      step: "01",
      icon: Search,
      title: "Discover",
      description:
        "We deep-dive into your business requirements, analyze market trends, and understand your target audience to create a comprehensive project roadmap.",
      features: [
        "Requirements Analysis",
        "Market Research",
        "Technical Feasibility",
        "Project Planning",
      ],
    },
    {
      step: "02",
      icon: Lightbulb,
      title: "Design",
      description:
        "Our design team creates intuitive user experiences and stunning visual interfaces that align with your brand and engage your users effectively.",
      features: ["UX Research", "Wireframing", "UI Design", "Prototyping"],
    },
    {
      step: "03",
      icon: Code,
      title: "Develop",
      description:
        "Using agile methodologies and cutting-edge technologies, we build robust, scalable, and secure solutions that meet your exact specifications.",
      features: [
        "Agile Development",
        "Code Reviews",
        "Testing",
        "Quality Assurance",
      ],
    },
    {
      step: "04",
      icon: Rocket,
      title: "Deploy",
      description:
        "We ensure smooth deployment with comprehensive testing, performance optimization, and seamless integration with your existing systems.",
      features: [
        "Deployment Planning",
        "Performance Optimization",
        "Integration",
        "Go-Live Support",
      ],
    },
    {
      step: "05",
      icon: Headphones,
      title: "Support",
      description:
        "Our commitment continues post-launch with ongoing maintenance, updates, monitoring, and technical support to ensure optimal performance.",
      features: [
        "24/7 Monitoring",
        "Regular Updates",
        "Technical Support",
        "Performance Optimization",
      ],
    },
  ];

  const achievements = [
    { number: "99%", label: "Client Satisfaction Rate" },
    { number: "48h", label: "Average Response Time" },
    { number: "100%", label: "On-Time Delivery" },
    { number: "250+", label: "Successful Projects" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-peach-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            {/* <span className="block bg-peach-gradient bg-clip-text text-transparent">
              TechSolutions Pro?
            </span> */}
          </h2>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            <span className="gradient-text">GDOT ?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures project success, from
            initial discovery to ongoing support. Our client-first approach
            delivers exceptional results every time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-8 lg:space-y-16">
            {processes.map((process, index) => (
              <motion.div
                key={process.step}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center mb-4">
                    <span className="text-4xl font-bold text-orange-500 mr-4">
                      {process.step}
                    </span>
                    <div className="w-12 h-12 bg-peach-gradient rounded-xl flex items-center justify-center">
                      <process.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {process.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {process.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    className="relative w-80 h-80 bg-gradient-to-br from-peach-100 to-orange-100 rounded-3xl flex items-center justify-center"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <process.icon className="w-24 h-24 text-orange-500" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {process.step}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and client
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-500 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
