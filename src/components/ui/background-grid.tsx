"use client";

import { useEffect, useRef, useState, memo, useCallback } from "react";

export const BackgroundGrid = memo(function BackgroundGrid() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const rafRef = useRef<number | null>(null);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        // Throttle updates using RAF
        if (rafRef.current !== null) return;

        rafRef.current = requestAnimationFrame(() => {
            setMousePos({ x: e.clientX, y: e.clientY });
            rafRef.current = null;
        });
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [handleMouseMove]);

    return (
        <>
            {/* Base dot grid - always visible */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    zIndex: 1,
                    backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1px)',
                    backgroundSize: '24px 24px', // Slightly larger grid = fewer dots to render
                    opacity: 0.06,
                }}
                aria-hidden="true"
            />

            {/* Interactive dot grid - follows mouse */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    zIndex: 2,
                    backgroundImage: 'radial-gradient(circle at center, currentColor 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.2,
                    maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                    willChange: 'mask-image',
                }}
                aria-hidden="true"
            />
        </>
    );
});
