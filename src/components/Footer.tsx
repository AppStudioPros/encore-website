import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/programs", label: "Programs" },
  { href: "/mission-lab", label: "AI Mission Lab" },
];

const legalLinks = [
  { href: "/ai-guide", label: "AI Guide" },
  { href: "/vault-access", label: "Vault Access" },
];

export default function Footer() {
  return (
    <footer className="py-16 border-t border-cyan/8 bg-[#030816]">
      <div className="max-w-[1140px] mx-auto px-5 grid gap-10 grid-cols-1 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://encoresvcsllc.com/wp-content/uploads/2025/11/tempencorelogo.png"
            alt="Encore Services logo"
            className="h-12"
            loading="lazy"
          />
          <p className="text-muted mt-3 text-sm max-w-[40ch]">
            AI solutions that serve the mission. Service-Disabled Veteran-Owned Small Business delivering measurable outcomes since 2010.
          </p>
          <p className="text-muted/50 mt-4 text-xs">
            9500 Medical Center Drive, Suite 300<br />
            Largo, MD 20774
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold tracking-[.15em] uppercase text-cyan/70 mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted text-sm hover:text-cyan transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xs font-bold tracking-[.15em] uppercase text-cyan/70 mb-3">Resources</h4>
          <ul className="space-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted text-sm hover:text-cyan transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="mailto:jwoodson@encoresvcsllc.com" className="text-muted text-sm hover:text-cyan transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="mt-4 text-xs text-muted/40">
            GSA Schedule 70 #47QTCA18D00BX
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1140px] mx-auto px-5 mt-10 pt-6 border-t border-white/5">
        <div className="flex flex-wrap justify-between items-center gap-3 text-xs text-muted/40">
          <span>© 2025 Encore Services, LLC. All rights reserved.</span>
          <span>SDVOSB · VOSB · SDB · MBE</span>
        </div>
      </div>
    </footer>
  );
}
