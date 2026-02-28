import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonGhost from "@/components/ButtonGhost";

export default function CapabilitiesPage() {
  return (
    <>
      <Hero
        eyebrow="Capabilities & Core Services"
        title="Capabilities that Move Missions Forward."
        description="Encore Services, LLC is a verified Service-Disabled Veteran-Owned Small Business (SDVOSB) providing IT services, program, administrative, management, and human capital support to government agencies and commercial clients nationwide. We combine responsive delivery with proactive problem-solving to keep your mission on track."
        secondaryText="Our competitive advantage is simple: we bring the tools, experience, and disciplined processes needed to get the job done right the first time—driving cost savings today and building repeatable practices that support your organization for years to come."
        videoSrc="https://encoresvcsllc.com/wp-content/uploads/2025/11/celebratory-fireworks-of-independence-day-united-s-2025-08-28-17-47-02-utc.mp4"
      >
        <ButtonPrimary href="#contact">Discuss a Requirement</ButtonPrimary>
        <ButtonGhost href="/ledgerlocc">Explore LedgerLocc</ButtonGhost>
      </Hero>

      {/* CAPABILITIES STATEMENT */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
          <div className="space-y-3">
            <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
              Capabilities Statement
            </h2>
            <p className="text-muted text-[15px] leading-[1.7]">
              <strong>Encore Services, LLC</strong> is a <strong>Service-Disabled Veteran Owned Small Business (SDVOSB)</strong>{" "}
              headquartered in <strong>Largo, Maryland</strong>, specializing in administrative, management, technical,
              scientific, and information technology support services for government and commercial clients nationwide.
            </p>
            <p className="text-muted text-[15px] leading-[1.7]">
              Our growth is fueled by a commitment to <strong>innovation, operational excellence, and technology-driven
              mission support</strong>. We blend proven government contracting experience with modern engineering practices
              to deliver secure, scalable, and cost-effective solutions.
            </p>
            <p className="text-muted text-[15px] leading-[1.7]">
              We equip our professionals with advanced tools, real-time data systems, and modern engineering methodologies,
              enabling consistent delivery of superior quality, efficiency, and customer-focused outcomes. Encore&apos;s teams
              apply disciplined project and program management, responsive communication, and a culture of accountability
              from kickoff through contract closeout.
            </p>
            <p className="text-muted text-[15px] leading-[1.7]">
              As a capabilities partner, Encore brings <strong>right-the-first-time performance</strong>—creating efficiencies,
              reducing risk, and establishing repeatable practices that strengthen your mission over the long term.
            </p>
          </div>

          {/* Corporate Profile sidebar */}
          <Card>
            <div className="font-extrabold tracking-[.12em] uppercase text-xs text-cyan/60">Corporate Profile</div>
            <p className="text-muted text-[15px] mt-2.5">
              Key identifiers and certifications that make Encore a trusted partner across Federal, State, and commercial engagements.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-3.5">
              {[
                { label: "EIN", value: "22-3981262" },
                { label: "DUNS", value: "964349851" },
                { label: "CAGE Code", value: "6FLB4" },
                { label: "GSA Schedule 70", value: "47QTCA18D00BX" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[11px] uppercase tracking-[.12em] text-cyan/60 mb-0.5">{s.label}</div>
                  <div className="font-bold text-[15px]">{s.value}</div>
                </div>
              ))}
            </div>
            <h3 className="text-sm uppercase tracking-[.16em] text-cyan/60 mt-4 mb-1">Certifications</h3>
            <ul className="text-muted list-disc pl-4 text-[13px]">
              <li>Service-Disabled Veteran-Owned Small Business (SDVOSB)</li>
              <li>Veteran Owned Small Business (VOSB)</li>
              <li>Small Disadvantaged Business (SDB)</li>
              <li>Minority Business Enterprise (MBE)</li>
              <li>CBSB &amp; SBR</li>
            </ul>
            <h3 className="text-sm uppercase tracking-[.16em] text-cyan/60 mt-4 mb-1">Set-Asides &amp; Vehicles</h3>
            <ul className="text-muted list-disc pl-4 text-[13px]">
              <li>T4 Next Gen (subcontractor)</li>
              <li>GSA Schedule 70</li>
              <li>VETS 2 (subcontractor)</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* TECHNOLOGY-DRIVEN COMMITMENT */}
      <Section narrow>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          Technology-Driven Commitment
        </h2>
        <p className="text-muted max-w-[70ch] mt-1.5">
          Encore is committed to integrating advanced capabilities into the services we deliver—including AI-powered
          automation, data intelligence, cloud systems, blockchain security, and full-stack application engineering.
          Our technical approach emphasizes:
        </p>
        <Card className="mt-4">
          <ul className="text-muted text-sm list-disc pl-5">
            <li>Scalable architectures that adapt to complex missions</li>
            <li>AI and machine learning that streamline operations and elevate decision-making</li>
            <li>Cybersecurity hardening to secure sensitive environments</li>
            <li>Cross-platform engineering for mobile, web, and enterprise systems</li>
            <li>Modern integrations across cloud, API, embedded, and decentralized platforms</li>
          </ul>
          <p className="text-muted text-sm mt-2.5">
            These capabilities enable Encore to serve as a <strong>force multiplier</strong>—empowering clients through
            reliable service paired with cutting-edge technology.
          </p>
        </Card>
      </Section>

      {/* NAICS */}
      <Section narrow>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          NAICS Codes &amp; Registrations
        </h2>
        <p className="text-muted max-w-[70ch] mt-1.5">
          Encore is registered under a broad set of NAICS codes that reflect our ability to support IT, management,
          professional services, and human capital requirements across the enterprise.
        </p>
        <Card className="mt-4">
          <div className="text-sm uppercase tracking-[.16em] text-cyan/60 mb-2">Primary NAICS Codes</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-muted text-[13px]">
            {["518210","541611","541519","519190","541513","541511","541512","561499","541990","541612","561110","541690","541618","541219"].map((c) => (
              <div key={c}>{c}</div>
            ))}
          </div>
          <p className="text-muted text-[13px] mt-3.5">
            This portfolio of NAICS codes enables Encore to support a wide range of technology, advisory, and
            administrative requirements through both competitive and set-aside procurement strategies.
          </p>
        </Card>
      </Section>

      {/* CORE COMPETENCIES */}
      <Section>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">Core Competencies</h2>
        <p className="text-muted max-w-[720px] mt-1.5">
          Encore delivers integrated professional, technical, and digital services that align people, process, and
          technology to measurable mission outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <Card>
            <div className="font-bold text-[15px] mb-1.5">Professional &amp; Administrative Services</div>
            <ul className="text-muted text-sm list-disc pl-4">
              <li>Program &amp; Project Management</li>
              <li>Administrative &amp; Clerical Support</li>
              <li>Operational Support Services</li>
              <li>Personnel &amp; Workforce Solutions</li>
              <li>Training &amp; Development Support</li>
            </ul>
          </Card>
          <Card>
            <div className="font-bold text-[15px] mb-1.5">Technical &amp; Scientific Services</div>
            <ul className="text-muted text-sm list-disc pl-4">
              <li>Engineering &amp; Technical Support</li>
              <li>Research &amp; Analytical Services</li>
              <li>Quality Assurance &amp; Compliance</li>
              <li>Logistics &amp; Supply Chain Support</li>
            </ul>
          </Card>
          <Card>
            <div className="font-bold text-[15px] mb-1.5">Information Technology &amp; Digital Services</div>
            <ul className="text-muted text-sm list-disc pl-4">
              <li>Full-stack software &amp; application development</li>
              <li>AI/ML integration &amp; intelligent automation</li>
              <li>Cloud architecture &amp; systems modernization</li>
              <li>Cybersecurity hardening &amp; risk mitigation</li>
              <li>Database engineering, API development, and system integration</li>
              <li>Mobile, web, and cross-platform system engineering</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* DIFFERENTIATORS */}
      <Section>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">Differentiators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {[
            { title: "Advanced Technology Integration", text: "Encore blends traditional government contracting expertise with cutting-edge engineering capabilities. Our team develops secure, scalable digital systems—leveraging AI, intelligent automation, and advanced application architectures to accelerate mission outcomes." },
            { title: "SDVOSB Reliability with Enterprise-Level Expertise", text: "We bring the agility and responsiveness of a small business, strengthened by the technical depth, scalability, and engineering rigor often found only in major contractors." },
            { title: "Mission-Focused Performance", text: "Encore supports Federal and State missions with disciplined execution, transparent communication, and a culture of accountability that drives excellence from kickoff to project closeout." },
            { title: "Modern Engineering Culture", text: "Our teams operate with full-stack fluency—spanning server infrastructure, cloud platforms, cybersecurity, decentralized systems, and high-performance application logic—ensuring clients receive technology-enabled solutions built to last." },
            { title: "Proven Multi-Industry Experience", text: "Encore's engineering capabilities extend across government, finance, healthcare, logistics, real estate, publishing, cybersecurity, and enterprise operations—positioning us to serve complex, diverse missions." },
          ].map((d) => (
            <Card key={d.title}>
              <div className="font-bold text-[15px] mb-1.5">{d.title}</div>
              <p className="text-muted text-sm">{d.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PAST PERFORMANCE */}
      <Section>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          Past Performance Highlights
        </h2>
        <p className="text-muted max-w-[720px] mt-1.5">
          Encore has supported mission-critical programs across the Federal government and commercial sectors, building
          long-term relationships based on trust, performance, and measurable results.
        </p>
        <Card className="mt-5">
          <ul className="text-muted text-sm list-disc pl-5">
            <li>Delivered secure, cloud-enabled enterprise platforms supporting multi-state operations</li>
            <li>Engineered AI-assisted workflows improving efficiency, accuracy, and decision-making</li>
            <li>Developed cross-platform applications for high-security and data-sensitive environments</li>
            <li>Provided long-term administrative, technical, and managerial support across Federal and State agencies</li>
            <li>Designed and implemented cybersecurity and infrastructure systems supporting 24/7 critical operations</li>
          </ul>
          <p className="text-muted text-[13px] mt-2.5">
            Representative customers include the U.S. Department of Veterans Affairs, the Department of Homeland Security,
            the National Geospatial-Intelligence Agency, and the General Services Administration.
          </p>
        </Card>
      </Section>

      {/* PRIMARY CONTACT */}
      <Section>
        <Card className="max-w-[880px] mx-auto">
          <div className="text-sm uppercase tracking-[.16em] text-cyan/60 mb-1">Primary Point of Contact</div>
          <div className="text-sm uppercase tracking-[.12em] text-cyan mb-1">President &amp; Chief Executive Officer</div>
          <div className="text-lg font-extrabold mb-1.5">Jeffrey A. Woodson</div>
          <div className="text-[13px] text-muted mb-2.5">
            Encore Services, LLC<br />
            9500 Medical Center Drive, Suite 300<br />
            Largo, MD 20774
          </div>
          <p className="text-muted text-sm">
            Business Telephone: 202-460-8668<br />
            E-mail: <a href="mailto:jwoodson@encoresvcsllc.com" className="text-cyan underline">jwoodson@encoresvcsllc.com</a>
          </p>
          <p className="text-muted text-[13px] mt-2 italic">
            Encore stands ready to support your next requirement with responsive teams, disciplined execution,
            and a commitment to delivering results that matter.
          </p>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-navy">
        <Card>
          <div className="font-extrabold tracking-[.12em] uppercase text-xs text-cyan/60">Contact</div>
          <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
            Turn Ideas into Partnerships
          </h2>
          <p className="text-muted max-w-[65ch]">
            Encore Services, LLC · 9500 Medical Center Drive, Suite 300, Largo, MD 20774 · 202-460-8668 ·{" "}
            <a href="mailto:jwoodson@encoresvcsllc.com" className="text-cyan underline">jwoodson@encoresvcsllc.com</a>
          </p>
        </Card>
      </Section>
    </>
  );
}
