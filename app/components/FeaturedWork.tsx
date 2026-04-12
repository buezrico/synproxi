import Link from "next/link";

const projects = [
  {
    category: "HEALTHTECH / MOBILE APP",
    title: "CarePlus",
    description:
      "A modern telemedicine platform connecting patients with healthcare providers. Real-time video consultations, secure messaging, and an intuitive mobile experience — making quality healthcare accessible from anywhere.",
    images: [
      "/assets/images/projects/careplus-home.PNG",
      "/assets/images/projects/careplus-login.PNG",
    ],
    imageAlt: "CarePlus telemedicine app",
    reverse: false,
    mobile: true,
  },
  {
    category: "HEALTHTECH / WEB PLATFORM",
    title: "MedHub",
    description:
      "An integrated online platform for leading diagnostic centers in Nigeria, connecting patients with comprehensive medical test services powered by advanced technology.",
    images: ["/assets/images/projects/medhub.png"],
    imageAlt: "MedHub medical testing platform",
    reverse: true,
    mobile: false,
  },
  {
    category: "EDTECH / WEB PLATFORM",
    title: "A-Plus",
    description:
      "A comprehensive online examination platform designed for students, examiners, and administrators to streamline the entire assessment process from creation to grading.",
    images: ["/assets/images/projects/aplus.png"],
    imageAlt: "A-Plus online examination platform",
    reverse: false,
    mobile: false,
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
              className={`${project.reverse ? "md:col-span-7 md:order-2 order-1" : "md:col-span-7"} rounded-2xl overflow-hidden ${project.mobile ? "aspect-[4/3]" : "aspect-video"} bg-surface-container-high border border-outline-variant/20`}
            >
              {project.mobile ? (
                <div className="w-full h-full flex items-center justify-center gap-4 p-8">
                  {project.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.imageAlt} ${i + 1}`}
                      className="h-full max-h-full w-auto rounded-xl shadow-2xl shadow-black/40 group-hover:scale-105 transition-transform duration-700 object-contain"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={project.images[0]}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              )}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
