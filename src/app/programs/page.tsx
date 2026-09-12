import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProgramCards from "@/components/ProgramCards";

const programs = [
  {
    name: "AI & Software Readiness Audit",
    status: "Federal AI Readiness Assessment (EFAIRA)",
    tagline: "An independent 30-point assessment across 8 evaluation domains of contractor and subcontractor AI and software readiness for federal agency awards.",
    body:
      "The Encore Federal AI Readiness Audit (EFAIRA) is an independent assessment of contractor and subcontractor software, AI, and codebase posture in pursuit of federal agency awards. Color-coded scorecard across 8 evaluation domains. Signed hash-verifiable Readiness Receipt for citation in technical volumes. Mutual NDA at intake.",
    available: true,
    href: "/readiness-audit",
    motion: "sweep",
    featured: true,
  }
];

export const metadata = {
  title: "Programs | Encore Services, LLC",
  description:
    "Secure AI Mission Vault: a catalog of the AI copilots, oversight engines, and secure platforms Encore is building for government, regulators, and critical-infrastructure missions.",
};

export default function ProgramsPage() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden" style={{ paddingTop: "120px", paddingBottom: "60px" }}>
        <div className="hero-video-wrap hero-video-desktop">
          <video autoPlay loop muted playsInline preload="none">
            <source src="/videos/programshero.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container-page relative z-10">
          <ScrollReveal className="reveal max-w-3xl">
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span>Secure AI Mission Vault</span>
              <span className="h-px w-12" style={{ background: "var(--amber)" }} />
            </div>
            <h1 className="heading-xl text-balance mb-6">
              Mission-Ready <span className="accent">AI Systems</span> &amp; Smart Tech.
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl text-balance">
              A single-source view of the <strong>AI copilots</strong>, <strong>oversight engines</strong>, and{" "}
              <strong>secure platforms</strong> Encore is building for government, regulators, and critical-infrastructure
              missions. Names and branding are shown here for awareness; program details, architecture, and use cases
              are discussed only in direct briefings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Request a Briefing
              </Link>
              <Link href="/capabilities" className="btn btn-outline">
                View Capabilities
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ INTRO ═══════════════════ */}
      <section>
        <div className="container-page">
          <ScrollReveal className="reveal text-center max-w-3xl mx-auto">
            <div className="eyebrow mb-4">Programs &amp; Capabilities</div>
            <h2 className="heading-lg mb-5 text-balance">
              Purpose-Built <span className="accent">AI Programs</span> for Mission-Critical Environments.
            </h2>
            <p className="text-muted text-lg">
              Each Encore program is engineered for the realities of federal and critical-infrastructure work: secure,
              explainable, and designed around mission outcomes, not demo tricks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ CONFIDENTIAL AI BOX ═══════════════════ */}
      <section style={{ paddingTop: "48px", paddingBottom: "16px" }}>
        <div className="container-page">
          <ScrollReveal className="reveal-scale card-patriotic max-w-4xl mx-auto text-center">
            <div className="card-inner py-10 px-8">
              <div className="eyebrow mb-4">For Government Agencies</div>
              <h2 className="heading-md mb-4 text-balance">
                Confidential AI &amp; <span className="accent">Software Details</span>
              </h2>
              <p className="text-muted text-base leading-relaxed mb-4 max-w-2xl mx-auto">
                Detailed program information, platform architecture, and AI system documentation are available to
                authorized government agency personnel only. If you have access, enter the secure area below. If
                you are with a federal agency and would like same-day access, contact Encore and we will get you in.
              </p>
              {/* Program name list */}
              <p className="text-sm font-semibold mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                AcuSightPro &nbsp;·&nbsp; Encore Contract Writing Suite &nbsp;·&nbsp; EADIE &nbsp;·&nbsp; Acumen-10 &nbsp;·&nbsp; Financial Integration Systems
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Contact Encore
                </Link>
                <Link href="/secure" className="btn btn-outline">
                  Enter Secure Area
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ PUBLIC PROGRAM CARDS ═══════════════════ */}
      <section style={{ paddingTop: "48px" }}>
        <div className="container-page">
          <ProgramCards programs={programs} />
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 176, 0, 0.3), transparent 60%)" }}
        />
        <div className="container-page relative z-10">
          <ScrollReveal className="reveal-scale card-patriotic cta-final max-w-4xl mx-auto text-center">
            <div className="card-inner py-12 px-8">
              <div className="eyebrow mb-4">Start the Conversation</div>
              <h2 className="heading-lg mb-5 text-balance">
                Have a Mission That Needs <span className="accent">AI?</span>
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
                Tell us about your challenge. We&rsquo;ll tell you honestly whether an existing program fits, or whether
                something custom is the right answer.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Contact Encore
                </Link>
                <Link href="/services" className="btn btn-outline">
                  View Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
