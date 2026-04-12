const steps = [
  {
    num: "01",
    title: "Discover",
    description:
      "Deep dive into your product vision, target market, and technical constraints.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Rapid prototyping and UX system architecture tailored for your unique user journey.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "Sprint-based development with weekly demos and continuous CI/CD integration.",
  },
  {
    num: "04",
    title: "Ship",
    description:
      "Production deployment, performance monitoring, and ongoing post-launch support.",
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">
            How we work
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Our 4-Step Process.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-outline-variant/20 -z-0" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-10 space-y-6 text-center md:text-left"
            >
              <div className="w-20 h-20 mx-auto md:mx-0 rounded-full bg-surface border-4 border-outline-variant/10 flex items-center justify-center text-primary font-headline text-3xl font-bold">
                {step.num}
              </div>
              <h4 className="text-xl font-bold font-headline">{step.title}</h4>
              <p className="text-on-surface-variant text-sm px-4 md:px-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
