import type { Metadata } from "next";
import Link from "next/link";
import ServiceBlock from "../components/services/ServiceBlock";
import EngagementModels from "../components/services/EngagementModels";
import ServicesFAQ from "../components/services/ServicesFAQ";

export const metadata: Metadata = {
  title: "Services | Synproxi",
  description:
    "Web development, mobile apps, UI/UX design, and custom AI integrations. Explore what Synproxi builds.",
};

const services = [
  {
    number: "01",
    label: "ENGINEERING",
    title: "Web Development",
    description:
      "We specialize in highly optimized, SEO-ready web applications using the Next.js ecosystem. Our focus is on Core Web Vitals, edge-runtime performance, and server-side excellence.",
    checklist: [
      "Server-Side Rendering & ISR Strategy",
      "Scalable Headless Architecture",
      "Performance-First Component Systems",
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma", "Vercel"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYY6hN20sr6-6Fh61qsKAdDjT27x5vElj_00sgU2WN13wA9RHxUYNVhoFoAjOfdtZpiYZYm9Jx7OXs_ZpPI96LmKg_JLhueqLMauLachtsF2p4ToZmWacKrl5opPKJOmNUwdc76GrbQYWV4ajbQutgdFgf-W8Gzk0mTRNqzwwL6RtgXVbyJld8Mjq3rdX0fjpBz84dfF0eruVjw0AdsDCwJ7kSt07M_vazxxYJtZRAZyIgLtDlBnTDN5HaQ0MGLJIQfoQ-YRfDzFID",
    imageAlt: "Web Development",
    reverse: false,
    darkBg: false,
  },
  {
    number: "02",
    label: "INTERFACE",
    title: "Mobile App Development",
    description:
      "Native-feel performance across iOS and Android. We build fluid, high-fidelity mobile experiences that leverage device hardware and provide offline-first capabilities.",
    checklist: [
      "Cross-Platform React Native Mastery",
      "Native Module Integration",
      "Real-time Data Synchronization",
    ],
    tags: ["React Native", "Expo", "Swift/Kotlin", "Supabase"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC76ND3wIMMitVqThHKft_q_7hB9YsR9ukvgsG8Wk7Q8oAz_TVWN4l2--gW6KW-f1x_hjfrgRwAWVNnmq29yY3nrnI1eh1rGjxydk-8kUWxzEe-qR4kvGbNVJxRzlriOVhsQ9IWIKfpG-R_dCkENvJgeLAt9-HTWb2TwRsRNhs4lJ_oyus5bH6uIdxDQ16aGdvtiKafwjnkE7pe6kL_kxo03X45vLoAW7G17_jqjylybyk3vXolOMxr8mc7LnwYxmQsYtT_l9yFPSdK",
    imageAlt: "Mobile Apps",
    reverse: true,
    darkBg: true,
  },
  {
    number: "03",
    label: "PRODUCT",
    title: "UI/UX & Product Design",
    description:
      "Design driven by logic. We build design systems that scale, focusing on user psychology, accessibility, and high-conversion aesthetic paradigms.",
    checklist: [
      "Enterprise Design Systems (Figma)",
      "High-Fidelity Interactive Prototyping",
      "Accessibility Audits (WCAG)",
    ],
    tags: ["Figma", "Framer Motion", "Adobe Suite", "Rive"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1lPeuRlfOgUBc__0OfV1eei5IJEyJVB-Ze_fK4XdMby2feIcMGxBykepBMlSEMmI-voEWP-OXfHSGDhtTD6HJ_61s4e3afKKLlU64QKijBYDtl5CmzXxwHy_-Y5BGCTYUV8RCOA8s4cnLvAqiMn5K22VyNUnn8EzM5_uuVQYxq9yG1lYv2kC983YQg4M019wzbE9Gt_7KAF_UiS06isFNnlcC4NSVMUxataHZpAekiNnlSf7yOaUaPqn7a7t9iXFGpn5WELXpqJTx",
    imageAlt: "UI/UX Design",
    reverse: false,
    darkBg: false,
  },
  {
    number: "04",
    label: "INTELLIGENCE",
    title: "Custom Software & AI",
    description:
      "Leveraging LLMs and RAG architecture to automate workflows. We build custom internal tools and AI integrations that provide measurable business leverage.",
    checklist: [
      "LLM Integration & Prompt Engineering",
      "Vector Database Architecture",
      "Custom Middleware & API Design",
    ],
    tags: ["OpenAI", "Pinecone", "LangChain", "Node.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZNKwLdFtNG99cYj4lMvTtaQy74FXKa77xO-WU6ihPb5gdmk6uPj7YzB-pAwSk3xiQWa5XEEv6Z6ClJ_y10clZ3AmJCcHdVPG-3Mwf_W3w4xAZxlxQ8wPWwCXhmIjpmuAYBLRX7cous9S140eg9Btb_vuXlTl2LrFBsX41koo_UJ3mq569RlVm7kpDEXrsQxt7r-IC4y2CsljiJzxhN8MbdkxM5diRJGQ5fFmBlbHqQdQGYUsLClC6EVEXOW6oaHzseHy30pQLmpMZ",
    imageAlt: "AI Integration",
    reverse: true,
    darkBg: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 mb-32 relative">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="flex flex-col items-start gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="pulse-dot" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Capabilities &amp; Expertise
            </span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] max-w-3xl">
            What we <span className="gradient-text">build.</span>
          </h1>
        </div>
        <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed">
          We engineer high-performance digital products for startups and
          enterprises who demand technical excellence and architectural
          integrity.
        </p>
      </section>

      {/* Service Blocks */}
      {services.map((service) => (
        <ServiceBlock key={service.number} {...service} />
      ))}

      {/* Engagement Models */}
      <EngagementModels />

      {/* FAQ */}
      <ServicesFAQ />

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="relative bg-surface-container rounded-2xl p-12 md:p-24 overflow-hidden text-center border border-outline-variant/10 shadow-2xl">
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-2xl mx-auto">
              Ready to architect your{" "}
              <span className="gradient-text">next move?</span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-lg mx-auto">
              Book a free technical discovery call with our leads and let&apos;s
              map out your project requirements.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 gradient-primary text-on-primary font-bold rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all text-lg"
              >
                Book Discovery Call
              </Link>
              <Link
                href="/work"
                className="px-10 py-4 bg-white/5 border border-outline-variant text-on-surface font-bold rounded-lg hover:bg-white/10 transition-all text-lg"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
