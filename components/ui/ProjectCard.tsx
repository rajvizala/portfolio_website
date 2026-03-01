"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  project,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  const content = (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`group rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition hover:border-[var(--accent)]/40 hover:shadow-lg ${
        featured ? "md:p-8" : "md:p-6"
      }`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold text-[var(--foreground)] sm:text-xl">
          {project.title}
        </h3>
        <span className="text-sm text-[var(--accent)]">{project.subtitle}</span>
      </div>
      <p
        className={`mb-4 text-[var(--muted)] ${
          featured ? "text-base sm:text-lg" : "text-sm sm:text-base"
        }`}
      >
        {project.description}
      </p>
      {project.highlights && project.highlights.length > 0 && (
        <ul className="mb-4 space-y-1 text-sm text-[var(--foreground)]/90">
          {project.highlights.slice(0, featured ? 2 : 1).map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--accent)]">-</span>
              {h}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-[var(--accent)]/10 px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );

  if (project.link) {
    return (
      <Link href={project.link} className="block" target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
}
