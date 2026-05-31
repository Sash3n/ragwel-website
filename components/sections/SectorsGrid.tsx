"use client";

import { motion } from "framer-motion";
import { Overline } from "@/components/ui/overline";
import { SECTORS } from "@/lib/constants";

export function SectorsGrid() {
  return (
    <section className="bg-black-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Overline>Sectors We Serve</Overline>
        <h2 className="mt-6 font-heading text-[28px] font-normal tracking-tight text-white md:text-3xl">
          Built for Complex Projects
        </h2>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {SECTORS.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.li
                key={sector.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.04 }}
                whileHover={{ borderColor: "rgba(191,160,96,0.4)" }}
                className="flex flex-col gap-3 rounded-lg border border-gold/10 bg-black p-5"
              >
                <Icon className="h-5 w-5 text-gold" aria-hidden />
                <span className="text-[11px] text-white">{sector.label}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
