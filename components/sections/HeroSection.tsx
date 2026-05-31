import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Overline } from "@/components/ui/overline";
import { COMPANY, CONTACT, HERO_SUBHEADING, METRICS } from "@/lib/constants";

// Hero renders statically — no entrance animation. It is above the fold and
// should be immediately visible on every connection speed and for crawlers.
// Scroll-triggered Framer Motion animations begin on the sections below.

const HEADLINE_LEAD = "Your Commercial Position,";
const HEADLINE_GOLD = "Expertly Defended.";

export function HeroSection() {
  return (
    <section className="grid-texture relative bg-black pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Overline>{COMPANY.sector}</Overline>

          <h1 className="mt-6 font-heading text-[32px] font-normal leading-tight tracking-tight text-white md:text-5xl">
            {HEADLINE_LEAD}
            <br />
            <span className="text-gold">{HEADLINE_GOLD}</span>
          </h1>

          <p className="mt-6 max-w-[480px] text-sm leading-relaxed text-white/45">
            {HERO_SUBHEADING}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="ghost">
              <a href={CONTACT.phoneHref}>
                <Phone className="h-4 w-4" />
                {CONTACT.phone}
              </a>
            </Button>
          </div>
        </div>

        {/* Metric strip */}
        <dl className="mt-16 grid grid-cols-2 border-t border-white-faint pt-8 sm:grid-cols-4">
          {METRICS.map((m, i) => (
            <div
              key={m.value}
              className={i > 0 ? "sm:border-l sm:border-white-faint sm:pl-6" : ""}
            >
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-medium text-gold" style={{ fontSize: "22px" }}>
                {m.value}
              </dd>
              <p className="micro-label mt-1 text-white/35">{m.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
