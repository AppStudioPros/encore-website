"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonGhost from "@/components/ButtonGhost";

/* ── Bio Modal ── */
function BioModal({ id, isOpen, onClose, children }: { id: string; isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-60" id={id}>
      <div className="absolute inset-0 bg-[rgba(2,6,23,0.84)] backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-[880px] p-5 z-10 max-h-[90vh] overflow-y-auto">
        <div className="card-dark rounded-2xl p-8 relative">
          <button
            className="absolute top-4 right-5 text-white/60 text-2xl leading-none hover:text-white transition-colors"
            onClick={onClose}
            aria-label="Close full bio"
          >
            ×
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Value Card ── */
function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="card-dark rounded-2xl p-6 glow-card">
      <h3 className="font-bold text-[15px] mb-2 gold-gradient-text">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{text}</p>
    </div>
  );
}

/* ── Stat Badge ── */
function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center px-6 py-4 card-dark rounded-2xl">
      <div className="font-heading font-extrabold text-3xl cyan-gradient-text">{value}</div>
      <div className="text-muted text-xs uppercase tracking-[.12em] mt-1">{label}</div>
    </div>
  );
}

export default function AboutPage() {
  const [woodsonOpen, setWoodsonOpen] = useState(false);
  const [strangeOpen, setStrangeOpen] = useState(false);

  return (
    <>
      {/* ─── HERO ─── */}
      <Hero
        eyebrow="About Encore"
        title="Service-Disabled Veterans. Mission-Focused Teams."
        description="Encore Services, LLC is a Service-Disabled Veteran-Owned Small Business (SDVOSB) delivering professional, scientific, administrative, technical, and management support services to Federal and State governments—as well as commercial clients—across the United States."
        videoSrc="https://encoresvcsllc.com/wp-content/uploads/2025/11/digital-flag.mp4"
      >
        <ButtonPrimary href="#contact">Connect with Encore</ButtonPrimary>
        <ButtonGhost href="/capabilities">View Capabilities</ButtonGhost>
      </Hero>

      {/* ─── STATS BAR ─── */}
      <div className="bg-[#050C1E] border-b border-cyan/6 py-8">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBadge value="2010" label="Founded" />
            <StatBadge value="20+" label="Years of Service" />
            <StatBadge value="SDVOSB" label="Certified" />
            <StatBadge value="GSA 70" label="Schedule #47QTCA18D00BX" />
          </div>
        </div>
      </div>

      {/* ─── CORPORATE PROFILE ─── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60">Who We Are</div>
            <h2 className="font-heading font-extrabold leading-[1.12] text-[clamp(26px,3.2vw,40px)]">
              Corporate Profile
            </h2>
            <p className="text-muted text-[15px] leading-[1.7]">
              Encore Services, LLC (Encore) is a <strong className="text-white">Service Disabled Veteran Owned Small Business (SDVOSB)</strong>{" "}
              dedicated to delivering multi-disciplinary professional, scientific, administrative, technical, and management
              support services to Federal and State governments, as well as commercial clients in the Washington, D.C.
              metropolitan area and across the United States.
            </p>
            <p className="text-muted text-[15px] leading-[1.7]">
              Headquartered in <strong className="text-white">Largo, Maryland</strong>, Encore combines mission-focused discipline with modern
              engineering and technology expertise. Our success is built on open, transparent communication; a single point
              of contact for all contract activities; and a culture of accountability that extends from day one of
              performance through successful completion.
            </p>
            <p className="text-muted text-[15px] leading-[1.7]">
              As a rapidly growing provider of administrative, management, and information technology support services,
              Encore possesses the agility of a small business with the capabilities of a sophisticated technology firm.
              We design and deliver <strong className="text-white">secure, scalable, and cost-effective solutions</strong> that integrate advanced
              software engineering, AI-driven automation, data intelligence, and robust digital infrastructure.
            </p>
          </div>

          {/* Sidebar card */}
          <div className="card-dark rounded-2xl p-6 glow-card">
            <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60 mb-3">Encore at a Glance</div>
            <p className="text-muted text-[15px] leading-relaxed">
              Veteran-founded. Mission-driven. Focused on delivering measurable results for every client we serve.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {["SDVOSB", "Federal & State", "Commercial Clients", "Management & IT"].map((p) => (
                <span key={p} className="module-pill px-3 py-1.5 rounded-full text-xs font-semibold text-cyan/80">
                  {p}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { label: "Founded", value: "2010" },
                { label: "Headquarters", value: "Largo, MD" },
                { label: "Industry", value: "Business & Professional Services" },
                { label: "Coverage", value: "Federal, State & Commercial" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[11px] uppercase tracking-[.12em] text-cyan/60 mb-0.5">{s.label}</div>
                  <div className="font-bold text-[14px] text-white">{s.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/8">
              <div className="font-extrabold tracking-[.12em] uppercase text-xs text-cyan/60 mb-3">How We Deliver</div>
              <ul className="space-y-1.5 text-muted text-sm">
                <li>→ Single point of contact for all activities</li>
                <li>→ Highly qualified, tailored teams</li>
                <li>→ Documented processes for consistent quality</li>
                <li>→ Continuous improvement on every engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── MISSION & VISION ─── */}
      <Section>
        <div className="text-center max-w-[700px] mx-auto mb-10">
          <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60">Purpose & Direction</div>
          <h2 className="font-heading font-extrabold leading-[1.12] text-[clamp(26px,3.2vw,40px)] mt-2">
            Mission &amp; Vision
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-dark rounded-2xl p-8">
            <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60 mb-3">Our Mission</div>
            <h3 className="font-heading font-extrabold text-2xl cyan-gradient-text mb-4">
              Trusted Partner of Choice
            </h3>
            <p className="text-muted text-[15px] leading-[1.7]">
              Our mission is to be the trusted partner of choice for government and commercial clients by
              delivering innovative, reliable, and efficient support services powered by advanced technology, intelligent
              systems, and modern engineering excellence. We are committed to strengthening our clients&apos; missions with
              secure, scalable solutions that automate operations, enhance performance, and respect the values and sacrifices
              of those who serve.
            </p>
          </div>
          <div className="card-dark rounded-2xl p-8">
            <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60 mb-3">Our Vision</div>
            <h3 className="font-heading font-extrabold text-2xl gold-gradient-text mb-4">
              Contractor of Choice
            </h3>
            <p className="text-muted text-[15px] leading-[1.7]">
              Our vision is to become the contractor of choice in our industry by uniting world-class service with
              cutting-edge technology. Through <strong className="text-white">competency, loyalty, and teamwork</strong>, we aim to deliver
              forward-thinking solutions—including AI-driven platforms, robust digital infrastructure, and next-generation
              security systems—that elevate mission success and set new standards for efficiency and innovation.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── CULTURE & VALUES ─── */}
      <Section>
        <div className="text-center max-w-[700px] mx-auto mb-10">
          <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60">What Drives Us</div>
          <h2 className="font-heading font-extrabold leading-[1.12] text-[clamp(26px,3.2vw,40px)] mt-2">
            Our Culture &amp; Values
          </h2>
          <p className="text-muted mt-3 text-[15px]">
            Encore&apos;s culture reflects unwavering customer focus, integrity, and professionalism—strengthened by a
            modern engineering mindset and the discipline of those who have served.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ValueCard
            title="Customer Focus"
            text="We start with the mission and work backward—aligning people, processes, and technology to meet the precise needs of each client and each program."
          />
          <ValueCard
            title="Integrity & Professionalism"
            text="Our teams are trusted in sensitive environments. We uphold the highest standards of ethics, compliance, and professional conduct in every engagement."
          />
          <ValueCard
            title="Teamwork & Loyalty"
            text="We succeed together. Encore fosters collaborative, cross-functional teams that share knowledge, support one another, and deliver unified results."
          />
          <ValueCard
            title="Operational Excellence"
            text="We rely on proven methods, disciplined execution, clear communication, and continuously refined processes to ensure quality and accountability at every level."
          />
          <ValueCard
            title="Innovation & Engineering"
            text="We apply modern engineering practices—including automation, cloud solutions, secure data architectures, and intelligent tools—to improve mission outcomes."
          />
          <ValueCard
            title="People First"
            text="We hire exceptional professionals, provide comprehensive training, and invest in long-term development—because empowered people deliver exceptional mission results."
          />
        </div>
      </Section>

      {/* ─── LEADERSHIP ─── */}
      <Section>
        <div className="mb-10">
          <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60 mb-2">The Team</div>
          <h2 className="font-heading font-extrabold leading-[1.12] text-[clamp(26px,3.2vw,40px)]">Leadership</h2>
          <p className="text-muted max-w-[720px] mt-2 text-[15px]">
            Encore Services, LLC benefits from experienced leadership across federal contracting, consulting, logistics,
            and personnel management—anchored by a commitment to service and results.
          </p>
        </div>

        {/* Dr. Jeff Woodson */}
        <div className="card-dark rounded-2xl p-8 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.4fr] gap-8 items-start">
            <div>
              <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60 mb-2">
                Founder &amp; Chief Executive Officer
              </div>
              <div className="font-heading font-extrabold text-[clamp(22px,2.4vw,28px)] mb-0.5">Dr. Jeffrey A. Woodson</div>
              <div className="text-muted text-[13px] mb-4">Encore Services, LLC · Bowie, Maryland</div>
              <p className="text-muted text-sm leading-[1.8] mb-3">
                Dr. Jeff Woodson is the Founder and CEO of Encore Services LLC, an IT Services company he established
                in 2010 that now supports Federal Government clients with secure, scalable, and innovative technology
                solutions. With expertise spanning IT infrastructure, program management, help desk operations,
                cybersecurity, software development, and digital transformation, he leads with a focus on operational
                excellence, measurable outcomes, and client success.
              </p>
              <p className="text-muted text-sm leading-[1.8]">
                A U.S. Army veteran and survivor of the September 11, 2001 Pentagon attack, Dr. Woodson brings
                resilience, integrity, and mission-driven leadership to every aspect of his work.
              </p>
              <p className="mt-4 font-heading font-bold gold-gradient-text text-lg">
                &ldquo;Performance Determines Success.&rdquo;
              </p>
              <button
                className="mt-3 text-cyan/70 text-[13px] font-semibold hover:text-cyan transition-colors underline cursor-pointer"
                onClick={() => setWoodsonOpen(true)}
              >
                Read full bio →
              </button>
            </div>
            <div className="flex justify-end max-lg:justify-center">
              <div className="rounded-2xl p-[3px] bg-gradient-to-br from-amber to-gold-light shadow-[0_12px_30px_rgba(0,0,0,0.55)] max-w-[260px] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://encoresvcsllc.com/wp-content/uploads/2025/11/image000000-1-e1763472831950.jpg"
                  alt="Portrait of Dr. Jeff Woodson"
                  className="block w-full h-auto rounded-[13px] object-cover bg-black"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Corey Strange */}
        <div className="card-dark rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.4fr] gap-8 items-start">
            <div>
              <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60 mb-2">
                Fractional Chief Technology Officer
              </div>
              <div className="font-heading font-extrabold text-[clamp(22px,2.4vw,28px)] mb-0.5">Corey Strange</div>
              <div className="text-muted text-[13px] mb-4">Encore Services, LLC · Bowie, Maryland</div>
              <p className="text-muted text-sm leading-[1.8] mb-3">
                Corey Strange is a veteran software engineer, application developer, AI engineer, and full-stack
                systems architect with over two decades of experience building secure, scalable, and high-performance
                technology solutions. As founder of Mobile Computer Specialists, Web Design Pros 365, and App Studio
                Pro, he has delivered 300+ custom websites, 150+ enterprise and security systems, and more than 150
                cross-platform applications across iOS, Android, and web.
              </p>
              <p className="text-muted text-sm leading-[1.8]">
                Corey specializes in advanced system architecture, server and cybersecurity engineering, AI-powered
                application design, and blockchain development—including custom tokens and Web3 integrations for
                major networks like Solana and XRP. A former innovator in the early PC performance industry whose
                water-cooled computer company was later acquired by Alienware, Corey continues to lead cutting-edge
                engineering initiatives and holds multiple utility patents.
              </p>
              <button
                className="mt-4 text-cyan/70 text-[13px] font-semibold hover:text-cyan transition-colors underline cursor-pointer"
                onClick={() => setStrangeOpen(true)}
              >
                Read full bio →
              </button>
            </div>
            <div className="flex justify-end max-lg:justify-center">
              <div className="rounded-2xl p-[3px] bg-gradient-to-br from-amber to-gold-light shadow-[0_12px_30px_rgba(0,0,0,0.55)] max-w-[260px] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://encoresvcsllc.com/wp-content/uploads/2025/11/Corey-Strange2.png"
                  alt="Portrait of Corey Strange"
                  className="block w-full h-auto rounded-[13px] object-cover bg-black"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── CONTACT ─── */}
      <Section id="contact">
        <div className="text-center max-w-[600px] mx-auto">
          <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60 mb-2">Get in Touch</div>
          <h2 className="font-heading font-extrabold leading-[1.12] text-[clamp(26px,3.2vw,40px)]">
            Turn Ideas into Partnerships
          </h2>
          <p className="text-muted mt-4 text-[15px] leading-relaxed">
            Encore Services, LLC · 9500 Medical Center Drive, Suite 300, Largo, MD 20774
          </p>
          <p className="text-muted text-[15px] mt-1">
            (202) 460-8668 ·{" "}
            <a href="mailto:jwoodson@encoresvcsllc.com" className="text-cyan hover:underline">
              jwoodson@encoresvcsllc.com
            </a>
          </p>
          <div className="flex justify-center gap-3 flex-wrap mt-6">
            <ButtonPrimary href="mailto:jwoodson@encoresvcsllc.com">Schedule a Mission Briefing</ButtonPrimary>
            <ButtonGhost href="/mission-lab">Enter the AI Mission Lab →</ButtonGhost>
          </div>
        </div>
      </Section>

      {/* ─── BIO MODALS ─── */}
      <BioModal id="woodson-bio-modal" isOpen={woodsonOpen} onClose={() => setWoodsonOpen(false)}>
        <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60 mb-2">
          Founder &amp; Chief Executive Officer
        </div>
        <div className="font-heading font-extrabold text-[22px] mb-4">Dr. Jeffrey A. Woodson</div>
        <div className="space-y-3 text-muted text-sm leading-[1.8]">
          <p>Dr. Jeff Woodson is the Founder and Chief Executive Officer of Encore Services LLC, an Information Technology Services company he launched in 2010 with a mission to deliver high-quality, forward-thinking IT solutions. Under his leadership, Encore Services has evolved into a trusted and respected partner to the Federal Government, providing comprehensive IT support and strategic consulting services that enable organizations to operate securely, efficiently, and with confidence.</p>
          <p>With a strong emphasis on innovation, operational excellence, and measurable client success, Dr. Woodson has guided Encore Services in designing and deploying secure, scalable, and future-ready technology solutions. His areas of expertise span IT infrastructure management, program and project leadership, help desk operations, cybersecurity, software design and development, and digital transformation initiatives.</p>
          <p>Dr. Woodson is widely recognized for fostering a culture of integrity, collaboration, and continuous improvement within his organization. He is committed to empowering clients with the tools, knowledge, and strategic insight they need to thrive in an increasingly complex digital landscape. His leadership philosophy is rooted in service, accountability, and the belief that strong partnerships create lasting impact.</p>
          <p>A proud veteran of the United States Army, Dr. Woodson is also a survivor of the September 11, 2001 Pentagon attack. These profound experiences helped shape his resilience, perspective, and unwavering commitment to mission-focused excellence. They continue to inform his approach to leadership, service, and the pursuit of meaningful work.</p>
          <p>Dr. Woodson resides in Bowie, Maryland, where he is surrounded by family and friends. Beyond his professional endeavors, he is dedicated to giving back to his community and has passionately supported numerous charitable causes and events throughout his life. His personal and professional legacy is defined by service, perseverance, and a deep commitment to helping others succeed.</p>
        </div>
      </BioModal>

      <BioModal id="strange-bio-modal" isOpen={strangeOpen} onClose={() => setStrangeOpen(false)}>
        <div className="font-extrabold tracking-[.15em] uppercase text-xs text-cyan/60 mb-2">
          Fractional Chief Technology Officer
        </div>
        <div className="font-heading font-extrabold text-[22px] mb-4">Corey Strange</div>
        <div className="space-y-3 text-muted text-sm leading-[1.8]">
          <p>Corey Strange is a seasoned software engineer, application developer, AI engineer, and full-stack systems architect with more than two decades of experience designing complex, scalable, and secure technology solutions. As the founder of Mobile Computer Specialists, Web Design Pros 365, and App Studio Pro, Corey has built multiple top-rated technology firms that have delivered over 300 custom websites, engineered 150+ enterprise and security systems, and served more than 5,000 clients across industries including finance, real estate, publishing, healthcare, logistics, and cybersecurity.</p>
          <p>A deeply versatile engineer, Corey is proficient across front-end, back-end, and infrastructure layers, with expertise spanning server architecture, cloud systems, cybersecurity hardening, database engineering, API design, and advanced custom code development. His broad technical fluency enables him to architect full-stack solutions from the ground up—including the logic, security, integrations, and user experience that tie them together.</p>
          <p>As an AI engineer, Corey integrates large language models, vector databases, and AI-powered automation into modern applications. His work enhances application intelligence, performance, and security while enabling businesses to leverage advanced machine learning workflows in real-time. He specializes in embedding AI into mobile, web, and cross-platform systems to streamline operations, elevate user experience, and unlock new capabilities for clients.</p>
          <p>Corey&apos;s engineering career includes notable early contributions to the high-performance computing industry. As founder of Rocket PC, one of the world&apos;s first water-cooled computer companies, he collaborated with hardware innovators such as CoolTechnia and consulted with engineers from AMD and Samsung on emerging memory technologies, including DDR4 and ECC server RAM instruction architecture. Rocket PC was eventually acquired by Alienware—which was later acquired by Dell.</p>
          <p>Through App Studio Pro, Corey leads a high-level team specializing in cross-platform application development, including iOS, Android, and web-based systems. The company has built more than 150 advanced applications across blockchain, crypto tokens, NFT ecosystems, enterprise security, financial platforms, supply-chain systems, and Web3 environments.</p>
          <p>With over eight years of experience in blockchain architecture, Corey is also a recognized expert in decentralized systems and cryptocurrency development. He has created and minted custom tokens across Solana, XRP, and multiple blockchain networks, and he engineers secure cold-wallet solutions, decentralized application logic, and enterprise-ready Web3 integrations.</p>
          <p>Corey&apos;s portfolio includes major platforms such as LedgerLocc, Contractor Guardians, and FoodShadow—solutions that showcase his ability to merge engineering excellence with functional innovation. His ongoing work includes the development of next-generation intelligent systems focused on automation, security, and seamless global connectivity.</p>
          <p>As an inventor, Corey currently holds three utility patents, with an additional three patents planned for release by 2026. His innovations focus on advanced system logic, AI-driven architectures, and software technologies pushing the boundaries of modern engineering.</p>
          <p>Across all his ventures, Corey is known for his engineering precision, visionary problem-solving, and dedication to building secure, scalable systems that empower businesses to thrive in a constantly evolving digital landscape.</p>
        </div>
      </BioModal>
    </>
  );
}
