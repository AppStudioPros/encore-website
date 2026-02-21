import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`rounded-2xl p-5 card-gradient border border-amber shadow-[0_0_0_1px_rgba(255,176,0,0.22),0_18px_40px_rgba(0,0,0,0.55)] ${className}`}
    >
      {children}
    </div>
  );
}
