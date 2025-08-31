"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, HelpCircle } from "lucide-react";
import type { ServiceContent } from "@/types/service";
import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSwift,
  SiApple,
  SiAndroid,
  SiFlutter,
  SiAmazon,
  SiGoogle,
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiShopify,
  SiMagento,
  SiWordpress,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiAngular,
  SiVuedotjs,
  SiMongodb,
  SiDrupal,
  SiJoomla,
  SiContentful,
  SiStrapi,
  SiSanity,
  SiLighthouse,
  SiTypescript,
  SiExpress,
  SiGraphql,
  SiPostman,
  SiSwagger,
  SiKotlin,
  SiAndroidstudio,
  SiFirebase,
  SiIonic,
  SiTerraform,
  SiAnsible,
  SiNewrelic,
  SiJira,
  SiAppium,
  SiOpenai,
  SiAnthropic,
  SiHuggingface,
  SiLangchain,
  SiApache,
  SiApachekafka,
  SiSnowflake,
  SiOpencv,
  SiPytorch,
  SiSpacy,
  SiElasticsearch,
  SiRedis,
  SiMysql,
  SiFigma,
  SiAdobexd,
  SiSketch,
} from "react-icons/si";
import {
  FiTarget,
  FiTrendingUp,
  FiShield,
  FiCpu,
  FiUsers,
  FiSettings,
  FiLayout,
  FiCode,
  FiDatabase,
  FiCloud,
  FiSmartphone,
  FiMonitor,
  FiLayers,
  FiRefreshCw,
  FiPackage,
  FiZap,
  FiBarChart2,
  FiImage,
  FiCheckCircle,
  FiHeadphones,
} from "react-icons/fi";

import { 
  FaWordpress, 
  FaGoogle, 
  FaDatabase, 
  FaEye, 
  FaChartBar, 
  FaBrain, 
  FaCode, 
  FaPalette, 
  FaSearch, 
  FaUsers, 
  FaLightbulb, 
  FaPencilRuler, 
  FaMobile, 
  FaDesktop, 
  FaRocket, 
  FaServer, 
  FaShieldAlt, 
  FaLock, 
  FaCog, 
  FaShoppingCart 
} from 'react-icons/fa';

// Tech stack icon mapping
const techIcons: { [key: string]: any } = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Swift: SiSwift,
  iOS: SiApple,
  Android: SiAndroid,
  Flutter: SiFlutter,
  AWS: SiAmazon,
  Azure: FiCloud,
  GCP: SiGoogle,
  Python: SiPython,
  TensorFlow: SiTensorflow,
  "scikit-learn": SiScikitlearn,
  Shopify: SiShopify,
  Magento: SiMagento,
  WooCommerce: SiWordpress,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  Git: SiGit,
  Angular: SiAngular,
  Vue: SiVuedotjs,
  MongoDB: SiMongodb,
  Drupal: SiDrupal,
  Joomla: SiJoomla,
  Contentful: SiContentful,
  Strapi: SiStrapi,
  Sanity: SiSanity,
  Lighthouse: SiLighthouse,
  TypeScript: SiTypescript,
  Express: SiExpress,
  GraphQL: SiGraphql,
  Postman: SiPostman,
  Swagger: SiSwagger,
  Kotlin: SiKotlin,
  AndroidStudio: SiAndroidstudio,
  Firebase: SiFirebase,
  Ionic: SiIonic,
  Terraform: SiTerraform,
  Ansible: SiAnsible,
  Newrelic: SiNewrelic,
  Jira: SiJira,
  Appium: SiAppium,
  OpenAI: SiOpenai,
  Anthropic: SiAnthropic,
  HuggingFace: SiHuggingface,
  LangChain: SiLangchain,
  Apache: SiApache,
  ApacheKafka: SiApachekafka,
  Snowflake: SiSnowflake,
  OpenCV: SiOpencv,
  PyTorch: SiPytorch,
  SpaCy: SiSpacy,
  Elasticsearch: SiElasticsearch,
  Redis: SiRedis,
  MySQL: SiMysql,
  Figma: SiFigma,
  AdobeXD: SiAdobexd,
  Sketch: SiSketch,
  Java: FiCode,
  "Big Query": FiDatabase,
  "Google Data Studio": FiDatabase,
  PowerBI: FiBarChart2,
  Tableau: FiBarChart2,
  Looker: FiBarChart2,
  Qlik: FiBarChart2,
  Workbox: FiPackage,
  Airflow: FiRefreshCw,
  DBT: FiDatabase,
  NLTK: FiCode,
  DynamoDB: FiDatabase,
  "Stable Diffusion": FiImage,
  Midjourney: FiImage,
  Xamarin: FiSmartphone,
  "Microsoft Azure": FiCloud,
  "Machine Learning": FiCpu,
  "Data Science": FiDatabase,
  "Cloud Computing": FiCloud,
  "Web Development": FiCode,
  "Mobile Development": FiSmartphone,
  "API Development": FiCpu,
  "Database Management": FiDatabase,
  "DevOps": FiSettings,
  "Security": FiShield,
  "Testing": FiCheckCircle,
  "Deployment": FiPackage,
  "Monitoring": FiMonitor,
  "Analytics": FiTrendingUp,
  "Automation": FiRefreshCw,
  "Integration": FiCpu,
  "Performance": FiZap,
  "Scalability": FiLayers,
  "Maintenance": FiSettings,
  "Support": FiHeadphones,
  // New technology mappings
  WordPress: FaWordpress,
  "Objective-C": FaCode,
  Xcode: FaDesktop,
  "Core Data": FaDatabase,
  ARKit: FaMobile,
  Jetpack: FaRocket,
  SQLite: FaDatabase,
  Room: FaDatabase,
  "New Relic": SiNewrelic,
  "Google Cloud Platform": FaGoogle,
  "Google Cloud Compute Engine": FaServer,
  Okta: FaShieldAlt,
  "HashiCorp Vault": FaLock,
  Splunk: FaSearch,
  "Google Vertex AI": FaBrain,
  "Hugging Face": SiHuggingface,
  BigQuery: FaDatabase,
  Superset: FaChartBar,
  "Transformers (Hugging Face)": SiHuggingface,
  BigCommerce: FaShoppingCart,
  Hotjar: FaEye,
  "Google Tag Manager": FaCog,
  Miro: FaPencilRuler,
  Notion: FaLightbulb,
  InVision: FaEye,
  Zeplin: FaPalette,
  Maze: FaSearch,
  "Design Strategy": FaLightbulb,
  "Research": FaSearch,
  "Wireframing": FaPencilRuler,
  "UI Design": FaPalette,
  "Product Design": FaRocket,
  "Usability Testing": FaUsers,
};

// Feature/benefit icon mapping
const featureIcons: { [key: string]: any } = {
  Customization: FiSettings,
  Performance: FiTrendingUp,
  Security: FiShield,
  Integration: FiCpu,
  "User Experience": FiUsers,
  Architecture: FiLayout,
  Development: FiCode,
  Database: FiDatabase,
  Cloud: FiCloud,
  Mobile: FiSmartphone,
  Web: FiMonitor,
  Strategy: FiTarget,
  Scalability: FiLayers,
  Automation: FiRefreshCw,
  Deployment: FiPackage,
  Optimization: FiZap,
};

// Color themes for different sections
const sectionThemes = {
  hero: "from-gray-900 to-black",
  description: "from-orange-900 to-orange-800",
  features: "from-orange-50 to-white",
  process: "from-orange-100 to-white",
  techStack: "from-gray-50 to-white",
  benefits: "from-orange-50 to-white",
  faq: "from-gray-50 to-white",
  cta: "from-gray-900 to-gray-800",
};

interface Props {
  service: ServiceContent;
}

export default function ServicePageClient({ service }: Props) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Smart grid layout based on item count
  const getGridClasses = (count: number) => {
    if (count === 1) return "flex justify-center";
    if (count === 2) return "grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto";
    if (count === 3) return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    if (count === 4) return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    if (count === 5)
      return "flex flex-wrap justify-center gap-8 max-w-6xl mx-auto";
    if (count === 6) return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    if (count === 7)
      return "flex flex-wrap justify-center gap-8 max-w-7xl mx-auto";
    if (count === 8) return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    return "flex flex-wrap justify-center gap-8 max-w-7xl mx-auto";
  };

  // Get card width classes based on layout type
  const getCardClasses = (count: number, isFlexLayout: boolean) => {
    if (isFlexLayout) {
      // For flex layouts, use fixed widths to maintain consistency
      return "w-full sm:w-80 lg:w-72 xl:w-80 flex-shrink-0";
    }
    // For grid layouts, let grid handle sizing
    return "w-full";
  };

  // Check if we should use flex layout
  const shouldUseFlex = (count: number) => {
    return count === 5 || count === 7 || count > 8;
  };

  // Get icon component or default
  const getFeatureIcon = (title: string) => {
    const key = Object.keys(featureIcons).find((k) =>
      title.toLowerCase().includes(k.toLowerCase())
    );
    return key ? featureIcons[key] : HelpCircle;
  };

  const getTechIcon = (name: string) => {
    const key = Object.keys(techIcons).find((k) =>
      name.toLowerCase().includes(k.toLowerCase())
    );
    return key ? techIcons[key] : HelpCircle;
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section
        className={`relative h-[70vh] min-h-[600px] w-full bg-gradient-to-br ${sectionThemes.hero}`}
      >
        <div className="absolute inset-0">
          <Image
            src={service.headerImage}
            alt={service.title}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                {service.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#process"
                  className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rich Description Section */}
      <section
        className={`py-20 bg-gradient-to-br ${sectionThemes.description}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white">
              Transform Your Business with {service.title}
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-gray-300 leading-relaxed">
                In today's digital landscape, having a robust{" "}
                {service.title.toLowerCase()} solution is crucial for business
                success. Our expert team combines industry best practices with
                cutting-edge technology to deliver solutions that drive growth
                and innovation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We understand that every business is unique, which is why our{" "}
                {service.title.toLowerCase()} services are tailored to meet your
                specific needs and objectives. Whether you're a startup looking
                to establish your digital presence or an enterprise seeking to
                modernize your systems, we have the expertise to help you
                succeed.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {service.features.slice(0, 3).map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full"
                >
                  <Check className="h-5 w-5 text-orange-400" />
                  <span className="text-white">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 bg-gradient-to-br ${sectionThemes.features}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
              Key Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored to drive your business forward
            </p>
          </motion.div>

          <div className={`gap-8 ${getGridClasses(service.features.length)}`}>
            {service.features.map((feature, index) => {
              const IconComponent = getFeatureIcon(feature.title);
              const isFlexLayout = shouldUseFlex(service.features.length);
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${getCardClasses(
                    service.features.length,
                    isFlexLayout
                  )} group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200`}
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className={`py-20 bg-gradient-to-br ${sectionThemes.process}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
              {service.process.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {service.process.description}
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-200 to-orange-400 hidden lg:block" />

            <div className="space-y-24">
              {service.process.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2 relative">
                    <div
                      className={`bg-white rounded-2xl p-8 pt-12 mt-8 shadow-xl border border-orange-100 transform transition-transform duration-300 hover:scale-105 relative ${
                        index % 2 === 1 ? "lg:ml-8" : "lg:mr-8"
                      }`}
                    >
                      <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className={`py-20 bg-gradient-to-br ${sectionThemes.techStack}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to deliver robust and scalable
              solutions
            </p>
          </motion.div>

          <div
            className={`gap-8 ${getGridClasses(service.technologies.length)}`}
          >
            {service.technologies.map((tech, index) => {
              const IconComponent = getTechIcon(tech.name);
              const isFlexLayout = shouldUseFlex(service.technologies.length);
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${getCardClasses(
                    service.technologies.length,
                    isFlexLayout
                  )} group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 flex-shrink-0 bg-orange-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {tech.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-20 bg-gradient-to-br ${sectionThemes.benefits}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
              Benefits & Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why choose our {service.title.toLowerCase()} services
            </p>
          </motion.div>

          <div className={`gap-8 ${getGridClasses(service.benefits.length)}`}>
            {service.benefits.map((benefit, index) => {
              const IconComponent = getFeatureIcon(benefit.title);
              const isFlexLayout = shouldUseFlex(service.benefits.length);
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${getCardClasses(
                    service.benefits.length,
                    isFlexLayout
                  )} group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 bg-gradient-to-br ${sectionThemes.faq}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our{" "}
              {service.title.toLowerCase()} services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeFaq === index ? "auto" : 0,
                    opacity: activeFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${sectionThemes.cta}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your {service.title.toLowerCase()} project and
              explore how we can help you achieve your goals.
            </p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule a Call
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
