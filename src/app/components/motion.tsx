import { useState, useRef, useEffect, type ReactNode, type MouseEvent } from 'react';
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
  animate,
  AnimatePresence,
  type Variants,
} from 'motion/react';
import { cn } from '../lib/utils';

// Gentle, calm, and floating springs
export const luxurySpring = {
  type: 'spring' as const,
  stiffness: 140,
  damping: 22,
};

export const gentleSpring = {
  type: 'spring' as const,
  stiffness: 90,
  damping: 20,
};

export const snappySpring = {
  type: 'spring' as const,
  stiffness: 220,
  damping: 26,
};

// Gentle, slow page transition variants
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 1, 0.5, 1],
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Gentle fade up (0.9s duration)
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: 'easeOut',
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
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

// ─── Top of Page Header Entrance Animation (Triggered immediately on page load) ───
interface PageHeaderRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function PageHeaderReveal({
  children,
  className,
  delay = 0.05,
  duration = 0.85,
}: PageHeaderRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Per-Section Scroll Reveal (Triggered when scrolled to that specific section) ───
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
  duration = 0.9,
  once = true,
  amount = 0.12,
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
      transition={{ delay, duration, ease: [0.25, 1, 0.5, 1] }}
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
  amount = 0.1,
  staggerChildren = 0.12,
  delayChildren = 0.06,
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

// ─── 3D Perspective Tilt Card (Gentle) ───
interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className,
  maxTilt = 5,
  glare = true,
}: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 24 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 24 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || reduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      className={cn('relative transition-shadow duration-500', className)}
    >
      {children}
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 hover:opacity-100 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.25) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}

// ─── Magnetic Button (Gentle) ───
interface MagneticProps {
  children: ReactNode;
  className?: string;
  pullFactor?: number;
}

export function Magnetic({ children, className, pullFactor = 0.25 }: MagneticProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 20 });
  const springY = useSpring(y, { stiffness: 180, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || reduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) * pullFactor;
    const dy = (e.clientY - centerY) * pullFactor;
    x.set(dx);
    y.set(dy);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  );
}

// ─── Interactive Mouse Glow Spotlight Card ───
interface GlowSpotlightProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function GlowSpotlight({
  children,
  className,
  spotlightColor = 'rgba(54, 162, 255, 0.1)',
}: GlowSpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn('relative overflow-hidden', className)}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

// ─── Infinite Seamless Luxury Marquee ───
interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 36,
  reverse = false,
  pauseOnHover = true,
}: MarqueeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn('flex gap-8 overflow-x-auto', className)}>{children}</div>;
  }

  return (
    <div
      className={cn(
        'group flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className
      )}
    >
      <motion.div
        className={cn('flex shrink-0 items-center gap-8 py-3', {
          'group-hover:[animation-play-state:paused]': pauseOnHover,
        })}
        animate={{
          x: reverse ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// ─── Smooth Animated Number Counter (In-View, Gentle Deceleration) ───
interface AnimatedNumberProps {
  value: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  once?: boolean;
}

export function AnimatedNumber({
  value,
  from = 0,
  duration = 1.6,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
  once = true,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.1 });
  const reduceMotion = useReducedMotion();
  const prevValueRef = useRef(from);
  const hasAnimatedRef = useRef(false);

  const formatNum = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.round(num).toLocaleString();
  };

  const [displayValue, setDisplayValue] = useState<string>(() =>
    reduceMotion ? formatNum(value) : formatNum(from)
  );

  useEffect(() => {
    if (reduceMotion) {
      setDisplayValue(formatNum(value));
      prevValueRef.current = value;
      return;
    }

    if (!isInView) return;

    const startVal = hasAnimatedRef.current ? prevValueRef.current : from;
    hasAnimatedRef.current = true;

    const controls = animate(startVal, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Gentle, luxurious deceleration
      onUpdate: (latest) => {
        setDisplayValue(formatNum(latest));
      },
      onComplete: () => {
        prevValueRef.current = value;
      },
    });

    return () => controls.stop();
  }, [isInView, value, from, duration, decimals, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

// ─── Animated Tab Pill (Gentle, smooth glide) ───
interface AnimatedTabPillProps {
  layoutId?: string;
  className?: string;
}

export function AnimatedTabPill({
  layoutId = 'activeTab',
  className = 'bg-white shadow-sm border border-blue-100',
}: AnimatedTabPillProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className={cn('absolute inset-0 rounded-full z-0', className)}
      transition={{ type: 'spring', bounce: 0.1, duration: 0.7 }}
    />
  );
}
