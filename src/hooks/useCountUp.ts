import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  duration = 1400,
  startTrigger = true,
  decimals = 0
): string {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        setCount(target);
        return;
      }
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Quartic ease out: 1 - pow(1 - x, 4)
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const current = easedProgress * target;

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, startTrigger]);

  return decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();
}
