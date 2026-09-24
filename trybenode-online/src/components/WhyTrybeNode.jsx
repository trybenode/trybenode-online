import Image from "next/image";
import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Build",
    description:
      "We design and ship the product ourselves, end to end. No outsourcing, no handoffs.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l-4 4 4 4m6-8l4 4-4 4M13 6l-2 12" />
    ),
  },
  {
    number: "02",
    title: "Validate",
    description:
      "Every product proves itself with real users before it earns more investment or attention.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 18l5-5 3 3 8-8M20 8v6M20 8h-6" />
    ),
  },
  {
    number: "03",
    title: "Spin out",
    description:
      "The strongest ideas graduate into their own company, with their own team and roadmap. TrybeMarket is here now.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v9a3 3 0 003 3h6m0 0l-3-3m3 3l-3 3M6 4a2 2 0 100 4 2 2 0 000-4z" />
    ),
  },
];

export default function WhyTrybeNode() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — TrybeMarket screenshots */}
          <Reveal className="relative h-105 sm:h-130 mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute left-0 top-2 w-[56%] aspect-499/1080 rounded-4xl overflow-hidden border-4 border-white shadow-xl -rotate-6">
              <Image
                src="/trybemarket-2.jpeg"
                alt="TrybeMarket product screen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 280px"
              />
            </div>
            <div className="absolute right-0 bottom-2 w-[58%] aspect-499/1080 rounded-4xl overflow-hidden border-4 border-white shadow-2xl rotate-3">
              <Image
                src="/trybemarket-1.jpeg"
                alt="TrybeMarket app screen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 42vw, 300px"
              />
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 inline-flex items-center gap-2 px-3.5 py-2 bg-white rounded-full shadow-lg border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                TrybeMarket — live venture
              </span>
            </div>
          </Reveal>

          {/* Right — Content */}
          <div>
            <Reveal as="h2" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              One studio. <span className="text-[#725eed]">Growing ventures.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={80}
              className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-12 leading-relaxed"
            >
              TrybeNode isn&apos;t an agency taking on client work — it&apos;s a
              studio that builds its own products. TrybeMarket, our student
              marketplace, is proof the model works.
            </Reveal>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={160 + index * 80} className="flex gap-5">
                  <div className="shrink-0 relative">
                    <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#725eed]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {step.icon}
                      </svg>
                    </div>
                    {index !== steps.length - 1 && (
                      <span className="absolute left-1/2 top-11 -translate-x-1/2 w-px h-8 bg-gray-200" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-300">{step.number}</span>
                      <h3 className="text-base sm:text-lg font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
