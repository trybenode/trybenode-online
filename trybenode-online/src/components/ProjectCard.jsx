import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ 
  title, 
  description, 
  features, 
  technologies,
  images, // Array of image paths
  link,
  reverse = false // For alternating layouts when you have multiple projects
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Images Section - Portrait Phone Screenshots */}
      <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        {/* Mobile & Tablet: Subtle overlapping cards (middle one on top) */}
        <div className="flex justify-center lg:hidden mb-8">
          <div className="relative flex items-center justify-center gap-3">
            {/* First two images side by side in background */}
            {images.slice(0, 2).map((image, index) => (
              <div 
                key={index} 
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{ 
                  width: '130px', 
                  height: '280px',
                }}
              >
                {image ? (
                  <Image
                    src={image}
                    alt={`${title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="130px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#725eed]/20 to-[#fbeb78]/20 flex items-center justify-center border-4 border-gray-800 rounded-2xl">
                    <div className="text-center">
                      <span className="text-2xl">📱</span>
                      <p className="text-gray-600 text-xs mt-1">{index + 1}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Third image overlapping on top center (elevated) */}
            {images[2] !== undefined && (
              <div 
                className="absolute rounded-2xl overflow-hidden shadow-2xl border-2 border-white"
                style={{ 
                  width: '130px', 
                  height: '280px',
                  top: '-30px',
                  zIndex: 10
                }}
              >
                {images[2] ? (
                  <Image
                    src={images[2]}
                    alt={`${title} screenshot 3`}
                    fill
                    className="object-cover"
                    sizes="130px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#725eed]/20 to-[#fbeb78]/20 flex items-center justify-center border-4 border-gray-800 rounded-2xl">
                    <div className="text-center">
                      <span className="text-2xl">📱</span>
                      <p className="text-gray-600 text-xs mt-1">3</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop: Side by side */}
        <div className="hidden lg:flex gap-4 justify-center items-start">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-shrink-0"
              style={{ width: '180px', height: '380px' }}
            >
              {image ? (
                <Image
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#725eed]/20 to-[#fbeb78]/20 flex items-center justify-center border-8 border-gray-800 rounded-2xl">
                  <div className="text-center">
                    <span className="text-4xl">📱</span>
                    <p className="text-gray-600 text-xs mt-2 px-2">Screenshot {index + 1}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <h3 className="text-4xl font-bold mb-4">
          {title}
        </h3>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3 text-[#725eed]">Key Features</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#fbeb78] mt-1">✦</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-3 text-[#725eed]">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-[#2d236d] text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Link */}
        {link && (
          <Link 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#725eed] text-white font-semibold rounded-lg hover:bg-[#2d236d] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Visit Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
