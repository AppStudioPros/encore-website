import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ButtonPrimary from "@/components/ButtonPrimary";

const programs = [
  {
    name: "LedgerLocc",
    tagline: "Encore flagship platform program.",
    description: "LedgerLocc is an innovative Encore program. To explore whether it aligns with your mission needs, request a conversation with the team.",
    logo: "https://encoresvcsllc.com/wp-content/uploads/2025/12/LLbluewhite.png",
  },
  {
    name: "AcuSightPro",
    tagline: "Advanced mission technology initiative.",
    description: "AcuSightPro is an Encore initiative. If you would like to learn more, contact the Encore team.",
    logo: "https://encoresvcsllc.com/wp-content/uploads/2025/12/color-scaled.png",
  },
  {
    name: "CypherMission",
    tagline: "Emerging Encore program (coming soon).",
    description: "CypherMission is an upcoming Encore program. For specific objectives, design, and operating concepts please request access by filling out the form below.",
    logo: null,
  },
  {
    name: "Phylax One",
    tagline: "Next-generation intelligence initiative.",
    description: "Phylax One is a forthcoming Encore initiative. You may note your interest below to be included in future conversations.",
    logo: "https://encoresvcsllc.com/wp-content/uploads/2025/12/PHYLAX-ONE-scaled.png",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Hero
        eyebrow="Secure AI Mission Vault"
        title="Mission-ready AI systems and smart tech."
        description="This is the catalog—a single-source view of the AI copilots, oversight engines, and secure platforms Encore is building for government, regulators, and critical-infrastructure missions."
        videoSrc="https://encoresvcsllc.com/wp-content/uploads/2025/12/cyber-security-technology-fraud-prevention-and-pri-2025-12-09-04-49-17-utc.mov"
      />

      <Section id="vault-programs">
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          Programs and Capabilities
        </h2>
        <p className="text-muted max-w-[70ch] mt-1.5">
          Names and branding are shown here for awareness. Program details, architecture, and use cases are discussed
          only in direct briefings with Encore.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-6">
          {programs.map((p) => (
            <Card key={p.name} className="flex flex-col gap-3.5 h-full">
              <header className="flex gap-4 items-center">
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="w-[150px] h-16 rounded-2xl bg-white/80 object-contain border border-white/35"
                  />
                ) : (
                  <div className="w-[150px] h-16 rounded-2xl bg-white/80 flex items-center justify-center text-[11px] font-bold text-[#1a1200] uppercase tracking-[.12em]">
                    Coming Soon
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="text-[13px] text-muted">{p.tagline}</p>
                </div>
              </header>
              <p className="text-muted text-sm leading-[1.7]">{p.description}</p>
              <div className="mt-auto">
                <ButtonPrimary href="#vault-request">Request a briefing</ButtonPrimary>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="vault-request">
        <div className="max-w-[900px] mx-auto">
          <Card>
            <div className="font-extrabold tracking-[.12em] uppercase text-xs text-cyan/60">Contact</div>
            <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
              Request a confidential briefing.
            </h2>
            <p className="text-muted max-w-[65ch] mt-1.5">
              To learn more about any Encore program listed on this page, please contact us and include the program
              name(s) and any relevant mission or organizational context.
            </p>
            <p className="text-muted text-sm mt-3">
              Email: <a href="mailto:jwoodson@encoresvcsllc.com" className="text-cyan underline">jwoodson@encoresvcsllc.com</a>{" "}
              · Phone: (202) 460-8668
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
