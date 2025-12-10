export interface NavItem {
    title: string;
    href: string;
}

export interface Feature {
    title: string;
    desc: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    desc: string;
    features: string[];
    highlight?: boolean;
}

export interface Stat {
    label: string;
    value: string;
    sub: string;
}

export interface SiteConfig {
    name: string;
    description: string;
    nav: NavItem[];
    hero: {
        title: string;
        subtitle: string;
    };
    manifesto: {
        date: string;
        title: string;
        paragraphs: string[];
    };
    supplyChain: {
        label: string;
        title: string[]; // Array for line breaks
        description: string;
        commodities: string[];
        stats: Stat[];
    };
    demo: {
        label: string;
        title: string | string[];
        description: string;
        features: Feature[];
    };
    pricing: {
        label: string;
        title: string | string[];
        description: string;
        plans: PricingPlan[];
    };
    contact: {
        label: string;
        title: string | string[];
        description: string;
    };
}
