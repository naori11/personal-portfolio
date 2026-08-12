"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../../lib/motion";
import { heroStack } from "./home-content";
import { TerminalPreview } from "./TerminalPreview";

interface HeroIntroProps {
  onOpenResume: (trigger: HTMLButtonElement) => void;
}

export function HeroIntro({ onOpenResume }: HeroIntroProps) {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] opacity-30 [background-image:radial-gradient(circle_at_1px_1px,#494456_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10"
      >
        <motion.div variants={fadeInUp} className="lg:col-span-7">
          <p className="mb-5 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.22em] text-[#6bd8cb]">
            Backend engineer / DevOps builder
          </p>
          <h1 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-black leading-[0.96] tracking-[-0.055em] text-[#dae2fd] sm:text-6xl lg:text-7xl xl:text-8xl">
            Backend systems.{" "}
            <span className="block text-[#cfbdff]">Reliable delivery.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#b9c7df] sm:text-lg">
            I build backend applications and the delivery workflows that move them from development to production. My work spans integrations, deployment automation, cloud infrastructure, and connected systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#cfbdff] px-6 font-bold text-[#3a0093] transition-colors hover:bg-[#e8ddff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1326]"
            >
              View projects
            </Link>
            <button
              type="button"
              onClick={(event) => onOpenResume(event.currentTarget)}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#494456]/70 px-6 font-bold text-[#dae2fd] transition-colors hover:border-[#cfbdff] hover:text-[#cfbdff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1326]"
            >
              View resume
            </button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-4 gap-y-2 font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase tracking-[0.14em] text-[#b9c7df]/65">
            {heroStack.map((technology, index) => (
              <li key={technology} className="flex items-center gap-4">
                <span>{technology}</span>
                {index < heroStack.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[#494456]"
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
          <div className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-lg border border-[#494456]/25 bg-[#171f33]">
            <Image
              src="/assets/image.jpg"
              alt="Portrait of Juvan Emanuel Paulo"
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 88vw"
              className="object-cover object-top"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/75 via-transparent to-transparent" />
          </div>
          <div className="relative -mt-20 mr-auto w-[92%] sm:-mt-24 sm:w-[78%]">
            <TerminalPreview />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
