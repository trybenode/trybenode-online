import Image from "next/image";

export default function WhyTrybeNode() {
  const values = [
    {
      icon: "⚡",
      title: "Fast & Efficient",
      description: "We deliver clean, reliable systems on time without overcomplicating solutions."
    },
    {
      icon: "🎯",
      title: "Industry Versatile",
      description: "E-commerce, automated systems, IoT, PropTech, AgriTech—we adapt to any industry."
    },
    {
      icon: "🚀",
      title: "Innovation-Driven",
      description: "We leverage modern technologies and proven methodologies to solve complex problems."
    },
    {
      icon: "🤝",
      title: "Expert Team",
      description: "Access the right expertise and insights for your project—regardless of industry."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Overlapping Images */}
          <div className="hidden lg:block relative h-[600px]">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-[85%] h-[70%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            
            {/* Foreground Image */}
            <div className="absolute bottom-0 right-0 w-[75%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                alt="Professional workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#fbeb78] rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose <span className="text-[#725eed]">TrybeNode?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We're not just developers—we're problem-solvers committed to creating 
              impactful digital experiences.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#725eed]/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#725eed] group-hover:scale-110 transition-all duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
