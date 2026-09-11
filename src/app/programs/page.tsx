import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ButtonPrimary from "@/components/ButtonPrimary";

/* ── Status badge ── */
function StatusBadge({ status }: { status: "Live" | "In Development" | "Briefing Only" }) {
  const colors: Record<string, string> = {
    Live: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    "In Development": "bg-amber-500/15 text-amber-400 border border-amber-500/30",
    "Briefing Only": "bg-cyan/10 text-cyan/70 border border-cyan/20",
  };
  return (
    <span className={`inline-block text-[10px] font-bold tracking-[.15em] uppercase px-2.5 py-1 rounded-full ${colors[status]}`}>
      {status}
    </span>
  );
}

/* ── Program data ── */
const featured = {
  name: "EFAIRA",
  full: "Encore Federal AI Readiness Audit",
  status: "Live" as const,
  tagline: "The only independent federal AI readiness certification backed by cryptographic proof.",
  description:
    "A 30-point assessment across 8 evaluation domains of contractor and subcontractor AI and software readiness for federal agency awards. EFAIRA produces a color-coded scorecard and a signed, hash-verifiable Readiness Receipt that can be cited directly in technical volumes and proposal submissions. Assessed organizations receive the only AI readiness credential in the federal market that is independently verifiable -- not just an auditor's opinion.",
  logo: null,
};

const programs = [
  {
    name: "EADIE",
    full: "Encore Acquisition Decision Intelligence Engine",
    status: "Live" as const,
    tagline: "The contractor evaluation engine senior federal COs wish they had time to build themselves.",
    description:
      "EADIE encodes the multi-dimensional contractor evaluation methodologies that experienced Contracting Officers already apply manually, runs them at scale with AI augmentation, and produces audit-grade decision trails that survive protest review. Every assessment is sourced, logged, and explainable. EADIE does not replace human judgment -- it gives the CO more defensible evidence to back the judgment they were already going to make.",
    logo: null,
  },
  {
    name: "Acumen-10",
    full: "Provable AI for Federal Missions",
    status: "Live" as const,
    tagline: "Ten governed processes. Every decision sourced, logged, and explainable.",
    description:
      "Acumen-10 is Encore's core AI governance framework for federal mission systems. Ten structured processes sit behind every decision the system makes. It corrects its own reasoning when evidence conflicts, flags uncertainty rather than fabricating confidence, and routes decisions that carry mission risk to a human approver. Every output is traceable to source. Deployed in federal environments where explainability is not optional.",
    logo: null,
  },
  {
    name: "AcuSightPro",
    full: "Construction and Project Intelligence",
    status: "In Development" as const,
    tagline: "AI-powered construction site intelligence for federal and critical infrastructure projects.",
    description:
      "AcuSightPro applies AI to construction site documentation, compliance monitoring, and defect detection. Built for federal construction programs and critical infrastructure operators where documentation requirements are strict and the cost of missed defects is high. The system learns site-specific patterns over time -- flagging anomalies that static checklists miss. Built on ACI, the same compound intelligence substrate powering every Encore platform.",
    logo: "https://encoresvcsllc.com/wp-content/uploads/2025/12/color-scaled.png",
  },
  {
    name: "ECWS",
    full: "Encore Contract Writing Suite",
    status: "In Development" as const,
    tagline: "AI-assisted contract writing aligned to federal acquisition standards.",
    description:
      "The Encore Contract Writing Suite supports federal contracting officers and acquisition teams in drafting, reviewing, and refining contract documents. Built around federal acquisition regulation requirements and aligned to VA Contract Writing System procurement standards. ECWS applies AI assistance to the specific language patterns, clause requirements, and review workflows that define federal contract writing -- not generic document generation.",
    logo: null,
  },

  {
    name: "Phylaxone",
    full: "Distributed Post-Quantum Authentication Protocol",
    status: "Briefing Only" as const,
    tagline: "Cryptographic identity infrastructure for federal AI systems and zero trust environments.",
    description:
      "Phylaxone is the distributed authentication protocol powering Encore's AI governance and identity infrastructure. FROST threshold signing across independent nodes -- no stored secrets, no single point of compromise. Native AI agent governance: every agent gets a cryptographic identity, scoped credentials, and a threshold human approval gate for high-risk actions. Post-quantum compliant for CMMC, FedRAMP, and NSS acquisition requirements. Architecture and deployment details are discussed in direct briefings.",
    logo: "https://encoresvcsllc.com/wp-content/uploads/2025/12/PHYLAX-ONE-scaled.png",
  },
  {
    name: "CypherMission",
    full: "Emerging Encore Program",
    status: "In Development" as const,
    tagline: "Emerging Encore program in active development.",
    description:
      "CypherMission is in active development. Objectives, design, and operating concepts are available to authorized parties through direct briefing. Contact the Encore team to express interest and be included in early access conversations.",
    logo: null,
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Hero
        eyebrow="Secure AI Mission Vault"
        title="Mission-Ready AI Systems and Smart Tech."
        description="A single-source view of the AI platforms, oversight engines, and secure infrastructure Encore is building for government, regulators, and critical-infrastructure missions. Program details and architecture are discussed only in direct briefings."
        videoSrc="https://encoresvcsllc.com/wp-content/uploads/2025/12/cyber-security-technology-fraud-prevention-and-pri-2025-12-09-04-49-17-utc.mov"
      />

      {/* ── Featured: EFAIRA ── */}
      <Section id="efaira">
        <div className="font-extrabold tracking-[.12em] uppercase text-xs text-cyan/60 mb-2">Featured Program</div>
        <Card className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={featured.status} />
            <span className="text-[11px] text-muted/50 font-mono tracking-wide">{featured.full}</span>
          </div>
          <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(22px,2.8vw,32px)]">
            {featured.name}
          </h2>
          <p className="text-cyan/80 font-semibold text-sm">{featured.tagline}</p>
          <p className="text-muted text-sm leading-[1.75] max-w-[75ch]">{featured.description}</p>
          <div className="flex flex-wrap gap-3 mt-2">
            <ButtonPrimary href="#vault-request">Request EFAIRA Assessment</ButtonPrimary>
          </div>
        </Card>
      </Section>

      {/* ── All Programs ── */}
      <Section id="vault-programs">
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          Programs and Capabilities
        </h2>
        <p className="text-muted max-w-[70ch] mt-1.5">
          Names and branding are shown here for awareness. Program details, architecture, and use cases are
          discussed only in direct briefings with Encore.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-6">
          {programs.map((p) => (
            <Card key={p.name} className="flex flex-col gap-3.5 h-full">
              <header className="flex gap-4 items-start">
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="w-[130px] h-14 rounded-xl bg-white/80 object-contain border border-white/35 shrink-0"
                  />
                ) : (
                  <div className="w-[130px] h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-cyan/40 uppercase tracking-[.12em] shrink-0">
                    {p.name}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <StatusBadge status={p.status} />
                  </div>
                  <h3 className="text-lg font-bold leading-tight">{p.name}</h3>
                  <p className="text-[11px] text-muted/50 font-mono">{p.full}</p>
                </div>
              </header>
              <p className="text-cyan/70 text-xs font-semibold">{p.tagline}</p>
              <p className="text-muted text-sm leading-[1.7] flex-1">{p.description}</p>
              <div className="mt-auto">
                <ButtonPrimary href="#vault-request">Request a Briefing</ButtonPrimary>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── ACI Foundation callout ── */}
      <Section>
        <Card className="text-center max-w-[700px] mx-auto">
          <div className="font-extrabold tracking-[.12em] uppercase text-xs text-cyan/60 mb-3">Intelligence Substrate</div>
          <h3 className="font-heading font-extrabold text-[clamp(18px,2.2vw,24px)] mb-3">
            Every Encore Program Runs on ACI
          </h3>
          <p className="text-muted text-sm leading-[1.75] mb-4">
            Adaptive Compound Intelligence is the patented intelligence framework powering every platform
            Encore ships. Each deployment compounds value into the shared intelligence layer -- the system
            gets measurably more capable over time, not just more data-heavy. ACI founding work was reviewed
            by Oxford University faculty as "a fundamentally new category of intelligence architecture."
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted/60">
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">US Patent Issued</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">Application 19/680,696</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">Inventor: Corey Strange, CAIO/CTO</span>
          </div>
          <div className="mt-4">
            <a
              href="https://www.adaptivecompoundintelligence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan text-sm hover:underline"
            >
              adaptivecompoundintelligence.com
            </a>
          </div>
        </Card>
      </Section>

      {/* ── Request briefing ── */}
      <Section id="vault-request">
        <div className="max-w-[900px] mx-auto">
          <Card>
            <div className="font-extrabold tracking-[.12em] uppercase text-xs text-cyan/60">Contact</div>
            <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
              Request a Confidential Briefing.
            </h2>
            <p className="text-muted max-w-[65ch] mt-1.5">
              To learn more about any Encore program, contact us and include the program name and any relevant
              mission or organizational context. All program details are shared under mutual NDA.
            </p>
            <p className="text-muted text-sm mt-3">
              Email:{" "}
              <a href="mailto:jwoodson@encoresvcsllc.com" className="text-cyan underline">
                jwoodson@encoresvcsllc.com
              </a>{" "}
              · Phone: (202) 460-8668
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
