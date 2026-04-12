import Link from "next/link";

const projects = [
  {
    category: "FINTECH / WEB APP",
    title: "Acme Labs",
    description:
      "A institutional-grade crypto trading platform. We built the entire frontend architecture and integrated real-time WebSocket data feeds with sub-100ms latency.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxSvHlOaKfQkQ5u3YgbUvDK8Jc7jn7yLmtOxd8YzUJahchl_3rH2QsrnN54We95nLpxc8jFPPilnmaaqokVJbCvrkIl8cXdSGHyHKIn9ycsMNU8yfwaMMPZj6waaTJsDHRIIJQAVCixRFWIUFgSZl4dRpfo__TrtOROTzPSu4afkha80zvDrXHR8QoGcHkAI3X7uyWpmA8P4FUCp67mLr_dtXoK4SyG-PCwjAkGDCLHNQKxZhjMiAq_TBa8D4hvJW0ApCEG9OQcc_t",
    imageAlt: "Fintech dashboard UI",
    reverse: false,
  },
  {
    category: "LOGISTICS / AI",
    title: "Northwind",
    description:
      "Supply chain optimization using custom ML models. Reduced operational overhead by 22% through automated route planning and predictive maintenance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4aMBe0TG_m1eygsKojwVcaKSqb1QoZDZ8zMHLv0jzmqJJuJmGVAs7ugS33OSvpkPXrgg64ySpz0Jgi4veyxH76lHJJj2Owia-Ah55B3NDHe0tsNb0ySprO-1BiSjYlmhy4x40pYtGrUQJTnxtzMPsihehwMJtkW6Qdw8uWZPDFklnPjr-EI0xCLq_HzmtvOizSySj593tEyiNIKK97TVNO5N7gkF9JLmYbZtYwjMLmzgkUFUs6lcqsMyuMBF0rZFb0a4003ZURz6K",
    imageAlt: "Logistics network visualization",
    reverse: true,
  },
  {
    category: "HARDWARE / APP",
    title: "Helix Robotics",
    description:
      "Control interface for autonomous industrial drones. High-precision telemetry visualization and low-latency remote command execution across 5G networks.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEG5wgFhrsHeS0cZAIwyYofEFh7WpYyYMGgjcXL5bT74Jn5fV49NjcG5fg932KXLebX6SxNz-oVNq5TLgy1wh8y_lGQQiZavgQU_Q5BpcGf9_Kx37n--1b1BC5ThLHCMp4YuZM6VtDDPVio2eh0AfRa7lsh6CLKpB6bdfmox7fvDtf2Y508-jdPPVl79I0kOfiXN01l09iUQCy4fVK74lGhUb94VgXT6x5hGQAZtIAJ5d101FYMJSmqyAgOZ4dxuhCS4YcUzwmJYQY",
    imageAlt: "Robotics control interface",
    reverse: false,
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">
            Case Studies
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Our Recent Work.
          </h2>
        </div>
        <Link
          href="/work"
          className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
        >
          View Portfolio &rarr;
        </Link>
      </div>

      <div className="space-y-24">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <div
              className={`${project.reverse ? "md:col-span-7 md:order-2 order-1" : "md:col-span-7"} rounded-2xl overflow-hidden aspect-video bg-surface-container-high border border-outline-variant/20`}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div
              className={`${project.reverse ? "md:col-span-5 md:order-1 order-2" : "md:col-span-5"} space-y-6`}
            >
              <div className="text-tertiary font-mono text-xs tracking-widest uppercase">
                {project.category}
              </div>
              <h3 className="text-4xl font-headline font-bold">
                {project.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
              <button className="flex items-center gap-2 text-on-surface font-bold border-b border-primary/40 pb-1 hover:border-primary transition-all">
                Read Case Study &nearr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
