import type { Metadata } from "next";
import ContactForm from "../components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Synproxi",
  description:
    "Start a project with Synproxi. Get in touch for web development, mobile apps, UI/UX design, or custom AI integrations.",
};

const faqs = [
  {
    number: "01",
    question: "Do you sign NDAs?",
    answer:
      "Yes. We respect intellectual property. We provide standard mutual NDAs or can review yours prior to initial project discussions.",
  },
  {
    number: "02",
    question: "What is your timeline?",
    answer:
      "Typical MVPs ship in 6-12 weeks. Large scale enterprise migrations or architecture overhauls vary depending on scope depth.",
  },
  {
    number: "03",
    question: "How do we communicate?",
    answer:
      "Async-first via Slack/Discord and Linear. We use weekly syncs for high-bandwidth alignment and technical deep-dives.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-tertiary mb-4 block">
          Initialization
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6">
          Let&apos;s build the{" "}
          <span className="text-primary italic">future</span> together.
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
          Have a technical challenge or a vision that needs architectural
          precision? Our team is ready to deploy.
        </p>
      </header>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Lead Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right: Sidebar */}
        <div className="lg:col-span-5 space-y-12">
          {/* Direct Access */}
          <section className="space-y-6">
            <h3 className="font-headline text-2xl font-bold tracking-tight">
              Direct Access
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">
                    alternate_email
                  </span>
                </div>
                <div>
                  <p className="text-xs text-outline mb-1">EMAIL</p>
                  <a
                    href="mailto:hello@synproxi.studio"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    hello@synproxi.studio
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-xs text-outline mb-1">LOCATION</p>
                  <p className="text-lg font-medium">Nigeria</p>
                </div>
              </div>
            </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs text-outline mb-1">PHONE</p>
                  <a
                    href="tel:+2348109169579"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    +234 810 916 9579
                  </a>
                </div>
              </div>
          </section>

          {/* Community links */}
          <section className="space-y-6">
            <h3 className="font-headline text-2xl font-bold tracking-tight">
              Join the Ecosystem
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <a
                href="https://discord.gg/HV3ehxqZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 rounded-xl border border-outline-variant/10 bg-surface-container-lowest hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5865F2]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#5865F2]">
                      forum
                    </span>
                  </div>
                  <span className="font-headline font-bold">
                    Discord Community
                  </span>
                </div>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                href="https://chat.whatsapp.com/JmSB2Mgpwrr7NWAzjEpbyq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 rounded-xl border border-outline-variant/10 bg-surface-container-lowest hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#25D366]">
                      chat
                    </span>
                  </div>
                  <span className="font-headline font-bold">
                    Direct WhatsApp
                  </span>
                </div>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </section>

          {/* Availability badge */}
          <div className="relative h-32 rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative flex items-center gap-3">
              <span className="pulse-dot" />
              <span className="text-xs uppercase tracking-widest text-on-surface">
                Available for projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="text-4xl font-headline font-bold tracking-tight">
            Technical <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-on-surface-variant text-sm">
            FREQUENTLY ASKED QUESTIONS
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqs.map((faq) => (
            <div
              key={faq.number}
              className="bg-surface-container rounded-xl p-8 border border-outline-variant/5"
            >
              <span className="text-primary font-headline text-3xl font-bold mb-4 block">
                {faq.number}
              </span>
              <h4 className="text-xl font-bold mb-4">{faq.question}</h4>
              <p className="text-on-surface-variant leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
