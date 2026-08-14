import Link from "next/link";
import type { FeaturedProjectData } from "./home-content";

interface FeaturedProjectProps {
  project: FeaturedProjectData;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-[var(--outline-variant)]/25 bg-[var(--surface-container-low)] lg:grid-cols-12">
      <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
        <div>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.2em] text-[var(--tertiary)]">
            {project.eyebrow}
          </p>
          <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-5 leading-7 text-[var(--secondary)]">
            {project.summary}
          </p>
          <p className="mt-4 leading-7 text-[var(--secondary)]/80">
            {project.contribution}
          </p>
        </div>

        <div className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-[var(--outline-variant)]/35 px-2.5 py-1.5 font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--primary)]"
              >
                {technology}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[var(--primary)] underline decoration-[var(--primary)]/30 underline-offset-4 hover:decoration-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tertiary)]"
            >
              View repository
            </a>
            <Link
              href={project.projectsHref}
              className="font-bold text-[var(--foreground)] underline decoration-[var(--outline-variant)] underline-offset-4 hover:decoration-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tertiary)]"
            >
              All projects
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[var(--outline-variant)]/25 bg-[var(--surface-container)] p-6 sm:p-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25 [background-image:linear-gradient(var(--outline-variant)_1px,transparent_1px),linear-gradient(90deg,var(--outline-variant)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom_right,black,transparent)]"
        />
        <div className="relative">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--secondary)]/60">
            Delivery path / repository derived
          </p>
          <ol
            aria-label="Cloud Portfolio deployment flow"
            className="mt-8 space-y-4"
          >
            {project.pipeline.map((step, index) => (
              <li
                key={step.label}
                className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-lg border border-[var(--outline-variant)]/30 bg-[var(--background)]/80 p-4 sm:grid-cols-[3rem_1fr] sm:p-5"
              >
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[var(--tertiary)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-bold text-[var(--foreground)]">
                    {step.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--secondary)]">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
