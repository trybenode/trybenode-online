import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import GridBackground from "@/components/GridBackground";
import StoryTimeline from "@/components/StoryTimeline";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

export const metadata = {
  title: "About TrybeNode - A Software Studio in Ibadan | Meet the Founders",
  description: "TrybeNode is a software studio founded at Leadcity University, Ibadan. Meet Allen, Full Stack Developer, and Abdulhaq, Cyber Security Expert — the team behind TrybeMarket.",
  keywords: "TrybeNode team, software studio Nigeria, full stack developer, cybersecurity expert, Leadcity University Ibadan, tech startup Nigeria, about TrybeNode",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://trybenode.online/about",
    siteName: "TrybeNode",
    title: "About TrybeNode - A Software Studio in Ibadan",
    description: "Meet the team behind TrybeNode and TrybeMarket, its first venture.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "TrybeNode Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About TrybeNode - A Software Studio in Ibadan",
    description: "Meet the team behind TrybeNode and TrybeMarket, its first venture.",
    images: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"],
  },
};

const whatWeDo = [
  {
    title: "E-Commerce Platforms",
    desc: "Custom online stores with payment integration and inventory management.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h12l-1.2 11a2 2 0 01-2 1.8H9.2a2 2 0 01-2-1.8L6 8zM9 8V6a3 3 0 016 0v2" />,
  },
  {
    title: "Automated Systems",
    desc: "Workflow automation and business process optimization.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4.5 9a8 8 0 0114-4.5M19.5 15a8 8 0 01-14 4.5" />,
  },
  {
    title: "IoT Solutions",
    desc: "Connected devices and real-time monitoring systems.",
    icon: (
      <>
        <circle cx="6" cy="18" r="1.5" fill="currentColor" stroke="none" />
        <path strokeLinecap="round" d="M6 12a6 6 0 016 6M6 6a12 12 0 0112 12" />
      </>
    ),
  },
  {
    title: "PropTech",
    desc: "Property management and real estate platforms.",
    icon: (
      <>
        <rect x="4" y="3" width="9" height="18" rx="1" />
        <rect x="15" y="9" width="6" height="12" rx="1" />
        <path strokeLinecap="round" d="M7 7h1M7 11h1M7 15h1M11 7h1M11 11h1M11 15h1" />
      </>
    ),
  },
  {
    title: "AgriTech",
    desc: "Smart farming and agricultural technology solutions.",
    icon: (
      <>
        <circle cx="12" cy="19" r="2" />
        <path strokeLinecap="round" d="M12 17V11" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11L7 6M12 11L17 6" />
      </>
    ),
  },
  {
    title: "Custom Solutions",
    desc: "Tailored digital products for your specific industry.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      </>
    ),
  },
];

const founders = [
  {
    name: "Allen Oluwatobi Douglas",
    role: "Software Engineer",
    specialty: "Full Stack Mobile & Web Developer",
    image: "/founder-1.jpg",
    description: "Expert in building scalable mobile and web applications with modern frameworks."
  },
  {
    name: "Abdulhaq Abdulrasheed Olabanji",
    role: "Software Engineer",
    specialty: "Cyber Security Expert",
    image: "/founder-2.jpg",
    description: "Specializes in securing digital infrastructure and implementing robust security protocols."
  }
];

const pillars = [
  {
    title: "Our Mission",
    description: "To build software ourselves, prove it with real users, and turn the strongest ideas into ventures that stand on their own.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7V15" />,
  },
  {
    title: "Our Values",
    description: "Simplicity, reliability, and user-centered design guide everything we build. We prioritize functionality over complexity.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9 12l2 2 4-4" />,
  },
  {
    title: "Our Vision",
    description: "A studio that keeps building — where TrybeMarket is the first of many ventures that start here and grow into their own.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
];

export default function About() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
          <GridBackground />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Reveal as="h1" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
                About <span className="text-[#725eed]">TrybeNode</span>
              </Reveal>
              <Reveal as="p" delay={80} className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                A registered software studio building practical, user-centered
                products — then spinning the strongest ones into their own ventures.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <Reveal as="h2" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Our <span className="text-[#725eed]">Story</span>
                </Reveal>
                <Reveal delay={80} className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <p>
                    TrybeNode started with a simple mission: to create technology
                    that works for everyone, and to build it ourselves rather than
                    farm it out.
                  </p>
                  <p>
                    As a registered company, we bring together a small team of
                    developers and problem-solvers who are passionate about
                    innovation — from e-commerce platforms to automated systems,
                    IoT to PropTech and AgriTech.
                  </p>
                  <p>
                    What sets us apart is what we build for ourselves. TrybeMarket
                    wasn&apos;t a client brief — it was proof that the studio model works,
                    and the template for every venture that follows it.
                  </p>
                </Reveal>
              </div>
              <StoryTimeline />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <Reveal as="h2" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                What We <span className="text-[#725eed]">Do</span>
              </Reveal>
              <Reveal as="p" delay={80} className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                We specialize in building scalable systems across diverse industries.
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeDo.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 60}
                  className="group bg-gray-50 rounded-xl p-6 border border-transparent hover:border-[#725eed]/30 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#725eed] mb-4 group-hover:bg-[#725eed] group-hover:text-white group-hover:border-[#725eed] transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Co-Founders Section */}
        <section className="relative overflow-hidden py-20 bg-linear-to-br from-[#2d236d] to-[#725eed] text-white">
          <GridBackground variant="dark" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <Reveal as="h2" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Meet the <span className="text-[#fbeb78]">Founders</span>
              </Reveal>
              <Reveal as="p" delay={80} className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
                Two engineers, one studio.
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {founders.map((founder, index) => (
                <Reveal
                  key={founder.name}
                  delay={index * 100}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-[#fbeb78]/60 ring-offset-4 ring-offset-transparent">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-[#fbeb78] font-semibold mb-1 text-sm sm:text-base">{founder.role}</p>
                    <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">{founder.specialty}</p>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">{founder.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 100} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-5 bg-[#725eed]/10 rounded-full flex items-center justify-center text-[#725eed]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {pillar.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{pillar.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal as="h2" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to build <span className="text-[#725eed]">with us?</span>
            </Reveal>
            <Reveal as="p" delay={80} className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-10">
              Let&apos;s talk about what you&apos;re building — and whether it could be a venture of its own.
            </Reveal>
            <Reveal delay={160} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2d236d] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#725eed] transition-colors duration-300"
              >
                Get in touch
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#2d236d] text-sm sm:text-base font-semibold rounded-full border border-gray-200 hover:border-[#2d236d] transition-colors duration-300"
              >
                View our work
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
