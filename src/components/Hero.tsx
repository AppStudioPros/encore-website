import React from "react";

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  secondaryText?: string;
  videoSrc?: string;
  children?: React.ReactNode;
}

export default function Hero({
  eyebrow,
  title,
  description,
  secondaryText,
  children,
}: HeroProps) {
  return (
    <section className="relative min-h-[70vh] grid place-items-center border-b border-white/6 py-16 hero-mesh">
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-5">
        <div>
          <div className="font-extrabold tracking-[.18em] uppercase text-xs text-cyan/80">
            {eyebrow}
          </div>
          <h1 className="gold-gradient-text font-heading font-extrabold leading-[1.08] text-[clamp(36px,5vw,64px)] mt-3">
            {title}
          </h1>
          <p className="text-[#c8d4f0] text-[clamp(17px,2.1vw,20px)] leading-[1.7] mt-4 max-w-[60ch]">
            {description}
          </p>
          {secondaryText && (
            <p className="text-muted mt-2.5 text-[15px] max-w-[70ch]">
              {secondaryText}
            </p>
          )}
          {children && (
            <div className="flex gap-3 flex-wrap mt-6">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
