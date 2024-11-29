import React from 'react';

const posts = [
  {
    title: "The Future of AI in Business Analytics",
    excerpt: "Explore how artificial intelligence is reshaping the landscape of business analytics and decision-making.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&h=400",
    date: "Mar 15, 2024"
  },
  {
    title: "Building Scalable Data Infrastructure",
    excerpt: "Learn the best practices for creating robust and scalable data infrastructure for modern enterprises.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=400",
    date: "Mar 10, 2024"
  },
  {
    title: "Machine Learning in Production",
    excerpt: "A comprehensive guide to deploying and maintaining machine learning models in production environments.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&h=400",
    date: "Mar 5, 2024"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Latest Insights
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-600">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-black font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}