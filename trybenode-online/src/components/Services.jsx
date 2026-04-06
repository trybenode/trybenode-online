import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "AgriTech Solutions",
      description: "Smart farming platforms, supply chain management, and agricultural data analytics.",
      features: ["Farm Management", "IoT Sensors", "Market Platforms"],
      color: "#725eed",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80"
    },
    {
      title: "IoT & Smart Systems",
      description: "Connected devices, automation systems, and real-time monitoring solutions.",
      features: ["Device Integration", "Real-time Analytics", "Automation"],
      color: "#2d236d",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&q=80"
    },
    {
      title: "PropTech & More",
      description: "Property management, real estate platforms, and industry-specific digital solutions.",
      features: ["Property Platforms", "Management Systems", "Custom Solutions"],
      color: "#fbeb78",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What We <span className="text-[#725eed]">Build</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, we create digital solutions 
            that make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-[#725eed] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-8">
              
                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-[#725eed]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center text-[#725eed] font-semibold text-lg hover:text-[#2d236d] transition-colors"
          >
            View Our Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
