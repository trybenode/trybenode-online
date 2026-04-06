import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trybenode",
  description: "Trybenode is a startup offering software development services. We foster a vibrant community of students, tech enthusiasts, and entrepreneurs, providing a platform for collaboration and innovation in technology. Join us to elevate your projects and connect with like-minded individuals.",
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
