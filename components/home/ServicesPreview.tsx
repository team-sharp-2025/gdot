'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Brain, 
  Palette, 
  Settings,
  Shield,
  BarChart
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies.',
    href: '/services/web-development',
    gradient: 'from-blue-500 to-blue-600',
    delay: 0.1
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android.',
    href: '/services/mobile-apps',
    gradient: 'from-purple-500 to-purple-600',
    delay: 0.2
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    href: '/services/cloud-solutions',
    gradient: 'from-green-500 to-green-600',
    delay: 0.3
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by advanced AI and ML algorithms.',
    href: '/services/ai-ml',
    gradient: 'from-orange-500 to-orange-600',
    delay: 0.4
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates exceptional digital experiences.',
    href: '/services/ui-ux-design',
    gradient: 'from-pink-500 to-pink-600',
    delay: 0.5
  },
  {
    icon: Settings,
    title: 'DevOps',
    description: 'Streamlined development and deployment processes.',
    href: '/services/devops',
    gradient: 'from-red-500 to-red-600',
    delay: 0.6
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    href: '/services/cybersecurity',
    gradient: 'from-gray-700 to-gray-800',
    delay: 0.7
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights.',
    href: '/services/data-analytics',
    gradient: 'from-teal-500 to-teal-600',
    delay: 0.8
  }
];

export default function ServicesPreview() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      updateScrollButtons();
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const cardWidth = clientWidth - 32; // Account for padding
    const maxScroll = scrollWidth - clientWidth;
    
    // Check if first card is fully visible (left arrow should be disabled)
    const isFirstCardVisible = scrollLeft <= cardWidth * 0.1;
    
    // Check if last card is fully visible (right arrow should be disabled)
    const isLastCardVisible = scrollLeft >= maxScroll - cardWidth * 0.1;
    
    setCanScrollLeft(!isFirstCardVisible);
    setCanScrollRight(!isLastCardVisible);
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth - 32; // Account for padding
    
    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth'
    });
    
    setTimeout(updateScrollButtons, 500);
  };

  const handleScroll = () => {
    updateScrollButtons();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end software development 
            services that drive innovation and growth for your business.
          </p>
        </motion.div>

        {/* Mobile Navigation Controls */}
        {isMobile && (
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => scrollTo('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full transition-all duration-300 ${
                canScrollLeft 
                  ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:scale-105' 
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed shadow-sm'
              }`}
              aria-label="Scroll to previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <span className="text-sm text-gray-600 font-medium">
              Scroll to explore services
            </span>
            
            <button
              onClick={() => scrollTo('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full transition-all duration-300 ${
                canScrollRight 
                  ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:scale-105' 
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed shadow-sm'
              }`}
              aria-label="Scroll to next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Services Container */}
        <div className="relative">
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:border-orange-200">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-orange-500 group-hover:text-orange-600 font-medium">
                      Learn More
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="ml-2"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll Layout */}
          <div className="lg:hidden">
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: service.delay * 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group flex-shrink-0 w-[calc(100vw-2rem)] max-w-sm snap-start"
                >
                  <Link href={service.href}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group-hover:border-orange-200">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl mb-4`}
                      >
                        <service.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      
                      <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-orange-500 group-hover:text-orange-600 font-medium text-sm">
                        Learn More
                        <motion.div
                          whileHover={{ x: 3 }}
                          className="ml-2"
                        >
                          <ArrowRight className="h-3 w-3" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="/services"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}