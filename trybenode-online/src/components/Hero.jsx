import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbeb78] rounded-full blur-3xl opacity-20 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#725eed] rounded-full blur-3xl opacity-10 -ml-48 -mb-48" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Technology Solutions
              <br />
              <span className="text-[#725eed]">For Every Industry</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
              E-commerce platforms, automated systems, IoT, PropTech, AgriTech—we build 
              practical digital solutions across industries with the right expertise and insights.
            </p>
          
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-[#2d236d] text-white font-semibold rounded-lg hover:bg-[#725eed] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Your Project
              </Link>
              <Link 
                href="/projects"
                className="px-8 py-4 bg-white text-[#2d236d] font-semibold rounded-lg border-2 border-[#2d236d] hover:bg-[#fbeb78] hover:border-[#fbeb78] transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-200">
              <div>
                <div className="text-4xl font-bold text-[#725eed] mb-2">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#725eed] mb-2">10+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Industries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#725eed] mb-2">24/7</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Support</div>
              </div>
            </div>
          </div>

          {/* Right - Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80"
                  alt="Technology and Innovation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&q=80"
                  alt="IoT and Smart Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80"
                  alt="Software Development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
                  alt="Team Collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
