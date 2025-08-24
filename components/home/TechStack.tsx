'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cloud, 
  Settings, 
  Brain,
  Layers
} from 'lucide-react';

const techCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Database,
    title: 'Backend',
    technologies: ['Node.js', 'Python', 'Java', 'Go', 'PHP', '.NET'],
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Layers,
    title: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'Firebase'],
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: Settings,
    title: 'Tools & Frameworks',
    technologies: ['Git', 'Jenkins', 'GraphQL', 'REST APIs', 'Microservices', 'Serverless'],
    gradient: 'from-red-500 to-red-600'
  },
  {
    icon: Brain,
    title: 'AI & Data',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Pandas', 'Spark', 'Jupyter'],
    gradient: 'from-teal-500 to-teal-600'
  }
];

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to build scalable, secure, and 
            high-performance solutions that drive your business forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-xl mb-6`}
              >
                <category.icon className="h-7 w-7 text-white" />
              </motion.div>

              <h3 className="text-xl font-poppins font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-block bg-gray-700 hover:bg-orange-500/20 text-gray-300 hover:text-orange-300 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Animation Elements */}
        <div className="relative mt-16 overflow-hidden">
          <motion.div
            animate={{
              x: [-100, 100, -100],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [100, -100, 100],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl"
          />
        </div>
      </div>
    </section>
  );
}