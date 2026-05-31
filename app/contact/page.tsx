import type { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { Overline } from "@/components/ui/overline";
import { ContactForm } from "@/components/ContactForm";
import { contactMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero overline="Contact Us" title="Let's Discuss Your Position." />

      <section className="bg-black-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          {/* Details */}
          <div>
            <Overline>Get in Touch</Overline>
            <ul className="mt-8 space-y-5 text-sm text-white-dim">
              <li>
                <a
                  href={`mailto:${CONTACT.emailPrimary}`}
                  className="flex items-center gap-3 transition-colors hover:text-white/90"
                >
                  <Mail className="h-4 w-4 text-gold" aria-hidden />
                  {CONTACT.emailPrimary}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.emailAlt}`}
                  className="flex items-center gap-3 transition-colors hover:text-white/90"
                >
                  <Mail className="h-4 w-4 text-gold" aria-hidden />
                  {CONTACT.emailAlt}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-white/90"
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden />
                  {CONTACT.phone}
                </a>
              </li>
            </ul>

            <h2 className="micro-label mt-10 text-gold">Offices</h2>
            <ul className="mt-4 space-y-3 text-sm text-white">
              {CONTACT.offices.map((o) => (
                <li key={o.city} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" aria-hidden />
                  {o.city}, {o.country}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
