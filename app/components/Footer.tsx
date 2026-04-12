import Link from "next/link";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

const connectLinks = [
  { label: "Discord", href: "https://discord.gg/HV3ehxqZ" },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/JmSB2Mgpwrr7NWAzjEpbyq",
  },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter (X)", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 border-t border-outline-variant/15 bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-primary font-headline"
          >
            synproxi
          </Link>
          <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed">
            Engineering high-performance software for the next generation of
            industry leaders.
          </p>
        </div>

        <div>
          <h5 className="text-primary font-bold mb-6 font-headline">Menu</h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            {menuLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-primary hover:translate-x-1 transition-transform inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-primary font-bold mb-6 font-headline">
            Connect
          </h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            {connectLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:translate-x-1 transition-transform inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-primary font-bold mb-6 font-headline">
            Newsletter
          </h5>
          <p className="text-xs text-on-surface-variant mb-4">
            Stay updated with our latest insights.
          </p>
          <div className="flex gap-2 focus-within:ring-1 ring-primary rounded overflow-hidden">
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-surface-container border-none text-xs w-full focus:ring-0 text-on-surface placeholder:text-outline"
            />
            <button className="bg-primary text-surface px-4 py-2 font-bold text-xs whitespace-nowrap">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} Synproxi. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-on-surface-variant">
          <Link href="#" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
