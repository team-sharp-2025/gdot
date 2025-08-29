'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, ShieldCheck, Stethoscope } from 'lucide-react';

import ToolsShowcase from '@/components/industries/ToolsShowcase';
import HowWeWork from '@/components/industries/HowWeWork';
import FAQ from '@/components/industries/FAQ';

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-peach-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium mb-4">Healthcare</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Patient-first digital healthcare</h1>
            <p className="text-lg text-gray-600 mb-6">Secure, compliant healthcare platforms that connect patients, providers, and data to improve clinical outcomes.</p>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                The healthcare industry is undergoing a digital transformation that's revolutionizing patient care delivery. We build secure, compliant platforms that bridge the gap between traditional healthcare systems and modern digital experiences, enabling providers to deliver better care while improving operational efficiency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our healthcare solutions prioritize security and compliance from day one, implementing HIPAA, GDPR, and other regulatory requirements throughout the development process. We create intuitive interfaces for patients, powerful tools for healthcare providers, and seamless integrations with existing clinical systems to ensure continuity of care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From telehealth platforms that enable remote consultations to AI-powered diagnostic tools that assist clinicians, our technology solutions are designed to enhance rather than replace human expertise. We understand the critical nature of healthcare applications and build systems with the reliability, security, and performance that medical professionals and patients demand.
              </p>
            </div>

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
            <Image src="/images/healthcare.webp" alt="Healthcare" fill className="object-cover" />
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

      <HowWeWork
        title="How We Work for Healthcare"
        steps={[
          {
            title: "Compliance First",
            description: "We start with regulatory requirements (HIPAA, GDPR) and build security into every layer of the application architecture."
          },
          {
            title: "Clinical Workflow Analysis",
            description: "Deep understanding of healthcare processes, user roles, and integration points with existing clinical systems."
          },
          {
            title: "Secure Development",
            description: "Privacy-by-design approach with encryption, audit trails, and role-based access controls throughout development."
          },
          {
            title: "Interoperability Focus",
            description: "Building FHIR/HL7 compliant APIs and ensuring seamless data exchange between healthcare systems."
          },
          {
            title: "Quality & Validation",
            description: "Rigorous testing, security audits, and compliance validation before deployment to production environments."
          }
        ]}
      />

      <ToolsShowcase
        title="Tools we use"
        tools={[
          { name: 'Next.js' },
          { name: 'React' },
          { name: 'Node.js' },
          { name: 'Python' },
          { name: 'PostgreSQL' },
          { name: 'Redis' },
          { name: 'FHIR/HL7' },
          { name: 'Auth0' },
          { name: 'Keycloak' },
          { name: 'AWS' },
          { name: 'GCP' },
          { name: 'Datadog' }
        ]}
      />

      <FAQ
        title="Healthcare"
        faqs={[
          {
            question: "How do you ensure HIPAA compliance in healthcare applications?",
            answer: "We implement end-to-end encryption, role-based access controls, comprehensive audit logging, and regular security assessments to maintain HIPAA compliance."
          },
          {
            question: "Can you integrate with existing EHR systems?",
            answer: "Yes, we specialize in FHIR/HL7 integrations and can connect with major EHR systems like Epic, Cerner, and others through standard healthcare APIs."
          },
          {
            question: "What security measures do you implement for patient data?",
            answer: "We use encryption at rest and in transit, implement zero-trust architecture, conduct regular penetration testing, and maintain detailed audit trails for all data access."
          },
          {
            question: "How do you handle telehealth platform scalability?",
            answer: "Our platforms use cloud-native architecture with auto-scaling, load balancing, and CDN optimization to handle varying patient loads and ensure smooth video consultations."
          }
        ]}
      />
    </div>
  );
}
