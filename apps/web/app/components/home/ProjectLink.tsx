import Link from "next/link";
import type { SupportingProjectData } from "./home-content";

interface ProjectLinkProps {
  project: SupportingProjectData;
}

export function ProjectLink({ project }: ProjectLinkProps) {
  return (
    <Link
      href={project.href}
      className="group block border-t border-[#494456]/30 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b1326]"
    >
      <article className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-[#6bd8cb]">
            {project.category}
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[#dae2fd]">
            {project.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#b9c7df]">
            {project.summary}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="text-xl text-[#cfbdff] transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </article>
    </Link>
  );
}
