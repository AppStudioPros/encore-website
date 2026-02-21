"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonGhost from "@/components/ButtonGhost";

export default function AIGuidePage() {
  const [email, setEmail] = useState("");
  const isValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());

  return (
    <>
      <Hero
        eyebrow="AI in Government"
        title="The Truth No One Wants to Say Out Loud."
        description='If this page does nothing else, let it help you stop signing contracts for "AI" that are really just smoke, mirrors, and a polished slide deck. In the app store, that&apos;s cute. In government, where these systems touch public safety, national security, and critical infrastructure, it&apos;s deadly serious.'
        secondaryText="You don't need to be an AI engineer to protect your program. You just need to understand what's really being sold to you, and care enough to demand more than buzzwords."
        videoSrc="https://encoresvcsllc.com/wp-content/uploads/2025/12/the-internet-undercurrent-business-corporate-techn-2025-12-10-03-30-24-utc.mp4"
      >
        <ButtonGhost href="#did-you-know">&ldquo;Did You Know?&rdquo; Facts</ButtonGhost>
      </Hero>

      {/* EMAIL ACCESS GATE */}
      <Section className="relative border-t border-b border-white/6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-sm uppercase tracking-[.16em] text-eyebrow mb-1">Access the Guide</div>
          <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
            Access the Gov AI Buyer&apos;s Guide
          </h2>
          <p className="text-muted max-w-[78ch] mt-1.5">
            Enter a valid email address below to open the guide. No codes, no logins — just a quick way to get you to
            the information and help you remember where you saw it.
          </p>
          <Card className="mt-4">
            <div className="text-sm uppercase tracking-[.16em] text-eyebrow mb-1">Get instant access</div>
            <h3 className="font-heading font-extrabold text-lg mt-1.5 mb-2">Enter your email to open the guide</h3>
            <p className="text-muted text-sm mb-2">
              Once a valid email is entered, the button will unlock and take you straight to the AI Buyer&apos;s Guide.
            </p>
            <div className="flex gap-2.5 items-center flex-wrap mt-3">
              <input
                type="email"
                placeholder="name@example.gov"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-[220px] bg-white/6 border border-white/18 text-[#e5edff] rounded-xl px-3.5 py-3 font-extrabold tracking-[.10em] focus:outline-none focus:border-eyebrow focus:ring-2 focus:ring-eyebrow/35"
              />
              <a
                href={isValid ? "/ai-buyers-guide" : undefined}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-extrabold text-sm ${
                  isValid
                    ? "bg-gradient-to-r from-amber to-gold-light text-[#1a1200] shadow-[0_8px_20px_rgba(255,176,0,0.28)] cursor-pointer"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }`}
                onClick={(e) => !isValid && e.preventDefault()}
              >
                Open the AI Buyer&apos;s Guide →
              </a>
            </div>
            <p className={`text-[13px] mt-2.5 ${isValid ? "text-[#daf5e4]" : email.trim() ? "text-[#ffe1e1]" : "text-muted"}`}>
              {isValid
                ? "Email looks good. You can open the guide now."
                : email.trim()
                ? "That doesn't look like a valid email address yet."
                : "Enter a valid email address to enable the button."}
            </p>
          </Card>
        </div>
      </Section>

      {/* EDUCATIONAL SECTIONS */}
      <Section narrow>
        <div className="text-sm uppercase tracking-[.16em] text-eyebrow mb-1">Understanding the Basics</div>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          Why the Word &ldquo;AI&rdquo; Feels So Confusing
        </h2>
        <p className="text-muted max-w-[74ch] mt-1">
          The word &ldquo;AI&rdquo; gets used for almost everything now—from simple scripts to systems that really do
          adapt over time. On top of that, most of us grew up with movies and shows where AI looks and acts like a
          person. It&apos;s no surprise people are unsure what AI really is in day-to-day tools.
        </p>
        <Card className="mt-4">
          <ul className="text-muted text-sm leading-[1.8] list-disc pl-5 space-y-2">
            <li><strong className="text-white">No single definition.</strong> Even experts don&apos;t fully agree on where regular software ends and &ldquo;AI&rdquo; begins. As soon as a technology becomes common, people often stop calling it AI at all.</li>
            <li><strong className="text-white">Shaped by science fiction.</strong> Stories taught us to imagine helpful or dangerous robot characters. In real life, most AI is much narrower—it might rank cases, summarize text, or suggest a next step, not hold a conversation about its feelings.</li>
            <li><strong className="text-white">Different strengths than people.</strong> Humans are great at everyday things like vision, movement, and common sense. Machines often struggle there, but can be very strong at scanning large amounts of data or spotting patterns.</li>
          </ul>
        </Card>
      </Section>

      <Section narrow>
        <div className="text-sm uppercase tracking-[.16em] text-eyebrow mb-1">A Simple Mental Model</div>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          Two Questions to Ask About Any &ldquo;AI&rdquo;
        </h2>
        <p className="text-muted max-w-[74ch] mt-1">
          You don&apos;t need a textbook definition of AI to think about it clearly. Instead, you can ask two simple
          questions whenever someone says a system uses &ldquo;AI&rdquo;.
        </p>
        <Card className="mt-4">
          <div className="text-muted text-sm leading-[1.8] space-y-4">
            <p>
              <strong className="text-white">1. Does it actually take on part of the work?</strong><br />
              Does the system do something useful on its own—like sorting, flagging, or suggesting—without a person
              clicking through every tiny step? If it never acts on its own in any way, it may still be valuable, but
              it&apos;s closer to regular software than what most people mean by AI.
            </p>
            <p>
              <strong className="text-white">2. Can it get better with real use?</strong><br />
              Over time, does the system improve at its job as it sees more real examples from your world, or does it
              behave exactly the same on day one and day one thousand? A system that can adapt to real-world experience
              is very different from one that never changes.
            </p>
          </div>
        </Card>
      </Section>

      <Section narrow>
        <div className="text-sm uppercase tracking-[.16em] text-eyebrow mb-1">Setting Expectations</div>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          What &ldquo;AI&rdquo; Should Mean in Your World
        </h2>
        <p className="text-muted max-w-[74ch] mt-1">
          When a tool is labeled as &ldquo;AI&rdquo; and is going to be part of your mission, a few basic expectations
          are reasonable—no advanced technical knowledge required.
        </p>
        <Card className="mt-4">
          <ul className="text-muted text-sm leading-[1.8] list-disc pl-5 space-y-2">
            <li><strong className="text-white">Clear purpose in plain language.</strong> You can complete the sentence: &ldquo;We use this to ___ so that ___ becomes faster, safer, or more accurate.&rdquo;</li>
            <li><strong className="text-white">Built for real conditions.</strong> The system is meant to handle normal levels of messy, imperfect data and changing priorities—not just clean, ideal examples.</li>
            <li><strong className="text-white">Humans still make the important calls.</strong> It&apos;s obvious what the AI suggests and what still requires human judgment and responsibility.</li>
            <li><strong className="text-white">Traceable when it matters.</strong> If something important happens, you can look back and understand, in simple terms, what role the AI played.</li>
            <li><strong className="text-white">Explained without magic words.</strong> Explanations rely on clear language about strengths and limits, not &ldquo;just trust us, it&apos;s AI.&rdquo;</li>
          </ul>
        </Card>
      </Section>

      <Section narrow>
        <div className="text-sm uppercase tracking-[.16em] text-eyebrow mb-1">For Non-Technical Leaders</div>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          You Don&apos;t Need to Speak &ldquo;AI&rdquo; to Ask Good Questions
        </h2>
        <p className="text-muted max-w-[74ch] mt-1">
          You may never write a line of code, and you don&apos;t need to. Your strength is knowing what success and
          failure look like for your mission, your team, and the people you serve. That perspective is exactly what
          keeps technology grounded in reality.
        </p>
        <p className="text-muted max-w-[74ch] mt-2">
          It is always reasonable to say: &ldquo;Explain this to me in normal language. What does it actually do? Where
          does it help? Where do people stay responsible?&rdquo; If those questions can&apos;t be answered clearly, the
          problem is not your understanding—it&apos;s the way the technology is being presented.
        </p>
      </Section>

      {/* DID YOU KNOW */}
      <Section id="did-you-know" narrow>
        <div className="text-sm uppercase tracking-[.16em] text-eyebrow mb-1">Did You Know?</div>
        <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
          Sticky Facts About AI People Rarely Tell You
        </h2>
        <p className="text-muted max-w-[74ch] mt-1">
          These are the kinds of things that make people stop in a briefing and say &ldquo;wait, seriously?&rdquo;
          They&apos;re also the kinds of facts that help you remember what to look for when the next AI pitch hits your inbox.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            { bold: 'Most "AI" in software today doesn\'t learn at all.', text: "A huge amount of what gets marketed as AI is just rules and scripts. Useful in places, but no more intelligent than a vending machine—no matter how futuristic the interface looks." },
            { bold: 'The hardest part of AI isn\'t the "AI".', text: "The hardest work is the boring stuff: cleaning data, designing workflows, setting guardrails, logging actions, and updating the system as reality changes. Demos almost never show you this." },
            { bold: "A perfect demo tells you almost nothing about 2 a.m. on a bad day.", text: "Anyone can cherry-pick happy-path examples. The real question is how the system behaves when data is messy, policies conflict, or something unexpected happens in the field." },
            { bold: "Even world-class AI engineers can build the wrong thing.", text: 'If the original idea is shallow—"let\'s sprinkle AI on this"—you can get a brilliant model attached to a product that doesn\'t actually help your operators.' },
            { bold: 'An "AI team" without UX, data, infra, and safety experts is a race car with no brakes.', text: "It might be fast on a test track. That doesn't mean you want it deployed on real roads with real families." },
            { bold: "You don't need to understand the math to ask for proof.", text: 'You can always ask vendors: "Show me what it does. Show me how it learns. Show me how you know it\'s safe." If they can\'t answer those in plain language, that\'s your answer.' },
          ].map((d, i) => (
            <div
              key={i}
              className="bg-[rgba(10,31,68,0.9)] rounded-[14px] border border-white/18 p-4 shadow-[0_14px_32px_rgba(0,0,0,0.55)] text-sm text-[#dde6ff]"
            >
              <strong className="text-gold-pale">{d.bold}</strong>
              <br />
              {d.text}
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-navy">
        <Card>
          <div className="font-extrabold tracking-[.12em] uppercase text-xs text-eyebrow">Contact</div>
          <h2 className="font-heading font-extrabold leading-[1.15] text-[clamp(26px,3.2vw,40px)]">
            Talk to a Team That Welcomes Hard Questions
          </h2>
          <p className="text-muted max-w-[65ch]">
            Encore Services, LLC · 9500 Medical Center Drive, Suite 300, Largo, MD 20774 · 202-460-8668 ·{" "}
            <a href="mailto:jwoodson@encoresvcsllc.com" className="text-gold-pale underline">jwoodson@encoresvcsllc.com</a>
          </p>
          <p className="text-muted max-w-[65ch] text-sm mt-2">
            Want access to the Gov AI Buyer&apos;s Guide? Use the form and ask for the access code.
          </p>
        </Card>
      </Section>
    </>
  );
}
