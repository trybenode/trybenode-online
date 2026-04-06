import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "E-Commerce Platforms",
      description: "Full-featured online stores, payment integration, inventory management, and seamless shopping experiences.",
      features: ["Custom Storefronts", "Payment Gateways", "Order Management"],
      color: "#725eed",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80"
    },
    {
      title: "Automated Systems",
      description: "Workflow automation, business process optimization, and intelligent systems that save time and resources.",
      features: ["Process Automation", "Smart Workflows", "System Integration"],
      color: "#2d236d",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
    },
    {
      title: "IoT, PropTech & AgriTech",
      description: "Connected devices, property management platforms, agricultural tech, and industry-specific solutions.",
      features: ["IoT Integration", "Property Platforms", "AgriTech Solutions"],
      color: "#fbeb78",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            What We <span className="text-[#725eed]">Build</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            From e-commerce platforms to automated systems and beyond—we create 
            digital solutions that drive real business impact.
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
              <div className="p-6 sm:p-8">
              
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
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
            className="inline-flex items-center text-[#725eed] font-semibold text-sm sm:text-base lg:text-lg hover:text-[#2d236d] transition-colors">
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
