"use client";
import React, { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export const TextHoverEffect = memo(function TextHoverEffect({
    text,
    duration = 0,
}: {
    text: string;
    duration?: number;
}) {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (svgRef.current && cursor.x !== null && cursor.y !== null) {
            const svgRect = svgRef.current.getBoundingClientRect();
            const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
            const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
            setMaskPosition({
                cx: `${cxPercentage}%`,
                cy: `${cyPercentage}%`,
            });
        }
    }, [cursor]);

    const isLight = mounted && resolvedTheme === "light";
    const strokeColor = isLight ? "#0a0a0a" : "#ffffff";

    // Different gradient colors for light/dark themes
    const gradientColors = isLight
        ? ["#1d4ed8", "#7c3aed", "#db2777", "#ea580c", "#059669"] // Darker, more saturated for light mode
        : ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"]; // Original for dark mode

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
            className="select-none cursor-pointer"
        >
            <defs>
                <linearGradient
                    id="textGradient"
                    gradientUnits="userSpaceOnUse"
                    cx="50%"
                    cy="50%"
                    r="25%"
                >
                    {hovered && (
                        <>
                            <stop offset="0%" stopColor={gradientColors[0]} />
                            <stop offset="25%" stopColor={gradientColors[1]} />
                            <stop offset="50%" stopColor={gradientColors[2]} />
                            <stop offset="75%" stopColor={gradientColors[3]} />
                            <stop offset="100%" stopColor={gradientColors[4]} />
                        </>
                    )}
                </linearGradient>

                <motion.radialGradient
                    id="revealMask"
                    gradientUnits="userSpaceOnUse"
                    r="25%"
                    animate={maskPosition}
                    transition={{ duration, ease: "easeOut" }}
                >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </motion.radialGradient>
                <mask id="textMask">
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
                </mask>
            </defs>

            {/* Base outline text - always visible */}
            <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.4"
                stroke={strokeColor}
                className="font-[helvetica] font-bold fill-transparent text-7xl"
                initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
                animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
                transition={{ duration: 4, ease: "easeInOut" }}
            >
                {text}
            </motion.text>

            {/* Hover glow text - appears on hover */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.6"
                stroke={strokeColor}
                className="font-[helvetica] font-bold fill-transparent text-7xl transition-opacity duration-300"
                style={{ opacity: hovered ? 0.5 : 0 }}
            >
                {text}
            </text>

            {/* Gradient reveal text - follows cursor on hover */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#textGradient)"
                strokeWidth="0.5"
                mask="url(#textMask)"
                className="font-[helvetica] font-bold fill-transparent text-7xl"
            >
                {text}
            </text>
        </svg>
    );
});
