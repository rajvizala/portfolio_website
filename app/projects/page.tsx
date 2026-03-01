"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-2 text-[var(--muted)] transition hover:text-[var(--accent)]"
      >
        <ArrowLeft size={18} />
        Back to home
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
          Projects
        </h1>
        <p className="max-w-2xl text-[var(--muted)]">
          Systems and applications I have built from concept to production.
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
