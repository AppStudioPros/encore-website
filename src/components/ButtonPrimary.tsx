import Link from "next/link";
import React from "react";

export default function ButtonPrimary({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls =
    "inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-amber to-gold-light text-[#1a1200] shadow-[0_8px_20px_rgba(255,176,0,0.28)]";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
