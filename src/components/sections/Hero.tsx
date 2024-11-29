import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AiBackground } from '../ui/AiBackground';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <AiBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Data into
            <span className="block mt-2">Intelligent Decisions</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            We help businesses harness the power of data and artificial intelligence
            to drive growth and innovation.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}