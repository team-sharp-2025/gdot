'use client';

import { motion } from 'framer-motion';
import IndustryList from '@/components/industries/IndustryList';

export default function IndustriesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <IndustryList />
    </motion.div>
  );
}
