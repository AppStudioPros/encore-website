import type { Metadata } from "next";
import Link from "next/link";
import { getGAPBlogPosts, slugify, estimateReadTime, extractExcerpt } from "@/lib/gap";

const GAP_CLIENT_ID = "ce2a2795-ed5a-47f1-b019-aac355e93c1f";
export const metadata: Metadata = { title: "Blog — Encore Services", description: "Veteran-owned technology insights from Encore Services." };
export const revalidate = 60;

const FALLBACK_POSTS = [
  { slug: "sdvosb-advantage", category: "Federal", categoryColor: "#FFB000", date: "March 26, 2026", readTime: "6 min read", title: "The SDVOSB Advantage in Federal Contracting", excerpt: "Service-Disabled Veteran-Owned Small Business certification opens doors that other set-asides can't." },
  { slug: "ai-transforming-government", category: "AI", categoryColor: "#00D4FF", date: "March 18, 2026", readTime: "5 min read", title: "How AI Is Transforming Government Services", excerpt: "Government agencies are adopting AI faster than ever. Here's what's working and where the opportunities are." },
];

export default async function BlogPage() {
  const gapPosts = await getGAPBlogPosts(GAP_CLIENT_ID);
  const posts = gapPosts.length > 0
    ? gapPosts.map((p) => ({ slug: slugify(p.blog_title), category: "Blog", categoryColor: "#FFB000", date: new Date(p.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }), readTime: estimateReadTime(p.blog_content), title: p.blog_title, excerpt: extractExcerpt(p.blog_content) }))
    : FALLBACK_POSTS;

  return (
    <main className="min-h-screen bg-navy-deep">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-eyebrow text-sm font-semibold tracking-widest uppercase mb-3">Insights & Updates</p>
          <h1 className="text-4xl md:text-5xl font-heading gold-gradient-text mb-4 pb-2">Blog</h1>
          <p className="text-muted text-lg">Veteran-owned technology insights and federal contracting expertise.</p>
        </div>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group p-6 rounded-2xl border border-sky/20 hover:border-amber/30 bg-navy hover:bg-navy/80 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border" style={{ color: post.categoryColor, borderColor: `${post.categoryColor}40` }}>{post.category}</span>
                <span className="text-xs text-muted">{post.date}</span><span className="text-xs text-muted">·</span><span className="text-xs text-muted">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-amber transition-colors mb-2">{post.title}</h2>
              <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
