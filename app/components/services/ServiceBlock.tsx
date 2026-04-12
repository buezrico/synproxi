interface ServiceBlockProps {
  number: string;
  label: string;
  title: string;
  description: string;
  checklist: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  reverse: boolean;
  darkBg: boolean;
}

export default function ServiceBlock({
  number,
  label,
  title,
  description,
  checklist,
  tags,
  image,
  imageAlt,
  reverse,
  darkBg,
}: ServiceBlockProps) {
  const content = (
    <div className={reverse ? "order-2" : "order-2 md:order-1"}>
      <span className="font-mono text-sm text-tertiary mb-4 block">
        {number} / {label}
      </span>
      <h2 className="font-headline text-4xl font-bold mb-6 tracking-tight">
        {title}
      </h2>
      <p className="text-on-surface-variant mb-8 text-lg">{description}</p>
      <div className="space-y-4 mb-10">
        {checklist.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-xl">
              check_circle
            </span>
            <span className="text-on-surface">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-secondary-container/30 text-on-secondary-container rounded-full font-mono text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  const imageBlock = (
    <div
      className={`${reverse ? "order-1" : "order-1 md:order-2"} ${
        darkBg
          ? "bg-surface-container-high border border-outline-variant/10"
          : "bg-surface-container-low"
      } rounded-xl overflow-hidden aspect-video relative group`}
    >
      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
      />
    </div>
  );

  const inner = (
    <div
      className={`${darkBg ? "" : "max-w-7xl mx-auto "}px-8 py-24 grid md:grid-cols-2 gap-16 items-center ${!darkBg ? "border-t border-outline-variant/15" : ""}`}
    >
      {reverse ? (
        <>
          {imageBlock}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageBlock}
        </>
      )}
    </div>
  );

  if (darkBg) {
    return (
      <section className="bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">{inner}</div>
      </section>
    );
  }

  return <section className="max-w-7xl mx-auto">{inner}</section>;
}
