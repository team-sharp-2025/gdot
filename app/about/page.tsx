"use client";

import { motion } from "framer-motion";
import { Users, Target, Eye, Heart, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Your success is our priority. We build lasting partnerships based on trust and results.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Quality is non-negotiable. We maintain the highest standards in everything we do.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great results come from great teamwork, both internally and with our clients.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Founded",
    description:
      "Started with a vision to help businesses grow through technology",
  },
  {
    year: "2022",
    title: "First Client Success",
    description:
      "Delivered our first production-ready project and built long-term partnerships",
  },
  {
    year: "2023",
    title: "Team Growth",
    description:
      "Expanded to 10+ developers and broadened our expertise in web and cloud solutions",
  },
  {
    year: "2024",
    title: "AI Adoption",
    description:
      "Integrated AI/ML capabilities into client projects and delivered 50+ successful solutions",
  },
  {
    year: "2025",
    title: "Global Reach",
    description:
      "Serving clients across 5+ countries with a focus on quality and reliability",
  },
];

const team = [
  {
    name: "Alex Rodriguez",
    position: "CEO & Founder",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "15+ years in software development and business strategy",
  },
  {
    name: "Sarah Kim",
    position: "CTO",
    image:
      "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Expert in cloud architecture and AI/ML implementations",
  },
  {
    name: "Michael Chen",
    position: "Head of Design",
    image:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Award-winning designer with focus on user experience",
  },
  {
    name: "Emily Johnson",
    position: "Lead Developer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    bio: "Full-stack developer specialized in React and Node.js",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-peach-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
              About <span className="gradient-text">GDOT</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're a passionate team of developers, designers, and strategists
              dedicated to transforming businesses through innovative technology
              solutions. Since 2021, we've helped over 50 companies achieve
              their digital transformation goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth, enhance efficiency, and create exceptional user
                experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in software development, recognized for
                our technical excellence, innovative solutions, and unwavering
                commitment to client success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in integrity, innovation, and collaboration. These
                core values guide every decision we make and every solution we
                deliver.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto"
                >
                  <value.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to industry leader, here's how we've evolved to
              become your trusted technology partner.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-orange-500 to-orange-600"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-poppins font-bold text-orange-500 mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience 
              in software development, design, and business strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-6"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                </motion.div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-orange-500 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
