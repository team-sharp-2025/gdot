"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  ShoppingCart,
  Smartphone,
  CreditCard,
  Store,
  Box,
  BarChart3,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import ToolsShowcase from "@/components/industries/ToolsShowcase";
import HowWeWork from "@/components/industries/HowWeWork";
import FAQ from "@/components/industries/FAQ";

export default function EcommerceRetailPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-b from-orange-50 via-orange-100/20 to-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium mb-4">
              Ecommerce & Retail Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Retail Business <br className="hidden md:block" />
              with Expert Ecommerce Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We specialize in building powerful online stores using
              industry-leading platforms like Shopify, WooCommerce, Odoo, and
              BigCommerce. From custom development to optimization, we're your
              partner in digital retail success.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Image
                  src="/images/logos/shopify.png"
                  alt="Shopify"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span className="font-semibold">Shopify Development</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Image
                  src="/images/logos/woocommerce.png"
                  alt="WooCommerce"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span className="font-semibold">WooCommerce Solutions</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Image
                  src="/images/logos/odoo.png"
                  alt="Odoo"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span className="font-semibold">Odoo Integration</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md"
              >
                <Image
                  src="/images/logos/bigcommerce.png"
                  alt="BigCommerce"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span className="font-semibold">BigCommerce Solutions</span>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full"
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="#services">
                  Explore Services <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-16 aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/industries/ecommerce.jpg"
              alt="Ecommerce Solutions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section
        id="platforms"
        className="py-24 bg-gradient-to-b from-white to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leading Ecommerce Platforms We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're certified experts in the world's most powerful ecommerce
              platforms, delivering tailored solutions that drive growth and
              success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "/images/logos/shopify.png",
                title: "Shopify Development",
                features: [
                  "Custom theme development",
                  "App development & integration",
                  "Shopify Plus solutions",
                  "Performance optimization",
                  "Multi-currency setup",
                ],
              },
              {
                icon: "/images/logos/woocommerce.png",
                title: "WooCommerce Solutions",
                features: [
                  "Custom plugin development",
                  "Theme customization",
                  "Payment gateway integration",
                  "Security hardening",
                  "Speed optimization",
                ],
              },
              {
                icon: "/images/logos/odoo.png",
                title: "Odoo ERP & Ecommerce",
                features: [
                  "Full ERP integration",
                  "Custom module development",
                  "Inventory management",
                  "POS integration",
                  "Business process automation",
                ],
              },
              {
                icon: "/images/logos/bigcommerce.png",
                title: "BigCommerce Solutions",
                features: [
                  "Storefront development",
                  "API integrations",
                  "B2B solutions",
                  "Custom checkout flows",
                  "Marketplace development",
                ],
              },
            ].map((platform, i) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-16 w-16 mb-6 mx-auto">
                  <Image
                    src={platform.icon}
                    alt={platform.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-6">
                  {platform.title}
                </h3>
                <ul className="space-y-3">
                  {platform.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Ecommerce Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions that cover every aspect of your online retail
              business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Store,
                title: "Custom Storefronts",
                text: "Beautifully designed, high-converting online stores with seamless user experience.",
                features: [
                  "Responsive design",
                  "Custom checkout",
                  "Product filtering",
                  "Search optimization",
                ],
              },
              {
                icon: Smartphone,
                title: "Mobile Commerce",
                text: "Native apps and PWAs that deliver exceptional shopping experiences on any device.",
                features: [
                  "iOS/Android apps",
                  "PWA development",
                  "Push notifications",
                  "Mobile payments",
                ],
              },
              {
                icon: Box,
                title: "Inventory Management",
                text: "Smart inventory solutions that keep your business running efficiently.",
                features: [
                  "Real-time tracking",
                  "Multi-location support",
                  "Low stock alerts",
                  "Automated reordering",
                ],
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                text: "Data-driven decisions with comprehensive analytics and reporting tools.",
                features: [
                  "Sales tracking",
                  "Customer behavior",
                  "Conversion optimization",
                  "Performance metrics",
                ],
              },
              {
                icon: Truck,
                title: "Shipping & Fulfillment",
                text: "Streamlined shipping operations with major carrier integrations.",
                features: [
                  "Rate calculation",
                  "Label generation",
                  "Order tracking",
                  "Returns management",
                ],
              },
              {
                icon: ShieldCheck,
                title: "Security & Compliance",
                text: "Robust security measures to protect your business and customers.",
                features: [
                  "PCI compliance",
                  "Fraud prevention",
                  "Data encryption",
                  "Regular backups",
                ],
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border border-orange-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <service.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.text}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <ArrowRight className="w-4 h-4 text-orange-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven Ecommerce Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures successful delivery of your
              ecommerce project
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 h-full w-1 bg-orange-200 transform -translate-x-1/2 md:block hidden"></div>

            {[
              {
                title: "Discovery & Strategy",
                description:
                  "We begin with a deep dive into your business objectives, target audience, and market positioning. Our team analyzes competitors, identifies opportunities, and creates a comprehensive roadmap for your ecommerce success.",
                icon: "🎯",
                features: [
                  "Business requirements analysis",
                  "Market & competitor research",
                  "Platform selection guidance",
                  "Technical architecture planning",
                  "Project timeline & milestones",
                ],
              },
              {
                title: "UX Design & Prototyping",
                description:
                  "Our designers craft intuitive, conversion-optimized user experiences that reflect your brand and delight your customers. We create detailed prototypes for seamless shopping journeys.",
                icon: "🎨",
                features: [
                  "User journey mapping",
                  "Wireframing & prototyping",
                  "Mobile-first design",
                  "Brand integration",
                  "UI component library",
                ],
              },
              {
                title: "Development & Integration",
                description:
                  "We build your ecommerce platform using industry best practices and cutting-edge technologies. Our development process ensures scalable, secure, and high-performing solutions.",
                icon: "⚙️",
                features: [
                  "Custom theme development",
                  "Payment gateway integration",
                  "Third-party API connections",
                  "Security implementation",
                  "Performance optimization",
                ],
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous testing across devices, browsers, and user scenarios ensures your store functions flawlessly. We validate all features, integrations, and security measures.",
                icon: "✅",
                features: [
                  "Cross-browser testing",
                  "Mobile responsiveness",
                  "Payment processing",
                  "Load testing",
                  "Security auditing",
                ],
              },
              {
                title: "Launch & Training",
                description:
                  "We ensure a smooth launch with comprehensive monitoring and support. Your team receives detailed training on platform management and best practices.",
                icon: "🚀",
                features: [
                  "Pre-launch checklist",
                  "Data migration",
                  "Staff training",
                  "Launch monitoring",
                  "Documentation",
                ],
              },
              {
                title: "Ongoing Support & Growth",
                description:
                  "Post-launch, we provide continuous support and optimization to maximize your store's performance and drive business growth.",
                icon: "📈",
                features: [
                  "Performance monitoring",
                  "Conversion optimization",
                  "Feature enhancements",
                  "Security updates",
                  "Analytics & reporting",
                ],
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-16 ${
                  i % 2 === 0 ? "md:pr-16" : "md:pl-16 md:grid-flow-dense"
                }`}
              >
                <div
                  className={`bg-white p-8 rounded-2xl shadow-lg ${
                    i % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{step.icon}</span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <ArrowRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden md:block">
                  <div
                    className={`absolute top-1/2 ${
                      i % 2 === 0 ? "right-0" : "left-0"
                    } transform -translate-y-1/2`}
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl">
                      {i + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology Stack & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading technologies and tools to build
              robust ecommerce solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Ecommerce Platforms",
                icon: "🛍️",
                tools: [
                  { name: "Shopify", description: "Custom themes & apps" },
                  { name: "WooCommerce", description: "WordPress integration" },
                  { name: "BigCommerce", description: "Enterprise solutions" },
                  { name: "Magento", description: "B2B commerce" },
                  { name: "PrestaShop", description: "Open source" },
                ],
              },
              {
                category: "Frontend Development",
                icon: "💻",
                tools: [
                  { name: "Next.js", description: "React framework" },
                  { name: "React", description: "UI library" },
                  { name: "TypeScript", description: "Type safety" },
                  { name: "TailwindCSS", description: "Styling" },
                  { name: "GraphQL", description: "API queries" },
                ],
              },
              {
                category: "Backend & Infrastructure",
                icon: "⚙️",
                tools: [
                  { name: "Node.js", description: "Server runtime" },
                  { name: "AWS", description: "Cloud platform" },
                  { name: "Vercel", description: "Deployment" },
                  { name: "Docker", description: "Containerization" },
                  { name: "MongoDB", description: "Database" },
                ],
              },
              {
                category: "Payment & Analytics",
                icon: "💳",
                tools: [
                  { name: "Stripe", description: "Payments" },
                  { name: "PayPal", description: "Payment gateway" },
                  { name: "Google Analytics", description: "Analytics" },
                  { name: "Segment", description: "Customer data" },
                  { name: "Klaviyo", description: "Email marketing" },
                ],
              },
              {
                category: "Search & Performance",
                icon: "🔍",
                tools: [
                  { name: "Elastic", description: "Search engine" },
                  { name: "Redis", description: "Caching" },
                  { name: "Cloudflare", description: "CDN" },
                  { name: "New Relic", description: "Monitoring" },
                ],
              },
              {
                category: "Design & Prototyping",
                icon: "🎨",
                tools: [
                  { name: "Figma", description: "UI design" },
                  { name: "Adobe XD", description: "Prototyping" },
                  { name: "Sketch", description: "Design tool" },
                  { name: "Framer", description: "Animations" },
                  { name: "Storybook", description: "Component library" },
                ],
              },
              {
                category: "Testing & Security",
                icon: "🛡️",
                tools: [
                  { name: "Jest", description: "Testing" },
                  { name: "Cypress", description: "E2E tests" },
                  { name: "SSL/TLS", description: "Encryption" },
                  { name: "reCAPTCHA", description: "Security" },
                  { name: "Auth0", description: "Authentication" },
                ],
              },
              {
                category: "DevOps & CI/CD",
                icon: "🚀",
                tools: [
                  { name: "GitHub Actions", description: "CI/CD" },
                  { name: "Jenkins", description: "Automation" },
                  { name: "Kubernetes", description: "Orchestration" },
                  { name: "Terraform", description: "Infrastructure" },
                  { name: "DataDog", description: "Monitoring" },
                ],
              },
            ].map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-lg font-bold">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.tools.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex items-center text-gray-700"
                    >
                      <ArrowRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{tool.name}</span>
                        <span className="text-sm text-gray-500 ml-2">
                          ({tool.description})
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our ecommerce development services and
              solutions
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question:
                    "Which ecommerce platform should I choose for my business?",
                  answer:
                    "The choice depends on your specific needs. Shopify is excellent for quick launches and scalability, WooCommerce offers great customization with WordPress integration, Odoo provides comprehensive ERP integration with ecommerce capabilities, and BigCommerce is ideal for enterprise-level businesses. We'll help you evaluate factors like budget, technical requirements, customization needs, and growth plans to recommend the best platform for your business.",
                },
                {
                  question:
                    "How long does it take to build a custom ecommerce store?",
                  answer:
                    "Timeline varies based on complexity: Basic stores (4-6 weeks), Custom solutions (2-4 months), Enterprise platforms (4-6 months). We follow an agile approach, launching with core features first and iteratively adding functionality. We can also expedite development for urgent launches while maintaining quality.",
                },
                {
                  question:
                    "What's the difference between headless and traditional ecommerce?",
                  answer:
                    "Traditional ecommerce tightly couples frontend and backend, limiting flexibility. Headless separates them, offering: 1) Freedom to create unique customer experiences, 2) Better performance and scalability, 3) Ability to serve content across multiple channels (web, mobile, IoT), 4) Easier updates and maintenance. We specialize in both approaches and can recommend the best fit for your needs.",
                },
                {
                  question:
                    "Can you migrate my existing store to a new platform?",
                  answer:
                    "Yes, we have extensive experience in ecommerce migrations. Our process includes: 1) Data analysis and mapping, 2) Custom migration scripts for products, customers, and orders, 3) SEO preservation, 4) Thorough testing, 5) Minimal downtime migration. We ensure your historical data, SEO rankings, and customer experience are preserved during the transition.",
                },
                {
                  question: "How do you handle security and compliance?",
                  answer:
                    "Security is paramount in ecommerce. We implement: 1) PCI DSS compliance for payments, 2) SSL/TLS encryption, 3) Regular security audits, 4) Fraud prevention systems, 5) GDPR/CCPA compliance for data protection, 6) Secure authentication and authorization, 7) Regular backups and disaster recovery plans. We also provide security training for your team.",
                },
                {
                  question: "What ongoing support do you provide after launch?",
                  answer:
                    "We offer comprehensive post-launch support including: 1) 24/7 monitoring and incident response, 2) Regular maintenance and updates, 3) Performance optimization, 4) Security patches, 5) Feature enhancements, 6) Analytics and conversion optimization, 7) Technical support for your team. We can customize support plans based on your needs.",
                },
                {
                  question:
                    "Can you integrate with our existing business systems?",
                  answer:
                    "Yes, we specialize in integrating ecommerce platforms with: 1) ERP systems, 2) CRM platforms, 3) Inventory management, 4) Accounting software, 5) Shipping and fulfillment, 6) Marketing automation, 7) Payment gateways. We ensure seamless data flow and process automation across your business ecosystem.",
                },
                {
                  question: "How do you ensure mobile responsiveness?",
                  answer:
                    "Mobile optimization is crucial for ecommerce success. Our approach includes: 1) Mobile-first design philosophy, 2) Responsive testing across devices, 3) Performance optimization for mobile networks, 4) Touch-friendly interfaces, 5) Progressive Web App capabilities, 6) Mobile payment integration, 7) Accelerated Mobile Pages (AMP) when beneficial.",
                },
                {
                  question:
                    "What strategies do you use for performance optimization?",
                  answer:
                    "We implement multiple optimization strategies: 1) CDN implementation, 2) Image optimization, 3) Code minification, 4) Caching solutions, 5) Database optimization, 6) Lazy loading, 7) Server-side rendering when appropriate. We continuously monitor and optimize performance to ensure fast loading times and smooth user experience.",
                },
                {
                  question: "Do you provide marketing and SEO services?",
                  answer:
                    "Yes, we offer comprehensive digital marketing support: 1) SEO optimization, 2) Content strategy, 3) Social media integration, 4) Email marketing setup, 5) Analytics and tracking, 6) Conversion rate optimization, 7) Marketing automation integration. We ensure your store is not just functional but also discoverable and growth-ready.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={`faq-${i}`}
                  value={`faq-${i}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
