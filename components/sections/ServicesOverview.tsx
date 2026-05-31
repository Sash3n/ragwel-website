"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Overline } from "@/components/ui/overline";
import { fadeUp, staggerChildren, scrollReveal } from "@/lib/animations";
import { SERVICE_ROWS } from "@/lib/constants";

export function ServicesOverview() {
  return (
    <section className="bg-black-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Overline>Core Services</Overline>
        <div className="mt-6 flex items-end justify-between">
          <h2 className="font-heading text-[28px] font-normal tracking-tight text-white md:text-3xl">
            What We Do
          </h2>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm text-gold transition-colors hover:text-gold-bright"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <motion.ul
          variants={staggerChildren}
          {...scrollReveal}
          className="mt-12 border-t border-white/5"
        >
          {SERVICE_ROWS.map((row) => {
            const Icon = row.icon;
            return (
              <motion.li
                key={row.number}
                variants={fadeUp}
                className="flex items-center gap-4 border-b border-white/5 py-6 md:gap-6"
              >
                <span className="font-heading text-lg text-white/40 md:text-xl">
                  {row.number}
                </span>
                <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                <h3 className="flex-1 text-sm text-white md:text-base">
                  {row.title}
                </h3>
                <span className="hidden text-right text-xs text-gold/60 sm:block">
                  {row.tag}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
