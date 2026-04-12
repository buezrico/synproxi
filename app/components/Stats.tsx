"use client";

import CountUp from "react-countup";

const stats = [
  { value: 45, suffix: "+", label: "Projects shipped" },
  { value: 8, suffix: "", label: "Years in business" },
  { value: 12, suffix: "", label: "Countries served" },
  { value: 100, suffix: "%", label: "Happy clients" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl md:text-5xl font-headline font-bold text-primary mb-2">
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <div className="font-mono text-[10px] text-outline uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
