"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function HoverLift({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 15px 30px -5px var(--primary-shadow-strong)",
      }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 50,
        mass: 1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
