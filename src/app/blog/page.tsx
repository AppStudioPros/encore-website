import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Encore Services",
  description: "Veteran-owned technology insights, SDVOSB expertise, and AI innovation from Encore Services LLC.",
};

const posts = [
  {
    slug: "sdvosb-advantage-in-federal-contracting",
    category: "Federal",
    categoryColor: "#FFB000",
    date: "March 26, 2026",
    readTime: "6 min read",
    title: "The SDVOSB Advantage — Why Veteran-Owned Businesses Win Federal Contracts",
    excerpt: "Service-Disabled Veteran-Owned Small Business (SDVOSB) certification opens doors that other set-asides can't. Here's how Encore Services leverages 25 years of experience to compete and win.",
  },
  {
    slug: "ai-transforming-government-services",
    category: "AI",
    categoryColor: "#00D4FF",
    date: "March 18, 2026",
    readTime: "5 min read",
    title: "How AI Is Transforming Government Services — From the Inside Out",
    excerpt: "Government agencies are adopting AI faster than ever. But implementation without strategy is just expensive noise. We break down what's working, what's not, and where the real opportunities are.",
  },
  {
    slug: "building-technology-with-military-precision",
    category: "Leadership",
    categoryColor: "#B22234",
    date: "March 8, 2026",
    readTime: "7 min read",
    title: "Building Technology With Military Precision",
    excerpt: "The discipline, accountability, and mission-focus of military service translates directly into building world-class technology. Here's how Encore's veteran leadership shapes every product we deliver.",
  },
];

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen bg-navy-deep">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-eyebrow text-sm font-semibold tracking-widest uppercase mb-3">Insights & Updates</p>
            <h1 className="text-4xl md:text-5xl font-heading gold-gradient-text mb-4">Blog</h1>
            <p className="text-muted text-lg leading-relaxed">
              Veteran-owned technology insights, federal contracting expertise, and AI innovation.
            </p>
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group p-6 rounded-2xl border border-sky/20 hover:border-amber/30 bg-navy hover:bg-navy/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                    style={{ color: post.categoryColor, borderColor: `${post.categoryColor}40` }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-muted">{post.date}</span>
                  <span className="text-xs text-muted">·</span>
                  <span className="text-xs text-muted">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-amber transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
