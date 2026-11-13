import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CommunityTeaser() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl bg-white border border-gray-200 p-8 sm:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-[#725eed] mb-3">
              Community
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Join the <span className="text-[#725eed]">Trybe</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              A free community for students who want to learn, build real
              projects, and grow their portfolios. No experience needed — just
              the will to build.
            </p>
          </div>
          <Link
            href="/community"
            className="group shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2d236d] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#725eed] transition-colors duration-300"
          >
            Join the community
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
