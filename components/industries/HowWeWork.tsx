'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

type WorkStep = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function HowWeWork({ title, steps }: { title: string; steps: WorkStep[] }) {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-peach-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology combines industry expertise with cutting-edge technology to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-peach-100 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon || <CheckCircle2 className="w-6 h-6 text-white" />}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-orange-600 mb-1">Step {String(index + 1).padStart(2, '0')}</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
