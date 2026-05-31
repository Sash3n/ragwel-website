"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Overline } from "@/components/ui/overline";
import { ABOUT_BODY, CREDENTIAL_ACRONYMS, CONTACT } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.35, ease: "easeOut" },
} as const;

export function AboutTeaser() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-start">
        {/* Left — text */}
        <div>
          <motion.div {...fadeUp}>
            <Overline>About Us</Overline>
          </motion.div>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
            className="mt-6 font-heading text-[28px] font-normal tracking-tight text-white md:text-3xl"
          >
            Extensive Experience. Global Reach.
          </motion.h2>
          {ABOUT_BODY.slice(0, 2).map((para, i) => (
            <motion.p
              key={i}
              {...fadeUp}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 + i * 0.06 }}
              className="mt-4 text-sm leading-relaxed text-white-dim"
            >
              {para}
            </motion.p>
          ))}
          <motion.div {...fadeUp} transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }} className="mt-8">
            <Button asChild variant="ghost">
              <Link href="/about">
                Learn About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right — credentials card */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
          className="rounded-lg border-[0.5px] border-gold/20 bg-black-surface p-6"
        >
          <h3 className="micro-label text-gold">Professional Registrations</h3>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {CREDENTIAL_ACRONYMS.map((acronym) => (
              <Badge key={acronym} className="w-full justify-center">
                {acronym}
              </Badge>
            ))}
          </div>

          <Separator className="my-6" />

          <h3 className="micro-label text-gold">Our Offices</h3>
          <ul className="mt-4 space-y-3">
            {CONTACT.offices.map((o) => (
              <li key={o.city} className="flex items-center gap-2 text-[11px] text-white">
                <MapPin className="h-4 w-4 text-gold" aria-hidden />
                {o.city}, {o.country}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
