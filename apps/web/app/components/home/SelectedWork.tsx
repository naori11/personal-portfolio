import { motion } from "framer-motion";
import { fadeInUp } from "../../../lib/motion";
import { FeaturedProject } from "./FeaturedProject";
import { featuredProject, supportingProjects } from "./home-content";
import { ProjectLink } from "./ProjectLink";

export function SelectedWork() {
  return (
    <section className="px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
          className="mb-10 max-w-3xl"
        >
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.2em] text-[var(--tertiary)]">
            01 / Selected work
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-black tracking-tight text-[var(--foreground)] sm:text-5xl">
            Systems shown through the work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--secondary)]">
            A focused look at the infrastructure, backend, and connected-system projects behind the skill list.
          </p>
        </motion.header>

        <FeaturedProject project={featuredProject} />

        <div
          aria-label="Supporting projects"
          className="mt-12 grid gap-x-12 md:grid-cols-2"
        >
          {supportingProjects.map((project) => (
            <ProjectLink key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
