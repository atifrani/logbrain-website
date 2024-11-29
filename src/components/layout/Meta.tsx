import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
}

export function Meta({ 
  title = 'Logbrain - Data & AI Consulting',
  description = 'Transform your business with data-driven insights and AI solutions.',
  image = 'https://yourdomain.com/og-image.jpg'
}: MetaProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}