import Link from "next/link";

export default function CTABand() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto text-center">
      <div className="bg-gradient-to-br from-primary/10 to-transparent p-16 md:p-24 rounded-3xl border border-primary/20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
        <h2 className="font-headline text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
          Have an idea? Let&apos;s build it.
        </h2>
        <p className="max-w-xl mx-auto text-on-surface-variant text-lg mb-12">
          We&apos;re currently accepting new projects for Q2 2026. Secure your
          spot in our development pipeline.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-on-primary-container px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-primary/20 active:scale-95"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
