import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { NAV_LINKS, CONTACT, COMPANY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white-faint bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <div className="flex h-[40px] items-center">
              <Logo size={40} />
            </div>
            <p className="mt-4 max-w-xs text-sm text-white-dim">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="md:justify-self-center">
            <h2 className="micro-label text-gold">Navigate</h2>
            <ul className="mt-4 space-y-3">
              {[...NAV_LINKS, { label: "Contact Us", href: "/contact" }].map(
                (link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white-dim transition-colors hover:text-white/90"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h2 className="micro-label text-gold">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-white-dim">
              <li>
                <a
                  href={`mailto:${CONTACT.emailPrimary}`}
                  className="flex items-center gap-2 transition-colors hover:text-white/90"
                >
                  <Mail className="h-4 w-4 text-gold" aria-hidden />
                  {CONTACT.emailPrimary}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-white/90"
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden />
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white-faint pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white-dim">
            © 2025 RagWel Claims Consultants Limited. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {CONTACT.offices.map((o) => (
              <li
                key={o.city}
                className="flex items-center gap-1.5 text-xs text-white-dim"
              >
                <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
                {o.city}, {o.country}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
