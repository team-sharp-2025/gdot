'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart, Smartphone, CreditCard } from 'lucide-react';

import ToolsShowcase from '@/components/industries/ToolsShowcase';
import HowWeWork from '@/components/industries/HowWeWork';
import FAQ from '@/components/industries/FAQ';

export default function EcommerceRetailPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-peach-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium mb-4">Ecommerce & Retail</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Build, scale and optimize your commerce</h1>
            <p className="text-lg text-gray-600 mb-6">We craft blazing-fast storefronts, seamless checkout flows and omnichannel experiences that delight shoppers and grow revenue.</p>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                In today's digital-first retail landscape, success depends on creating seamless, personalized shopping experiences that convert browsers into buyers. Our comprehensive ecommerce solutions combine cutting-edge technology with proven retail strategies to deliver platforms that drive measurable business growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From headless commerce architectures that provide unmatched flexibility to AI-powered personalization engines that boost conversion rates, we build solutions that scale with your business. Our expertise spans marketplaces, B2B commerce, subscription models, and omnichannel retail experiences that keep customers engaged across all touchpoints.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We understand that every retail business has unique challenges and opportunities. Whether you're launching a new brand, modernizing legacy systems, or expanding into new markets, our team brings deep industry knowledge and technical expertise to create solutions that deliver real ROI.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Headless commerce</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Marketplaces</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Subscriptions</span>
              <span className="px-3 py-1 rounded-full bg-white border border-peach-200 text-gray-700">Personalization</span>
            </div>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              <Link href="/contact">Start a project <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/e-com.avif" alt="Ecommerce" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: ShoppingCart, title: 'Storefronts & Marketplaces', text: 'Next.js storefronts, marketplace engines, catalog and search that convert.' },
            { icon: Smartphone, title: 'Mobile Commerce', text: 'iOS/Android shopping apps, PWA, push notifications and wallet integrations.' },
            { icon: CreditCard, title: 'Payments & Subscriptions', text: 'Payment gateways, BNPL, subscriptions and fraud prevention.' }
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
        title="How We Work for Ecommerce & Retail"
        steps={[
          {
            title: "Discovery & Strategy",
            description: "We analyze your business goals, customer segments, and competitive landscape to create a comprehensive digital commerce strategy."
          },
          {
            title: "UX Design & Architecture",
            description: "Our designers create intuitive shopping experiences while architects build scalable, headless commerce infrastructure."
          },
          {
            title: "Development & Integration",
            description: "We build custom storefronts, integrate payment systems, and implement advanced features like AI-powered recommendations."
          },
          {
            title: "Testing & Optimization",
            description: "Rigorous testing ensures flawless performance, while A/B testing and analytics drive continuous improvement."
          },
          {
            title: "Launch & Growth",
            description: "Smooth deployment followed by ongoing optimization, monitoring, and feature enhancements to maximize revenue."
          }
        ]}
      />

      <ToolsShowcase
        title="Tools we use"
        tools={[
          { name: 'Next.js' },
          { name: 'React' },
          { name: 'Node.js' },
          { name: 'Shopify' },
          { name: 'BigCommerce' },
          { name: 'Stripe' },
          { name: 'Adyen' },
          { name: 'Algolia' },
          { name: 'Elastic' },
          { name: 'Vercel' },
          { name: 'AWS' },
          { name: 'Segment' }
        ]}
      />

      <FAQ
        title="Ecommerce & Retail"
        faqs={[
          {
            question: "How long does it take to build a custom ecommerce platform?",
            answer: "Typically 3-6 months for a full-featured platform, depending on complexity. We can launch an MVP in 6-8 weeks and iterate from there."
          },
          {
            question: "What's the difference between headless and traditional ecommerce?",
            answer: "Headless separates frontend from backend, giving you flexibility to create unique experiences across multiple channels while maintaining a single backend."
          },
          {
            question: "How do you ensure our platform scales with business growth?",
            answer: "We build with microservices architecture, implement proper caching strategies, and use cloud-native solutions that automatically scale based on demand."
          },
          {
            question: "Can you integrate with our existing ERP and inventory systems?",
            answer: "Absolutely! We specialize in API integrations and can connect your ecommerce platform with existing business systems for seamless operations."
          }
        ]}
      />
    </div>
  );
}
