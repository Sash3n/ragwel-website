import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { CredentialsBar } from "@/components/sections/CredentialsBar";
import { Badge } from "@/components/ui/badge";
import { servicesMetadata } from "@/lib/metadata";
import { SERVICE_CARDS, ABOUT_BODY } from "@/lib/constants";

export const metadata: Metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        overline="Our Services"
        title="Expert Services. Proven Results."
        subtitle={ABOUT_BODY[0]}
      />

      <section className="bg-black-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICE_CARDS.map((service) => (
              <article
                key={service.number}
                className="rounded-lg border-t-2 border-gold bg-black-surface p-6 ring-1 ring-gold/10"
              >
                <span className="font-heading text-[32px] font-medium text-gold">
                  {service.number}
                </span>
                <h2 className="mt-2 text-base font-medium text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-[13px] leading-relaxed text-white-dim">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectorsGrid />
      <CredentialsBar />
    </PageShell>
  );
}
