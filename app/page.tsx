'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import TrustSignals from '@/components/home/TrustSignals';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TechStack from '@/components/home/TechStack';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import FAQPreview from '@/components/home/FAQPreview';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <TrustSignals />
      <ServicesPreview />
      <WhyChooseUs />
      <TechStack />
      <TestimonialsSection />
      <FAQPreview />
      <CTASection />
    </motion.div>
  );
}