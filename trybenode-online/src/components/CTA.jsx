import Link from "next/link";
import Reveal from "@/components/Reveal";
import GridBackground from "@/components/GridBackground";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-linear-to-br from-[#2d236d] to-[#725eed] overflow-hidden">
      <GridBackground variant="dark" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal as="h2" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
          Got an idea worth building?
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="text-base sm:text-lg text-white/80 mb-9 sm:mb-10 max-w-xl mx-auto"
        >
          Whether it&apos;s the next TrybeMarket or a tool for your own
          business — bring the vision. We bring the studio.
        </Reveal>

        <Reveal delay={160} className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#fbeb78] text-[#2d236d] text-sm sm:text-base font-bold rounded-full hover:bg-white transition-colors duration-300"
          >
            Start a project
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-white text-sm sm:text-base font-semibold rounded-full border border-white/30 hover:border-white/70 transition-colors duration-300"
          >
            Learn about the studio
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
