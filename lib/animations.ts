import type { Variants, Transition } from "framer-motion";

// fadeUp — base entrance for most elements.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// staggerChildren — container that staggers its children's entrances.
export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

// wordReveal — for headlines split into words; pair with `fadeUp` on each word.
export const wordRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

export const wordRevealChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// springScale — credential badges pop in.
export const springScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200 },
  },
};

// scrollReveal — shared whileInView config for on-scroll sections.
export const scrollReveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-60px" },
} as const;

// hoverCard — border brighten on hover.
export const hoverCard = {
  whileHover: { borderColor: "rgba(191,160,96,0.4)" },
  transition: { duration: 0.2 },
} as const;

// buttonPress — subtle tap feedback for all buttons.
export const buttonPress = {
  whileTap: { scale: 0.97 },
} as const;

// pageTransition — layout-level fade.
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// navBlur thresholds (consumed by Navbar's useScroll listener).
export const NAV_SCROLL_THRESHOLD = 60;

export const easeOut: Transition = { duration: 0.4, ease: "easeOut" };
