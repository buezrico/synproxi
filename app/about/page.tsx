import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Synproxi",
  description:
    "Learn about Synproxi — a software development studio building high-performance web apps, mobile apps, and AI integrations.",
};

const values = [
  {
    icon: "precision_manufacturing",
    title: "Engineering Rigor",
    description:
      "Every line of code is deliberate. We build systems that scale, not prototypes that crumble under load.",
  },
  {
    icon: "handshake",
    title: "Radical Transparency",
    description:
      "No black boxes. Weekly demos, shared repos, open communication. You see everything as it happens.",
  },
  {
    icon: "speed",
    title: "Ship Fast, Ship Right",
    description:
      "Speed without sacrifice. We move fast because our processes are tight, not because we cut corners.",
  },
  {
    icon: "diversity_3",
    title: "Partnership Over Transactions",
    description:
      "We invest in your success long-term. The best work happens when we're aligned on the mission, not just the milestone.",
  },
];

const team = [
  { name: "Rico Buez", role: "Founder & Lead Engineer" },
  { name: "Open Position", role: "Senior Frontend Engineer" },
  { name: "Open Position", role: "Mobile Engineer" },
  { name: "Open Position", role: "Product Designer" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 mb-32 relative">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="relative z-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-8 max-w-4xl leading-none">
            Built by engineers, for{" "}
            <span className="gradient-text">builders.</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            Synproxi is a software development studio based in Nigeria. We
            design and build web applications, mobile apps, custom software, and
            AI integrations for businesses ready to scale. Over 5 years and 20+
            projects, we&apos;ve helped startups and growing companies turn ideas
            into production-grade products.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface-container-lowest py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-sm text-tertiary mb-4 block">
              MISSION
            </span>
            <h2 className="font-headline text-4xl font-bold mb-6 tracking-tight">
              We build the software that powers your business.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              From concept to deployment, we handle the full product lifecycle —
              UI/UX design, frontend and backend engineering, mobile development,
              and AI integration. We work closely with each client to understand
              the problem before writing a single line of code.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Whether you need an MVP launched fast or an existing platform
              rebuilt for scale, Synproxi delivers clean, maintainable software
              that works.
            </p>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden bg-surface-container-high border border-outline-variant/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-headline text-8xl font-bold text-primary/10">
                SYN
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Principles
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            What drives us.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-8 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-6 block">
                {v.icon}
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4">
                {v.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-container-lowest py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              The Team
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Small team. Big output.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-surface-container-high border border-outline-variant/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    person
                  </span>
                </div>
                <h4 className="font-headline font-bold text-lg">
                  {member.name}
                </h4>
                <p className="text-on-surface-variant text-sm mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-8 mt-24">
        <div className="relative bg-surface-container rounded-2xl p-12 md:p-24 overflow-hidden text-center border border-outline-variant/10">
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              Want to work with us?
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-lg mx-auto">
              We&apos;re always looking for talented engineers and designers who
              want to build at the highest level.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 gradient-primary text-on-primary font-bold rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all text-lg"
              >
                Start a Project
              </Link>
              <a
                href="mailto:hello@synproxi.studio"
                className="px-10 py-4 bg-white/5 border border-outline-variant text-on-surface font-bold rounded-lg hover:bg-white/10 transition-all text-lg"
              >
                Join the Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
