"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "We build modern, responsive web applications using cutting-edge technologies like React, Next.js, and Node.js. Our web solutions are scalable, secure, and optimized for performance.",
    features: [
      "Custom Web Applications",
      "Progressive Web Apps",
      "API Development",
      "Performance Optimization",
    ],
    href: "/services/web-development",
    gradient: "from-blue-500 to-blue-600",
    image: "/images/services/web-development.jpg",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with exceptional user experiences. We create apps that users love and businesses rely on.",
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Flutter Apps",
    ],
    href: "/services/mobile-apps",
    gradient: "from-purple-500 to-purple-600",
    image: "/images/services/mobile-development.jpg",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, migration services, and serverless architectures for modern businesses. We help you leverage the power of cloud computing.",
    features: [
      "AWS/Azure/GCP",
      "Cloud Migration",
      "Serverless Architecture",
      "DevOps Integration",
    ],
    href: "/services/cloud-solutions",
    gradient: "from-green-500 to-green-600",
    image: "/images/services/cloud-solutions.jpg",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by advanced AI, machine learning, and data science capabilities. Transform your business with cutting-edge AI technology.",
    features: [
      "ML Model Development",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
    href: "/services/ai-ml",
    gradient: "from-orange-500 to-orange-600",
    image: "/images/services/ai-ml.jpg",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, engaging, and conversion-optimized digital experiences. We design interfaces that users love to interact with.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
    href: "/services/ui-ux-design",
    gradient: "from-pink-500 to-pink-600",
    image: "/images/services/ui-ux-design.jpg",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Solutions",
    description:
      "Complete ecommerce platforms that drive sales and provide seamless shopping experiences. From online stores to marketplace solutions, we build it all.",
    features: [
      "Online Stores",
      "Marketplace Platforms",
      "Payment Integration",
      "Inventory Management",
    ],
    href: "/services/ecommerce",
    gradient: "from-red-500 to-red-600",
    image: "/images/services/ecommerce.jpg",
  },
];

export default function ServicesPage() {
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive software development services to transform your
              business. From web and mobile applications to AI solutions and
              cloud infrastructure, we provide end-to-end technology services
              that drive growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-32 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2 w-full"
              >
                <div className="relative group">
                  {/* Placeholder for service image */}
                  <div
                    className={`w-full aspect-video lg:aspect-square bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105`}
                  >
                    <service.icon className="h-16 w-16 lg:h-24 lg:w-24 text-white opacity-80" />
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2 space-y-6"
              >
                <div className="space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl shadow-lg`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
                    {service.title}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What we offer:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <Link
                    href={service.href}
                    className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Let's discuss your requirements and explore how our services can
              help you achieve your business goals. Get started with a free
              consultation.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
