import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbeb78] rounded-full blur-3xl opacity-20 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#725eed] rounded-full blur-3xl opacity-10 -ml-48 -mb-48" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Image 
              src="/logo.png" 
              alt="TrybeNode Logo" 
              width={400} 
              height={120}
              priority
              className="w-auto h-24 sm:h-32"
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Building Simple Solutions
            <br />
            <span className="text-[#725eed]">For Real-World Problems</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            We create practical, user-centered digital products that simplify everyday processes 
            and enhance experiences in emerging markets.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-[#2d236d] text-white font-semibold rounded-lg hover:bg-[#725eed] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your Project
            </Link>
            <Link 
              href="/about"
              className="px-8 py-4 bg-white text-[#2d236d] font-semibold rounded-lg border-2 border-[#2d236d] hover:bg-[#fbeb78] hover:border-[#fbeb78] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 pt-12 border-t border-gray-200">
            <div>
              <div className="text-4xl font-bold text-[#725eed] mb-2">50+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#725eed] mb-2">100%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#725eed] mb-2">24/7</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
