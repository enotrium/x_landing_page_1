"use client";

import { useEffect, useRef, memo } from "react";
import { useTheme } from "next-themes";
import createGlobe from "cobe";

export const Globe = memo(function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize, { passive: true });
    onResize();

    const isDark = resolvedTheme === "dark";

    // Cleanup previous globe instance
    if (globeRef.current) {
      globeRef.current.destroy();
    }

    globeRef.current = createGlobe(canvasRef.current, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2), // Cap at 2x for performance
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: isDark ? 1 : 0,
      diffuse: isDark ? 1.5 : 1.2,
      mapSamples: 8000, // Reduced from 16000 for better performance
      mapBrightness: isDark ? 4 : 6,
      baseColor: isDark ? [0.1, 0.1, 0.12] : [1, 1, 1],
      markerColor: [0.4, 0.4, 1],
      glowColor: isDark ? [0.05, 0.05, 0.1] : [0.9, 0.9, 1],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
      window.removeEventListener('resize', onResize);
    };
  }, [resolvedTheme]);

  return (
    <div className={className} style={{
      width: '100%',
      maxWidth: 700,
      aspectRatio: '1',
      margin: '0 auto',
      position: 'relative',
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
          cursor: 'grab',
        }}
      />
    </div>
  );
});

export default Globe;
