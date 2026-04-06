import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const founders = [
    {
      name: "Allen Oluwatobi Douglas",
      role: "Software Engineer",
      specialty: "Full Stack Mobile & Web Developer",
      image: "/public/founder-1.jpg", // Replace with actual image
      description: "Expert in building scalable mobile and web applications with modern frameworks."
    },
    {
      name: "Abdulhaq Abdulrasheed Olabanji",
      role: "Software Engineer",
      specialty: "Cyber Security Expert",
      image: "/public/founder-2.jpg", // Replace with actual image
      description: "Specializes in securing digital infrastructure and implementing robust security protocols."
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#725eed] rounded-full blur-3xl opacity-10 -mr-48 -mt-48" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
                About <span className="text-[#725eed]">TrybeNode</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're a registered technology company building practical, user-centered 
                digital solutions that solve real-world problems across multiple industries.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Our <span className="text-[#725eed]">Story</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    TrybeNode started with a simple mission: to create technology solutions 
                    that work for everyone. We believe in simplicity, functionality, and 
                    delivering systems that users can trust.
                  </p>
                  <p>
                    As a registered company, we bring together a team of skilled developers and 
                    problem-solvers who are passionate about innovation. From e-commerce platforms 
                    to automated systems, IoT solutions to PropTech and AgriTech—we have the 
                    expertise to bring your vision to life.
                  </p>
                  <p>
                    What sets us apart is our commitment to understanding your industry and 
                    delivering solutions tailored to your specific needs. We're not just 
                    developers; we're your technology partners.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Team working together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                What We <span className="text-[#725eed]">Do</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We specialize in building scalable systems across diverse industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "E-Commerce Platforms", icon: "🛒", desc: "Custom online stores with payment integration and inventory management" },
                { title: "Automated Systems", icon: "⚙️", desc: "Workflow automation and business process optimization" },
                { title: "IoT Solutions", icon: "📡", desc: "Connected devices and real-time monitoring systems" },
                { title: "PropTech", icon: "🏢", desc: "Property management and real estate platforms" },
                { title: "AgriTech", icon: "🌾", desc: "Smart farming and agricultural technology solutions" },
                { title: "Custom Solutions", icon: "💡", desc: "Tailored digital products for your specific industry" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Co-Founders Section */}
        <section className="py-20 bg-gradient-to-br from-[#2d236d] to-[#725eed] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Meet Our <span className="text-[#fbeb78]">Co-Founders</span>
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                The visionaries behind TrybeNode's success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {founders.map((founder, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  {/* Circular founder image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#fbeb78] shadow-xl">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#725eed]/20 to-[#fbeb78]/20">
                        <div className="text-center">
                          <span className="text-6xl">👤</span>
                          <p className="text-white/60 text-xs mt-2">Add photo</p>
                        </div>
                      </div>
                      {/* When you have images, replace above div with:
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                      */}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-[#fbeb78] font-semibold mb-1">{founder.role}</p>
                    <p className="text-white/80 text-sm mb-4">{founder.specialty}</p>
                    <p className="text-white/70 leading-relaxed">{founder.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#725eed]/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver practical, scalable technology solutions that empower businesses 
                  and communities across emerging markets.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#fbeb78]/30 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Simplicity, reliability, and user-centered design guide everything we build. 
                  We prioritize functionality over complexity.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#2d236d]/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the trusted technology partner for businesses seeking innovative, 
                  reliable solutions across any industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <Testimonial 
          quote="TrybeNode transformed our business with a custom e-commerce platform that exceeded our expectations. Their team's expertise in automation saved us countless hours and significantly improved our operational efficiency."
          author="Michael Adebayo"
          role="CEO"
          company="RetailHub Nigeria"
          projectType="E-Commerce & Automation Project"
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
        />

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work <span className="text-[#725eed]">With Us?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's discuss how we can bring your project to life with our expertise and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-[#2d236d] text-white font-semibold rounded-lg hover:bg-[#725eed] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
              <Link 
                href="/projects"
                className="px-8 py-4 bg-white text-[#2d236d] font-semibold rounded-lg border-2 border-[#2d236d] hover:bg-[#fbeb78] hover:border-[#fbeb78] transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

