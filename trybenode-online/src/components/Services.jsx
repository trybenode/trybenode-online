import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "E-Commerce Platforms",
    description:
      "Storefronts, payments, and inventory systems built to handle real transaction volume, not demo data.",
    features: ["Custom storefronts", "Payment integration", "Inventory & orders"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h12l-1.2 11a2 2 0 01-2 1.8H9.2a2 2 0 01-2-1.8L6 8zM9 8V6a3 3 0 016 0v2" />
    ),
  },
  {
    title: "Automated Systems",
    description:
      "Internal tools and workflow automation that remove the manual steps slowing a team down.",
    features: ["Workflow automation", "System integration", "Internal tooling"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4.5 9a8 8 0 0114-4.5M19.5 15a8 8 0 01-14 4.5" />
    ),
  },
  {
    title: "IoT, PropTech & AgriTech",
    description:
      "Connected devices and industry-specific platforms for property and agriculture businesses moving online.",
    features: ["Device integration", "Property platforms", "Field data systems"],
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <Reveal as="h2" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            What we <span className="text-[#725eed]">build</span>
          </Reveal>
          <Reveal as="p" delay={80} className="text-base sm:text-lg text-gray-600">
            Not a menu of everything — the categories we actually ship in,
            shaped by what building TrybeMarket taught us.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 100}
              className="group relative p-7 sm:p-8 rounded-2xl border border-gray-200 hover:border-[#725eed]/40 hover:shadow-[0_8px_30px_rgba(114,94,237,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#725eed]/10 flex items-center justify-center text-[#725eed] mb-6 group-hover:bg-[#725eed] group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="text-center mt-14 sm:mt-16">
          <Link
            href="/projects"
            className="group inline-flex items-center text-[#725eed] font-semibold text-sm sm:text-base hover:text-[#2d236d] transition-colors"
          >
            See it in production
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
