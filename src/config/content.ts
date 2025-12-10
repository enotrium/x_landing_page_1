import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
    name: "ENOTRIUM",
    description: "Securing America's Industrial Base",
    nav: [
        { title: "Manifesto", href: "#manifesto" },
        { title: "Product", href: "#supply-chain" },
        { title: "Demo", href: "#demo" },
        { title: "Pricing", href: "#pricing" },
        { title: "Contact", href: "#contact" },
    ],
    hero: {
        title: "Securing America's Industrial Base",
        subtitle: "Autonomous Coordination for Critical Supply Chains",
    },
    manifesto: {
        date: "November 2025",
        title: "Manifesto",
        paragraphs: [
            "After the direct and indirect experience of the brokenness of America’s food supply, the cooperate overreach into agriculture, and the gradual downfall of rural America, it has become the responsibility of farmers and entrepreneurs to band together and form new systems of economic self-sovereignty which impel the Nation to its true destiny. To those who understand the importance of agriculture need not be explained, containing nothing less than America’s left hand in national security and civil liberties on its right.",
            "The fate of America is the most interesting question in the world. Nearly 250 years after America’s founding, it is often implied, that modern American’s lack the will to rule themselves and direct the will of the nation to new heights. I reject this fatalism. I contest, like the Founders, for America to maintain its global standing we must adhere strictly to the creation of strong regional agricultural economies using all the cards we’ve been dealt.",
            "These cards include 900 million acres of arable farmland, the ease of direct communication, an immense capacity for building new technologies and regional transport between agricultural and industrial supply chains. Yet despite America’s natural capacity of being the global agricultural powerhouse on the planet, yearly agricultural imports are approaching $300 billion, land is sold off to foreign investors, and farmers choose to grow nothing but corn and soy.",
            "Meanwhile Americans are battling chronic illness at rates never seen before. Foreign actors have inundated our supply chains with non-food ingredients, and unnamed chemicals are classified as proprietary and EPA...",
        ],
    },
    supplyChain: {
        label: "01 / INFRASTRUCTURE",
        title: ["Industrial", "Supply Chain", "Mastery"],
        description:
            "Orchestrating the backbone of American industry. From raw materials to finished goods, our platform enables seamless coordination across the entire supply chain ecosystem.",
        commodities: ["AGRICULTURE", "METALS", "ENERGY", "LOGISTICS"],
        stats: [
            { label: "Industries", value: "12+", sub: "Sectors" },
            { label: "Partners", value: "500+", sub: "Network" },
            { label: "Coverage", value: "50", sub: "States" },
        ],
    },
    demo: {
        label: "02 / PLATFORM DEMO",
        title: "System Overview",
        description:
            "Experience the interface that powers the next generation of agricultural logistics.",
        features: [
            {
                title: "Real-time Analytics",
                desc: "Instant visibility into every moving part of your supply chain.",
            },
            {
                title: "Smart Contracts",
                desc: "Automated settlement and verification for every shipment.",
            },
            {
                title: "Predictive AI",
                desc: "Machine learning models that forecast demand and optimize routes.",
            },
        ],
    },
    pricing: {
        label: "03 / PRICING",
        title: "Select Tier",
        description: "Transparent pricing models designed for scale.",
        plans: [
            {
                name: "Starter",
                price: "$99",
                desc: "Essential tools for small operations.",
                features: [
                    "10 Active Routes",
                    "Basic Analytics",
                    "Standard Support",
                ],
            },
            {
                name: "Professional",
                price: "$299",
                desc: "Advanced capabilities for growing fleets.",
                features: [
                    "Unlimited Routes",
                    "AI Forecasting",
                    "Priority Support",
                    "API Access",
                ],
                highlight: true,
            },
            {
                name: "Enterprise",
                price: "Custom",
                desc: "Full-scale solution for global logistics.",
                features: [
                    "Dedicated Infrastructure",
                    "Custom Models",
                    "24/7 SLA",
                    "On-premise Option",
                ],
            },
        ],
    },
    contact: {
        label: "04 / CONTACT",
        title: "Schedule a Call",
        description:
            "Book a consultation to discuss how we can transform your supply chain operations.",
    },
};
