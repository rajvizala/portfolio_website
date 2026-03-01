"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";
import { personal } from "@/lib/data";
import type { GitHubPullRequest } from "@/lib/github";

type Tab = "merged" | "open" | "closed";

export default function ProofOfWork() {
  const [tab, setTab] = useState<Tab>("merged");
  const [prs, setPrs] = useState<{
    merged: GitHubPullRequest[];
    open: GitHubPullRequest[];
    closed: GitHubPullRequest[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const username = personal.github.split("/").pop() || "rajvizala";

  useEffect(() => {
    fetch(`/api/github/prs?username=${username}`)
      .then((r) => r.json())
      .then((data) => {
        setPrs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  const tabs: { id: Tab; label: string }[] = [
    { id: "merged", label: "Merged" },
    { id: "open", label: "Open" },
    { id: "closed", label: "Closed" },
  ];

  const list = prs ? prs[tab] : [];

  return (
    <section className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">
            Proof of Work
          </h2>
          <p className="max-w-2xl text-[var(--muted)]">
            Open source contributions and merged pull requests.
          </p>
        </motion.div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <div className="flex border-b border-[var(--border)]">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`flex-1 px-4 py-3 text-sm font-medium transition sm:px-6 ${
                  tab === t.id
                    ? "border-b-2 border-[var(--accent)] text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="min-h-[200px] p-4 sm:p-6">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 size={32} className="animate-spin text-[var(--accent)]" />
              </div>
            ) : list.length === 0 ? (
              <p className="py-12 text-center text-[var(--muted)]">
                No pull requests in this category.
              </p>
            ) : (
              <ul className="space-y-3">
                {list.slice(0, 10).map((pr) => (
                  <li key={pr.id}>
                    <a
                      href={pr.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 text-sm"
                    >
                      <span className="text-[var(--foreground)] group-hover:text-[var(--accent)]">
                        {pr.title}
                      </span>
                      <ExternalLink
                        size={16}
                        className="shrink-0 text-[var(--muted)] group-hover:text-[var(--accent)]"
                      />
                    </a>
                    {pr.repo && (
                      <span className="mt-1 block text-xs text-[var(--muted)]">
                        {pr.repo}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
