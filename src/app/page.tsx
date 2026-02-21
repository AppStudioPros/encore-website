import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonGhost from "@/components/ButtonGhost";

/* ── Sponsor data (kept intact) ── */
const sponsors = {
  col1: [
    { name: "AppStudioPro", href: "https://www.appstudiopro.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/11/AppStudioPro.png" },
    { name: "Contractor Guardians", href: "https://www.contractorguardians.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/11/CG-vert-logo.png" },
    { name: "LedgerLocc", href: "https://ledgerlocc.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/11/website-logo.png" },
    { name: "Virtual Notary 365", href: "https://virtualnotary365.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/11/VirtualNotary365.png" },
  ],
  col2: [
    { name: "Web Design Pros 365", href: "https://webdesignpros365.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/11/Web-Design-Pros-365-scaled.png" },
    { name: "Pocket Filer", href: "https://www.pocketfiler.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/11/PocketFiler-1.png" },
    { name: "Tria Federal", href: null, img: null },
    { name: "Favor Tech Consulting", href: "https://ftc-llc.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/12/FTC-web-retina-.png" },
  ],
  col3: [
    { name: "Axiom Corporation", href: "https://axiom-corp.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/12/Axiom-corp_Webside_Logo_White.png" },
    { name: "Woodside Quality LLC", href: "https://woodsidequality.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/12/ebcaa458-bd07-4ff6-ba76-16f33d5750ed_medium.png" },
    { name: "Activion Inc.", href: "https://www.activioninc.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/12/Activion_Logo_Photoshop_LB_UPDATED-e1469046892745.png" },
    { name: "Ginia", href: "https://www.giniagroup.com/", img: "https://encoresvcsllc.com/wp-content/uploads/2025/12/White-logo-clear2-scaled.png" },
  ],
};

function SponsorCard({ s }: { s: { name: string; href: string | null; img: string | null } }) {
  const inner = s.img ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={s.img} alt={s.name} className="max-w-[70%] max-h-[70%] object-contain" loading="lazy" />
  ) : (
    <span className="font-bold text-sm text-center">{s.name}</span>
  );

  const cls = "w-full aspect-square flex items-center justify-center bg-gradient-to-br from-[rgba(255,230,170,0.2)] via-[rgba(255,214,140,0.3)] to-[rgba(255,214,104,0.2)] border border-gold-light rounded-xl shadow-[0_0_0_1px_rgba(255,176,0,0.18),0_12px_26px_rgba(0,0,0,0.25)] p-2.5 hover:-translate-y-0.5 transition-transform";

  if (s.href) {
    return (
      <a href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return <div className={cls}>{inner}</div>;
}

function SponsorColumn({ items, direction }: { items: { name: string; href: string | null; img: string | null }[]; direction: "up" | "down" }) {
  const doubled = [...items, ...items];
  return (
    <div className="sponsor-col h-[360px] overflow-hidden rounded-2xl bg-white/5 border border-white/18 relative">
      <div className={`flex flex-col gap-4 p-2.5 ${direction === "up" ? "anim-up" : "anim-down"}`}>
        {doubled.map((s, i) => (
          <SponsorCard key={`${s.name}-${i}`} s={s} />
        ))}
      </div>
    </div>
  );
}

/* ── Pain Point Card ── */
function PainCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card-dark rounded-2xl p-6 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg text-white">{title}</h3>
      <p className="text-muted text-sm mt-2">{desc}</p>
    </div>
  );
}

/* ── Solution Card ── */
function SolutionCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card-dark rounded-2xl p-6 glow-card">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg text-white">{title}</h3>
      <p className="text-muted text-sm mt-2">{desc}</p>
    </div>
  );
}

/* ── Difference Column ── */
function DiffColumn({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-center">
      <h3 className="font-heading font-extrabold text-xl gold-gradient-text">{title}</h3>
      <p className="text-muted text-sm mt-2">{desc}</p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════ */

const agencies = ["VA", "DHS", "NGA", "GSA", "TSA"];
const modules = ["Smart Document Engine", "Predictive Analytics", "AI Calendar", "Citizen Service Bot"];

export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO ─── */}
      <Hero
        eyebrow="SDVOSB  |  GSA Schedule 70  |  Cleared Workforce"
        title="AI Solutions That Serve the Mission"
        description="This isn't GPT with a government skin. We build custom AI agents — purpose-trained, FedRAMP hardened, with failback systems built for when disaster strikes at 2 AM. Measurable outcomes from day one."
      >
        <ButtonPrimary href="/mission-lab">Experience AI Now →</ButtonPrimary>
        <ButtonGhost href="/#contact">Schedule a Mission Briefing</ButtonGhost>
      </Hero>

      {/* Trust bar */}
      <div className="bg-[#050C1E] border-b border-cyan/6 py-5">
        <div className="max-w-[1140px] mx-auto px-5 flex flex-wrap justify-center gap-6">
          {agencies.map((a) => (
            <span key={a} className="trust-badge px-5 py-2 rounded-lg text-xs font-bold tracking-[.2em] uppercase text-cyan/70">
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* ─── 2. THE PROBLEM ─── */}
      <Section>
        <div className="text-center max-w-[800px] mx-auto">
          <p className="text-[clamp(20px,2.8vw,28px)] font-heading font-bold text-white/90 leading-snug">
            &ldquo;Most &lsquo;AI&rsquo; being sold to government is repackaged automation with a chatbot on top.&rdquo;
          </p>
        </div>
        <div className="grid gap-5 mt-10 grid-cols-1 md:grid-cols-3">
          <PainCard icon="⏳" title="2–3 Year Timelines" desc="By the time it deploys, the mission has changed." />
          <PainCard icon="🔒" title="Black Box Solutions" desc="Can't explain it to Congress? Can't deploy it." />
          <PainCard icon="⛓️" title="Vendor Lock-In" desc="Your data, their platform, their rules." />
        </div>
        <p className="text-center mt-10 text-lg font-heading font-bold cyan-gradient-text">
          Encore was built to fix this.
        </p>
      </Section>

      {/* ─── 3. WHAT WE BUILD ─── */}
      <Section id="solutions">
        <div className="text-center">
          <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60">What We Build</div>
          <h2 className="font-heading font-extrabold leading-[1.12] text-[clamp(26px,3.2vw,40px)] mt-2">
            AI That Ships Fast. AI You Can Trust.
          </h2>
        </div>
        <div className="grid gap-5 mt-10 grid-cols-1 md:grid-cols-2">
          <SolutionCard icon="📄" title="Intelligent Document Processing" desc="Automate intake, classification, and extraction. Days of work in minutes." />
          <SolutionCard icon="📊" title="Predictive Analytics & Decision Support" desc="See what's coming. Act before it arrives." />
          <SolutionCard icon="🧠" title="Custom AI Programs" desc="Purpose-built AI systems for your specific mission. Not one-size-fits-all." />
          <SolutionCard icon="🎓" title="AI Readiness & Training" desc="We don't just deploy AI — we train your team to own it." />
        </div>
      </Section>

      {/* ─── 4. AI MISSION LAB PREVIEW ─── */}
      <Section>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-center">
          {/* Terminal mockup */}
          <div className="terminal-box rounded-xl p-6 font-mono text-sm">
            <p className="text-cyan/60">$ encore-agent --deploy custom</p>
            <p className="text-green-400 mt-2">&gt; Challenge: Veteran disability claims take 45+ days</p>
            <p className="text-cyan/40 mt-2">→ Deploying: Custom Claims Processing Agent (not GPT)</p>
            <p className="text-cyan/40">→ FedRAMP HIGH compliant · Failback systems active</p>
            <p className="text-amber mt-2">→ Live prototype ready. Try it now.</p>
            <div className="mt-4 h-px bg-cyan/10" />
            <p className="text-muted/40 mt-2 text-xs">AI Mission Lab v1.0 — Encore Custom AI Agents</p>
          </div>

          {/* Copy */}
          <div>
            <h2 className="font-heading font-extrabold leading-[1.12] text-[clamp(26px,3.2vw,40px)]">
              Stop Settling for GPT Wrappers.<br />
              <span className="cyan-gradient-text">Build With Custom AI Agents.</span>
            </h2>
            <p className="text-muted mt-4 max-w-[50ch]">
              Encore&apos;s AI Mission Lab doesn&apos;t hand you a chatbot. It deploys custom AI agents — purpose-built for your mission, trained on your domain, hardened to FedRAMP HIGH standards with disaster-recovery failback systems designed for when it&apos;s 2 AM and everything goes wrong. Describe your challenge. Watch real AI architect a real solution.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {modules.map((m) => (
                <span key={m} className="module-pill px-3 py-1.5 rounded-full text-xs font-semibold text-cyan/80">
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <ButtonPrimary href="/mission-lab">Enter the Lab →</ButtonPrimary>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 5. THE ENCORE DIFFERENCE ─── */}
      <Section>
        <div className="text-center max-w-[700px] mx-auto">
          <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60">The Encore Difference</div>
          <h2 className="font-heading font-extrabold leading-[1.12] text-[clamp(22px,2.8vw,32px)] mt-2">
            While the giants are still scheduling kickoff meetings, we&apos;re already in production.
          </h2>
        </div>
        <div className="grid gap-8 mt-10 grid-cols-1 md:grid-cols-3">
          <DiffColumn title="Speed" desc="90 days to measurable impact. Not 90 days to a kickoff meeting." />
          <DiffColumn title="Access" desc="Senior engineers on every engagement. Not junior staff learning on your dime." />
          <DiffColumn title="Control" desc="Your data. Your models. Open standards. No lock-in. Ever." />
        </div>
      </Section>

      {/* ─── 6. PAST PERFORMANCE / TRUST ─── */}
      <Section>
        <div className="text-center">
          <h2 className="font-heading font-extrabold leading-[1.12] text-[clamp(26px,3.2vw,40px)]">
            Trusted by Mission-Critical Agencies
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {["U.S. Department of Veterans Affairs", "U.S. Department of Homeland Security", "National Geospatial-Intelligence Agency", "Transportation Security Agency", "General Services Administration"].map((a) => (
            <span key={a} className="trust-badge px-5 py-3 rounded-lg text-sm font-medium text-white/80">
              {a}
            </span>
          ))}
        </div>
        <div className="text-center mt-8 space-y-2 text-sm text-muted/60">
          <p><strong className="text-white/70">Contract Vehicles:</strong> GSA Schedule 70 #47QTCA18D00BX · T4 Next Gen · VETS 2</p>
          <p><strong className="text-white/70">Certifications:</strong> SDVOSB · VOSB · SDB · MBE</p>
        </div>
      </Section>

      {/* ─── 7. ABOUT DR. JEFF ─── */}
      <Section>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-[200px_1fr] items-center max-w-[800px] mx-auto">
          {/* Photo placeholder */}
          <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-cyan/10 to-amber/10 border border-cyan/15 flex items-center justify-center mx-auto">
            <span className="text-5xl">⭐</span>
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-[clamp(22px,2.4vw,28px)]">Dr. Jeffrey A. Woodson</h2>
            <p className="text-xs font-bold tracking-[.15em] uppercase text-cyan/60 mt-1">Founder &amp; CEO</p>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              Founded by Dr. Jeffrey A. Woodson — U.S. Army veteran, Pentagon 9/11 survivor, and 20+ year government contractor who refused to quit when others walked away.
            </p>
            <p className="mt-3 font-heading font-bold gold-gradient-text text-lg">
              &ldquo;Performance Determines Success.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* ─── 8. AFFILIATES (sponsor columns kept) ─── */}
      <Section>
        <div className="text-center">
          <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60">Affiliates</div>
          <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)] mt-1">
            Collaborating for Impact
          </h2>
        </div>
        <div className="grid gap-4 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <SponsorColumn items={sponsors.col1} direction="up" />
          <SponsorColumn items={sponsors.col2} direction="down" />
          <SponsorColumn items={sponsors.col3} direction="up" />
        </div>
      </Section>

      {/* ─── 9. CTA / CONTACT ─── */}
      <Section id="contact">
        <div className="text-center max-w-[600px] mx-auto">
          <h2 className="font-heading font-extrabold leading-[1.12] text-[clamp(26px,3.2vw,40px)]">
            Ready to See What Real AI Can Do?
          </h2>
          <div className="flex justify-center gap-3 flex-wrap mt-6">
            <ButtonPrimary href="mailto:jwoodson@encoresvcsllc.com">Schedule a Mission Briefing</ButtonPrimary>
          </div>
          <p className="text-muted text-sm mt-6">
            Encore Services, LLC · 9500 Medical Center Drive, Suite 300, Largo, MD 20774<br />
            (202) 460-8668 ·{" "}
            <a href="mailto:jwoodson@encoresvcsllc.com" className="text-cyan hover:underline">
              jwoodson@encoresvcsllc.com
            </a>
          </p>
          <p className="mt-4 text-sm">
            <a href="/mission-lab" className="text-cyan/60 hover:text-cyan transition-colors">
              Or enter the AI Mission Lab and build something now →
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
