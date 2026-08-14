"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FINAL_TERMINAL_STEP = 4;
const terminalDelays = [1500, 1200, 800, 1000, 10000] as const;

export function getTerminalDelay(step: number): number {
  return terminalDelays[step] ?? terminalDelays[0];
}

export function advanceTerminalStep(step: number): number {
  return step < FINAL_TERMINAL_STEP ? step + 1 : 0;
}

export function TerminalPreview() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(terminalRef, { amount: 0.35 });
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(
    shouldReduceMotion ? FINAL_TERMINAL_STEP : 0,
  );

  useEffect(() => {
    if (shouldReduceMotion) {
      setStep(FINAL_TERMINAL_STEP);
      return;
    }

    if (!isInView) return;

    const timer = window.setTimeout(() => {
      setStep((currentStep) => advanceTerminalStep(currentStep));
    }, getTerminalDelay(step));

    return () => window.clearTimeout(timer);
  }, [isInView, shouldReduceMotion, step]);

  return (
    <div
      ref={terminalRef}
      role="img"
      aria-label="Deployment pipeline terminal"
      className="relative overflow-hidden rounded-lg border border-[var(--terminal-border)]/25 bg-[var(--terminal-bg)] p-5 font-[family-name:var(--font-jetbrains-mono)] text-xs text-[var(--terminal-text)] shadow-2xl shadow-black/20 sm:p-6 h-[186px] sm:h-[198px]"
    >
      <div aria-hidden="true" className="mb-5 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--terminal-border)]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--terminal-border)]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--terminal-border)]/30" />
      </div>

      <div className="space-y-2">
        <p className="text-[var(--terminal-prompt)]">λ main: ~/projects/portfolio</p>
        <p className="text-[var(--terminal-command)]">
          $ terraform plan
          {step === 0 && !shouldReduceMotion && (
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-[var(--terminal-prompt)]"
            />
          )}
        </p>

        {step >= 2 && <p className="text-[var(--terminal-muted)]/75"># Refreshing state...</p>}
        {step >= 3 && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[var(--terminal-secondary)]"
          >
            Plan: 12 to add, 0 to change, 0 to destroy.
          </motion.p>
        )}
        {step >= 4 && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 pt-2 text-[var(--terminal-command)]"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--terminal-success)]" />
            Infrastructure synced successfully.
          </motion.p>
        )}
      </div>
    </div>
  );
}
