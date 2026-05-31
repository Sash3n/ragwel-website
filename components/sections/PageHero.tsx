import { Overline } from "@/components/ui/overline";

// Inner-page hero: dark bg + grid texture, overline + headline, no CTA.
export function PageHero({
  overline,
  title,
  subtitle,
}: {
  overline: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="grid-texture bg-black pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <Overline>{overline}</Overline>
        <h1 className="mt-6 max-w-3xl font-heading text-[32px] font-normal leading-tight tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white-dim">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
