"use client";

import { useRef, useState } from "react";
import { Capabilities } from "./components/home/Capabilities";
import { ClosingCta } from "./components/home/ClosingCta";
import { HeroIntro } from "./components/home/HeroIntro";
import { ResumeModal } from "./components/home/ResumeModal";
import { SelectedWork } from "./components/home/SelectedWork";

export default function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeTriggerRef = useRef<HTMLElement | null>(null);

  const openResume = (trigger: HTMLButtonElement) => {
    resumeTriggerRef.current = trigger;
    setIsResumeOpen(true);
  };

  return (
    <main className="overflow-x-hidden">
      <HeroIntro onOpenResume={openResume} />
      <SelectedWork />
      <Capabilities />
      <ClosingCta onOpenResume={openResume} />
      <ResumeModal
        open={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        returnFocusRef={resumeTriggerRef}
      />
    </main>
  );
}
