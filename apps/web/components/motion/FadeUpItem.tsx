"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeUpItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 50,
            mass: 1.5,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
