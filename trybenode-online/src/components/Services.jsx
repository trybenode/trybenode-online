import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Scalable, responsive web applications built with modern frameworks and best practices.",
      features: ["Custom Web Apps", "E-Commerce Solutions", "Progressive Web Apps"],
      color: "#725eed"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-Platform", "App Maintenance"],
      color: "#2d236d"
    },
    {
      title: "Digital Infrastructure",
      description: "Robust backend systems, APIs, and cloud solutions for seamless operations.",
      features: ["API Development", "Cloud Integration", "System Architecture"],
      color: "#fbeb78"
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
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#725eed] transition-all duration-300 hover:-translate-y-2"
            >
              <div 
                className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center"
                style={{ 
                  backgroundColor: service.color === "#fbeb78" ? service.color : service.color,
                  opacity: service.color === "#fbeb78" ? 0.8 : 0.1
                }}
              >
                <div 
                  className="w-6 h-6 rounded"
                  style={{ 
                    backgroundColor: service.color === "#fbeb78" ? "#2d236d" : service.color
                  }}
                />
              </div>
              
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
