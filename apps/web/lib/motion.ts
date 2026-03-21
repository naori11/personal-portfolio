import { Variants, Transition } from "framer-motion";

// ============================================================================
// SPRING CONFIGURATIONS
// ============================================================================

export const springs = {
  // Snappy - for buttons and quick interactions
  snappy: { stiffness: 400, damping: 17, mass: 0.5 },

  // Smooth - for cards and sections
  smooth: { stiffness: 100, damping: 20, mass: 1 },

  // Bouncy - for playful elements
  bouncy: { stiffness: 300, damping: 10, mass: 0.8 },

  // Heavy - for large images and modals
  heavy: { stiffness: 80, damping: 15, mass: 1.5 },
} as const;

// ============================================================================
// EASING CURVES
// ============================================================================

export const easings = {
  // Ease-out (most common - elements entering)
  easeOutExpo: [0.16, 1, 0.3, 1],

  // Ease-in (elements exiting)
  easeInCubic: [0.4, 0, 1, 1],

  // Ease-in-out (smooth both ways)
  materialStandard: [0.4, 0, 0.2, 1],

  // Bounce (playful)
  bounce: [0.34, 1.56, 0.64, 1],
} as const;

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOutExpo,
    }
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOutExpo,
    }
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easings.easeOutExpo,
    }
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easings.easeOutExpo,
    }
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.easeOutExpo,
    }
  },
};

// ============================================================================
// STAGGER CONTAINERS
// ============================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.easeOutExpo,
    }
  },
};

// ============================================================================
// NAVIGATION VARIANTS
// ============================================================================

export const navContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const navItem: Variants = {
  hidden: {
    opacity: 0,
    y: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOutExpo,
    }
  },
};

// ============================================================================
// TERMINAL ANIMATIONS
// ============================================================================

export const terminalReveal: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    }
  },
};

export const typewriter = (text: string, duration: number = 2000): Transition => ({
  duration: duration / 1000,
  ease: "linear",
});

// ============================================================================
// PAGE TRANSITIONS
// ============================================================================

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.15,
      ease: easings.easeOutExpo,
    },
  },
  exit: {
    opacity: 0.2,
    y: 30,
    transition: {
      duration: 0.3,
      ease: easings.easeInCubic,
    },
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export const getStaggerDelay = (index: number, baseDelay: number = 0.15): number => {
  return index * baseDelay;
};

export const getGridStaggerDelay = (row: number, col: number): number => {
  return (row * 0.1) + (col * 0.15);
};
