import React from 'react';
import { LineChart, Brain, Database, Workflow } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
  },
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'Leverage artificial intelligence to optimize your business processes and decision-making.',
  },
  {
    icon: Database,
    title: 'Data Infrastructure',
    description: 'Build robust and scalable data infrastructure tailored to your needs.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation powered by AI.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions for your data and AI needs
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <service.icon className="w-12 h-12 text-black mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}