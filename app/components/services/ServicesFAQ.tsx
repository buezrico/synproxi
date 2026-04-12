const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "For an MVP, we typically look at 8-12 weeks. Large scale enterprise migrations or custom AI integrations can range from 4-6 months depending on the complexity of the data architecture.",
  },
  {
    question: "Do you provide ongoing DevOps support?",
    answer:
      "Yes. We architect all our products on modern cloud providers (AWS, Vercel, GCP) and offer managed DevOps retainers to ensure 99.9% uptime and continuous security patching.",
  },
  {
    question: "Can we bring our own designs?",
    answer:
      "Absolutely. We often work with internal design teams. We'll perform a technical feasibility audit on the Figma files before starting development to ensure all interactions are performant.",
  },
  {
    question: "How do you handle intellectual property?",
    answer:
      "You own 100% of the IP upon project completion and final payment. This includes code, design assets, and any custom-built internal documentation.",
  },
  {
    question: "What is your communication workflow?",
    answer:
      "We use Slack for daily async communication and Jira for task management. We hold bi-weekly sprint demos to show progress and gather feedback in real-time.",
  },
  {
    question: "Do you work with legacy codebases?",
    answer:
      'Yes, we specialize in "strangler pattern" migrations, slowly replacing legacy components with modern React/Next.js infrastructure to minimize business disruption.',
  },
];

export default function ServicesFAQ() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-24">
      <h2 className="font-headline text-3xl font-bold mb-12 text-center tracking-tight">
        Technical{" "}
        <span className="font-mono text-primary font-light">FAQ</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group bg-surface-container-low rounded-lg border border-outline-variant/10 overflow-hidden"
          >
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
