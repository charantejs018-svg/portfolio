import { useEffect, useRef, useState } from "react";

export function AmbientEffects() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const targetPos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers and without reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasPointer = window.matchMedia("(pointer: fine)").matches;

    if (!prefersReduced && hasPointer) {
      setEnabled(true);
    } else {
      return;
    }

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      // Normalized coordinates (-1 to 1) for background parallax
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      setMouseParallax({ x: normX, y: normY });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Smooth lerp for 60fps cursor follower
    const render = () => {
      const ease = 0.14; // smooth interpolation factor
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {/* Interactive Cursor Glow Follower */}
      <div
        ref={cursorRef}
        className="pointer-events-none absolute -left-64 -top-64 size-[512px] rounded-full opacity-40 blur-3xl transition-opacity duration-300 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 92, 255, 0.28) 0%, rgba(79, 70, 229, 0.12) 40%, transparent 70%)",
        }}
      />

      {/* Floating Ambient Particles & Parallax Depth Orbs */}
      <div
        className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseParallax.x * -16}px, ${mouseParallax.y * -16}px, 0)`,
        }}
      >
        {/* Floating Orb 1 */}
        <div
          className="absolute -top-20 left-1/4 size-72 rounded-full opacity-20 blur-3xl animate-float-slow"
          style={{
            background: "radial-gradient(circle, #7C5CFF 0%, transparent 70%)",
          }}
        />

        {/* Floating Orb 2 */}
        <div
          className="absolute top-1/2 -right-20 size-80 rounded-full opacity-15 blur-3xl animate-float-delayed"
          style={{
            background: "radial-gradient(circle, #4F46E5 0%, transparent 70%)",
          }}
        />

        {/* Floating Orb 3 */}
        <div
          className="absolute bottom-20 left-10 size-64 rounded-full opacity-15 blur-3xl animate-float-slow"
          style={{
            background: "radial-gradient(circle, #6C63FF 0%, transparent 70%)",
            animationDelay: "3s",
          }}
        />

        {/* Micro particles */}
        <div className="absolute top-[20%] left-[15%] size-1.5 rounded-full bg-primary/40 blur-[0.5px] animate-pulse" />
        <div className="absolute top-[45%] right-[20%] size-2 rounded-full bg-primary-glow/40 blur-[0.5px] animate-float-slow" />
        <div className="absolute top-[70%] left-[28%] size-1.5 rounded-full bg-indigo-400/35 blur-[0.5px] animate-pulse" />
        <div className="absolute top-[85%] right-[35%] size-2 rounded-full bg-primary/30 blur-[0.5px] animate-float-delayed" />
      </div>
    </div>
  );
}
