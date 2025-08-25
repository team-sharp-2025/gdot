'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      industry: "Healthcare",
      company: "MediCare Plus",
      title: "Digital Health Platform Transformation",
      description: "Developed a comprehensive telemedicine platform that increased patient engagement by 300% and reduced appointment no-shows by 60%.",
      results: [
        { metric: "300%", label: "Patient Engagement Increase" },
        { metric: "60%", label: "Reduction in No-shows" },
        { metric: "45%", label: "Operational Cost Savings" }
      ],
      testimonial: "GDOT transformed our healthcare delivery model. The platform is intuitive, secure, and has significantly improved our patient outcomes.",
      author: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      rating: 5,
      color: "from-red-500 to-pink-500"
    },
    {
      industry: "E-commerce",
      company: "StyleHub",
      title: "Omnichannel Retail Experience",
      description: "Built a seamless e-commerce platform with mobile app integration, resulting in 250% revenue growth and 180% increase in customer retention.",
      results: [
        { metric: "250%", label: "Revenue Growth" },
        { metric: "180%", label: "Customer Retention" },
        { metric: "3.2x", label: "Mobile Conversion Rate" }
      ],
      testimonial: "The platform GDOT built for us revolutionized our business. Our customers love the seamless experience across all devices.",
      author: "Michael Chen",
      role: "CEO & Founder",
      rating: 5,
      color: "from-blue-500 to-cyan-500"
    },
    {
      industry: "Fintech",
      company: "PayFlow",
      title: "Payment Gateway Innovation",
      description: "Developed a secure, scalable payment processing system that handles $50M+ monthly transactions with 99.99% uptime.",
      results: [
        { metric: "$50M+", label: "Monthly Transaction Volume" },
        { metric: "99.99%", label: "Uptime" },
        { metric: "2.5x", label: "Processing Speed" }
      ],
      testimonial: "GDOT's expertise in fintech is unmatched. They delivered a robust, secure payment system that exceeded our expectations.",
      author: "Lisa Rodriguez",
      role: "CTO",
      rating: 5,
      color: "from-green-500 to-emerald-500"
    },
    {
      industry: "Manufacturing",
      company: "SmartFactory Inc",
      title: "Industry 4.0 Implementation",
      description: "Implemented IoT sensors and predictive analytics, reducing downtime by 40% and increasing production efficiency by 35%.",
      results: [
        { metric: "40%", label: "Downtime Reduction" },
        { metric: "35%", label: "Production Efficiency" },
        { metric: "25%", label: "Maintenance Cost Savings" }
      ],
      testimonial: "GDOT's IoT solution transformed our manufacturing process. The predictive maintenance alone has saved us millions.",
      author: "Robert Thompson",
      role: "Operations Director",
      rating: 5,
      color: "from-purple-500 to-indigo-500"
    }
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results 
            through innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${study.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(study.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                <h4 className="text-lg opacity-90">{study.title}</h4>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs text-gray-600 leading-tight">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-gray-700 italic mb-3">
                    "{study.testimonial}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{study.author}</div>
                      <div className="text-sm text-gray-600">{study.role}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(study.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  asChild
                  className={`w-full bg-gradient-to-r ${study.color} hover:opacity-90 text-white transition-all duration-300`}
                >
                  <Link href={`/case-studies/${study.company.toLowerCase().replace(/\s+/g, '-')}`}>
                    View Full Case Study
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Our Track Record of Success
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-orange-200" />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-orange-100">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-orange-200" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <DollarSign className="w-8 h-8 text-orange-200" />
              </div>
              <div className="text-3xl font-bold mb-2">$2.5B+</div>
              <div className="text-orange-100">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Star className="w-8 h-8 text-orange-200" />
              </div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-orange-100">Client Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
