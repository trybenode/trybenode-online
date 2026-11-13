import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CommunityForm from "@/components/CommunityForm";
import Reveal from "@/components/Reveal";
import GridBackground from "@/components/GridBackground";

export const metadata = {
  title: "Join the TrybeNode Community | Lagos, Ibadan, and Abuja, Nigeria.",
  description:
    "Join the TrybeNode community — a free space for students in software engineering, computer science, IT, cybersecurity, and Web3 to learn, build real projects, and grow their portfolios.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://trybenode.online/community",
    siteName: "TrybeNode",
    title: "Join the TrybeNode Community",
    description:
      "A free community for students to learn, build real projects, and grow their portfolios.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the TrybeNode Community",
    description:
      "A free community for students to learn, build real projects, and grow their portfolios.",
  },
};

export default function Community() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-linear-to-br from-[#2d236d] to-[#725eed] pt-24 pb-16 sm:pt-32 sm:pb-24">
          <GridBackground variant="dark" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto text-white">
              <Reveal as="h1" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Build With the <span className="text-[#fbeb78]">Community</span>
              </Reveal>
              <Reveal as="p" delay={80} className="text-base sm:text-lg text-white/80 leading-relaxed">
                A free community for students who want to learn, build real
                projects, and grow their portfolios alongside the studio.
              </Reveal>
            </div>
          </div>
        </section>

        <CommunityForm />
      </main>
      <Footer />
    </>
  );
}
