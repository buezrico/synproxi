import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-12 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-container/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/30 rounded-full border border-outline-variant/15">
          <span className="flex h-2 w-2 rounded-full bg-primary pulse-dot" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-on-secondary-container">
            Availability: Q2 2026 OPEN
          </span>
        </div>

        <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter text-on-surface leading-[0.9] text-glow">
          We build software for the{" "}
          <span className="text-primary italic">next generation</span> of
          startups.
        </h1>

        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl leading-relaxed">
          A senior team of engineers delivering high-performance web apps, mobile
          apps, and AI integrations. No fluff, just results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95 text-center"
          >
            Start a project
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all text-center"
          >
            See our work
          </Link>
        </div>
      </div>

    </section>
  );
}
