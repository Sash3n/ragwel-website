import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="grid-texture flex min-h-[70vh] flex-col items-center justify-center bg-black px-6 text-center">
        <span className="font-heading text-6xl font-medium text-gold">404</span>
        <h1 className="mt-4 font-heading text-2xl font-normal text-white">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-white-dim">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-md bg-gold px-6 text-sm font-medium text-black transition-colors hover:bg-gold-bright"
        >
          Back to Home
        </Link>
      </section>
    </PageShell>
  );
}
