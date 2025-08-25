"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  ShoppingCart,
  Globe,
  Database,
  Server,
  Zap,
  Shield,
  Cpu,
  Monitor,
  Layers,
  GitBranch,
  Package,
  Settings,
  Terminal,
  Box,
  HardDrive,
  Network,
  Lock,
  Activity,
  BarChart3,
  Eye,
  Users,
  ShoppingBag,
  CreditCard,
  Truck,
  Store,
  Coffee,
  Gem,
  Leaf,
  Flame,
  Sparkles,
  Ship,
  FileText,
  MessageCircle,
  Share,
  BookOpen,
  Droplets,
  DollarSign,
  Image,
  Coins,
  Target,
  RefreshCw,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Icon mapping for service icons
const iconMap = {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  ShoppingCart,
};

// Technology icons mapping
const techIcons = {
  // Frontend
  React: { icon: Globe, color: "from-blue-500 to-cyan-500" },
  "Next.js": { icon: Zap, color: "from-black to-gray-800" },
  "Vue.js": { icon: Globe, color: "from-green-500 to-emerald-500" },
  Angular: { icon: Globe, color: "from-red-500 to-pink-500" },
  TypeScript: { icon: Code, color: "from-blue-600 to-blue-700" },
  "Tailwind CSS": { icon: Palette, color: "from-cyan-500 to-blue-500" },

  // Backend
  "Node.js": { icon: Server, color: "from-green-600 to-green-700" },
  Python: { icon: Cpu, color: "from-blue-500 to-yellow-500" },
  Java: { icon: Coffee, color: "from-orange-500 to-red-500" },
  PHP: { icon: Server, color: "from-purple-500 to-pink-500" },
  Go: { icon: Zap, color: "from-blue-500 to-cyan-500" },
  "Ruby on Rails": { icon: Gem, color: "from-red-500 to-pink-500" },

  // Database
  PostgreSQL: { icon: Database, color: "from-blue-600 to-blue-700" },
  MongoDB: { icon: Leaf, color: "from-green-500 to-green-600" },
  MySQL: { icon: Database, color: "from-blue-500 to-blue-600" },
  Redis: { icon: Zap, color: "from-red-500 to-red-600" },
  Firebase: { icon: Flame, color: "from-orange-500 to-yellow-500" },

  // Cloud
  AWS: { icon: Cloud, color: "from-orange-500 to-yellow-500" },
  Azure: { icon: Cloud, color: "from-blue-500 to-blue-600" },
  "Google Cloud": { icon: Cloud, color: "from-blue-500 to-green-500" },
  Vercel: { icon: Zap, color: "from-black to-gray-800" },
  Netlify: { icon: Globe, color: "from-green-500 to-blue-500" },

  // Mobile
  Swift: { icon: Smartphone, color: "from-orange-500 to-red-500" },
  Kotlin: { icon: Code, color: "from-purple-500 to-pink-500" },
  "React Native": { icon: Smartphone, color: "from-blue-500 to-cyan-500" },
  Flutter: { icon: Zap, color: "from-blue-500 to-cyan-500" },
  Xamarin: { icon: Smartphone, color: "from-purple-500 to-pink-500" },
  Ionic: { icon: Smartphone, color: "from-blue-500 to-purple-500" },

  // AI/ML
  TensorFlow: { icon: Brain, color: "from-orange-500 to-red-500" },
  PyTorch: { icon: Flame, color: "from-red-500 to-orange-500" },
  "Scikit-learn": { icon: Cpu, color: "from-orange-500 to-yellow-500" },
  Keras: { icon: Brain, color: "from-red-500 to-pink-500" },
  "AWS SageMaker": { icon: Brain, color: "from-orange-500 to-yellow-500" },
  "Azure ML": { icon: Brain, color: "from-blue-500 to-blue-600" },
  "Google AI": { icon: Brain, color: "from-blue-500 to-green-500" },
  Databricks: { icon: Sparkles, color: "from-blue-500 to-purple-500" },

  // Design
  Figma: { icon: Palette, color: "from-purple-500 to-pink-500" },
  Sketch: { icon: Palette, color: "from-yellow-500 to-orange-500" },
  "Adobe XD": { icon: Palette, color: "from-pink-500 to-purple-500" },
  InVision: { icon: Eye, color: "from-purple-500 to-pink-500" },
  Framer: { icon: Zap, color: "from-blue-500 to-purple-500" },
  Principle: { icon: Settings, color: "from-purple-500 to-pink-500" },
  Protopie: { icon: Zap, color: "from-blue-500 to-cyan-500" },
  Axure: { icon: Settings, color: "from-blue-500 to-blue-600" },

  // Ecommerce
  Shopify: { icon: Store, color: "from-green-500 to-green-600" },
  WooCommerce: { icon: ShoppingBag, color: "from-purple-500 to-pink-500" },
  Magento: { icon: Store, color: "from-orange-500 to-red-500" },
  "Custom Solutions": { icon: Settings, color: "from-gray-500 to-gray-600" },
  Stripe: { icon: CreditCard, color: "from-purple-500 to-pink-500" },
  PayPal: { icon: CreditCard, color: "from-blue-500 to-blue-600" },
  Square: { icon: CreditCard, color: "from-green-500 to-green-600" },
  Razorpay: { icon: CreditCard, color: "from-blue-500 to-purple-500" },

  // DevOps
  Docker: { icon: Box, color: "from-blue-500 to-blue-600" },
  Kubernetes: { icon: Ship, color: "from-blue-500 to-blue-600" },
  ECS: { icon: Server, color: "from-orange-500 to-yellow-500" },
  GKE: { icon: Cloud, color: "from-blue-500 to-green-500" },
  "AWS Lambda": { icon: Zap, color: "from-orange-500 to-yellow-500" },
  "Azure Functions": { icon: Zap, color: "from-blue-500 to-blue-600" },
  "Cloud Functions": { icon: Zap, color: "from-blue-500 to-green-500" },

  // Monitoring
  CloudWatch: { icon: Activity, color: "from-orange-500 to-yellow-500" },
  "Azure Monitor": { icon: Activity, color: "from-blue-500 to-blue-600" },
  Stackdriver: { icon: Activity, color: "from-blue-500 to-green-500" },
  Datadog: { icon: BarChart3, color: "from-purple-500 to-pink-500" },

  // Research
  Hotjar: { icon: Eye, color: "from-purple-500 to-pink-500" },
  "Google Analytics": { icon: BarChart3, color: "from-blue-500 to-green-500" },
  UserTesting: { icon: Users, color: "from-green-500 to-green-600" },
  "Optimal Workshop": { icon: Settings, color: "from-blue-500 to-blue-600" },

  // Collaboration
  Miro: { icon: Users, color: "from-yellow-500 to-orange-500" },
  Notion: { icon: FileText, color: "from-black to-gray-800" },
  Slack: { icon: MessageCircle, color: "from-purple-500 to-pink-500" },
  Zeplin: { icon: Share, color: "from-blue-500 to-blue-600" },

  // Tools
  Xcode: { icon: Code, color: "from-blue-500 to-blue-600" },
  "Android Studio": { icon: Code, color: "from-green-500 to-green-600" },
  "VS Code": { icon: Code, color: "from-blue-500 to-blue-600" },
  Jupyter: { icon: BookOpen, color: "from-orange-500 to-yellow-500" },
  MLflow: { icon: GitBranch, color: "from-blue-500 to-purple-500" },
  "Weights & Biases": { icon: Sparkles, color: "from-purple-500 to-pink-500" },
  DVC: { icon: GitBranch, color: "from-blue-500 to-blue-600" },

  // Languages
  R: { icon: BarChart3, color: "from-blue-500 to-blue-600" },
  Julia: { icon: Zap, color: "from-purple-500 to-pink-500" },
  Scala: { icon: Code, color: "from-red-500 to-red-600" },

  // Backend Services
  "AWS Amplify": { icon: Zap, color: "from-orange-500 to-yellow-500" },
  GraphQL: { icon: Network, color: "from-pink-500 to-purple-500" },

  // Security
  IAM: { icon: Shield, color: "from-orange-500 to-yellow-500" },
  Encryption: { icon: Lock, color: "from-green-500 to-green-600" },
  "Compliance (GDPR, HIPAA)": {
    icon: Shield,
    color: "from-blue-500 to-blue-600",
  },
  "Security Training": { icon: Users, color: "from-purple-500 to-pink-500" },

  // Infrastructure
  "Digital Ocean": { icon: Droplets, color: "from-blue-500 to-blue-600" },
  "Infrastructure as Code": {
    icon: Code,
    color: "from-green-500 to-green-600",
  },
  "Monitoring & Logging": {
    icon: Activity,
    color: "from-blue-500 to-blue-600",
  },
  "Automated Testing": {
    icon: CheckCircle,
    color: "from-green-500 to-green-600",
  },

  // Data
  "Data Warehousing": { icon: Database, color: "from-blue-500 to-blue-600" },
  "Business Intelligence": {
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
  },
  "Real-time Analytics": {
    icon: Activity,
    color: "from-green-500 to-green-600",
  },
  "Data Visualization": {
    icon: BarChart3,
    color: "from-blue-500 to-purple-500",
  },

  // Blockchain
  "Smart Contracts": { icon: FileText, color: "from-blue-500 to-blue-600" },
  "DeFi Applications": {
    icon: DollarSign,
    color: "from-green-500 to-green-600",
  },
  "NFT Platforms": { icon: Image, color: "from-purple-500 to-pink-500" },
  "Cryptocurrency Solutions": {
    icon: Coins,
    color: "from-yellow-500 to-orange-500",
  },

  // Testing
  "Performance Testing": { icon: Zap, color: "from-orange-500 to-yellow-500" },
  "Security Testing": { icon: Shield, color: "from-red-500 to-red-600" },
  "User Acceptance Testing": {
    icon: Users,
    color: "from-blue-500 to-blue-600",
  },

  // Consulting
  "Technology Strategy": { icon: Target, color: "from-blue-500 to-blue-600" },
  "Digital Transformation": {
    icon: RefreshCw,
    color: "from-purple-500 to-pink-500",
  },
  "System Architecture": { icon: Layers, color: "from-green-500 to-green-600" },
  "Technical Leadership": {
    icon: Users,
    color: "from-orange-500 to-orange-600",
  },
};

// Fallback icons for missing tech
const fallbackIcons = {
  Coffee: Coffee,
  Gem: Gem,
  Leaf: Leaf,
  Flame: Flame,
  Sparkles: Sparkles,
  Ship: Ship,
  FileText: FileText,
  MessageCircle: MessageCircle,
  Share: Share,
  BookOpen: BookOpen,
  Network: Network,
  Droplets: Droplets,
  DollarSign: DollarSign,
  Image: Image,
  Coins: Coins,
  Target: Target,
  RefreshCw: RefreshCw,
};

interface ServicePageClientProps {
  service: {
    title: string;
    icon: string;
    gradient: string;
    description: string;
    longDescription: string;
    subServices: Array<{
      title: string;
      description: string;
    }>;
    techStack: Record<string, string[]>;
    process: Array<{
      step: number;
      title: string;
      description: string;
      icon: string;
    }>;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export function ServicePageClient({ service }: ServicePageClientProps) {
  const ServiceIcon = iconMap[service.icon as keyof typeof iconMap];

  const getTechIcon = (techName: string) => {
    const tech = techIcons[techName as keyof typeof techIcons];
    if (tech) {
      const IconComponent = tech.icon;
      return { IconComponent, color: tech.color };
    }
    // Fallback to a default icon
    return { IconComponent: Code, color: "from-gray-500 to-gray-600" };
  };

  const getTechLogo = (techName: string) => {
    const tech = techIcons[techName as keyof typeof techIcons];
    if (tech) {
      const IconComponent = tech.icon;
      return (
        <IconComponent
          className="w-full h-full"
          style={{ color: getTechColor(techName) }}
        />
      );
    }
    return <Code className="w-full h-full text-gray-400" />;
  };

  const getTechColor = (techName: string) => {
    const colorMap: Record<string, string> = {
      // Frontend
      React: "#61DAFB",
      "Next.js": "#000000",
      "Vue.js": "#4FC08D",
      Angular: "#DD0031",
      TypeScript: "#3178C6",
      "Tailwind CSS": "#06B6D4",

      // Backend
      "Node.js": "#339933",
      Python: "#3776AB",
      Java: "#ED8B00",
      PHP: "#777BB4",
      Go: "#00ADD8",
      "Ruby on Rails": "#CC0000",

      // Database
      PostgreSQL: "#336791",
      MongoDB: "#47A248",
      MySQL: "#4479A1",
      Redis: "#DC382D",
      Firebase: "#FFCA28",

      // Cloud
      AWS: "#FF9900",
      Azure: "#0089D6",
      "Google Cloud": "#4285F4",
      Vercel: "#000000",
      Netlify: "#00C7B7",

      // Mobile
      Swift: "#FA7343",
      Kotlin: "#7F52FF",
      "React Native": "#61DAFB",
      Flutter: "#02569B",
      Xamarin: "#3498DB",
      Ionic: "#3880FF",

      // AI/ML
      TensorFlow: "#FF6F00",
      PyTorch: "#EE4C2C",
      "Scikit-learn": "#F7931E",
      Keras: "#D00000",
      "AWS SageMaker": "#FF9900",
      "Azure ML": "#0089D6",
      "Google AI": "#4285F4",
      Databricks: "#FF3621",

      // Design
      Figma: "#F24E1E",
      Sketch: "#F7B500",
      "Adobe XD": "#FF61F6",
      InVision: "#FF3366",
      Framer: "#0055FF",
      Principle: "#5A5A5A",
      Protopie: "#00D4AA",
      Axure: "#FF6B35",

      // Ecommerce
      Shopify: "#95BF47",
      WooCommerce: "#96588A",
      Magento: "#F46F25",
      "Custom Solutions": "#6B7280",
      Stripe: "#6772E5",
      PayPal: "#00457C",
      Square: "#3E434A",
      Razorpay: "#0C2451",

      // DevOps
      Docker: "#2496ED",
      Kubernetes: "#326CE5",
      ECS: "#FF9900",
      GKE: "#4285F4",
      "AWS Lambda": "#FF9900",
      "Azure Functions": "#0089D6",
      "Cloud Functions": "#4285F4",

      // Monitoring
      CloudWatch: "#FF9900",
      "Azure Monitor": "#0089D6",
      Stackdriver: "#4285F4",
      Datadog: "#632CA6",

      // Research
      Hotjar: "#FF6B35",
      "Google Analytics": "#4285F4",
      UserTesting: "#FF6B35",
      "Optimal Workshop": "#4285F4",

      // Collaboration
      Miro: "#FFD02F",
      Notion: "#000000",
      Slack: "#4A154B",
      Zeplin: "#FDBD39",

      // Tools
      Xcode: "#147EFB",
      "Android Studio": "#3DDC84",
      "VS Code": "#007ACC",
      Jupyter: "#F37626",
      MLflow: "#0194E2",
      "Weights & Biases": "#FFBE00",
      DVC: "#13ADC7",

      // Languages
      R: "#276DC3",
      Julia: "#9558B2",
      Scala: "#DC322F",

      // Backend Services
      "AWS Amplify": "#FF9900",
      GraphQL: "#E10098",

      // Security
      IAM: "#FF9900",
      Encryption: "#059669",
      "Compliance (GDPR, HIPAA)": "#2563EB",
      "Security Training": "#7C3AED",

      // Infrastructure
      "Digital Ocean": "#0080FF",
      "Infrastructure as Code": "#059669",
      "Monitoring & Logging": "#2563EB",
      "Automated Testing": "#059669",

      // Data
      "Data Warehousing": "#2563EB",
      "Business Intelligence": "#7C3AED",
      "Real-time Analytics": "#059669",
      "Data Visualization": "#2563EB",

      // Blockchain
      "Smart Contracts": "#2563EB",
      "DeFi Applications": "#059669",
      "NFT Platforms": "#7C3AED",
      "Cryptocurrency Solutions": "#F59E0B",

      // Testing
      "Performance Testing": "#F59E0B",
      "Security Testing": "#DC2626",
      "User Acceptance Testing": "#2563EB",

      // Consulting
      "Technology Strategy": "#2563EB",
      "Digital Transformation": "#7C3AED",
      "System Architecture": "#059669",
      "Technical Leadership": "#EA580C",
    };

    return colorMap[techName] || "#6B7280";
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-peach-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div
              className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl mb-8 shadow-lg`}
            >
              <ServiceIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-8">
              About Our {service.title} Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub Services */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive {service.title.toLowerCase()} solutions tailored to
              your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.subServices.map((subService, index) => (
              <motion.div
                key={subService.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">
                  {subService.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {subService.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              Modern technologies and tools we use for{" "}
              {service.title.toLowerCase()}
            </p>
          </motion.div>

          <div className="space-y-12">
            {Object.entries(service.techStack).map(
              ([category, technologies], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6 capitalize flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                      <Code className="h-4 w-4 text-white" />
                    </div>
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                    {technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + techIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -8 }}
                        className="group"
                      >
                        <div className="relative">
                          {/* Tech Logo Container */}
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-gray-100 group-hover:border-orange-200">
                            {/* Tech Logo - Using SVG icons with tech-specific colors */}
                            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                              {getTechLogo(tech)}
                            </div>
                          </div>

                          {/* Tech Name */}
                          <div className="mt-3 text-center">
                            <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                              {tech}
                            </span>
                          </div>

                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">
              A proven methodology for delivering exceptional{" "}
              {service.title.toLowerCase()} solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}
                  >
                    {step.step}
                  </div>
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our {service.title.toLowerCase()} services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Let's discuss your {service.title.toLowerCase()} project and
              explore how we can help you achieve your goals. Get started with a
              free consultation.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
