"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  Zap,
  Globe,
  Shield,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 3D Grid - Hidden on mobile, visible on larger screens */}
        <div className="absolute inset-0 perspective-1000 hidden lg:block">
          <motion.div
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 transform-style-preserve-3d"
          >
            {/* 3D Cube Grid */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotateX: [0, 180, 360],
                  rotateY: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute w-32 h-32"
                style={{
                  left: `${(i % 4) * 25}%`,
                  top: `${Math.floor(i / 4) * 50}%`,
                  transform: `translateZ(${i * 50}px)`,
                }}
              >
                <div className="w-full h-full border-2 border-orange-500/30 rounded-lg bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Particles - Reduced count on mobile */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-yellow-500/15 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Main Hero */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 px-6 py-3 rounded-full text-sm font-medium mb-8"
            >
              <Zap className="h-4 w-4 mr-2 animate-pulse" />
              Next-Gen Software Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
            >
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Build
              </span>
              <br />
              <span className="text-white">The Future</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
                Today
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
            >
              We transform ideas into powerful digital experiences. From
              AI-powered applications to scalable cloud solutions, we craft
              technology that drives innovation and growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 border border-orange-500/30"
              >
                <Link href="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-orange-500/30 text-orange-300 hover:bg-orange-500/10 px-10 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-orange-400" />
                <span className="text-sm">Global Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-red-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Animated Background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative h-0 lg:h-[600px]"
          >
            {/* 3D Animated Scene */}
            <div className="relative w-full h-full perspective-1000">
              {/* Rotating 3D Cube - Hidden on mobile, visible on larger screens */}
              <motion.div
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                  rotateZ: [0, 180],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 w-64 h-64 transform-style-preserve-3d hidden lg:block"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Cube Faces */}
                <div className="absolute w-full h-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg backdrop-blur-sm transform rotateY-0 translateZ-32"></div>
                <div className="absolute w-full h-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg backdrop-blur-sm transform rotateY-180 translateZ-32"></div>
                <div className="absolute w-full h-full bg-gradient-to-br from-orange-400/20 to-yellow-500/20 border border-orange-400/30 rounded-lg backdrop-blur-sm transform rotateY-90 translateZ-32"></div>
                <div className="absolute w-full h-full bg-gradient-to-br from-yellow-500/20 to-orange-400/20 border border-orange-400/30 rounded-lg backdrop-blur-sm transform rotateY-neg-90 translateZ-32"></div>
                <div className="absolute w-full h-full bg-gradient-to-br from-red-400/20 to-orange-500/20 border border-red-400/30 rounded-lg backdrop-blur-sm transform rotateX-90 translateZ-32"></div>
                <div className="absolute w-full h-full bg-gradient-to-br from-orange-500/20 to-red-400/20 border border-orange-500/30 rounded-lg backdrop-blur-sm transform rotateX-neg-90 translateZ-32"></div>
              </motion.div>

              {/* Data Flow Lines - Hidden on mobile */}
              <svg
                className="absolute inset-0 w-full h-full hidden lg:block"
                style={{ zIndex: -1 }}
              >
                <motion.path
                  d="M 100 200 Q 200 100 300 200 T 500 200"
                  stroke="url(#orangeGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="10,5"
                  animate={{
                    strokeDashoffset: [0, -15],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <defs>
                  <linearGradient
                    id="orangeGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#ef4444" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
