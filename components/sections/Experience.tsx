"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import ExperienceCard from "@/components/ui/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">
            Experience
          </h2>
          <p className="max-w-2xl text-[var(--muted)]">
            Roles where I have shipped production systems and scaled impact.
          </p>
        </motion.div>

        <div className="divide-y-0">
          {experiences.map((exp, i) => (
            <ExperienceCard key={`${exp.company}-${exp.role}-${exp.dateRange}`} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
