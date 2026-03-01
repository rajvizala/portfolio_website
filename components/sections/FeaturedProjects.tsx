"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 2);

  return (
    <section id="projects" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-[var(--muted)]">
            Production systems and intelligent applications I have built end-to-end.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center md:justify-start"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-[var(--accent)] transition hover:text-[var(--accent-muted)]"
          >
            View all projects
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
