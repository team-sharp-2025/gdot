'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, ShieldCheck, Stethoscope } from 'lucide-react';

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-peach-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium mb-4">Healthcare</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Patient-first digital healthcare</h1>
            <p className="text-lg text-gray-600 mb-6">Secure, compliant healthcare platforms that connect patients, providers, and data to improve clinical outcomes.</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Telehealth</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">EHR Integrations</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">HIPAA</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Remote Monitoring</span>
            </div>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              <Link href="/contact">Talk to experts <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/industries/e-com.webp" alt="Healthcare" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: 'Telemedicine Platforms', text: 'HD video consults, e-prescriptions, scheduling and triage.' },
            { icon: ShieldCheck, title: 'Compliance & Security', text: 'HIPAA-ready, role-based access and audit logging.' },
            { icon: Stethoscope, title: 'Clinical Integrations', text: 'FHIR/HL7, device data ingestion and analytics.' }
          ].map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-xl p-6 border border-peach-200 shadow-sm">
              <f.icon className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
