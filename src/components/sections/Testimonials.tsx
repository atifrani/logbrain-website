import React from 'react';

const testimonials = [
  {
    quote: "Logbrain's AI solutions have revolutionized how we handle our data analytics. The results exceeded our expectations.",
    author: "Sarah Chen",
    role: "CTO, TechForward",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128"
  },
  {
    quote: "Working with Logbrain has transformed our decision-making process. Their expertise in AI is unmatched.",
    author: "Michael Rodriguez",
    role: "Head of Innovation, DataFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          What Our Clients Say
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <p className="text-lg text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}