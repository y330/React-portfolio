import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript,SiCytoscapedotjs  } from "react-icons/si";
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
    image: string;
    available: boolean;
};
export const projects = [
    {
        id: "0",
        name: "Portfolio 2025",
        description: "This is the third major redevelopment of my portfolio",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "TailwindCSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org", "https://reactjs.org", "https://nextjs.org", "https://tailwindcss.com", "https://www.framer.com/motion/"],
        github: "https:github/coming-soon",
        demo: "https://yonah.vercel.app",
        image: "/projects/portfolio.png",
        available: "true"
    },
    {
        id: "1",
        name: "ePlant",
        description: "Developed the Chromosome View and Gene Interactions View for ePlant, a gene-centric visualization tool for plant genomes, using the BAR api",
        technologies:[SiTypescript, SiReact,SiCytoscapedotjs],
        techNames:  ["TypeScript", "React", "Cytoscape"],
        techLinks: ["https://www.typescriptlang.org", "https://reactjs.org", "https://cytoscape.org/"],
        github: "https://github.com/BioAnalyticResource/ePlant",
        demo: "https://bioanalyticresource.github.io/ePlant/",
        image: "/projects/eplant.png",
        available: "true"
    },
    {
        id: "3",
        name: "Coming Soon",
        description: "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [GiGuitarHead],
        techNames: ["Coming Soon"],
        techLinks: ["./"],
        github: "https://github.com/y330/",
        demo: "https://github.com/y330/",
        image: "/projects/construction.webp",
        available: "false"
    }
];
