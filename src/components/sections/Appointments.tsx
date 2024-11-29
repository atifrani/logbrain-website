import React from 'react';
import { Calendar } from 'lucide-react';

export function Appointments() {
  return (
    <section id="appointments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Schedule a Consultation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Book a free consultation with our AI and data experts
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-black" />
                <h3 className="text-xl font-semibold">Why Schedule a Call?</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li>• Discuss your data challenges</li>
                <li>• Get expert AI implementation advice</li>
                <li>• Learn about our custom solutions</li>
                <li>• Receive a preliminary assessment</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-sm h-[600px]">
              <iframe
                src="https://calendly.com/logbrain/consultation"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}