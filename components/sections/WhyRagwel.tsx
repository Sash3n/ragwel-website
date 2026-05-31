"use client";

import { motion } from "framer-motion";
import { WHY_RAGWEL } from "@/lib/constants";

export function WhyRagwel() {
  return (
    <section className="border-y border-white-faint bg-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {WHY_RAGWEL.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.08 }}
            >
              <span className="font-heading text-[32px] font-medium text-gold">
                {item.number}
              </span>
              <h3 className="mt-3 text-sm font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white-dim">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
