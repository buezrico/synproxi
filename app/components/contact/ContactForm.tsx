"use client";

import { useState } from "react";

const projectTypes = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Custom Software / AI",
  "Not sure yet",
];

const budgetRanges = [
  "$10k - $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k+",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-surface-container-low rounded-xl p-12 border border-outline-variant/10 shadow-2xl text-center space-y-6">
        <span className="material-symbols-outlined text-primary text-6xl">
          check_circle
        </span>
        <h3 className="font-headline text-3xl font-bold">Message sent.</h3>
        <p className="text-on-surface-variant text-lg max-w-md mx-auto">
          We&apos;ll review your project details and get back to you within 24
          business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-primary font-mono text-sm underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 shadow-2xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: wire up form submission (e.g. API route, email service)
          setSubmitted(true);
        }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs text-on-surface-variant/80 ml-1">
              NAME
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface transition-all placeholder:text-outline/40"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-on-surface-variant/80 ml-1">
              EMAIL
            </label>
            <input
              type="email"
              required
              placeholder="john@company.com"
              className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface transition-all placeholder:text-outline/40"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs text-on-surface-variant/80 ml-1">
              COMPANY
            </label>
            <input
              type="text"
              placeholder="Acme Inc."
              className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface transition-all placeholder:text-outline/40"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-on-surface-variant/80 ml-1">
              PROJECT TYPE
            </label>
            <select className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface transition-all">
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-on-surface-variant/80 ml-1">
            BUDGET RANGE
          </label>
          <select className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface transition-all">
            {budgetRanges.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-on-surface-variant/80 ml-1">
            MESSAGE
          </label>
          <textarea
            required
            rows={5}
            placeholder="Tell us about your project requirements..."
            className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface transition-all placeholder:text-outline/40"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary-container py-4 rounded-lg font-headline font-bold text-lg hover:opacity-95 transition-all shadow-[0_8px_32px_rgba(255,255,255,0.08)] flex justify-center items-center gap-3"
          >
            <span>Send Message</span>
            <span className="material-symbols-outlined text-xl">send</span>
          </button>
          <p className="mt-4 text-center text-xs text-outline">
            Response time: Usually within 24 business hours.
          </p>
        </div>
      </form>
    </div>
  );
}
