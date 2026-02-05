export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
};

export const tapScale = {
  whileTap: { scale: 0.98 },
  whileHover: { scale: 1.02 },
};

export const calmTransition = { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const };
