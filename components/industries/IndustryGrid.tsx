'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Heart, 
  ShoppingCart, 
  CreditCard, 
  Factory, 
  GraduationCap, 
  Store, 
  Car, 
  Plane,
  Building2,
  Leaf,
  Shield,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function IndustryGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Digital health platforms, telemedicine solutions, and healthcare management systems that improve patient care and operational efficiency.",
      solutions: ["Telemedicine Platforms", "EHR Systems", "Health Analytics", "Patient Portals"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Complete e-commerce solutions including online stores, marketplaces, and digital retail experiences that drive sales and customer engagement.",
      solutions: ["Online Stores", "Marketplaces", "Mobile Apps", "Payment Integration"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      icon: CreditCard,
      title: "Fintech",
      description: "Innovative financial technology solutions including payment systems, banking platforms, and financial management tools.",
      solutions: ["Payment Gateways", "Banking Apps", "Investment Platforms", "Financial Analytics"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry 4.0 solutions including IoT integration, predictive maintenance, and smart manufacturing systems.",
      solutions: ["IoT Integration", "Predictive Maintenance", "Supply Chain Management", "Quality Control"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "EdTech solutions including learning management systems, virtual classrooms, and educational content platforms.",
      solutions: ["LMS Platforms", "Virtual Classrooms", "Content Management", "Student Analytics"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: Store,
      title: "Retail",
      description: "Omnichannel retail solutions including POS systems, inventory management, and customer experience platforms.",
      solutions: ["POS Systems", "Inventory Management", "Customer Analytics", "Loyalty Programs"],
      color: "from-teal-500 to-blue-500",
      bgColor: "from-teal-50 to-blue-50",
      borderColor: "border-teal-200"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Connected car solutions, fleet management systems, and automotive digital platforms.",
      solutions: ["Connected Car Apps", "Fleet Management", "Service Scheduling", "Vehicle Analytics"],
      color: "from-gray-500 to-slate-500",
      bgColor: "from-gray-50 to-slate-50",
      borderColor: "border-gray-200"
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Digital solutions for travel booking, hotel management, and customer experience enhancement.",
      solutions: ["Booking Platforms", "Hotel Management", "Customer Service", "Travel Analytics"],
      color: "from-sky-500 to-blue-500",
      bgColor: "from-sky-50 to-blue-50",
      borderColor: "border-sky-200"
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Property management platforms, virtual tours, and real estate transaction systems.",
      solutions: ["Property Management", "Virtual Tours", "Transaction Systems", "Market Analytics"],
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-200"
    },
    {
      icon: Leaf,
      title: "Agriculture",
      description: "AgTech solutions including precision farming, crop monitoring, and supply chain optimization.",
      solutions: ["Precision Farming", "Crop Monitoring", "Supply Chain", "Weather Analytics"],
      color: "from-lime-500 to-green-500",
      bgColor: "from-lime-50 to-green-50",
      borderColor: "border-lime-200"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security solutions including threat detection, compliance management, and secure development practices.",
      solutions: ["Threat Detection", "Compliance Management", "Secure Development", "Incident Response"],
      color: "from-red-600 to-red-700",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-300"
    },
    {
      icon: Zap,
      title: "Energy",
      description: "Smart grid solutions, renewable energy management, and energy efficiency platforms.",
      solutions: ["Smart Grid", "Renewable Energy", "Energy Analytics", "Efficiency Monitoring"],
      color: "from-yellow-600 to-orange-600",
      bgColor: "from-yellow-50 to-orange-100",
      borderColor: "border-yellow-300"
    }
  ];

  return (
    <section className="py-20 bg-peach-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare to fintech, we deliver innovative solutions that transform businesses 
            and drive digital transformation across diverse sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${industry.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <industry.icon className="w-8 h-8" />
                  <div className="text-right">
                    <h3 className="text-xl font-bold">{industry.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color} mr-3`}></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  asChild
                  className={`w-full bg-gradient-to-r ${industry.color} hover:opacity-90 text-white transition-all duration-300`}
                >
                  <Link href={`/industries/${industry.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-peach-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're constantly expanding our expertise and can adapt our solutions to meet the unique 
              needs of any industry. Let's discuss how we can help transform your business.
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
              <Link href="/contact">Get Custom Solution</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
