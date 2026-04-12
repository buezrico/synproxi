import Link from "next/link";

const partnerLogos = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZK5ux0rh2_uKcKmRChv37-Lrba2GxrRvRK3hjh4QMM8scC5f8IHwg5DjGWpLHzNHYYXdwSSgwAis5RNW605qAg54Sf0RcHhOG4W8VDhgeJB53AFs7LiTqSErpiZuyf5odBBo_QzXeLkOyyQmVqOLr-ZWhriPSCe2XX7wHH4p4OkayM-BRGu6voPcTBumSyjbRptbHyaYkosjcWXg99OZdM6xSfNWFmHwu-lcESLdjOPpM4sMeLHq9ZA36nJHTiIJbEq7Cg4khgruw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA3gGoI40PQ9dl5Rms5DoUkJn5JzEyzi0RtJk8_ZxHOIgBXstIegd-l9-HL4Qh96RzzOOxGpuOkVd45mFrr2zDAz8qS9p8_i7wa9Fp7vx3j7VJRvB3qKrDPIT82zkrrcEXeOjf3xct9DAoPOMURXD88SaCvxTdtXsVeyzoCksMElD5RWRLjtjeBkTLJj-PV-0JiP4N3__jDDZ2_NZ9EAmqC6ivIrqZ389AyEqSaplEwTlsO6D9_BIvEsHncelC7h8Y8ePkXQ7IRkkzS",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDeUkG4JFFRBt-W3WOp8PuMw0nXiZjegJDVPYwV4CHZLk9FY07bv5LWvhyax3LROucQLJ-NSNfUBoumrClB3_o3v3hhF-_JxxP-zCaM7IhXtmQVtgyNk1KC4u2P-OBS72gW1ixS0xfWf4WDFXVqdk0R9_kpmMXG-1txTcCY-H2QcEtEMJu0r11s7ZzrRuw0wsTaWpAXbfBMyHbJmvxp4ewbjHhaa12xeTUDl2TTi39VdN1YMQP0ReVGGGbBWVdQJckhU7fyQr7v07Q1",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBgSnf__g3dIOtqlgWLCLrJwJOsHTm7-suuGObtxHD4dbbuQH0VteO3gxGRD7A1E15nbplBNKYfadhJXu6N0kUssANuyj7HFZF8zOIjlxMn_azq0UkBAUsIAN5RVgOXws27QB9p4wjHnG8fJfaiAbdLE4Osj7byS1vEHTgsbuBYnqwTI3w0mcuJaAapfxgBEAMRovPXve_OGpigLHZQR6O-w6Cz5ib1Lln7Tj5dujLvi0wcODJOzoaL_ORGKk-vDMX9X-C411OQOOxm",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC4uJT1Yi1JL3mdGpwtGC16rxf2BUBxVtcl_1ReMvZEjfilyghW-LvorEwUx5M57wRU9vQcFmUVRNc0PfJWdnpxJQ5MOlkhKwdjF2_NhgFr_5qWo_N8aHajpx-aDGrARs0A_tYPofDrE4aYWcA2K5Lf7Qgv1S91DTCPJ9Iwpw7hJK9DNQYAy6KGk3OeJdz-JmziEMeP0toysLC42UrNyXZNvji3m6Q5hajjQjcNMILM-e-5VVjmEYDkYjCx0fC1eFcrK77K_-p2wlxF",
];

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

      <div className="mt-24 w-full max-w-6xl mx-auto">
        <p className="text-center text-[10px] font-mono text-outline uppercase tracking-[0.3em] mb-8">
          Trusted by founders worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 items-center justify-items-center">
          {partnerLogos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Partner logo ${i + 1}`}
              className="h-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
