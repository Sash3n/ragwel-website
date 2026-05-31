import type { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { Overline } from "@/components/ui/overline";
import { Card } from "@/components/ui/card";
import { aboutMetadata } from "@/lib/metadata";
import { ABOUT_BODY, CREDENTIALS, CONTACT } from "@/lib/constants";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero overline="About Us" title="Extensive Experience. Global Reach." />

      {/* Who We Are */}
      <section className="bg-black-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Overline>Who We Are</Overline>
          <div className="mt-8 max-w-3xl space-y-6">
            {ABOUT_BODY.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-white-dim">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-black py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Overline>Credentials</Overline>
          <h2 className="mt-6 font-heading text-[28px] font-normal tracking-tight text-white md:text-3xl">
            Professional Registrations
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((c) => (
              <Card key={c.acronym} className="p-6">
                <span className="font-heading text-2xl text-gold">{c.acronym}</span>
                <h3 className="mt-3 text-sm font-medium text-white">{c.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white-dim">
                  {c.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-black-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Overline>Our Offices</Overline>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CONTACT.offices.map((o) => (
              <Card key={o.city} className="p-8">
                <div className="flex items-center gap-2 text-gold">
                  <MapPin className="h-5 w-5" aria-hidden />
                  <span className="font-heading text-xl text-white">
                    {o.city}, {o.country}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-white-dim">
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
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
