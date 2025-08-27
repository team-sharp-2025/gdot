"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "We build modern, responsive web applications using cutting-edge technologies like React, Next.js, and Node.js. Our web solutions are scalable, secure, and optimized for performance.",
    image: "/images/services/web-development.jpg",
    gradient: "from-blue-500 to-blue-600",
    subServices: [
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
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with exceptional user experiences. We create apps that users love and businesses rely on.",
    image: "/images/services/mobile-development.jpg",
    gradient: "from-purple-500 to-purple-600",
    subServices: [
      {
        name: "iOS Development",
        href: "/services/mobile-apps/ios-development",
      },
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
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, migration services, and serverless architectures for modern businesses. We help you leverage the power of cloud computing.",
    image: "/images/services/cloud-solutions.jpg",
    gradient: "from-green-500 to-green-600",
    subServices: [
      {
        name: "Cloud Strategy & Consulting",
        href: "/services/cloud-solutions/strategy",
      },
      {
        name: "Cloud Migration & Modernization",
        href: "/services/cloud-solutions/migration",
      },
      {
        name: "Cloud Infrastructure Management",
        href: "/services/cloud-solutions/infrastructure",
      },
      {
        name: "DevOps & Automation",
        href: "/services/cloud-solutions/devops",
      },
      {
        name: "Cloud Security & Compliance",
        href: "/services/cloud-solutions/security",
      },
    ],
  },
  {
    title: "Data & AI",
    description:
      "Intelligent solutions powered by advanced AI, machine learning, and data science capabilities. Transform your business with cutting-edge AI technology.",
    image: "/images/services/ai-ml.jpg",
    gradient: "from-orange-500 to-orange-600",
    subServices: [
      {
        name: "AI & Machine Learning Solutions",
        href: "/services/ai/machine-learning",
      },
      {
        name: "Generative AI Services",
        href: "/services/ai/generative-ai",
      },
      {
        name: "Data Engineering & Management",
        href: "/services/ai/data-engineering",
      },
      {
        name: "Business Intelligence & Analytics",
        href: "/services/ai/analytics",
      },
      {
        name: "Computer Vision & NLP",
        href: "/services/ai/computer-vision-nlp",
      },
    ],
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Complete ecommerce platforms that drive sales and provide seamless shopping experiences. From online stores to marketplace solutions, we build it all.",
    image: "/images/services/ecommerce.jpg",
    gradient: "from-red-500 to-red-600",
    subServices: [
      {
        name: "Custom E-Commerce Development",
        href: "/services/ecommerce/custom",
      },
      {
        name: "Shopify Development",
        href: "/services/ecommerce/shopify",
      },
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
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, engaging, and conversion-optimized digital experiences. We design interfaces that users love to interact with.",
    image: "/images/services/ui-ux-design.jpg",
    gradient: "from-pink-500 to-pink-600",
    subServices: [
      {
        name: "Design Strategy & Research",
        href: "/services/design/strategy",
      },
      {
        name: "Wireframing & Prototyping",
        href: "/services/design/wireframing",
      },
      {
        name: "Web & Mobile UI Design",
        href: "/services/design/ui-design",
      },
      {
        name: "Product Design & Usability Testing",
        href: "/services/design/product-design",
      },
    ],
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
              className={`flex flex-col lg:flex-row items-start gap-12 mb-32 last:mb-0 ${
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
                <div className="relative group overflow-hidden rounded-2xl">
                  <div className="aspect-video lg:aspect-square relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
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
                className="lg:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Sub-services List */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our {service.title} Services:
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {service.subServices.map((subService) => (
                      <Link
                        key={subService.name}
                        href={subService.href}
                        className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50/50 transition-all duration-300"
                      >
                        <span className="text-gray-700 group-hover:text-orange-600 font-medium">
                          {subService.name}
                        </span>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
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
