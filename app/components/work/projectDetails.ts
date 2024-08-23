import {
    SiFramer,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiCytoscapedotjs,
    SiPython,
    SiWebpack,
    SiPostcss,
    SiSass,
    SiSvelte,
    SiJavascript,
    SiGooglechrome,
} from "react-icons/si";
import { GiGuitarHead } from "react-icons/gi";

import { IconType } from "react-icons";
export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    images: string[];
    available: boolean;
};
export const projects = [
    {
        id: 0,
        name: "Portfolio 2025",
        description: "This is the third major redevelopment of my portfolio",
        technologies: [
            SiTypescript,
            SiReact,
            SiNextdotjs,
            SiTailwindcss,
            SiFramer,
        ],
        techNames: [
            "TypeScript",
            "React",
            "Next.js",
            "TailwindCSS",
            "Framer Motion",
        ],
        techLinks: [
            "https://www.typescriptlang.org",
            "https://reactjs.org",
            "https://nextjs.org",
            "https://tailwindcss.com",
            "https://www.framer.com/motion/",
        ],
        github: "https:github/coming-soon",
        demo: "https://yonah.vercel.app",
        images: [
            "/projects/portfolio_1.png",
            "/projects/portfolio_2.png",
            "/projects/portfolio_3.png",
        ],
        available: true,
    },
    {
        id: 1,
        name: "ePlant",
        description:
            "Developed the Chromosome View and Gene Interactions View for ePlant, a gene-centric visualization tool for plant genomes, using the BAR api",
        technologies: [SiTypescript, SiReact, SiCytoscapedotjs],
        techNames: ["TypeScript", "React", "Cytoscape"],
        techLinks: [
            "https://www.typescriptlang.org",
            "https://reactjs.org",
            "https://cytoscape.org/",
        ],
        github: "https://github.com/BioAnalyticResource/ePlant",
        demo: "https://bioanalyticresource.github.io/ePlant/",
        images: ["/projects/eplant_1.png", "/projects/eplant_2.png"],
        available: true,
    },
    {
        id: 2,
        name: "QuickSum",
        description: "Aesthetic essay summarizer.",
        technologies: [SiSvelte, SiTypescript, SiSass, SiWebpack],
        techNames: ["Svelte", "TypeScript", "SASS", "Webpack"],
        techLinks: [
            "https://svelte.dev/",
            "https://www.typescriptlang.org",
            "https://sass-lang.com/",
            "https://webpack.js.org/",
        ],
        github: "https://github.com/y330/quicksum",
        demo: "https://quicksum.vercel.app/",
        images: ["/projects/quicksum.png"],
        available: true,
    },

    {
        id: 3,
        name: "FragQR",
        description:
            "FragmentQR - Browser extension for creating QR codes to text highlights",
        technologies: [SiJavascript, SiGooglechrome],
        techNames: ["JavaScript", "Chrome APIs"],
        techLinks: [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://developer.chrome.com/docs/extensions/reference/api",
        ],
        github: "https://github.com/y330/FragmentQR",
        demo: "https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj",
        images: ["/projects/fragmentqr_1.png", "/projects/fragmentqr_2.png"],
        available: true,
    },
    {
        id: 4,
        name: "Pydash",
        description:
            "Python implementation of Geometry dash, a rhythm based platformer game.",
        technologies: [SiPython, GiGuitarHead],
        techNames: ["Python", "Pygame"],
        techLinks: ["https://www.python.org/", "https://www.pygame.org/docs/"],
        github: "https://github.com/y330/Pydash",
        demo: "https://github.com/y330/Pydash",
        images: ["/projects/pydash.png"],
        available: true,
    },
    {
        id: 5,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [GiGuitarHead],
        techNames: ["Coming Soon"],
        techLinks: ["./"],
        github: "https://github.com/y330/",
        demo: "https://github.com/y330/",
        images: [""],
        available: false,
    },
];
