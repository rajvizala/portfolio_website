"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { experiences } from "@/lib/data";

type Experience = (typeof experiences)[number];

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export default function ExperienceCard({
  experience,
  index = 0,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b border-[var(--border)] py-8 last:border-0 md:py-10"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-[var(--foreground)] transition hover:text-[var(--accent)]"
          >
            {experience.company}
          </a>
          <p className="text-[var(--accent)]">{experience.role}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-[var(--muted)] md:text-right">
          <span>{experience.dateRange}</span>
          <span className="flex items-center gap-1 md:justify-end">
            <MapPin size={14} />
            {experience.location}
          </span>
        </div>
      </div>
      <ul className="mt-4 space-y-2 pl-0">
        {experience.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-2 text-[var(--foreground)]/90 md:gap-3"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span className="text-sm leading-relaxed sm:text-base">{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
