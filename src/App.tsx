import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Meta } from './components/layout/Meta';
import { BackToTop } from './components/ui/BackToTop';
import { Newsletter } from './components/ui/Newsletter';

// Lazy load sections
const Hero = React.lazy(() => import('./components/sections/Hero'));
const Services = React.lazy(() => import('./components/sections/Services'));
const Clients = React.lazy(() => import('./components/sections/Clients'));
const Appointments = React.lazy(() => import('./components/sections/Appointments'));
const Blog = React.lazy(() => import('./components/sections/Blog'));
const Contact = React.lazy(() => import('./components/sections/Contact'));

export default function App() {
  return (
    <HelmetProvider>
      <Meta />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Hero />
            <Services />
            <Clients />
            <Newsletter />
            <Appointments />
            <Blog />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
        <Toaster position="bottom-right" />
      </div>
    </HelmetProvider>
  );
}