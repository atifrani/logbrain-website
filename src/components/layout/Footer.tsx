import React from 'react';
import { Brain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8" />
              <span className="font-bold text-xl">Logbrain</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              Empowering businesses with intelligent data solutions and AI-driven insights
              for better decision-making.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-600 hover:text-black">Services</a></li>
              <li><a href="#clients" className="text-gray-600 hover:text-black">Clients</a></li>
              <li><a href="#appointments" className="text-gray-600 hover:text-black">Book a Call</a></li>
              <li><a href="#blog" className="text-gray-600 hover:text-black">Blog</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Logbrain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}