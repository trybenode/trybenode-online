import Link from "next/link";
import Reveal from "@/components/Reveal";
import NodeNetwork from "@/components/NodeNetwork";
import GridBackground from "@/components/GridBackground";

const badges = [
  {
    label: "Infinitely scalable",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 15l5-5 3 3 6-6m0 0h-4m4 0v4" />
    ),
  },
  {
    label: "24/7 support",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
      </>
    ),
  },
  {
    label: "Registered company",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9 12l2 2 4-4" />
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-20 sm:pt-20 sm:pb-28">
      <GridBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Reveal className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#725eed] animate-node-pulse" style={{ transformOrigin: "center" }} />
              <span className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                Software studio · Ibadan, Nigeria
              </span>
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold mb-5 sm:mb-6 tracking-tight leading-[1.08]"
            >
              We build the software.
              <br />
              <span className="text-[#725eed]">Then we build the company.</span>
            </Reveal>

            <Reveal
              as="p"
              delay={160}
              className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              TrybeNode is a software studio. We design and ship products
              in-house, then spin the strongest ones into independent
              ventures — TrybeMarket is the first.
            </Reveal>

            <Reveal delay={240} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2d236d] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#725eed] transition-colors duration-300"
              >
                Start a project
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#2d236d] text-sm sm:text-base font-semibold rounded-full border border-gray-200 hover:border-[#2d236d] transition-colors duration-300"
              >
                Meet TrybeMarket
              </Link>
            </Reveal>

            {/* Badges */}
            <Reveal delay={320} className="flex flex-wrap gap-3 mt-12 sm:mt-14 justify-center lg:justify-start">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700"
                >
                  <svg className="w-4 h-4 text-[#725eed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {badge.icon}
                  </svg>
                  <span className="text-xs sm:text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right — Node network visual */}
          <Reveal delay={200} className="flex items-center justify-center">
            <NodeNetwork />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
