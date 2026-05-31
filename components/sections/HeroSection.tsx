"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Overline } from "@/components/ui/overline";
import {
  fadeUp,
  staggerChildren,
  wordRevealContainer,
  wordRevealChild,
} from "@/lib/animations";
import { COMPANY, CONTACT, HERO_SUBHEADING, METRICS } from "@/lib/constants";

const HEADLINE_LEAD = "Your Commercial Position,";
const HEADLINE_GOLD = "Expertly Defended.";

export function HeroSection() {
  return (
    <section className="grid-texture relative bg-black pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <Overline>{COMPANY.sector}</Overline>
          </motion.div>

          <motion.h1
            variants={wordRevealContainer}
            className="mt-6 font-heading text-[32px] font-normal leading-tight tracking-tight text-white md:text-5xl"
          >
            {HEADLINE_LEAD.split(" ").map((word, i) => (
              <motion.span key={i} variants={wordRevealChild} className="inline-block">
                {word}&nbsp;
              </motion.span>
            ))}
            <br />
            {HEADLINE_GOLD.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordRevealChild}
                className="inline-block text-gold"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[480px] text-sm leading-relaxed text-white/45"
          >
            {HERO_SUBHEADING}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="ghost">
              <a href={CONTACT.phoneHref}>
                <Phone className="h-4 w-4" />
                {CONTACT.phone}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Metric strip */}
        <motion.dl
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 border-t border-white-faint pt-8 sm:grid-cols-4"
        >
          {METRICS.map((m, i) => (
            <div
              key={m.value}
              className={
                i > 0 ? "sm:border-l sm:border-white-faint sm:pl-6" : ""
              }
            >
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-medium text-gold" style={{ fontSize: "22px" }}>
                {m.value}
              </dd>
              <p className="micro-label mt-1 text-white/35">{m.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
