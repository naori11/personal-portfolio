import Link from "next/link";
import type { SupportingProjectData } from "./home-content";

interface ProjectLinkProps {
  project: SupportingProjectData;
}

export function ProjectLink({ project }: ProjectLinkProps) {
  return (
    <Link
      href={project.href}
      className="group block border-t border-[var(--outline-variant)]/30 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tertiary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
    >
      <article className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--tertiary)]">
            {project.category}
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[var(--foreground)]">
            {project.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--secondary)]">
            {project.summary}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="text-xl text-[var(--primary)] transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </article>
    </Link>
  );
}
