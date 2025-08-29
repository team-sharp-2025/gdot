'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, BarChart3, Shield } from 'lucide-react';

import ToolsShowcase from '@/components/industries/ToolsShowcase';
import HowWeWork from '@/components/industries/HowWeWork';
import FAQ from '@/components/industries/FAQ';

export default function FinancePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-peach-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium mb-4">Finance</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Secure, compliant fintech experiences</h1>
            <p className="text-lg text-gray-600 mb-6">We build reliable digital banking, payment systems and analytics with strong security and regulatory compliance.</p>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                The financial services industry is at the forefront of digital innovation, with customer expectations for seamless, secure, and personalized experiences driving rapid transformation. We build robust fintech solutions that meet the highest standards of security, compliance, and performance while delivering exceptional user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our financial technology expertise spans digital banking platforms, payment processing systems, investment platforms, and regulatory compliance tools. We understand the complex regulatory landscape including PCI-DSS, KYC/AML, and open banking requirements, ensuring our solutions are built for both current compliance needs and future regulatory changes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Security is paramount in financial applications, and we implement enterprise-grade security measures including end-to-end encryption, fraud detection systems, and comprehensive audit trails. Our platforms are designed to handle high transaction volumes with sub-second response times and 99.99% uptime, meeting the demanding requirements of financial services.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">KYC/AML</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">PCI-DSS</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Open Banking</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Risk & Fraud</span>
            </div>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              <Link href="/contact">Discuss your product <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/finance.jpg" alt="Finance" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: CreditCard, title: 'Payments & Wallets', text: 'Gateways, cards, wallets and settlements at scale.' },
            { icon: BarChart3, title: 'Analytics & Reporting', text: 'Risk scoring, BI dashboards and portfolio analytics.' },
            { icon: Shield, title: 'Security & Compliance', text: 'Encryption, tokenization and regulatory adherence.' }
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
        title="How We Work for Finance"
        steps={[
          {
            title: "Regulatory Compliance",
            description: "We begin with thorough analysis of financial regulations (PCI-DSS, KYC/AML, GDPR) and build compliance into the core architecture."
          },
          {
            title: "Security Architecture",
            description: "Implementing zero-trust security models, encryption standards, and fraud detection systems from the ground up."
          },
          {
            title: "Risk Management",
            description: "Building comprehensive risk assessment frameworks, real-time monitoring, and automated compliance reporting systems."
          },
          {
            title: "Performance & Scalability",
            description: "Designing systems that handle high transaction volumes with sub-second response times and 99.99% uptime."
          },
          {
            title: "Continuous Monitoring",
            description: "24/7 surveillance, automated alerts, and proactive threat detection to maintain security and compliance standards."
          }
        ]}
      />

      <ToolsShowcase
        title="Tools we use"
        tools={[
          { name: 'Next.js' },
          { name: 'React' },
          { name: 'Node.js' },
          { name: 'Go' },
          { name: 'Kafka' },
          { name: 'PostgreSQL' },
          { name: 'Stripe' },
          { name: 'Plaid' },
          { name: 'Vault' },
          { name: 'AWS' },
          { name: 'Kubernetes' },
          { name: 'Grafana' }
        ]}
      />

      <FAQ
        title="Finance"
        faqs={[
          {
            question: "How do you ensure PCI-DSS compliance for payment systems?",
            answer: "We implement tokenization, encryption, secure key management, and regular security audits. Our systems never store actual card data, only secure tokens."
          },
          {
            question: "What fraud detection capabilities do you build?",
            answer: "We implement real-time fraud scoring, machine learning models, behavioral analysis, and automated flagging systems that adapt to new threat patterns."
          },
          {
            question: "How do you handle regulatory reporting requirements?",
            answer: "We build automated compliance reporting systems that generate required reports for KYC/AML, transaction monitoring, and regulatory submissions with full audit trails."
          },
          {
            question: "Can you integrate with existing banking infrastructure?",
            answer: "Yes, we specialize in open banking APIs, SWIFT integrations, and connecting with core banking systems through secure, compliant interfaces."
          }
        ]}
      />
    </div>
  );
}
