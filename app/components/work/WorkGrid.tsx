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
  secondImage?: string;
  imageAlt: string;
  badge?: string;
  techTags?: string[];
  layout: "large" | "tall" | "square" | "wide" | "medium";
  filter: string;
  mobile?: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    id: "careplus",
    number: "01",
    category: "HEALTHTECH",
    tag: "Mobile App",
    title: "CarePlus",
    description:
      "A modern telemedicine platform connecting patients with healthcare providers. Real-time video consultations, secure messaging, and an intuitive mobile experience.",
    image: "/assets/images/projects/careplus-home.PNG",
    secondImage: "/assets/images/projects/careplus-login.PNG",
    imageAlt: "CarePlus telemedicine app",
    layout: "large",
    filter: "mobile",
    mobile: true,
  },
  {
    id: "medhub",
    number: "02",
    category: "HEALTHTECH",
    tag: "Web Platform",
    title: "MedHub",
    description:
      "An integrated online platform for leading diagnostic centers in Nigeria offering comprehensive medical test services with advanced technology.",
    image: "/assets/images/projects/medhub.png",
    imageAlt: "MedHub medical testing platform",
    layout: "tall",
    filter: "web",
  },
  {
    id: "aplus",
    number: "03",
    category: "EDTECH",
    tag: "Web Platform",
    title: "A-Plus",
    description:
      "A comprehensive online examination platform designed for students, examiners, and administrators to streamline the assessment process.",
    image: "/assets/images/projects/aplus.png",
    imageAlt: "A-Plus examination platform",
    layout: "square",
    filter: "web",
  },
  {
    id: "optimal-gems",
    number: "04",
    category: "CONSTRUCTION",
    tag: "Web Development",
    title: "Optimal Gems",
    description:
      "Corporate website for Optimal Gems Resources Limited — specialists in piling works, civil engineering, and building construction with over 15 years of expertise across Nigeria.",
    image: "/assets/images/projects/optimalgems.png",
    imageAlt: "Optimal Gems Resources website",
    layout: "wide",
    filter: "web",
  },
  {
    id: "assetplus",
    number: "05",
    category: "FINTECH",
    tag: "Web Development",
    title: "AssetPlus",
    description:
      "Nigeria's leading real estate financing platform providing finance for dream houses and landed properties in Nigeria and in diaspora.",
    image: "/assets/images/projects/assetplus.png",
    imageAlt: "AssetPlus real estate financing",
    layout: "medium",
    filter: "web",
  },
  {
    id: "the-grand-cobbler",
    number: "06",
    category: "ON-DEMAND",
    tag: "Web Development",
    title: "The Grand Cobbler",
    description:
      "Lagos' finest shoes and leather goods repair company. An on-demand service platform providing modern aftercare for premium footwear.",
    image: "/assets/images/projects/thegrandcobbler.png",
    imageAlt: "The Grand Cobbler shoe repair service",
    layout: "medium",
    filter: "design",
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
        {study.mobile ? (
          <div className="w-full h-full flex items-center justify-center gap-4 p-6 bg-surface-container-high">
            <img
              src={study.image}
              alt={study.imageAlt}
              className="h-full max-h-full w-auto rounded-xl shadow-2xl shadow-black/40 group-hover:scale-105 transition-all duration-700 object-contain"
            />
            {study.secondImage && (
              <img
                src={study.secondImage}
                alt={`${study.imageAlt} login`}
                className="h-full max-h-full w-auto rounded-xl shadow-2xl shadow-black/40 group-hover:scale-105 transition-all duration-700 object-contain hidden md:block"
              />
            )}
          </div>
        ) : (
          <img
            src={study.image}
            alt={study.imageAlt}
            className="w-full h-full object-cover object-top grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
          />
        )}
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
