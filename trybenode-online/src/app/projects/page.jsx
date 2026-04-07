import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import JsonLd, { trybeMarketSchema } from "@/components/JsonLd";

export const metadata = {
  title: "TrybeNode Projects - Our Portfolio | TrybeMarket & Custom Solutions",
  description: "Explore TrybeNode's featured projects including TrybeMarket, a student marketplace platform with in-app messaging. See how we build scalable e-commerce and custom software solutions.",
  keywords: "TrybeNode portfolio, TrybeMarket, student marketplace app, e-commerce projects Nigeria, mobile app development, software projects, TrybeNode case studies",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://trybenode.online/projects",
    siteName: "TrybeNode",
    title: "TrybeNode Projects - Our Portfolio",
    description: "Discover our innovative projects including TrybeMarket, a student marketplace revolutionizing campus commerce.",
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
    title: "TrybeNode Projects - Our Portfolio",
    description: "Explore our featured projects including TrybeMarket student marketplace and custom software solutions.",
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
        "/trybemarket-1.jpeg", // Replace with "/trybemarket-1.jpg" when you add the image
        "/trybemarket-2.jpeg", // Replace with "/trybemarket-2.jpg"
        "/trybemarket-3.jpeg"  // Replace with "/trybemarket-3.jpg"
      ],
      link: "https://trybemarket.online" // Add the live URL when available
    }
    // Add more projects here when available
  ];

  return (
    <>
      <JsonLd data={trybeMarketSchema} />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#fbeb78] rounded-full blur-3xl opacity-10 -ml-48 -mt-48" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#725eed] rounded-full blur-3xl opacity-10 -mr-48 -mb-48" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
                Our <span className="text-[#725eed]">Projects</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Explore the innovative solutions we've built for businesses across various industries.
              </p>
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
                  reverse={index % 2 !== 0} // Alternates layout for multiple projects
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Have a Project <span className="text-[#725eed]">In Mind?</span>
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 mb-10">
              Let's turn your vision into reality with our expertise and innovative approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-4 bg-[#2d236d] text-white font-semibold rounded-lg hover:bg-[#725eed] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Your Project
              </a>
              <a 
                href="/about"
                className="px-8 py-4 bg-white text-[#2d236d] font-semibold rounded-lg border-2 border-[#2d236d] hover:bg-[#fbeb78] hover:border-[#fbeb78] transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
