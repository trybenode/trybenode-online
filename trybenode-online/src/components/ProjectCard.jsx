import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

function ScreenshotPlaceholder({ index, size = "sm" }) {
  return (
    <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
      <svg
        className={size === "sm" ? "w-6 h-6 text-gray-300" : "w-8 h-8 text-gray-300"}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="6" y="3" width="12" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" d="M10 18h4" />
      </svg>
    </div>
  );
}

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
      <Reveal className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        {/* Mobile & Tablet: Subtle overlapping cards (middle one on top) */}
        <div className="flex justify-center lg:hidden mb-8">
          <div className="relative flex items-center justify-center gap-3">
            {/* First two images side by side in background */}
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white"
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
                  <ScreenshotPlaceholder index={index} />
                )}
              </div>
            ))}

            {/* Third image overlapping on top center (elevated) */}
            {images[2] !== undefined && (
              <div
                className="absolute rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
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
                  <ScreenshotPlaceholder index={2} />
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
              className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shrink-0"
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
                <ScreenshotPlaceholder index={index} size="lg" />
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Content Section */}
      <Reveal delay={120} className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
          {title}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#725eed]">Key Features</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <svg className="w-4 h-4 mt-1 text-[#725eed] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#725eed]">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-medium">
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
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[#2d236d] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#725eed] transition-colors duration-300"
          >
            Visit Project
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )}
      </Reveal>
    </div>
  );
}
