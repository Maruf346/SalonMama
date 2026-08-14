import type { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { cn } from '../lib/utils';

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

interface MotionPageProps {
  children: ReactNode;
  className?: string;
}

export function MotionPage({ children, className }: MotionPageProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <main className={className}>{children}</main>;
  }

  return (
    <motion.main
      className={className}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.main>
  );
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  variant?: Variants;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  variant = fadeUpVariants,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  staggerChildren?: number;
  delayChildren?: number;
}

export function Stagger({
  children,
  className,
  once = true,
  amount = 0.15,
  staggerChildren = 0.12,
  delayChildren = 0,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  variant?: Variants;
}

export function StaggerItem({
  children,
  className,
  variant = fadeUpVariants,
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={variant}>
      {children}
    </motion.div>
  );
}
