const services = [
  {
    icon: "\u{1F4BB}",
    title: "Web Development",
    description:
      "High-performance React & Next.js applications engineered for scale, speed, and exceptional user retention.",
    tags: ["NEXT.JS", "TYPESCRIPT"],
    span: "md:col-span-2",
  },
  {
    icon: "\u{1F4F1}",
    title: "Mobile App Development",
    description:
      "Native-feel cross-platform experiences built with React Native and Flutter for iOS and Android.",
    tags: ["IOS", "ANDROID"],
    span: "md:col-span-2",
  },
  {
    icon: "\u{1F3A8}",
    title: "UI/UX Design",
    description:
      "Conversion-led design systems that blend aesthetic rigor with technical functionality.",
    tags: [],
    span: "md:col-span-1",
    compact: true,
  },
];

export default function Services() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">
          Our Capabilities
        </span>
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          Technical excellence across the stack.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
        {services.map((s) => (
          <div
            key={s.title}
            className={`${s.span} bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all group`}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-4xl mb-6 block">{s.icon}</span>
                <h3
                  className={`${s.compact ? "text-xl" : "text-2xl"} font-bold mb-4 font-headline`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-on-surface-variant ${s.compact ? "text-xs" : "text-sm"} leading-relaxed`}
                >
                  {s.description}
                </p>
              </div>
              {s.tags.length > 0 && (
                <div className="mt-8 flex gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-surface-container-high rounded text-[10px] font-mono text-outline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="md:col-span-3 bg-gradient-to-br from-surface-container-low to-secondary-container/10 p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <span className="text-4xl mb-6 block">&#x2728;</span>
            <h3 className="text-2xl font-bold mb-4 font-headline">
              Custom Software &amp; AI
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Specialized LLM integrations, vector databases, and custom backend
              architectures designed for complex data processing.
            </p>
          </div>
          <div className="flex-1 h-32 w-full bg-surface-container-highest rounded-lg overflow-hidden relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBexfWSZameXqia1L09O5tA44jvGCSRw0STg_KoreI1HUiNW1NBBZZXrREc6vjAWIHUr5E7hO44xBpGFDJ5cOJEWzF7zFKnDNL9GlK5TIESaB0szny2LsDAcHak-l2jxAaUd9EbgcvHYYauTVqiNxLK0M83EjkDdp1jTR4sAOx2ZUADTesNBXcXN-ZW2XvXgD8x_MUftKO9Dgz5jiN5VXRgA1b6pqCied85v6Aafmv-WLC8Yo5qtGowpI5AQliaYSBWsy5IY-FhbFXF"
              alt="Abstract neural network visualization"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
