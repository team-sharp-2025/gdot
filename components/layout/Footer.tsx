"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const servicesData = {
  "Web Development": [
    {
      name: "Custom Web Applications",
      href: "/services/web-development/custom-web-applications",
    },
    {
      name: "CMS Development",
      href: "/services/web-development/cms-development",
    },
    {
      name: "Progressive Web Apps (PWAs)",
      href: "/services/web-development/progressive-web-apps",
    },
    {
      name: "API Development & Integration",
      href: "/services/web-development/api-development",
    },
  ],
  "Mobile App Development": [
    { name: "iOS Development", href: "/services/mobile-apps/ios-development" },
    {
      name: "Android Development",
      href: "/services/mobile-apps/android-development",
    },
    {
      name: "Cross-Platform Apps",
      href: "/services/mobile-apps/cross-platform",
    },
    {
      name: "App Maintenance & Support",
      href: "/services/mobile-apps/maintenance",
    },
  ],
  "Cloud Solutions": [
    {
      name: "Cloud Strategy & Consulting",
      href: "/services/cloud-solutions/strategy",
    },
    {
      name: "Cloud Infrastructure Management",
      href: "/services/cloud-solutions/infrastructure",
    },
    { name: "DevOps & Automation", href: "/services/cloud-solutions/devops" },
    {
      name: "Cloud Security & Compliance",
      href: "/services/cloud-solutions/security",
    },
  ],
  "Data & AI": [
    {
      name: "AI & Machine Learning Solutions",
      href: "/services/ai/machine-learning",
    },
    { name: "Generative AI Services", href: "/services/ai/generative-ai" },
    {
      name: "Data Engineering & Management",
      href: "/services/ai/data-engineering",
    },
    {
      name: "Business Intelligence & Analytics",
      href: "/services/ai/analytics",
    },
    { name: "Computer Vision & NLP", href: "/services/ai/computer-vision-nlp" },
  ],
  "E-Commerce Solutions": [
    {
      name: "Custom E-Commerce Development",
      href: "/services/ecommerce/custom",
    },
    { name: "Shopify Development", href: "/services/ecommerce/shopify" },
    {
      name: "WooCommerce Development",
      href: "/services/ecommerce/woocommerce",
    },
    {
      name: "Magento / BigCommerce Development",
      href: "/services/ecommerce/magento",
    },
    {
      name: "Marketplace & Headless Commerce",
      href: "/services/ecommerce/marketplace",
    },
    {
      name: "E-Commerce Optimization",
      href: "/services/ecommerce/optimization",
    },
  ],
  "UI/UX Design": [
    { name: "Design Strategy & Research", href: "/services/design/strategy" },
    { name: "Wireframing & Prototyping", href: "/services/design/wireframing" },
    { name: "Web & Mobile UI Design", href: "/services/design/ui-design" },
    {
      name: "Product Design & Usability Testing",
      href: "/services/design/product-design",
    },
  ],
};

const industries = ["Ecommerce & Retail", "Healthcare", "Finance", "Education"];

export default function Footer() {
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const toggleService = (serviceName: string) => {
    setExpandedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((name) => name !== serviceName)
        : [...prev, serviceName]
    );
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <span className="font-poppins font-bold text-xl">GDOT</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming businesses through innovative software solutions.
                We build tomorrow's technology today.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-poppins font-semibold text-lg">Services</h3>
              <div className="space-y-2">
                {Object.entries(servicesData).map(
                  ([serviceName, subServices]) => (
                    <div key={serviceName} className="group">
                      <button
                        onClick={() => toggleService(serviceName)}
                        className="flex items-center justify-between w-full text-left text-gray-400 hover:text-orange-500 transition-colors group-hover:text-orange-500"
                      >
                        <span className="text-sm font-medium">
                          {serviceName}
                        </span>
                        {expandedServices.includes(serviceName) ? (
                          <ChevronDown className="h-3 w-3 transition-transform" />
                        ) : (
                          <ChevronRight className="h-3 w-3 transition-transform" />
                        )}
                      </button>

                      {expandedServices.includes(serviceName) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <ul className="pl-3 mt-2 space-y-1">
                            {subServices.map((subService) => (
                              <li key={subService.name}>
                                <Link
                                  href={subService.href}
                                  className="text-xs text-gray-500 hover:text-orange-400 transition-colors flex items-center group"
                                >
                                  <ArrowRight className="h-2 w-2 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  {subService.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-poppins font-semibold text-lg">Industries</h3>
              <ul className="space-y-2">
                {industries.map((industry) => (
                  <li key={industry}>
                    <Link
                      href={
                        industry === "Ecommerce & Retail"
                          ? "/industries/ecommerce-retail"
                          : `/industries/${industry.toLowerCase()}`
                      }
                      className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {industry}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="font-poppins font-semibold text-lg">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div className="text-gray-400">
                    <p>Gdot Technologies</p>
                    <p>No 9, Rev Plaza Complex,</p>
                    <p>1st Floor, Above Surya Sweets,</p>
                    <p>Masakalipalayam Road, Peelamedu,</p>
                    <p>Coimbatore - 641004</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-400">+91 97515 95700</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-400">contact@gdot.co.in</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GDOT Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
