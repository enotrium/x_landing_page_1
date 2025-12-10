"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { siteConfig } from "@/config/content";

export function PricingSection() {
    const title = typeof siteConfig.pricing.title === 'string'
        ? siteConfig.pricing.title
        : siteConfig.pricing.title.join(' ');

    return (
        <section id="pricing" className="relative py-20 md:py-32">
            {/* Section Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <ScrollReveal>
                        <span className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase font-[family-name:var(--font-space-grotesk)]">
                            {siteConfig.pricing.label}
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

                {/* Minimal Pricing Grid - Responsive */}
                <ScrollReveal delay={0.3} width="100%">
                    <div className="grid md:grid-cols-3 border border-border">
                        {siteConfig.pricing.plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`p-6 md:p-10 lg:p-12 flex flex-col ${i < 2 ? 'md:border-r border-border' : ''
                                    } ${i > 0 ? 'border-t md:border-t-0 border-border' : ''} ${plan.highlight ? 'bg-muted/30' : ''
                                    }`}
                            >
                                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase font-[family-name:var(--font-space-grotesk)]">
                                    {plan.name}
                                </span>

                                <div className="mt-4 md:mt-6 mb-6 md:mb-8">
                                    <span className="text-3xl md:text-4xl lg:text-5xl font-light font-[family-name:var(--font-space-grotesk)]">
                                        {plan.price}
                                    </span>
                                    {plan.price !== "Custom" && (
                                        <span className="text-muted-foreground text-sm ml-2">/mo</span>
                                    )}
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                                    {plan.desc}
                                </p>

                                <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm">
                                            <span className="text-muted-foreground">→</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 md:py-4 text-sm tracking-wider transition-colors duration-300 font-[family-name:var(--font-space-grotesk)] ${plan.highlight
                                            ? 'bg-foreground text-background hover:opacity-90'
                                            : 'border border-border hover:border-foreground/50'
                                        }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
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
