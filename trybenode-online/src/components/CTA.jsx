import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-linear-to-br from-[#2d236d] to-[#725eed] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbeb78] rounded-full blur-3xl opacity-20 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 -ml-48 -mb-48" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Got a Project Idea?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Whether it's an e-commerce platform, automated systems, IoT, PropTech, AgriTech, 
          or any innovative solution—bring us your vision and the right information, and we'll make it happen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="px-8 py-4 bg-[#fbeb78] text-[#2d236d] font-bold rounded-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started Today
          </Link>
          <Link 
            href="/about"
            className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-[#2d236d] transition-all duration-300"
          >
            Learn About Us
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <p className="text-white/80 mb-6 uppercase tracking-wide text-sm font-semibold">
            Trusted by startups and businesses across emerging markets
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#fbeb78]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Quality Assured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#fbeb78]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#fbeb78]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Full Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
