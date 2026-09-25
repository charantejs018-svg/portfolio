import { useCallback, useRef, useState, type CSSProperties } from "react";

interface TiltOptions {
  maxTilt?: number; // degrees
  scale?: number;
  perspective?: number;
}

export function useTilt<T extends HTMLElement = HTMLDivElement>(options: TiltOptions = {}) {
  const { maxTilt = 8, scale = 1.02, perspective = 1000 } = options;
  const elementRef = useRef<T | null>(null);
  const [style, setStyle] = useState<CSSProperties>({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "transform",
  });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`,
        transition: "transform 80ms ease-out",
        willChange: "transform",
      });
    },
    [maxTilt, scale, perspective]
  );

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
      willChange: "transform",
    });
  }, [perspective]);

  return {
    ref: elementRef,
    style,
    onMouseMove,
    onMouseLeave,
  };
}
