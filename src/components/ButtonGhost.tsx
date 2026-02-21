import Link from "next/link";
import React from "react";

export default function ButtonGhost({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-extrabold text-sm bg-white/6 border border-white/14 text-[#e7eefc]"
    >
      {children}
    </Link>
  );
}
