"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl border-b border-outline-variant/15 shadow-[0_24px_48px_rgba(255,255,255,0.03)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-primary font-headline"
        >
          synproxi
        </Link>

        <div className="hidden md:flex items-center gap-8 font-headline text-base tracking-tight">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/10"
          >
            Start a project
          </Link>
          <button
            className="md:hidden text-on-surface text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant/15 px-8 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-lg font-headline text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-lg font-bold text-sm text-center"
          >
            Start a project
          </Link>
        </div>
      )}
    </nav>
  );
}
