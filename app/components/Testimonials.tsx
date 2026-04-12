const testimonials = [
  {
    quote:
      "Synproxi delivered our MVP in record time without compromising on code quality. They are essentially an extension of our in-house team.",
    name: "Alex Rivera",
    role: "CEO at Zenith",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWrrPKg6gIek3ZZmy8PQ1-GzWnhkV0CD8MyV1E5G4attxTjeCzwYgME8tGG3_DtBD1Tj9W1rILVmr83SBBjs_3bju1S7Twg5VFfx_aSSwS_O-jF_Uhy1CXuZkIP0T0Ab2shIo9SgsDdt3_z1PeTAqiApUCxB3h4j3_tPIPrfOsh-ohd-KUMYhRL5s3slt-aTZBcr9iIdAfFJYvvofMDkN2PNUWcaUg_btbAINOH9DgwZb7bYY0r41fljQ52E9JPwH2wZvf3hCf3cge",
  },
  {
    quote:
      "Their technical depth in AI is unmatched. They didn't just build what we asked for; they improved the architecture of our entire vision.",
    name: "Sarah Chen",
    role: "CTO at Northwind",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKyltY8zO8m6boA3BAqZdy1o_2gxBdc9Wkn9rj7UXOVSFmjxacB92orVJseB-S-pE44PqkdmzWUVXrM0ei4Wn_NlTAFeotAhxMrSlesraoMIeUIOMZbRhsdD8a7bh-V7BI0hR5QNVkS4vYOisEIfUI2MG8qneUFtF98S7cWYAFC9aPfUdmftfq88g_UJ8hR5EAB5FLXwBIzvwGfkHKxzOgDiFqQDlo37pOARyY4CCC1bBW88eMxnzd0GfN8l0eu3whR980AoQuw-pN",
  },
  {
    quote:
      "Finding a partner that understands both design and performance is rare. Synproxi is that partner. Highly recommended.",
    name: "Marcus Thorne",
    role: "Founder at Helix",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtoJNngWS19lRkylDt_hCHg5GQmqQZS0kKdrXDP3iewVFYlFfaqq6q-sLMIqRvZeQk6Dh1HgRvxcjzJyAJn3vw1-J8GzJq7-btE5fE_1Ab2wD_cTHBCnziIhDALkYVOsKG9jGkfd1h6D70_x7Xj0qCPyWp68FUmLUfZMCq7_MfBorB4ljZOqUTsmjrFJDjks-8IkMSqTBc808qrs1awwPCf3QnvXzTxpi--Phz3cxXaIUZTeynGtfxJDsSVEimHZ3iQBwqQRhT3WwX",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-8 bg-surface-container-high rounded-xl border border-outline-variant/10 italic text-on-surface-variant leading-relaxed relative"
          >
            <span className="absolute -top-4 -left-4 text-primary text-6xl opacity-20 select-none">
              &ldquo;
            </span>
            {t.quote}
            <div className="mt-8 not-italic flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-on-surface">{t.name}</div>
                <div className="text-[10px] font-mono text-outline uppercase tracking-wider">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
