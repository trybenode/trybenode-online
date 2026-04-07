import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact TrybeNode - Get Your Free Consultation | Ibadan, Nigeria",
  description:
    "Ready to transform your business? Contact TrybeNode for custom software development, e-commerce platforms, and automated systems. Located at Leadcity University, Ibadan. Email: info@trybenode.online",
  keywords:
    "contact TrybeNode, software development consultation, e-commerce development Nigeria, Leadcity University Ibadan, custom software quote, TrybeNode contact",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://trybenode.online/contact",
    siteName: "TrybeNode",
    title: "Contact TrybeNode - Get Your Free Consultation",
    description:
      "Get in touch with TrybeNode for innovative digital solutions. We're based in Ibadan, Nigeria and ready to bring your ideas to life.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Contact TrybeNode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TrybeNode - Get Your Free Consultation",
    description:
      "Ready to build innovative digital solutions? Contact TrybeNode in Ibadan, Nigeria.",
    images: [
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80",
    ],
  },
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2d236d] to-[#725eed] pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbeb78] rounded-full blur-3xl opacity-20 -mr-48 -mt-48" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Get In <span className="text-[#fbeb78]">Touch</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Let's
                discuss how we can help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Map & Contact Info Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contact Information - Left */}
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Contact <span className="text-[#725eed]">Information</span>
                </h2>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#725eed]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[#725eed]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email Us</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Our team is here to help
                    </p>
                    <a
                      href="mailto:contact@trybenode.online"
                      className="text-[#725eed] font-semibold hover:underline text-base"
                    >
                      contact@trybenode.online
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#fbeb78]/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[#2d236d]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Call Us</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      24/7 Support Available
                    </p>
                    <a
                      href="tel:+2348101502547"
                      className="text-[#725eed] font-semibold hover:underline text-base"
                    >
                      +234 810 150 2547
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#2d236d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[#2d236d]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Our Headquarters
                    </p>
                    <p className="text-[#725eed] font-semibold text-base">
                      Leadcity University
                      <br />
                      Ibadan, Nigeria
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#725eed]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[#725eed]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3">Business Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <span className="text-gray-600 w-32">Mon - Fri:</span>
                        <span className="font-semibold text-gray-900">
                          9:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-gray-600 w-32">Saturday:</span>
                        <span className="font-semibold text-gray-900">
                          10:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-gray-600 w-32">Sunday:</span>
                        <span className="font-semibold text-gray-900">
                          Closed
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">
                        * 24/7 support available for emergencies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map - Right */}
              <div>
                <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] lg:h-[600px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2428249426916!2d3.8732747404820063!3d7.326600592712108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398f16f3766861%3A0xe3c4e960b0c46ade!2sLEAD%20CITY%20UNIVERSITY%20MAIN%20GATE!5e0!3m2!1sen!2sus!4v1775573252316!5m2!1sen!2sus"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Prefer to Connect on{" "}
              <span className="text-[#725eed]">Social Media?</span>
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Follow us on our social platforms for updates, insights, and more.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2d236d] text-white rounded-full flex items-center justify-center hover:bg-[#725eed] transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/trybenode/"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2d236d] text-white rounded-full flex items-center justify-center hover:bg-[#725eed] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/trybe.node.space/"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2d236d] text-white rounded-full flex items-center justify-center hover:bg-[#725eed] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2d236d] text-white rounded-full flex items-center justify-center hover:bg-[#725eed] transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2d236d] text-white rounded-full flex items-center justify-center hover:bg-[#725eed] transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
