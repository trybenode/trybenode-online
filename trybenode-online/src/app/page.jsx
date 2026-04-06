import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyTrybeNode from "@/components/WhyTrybeNode";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhyTrybeNode />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
