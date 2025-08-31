"use client";

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
  Heart,
  ShieldCheck,
  Stethoscope,
  Activity,
  Microscope,
  Tablet,
  UserCog,
} from "lucide-react";

export default function HealthcarePage() {
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
              Healthcare Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Healthcare with <br className="hidden md:block" />
              Digital Innovation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We build secure, compliant healthcare platforms that connect
              patients, providers, and data to improve clinical outcomes and
              enhance care delivery.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Stethoscope className="w-6 h-6 text-orange-500 mr-2" />
                <span className="font-semibold">Telehealth Solutions</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Activity className="w-6 h-6 text-orange-500 mr-2" />
                <span className="font-semibold">Patient Monitoring</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <ShieldCheck className="w-6 h-6 text-orange-500 mr-2" />
                <span className="font-semibold">HIPAA Compliant</span>
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
              src="/images/industries/healthcare.jpg"
              alt="Healthcare Technology Solutions"
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
              Healthcare Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that transform healthcare delivery and
              patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Telehealth Platforms",
                features: [
                  "Video consultations",
                  "E-prescriptions",
                  "Patient scheduling",
                  "Medical triage",
                  "Remote monitoring",
                ],
              },
              {
                icon: Tablet,
                title: "Patient Engagement",
                features: [
                  "Patient portals",
                  "Mobile health apps",
                  "Appointment management",
                  "Care reminders",
                  "Health education",
                ],
              },
              {
                icon: Activity,
                title: "Clinical Systems",
                features: [
                  "EHR integration",
                  "Clinical workflows",
                  "Lab integrations",
                  "Medical imaging",
                  "Decision support",
                ],
              },
              {
                icon: ShieldCheck,
                title: "Security & Compliance",
                features: [
                  "HIPAA compliance",
                  "Data encryption",
                  "Access controls",
                  "Audit logging",
                  "PHI protection",
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
                  <service.icon className="w-8 h-8 text-orange-500 mr-3" />
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
              Our Healthcare Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building secure and compliant healthcare
              solutions
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 h-full w-1 bg-orange-200 transform -translate-x-1/2 md:block hidden"></div>

            {[
              {
                title: "Compliance Analysis",
                description:
                  "We begin with a thorough analysis of healthcare regulations and compliance requirements to ensure security and privacy from day one.",
                icon: "📋",
                features: [
                  "HIPAA requirements",
                  "GDPR compliance",
                  "Security standards",
                  "Privacy regulations",
                  "Industry guidelines",
                ],
              },
              {
                title: "Clinical Workflow",
                description:
                  "Understanding and mapping clinical processes to create solutions that enhance rather than disrupt existing workflows.",
                icon: "🏥",
                features: [
                  "Process mapping",
                  "User role analysis",
                  "System integration",
                  "Workflow optimization",
                  "Clinical validation",
                ],
              },
              {
                title: "Secure Development",
                description:
                  "Building healthcare solutions with security and privacy embedded in every component and feature.",
                icon: "🛡️",
                features: [
                  "Secure architecture",
                  "Data encryption",
                  "Access controls",
                  "Audit logging",
                  "Privacy protection",
                ],
              },
              {
                title: "Integration & Testing",
                description:
                  "Ensuring seamless connectivity with existing healthcare systems and thorough validation of all features.",
                icon: "🔄",
                features: [
                  "FHIR/HL7 integration",
                  "EHR connectivity",
                  "Device integration",
                  "API development",
                  "Data exchange",
                ],
              },
              {
                title: "Deployment & Support",
                description:
                  "Carefully managed deployment process with comprehensive training and ongoing support.",
                icon: "🚀",
                features: [
                  "Phased rollout",
                  "Staff training",
                  "Documentation",
                  "24/7 support",
                  "Performance monitoring",
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
              Common questions about our healthcare technology solutions
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
                    "How do you ensure HIPAA compliance in healthcare applications?",
                  answer:
                    "We implement comprehensive HIPAA compliance measures including: 1) End-to-end encryption for all data, 2) Role-based access controls, 3) Detailed audit logging, 4) Regular security assessments, 5) Staff training programs, 6) Data backup and recovery, 7) Business Associate Agreements. Our solutions are built with privacy and security at their core.",
                },
                {
                  question: "Can you integrate with existing EHR systems?",
                  answer:
                    "Yes, we specialize in healthcare system integrations including: 1) FHIR/HL7 standard implementations, 2) Major EHR system connections (Epic, Cerner), 3) Custom API development, 4) Data mapping and transformation, 5) Real-time synchronization, 6) Historical data migration, 7) Integration monitoring and support.",
                },
                {
                  question:
                    "What security measures do you implement for patient data?",
                  answer:
                    "Our security framework includes: 1) Encryption at rest and in transit, 2) Zero-trust architecture, 3) Regular penetration testing, 4) Comprehensive audit trails, 5) Access control systems, 6) Intrusion detection, 7) Automated security monitoring. We follow healthcare industry best practices and exceed regulatory requirements.",
                },
                {
                  question:
                    "How do you handle telehealth platform scalability?",
                  answer:
                    "Our telehealth platforms use advanced scaling solutions: 1) Cloud-native architecture, 2) Auto-scaling capabilities, 3) Load balancing, 4) CDN optimization, 5) WebRTC optimization, 6) Regional distribution, 7) Performance monitoring. This ensures smooth video consultations even during peak usage.",
                },
                {
                  question: "What patient engagement features do you offer?",
                  answer:
                    "Our patient engagement solutions include: 1) Patient portals, 2) Mobile health apps, 3) Appointment scheduling, 4) Medication reminders, 5) Secure messaging, 6) Health education resources, 7) Care plan tracking. All features are designed for ease of use and accessibility.",
                },
                {
                  question: "How do you support clinical decision making?",
                  answer:
                    "We enhance clinical workflows through: 1) Clinical decision support systems, 2) AI-assisted diagnostics, 3) Evidence-based guidelines, 4) Risk assessment tools, 5) Patient data analytics, 6) Treatment protocol automation, 7) Outcome tracking and reporting.",
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
