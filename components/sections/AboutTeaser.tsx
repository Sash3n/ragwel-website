"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Overline } from "@/components/ui/overline";
import { fadeUp, staggerChildren, springScale, scrollReveal } from "@/lib/animations";
import { ABOUT_BODY, CREDENTIAL_ACRONYMS, CONTACT } from "@/lib/constants";

export function AboutTeaser() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-start">
        {/* Left — text */}
        <motion.div variants={staggerChildren} {...scrollReveal}>
          <motion.div variants={fadeUp}>
            <Overline>About Us</Overline>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-heading text-[28px] font-normal tracking-tight text-white md:text-3xl"
          >
            Extensive Experience. Global Reach.
          </motion.h2>
          {ABOUT_BODY.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="mt-4 text-sm leading-relaxed text-white-dim"
            >
              {para}
            </motion.p>
          ))}
          <motion.div variants={fadeUp} className="mt-8">
            <Button asChild variant="ghost">
              <Link href="/about">
                Learn About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right — credentials card */}
        <motion.div
          variants={fadeUp}
          {...scrollReveal}
          className="rounded-lg border-[0.5px] border-gold/20 bg-black-surface p-6"
        >
          <h3 className="micro-label text-gold">Professional Registrations</h3>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 grid grid-cols-2 gap-2.5"
          >
            {CREDENTIAL_ACRONYMS.map((acronym) => (
              <motion.div key={acronym} variants={springScale}>
                <Badge className="w-full justify-center">{acronym}</Badge>
              </motion.div>
            ))}
          </motion.div>

          <Separator className="my-6" />

          <h3 className="micro-label text-gold">Our Offices</h3>
          <ul className="mt-4 space-y-3">
            {CONTACT.offices.map((o) => (
              <li
                key={o.city}
                className="flex items-center gap-2 text-[11px] text-white"
              >
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
