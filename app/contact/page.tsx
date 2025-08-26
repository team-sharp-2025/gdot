"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import mapboxgl from "mapbox-gl";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

// Set Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "pk.eyJ1IjoiYXJ1bnN1ZGV2YW4iLCJhIjoiY202ZW92Nm8wMG03ejJtcXd0bnE1YzA5MCJ9.5JBobBTQPKJqsIHRyYfIrA";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: ["123 Tech Street", "Innovation District", "New York, NY 10001"],
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@gdot.com", "support@gdot.com"],
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "Cloud Solutions",
  "AI & Machine Learning",
  "UI/UX Design",
  "DevOps Services",
  "Cybersecurity",
  "Data Analytics",
  "Blockchain Development",
  "QA & Testing",
  "IT Consulting",
  "Other",
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showSuccess, setShowSuccess] = useState(false);

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("YDSnqNomInihHFjvP");

    if (mapContainer.current && !map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [77.0186236, 11.020657],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        attributionControl: false,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      new mapboxgl.Marker({ 
        color: "#f97316",
        scale: 1.2,
      })
        .setLngLat([77.0186236, 11.020657])
        .setPopup(
          new mapboxgl.Popup({ 
            offset: 25,
            className: "custom-popup",
          }).setHTML(
            "<div class='p-2'><h3 class='font-semibold text-lg text-gray-900 mb-1'>GDOT Technologies</h3><p class='text-gray-600 text-sm'>Exact Location<br>Coordinates: 11.020657, 77.0186236</p></div>"
          )
        )
        .addTo(map.current);

      map.current.on('click', () => {
        if (map.current) {
          map.current.flyTo({
            center: [77.0186236, 11.020657],
            zoom: 18,
            pitch: 45,
            bearing: -17.6,
            duration: 3000,
            essential: true
          });
        }
      });
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        from_name: formData.name,
        user_email: formData.email,
        contact_number: formData.phone,
        user_company: formData.company,
        service_needed: formData.service,
        project_details: formData.message,
      };

      await emailjs.send(
        "service_45d0inn",
        "template_8czyrfi",
        templateParams,
        "YDSnqNomInihHFjvP"
      );

      setSubmitStatus("success");
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });

      // Redirect to home page after 5 seconds
      setTimeout(() => {
        router.push("/");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50/50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-peach-50 via-orange-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjk3MzE2IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPC9zdmc+')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide uppercase">
                Ready to Transform Your Business?
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6 leading-tight">
              Get In <span className="gradient-text bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your business with cutting-edge technology?
              Let's discuss your project and explore how we can help you achieve
              your goals. We respond to all inquiries within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
                        {/* Contact Form or Success Message */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {!showSuccess ? (
                // Contact Form
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100/50 backdrop-blur-sm"
                >
                  <div className="mb-6">
                    <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-3">
                      Send us a message
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      <div className="space-y-1">
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-11 border border-gray-200 focus:border-orange-500 focus:outline-none rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-11 border border-gray-200 focus:border-orange-500 focus:outline-none rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      <div className="space-y-1">
                        <Label htmlFor="company" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="h-11 border border-gray-200 focus:border-orange-500 focus:outline-none rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-11 border border-gray-200 focus:border-orange-500 focus:outline-none rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="space-y-1"
                    >
                      <Label htmlFor="service" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Service Needed
                      </Label>
                      <Select
                        name="service"
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger className="h-11 border border-gray-200 focus:border-orange-500 focus:outline-none rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="rounded-lg">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="space-y-1"
                    >
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border border-gray-200 focus:border-orange-500 focus:outline-none rounded-xl transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm"
                        placeholder="Tell us about your project, goals, and requirements..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl text-lg font-semibold transition-all duration-500 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>

                    {/* Error Message */}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center"
                      >
                        ❌ Something went wrong. Please try again or contact us directly.
                      </motion.div>
                    )}
                  </form>
                </motion.div>
              ) : (
                // Success Message
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-12 shadow-xl border border-green-100/50 backdrop-blur-sm text-center"
                >
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
                      Message Sent Successfully!
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-sm text-gray-500">
                      Redirecting to home page in <span className="font-semibold text-green-600">5 seconds</span>...
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-poppins font-bold mb-4">
                    Why Choose GDOT?
                  </h3>
                  <p className="text-orange-100 leading-relaxed mb-6 font-light">
                    We're here to help you transform your ideas into reality.
                    Reach out to us through any of the following channels.
                  </p>
                  <div className="space-y-4">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center group"
                    >
                      <div className="bg-white/20 p-2 rounded-lg mr-4 group-hover:bg-white/30 transition-colors duration-300">
                        <Clock className="h-5 w-5" />
                      </div>
                      <span className="font-medium">Quick 24h response time</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center group"
                    >
                      <div className="bg-white/20 p-2 rounded-lg mr-4 group-hover:bg-white/30 transition-colors duration-300">
                        <Send className="h-5 w-5" />
                      </div>
                      <span className="font-medium">Free consultation included</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className={`${info.bgColor} p-2.5 rounded-xl mr-3 group-hover:scale-105 transition-transform duration-300`}>
                        <info.icon className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 mb-1 text-base">
                          {info.title}
                        </h4>
                        <div className="space-y-0.5">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm hover:text-orange-500 transition-colors duration-200 truncate">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Located in the heart of the innovation district, our office is
              easily accessible and equipped with modern facilities for client
              meetings and collaboration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl h-[400px] overflow-hidden shadow-2xl border border-gray-100 relative"
          >
            <div 
              ref={mapContainer} 
              className="w-full h-full rounded-3xl"
            />
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-gray-200">
              <p className="text-sm text-gray-700 font-medium flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                Click anywhere to zoom to GDOT office
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}