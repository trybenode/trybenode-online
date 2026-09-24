import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import GridBackground from "@/components/GridBackground";
import JsonLd, { trybeMarketSchema } from "@/components/JsonLd";
import Link from "next/link";

export const metadata = {
  title: "TrybeNode Ventures - TrybeMarket & What's Next",
  description: "Explore the ventures TrybeNode is building, starting with TrybeMarket — a student marketplace platform with in-app messaging.",
  keywords: "TrybeNode portfolio, TrybeMarket, student marketplace app, e-commerce projects Nigeria, mobile app development, software projects, TrybeNode case studies",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://trybenode.online/projects",
    siteName: "TrybeNode",
    title: "TrybeNode Ventures - TrybeMarket & What's Next",
    description: "TrybeMarket is the first venture built inside the TrybeNode studio.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "TrybeNode Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrybeNode Ventures - TrybeMarket & What's Next",
    description: "TrybeMarket is the first venture built inside the TrybeNode studio.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"],
  },
};

export default function Projects() {
  const projects = [
    {
      title: "TrybeMarket",
      description: "A student-focused marketplace platform connecting students to buy and sell products and services within their community. TrybeMarket features in-app messaging for seamless communication between buyers and sellers, making campus commerce safer and more convenient.",
      features: [
        "Student verification and authentication",
        "Products and services listing marketplace",
        "Real-time in-app messaging system",
        "Mobile and web accessibility for all students",
        "Advanced search and category filtering",
        "User profiles and ratings",
        "Mobile-responsive design for on-the-go access",
      ],
      technologies: ["Next.js", "Node.js", "Firebase", "Tailwind CSS"],
      images: [
        "/trybemarket-1.jpeg",
        "/trybemarket-2.jpeg",
        "/trybemarket-3.jpeg"
      ],
      link: "https://trybemarket.online"
    }
    // Add more ventures here as they launch
  ];

  return (
    <>
      <JsonLd data={trybeMarketSchema} />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
          <GridBackground />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Reveal as="h1" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
                Our <span className="text-[#725eed]">Ventures</span>
              </Reveal>
              <Reveal as="p" delay={80} className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                What the studio has shipped so far — and what&apos;s taking shape next.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  features={project.features}
                  technologies={project.technologies}
                  images={project.images}
                  link={project.link}
                  reverse={index % 2 !== 0}
                />
              ))}
            </div>

            {/* Venture 02 teaser — the studio's next node */}
            <Reveal delay={150} className="mt-32 max-w-3xl mx-auto">
              <div className="relative rounded-2xl border-2 border-dashed border-gray-300 bg-white/60 p-10 sm:p-14 text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300 animate-node-pulse" style={{ transformOrigin: "center" }} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-400 mb-2">Venture 02</h3>
                <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto">
                  The next node is already taking shape. If you&apos;ve got the idea it could grow from, we&apos;d like to hear it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal as="h2" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Have a Project <span className="text-[#725eed]">in Mind?</span>
            </Reveal>
            <Reveal as="p" delay={80} className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-10">
              Let&apos;s turn your vision into reality — and see if it&apos;s the next one on this page.
            </Reveal>
            <Reveal delay={160} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2d236d] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#725eed] transition-colors duration-300"
              >
                Start a project
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#2d236d] text-sm sm:text-base font-semibold rounded-full border border-gray-200 hover:border-[#2d236d] transition-colors duration-300"
              >
                Learn more about us
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
