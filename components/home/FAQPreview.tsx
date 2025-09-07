"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FAQPreview = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What kind of projects do you take on?",
      answer:
        "We work on a wide range of projects from simple websites to complex enterprise applications. Our expertise spans web development, mobile apps, cloud solutions, AI/ML implementations, and more. Whether you're a startup looking to build your MVP or an enterprise needing to modernize your systems, we have the skills and experience to help.",
    },
    {
      question: "Do you provide end-to-end development services?",
      answer:
        "Absolutely! We offer comprehensive services from initial concept and design through development, testing, deployment, and ongoing maintenance. Our team includes designers, developers, DevOps engineers, and QA specialists who work together to deliver complete solutions.",
    },
    {
      question: "How do we get started with our project?",
      answer:
        "Getting started is easy! Simply reach out to us through our contact form or schedule a free consultation call. We'll discuss your project requirements, timeline, and budget to create a customized proposal. Once approved, we'll kick off with our discovery phase to ensure we understand your needs perfectly.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed project timelines during the planning phase and keep you updated throughout the development process.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we provide comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. We offer flexible maintenance plans to ensure your application stays secure, fast, and up-to-date with the latest technologies.",
    },
    {
      question: "How do you ensure project quality and deadlines?",
      answer:
        "We use agile development methodologies with regular sprint reviews, automated testing, continuous integration, and thorough code reviews. Our project managers provide regular updates and ensure milestones are met. We maintain rigorous quality standards throughout the development process.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-peach-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="block bg-orange-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We've compiled answers to the most common questions about our
              services, process, and approach. Can't find what you're looking
              for? We're here to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">
                  Quick response within 24 hours
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">
                  Detailed project proposals
                </span>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 text-white mr-4">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - FAQ List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-orange-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
