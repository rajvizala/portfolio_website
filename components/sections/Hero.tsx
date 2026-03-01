"use client";

import { motion } from "framer-motion";
import { hero, personal } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 xl:py-40">
      <div className="mx-auto max-w-4xl xl:max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]"
        >
          {personal.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          {personal.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-lg font-medium text-[var(--foreground)] sm:text-xl md:text-2xl"
        >
          {hero.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3"
        >
          {hero.valueProps.map((prop, i) => (
            <div key={i} className="flex gap-3 text-[var(--muted)] sm:gap-4">
              <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)]">
                {i + 1}
              </span>
              <p className="text-base leading-relaxed sm:text-lg">{prop}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
