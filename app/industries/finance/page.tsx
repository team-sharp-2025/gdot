"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CreditCard,
  BarChart3,
  Shield,
  Wallet,
  Lock,
  LineChart,
  Landmark,
} from "lucide-react";

export default function FinancePage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-b from-orange-50 via-orange-100/20 to-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium mb-4">
              Financial Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Financial <br className="hidden md:block" />
              Services with Fintech
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We build secure, compliant, and innovative financial technology
              solutions that power modern banking, payments, and investment
              platforms.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Landmark className="w-6 h-6 text-orange-500 mr-2" />
                <span className="font-semibold">Digital Banking</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Wallet className="w-6 h-6 text-orange-500 mr-2" />
                <span className="font-semibold">Payment Systems</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Lock className="w-6 h-6 text-orange-500 mr-2" />
                <span className="font-semibold">Secure & Compliant</span>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full"
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="#services">
                  Explore Services <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-16 aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/industries/finance.jpg"
              alt="Financial Technology Solutions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Financial Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fintech solutions that power modern financial
              services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Landmark,
                title: "Digital Banking",
                features: [
                  "Core banking systems",
                  "Mobile banking apps",
                  "Account management",
                  "Transaction processing",
                  "Open banking APIs",
                ],
              },
              {
                icon: CreditCard,
                title: "Payment Solutions",
                features: [
                  "Payment gateways",
                  "Digital wallets",
                  "Card processing",
                  "Recurring billing",
                  "Settlement systems",
                ],
              },
              {
                icon: LineChart,
                title: "Investment Platforms",
                features: [
                  "Trading systems",
                  "Portfolio management",
                  "Risk analytics",
                  "Market data integration",
                  "Reporting tools",
                ],
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                features: [
                  "KYC/AML solutions",
                  "Fraud detection",
                  "Data encryption",
                  "Audit trails",
                  "Regulatory reporting",
                ],
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  {React.createElement(service.icon, {
                    className: "w-8 h-8 text-orange-500 mr-3",
                  })}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Fintech Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building secure and compliant financial
              solutions
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 h-full w-1 bg-orange-200 transform -translate-x-1/2 md:block hidden"></div>

            {[
              {
                title: "Regulatory Analysis",
                description:
                  "We begin with a thorough analysis of financial regulations and compliance requirements specific to your market and services.",
                icon: "📋",
                features: [
                  "PCI-DSS requirements",
                  "KYC/AML regulations",
                  "GDPR compliance",
                  "Open banking standards",
                  "Regional regulations",
                ],
              },
              {
                title: "Security Architecture",
                description:
                  "Designing robust security frameworks that protect sensitive financial data and transactions at every level.",
                icon: "🛡️",
                features: [
                  "Zero-trust architecture",
                  "Encryption standards",
                  "Access control systems",
                  "Fraud detection",
                  "Security monitoring",
                ],
              },
              {
                title: "Core Development",
                description:
                  "Building the foundation of your fintech platform with a focus on reliability, scalability, and performance.",
                icon: "⚙️",
                features: [
                  "API development",
                  "Database design",
                  "Integration patterns",
                  "Transaction handling",
                  "Error management",
                ],
              },
              {
                title: "Testing & Validation",
                description:
                  "Rigorous testing of all components to ensure security, compliance, and optimal performance.",
                icon: "✅",
                features: [
                  "Security testing",
                  "Performance testing",
                  "Compliance validation",
                  "Integration testing",
                  "User acceptance",
                ],
              },
              {
                title: "Deployment & Monitoring",
                description:
                  "Carefully orchestrated deployment with comprehensive monitoring and support systems.",
                icon: "🚀",
                features: [
                  "Staged rollout",
                  "24/7 monitoring",
                  "Alert systems",
                  "Performance tracking",
                  "Incident response",
                ],
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-16 ${
                  i % 2 === 0 ? "md:pr-16" : "md:pl-16 md:grid-flow-dense"
                }`}
              >
                <div
                  className={`bg-white p-8 rounded-2xl shadow-lg ${
                    i % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{step.icon}</span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <ArrowRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden md:block">
                  <div
                    className={`absolute top-1/2 ${
                      i % 2 === 0 ? "right-0" : "left-0"
                    } transform -translate-y-1/2`}
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl">
                      {i + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our fintech development services
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question:
                    "How do you ensure PCI-DSS compliance for payment systems?",
                  answer:
                    "We implement comprehensive PCI-DSS compliance measures including: 1) Tokenization of sensitive data, 2) End-to-end encryption, 3) Secure key management, 4) Network segmentation, 5) Regular security audits, 6) Access control systems, 7) Continuous monitoring. Our systems are designed to never store actual card data, using only secure tokens for transaction processing.",
                },
                {
                  question: "What fraud detection capabilities do you build?",
                  answer:
                    "Our fraud detection systems use advanced technologies: 1) Real-time fraud scoring engines, 2) Machine learning models for pattern detection, 3) Behavioral analysis algorithms, 4) Transaction monitoring systems, 5) IP and device fingerprinting, 6) Velocity checks and limits, 7) Automated flagging and reporting. These systems continuously adapt to new threat patterns.",
                },
                {
                  question:
                    "How do you handle regulatory reporting requirements?",
                  answer:
                    "We implement automated compliance reporting through: 1) Real-time transaction monitoring, 2) KYC/AML reporting systems, 3) Suspicious activity detection, 4) Automated report generation, 5) Regulatory submission APIs, 6) Comprehensive audit trails, 7) Data retention management. Our systems ensure timely and accurate regulatory compliance.",
                },
                {
                  question:
                    "Can you integrate with existing banking infrastructure?",
                  answer:
                    "Yes, we specialize in banking integrations including: 1) Open banking APIs, 2) SWIFT network connectivity, 3) Core banking system integration, 4) Payment network connections, 5) Real-time settlement systems, 6) ISO 20022 message handling, 7) Legacy system adaptors. All integrations follow security best practices.",
                },
                {
                  question: "What security measures do you implement?",
                  answer:
                    "Our security framework includes: 1) Multi-layer encryption, 2) Zero-trust architecture, 3) Multi-factor authentication, 4) Real-time threat monitoring, 5) Regular penetration testing, 6) Security incident response, 7) Automated backup systems. We follow industry best practices and regulatory requirements.",
                },
                {
                  question: "How do you ensure system reliability and uptime?",
                  answer:
                    "We implement multiple reliability measures: 1) High-availability architecture, 2) Load balancing, 3) Auto-scaling systems, 4) Disaster recovery planning, 5) Performance monitoring, 6) Automated failover, 7) 24/7 system monitoring. Our systems are designed for 99.99% uptime.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={`faq-${i}`}
                  value={`faq-${i}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
