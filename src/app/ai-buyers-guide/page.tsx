import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonGhost from "@/components/ButtonGhost";

const pdfUrl = "https://encoresvcsllc.com/wp-content/uploads/2025/12/Encore_AI_Buyers_Guide_GOV_Edition_EncoreServices_Clean_Tight.pdf";

export default function AIBuyersGuidePage() {
  return (
    <>
      <Hero
        eyebrow="AI Buyer's Guide — GOV Edition"
        title="A plain-English reality check for high-stakes AI."
        description='Most AI pages try to sell you something. This one is here to help you not get sold — because when AI is used in government, the stakes aren&apos;t "cool features." The stakes are people&apos;s lives, rights, benefits, safety, investigations, and public trust.'
        secondaryText="Download the meeting-ready PDF you can print and take into vendor discussions."
        videoSrc="https://encoresvcsllc.com/wp-content/uploads/2025/12/digital-technology-background-2025-12-09-04-56-58-utc.mp4"
      >
        <ButtonPrimary href={pdfUrl} external>Download the PDF</ButtonPrimary>
        <ButtonGhost href="#why">Why We Published This</ButtonGhost>
      </Hero>

      {/* WHY WE PUBLISHED THIS */}
      <Section id="why">
        <div className="max-w-[900px]">
          <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
            Why Encore would publish this (even though it makes our job harder)
          </h2>
          <p className="text-muted text-[15px] leading-[1.85] mt-2">
            Let&apos;s be honest: Encore isn&apos;t going to win every contract — and we don&apos;t want a world where
            the &ldquo;winner&rdquo; is whoever can market the hardest, hide the most, or rely on buyer confusion.
            That&apos;s how under-tested systems get deployed… and how the public pays for it later.
          </p>
          <div className="border-l-[3px] border-cyan/30 pl-4 mt-3.5 text-sm text-muted">
            <strong>Our end game:</strong> raise the standard of AI in government. When every vendor has to show proof,
            explain risk, and build real safeguards, missions win — regardless of who holds the contract.
          </div>
        </div>
      </Section>

      {/* OUR VIEW */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-7 items-start">
          <div className="space-y-3">
            <div className="text-[11px] uppercase tracking-[.16em] text-cyan/60">Our View</div>
            <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
              Competition is healthy. Hype is not.
            </h2>
            <p className="text-muted text-[15px] leading-[1.85]">
              Competition keeps companies sharp. It forces everyone to build better systems next year than they built
              this year. But &ldquo;AI&rdquo; has become a marketing word — and in government, that isn&apos;t just
              annoying. It&apos;s dangerous.
            </p>
            <p className="text-muted text-[15px] leading-[1.85]">
              If a vendor needs your confusion to close a deal, that vendor is a risk. If they can&apos;t explain the
              system simply, they shouldn&apos;t deploy it in missions that carry real consequences.
            </p>
            <p className="text-muted text-[15px] leading-[1.85]">
              Educating buyers upfront shrinks our playing field and holds us to a higher bar, too. We&apos;re fine
              with that. We don&apos;t avoid hard work — we chase it. Tough questions, lessons learned, and
              accountability are how real systems get built.
            </p>
            <div className="h-px bg-gradient-to-r from-white/4 via-white/40 to-white/4 my-8" />
            <p className="text-muted text-[13px] leading-[1.75]">
              We don&apos;t need to be the biggest. We do want to be known as one of the most honest, transparent, and
              hard-working companies in this space — not because we say &ldquo;trust us,&rdquo; but because we&apos;ve
              earned it.
            </p>
            <div className="flex gap-3 flex-wrap mt-3.5">
              <ButtonPrimary href={pdfUrl} external>Download the PDF</ButtonPrimary>
              <ButtonGhost href="#sample">See a sample</ButtonGhost>
            </div>
          </div>
          <Card>
            <div className="text-[11px] uppercase tracking-[.16em] text-cyan/60 mb-1">Why this matters</div>
            <p className="text-muted text-sm leading-[1.7]">
              When AI is treated like truth, errors scale fast and accountability gets blurry. The goal of this guide is
              simple: help teams demand proof, require controls, and avoid buying &ldquo;AI-shaped risk.&rdquo;
            </p>
            <ul className="text-muted text-[13px] leading-[1.7] list-disc pl-4 mt-2.5">
              <li>Separate demos from reality</li>
              <li>Get evidence, not buzzwords</li>
              <li>Require auditability and shutoff controls</li>
              <li>Deploy safely before scaling</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* WHAT YOU GET IN THE PDF */}
      <Section>
        <div className="max-w-[980px] mx-auto">
          <div className="text-[11px] uppercase tracking-[.16em] text-cyan/60 mb-1">Inside the PDF</div>
          <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
            A field guide you can bring into a meeting
          </h2>
          <p className="text-muted max-w-[78ch]">
            This is not a textbook. It&apos;s a meeting-ready guide written for smart, non-technical teams. It helps you
            ask better questions, spot risk quickly, and require proof before you spend.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[
              { bold: 'The 3 types of "AI"', text: "So vendors can't hide behind one vague word." },
              { bold: "Deliverables to require", text: "Data flow, testing results, controls, and security basics." },
              { bold: "Stoplight use-case chart", text: "Green / Yellow / Red guidance for safer decisions." },
              { bold: '"Learning over time" reality check', text: "What must be true before self-updating AI is acceptable." },
              { bold: "Pilot plan that doesn't waste money", text: "Test → shadow mode → limited pilot → scale only with proof." },
              { bold: "Pushback scripts", text: "Simple lines you can use when vendors dodge or oversell." },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-[rgba(10,31,68,0.9)] rounded-[14px] border border-white/18 p-4 shadow-[0_14px_32px_rgba(0,0,0,0.55)] text-sm text-[#dde6ff]"
              >
                <strong className="text-cyan">{v.bold}</strong>
                <br />
                {v.text}
              </div>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap mt-4">
            <ButtonPrimary href={pdfUrl} external>Download the PDF</ButtonPrimary>
            <ButtonGhost href="#contact">Contact Encore</ButtonGhost>
          </div>
        </div>
      </Section>

      {/* SAMPLE QUESTIONS */}
      <Section id="sample">
        <div className="max-w-[980px] mx-auto">
          <div className="text-[11px] uppercase tracking-[.16em] text-cyan/60 mb-1">Two examples (teaser)</div>
          <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
            The PDF includes a full set of questions — here are two samples
          </h2>
          <p className="text-muted max-w-[78ch]">
            We don&apos;t publish the full list here because the PDF is designed to be printed and used in meetings.
            But this is the flavor: plain language that forces clarity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              '"Can you show us the one-page diagram of where our data goes — what you store, who can access it, and how deletion works (including logs)?"',
              '"When the system is wrong, what happens — who catches it, what gets logged, and how do we shut it off?"',
            ].map((q, i) => (
              <div
                key={i}
                className="bg-white/6 border border-white/16 rounded-[14px] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.55)]"
              >
                <span className="inline-block text-[11px] tracking-[.16em] uppercase text-cyan/60 mb-1.5">
                  Sample question
                </span>
                <p className="text-[#eaf0ff] text-sm leading-[1.7]">
                  <strong>{q}</strong>
                </p>
              </div>
            ))}
          </div>
          <div className="border-l-[3px] border-cyan/30 pl-4 mt-4 text-sm text-muted">
            If a vendor can&apos;t answer questions like these clearly, you&apos;re not looking at a product — you&apos;re
            looking at a risk.
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-navy">
        <Card>
          <div className="font-extrabold tracking-[.12em] uppercase text-xs text-cyan/60">Contact</div>
          <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
            Talk to a Team That Welcomes Hard Questions
          </h2>
          <p className="text-muted max-w-[65ch]">
            Encore Services, LLC · 9500 Medical Center Drive, Suite 300, Largo, MD 20774 · 202-460-8668 ·{" "}
            <a href="mailto:jwoodson@encoresvcsllc.com" className="text-cyan underline">jwoodson@encoresvcsllc.com</a>
          </p>
          <p className="text-muted max-w-[65ch] text-sm mt-2">
            Whether you work with us or not, we&apos;re happy to help your team think more clearly about what AI should
            and shouldn&apos;t be doing in your mission.
          </p>
          <div className="flex gap-3 flex-wrap mt-3.5">
            <ButtonPrimary href={pdfUrl} external>Download the PDF</ButtonPrimary>
            <ButtonGhost href="#why">Back to top</ButtonGhost>
          </div>
        </Card>
      </Section>
    </>
  );
}
