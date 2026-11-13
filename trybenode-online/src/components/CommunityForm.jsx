import Reveal from "@/components/Reveal";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc-gjonpre0hS4WZ-av219w_ccPAyOw7UBgKK4lTahh6PJ3Cg/viewform";

export default function CommunityForm() {
  return (
    <section id="join" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Join the <span className="text-[#725eed]">Trybe</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Fill in the form below and we&apos;ll bring you into the community.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl">
            <iframe
              src={`${FORM_URL}?embedded=true`}
              title="TrybeNode community sign-up form"
              className="block w-full h-[2006px]"
              style={{ border: 0 }}
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
          <p className="mt-4 text-center text-xs text-gray-500">
            Form not loading?{" "}
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#725eed] font-semibold hover:underline"
            >
              Open it in a new tab
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
