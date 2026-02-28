import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "glow";
}

export default function Card({ className = "", children, variant = "default" }: CardProps) {
  const base = "rounded-2xl p-5 card-dark";
  const glow = variant === "glow" ? "glow-card" : "";
  
  return (
    <div className={`${base} ${glow} ${className}`}>
      {children}
    </div>
  );
}
