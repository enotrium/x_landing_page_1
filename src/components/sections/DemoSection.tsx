"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { siteConfig } from "@/config/content";

export function DemoSection() {
    const title = typeof siteConfig.demo.title === 'string'
        ? siteConfig.demo.title
        : siteConfig.demo.title.join(' ');

    return (
        <section id="demo" className="relative py-20 md:py-32">
            {/* Section Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <ScrollReveal>
                        <span className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase font-[family-name:var(--font-space-grotesk)]">
                            {siteConfig.demo.label}
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mt-6 font-[family-name:var(--font-space-grotesk)]">
                            {title}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent mx-auto mt-8" />
                    </ScrollReveal>
                </div>

                {/* Description */}
                <ScrollReveal delay={0.3}>
                    <p className="text-center text-base md:text-xl lg:text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16 font-[family-name:var(--font-space-grotesk)]">
                        {siteConfig.demo.description}
                    </p>
                </ScrollReveal>

                {/* Minimalistic Video Preview */}
                <ScrollReveal animation="blur-in" width="100%">
                    <div className="relative aspect-video border border-border rounded-sm overflow-hidden group cursor-pointer">
                        {/* Simple gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />

                        {/* Minimal UI lines */}
                        <div className="absolute inset-0 p-4 md:p-8 opacity-20">
                            <div className="h-full flex flex-col">
                                <div className="h-6 md:h-8 w-32 md:w-48 border-b border-foreground/30" />
                                <div className="flex-1 grid grid-cols-4 gap-4 md:gap-8 mt-4 md:mt-8">
                                    <div className="border-r border-foreground/20" />
                                    <div className="col-span-3 space-y-2 md:space-y-4">
                                        <div className="h-16 md:h-24 border border-foreground/20" />
                                        <div className="h-20 md:h-32 border border-foreground/20" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-foreground/60 group-hover:scale-105 transition-all duration-500">
                                <div className="w-0 h-0 border-l-[10px] md:border-l-[14px] border-l-foreground/60 border-t-[6px] md:border-t-[9px] border-t-transparent border-b-[6px] md:border-b-[9px] border-b-transparent ml-1 group-hover:border-l-foreground transition-colors" />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Footer Divider */}
                <div className="flex items-center justify-center pt-12 md:pt-20">
                    <ScrollReveal delay={0.4}>
                        <div className="h-px w-48 bg-gradient-to-r from-transparent via-border to-transparent" />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
