"use client";

import Link from "next/link";

interface ClosingCtaProps {
  onOpenResume: (trigger: HTMLButtonElement) => void;
}

export function ClosingCta({ onOpenResume }: ClosingCtaProps) {
  return (
    <section className="px-4 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 border-y border-[#494456]/30 py-12 lg:grid-cols-[1fr_auto] lg:items-end lg:py-16">
        <div className="max-w-3xl">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.2em] text-[#6bd8cb]">
            03 / Next step
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-black tracking-tight text-[#dae2fd] sm:text-5xl">
            Need a DevOps, cloud, or automation engineer?
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#cfbdff] px-6 font-bold text-[#3a0093] transition-colors hover:bg-[#e8ddff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1326]"
          >
            Start a conversation
          </Link>
          <button
            type="button"
            onClick={(event) => onOpenResume(event.currentTarget)}
            className="inline-flex min-h-12 items-center justify-center px-5 font-bold text-[#dae2fd] underline decoration-[#494456] underline-offset-4 hover:decoration-[#dae2fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6bd8cb]"
          >
            View resume
          </button>
        </div>
      </div>
    </section>
  );
}
