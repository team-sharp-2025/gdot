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
  GraduationCap,
  Users,
  BookOpen,
  Brain,
  School,
  BarChart,
  Laptop,
} from "lucide-react";

import HowWeWork from "@/components/industries/HowWeWork";

export default function EducationPage() {
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
              Education Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Education with <br className="hidden md:block" />
              Modern Learning Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We build innovative educational technology solutions that empower
              institutions, educators, and learners. From LMS platforms to
              interactive virtual classrooms, we make learning accessible and
              engaging.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <GraduationCap className="w-6 h-6 text-orange-500 mr-2" />
                <span className="font-semibold">LMS Development</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Users className="w-6 h-6 text-orange-500 mr-2" />
                <span className="font-semibold">Virtual Classrooms</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Brain className="w-6 h-6 text-orange-500 mr-2" />
                <span className="font-semibold">Smart Assessment</span>
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
              src="/images/industries/education.jpg"
              alt="Education Technology Solutions"
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
              Educational Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that transform the way we teach and learn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Learning Management Systems",
                features: [
                  "Custom LMS development",
                  "Course management",
                  "Progress tracking",
                  "Content authoring tools",
                  "SCORM/xAPI compliance",
                ],
              },
              {
                icon: Users,
                title: "Virtual Classrooms",
                features: [
                  "Live video streaming",
                  "Interactive whiteboards",
                  "Breakout rooms",
                  "Real-time collaboration",
                  "Recording & playback",
                ],
              },
              {
                icon: Brain,
                title: "Smart Assessment",
                features: [
                  "Automated grading",
                  "AI-powered evaluation",
                  "Proctoring solutions",
                  "Performance analytics",
                  "Adaptive testing",
                ],
              },
              {
                icon: School,
                title: "Teacher Tools",
                features: [
                  "Lesson planning",
                  "Resource management",
                  "Student tracking",
                  "Parent communication",
                  "Grade management",
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
              Our Education Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to creating effective educational technology
              solutions
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 h-full w-1 bg-orange-200 transform -translate-x-1/2 md:block hidden"></div>

            {[
              {
                title: "Educational Research",
                description:
                  "We begin with thorough research into learning theories, pedagogical approaches, and your specific educational needs. Our team analyzes current challenges and opportunities in educational delivery.",
                icon: "🎓",
                features: [
                  "Learning theory analysis",
                  "Stakeholder interviews",
                  "Accessibility requirements",
                  "Technology assessment",
                  "Educational goals mapping",
                ],
              },
              {
                title: "Solution Design",
                description:
                  "Our designers create intuitive, engaging interfaces that cater to diverse learning styles and ensure accessibility for all users.",
                icon: "🎨",
                features: [
                  "User experience design",
                  "Learning path creation",
                  "Content structure",
                  "Interactive elements",
                  "Accessibility features",
                ],
              },
              {
                title: "Development",
                description:
                  "We build your educational platform using modern technologies that ensure reliability, scalability, and engaging learning experiences.",
                icon: "⚙️",
                features: [
                  "Platform development",
                  "Content integration",
                  "Interactive features",
                  "Assessment tools",
                  "Analytics implementation",
                ],
              },
              {
                title: "Testing & Training",
                description:
                  "Comprehensive testing across devices and user roles, followed by thorough training for educators and administrators.",
                icon: "✅",
                features: [
                  "Functionality testing",
                  "User acceptance testing",
                  "Performance validation",
                  "Staff training",
                  "Documentation",
                ],
              },
              {
                title: "Launch & Support",
                description:
                  "We ensure a smooth platform launch and provide ongoing support to maintain optimal performance and user satisfaction.",
                icon: "🚀",
                features: [
                  "Phased rollout",
                  "User onboarding",
                  "Performance monitoring",
                  "Technical support",
                  "Regular updates",
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
              Common questions about our educational technology solutions
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
                    "How do you ensure accessibility compliance in educational platforms?",
                  answer:
                    "We prioritize accessibility in all our educational solutions following WCAG 2.2 AA guidelines. Our approach includes: 1) Screen reader compatibility, 2) Keyboard navigation support, 3) High contrast modes, 4) Text-to-speech integration, 5) Customizable font sizes and colors, 6) Alt text for all visual content, 7) Closed captions for video content. We regularly test with accessibility tools and work with users with different abilities to ensure our platforms are truly inclusive.",
                },
                {
                  question:
                    "Can your platforms handle large numbers of concurrent users?",
                  answer:
                    "Yes, our educational platforms are built for scale. We implement: 1) Load-balanced architecture, 2) WebRTC optimization for video streaming, 3) Content delivery networks, 4) Database sharding for performance, 5) Auto-scaling cloud infrastructure, 6) Real-time data synchronization, 7) Caching strategies. Our solutions can support thousands of simultaneous users while maintaining smooth performance.",
                },
                {
                  question:
                    "How do you integrate with existing school management systems?",
                  answer:
                    "We offer flexible integration options with popular education platforms: 1) API-based integration with major LMS platforms (Canvas, Blackboard, Moodle), 2) Single Sign-On (SSO) implementation, 3) Data synchronization for student records, 4) Grade book integration, 5) Automated roster updates, 6) Custom API development for unique systems, 7) Secure data exchange protocols.",
                },
                {
                  question:
                    "What analytics and reporting capabilities do you offer?",
                  answer:
                    "Our comprehensive analytics suite includes: 1) Student engagement tracking, 2) Learning progress monitoring, 3) Assessment performance analysis, 4) Attendance and participation metrics, 5) Custom report generation, 6) Data visualization dashboards, 7) Predictive analytics for early intervention. These insights help educators make data-driven decisions to improve learning outcomes.",
                },
                {
                  question:
                    "How do you support different learning styles and needs?",
                  answer:
                    "Our platforms accommodate diverse learning needs through: 1) Multiple content formats (text, video, audio), 2) Interactive learning modules, 3) Self-paced learning options, 4) Adaptive learning paths, 5) Collaborative learning tools, 6) Visual and hands-on activities, 7) Progress tracking and personalized feedback.",
                },
                {
                  question: "What security measures do you implement?",
                  answer:
                    "We maintain strict security standards including: 1) End-to-end encryption, 2) Secure user authentication, 3) Role-based access control, 4) Regular security audits, 5) Data backup and recovery, 6) FERPA compliance, 7) Privacy protection measures. We ensure all student data is protected and handled responsibly.",
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
