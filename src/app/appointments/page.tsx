"use client";

import { motion } from "framer-motion";
import { Calendar, Send } from "lucide-react";
import { useState } from "react";

export default function AppointmentPage() {
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
    <div className="min-h-screen bg-[#0f172a] text-gray-200 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Book an Appointment
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Choose your purpose, select a date, and let’s connect to make things
            happen.
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
                  ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-700/40"
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
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-500/20 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-500/20 outline-none"
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
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-500/20 outline-none"
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
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-500/20 outline-none"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Services</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "DevOps",
                "AI Solutions",
                "App Development",
                "Web Development",
                "Quality Assurance",
                "Others",
              ].map((service) => (
                <label key={service} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-blue-600 focus:ring focus:ring-blue-500/20"
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
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm resize-none focus:border-blue-500 focus:ring focus:ring-blue-500/20 outline-none"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-6 py-2 rounded-lg flex items-center gap-2 font-medium shadow-md hover:shadow-blue-700/40"
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
  );
}
