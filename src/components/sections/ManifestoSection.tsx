"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextRevealOptimized } from "@/components/ui/text-reveal-optimized";
import { siteConfig } from "@/config/content";

export function ManifestoSection() {
    const fullText = siteConfig.manifesto.paragraphs.join(" ");

    return (
        <section id="manifesto" className="relative py-16 md:py-24">
            {/* Section Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Header */}
            <div className="flex flex-col items-center justify-center py-12 md:py-16 px-4 md:px-6 lg:px-12">
                <div className="max-w-5xl mx-auto w-full">
                    <ScrollReveal>
                        <div className="flex flex-col items-center text-center space-y-6">
                            <span className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase font-[family-name:var(--font-space-grotesk)]">
                                {siteConfig.manifesto.date}
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide font-[family-name:var(--font-space-grotesk)]">
                                {siteConfig.manifesto.title}
                            </h2>
                            <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Text Reveal */}
            <div className="px-4 md:px-6 lg:px-12 py-12 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <TextRevealOptimized
                        text={fullText}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed text-foreground/90 font-[family-name:var(--font-space-grotesk)]"
                    />
                </div>
            </div>

            {/* Footer Divider */}
            <div className="flex items-center justify-center py-8 md:py-12">
                <ScrollReveal delay={0.3}>
                    <div className="h-px w-48 bg-gradient-to-r from-transparent via-border to-transparent" />
                </ScrollReveal>
            </div>
        </section>
    );
}
