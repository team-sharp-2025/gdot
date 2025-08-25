'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from 'use-count-up';

export default function IndustryStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: 150, suffix: '+', label: 'Healthcare Solutions', description: 'Digital health platforms delivered' },
    { number: 200, suffix: '+', label: 'E-commerce Projects', description: 'Online stores and marketplaces' },
    { number: 120, suffix: '+', label: 'Fintech Applications', description: 'Financial technology solutions' },
    { number: 80, suffix: '+', label: 'Manufacturing Systems', description: 'Industry 4.0 implementations' },
    { number: 95, suffix: '+', label: 'Education Platforms', description: 'EdTech solutions delivered' },
    { number: 180, suffix: '+', label: 'Retail Solutions', description: 'Omnichannel retail experiences' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Impact Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've successfully delivered innovative solutions across diverse sectors, 
            helping businesses thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-peach-50 to-white p-8 rounded-2xl border border-peach-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {isInView ? (
                    <span>
                      {stat.number}
                      {stat.suffix}
                    </span>
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Combined Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">$2.5B+</div>
              <div className="text-orange-100">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15M+</div>
              <div className="text-orange-100">Users Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-orange-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
