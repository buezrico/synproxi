"use client";

import { useState } from "react";

type CaseStudy = {
  id: string;
  number: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  techTags?: string[];
  layout: "large" | "tall" | "square" | "wide" | "medium";
  filter: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "acme-labs",
    number: "01",
    category: "FINTECH",
    tag: "Web Engineering",
    title: "Acme Labs",
    description:
      "Architected a high-frequency trading platform with sub-millisecond latency and real-time risk assessment modules.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIOw9BjoXXJvpVVJMX_P25yASA8HdVfCITIStYUC8qhwgZTfl3EzTlbPXjoNA5_jKwocG8iKQwqstIUeSq5J9hEIcUo9UZHk2yrAa2Hhu1i3tnRfKNBXMDDvAq-lutRfMy2Gtaaz6lkgMzYLXOoUpoWxHT5fwPV6V_j2WYivlJauSSiJdqb0Mxsuv9hXTakkyWZL1XYWb6t8q71y6jXKZ7G4NOxY6IxQxl8RMHZBA8tjDmvqb02FvH09pQaB3OXX7FvDfBGV1n8bFM",
    imageAlt: "Fintech dashboard",
    layout: "large",
    filter: "web",
  },
  {
    id: "northwind",
    number: "02",
    category: "LOGISTICS AI",
    tag: "AI Integration",
    title: "Northwind",
    description:
      "Implementing predictive maintenance and supply chain optimization using proprietary machine learning models.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVLhV6dOT4ZheX388koLq3OKgr2lfduiHcRkYXwRHCQjQcpW1-tvbHFYSoAqc8x_TJdtrv9rn21zp88gOgVKdL05_lcTC5LMZPN7DGviSCg2BGsKm9Oz-MFaaTBOe-kABi2tKzJxzyQm77HAwmo260WsfIHHeN9fk89u2btm0OMIT29Pm0c06oCOpu7saWfyi8meb-Xl2Ur3M2hfSWca0E4wwKWJ5aG8Lpsy28BBgHd4tZo2OgNBQPt9xrDEu-RWaWwwP8JVNVa3Ki",
    imageAlt: "Logistics AI visualization",
    layout: "tall",
    filter: "ai",
  },
  {
    id: "helix-robotics",
    number: "03",
    category: "HARDWARE",
    tag: "Mobile Engineering",
    title: "Helix Robotics",
    description:
      "Low-level firmware control systems for precision manufacturing arms with zero-downtime requirements.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPoME3iPHRn4QQZARKokDoePxwf4vRwfIbnXgB-M6gRdsKqiUFd4v8p6qGhRAfSvxHQ15dZKHFsBJIJU6kD1iAt70LoIi1py7xMP1CJZNqpdfhc2JeVuyzLBU_XggEjDZGjawMCcKwZuhK7Ed9LQm62YqoeCDD1dNyjNBiTOQgJFnZMl8JSVeCaGrr346goG6s9CToPpJcf2psN-JkiYvqaoOLLcXiBv73pFQtYn_ProEOfGH1k3rmvFWsek5Vj7uCaq8SXLgKTK4-",
    imageAlt: "Robot arm control",
    layout: "square",
    filter: "mobile",
  },
  {
    id: "skyward",
    number: "04",
    category: "SAAS",
    tag: "Design & Dev",
    title: "Skyward",
    description:
      "A complete digital transformation of project management workflows for enterprise cloud infrastructure teams.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6L5MKedA-014X4gGknmSy70tohCQEX2TN_aoRlnxs2Z8iSuhKg-8hwrhgp4ZWNZ8uhJqWeCutNWPo7qFdXxT7TFMF2nB9SM9REAllrGRAeaJJ0ebiOaMXEceSeiOUT-QmcTTKT4O2b7SEFYqCvn2oNKa9M0-uz3nHpAsGJLWW_nbV8Se0_oOTe7CS48zhbd2Di2ECOxro7Jj1bM_GLgf5BoGWcGZFU6iVWlPfC31aIywVPqVdIyW5TK0YZi7Pg3nk5CJ_FO7QPhV",
    imageAlt: "SaaS interface",
    layout: "wide",
    filter: "design",
  },
  {
    id: "veridian",
    number: "05",
    category: "E-COMMERCE",
    tag: "Web Engineering",
    title: "Veridian",
    description:
      "Scalable headless commerce engine supporting millions of global transactions with a custom checkout experience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiUzUfDiCF1LJ4H69fT-Bst7nuN5tnHYLMr09Oh78iYlgZVv2n_Z8dg2cB6pBTfKc55kVHUyG2jdt7v0jQGpLy6Ugl47I6LLr3Xw7Zjv5yunEX1q_5tU6SMqufDBkB-IpcplKxSwLRNhqLrm863AlNg6bFc9Ol-2fK3qyhC4Gb5eM_L3mRwlsI56e2Lm4jWPyXcmx6uTFWA13-suuBkPodNmsbIq0amBIsUH4uyjp6PL77z2lWgUst2ApbIsVGhxTvJdKeVcB2urnx",
    imageAlt: "E-commerce store",
    techTags: ["NODE.JS", "REACT", "STRIPE"],
    layout: "medium",
    filter: "web",
  },
  {
    id: "peak-performance",
    number: "06",
    category: "HEALTHTECH",
    tag: "Mobile Engineering",
    title: "Peak Performance",
    description:
      "Health-focused mobile application leveraging biometric data to provide personalized athletic training regimens.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMFCTmtt1TC8T6GjGDsqus08h2s54RVOUaH4EUoyPoKUhX8NTyksigQI7yxr9Y1D48KddfxSfGspydBMkhY40z8J4RpZbUwnAVPzzMzwXi3lUql_i2x0h8_OvVRruMQApn7KfvFtLp4RUOvZYEP-RiTYlPDrGpsR47z1UA_Wy-O6PJDHtfzcB93Lzl8jIECePUC6SQnhKBIX3zwdM9G6IgBnou7XMoTfo9VLiYHwJLSUns-GuZZAt9uEcEzWLafWQozCPpiyCfqmJD",
    imageAlt: "Healthtech mobile app",
    layout: "medium",
    filter: "mobile",
  },
];

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "AI", value: "ai" },
  { label: "Design", value: "design" },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const layoutClasses: Record<string, { grid: string; aspect: string }> = {
    large: { grid: "md:col-span-8", aspect: "aspect-[16/9]" },
    tall: { grid: "md:col-span-4", aspect: "aspect-[4/5]" },
    square: { grid: "md:col-span-4", aspect: "aspect-square" },
    wide: { grid: "md:col-span-8", aspect: "aspect-[21/9]" },
    medium: { grid: "md:col-span-6", aspect: "aspect-[4/3]" },
  };

  const { grid, aspect } = layoutClasses[study.layout];
  const isLargeCard = study.layout === "large" || study.layout === "wide";

  return (
    <article
      className={`${grid} group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/10 transition-all duration-500 hover:border-primary/30`}
    >
      <div className={`${aspect} w-full overflow-hidden`}>
        <img
          src={study.image}
          alt={study.imageAlt}
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
        />
      </div>
      <div className={isLargeCard ? "p-8" : "p-6"}>
        <div
          className={
            isLargeCard
              ? "flex justify-between items-start mb-4"
              : "mb-3"
          }
        >
          <div>
            <span className="font-mono text-[10px] text-tertiary mb-2 block tracking-widest uppercase">
              {study.category} // {study.number}
            </span>
            <h3
              className={`font-headline font-bold text-on-surface ${isLargeCard ? "text-3xl" : "text-2xl"}`}
            >
              {study.title}
            </h3>
          </div>
          {isLargeCard && (
            <span className="px-3 py-1 rounded-full text-[10px] font-mono border border-outline-variant/30 text-on-surface-variant uppercase">
              {study.tag}
            </span>
          )}
        </div>
        <p
          className={`text-on-surface-variant leading-relaxed ${isLargeCard ? "max-w-xl text-lg font-light mb-6" : "text-sm mb-6"}`}
        >
          {study.description}
        </p>

        {study.techTags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {study.techTags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md text-[9px] font-mono bg-surface-container border border-outline-variant/20 text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {isLargeCard && study.layout === "large" && (
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-outline-variant/20" />
            <span className="flex items-center gap-2 text-primary font-mono text-xs">
              VIEW CASE STUDY
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </span>
          </div>
        )}

        {!isLargeCard && !study.techTags && (
          <span className="px-3 py-1 rounded-full text-[10px] font-mono border border-outline-variant/30 text-on-surface-variant uppercase">
            {study.tag}
          </span>
        )}
      </div>
    </article>
  );
}

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((s) => s.filter === activeFilter);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-12 border-t border-outline-variant/15 pt-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === f.value
                ? "bg-primary text-on-primary active:scale-95"
                : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant border border-outline-variant/10"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Bento grid */}
      <section className="max-w-7xl mx-auto px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filtered.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </section>
    </>
  );
}
