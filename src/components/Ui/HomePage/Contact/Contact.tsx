"use client";

import { siteConfig } from "@/src/utils/data";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  User,
  FileText,
  Calendar,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: siteConfig.location,
      href: null,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: siteConfig.social.linkedin,
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "ResearchGate",
      value: "Visit Profile",
      href: siteConfig.social.researchgate,
    },
  ];

  const availability = [
    {
      label: "Response Time",
      value: "Within 24 hours",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      label: "Availability",
      value: "Mon - Fri, 9AM - 6PM",
      icon: <Calendar className="w-4 h-4" />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-200">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-500 mt-1">Let's connect and collaborate</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 font-medium">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-700">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Availability
              </h3>
              <div className="space-y-3">
                {availability.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/10 rounded-xl p-3"
                  >
                    <div className="text-indigo-200">{item.icon}</div>
                    <div>
                      <p className="text-xs text-indigo-200">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-indigo-200">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>I'll respond within 24 hours</span>
              </div>
            </div>

            {/* Quick Connect */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                Quick Connect
              </h3>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-[#0077B5] text-white text-sm font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.social.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-[#00CCBB] text-white text-sm font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                >
                  ResearchGate
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Send className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Send a Message
                </h3>
              </div>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-emerald-700">
                    Message Sent!
                  </h4>
                  <p className="text-emerald-600 text-sm">
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Research Collaboration"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project, collaboration idea, or any questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-2">
                    I'll respond within 24 hours. Your information will be kept
                    confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
