export default function WhyTrybeNode() {
  const values = [
    {
      icon: "⚡",
      title: "Fast & Efficient",
      description: "We deliver clean, reliable systems on time without overcomplicating solutions."
    },
    {
      icon: "🎯",
      title: "User-Centered",
      description: "Every product we build is designed with your users in mind—intuitive and easy to use."
    },
    {
      icon: "🚀",
      title: "Innovation-Driven",
      description: "We stay ahead of the curve, using modern technologies to solve today's problems."
    },
    {
      icon: "🤝",
      title: "Community-Focused",
      description: "A growing network of creators and builders, connected through technology and collaboration."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="text-[#725eed]">TrybeNode?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just developers—we're problem-solvers committed to creating 
            impactful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#fbeb78] group"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
