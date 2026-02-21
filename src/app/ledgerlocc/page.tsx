import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonGhost from "@/components/ButtonGhost";

export default function LedgerLoccPage() {
  return (
    <>
      <Hero
        eyebrow="A Glance at LedgerLocc"
        title="From Capture to Courtroom — Every Byte in Custody."
        description="LedgerLocc is a unified custody, collaboration, and intelligence platform that replaces today's patchwork of tools with a single Zero-Trust environment for chat, evidence capture, video, and legal discovery — engineered for national-security-grade integrity."
        secondaryText="Every message, document, frame, and edit is cryptographically signed at creation and chained through its lifecycle. LedgerLocc delivers verifiable integrity from field collection to courtroom presentation, aligned with NIST SP 800-207 Zero Trust and FedRAMP High-ready architecture."
        videoSrc="https://encoresvcsllc.com/wp-content/uploads/2025/11/ledgerloccdataweb.mp4"
      >
        <ButtonPrimary href="#contact">Request Access to LedgerLocc</ButtonPrimary>
        <ButtonGhost href="#about-ledgerlocc">About LedgerLocc</ButtonGhost>
      </Hero>

      {/* PLATFORM SNAPSHOT */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
          <div className="space-y-3">
            <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
              Unified Custody Platform
            </h2>
            <p className="text-[#e4e9ff] text-[15px] leading-[1.7]">
              LedgerLocc consolidates secure communications, evidence capture, collaboration, and AI-assisted analysis
              into a <strong>single Zero-Trust domain</strong>. Instead of juggling Teams, Slack, Signal, Zoom, Webex,
              Dropbox, SharePoint, and Workstorm, agencies operate in one custody-first environment designed for legal
              authenticity and mission agility.
            </p>
            <p className="text-[#e4e9ff] text-[15px] leading-[1.7]">
              The platform&apos;s <strong>Custody Intelligence Core</strong> cryptographically signs events at creation,
              chains them through their lifecycle, and anchors them into an immutable ledger. This delivers court-ready
              provenance, predictable audit, and acquisition-grade observability.
            </p>
            <p className="text-[#e4e9ff] text-[15px] leading-[1.7] font-bold">Core objectives at a glance:</p>
            <ul className="text-muted list-disc pl-4 text-sm space-y-1">
              <li>Unify operations into one Zero-Trust domain for chat, files, video, and discovery.</li>
              <li>Automate chain-of-custody with ledger-verified audit and redaction (80–90% manual effort reduction by workflow).</li>
              <li>Run <strong>local, air-gapped AI</strong> for redaction and anomaly detection with traceable model integrity.</li>
              <li>Modernize legal collaboration with case-centric workspaces and court-ready export bundles.</li>
              <li>Provide acquisition and leadership teams with built-in TCO and operations dashboards.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Zero-Trust Aligned (NIST 800-207)", "FedRAMP High-Ready Architecture", "CJIS Policy-Aligned (Agency CJA)", "E2E Custody Ledger"].map((p) => (
                <span key={p} className="px-2.5 py-1.5 rounded-full text-xs uppercase tracking-[.06em] bg-white/6 border border-white/16 text-[#e7eefc]">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <Card>
            <div className="font-extrabold tracking-[.12em] uppercase text-xs text-eyebrow">LedgerLocc Snapshot</div>
            <p className="text-[#f3f4ff] text-[15px] mt-2.5">
              High-level readiness and deployment profile for LedgerLocc in government and enterprise environments.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-3.5">
              {[
                { label: "Status", value: "Acquisition-Ready" },
                { label: "Zero-Trust", value: "NIST SP 800-207 Aligned" },
                { label: "Architecture", value: "FedRAMP High-Ready" },
                { label: "Compliance", value: "800-53 R5 · CJIS Policy" },
                { label: "Release", value: "LedgerLocc v4.2 · Current" },
                { label: "Deployment", value: "AWS GovCloud · Azure Gov · On-Prem" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[11px] uppercase tracking-[.12em] text-eyebrow mb-0.5">{s.label}</div>
                  <div className="font-bold text-[15px]">{s.value}</div>
                </div>
              ))}
            </div>
            <h3 className="text-sm uppercase tracking-[.16em] text-eyebrow mt-4 mb-1">Access to LedgerLocc.com</h3>
            <p className="text-muted text-[13px]">
              The <strong>ledgerlocc.com</strong> portal is <strong>passcode protected</strong> and reserved for qualified
              government and enterprise programs. To request access, submit a brief description of your mission and
              environment using the contact section below. Our team will coordinate credentials and any required pre-screening.
            </p>
          </Card>
        </div>
      </Section>

      {/* VIDEO WALKTHROUGH */}
      <Section id="about-ledgerlocc">
        <Card className="max-w-[960px] mx-auto">
          <div className="text-sm uppercase tracking-[.16em] text-eyebrow mb-1">From Capture to Courtroom</div>
          <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)] mb-3">
            See LedgerLocc in Action
          </h2>
          <p className="text-muted max-w-[70ch] mb-4">
            A brief walkthrough of how LedgerLocc unifies custody, collaboration, and intelligence — from secure capture
            to court-ready output.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
            <video controls playsInline preload="metadata" className="block w-full h-auto">
              <source src="https://encoresvcsllc.com/wp-content/uploads/2025/11/teaserLL2.mp4" />
            </video>
          </div>
        </Card>
      </Section>

      {/* CUSTODY INTELLIGENCE CORE */}
      <Section narrow>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          Custody Intelligence Core
        </h2>
        <p className="text-muted max-w-[70ch] mt-1.5">
          At the center of LedgerLocc is the Custody Intelligence Core — an AI-assisted, ledger-backed engine that
          enforces provenance, automates redaction, and produces court-ready evidence packages.
        </p>
        <Card className="mt-4">
          <div className="text-sm uppercase tracking-[.16em] text-eyebrow mb-1.5">Mission-Adaptive Intelligence</div>
          <p className="text-muted text-[13px] mt-1.5">
            Runs inside <strong>air-gapped secure enclaves</strong> with signed models, datasets, and configs so every
            inference can be reproduced and defended.
          </p>
          <ul className="text-muted text-[13px] list-disc pl-4 mt-2 space-y-1">
            <li><strong>Court-Ready Dossiers</strong>: PDF/A-3 evidence bundles with hash manifests and per-edit trails.</li>
            <li><strong>Model Integrity Chain</strong>: Model hash, dataset reference, enclave measurement, config, and timestamps all logged to the ledger.</li>
            <li><strong>Case Templating</strong>: Turn complex investigations into reusable, standards-aligned templates for agencies, legal teams, and court handoffs.</li>
          </ul>

          <div className="text-sm uppercase tracking-[.16em] text-eyebrow mt-4 mb-1.5">AIRS — Auto-Redaction</div>
          <ul className="text-muted text-[13px] list-disc pl-4 space-y-1">
            <li>Detects faces (juveniles/agents), plates, badges, and other sensitive elements.</li>
            <li>Generates pixel-perfect derivatives, cryptographically linked to the original via ledger hash.</li>
            <li>Operates on-prem or in GovCloud — no external calls — with human-in-the-loop for admissibility.</li>
          </ul>

          <div className="text-sm uppercase tracking-[.16em] text-eyebrow mt-4 mb-1.5">LedgerAI — Document Intelligence</div>
          <ul className="text-muted text-[13px] list-disc pl-4 space-y-1">
            <li>Drafts incident reports, summaries, and briefs from case context.</li>
            <li>Suggests labels such as FOUO, CUI, and CJIS, with full prompt/model/version logging.</li>
            <li>All outputs require human review prior to finalization, with decisions recorded in the ledger.</li>
          </ul>

          <div className="text-sm uppercase tracking-[.16em] text-eyebrow mt-4 mb-1.5">Austere Continuity Core</div>
          <ul className="text-muted text-[13px] list-disc pl-4 space-y-1">
            <li>Peer-to-peer mesh (Wi-Fi Aware / BLE / NFC) with store-carry-forward routing.</li>
            <li>Edge Nodes preserve ledger continuity offline (up to 7 days) and auto-sync when reconnected.</li>
            <li>Designed for disaster, field, and tactical environments where infrastructure is limited or degraded.</li>
          </ul>
        </Card>
      </Section>

      {/* KEY CAPABILITY PILLARS */}
      <Section>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          Key Capability Pillars
        </h2>
        <p className="text-muted max-w-[720px] mt-1.5">
          LedgerLocc combines custody, collaboration, and intelligence into a set of tightly integrated pillars designed
          for sensitive government and high-risk enterprise missions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {[
            {
              title: "Immutable Ledger & Zero Trust Gateway",
              desc: "Hot/Warm/Cold custody ledger with mTLS-enforced, policy-aware access.",
              items: ["Rust/Go ledger core with SHA-3-256 Merkle chains.", "Envoy + OPA/Rego Zero-Trust Gateway with RBAC/ABAC.", "WORM object lock and legal hold for long-term retention."],
            },
            {
              title: "Secure Video, Voice & Legal Collaboration",
              desc: "LedgerMeet + LedgerDocs/LedgerComm for end-to-end custody of conversations and documents.",
              items: ["WebRTC SFU with DTLS-SRTP and optional SFrame E2EE.", "Attested recording clients; SFU never sees plaintext.", "Commit-signed edits, comments, and discovery threads."],
            },
            {
              title: "Governance, Roles & AI Oversight",
              desc: "Explicit custody roles with AI ethics and model governance built-in.",
              items: ["Custody Admin, Ops Supervisor, Field Agent, Reviewer/Prosecutor roles.", "AI Custodian and AI Ethics Reviewer with co-signed approvals.", "All actions immutably recorded in the ledger."],
            },
            {
              title: "Federation, Integration & Imports",
              desc: "Connects to existing identity, comms, storage, and SIEM without sacrificing custody.",
              items: ["SAML / OIDC / SCIM; SPIFFE/SPIRE identity mesh.", "Imports from Teams, Slack, Meet, and legacy storage into the ledger.", "Feeds Splunk, Sentinel, and Elastic via label-aware telemetry."],
            },
            {
              title: "Ops Center & TCO Dashboards",
              desc: "Real-time operational and financial visibility for leadership and acquisition teams.",
              items: ["Ledger timelines, integrity views, and case telemetry.", "Cloud cost feeds into per-tenant TCO dashboards.", "PII-safe logging and label-aware routing."],
            },
            {
              title: "Security, Compliance & ROI",
              desc: "Built to map directly to modern mandates and deliver measurable savings.",
              items: ["NIST 800-53 R5, FedRAMP High-ready, CJIS policy alignment.", "OMB M-22-09 and EO 14110/14028-aligned controls and logging.", "90–98% reduction in custody verification time (pilot-validated ranges)."],
            },
          ].map((p) => (
            <Card key={p.title}>
              <div className="font-bold text-[15px] mb-2">{p.title}</div>
              <p className="text-muted text-sm mb-2">{p.desc}</p>
              <ul className="text-muted text-sm list-disc pl-4 space-y-1">
                {p.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* WHO LEDGERLOCC SERVES */}
      <Section>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          Who LedgerLocc Serves
        </h2>
        <p className="text-muted max-w-[720px] mt-1.5">
          LedgerLocc is designed for organizations where provenance, integrity, and accountability are non-negotiable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {[
            { title: "Government & Public Sector Programs", text: "Agencies that need verifiable chain-of-custody for operational video, digital records, and sensitive collaboration — from initial capture through executive and oversight review." },
            { title: "Critical Infrastructure & Regulated Industries", text: "Organizations in energy, healthcare, finance, and other regulated sectors that require immutable records, auditable workflows, and defensible data-handling practices." },
            { title: "Courts, Legal & Enterprise Compliance", text: "Courts, oversight bodies, and enterprises that need court-ready dossiers, defensible AI assistance, and a single custody-first collaboration surface for sensitive matters." },
          ].map((s) => (
            <Card key={s.title}>
              <div className="font-bold text-[15px] mb-1.5">{s.title}</div>
              <p className="text-muted text-sm">{s.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ACCESS & PROCUREMENT */}
      <Section>
        <Card className="max-w-[880px] mx-auto">
          <div className="text-sm uppercase tracking-[.16em] text-eyebrow mb-1">Request Access &amp; Procurement Package</div>
          <div className="text-sm uppercase tracking-[.12em] text-gold-light mb-1">LedgerLocc — Custody Intelligence Platform</div>
          <div className="text-lg font-extrabold mb-1.5">Access to LedgerLocc.com (Passcode Protected)</div>
          <div className="text-[13px] text-muted mb-2.5">
            The LedgerLocc portal and technical documentation are reserved for qualified government and enterprise
            programs. Access is controlled and auditable by design.
          </div>
          <p className="text-muted text-sm">
            To request access to <strong>ledgerlocc.com</strong>, or to review the full ATO and procurement package
            (SSP draft, 800-53 R5 matrix, CONMON, IR plan, SBOM, and runbooks), please use the contact section below
            or coordinate directly with your Encore representative.
          </p>
          <p className="text-muted text-[13px] mt-2 italic">
            In your request, include your agency/organization, mission context, required environment (AWS GovCloud,
            Azure Gov, or on-prem), and any timelines or pilots you are considering.
          </p>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-navy">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-[1.25fr_0.9fr]">
          <Card>
            <div className="font-extrabold tracking-[.12em] uppercase text-xs text-eyebrow">Contact</div>
            <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
              Turn Ideas into Partnerships
            </h2>
            <p className="text-muted max-w-[65ch]">
              Encore Services, LLC · 9500 Medical Center Drive, Suite 300, Largo, MD 20774 · 202-460-8668 ·{" "}
              <a href="mailto:jwoodson@encoresvcsllc.com" className="text-gold-pale underline">jwoodson@encoresvcsllc.com</a>
            </p>
          </Card>
          <Card>
            <p className="text-muted text-sm">
              To get in touch, email{" "}
              <a href="mailto:jwoodson@encoresvcsllc.com" className="text-gold-pale underline">jwoodson@encoresvcsllc.com</a>{" "}
              or call (202) 460-8668.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
