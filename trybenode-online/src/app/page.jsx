import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyTrybeNode from "@/components/WhyTrybeNode";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd, { organizationSchema, websiteSchema, serviceSchema } from "@/components/JsonLd";

export const metadata = {
  title: "TrybeNode - Building Digital Solutions for Modern Businesses | E-commerce & Custom Software Development",
  description: "TrybeNode delivers cutting-edge e-commerce platforms, automated business systems, and IoT solutions. Based in Ibadan, Nigeria, we build scalable digital products that drive growth for startups and enterprises.",
  keywords: "e-commerce development, custom software Nigeria, automated business systems, IoT solutions, PropTech, AgriTech, mobile app development, web development Ibadan, TrybeNode",
  authors: [{ name: "TrybeNode" }],
  creator: "TrybeNode",
  publisher: "TrybeNode",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://trybenode.online",
    siteName: "TrybeNode",
    title: "TrybeNode - Building Digital Solutions for Modern Businesses",
    description: "Expert e-commerce development, automated systems, and custom software solutions. Transform your business with TrybeNode's innovative digital products.",
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
    title: "TrybeNode - Building Digital Solutions for Modern Businesses",
    description: "Expert e-commerce development, automated systems, and custom software solutions in Nigeria.",
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
