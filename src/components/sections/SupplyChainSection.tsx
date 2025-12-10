"use client";

import { Globe } from "@/components/visualizations/Globe";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { siteConfig } from "@/config/content";

export function SupplyChainSection() {
    return (
        <section id="supply-chain" className="relative min-h-screen">
            {/* Section Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid lg:grid-cols-[320px_1fr] xl:grid-cols-[380px_1fr] min-h-screen">
                {/* Left Column - Sidebar */}
                <div className="p-6 md:p-10 lg:p-12 lg:sticky lg:top-0 lg:h-screen flex flex-col">
                    {/* Header */}
                    <div className="mb-auto">
                        <ScrollReveal>
                            <span className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase font-[family-name:var(--font-space-grotesk)]">
                                {siteConfig.supplyChain.label}
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight mt-6 font-[family-name:var(--font-space-grotesk)]">
                                {siteConfig.supplyChain.title.map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="w-12 h-px bg-gradient-to-r from-foreground/20 to-transparent mt-8" />
                        </ScrollReveal>
                    </div>

                    {/* Description & Commodities */}
                    <div className="hidden lg:block space-y-8">
                        <ScrollReveal delay={0.3}>
                            <p className="text-muted-foreground text-sm leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                                {siteConfig.supplyChain.description}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="pt-8">
                                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-4 font-[family-name:var(--font-space-grotesk)]">
                                    Sectors
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {siteConfig.supplyChain.commodities.map((item) => (
                                        <span
                                            key={item}
                                            className="text-xs tracking-wider text-muted-foreground px-3 py-1.5 font-[family-name:var(--font-space-grotesk)]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Stats in sidebar */}
                        <ScrollReveal delay={0.5}>
                            <div className="pt-8 grid grid-cols-3 gap-4">
                                {siteConfig.supplyChain.stats.map((stat, i) => (
                                    <div key={i}>
                                        <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase block mb-1 font-[family-name:var(--font-space-grotesk)]">
                                            {stat.label}
                                        </span>
                                        <span className="text-lg font-light font-[family-name:var(--font-space-grotesk)]">
                                            {stat.value}
                                        </span>
                                        <span className="text-muted-foreground text-xs ml-1">{stat.sub}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Right Column - Globe (bigger, no borders) */}
                <div className="flex items-center justify-center p-4 md:p-6 lg:p-0">
                    <ScrollReveal width="100%" animation="blur-in" duration={0.8}>
                        <div className="w-full max-w-[700px] mx-auto">
                            <Globe className="w-full h-full" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
