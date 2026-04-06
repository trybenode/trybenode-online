export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TrybeNode",
  "url": "https://trybenode.online",
  "logo": "https://trybenode.online/logo.png",
  "description": "TrybeNode delivers cutting-edge e-commerce platforms, automated business systems, and IoT solutions in Nigeria.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ibadan",
    "addressRegion": "Oyo State",
    "addressCountry": "NG"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234-810-150-2547",
    "contactType": "customer service",
    "email": "contact@trybenode.online",
    "areaServed": "NG",
    "availableLanguage": ["en"]
  },
  "sameAs": [
    "https://twitter.com/trybenode",
    "https://linkedin.com/company/trybenode",
    "https://github.com/trybenode"
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Allen Oluwatobi Douglas",
      "jobTitle": "Full Stack Developer"
    },
    {
      "@type": "Person",
      "name": "Abdulhaq",
      "jobTitle": "Cyber Security Expert"
    }
  ]
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TrybeNode",
  "url": "https://trybenode.online",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://trybenode.online/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Service Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Development",
  "provider": {
    "@type": "Organization",
    "name": "TrybeNode"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Nigeria"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Solutions Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-Commerce Platform Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automated Business Systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IoT & PropTech Solutions"
        }
      }
    ]
  }
};

// Product Schema for TrybeMarket
export const trybeMarketSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TrybeMarket",
  "applicationCategory": "E-Commerce",
  "operatingSystem": "Android, iOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "NGN"
  },
  "description": "A student-focused marketplace platform connecting students to buy and sell products and services within their community with in-app messaging.",
  "creator": {
    "@type": "Organization",
    "name": "TrybeNode"
  }
};
