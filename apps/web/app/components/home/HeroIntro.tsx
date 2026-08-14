"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../../lib/motion";
import { heroStack } from "./home-content";
import { TerminalPreview } from "./TerminalPreview";
import { useTheme } from "../../../components/ThemeProvider";

interface HeroIntroProps {
  onOpenResume: (trigger: HTMLButtonElement) => void;
}

export function HeroIntro({ onOpenResume }: HeroIntroProps) {
  const { theme } = useTheme();

  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] opacity-30 [background-image:radial-gradient(circle_at_1px_1px,var(--outline-variant)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10"
      >
        <motion.div variants={fadeInUp} className="lg:col-span-7">
          <p className="mb-5 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.22em] text-[var(--tertiary)]">
            Backend engineer / DevOps builder
          </p>
          <h1 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-black leading-[0.96] tracking-[-0.055em] text-[var(--foreground)] sm:text-6xl lg:text-7xl xl:text-8xl">
            Backend systems.{" "}
            <span className="block text-[var(--primary)]">Reliable delivery.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--secondary)] sm:text-lg">
            I build backend applications and the delivery workflows that move them from development to production. My work spans integrations, deployment automation, cloud infrastructure, and connected systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--primary)] px-6 font-bold text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-container)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              View projects
            </Link>
            <button
              type="button"
              onClick={(event) => onOpenResume(event.currentTarget)}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--outline-variant)]/70 px-6 font-bold text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              View resume
            </button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-4 gap-y-2 font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--secondary)]/65">
            {heroStack.map((technology, index) => (
              <li key={technology} className="flex items-center gap-4">
                <span>{technology}</span>
                {index < heroStack.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[var(--outline-variant)]"
                  />
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="relative mx-auto w-full max-w-xl lg:col-span-5 lg:translate-y-8"
        >
          <div className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-lg border border-[var(--outline-variant)]/25 bg-[var(--surface-container)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src="/assets/image.jpg"
                  style={{ filter: theme === 'light' ? 'saturate(0.8) brightness(1.05)' : 'none' }}
                  alt="Portrait of Juvan Emanuel Paulo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 88vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/75 via-transparent to-transparent transition-colors duration-500" />
          </div>
          <div className="relative -mt-20 mr-auto w-[92%] sm:-mt-24 sm:w-[78%]">
            <TerminalPreview />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
