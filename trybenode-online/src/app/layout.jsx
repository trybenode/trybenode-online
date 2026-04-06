import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://trybenode.online'),
  title: {
    default: "TrybeNode - Building Digital Solutions for Modern Businesses",
    template: "%s | TrybeNode"
  },
  description: "TrybeNode delivers cutting-edge e-commerce platforms, automated business systems, and IoT solutions. Based in Ibadan, Nigeria, we build scalable digital products that drive growth for startups and enterprises.",
  keywords: ["e-commerce development Nigeria", "custom software development", "automated systems", "IoT solutions", "mobile app development", "web development Ibadan", "TrybeNode", "PropTech", "AgriTech", "TrybeMarket"],
  authors: [{ name: "TrybeNode" }],
  creator: "TrybeNode",
  publisher: "TrybeNode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://trybenode.online",
    siteName: "TrybeNode",
    title: "TrybeNode - Building Digital Solutions for Modern Businesses",
    description: "Expert e-commerce development, automated systems, and custom software solutions in Nigeria.",
    images: [
      {
        url: "/og-image.jpg",
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
    creator: "@trybenode",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
