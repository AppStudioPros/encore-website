import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  narrow?: boolean;
  children: React.ReactNode;
}

export default function Section({ id, className = "", narrow, children }: SectionProps) {
  return (
    <section id={id} className={`py-[78px] ${className}`}>
      <div className={`max-w-[1140px] mx-auto px-5 ${narrow ? "max-w-[900px]" : ""}`}>
        {children}
      </div>
    </section>
  );
}
