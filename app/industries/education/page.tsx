'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Users, BookOpen } from 'lucide-react';

import ToolsShowcase from '@/components/industries/ToolsShowcase';
import HowWeWork from '@/components/industries/HowWeWork';
import FAQ from '@/components/industries/FAQ';

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-peach-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium mb-4">Education</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Modern, inclusive learning experiences</h1>
            <p className="text-lg text-gray-600 mb-6">We build scalable LMS platforms, interactive classrooms and tools that empower educators and learners.</p>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Education is evolving rapidly with technology playing a central role in how we learn, teach, and manage educational institutions. We create digital learning platforms that break down barriers to education, making quality learning accessible to students regardless of their location, abilities, or background.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our educational technology solutions prioritize accessibility and inclusivity, ensuring that learning platforms work for everyone. We build systems that support diverse learning styles, provide real-time collaboration tools, and deliver personalized learning experiences that adapt to individual student needs and progress.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From K-12 schools to higher education institutions and corporate training programs, we understand the unique challenges of educational technology. Our platforms integrate seamlessly with existing school management systems, provide comprehensive analytics for educators, and scale to support thousands of concurrent learners while maintaining performance and reliability.
              </p>
            </div>

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
            <Image src="/images/education.jpeg" alt="Education" fill className="object-cover" />
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <HowWeWork
        title="How We Work for Education"
        steps={[
          {
            title: "Educational Research",
            description: "We study learning theories, pedagogical approaches, and accessibility standards to create effective digital learning experiences."
          },
          {
            title: "User Experience Design",
            description: "Designing intuitive interfaces for students, teachers, and administrators with accessibility-first principles and responsive design."
          },
          {
            title: "Interactive Technology",
            description: "Building real-time collaboration tools, video streaming, and interactive assessments that engage learners across devices."
          },
          {
            title: "Data & Analytics",
            description: "Implementing learning analytics, progress tracking, and adaptive learning algorithms to personalize education delivery."
          },
          {
            title: "Continuous Improvement",
            description: "Regular feedback loops, A/B testing, and data-driven optimization to enhance learning outcomes and user engagement."
          }
        ]}
      />

      <ToolsShowcase
        title="Tools we use"
        tools={[
          { name: 'Next.js' },
          { name: 'React' },
          { name: 'WebRTC' },
          { name: 'Socket.io' },
          { name: 'PostgreSQL' },
          { name: 'Redis' },
          { name: 'xAPI/SCORM' },
          { name: 'Vercel' },
          { name: 'AWS' },
          { name: 'Cypress' },
          { name: 'Playwright' },
          { name: 'Sentry' }
        ]}
      />

      <FAQ
        title="Education"
        faqs={[
          {
            question: "How do you ensure accessibility compliance in educational platforms?",
            answer: "We follow WCAG 2.2 AA guidelines, implement screen reader support, keyboard navigation, high contrast modes, and test with accessibility tools and users."
          },
          {
            question: "Can your platforms handle large numbers of concurrent users?",
            answer: "Yes, we build scalable architectures using WebRTC, load balancing, and cloud infrastructure to support thousands of simultaneous learners in virtual classrooms."
          },
          {
            question: "How do you integrate with existing school management systems?",
            answer: "We provide standard APIs and can integrate with popular SIS/LMS platforms like Canvas, Blackboard, and custom systems through secure data exchange protocols."
          },
          {
            question: "What analytics and reporting capabilities do you offer?",
            answer: "We provide comprehensive learning analytics including engagement metrics, progress tracking, assessment results, and insights to help educators improve their teaching methods."
          }
        ]}
      />
    </div>
  );
}
