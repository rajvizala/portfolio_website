"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--accent)]/5 p-8 text-center sm:p-12"
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Get in touch
          </h2>
          <p className="mb-8 text-[var(--muted)]">
            I am open to opportunities and collaborations. Reach out to discuss your next project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-[var(--foreground)] transition hover:text-[var(--accent)]"
            >
              <Mail size={20} />
              <span className="text-sm sm:text-base">Email</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--foreground)] transition hover:text-[var(--accent)]"
            >
              <Linkedin size={20} />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--foreground)] transition hover:text-[var(--accent)]"
            >
              <Github size={20} />
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-2 text-[var(--foreground)] transition hover:text-[var(--accent)]"
            >
              <Phone size={20} />
              <span className="text-sm sm:text-base">Phone</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
