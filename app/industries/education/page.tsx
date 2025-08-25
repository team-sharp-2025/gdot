'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Users, BookOpen } from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-peach-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium mb-4">Education</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Modern, inclusive learning experiences</h1>
            <p className="text-lg text-gray-600 mb-6">We build scalable LMS platforms, interactive classrooms and tools that empower educators and learners.</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">LMS</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Assessments</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Gamification</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Accessibility</span>
            </div>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              <Link href="/contact">Plan your platform <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/industries/e-com.webp" alt="Education" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, title: 'LMS & Content', text: 'Authoring, SCORM/xAPI, course catalogs and progress tracking.' },
            { icon: Users, title: 'Live & Collaborative', text: 'Real-time classes, whiteboards, breakout rooms and chat.' },
            { icon: BookOpen, title: 'Assessment & Analytics', text: 'Quizzes, proctoring, insights and personalized learning.' }
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
