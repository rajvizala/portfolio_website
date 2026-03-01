"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">
            Education
          </h2>
          <p className="max-w-2xl text-[var(--muted)]">
            Academic background in AI, distributed systems, and computer engineering.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          {education.map((edu, i) => (
            <motion.article
              key={edu.institution}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col gap-2 border-b border-[var(--border)] pb-8 last:border-0 md:flex-row md:items-start md:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {edu.institution}
                </h3>
                <p className="text-[var(--accent)]">{edu.degree}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{edu.notes}</p>
              </div>
              <span className="text-sm text-[var(--muted)] md:text-right">
                {edu.date}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
