import Link from "next/link";

const models = [
  {
    icon: "rocket_launch",
    title: "Fixed Project",
    description:
      "Defined scope, clear timelines, and a fixed price. Ideal for MVPs, redesigns, or specific feature builds.",
    features: [
      "Guaranteed Delivery Date",
      "Structured Milestone Payments",
      "Full Project Documentation",
    ],
    cta: "Select Model",
    popular: false,
  },
  {
    icon: "history",
    title: "Monthly Retainer",
    description:
      "Dedicated monthly capacity for ongoing product evolution, maintenance, and priority feature requests.",
    features: [
      "Priority Backlog Grooming",
      "24hr Critical Support Response",
      "Agile Weekly Iterations",
    ],
    cta: "Start Retainer",
    popular: true,
  },
  {
    icon: "group_add",
    title: "Staff Augmentation",
    description:
      "Embed our senior engineers directly into your team to accelerate internal velocity and fill technical gaps.",
    features: [
      "Direct Integration into Slack/Jira",
      "Senior Engineering Talent",
      "Flexible Month-to-Month Scaling",
    ],
    cta: "Request Talent",
    popular: false,
  },
];

export default function EngagementModels() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <div className="text-center mb-20">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
          How we <span className="gradient-text">partner.</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Scalable engagement models designed to fit your project lifecycle and
          team velocity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {models.map((model) => (
          <div
            key={model.title}
            className={`p-8 rounded-xl flex flex-col h-full relative overflow-hidden ${
              model.popular
                ? "bg-surface-container-high border-2 border-primary/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                : "bg-surface-container border border-outline-variant/10 hover:border-primary/40 transition-colors"
            }`}
          >
            {model.popular && (
              <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-[10px] font-mono text-on-primary font-bold tracking-tighter rounded-bl-lg">
                POPULAR
              </div>
            )}
            <span className="material-symbols-outlined text-3xl text-primary mb-6">
              {model.icon}
            </span>
            <h3 className="font-headline text-2xl font-bold mb-4">
              {model.title}
            </h3>
            <p className="text-on-surface-variant mb-8 flex-grow">
              {model.description}
            </p>
            <ul className="space-y-3 mb-10 text-sm font-mono text-on-surface/80">
              {model.features.map((f) => (
                <li key={f}>- {f}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`w-full py-3 rounded-md font-mono text-xs tracking-widest uppercase text-center block ${
                model.popular
                  ? "gradient-primary text-on-primary font-bold active:scale-95 transition-all"
                  : "border border-outline-variant hover:bg-white/5 transition-all"
              }`}
            >
              {model.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
