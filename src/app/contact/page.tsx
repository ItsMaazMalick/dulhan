"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@luxurybridal.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "123 Fashion Avenue",
      description: "New York, NY 10001",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-widest text-gray-400 mb-4 animate-fadeInDown">
            GET IN TOUCH
          </p>
          <h1
            className="text-5xl md:text-7xl font-light text-white mb-6 animate-fadeInUp"
            style={{ color: "#D4AF37" }}
          >
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Have questions about our collections? We'd love to hear from you.
            Reach out and let's create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="group p-8 border border-gray-800 hover:border-primary transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-primary/10 hover:bg-gray-900/20 hover:scale-105 animate-scaleIn cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-light text-white mb-2 group-hover:text-primary transition-colors">
                  {info.label}
                </h3>
                <p className="text-white font-light mb-1 group-hover:text-primary transition-colors">
                  {info.value}
                </p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {info.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-black border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-light text-white mb-4">
              Send us a Message
            </h2>
            <p className="text-gray-400">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-fadeInUp delay-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2 tracking-widest">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2 tracking-widest">
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 placeholder-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2 tracking-widest">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 placeholder-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2 tracking-widest">
                SUBJECT
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 placeholder-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2 tracking-widest">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 resize-none placeholder-gray-600"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary text-white tracking-widest py-3 transition-all duration-300 disabled:opacity-50 font-light hover:shadow-lg hover:shadow-primary/30 hover:scale-105 disabled:scale-100"
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h3 className="text-2xl font-light text-white mb-4">
            Follow Our Journey
          </h3>
          <p className="text-gray-400 mb-8">
            Connect with us on social media for the latest collections and
            inspiration.
          </p>
          <div className="flex justify-center gap-6">
            {["Instagram", "Facebook", "Pinterest"].map((social, index) => (
              <button
                key={social}
                className="text-primary hover:text-primary transition-all duration-300 text-sm tracking-widest font-light hover:scale-110 hover:gap-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {social}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
