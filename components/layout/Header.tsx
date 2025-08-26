"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile-apps" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "AI & ML", href: "/services/ai-ml" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "DevOps", href: "/services/devops" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Technology", href: "/technology" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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
    <motion.header
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className={`font-poppins font-bold text-xl ${getLogoTextColor()}`}>
                GDOT
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center transition-colors font-medium ${getTextColor()}`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.submenu && activeSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-peach-50 hover:text-orange-500 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-orange-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}