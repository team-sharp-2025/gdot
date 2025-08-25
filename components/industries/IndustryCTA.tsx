'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, Mail, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function IndustryCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our industry experts",
      action: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your project requirements",
      action: "hello@gdot.com",
      href: "mailto:hello@gdot.com",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start Chat",
      href: "#",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a free consultation call",
      action: "Book Now",
      href: "/contact",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of businesses that have already revolutionized their operations 
            with our innovative technology solutions. Let's discuss how we can help you 
            stay ahead of the competition.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{method.description}</p>
              <Button 
                asChild
                variant="ghost" 
                className="text-white hover:bg-white/20 p-0 h-auto font-medium"
              >
                <Link href={method.href}>
                  {method.action}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-gray-400 font-semibold">ISO 27001</div>
            <div className="text-gray-400 font-semibold">SOC 2 Type II</div>
            <div className="text-gray-400 font-semibold">GDPR Compliant</div>
            <div className="text-gray-400 font-semibold">HIPAA Certified</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
