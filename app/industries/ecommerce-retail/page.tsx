'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart, Smartphone, CreditCard } from 'lucide-react';

export default function EcommerceRetailPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-peach-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium mb-4">Ecommerce & Retail</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Build, scale and optimize your commerce</h1>
            <p className="text-lg text-gray-600 mb-6">We craft blazing-fast storefronts, seamless checkout flows and omnichannel experiences that delight shoppers and grow revenue.</p>
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
            <Image src="/images/industries/e-com.webp" alt="Ecommerce" fill className="object-cover" />
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
    </div>
  );
}
