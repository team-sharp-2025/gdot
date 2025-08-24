'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Ready to Build Something
              <span className="block text-orange-200">Amazing Together?</span>
            </h2>
            
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Let's discuss your project and explore how our expertise can help you 
              achieve your digital transformation goals. Get started with a free consultation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              asChild
              size="lg"
              className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link href="/contact" className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule Call
            </Button>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-orange-400"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-orange-100 text-sm">We respond to all inquiries within 24 hours</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-orange-100 text-sm">30-minute strategy session at no cost</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-orange-100 text-sm">Direct access to our senior developers</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}