"use client";

import { MotionConfig, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        <div key={pathname}>
          {children}
        </div>
      </AnimatePresence>
    </MotionConfig>
  );
}
