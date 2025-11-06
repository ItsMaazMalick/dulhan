"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Paintbrush as Pinterest,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Quisque eleifend eu dolor a pulvinar. Vestibulum auctor dolor
              justo, a dignissim orci rutrum a. Integer finibus mauris risus.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
              <Pinterest className="w-5 h-5 text-gray-400 hover:text-amber-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Order Assistance */}
          <div>
            <h4 className="text-white font-light text-sm tracking-widest mb-6">
              ORDER ASSISTANCE
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Book An Appointment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Gift Wrapping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Follow Your Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Stores
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-light text-sm tracking-widest mb-6">
              COMPANY
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Awards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Press Release
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Hire Me
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Affiliates And Creators
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-light text-sm tracking-widest mb-6">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Shipping And Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Size Charts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-amber-600 transition-colors"
                >
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Talk to Us */}
          <div>
            <h4 className="text-white font-light text-sm tracking-widest mb-6">
              TALK TO US
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Got Questions? Call us</li>
              <li className="text-white text-sm font-light">
                (+92)-111-5552671
              </li>
              <li className="text-gray-400 text-sm mt-4">
                contact@example.com
              </li>
              <li className="text-gray-400 text-sm mt-4">coming soon</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            ©Dhanpuri. All Rights Reserved
          </p>

          {/* Payment Methods */}
          <div className="flex gap-2">
            <div className="w-8 h-5 bg-white rounded flex items-center justify-center text-xs font-bold">
              VISA
            </div>
            <div className="w-8 h-5 bg-orange-500 rounded flex items-center justify-center text-xs font-bold text-white">
              MC
            </div>
            <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-xs font-bold text-white">
              AE
            </div>
            <div className="w-8 h-5 bg-red-600 rounded flex items-center justify-center text-xs font-bold text-white">
              PP
            </div>
            <div className="w-8 h-5 bg-green-600 rounded flex items-center justify-center text-xs font-bold text-white">
              GP
            </div>
            <div className="w-8 h-5 bg-purple-600 rounded flex items-center justify-center text-xs font-bold text-white">
              AP
            </div>
            <div className="w-8 h-5 bg-gray-600 rounded flex items-center justify-center text-xs font-bold text-white">
              KL
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
