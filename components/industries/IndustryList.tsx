'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  {
    key: 'ecommerce-retail',
    title: 'Ecommerce & Retail',
    excerpt:
      'Build high-converting storefronts, seamless checkout, and omnichannel experiences that boost sales and loyalty.',
    bullets: ['Headless commerce', 'Marketplace platforms', 'Mobile shopping apps'],
    image: '/images/e-com.avif'
  },
  {
    key: 'healthcare',
    title: 'Healthcare',
    excerpt:
      'Deliver secure telehealth, EHR integrations, and patient-first digital experiences that improve outcomes.',
    bullets: ['Telemedicine', 'EHR/EMR integration', 'Remote patient monitoring'],
    image: '/images/healthcare.webp'
  },
  {
    key: 'finance',
    title: 'Finance',
    excerpt:
      'Ship compliant, scalable fintech apps with frictionless onboarding, payments, and powerful analytics.',
    bullets: ['Digital wallets', 'KYC/AML compliance', 'Trading & analytics'],
    image: '/images/finance.jpg'
  },
  {
    key: 'education',
    title: 'Education',
    excerpt:
      'Create engaging, accessible learning platforms with real-time classrooms and adaptive learning paths.',
    bullets: ['LMS platforms', 'Virtual classrooms', 'Assessment & analytics'],
    image: '/images/education.jpeg'
  }
] as const;

export default function IndustryList() {
  return (
    <section className="py-16 md:py-24">
      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Industries We Serve
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We partner with businesses across diverse sectors to deliver cutting-edge technology solutions 
          that drive growth, efficiency, and competitive advantage.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {industries.map((item, index) => {
          const isReversed = index % 2 === 1;
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                isReversed ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Content Section - Left to Right Animation */}
              <motion.div 
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-peach-100 text-orange-600 text-sm font-medium mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{item.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">{item.excerpt}</p>
                <ul className="space-y-2 mb-6">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-orange-500 mr-3"></span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                  <Link href={`/industries/${item.key}`}>
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>

              {/* Image Section - Right to Left Animation */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
