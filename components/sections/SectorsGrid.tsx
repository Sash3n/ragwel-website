"use client";

import { motion } from "framer-motion";
import { Overline } from "@/components/ui/overline";
import { fadeUp, staggerChildren, scrollReveal } from "@/lib/animations";
import { SECTORS } from "@/lib/constants";

export function SectorsGrid() {
  return (
    <section className="bg-black-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Overline>Sectors We Serve</Overline>
        <h2 className="mt-6 font-heading text-[28px] font-normal tracking-tight text-white md:text-3xl">
          Built for Complex Projects
        </h2>

        <motion.ul
          variants={staggerChildren}
          {...scrollReveal}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <motion.li
                key={sector.label}
                variants={fadeUp}
                whileHover={{ borderColor: "rgba(191,160,96,0.4)" }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-3 rounded-lg border border-gold/10 bg-black p-5"
              >
                <Icon className="h-5 w-5 text-gold" aria-hidden />
                <span className="text-[11px] text-white">{sector.label}</span>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
