import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyTrybeNode from "@/components/WhyTrybeNode";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd, { organizationSchema, websiteSchema, serviceSchema } from "@/components/JsonLd";

export const metadata = {
  title: "TrybeNode - A Software Studio Building Ventures | TrybeMarket & Custom Software",
  description: "TrybeNode is a software studio based in Lagos, Ibadan, and Abuja, Nigeria. We build products in-house and spin the strongest ones into independent ventures — starting with TrybeMarket.",
  keywords: "software studio Nigeria, startup studio, TrybeMarket, custom software development, e-commerce development, automated business systems, IoT solutions, PropTech, AgriTech, web development Ibadan, TrybeNode",
  authors: [{ name: "TrybeNode" }],
  creator: "TrybeNode",
  publisher: "TrybeNode",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://trybenode.online",
    siteName: "TrybeNode",
    title: "TrybeNode - A Software Studio Building Ventures",
    description: "We build the software, then we build the company. TrybeNode is a software studio in Lagos, Ibadan, and Abuja, Nigeria. — TrybeMarket is our first venture.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "TrybeNode - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrybeNode - A Software Studio Building Ventures",
    description: "We build the software, then we build the company. TrybeNode is a software studio in Lagos, Ibadan, and Abuja, Nigeria.",
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={serviceSchema} />
      <Navigation />
      <main>
        <Hero />
        <WhyTrybeNode />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
