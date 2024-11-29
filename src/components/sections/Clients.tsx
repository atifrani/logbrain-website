import React from 'react';
import { CheckCircle } from 'lucide-react';

const clients = [
  {
    name: "TechForward",
    industry: "Technology",
    achievement: "50% reduction in data processing time",
    logo: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=200&h=100&q=80"
  },
  {
    name: "DataFlow",
    industry: "Analytics",
    achievement: "200% increase in prediction accuracy",
    logo: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=200&h=100&q=80"
  },
  {
    name: "InnovateCorp",
    industry: "Manufacturing",
    achievement: "30% cost reduction through AI automation",
    logo: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=200&h=100&q=80"
  },
  {
    name: "FinanceHub",
    industry: "Financial Services",
    achievement: "Real-time risk assessment implementation",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&h=100&q=80"
  }
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Delivering exceptional results for forward-thinking companies
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto mb-4 object-contain grayscale hover:grayscale-0 transition-all duration-200"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {client.name}
              </h3>
              <p className="text-gray-600 mb-4">{client.industry}</p>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-black" />
                <span>{client.achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}