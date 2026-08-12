import Link from "next/link";
import type { FeaturedProjectData } from "./home-content";

interface FeaturedProjectProps {
  project: FeaturedProjectData;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-[#494456]/25 bg-[#131b2e] lg:grid-cols-12">
      <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
        <div>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.2em] text-[#6bd8cb]">
            {project.eyebrow}
          </p>
          <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-[#dae2fd] sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-5 leading-7 text-[#b9c7df]">{project.summary}</p>
          <p className="mt-4 leading-7 text-[#b9c7df]/80">{project.contribution}</p>
        </div>

        <div className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-[#494456]/35 px-2.5 py-1.5 font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.12em] text-[#cfbdff]"
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
              className="font-bold text-[#cfbdff] underline decoration-[#cfbdff]/30 underline-offset-4 hover:decoration-[#cfbdff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb]"
            >
              View repository
            </a>
            <Link
              href={project.projectsHref}
              className="font-bold text-[#dae2fd] underline decoration-[#494456] underline-offset-4 hover:decoration-[#dae2fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb]"
            >
              All projects
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#494456]/25 bg-[#171f33] p-6 sm:p-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-10">
        <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(#494456_1px,transparent_1px),linear-gradient(90deg,#494456_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom_right,black,transparent)]" />
        <div className="relative">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-[#b9c7df]/60">
            Delivery path / repository derived
          </p>
          <ol
            aria-label="Cloud Portfolio deployment flow"
            className="mt-8 space-y-4"
          >
            {project.pipeline.map((step, index) => (
              <li
                key={step.label}
                className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-lg border border-[#494456]/30 bg-[#0b1326]/80 p-4 sm:grid-cols-[3rem_1fr] sm:p-5"
              >
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#6bd8cb]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-bold text-[#dae2fd]">{step.label}</p>
                  <p className="mt-1 text-sm leading-6 text-[#b9c7df]">
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
