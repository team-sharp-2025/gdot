"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content:
      "GDOT transformed our outdated system into a modern, scalable platform. Their expertise in cloud migration saved us months of development time.",
    rating: 5,
    delay: 0.1,
  },
  {
    name: "Michael Chen",
    position: "CTO, FinanceFlow",
    avatar:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content:
      "The mobile app they built exceeded our expectations. The user experience is flawless and our customer engagement has increased by 200%.",
    rating: 5,
    delay: 0.2,
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, HealthTech Solutions",
    avatar:
      "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content:
      "Working with GDOT was a game-changer. They understood our healthcare compliance needs and delivered a HIPAA-compliant solution on time.",
    rating: 5,
    delay: 0.3,
  },
  {
    name: "David Thompson",
    position: "VP of Technology, RetailCorp",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content:
      "Their AI-powered analytics platform helped us optimize our supply chain and reduce costs by 30%. Exceptional technical expertise and support.",
    rating: 5,
    delay: 0.4,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-peach-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say
            about working with GDOT Technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonial.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-poppins font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: testimonial.delay + i * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-5 w-5 text-orange-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
