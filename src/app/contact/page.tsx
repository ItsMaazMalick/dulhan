"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Calendar, Send } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState<"Business" | "Career">("Business");

  const appointments = [
    {
      name: "Ali Khan",
      email: "ali.khan@example.com",
      date: "2025-11-15",
      service: "AI Solutions",
      status: "Confirmed",
    },
    {
      name: "Sara Ahmed",
      email: "sara.ahmed@example.com",
      date: "2025-11-18",
      service: "Web Development",
      status: "Pending",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      date: "2025-11-21",
      service: "App Development",
      status: "Cancelled",
    },
  ];

  return (
    <>
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
      <div className="min-h-screen bg-black text-gray-200 px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
              Book an Appointment
            </h1>
            <p className="text-gray-400 text-base md:text-lg">
              Choose your purpose, select a date, and let’s connect to make
              things happen.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-10">
            {["Business", "Career"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "Business" | "Career")}
                className={`px-6 py-2 rounded-lg font-medium border transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary border-primary text-white shadow-md shadow-primary/40"
                    : "bg-transparent border-gray-600 hover:bg-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <motion.form
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-800"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Input your first name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:border-primary focus:ring focus:ring-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:border-primary focus:ring focus:ring-primary/20 outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Input your email address here"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:border-primary focus:ring focus:ring-primary/20 outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">
                Select Date
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-2.5 text-gray-500"
                  size={18}
                />
                <input
                  type="datetime-local"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-primary focus:ring focus:ring-primary/20 outline-none"
                />
              </div>
            </div>

            {/* Services */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Services</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Lehenga",
                  "Sarhi",
                  "Kurta",
                  "Shalwar Kameez",
                  "Frock",
                  "Others",
                ].map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-primary focus:ring focus:ring-primary/20"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Messages</label>
              <textarea
                rows={4}
                placeholder="Write your messages here"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm resize-none focus:border-primary focus:ring focus:ring-primary/20 outline-none"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary hover:bg-primary transition-all duration-300 text-white px-6 py-2 rounded-lg flex items-center gap-2 font-medium shadow-md hover:shadow-primary/40"
              >
                <Send size={18} /> Send Message
              </button>
            </div>
          </motion.form>

          {/* Appointments Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              All Appointments
            </h2>

            <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-lg bg-gray-900/70 backdrop-blur-md">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-800/70 text-gray-300 uppercase">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Service</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((a, i) => (
                    <tr
                      key={i}
                      className="border-t border-gray-800 hover:bg-gray-800/60 transition-colors"
                    >
                      <td className="px-6 py-3">{a.name}</td>
                      <td className="px-6 py-3">{a.email}</td>
                      <td className="px-6 py-3">{a.date}</td>
                      <td className="px-6 py-3">{a.service}</td>
                      <td
                        className={`px-6 py-3 font-semibold ${
                          a.status === "Confirmed"
                            ? "text-green-400"
                            : a.status === "Pending"
                            ? "text-yellow-400"
                            : "text-red-400"
                        }`}
                      >
                        {a.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
