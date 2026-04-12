import type { Metadata } from "next";
import Link from "next/link";
import WorkGrid from "../components/work/WorkGrid";

export const metadata: Metadata = {
  title: "Work | Synproxi",
  description:
    "Explore our portfolio of web apps, mobile apps, AI integrations, and design systems built for startups and enterprises.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 mb-20 relative">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Portfolio Index
          </p>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-8 max-w-4xl leading-none">
            Engineering{" "}
            <span className="gradient-text">Next-Gen</span> Digital Ecosystems.
          </h1>

          <WorkGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-8 mt-32 text-center relative">
        <div className="bg-surface-container-low rounded-3xl p-16 overflow-hidden border border-outline-variant/10 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 relative z-10">
            Ready to build your masterpiece?
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Let&apos;s collaborate on your next technical challenge. Our team is
            ready to architect, design, and deploy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline font-bold hover:opacity-90 transition-all"
            >
              Launch a Project
            </Link>
            <Link
              href="/services"
              className="bg-transparent border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-headline font-bold hover:bg-white/5 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
