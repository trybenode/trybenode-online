import Image from "next/image";

export default function Testimonial({ 
  quote, 
  author, 
  role, 
  company, 
  projectType,
  image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" // Default tech image
}) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            What Our <span className="text-[#725eed]">Clients Say</span>
          </h2>
        </div>

        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Tech Image Background - Top on mobile, left on desktop */}
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 h-64 lg:h-full">
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt="Technology workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Purple overlay for brand consistency */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#725eed]/80 to-[#2d236d]/70 mix-blend-multiply"></div>
              
              {/* Decorative element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-[#fbeb78] rounded-full opacity-30"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative lg:ml-auto lg:w-1/2 p-6 sm:p-8 lg:p-12 xl:p-16">
            {/* Quote Icon */}
            <div className="mb-4 sm:mb-6">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#fbeb78] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            {/* Quote */}
            <blockquote className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed mb-6 sm:mb-8 font-medium">
              "{quote}"
            </blockquote>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-6 sm:mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#fbeb78]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Author Details */}
            <div className="flex items-start gap-3 sm:gap-4 pt-4 sm:pt-6 border-t-2 border-gray-100">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#725eed] to-[#2d236d] flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">{author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-bold text-base sm:text-lg text-gray-900">{author}</p>
                <p className="text-[#725eed] font-semibold text-sm sm:text-base">{role}, {company}</p>
                {projectType && (
                  <p className="text-gray-600 text-sm mt-1">{projectType}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
