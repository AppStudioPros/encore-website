"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/mission-lab", label: "AI Mission Lab" },
  { href: "/programs", label: "Programs" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 nav-blur border-b border-cyan/8">
      <div className="max-w-[1140px] mx-auto flex items-center gap-5 px-5 py-3.5">
        {/* Brand */}
        <Link href="/" className="inline-flex items-center gap-3 font-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://encoresvcsllc.com/wp-content/uploads/2025/11/tempencorelogo.png"
            alt="Encore Services logo"
            className="h-20 w-auto"
          />
          <span className="text-xs font-bold tracking-[.12em] uppercase text-cyan opacity-95 whitespace-nowrap hidden sm:inline">
            Performance Determines Success
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="ml-auto lg:hidden text-white p-2 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <nav className="ml-auto hidden lg:flex gap-3 items-center flex-wrap">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#c8d4f0] hover:text-cyan transition-colors text-sm"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-amber to-gold-light text-[#1a1200] shadow-[0_8px_20px_rgba(255,176,0,0.28)]"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden flex flex-col gap-2 bg-navy-deep px-5 py-3 border-b border-cyan/10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#c8d4f0] hover:text-cyan py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-amber to-gold-light text-[#1a1200] w-fit"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
