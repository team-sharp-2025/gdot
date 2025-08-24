'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Brain, 
  Palette, 
  Settings,
  Shield,
  BarChart,
  Database,
  Cog,
  Users
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build modern, responsive web applications using cutting-edge technologies like React, Next.js, and Node.js.',
    features: ['Custom Web Applications', 'E-commerce Platforms', 'Progressive Web Apps', 'API Development'],
    href: '/services/web-development',
    gradient: 'from-blue-500 to-blue-600',
    delay: 0.1
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
    href: '/services/mobile-apps',
    gradient: 'from-purple-500 to-purple-600',
    delay: 0.2
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, migration services, and serverless architectures for modern businesses.',
    features: ['AWS/Azure/GCP', 'Cloud Migration', 'Serverless Architecture', 'DevOps Integration'],
    href: '/services/cloud-solutions',
    gradient: 'from-green-500 to-green-600',
    delay: 0.3
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by advanced AI, machine learning, and data science capabilities.',
    features: ['ML Model Development', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    href: '/services/ai-ml',
    gradient: 'from-orange-500 to-orange-600',
    delay: 0.4
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, engaging, and conversion-optimized digital experiences.',
    features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
    href: '/services/ui-ux-design',
    gradient: 'from-pink-500 to-pink-600',
    delay: 0.5
  },
  {
    icon: Settings,
    title: 'DevOps Services',
    description: 'Streamlined development and deployment processes with CI/CD, automation, and monitoring.',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Automated Testing'],
    href: '/services/devops',
    gradient: 'from-red-500 to-red-600',
    delay: 0.6
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance (GDPR, HIPAA)', 'Security Training'],
    href: '/services/cybersecurity',
    gradient: 'from-gray-700 to-gray-800',
    delay: 0.7
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights with advanced analytics and visualization.',
    features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
    href: '/services/data-analytics',
    gradient: 'from-teal-500 to-teal-600',
    delay: 0.8
  },
  {
    icon: Database,
    title: 'Blockchain Development',
    description: 'Decentralized applications, smart contracts, and blockchain solutions for modern businesses.',
    features: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms', 'Cryptocurrency Solutions'],
    href: '/services/blockchain',
    gradient: 'from-indigo-500 to-indigo-600',
    delay: 0.9
  },
  {
    icon: Cog,
    title: 'QA & Testing',
    description: 'Comprehensive testing services to ensure your software is reliable, secure, and bug-free.',
    features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'User Acceptance Testing'],
    href: '/services/qa-testing',
    gradient: 'from-yellow-500 to-yellow-600',
    delay: 1.0
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to align your IT infrastructure with business objectives.',
    features: ['Technology Strategy', 'Digital Transformation', 'System Architecture', 'Technical Leadership'],
    href: '/services/it-consulting',
    gradient: 'from-cyan-500 to-cyan-600',
    delay: 1.1
  }
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
              Comprehensive software development services to transform your business. 
              From web and mobile applications to AI solutions and cloud infrastructure, 
              we provide end-to-end technology services that drive growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:border-orange-200 group-hover:bg-white">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-orange-500 group-hover:text-orange-600 font-medium">
                      Learn More
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="ml-2"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
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
              Let's discuss your requirements and explore how our services can help 
              you achieve your business goals. Get started with a free consultation.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}