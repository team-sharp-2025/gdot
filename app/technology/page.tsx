'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Code, Database, Cloud, Smartphone, Palette, Shield, Brain, Server } from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const categories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      technologies: [
        { 
          name: 'React', 
          description: 'Modern UI library for scalable web applications',
          logo: '⚛️',
          popularity: 95
        },
        { 
          name: 'Angular', 
          description: 'Full-featured framework for enterprise applications',
          logo: '🅰️',
          popularity: 85
        },
        { 
          name: 'Vue.js', 
          description: 'Progressive framework for building user interfaces',
          logo: '💚',
          popularity: 80
        },
        { 
          name: 'Next.js', 
          description: 'Full-stack React framework with SSR capabilities',
          logo: '▲',
          popularity: 90
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      technologies: [
        { 
          name: 'Node.js', 
          description: 'JavaScript runtime for server-side development',
          logo: '🟢',
          popularity: 92
        },
        { 
          name: 'Java', 
          description: 'Enterprise-grade programming language',
          logo: '☕',
          popularity: 88
        },
        { 
          name: 'Python', 
          description: 'Versatile language for web and data applications',
          logo: '🐍',
          popularity: 90
        },
        { 
          name: '.NET', 
          description: 'Microsoft\'s framework for modern applications',
          logo: '🔷',
          popularity: 82
        },
        { 
          name: 'Spring Boot', 
          description: 'Java framework for microservices architecture',
          logo: '🍃',
          popularity: 85
        }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      technologies: [
        { 
          name: 'React Native', 
          description: 'Cross-platform mobile development with React',
          logo: '📱',
          popularity: 88
        },
        { 
          name: 'Flutter', 
          description: 'Google\'s UI toolkit for beautiful native apps',
          logo: '🦋',
          popularity: 85
        },
        { 
          name: 'Swift', 
          description: 'Apple\'s language for iOS development',
          logo: '🍎',
          popularity: 80
        },
        { 
          name: 'Kotlin', 
          description: 'Modern language for Android development',
          logo: '🤖',
          popularity: 82
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      technologies: [
        { 
          name: 'AWS', 
          description: 'Amazon Web Services cloud platform',
          logo: '☁️',
          popularity: 95
        },
        { 
          name: 'Azure', 
          description: 'Microsoft\'s cloud computing platform',
          logo: '🔵',
          popularity: 85
        },
        { 
          name: 'GCP', 
          description: 'Google Cloud Platform services',
          logo: '🌐',
          popularity: 80
        },
        { 
          name: 'Docker', 
          description: 'Containerization platform for applications',
          logo: '🐳',
          popularity: 90
        },
        { 
          name: 'Kubernetes', 
          description: 'Container orchestration system',
          logo: '⚙️',
          popularity: 88
        },
        { 
          name: 'Terraform', 
          description: 'Infrastructure as Code tool',
          logo: '🏗️',
          popularity: 82
        },
        { 
          name: 'Jenkins', 
          description: 'Automation server for CI/CD pipelines',
          logo: '🔧',
          popularity: 78
        }
      ]
    },
    {
      id: 'database',
      title: 'Databases',
      icon: Database,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      technologies: [
        { 
          name: 'MySQL', 
          description: 'Popular open-source relational database',
          logo: '🐬',
          popularity: 85
        },
        { 
          name: 'PostgreSQL', 
          description: 'Advanced open-source relational database',
          logo: '🐘',
          popularity: 88
        },
        { 
          name: 'MongoDB', 
          description: 'NoSQL document-oriented database',
          logo: '🍃',
          popularity: 82
        },
        { 
          name: 'Redis', 
          description: 'In-memory data structure store',
          logo: '🔴',
          popularity: 80
        },
        { 
          name: 'DynamoDB', 
          description: 'Amazon\'s NoSQL database service',
          logo: '⚡',
          popularity: 75
        }
      ]
    },
    {
      id: 'design',
      title: 'UI/UX Tools',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      technologies: [
        { 
          name: 'Figma', 
          description: 'Collaborative design and prototyping tool',
          logo: '🎨',
          popularity: 95
        },
        { 
          name: 'Adobe XD', 
          description: 'Adobe\'s UX/UI design and prototyping tool',
          logo: '🔷',
          popularity: 80
        },
        { 
          name: 'Sketch', 
          description: 'Digital design toolkit for Mac',
          logo: '💎',
          popularity: 75
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Testing',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      technologies: [
        { 
          name: 'OWASP', 
          description: 'Web application security standards',
          logo: '🛡️',
          popularity: 85
        },
        { 
          name: 'Selenium', 
          description: 'Web application testing framework',
          logo: '🕷️',
          popularity: 82
        },
        { 
          name: 'JMeter', 
          description: 'Performance testing tool',
          logo: '⚡',
          popularity: 78
        },
        { 
          name: 'Postman', 
          description: 'API development and testing platform',
          logo: '📮',
          popularity: 90
        }
      ]
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current && titleRef.current) {
      // Animate title on scroll
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate category cards
      const cards = containerRef.current.querySelectorAll('.tech-card');
      gsap.fromTo(cards,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const ActiveIcon = categories[activeCategory].icon;

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-peach-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The Stack Behind
            <span className="block bg-peach-gradient bg-clip-text text-transparent">
              Our Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry-leading tools to build 
            scalable, secure, and high-performance solutions that drive business success.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 bg-white rounded-2xl p-2 shadow-lg border border-gray-100 overflow-x-auto">
            <button
              onClick={prevCategory}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 whitespace-nowrap ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.title}</span>
                </button>
              ))}
            </div>
            
            <button
              onClick={nextCategory}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Technology Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="max-w-6xl mx-auto"
          >
            <div className={`${categories[activeCategory].bgColor} rounded-3xl p-8 md:p-12`}>
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${categories[activeCategory].color} text-white mb-4`}>
                  <ActiveIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {categories[activeCategory].title}
                </h3>
                <p className="text-gray-600">
                  {categories[activeCategory].technologies.length} technologies mastered
                </p>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {categories[activeCategory].technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className="tech-card group relative"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="text-center">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {tech.logo}
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">
                          {tech.name}
                        </h4>
                        
                        {/* Popularity Bar */}
                        <div className="mb-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full bg-gradient-to-r ${categories[activeCategory].color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.popularity}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 mt-1">
                            {tech.popularity}% expertise
                          </span>
                        </div>

                        <AnimatePresence>
                          {hoveredTech === tech.name && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-sm text-gray-600 leading-relaxed"
                            >
                              {tech.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-600">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 bg-clip-text text-transparent mb-2">
                  8
                </div>
                <div className="text-gray-600">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-gray-600">Up-to-date Stack</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;