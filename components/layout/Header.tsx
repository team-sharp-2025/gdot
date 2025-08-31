"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion as m, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  ShoppingCart,
  ShoppingBag,
  HeartPulse,
  Landmark,
  GraduationCap,
} from "lucide-react"; // Import required icons

// Define a mapping of category -> icon
const megaMenuIcons: Record<string, React.ReactNode> = {
  "Web Development": <Code className="h-5 w-5 mr-2 text-orange-500" />,
  "Mobile App Development": (
    <Smartphone className="h-5 w-5 mr-2 text-orange-500" />
  ),
  "Cloud Solutions": <Cloud className="h-5 w-5 mr-2 text-orange-500" />,
  "Data & AI": <Brain className="h-5 w-5 mr-2 text-orange-500" />,
  "E-Commerce Solutions": (
    <ShoppingCart className="h-5 w-5 mr-2 text-orange-500" />
  ),
  "UI/UX Design": <Palette className="h-5 w-5 mr-2 text-orange-500" />,
  "Ecommerce & Retail": (
    <ShoppingBag className="h-5 w-5 mr-2 text-orange-500" />
  ),
  Healthcare: <HeartPulse className="h-5 w-5 mr-2 text-orange-500" />,
  Finance: <Landmark className="h-5 w-5 mr-2 text-orange-500" />,
  Education: <GraduationCap className="h-5 w-5 mr-2 text-orange-500" />,
};

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    megaMenu: {
      "Web Development": [
        {
          name: "Custom Web Applications",
          href: "/services/web-development/custom-web-applications",
        },
        {
          name: "CMS Development",
          href: "/services/web-development/cms-development",
        },
        {
          name: "Progressive Web Apps (PWAs)",
          href: "/services/web-development/progressive-web-apps",
        },
        {
          name: "API Development & Integration",
          href: "/services/web-development/api-development",
        },
      ],
      "Mobile App Development": [
        {
          name: "iOS Development",
          href: "/services/mobile-apps/ios-development",
        },
        {
          name: "Android Development",
          href: "/services/mobile-apps/android-development",
        },
        {
          name: "Cross-Platform Apps",
          href: "/services/mobile-apps/cross-platform",
        },
        {
          name: "App Maintenance & Support",
          href: "/services/mobile-apps/maintenance",
        },
      ],
      "Cloud Solutions": [
        {
          name: "Cloud Strategy & Consulting",
          href: "/services/cloud-solutions/strategy",
        },
        {
          name: "Cloud Migration & Modernization",
          href: "/services/cloud-solutions/migration",
        },
        {
          name: "Cloud Infrastructure Management",
          href: "/services/cloud-solutions/infrastructure",
        },
        {
          name: "DevOps & Automation",
          href: "/services/cloud-solutions/devops",
        },
        {
          name: "Cloud Security & Compliance",
          href: "/services/cloud-solutions/security",
        },
      ],
      "Data & AI": [
        {
          name: "AI & Machine Learning Solutions",
          href: "/services/ai/machine-learning",
        },
        {
          name: "Generative AI Services",
          href: "/services/ai/generative-ai",
        },
        {
          name: "Data Engineering & Management",
          href: "/services/ai/data-engineering",
        },
        {
          name: "Business Intelligence & Analytics",
          href: "/services/ai/analytics",
        },
        {
          name: "Computer Vision & NLP",
          href: "/services/ai/computer-vision-nlp",
        },
      ],
      "E-Commerce Solutions": [
        {
          name: "Custom E-Commerce Development",
          href: "/services/ecommerce/custom",
        },
        {
          name: "Shopify Development",
          href: "/services/ecommerce/shopify",
        },
        {
          name: "WooCommerce Development",
          href: "/services/ecommerce/woocommerce",
        },
        {
          name: "Magento / BigCommerce Development",
          href: "/services/ecommerce/magento",
        },
        {
          name: "Marketplace & Headless Commerce",
          href: "/services/ecommerce/marketplace",
        },
        {
          name: "E-Commerce Optimization",
          href: "/services/ecommerce/optimization",
        },
      ],
      "UI/UX Design": [
        {
          name: "Design Strategy & Research",
          href: "/services/design/strategy",
        },
        {
          name: "Wireframing & Prototyping",
          href: "/services/design/wireframing",
        },
        {
          name: "Web & Mobile UI Design",
          href: "/services/design/ui-design",
        },
        {
          name: "Product Design & Usability Testing",
          href: "/services/design/product-design",
        },
      ],
    },
    // Mobile submenu (keeping the original structure for mobile)
    submenu: [
      {
        name: "Web Development",
        submenu: [
          {
            name: "Custom Web Applications",
            href: "/services/web-development/custom-web-applications",
          },
          {
            name: "CMS Development",
            href: "/services/web-development/cms-development",
          },
          {
            name: "Progressive Web Apps (PWAs)",
            href: "/services/web-development/progressive-web-apps",
          },
          {
            name: "API Development & Integration",
            href: "/services/web-development/api-development",
          },
        ],
      },
      {
        name: "Mobile App Development",
        submenu: [
          {
            name: "iOS Development",
            href: "/services/mobile-apps/ios-development",
          },
          {
            name: "Android Development",
            href: "/services/mobile-apps/android-development",
          },
          {
            name: "Cross-Platform Apps",
            href: "/services/mobile-apps/cross-platform",
          },
          {
            name: "App Maintenance & Support",
            href: "/services/mobile-apps/maintenance",
          },
        ],
      },
      {
        name: "Cloud Solutions",
        submenu: [
          {
            name: "Cloud Strategy & Consulting",
            href: "/services/cloud-solutions/strategy",
          },
          {
            name: "Cloud Migration & Modernization",
            href: "/services/cloud-solutions/migration",
          },
          {
            name: "Cloud Infrastructure Management",
            href: "/services/cloud-solutions/infrastructure",
          },
          {
            name: "DevOps & Automation",
            href: "/services/cloud-solutions/devops",
          },
          {
            name: "Cloud Security & Compliance",
            href: "/services/cloud-solutions/security",
          },
        ],
      },
      {
        name: "Data & AI",
        submenu: [
          {
            name: "AI & Machine Learning Solutions",
            href: "/services/ai/machine-learning",
          },
          {
            name: "Generative AI Services",
            href: "/services/ai/generative-ai",
          },
          {
            name: "Data Engineering & Management",
            href: "/services/ai/data-engineering",
          },
          {
            name: "Business Intelligence & Analytics",
            href: "/services/ai/analytics",
          },
          {
            name: "Computer Vision & NLP",
            href: "/services/ai/computer-vision-nlp",
          },
        ],
      },
      {
        name: "E-Commerce Solutions",
        submenu: [
          {
            name: "Custom E-Commerce Development",
            href: "/services/ecommerce/custom",
          },
          {
            name: "Shopify Development",
            href: "/services/ecommerce/shopify",
          },
          {
            name: "WooCommerce Development",
            href: "/services/ecommerce/woocommerce",
          },
          {
            name: "Magento / BigCommerce Development",
            href: "/services/ecommerce/magento",
          },
          {
            name: "Marketplace & Headless Commerce",
            href: "/services/ecommerce/marketplace",
          },
          {
            name: "E-Commerce Optimization",
            href: "/services/ecommerce/optimization",
          },
        ],
      },
      {
        name: "UI/UX Design",
        submenu: [
          {
            name: "Design Strategy & Research",
            href: "/services/design/strategy",
          },
          {
            name: "Wireframing & Prototyping",
            href: "/services/design/wireframing",
          },
          {
            name: "Web & Mobile UI Design",
            href: "/services/design/ui-design",
          },
          {
            name: "Product Design & Usability Testing",
            href: "/services/design/product-design",
          },
        ],
      },
    ],
  },
  { name: "About", href: "/about" },
  {
    name: "Industries",
    href: "/industries",
    megaMenu: {
      "Ecommerce & Retail": [
        { name: "Ecommerce & Retail", href: "/industries/ecommerce-retail" },
      ],
      Healthcare: [{ name: "Healthcare", href: "/industries/healthcare" }],
      Finance: [{ name: "Finance", href: "/industries/finance" }],
      Education: [{ name: "Education", href: "/industries/education" }],
    },
  },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeChildSubmenu, setActiveChildSubmenu] = useState<string | null>(
    null
  );
  const pathname = usePathname();

  // Check if we're on the landing page
  const isLandingPage = pathname === "/";

  // Track if we're in the hero section (dark background area) - only relevant for landing page
  const [isInHeroSection, setIsInHeroSection] = useState(isLandingPage);

  useEffect(() => {
    const handleScroll = () => {
      if (!isLandingPage) {
        // For non-landing pages, never in hero section and use normal scroll behavior
        setIsInHeroSection(false);
        setScrolled(window.scrollY > 20);
        return;
      }

      const scrollY = window.scrollY;
      // Assuming hero section is roughly viewport height (adjust this value based on your hero section height)
      const heroSectionHeight = window.innerHeight - 100; // Full viewport minus some buffer

      const stillInHero = scrollY < heroSectionHeight;
      setIsInHeroSection(stillInHero);
      setScrolled(!stillInHero); // Only set scrolled to true when we leave hero section
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLandingPage]);

  // Reset states when pathname changes
  useEffect(() => {
    if (!isLandingPage) {
      setIsInHeroSection(false);
      setScrolled(window.scrollY > 20);
    } else {
      setIsInHeroSection(true);
      setScrolled(false);
    }
  }, [isLandingPage]);

  // Dynamic text colors
  const getTextColor = () => {
    if (isLandingPage && isInHeroSection) {
      return "text-white hover:text-orange-300"; // White text when in dark hero section on landing page
    }
    return "text-gray-700 hover:text-orange-500"; // Dark text for all other cases
  };

  const getLogoTextColor = () => {
    if (isLandingPage && isInHeroSection) {
      return "text-white"; // White logo text when in dark hero section on landing page
    }
    return "text-gray-900"; // Dark logo text for all other cases
  };

  const getMobileIconColor = () => {
    if (isLandingPage && isInHeroSection) {
      return "text-white"; // White mobile menu icon when in dark hero section on landing page
    }
    return "text-gray-900"; // Dark mobile menu icon for all other cases
  };

  return (
    <>
      <m.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-peach-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <span
                  className={`font-poppins font-bold text-xl ${getLogoTextColor()}`}
                >
                  GDOT
                </span>
              </Link>
            </m.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.megaMenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveMegaMenu(item.name)}
                      onMouseLeave={() => setActiveMegaMenu(null)}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center transition-colors font-medium ${getTextColor()}`}
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center transition-colors font-medium ${getTextColor()}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 ${getMobileIconColor()}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <m.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t border-gray-200"
              >
                <div className="px-4 py-6 space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.megaMenu ? (
                        <div className="space-y-1">
                          <div
                            className="flex items-center justify-between py-2 text-gray-700 font-medium"
                            onClick={() =>
                              setActiveSubmenu(
                                activeSubmenu === item.name ? null : item.name
                              )
                            }
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`h-4 w-4 transform transition-transform ${
                                activeSubmenu === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          <AnimatePresence>
                            {activeSubmenu === item.name && (
                              <m.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 space-y-1">
                                  {Object.entries(item.megaMenu).map(
                                    ([category, items]) => (
                                      <div key={category} className="space-y-1">
                                        {item.name === "Industries" ? (
                                          // For Industries: Show only category headings as clickable links
                                          <Link
                                            href={items[0].href}
                                            className="block py-2 text-gray-600 font-medium text-sm hover:text-orange-500 transition-colors"
                                            onClick={() => {
                                              setIsOpen(false);
                                              setActiveSubmenu(null);
                                            }}
                                          >
                                            {category}
                                          </Link>
                                        ) : (
                                          // For Services: Keep the original structure with sub-items
                                          <>
                                            <div className="py-2 text-gray-600 font-medium text-sm">
                                              {category}
                                            </div>
                                            <div className="pl-4 space-y-1">
                                              {items.map((subItem: any) => (
                                                <Link
                                                  key={subItem.name}
                                                  href={subItem.href}
                                                  className="block py-2 text-gray-500 hover:text-orange-500 transition-colors"
                                                  onClick={() => {
                                                    setIsOpen(false);
                                                    setActiveSubmenu(null);
                                                  }}
                                                >
                                                  {subItem.name}
                                                </Link>
                                              ))}
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    )
                                  )}
                                </div>
                              </m.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-gray-700 hover:text-orange-500 transition-colors font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4">
                    <Link href="/contact">Get Free Consultation</Link>
                  </Button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </m.header>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {activeMegaMenu === "Services" && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-0 right-0 bg-white shadow-2xl border-b border-gray-200 hidden md:block overflow-y-auto"
            style={{
              top: scrolled ? "80px" : "90px",
              zIndex: 45,
              maxHeight: "calc(100vh - 90px)",
            }}
            onMouseEnter={() => setActiveMegaMenu("Services")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Our Services
                </h2>
                <p className="text-gray-600">
                  Comprehensive solutions to build future-ready businesses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(
                  navItems.find((item) => item.name === "Services")!.megaMenu!
                ).map(([category, services]) => (
                  <div key={category} className="group">
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-orange-200 group-hover:text-orange-600 transition-colors">
                      {megaMenuIcons[category]}
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {services.map((service: any) => (
                        <li key={service.name}>
                          <Link
                            href={service.href}
                            className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium hover:translate-x-1 transform inline-block duration-200"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">
                      Need help choosing the right service for your project?
                    </p>
                  </div>
                  <Button
                    asChild
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
                  >
                    <Link href="/contact">Get Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </m.div>
        )}

        {activeMegaMenu === "Industries" && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-0 right-0 bg-white shadow-2xl border-b border-gray-200 hidden md:block overflow-y-auto"
            style={{
              top: scrolled ? "80px" : "90px",
              zIndex: 45,
              maxHeight: "calc(100vh - 90px)",
            }}
            onMouseEnter={() => setActiveMegaMenu("Industries")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Industries We Serve
                </h2>
                <p className="text-gray-600">
                  Tailored solutions for your industry's unique challenges
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Industries List - Left Side */}
                <div className="lg:col-span-1">
                  <div
                    className="space-y-6 flex flex-col justify-between"
                    style={{ minHeight: "280px" }}
                  >
                    {Object.entries(
                      navItems.find((item) => item.name === "Industries")!
                        .megaMenu!
                    ).map(([category, industries]) => (
                      <div key={category} className="group">
                        <Link
                          href={industries[0].href}
                          onClick={() => setActiveMegaMenu(null)}
                          className="block"
                        >
                          <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-orange-200 group-hover:text-orange-600 transition-colors cursor-pointer hover:translate-x-1 transform duration-200">
                            {megaMenuIcons[category]}
                            {category}
                          </h3>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Content - Right Side */}
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-orange-50 to-peach-100 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Industry Expertise
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      We understand the unique challenges and compliance
                      requirements of each industry. Our tailored solutions are
                      designed to address sector-specific needs while ensuring
                      scalability, security, and regulatory compliance.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          Custom Solutions
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          Compliance Ready
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          Industry Best Practices
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          Scalable Architecture
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">
                      Ready to transform your industry with technology?
                    </p>
                  </div>
                  <Button
                    asChild
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
                  >
                    <Link href="/contact">Get Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
