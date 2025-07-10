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
    date: string;
    demo: string;
    images: string[];
    available: boolean;
};
export const projects = [
    {
        id: 1,
        name: "Gym Website",
        description:
            "Designed and developed a responsive landing page for a fitness center as a personal project to strengthen front-end development proficiency and design execution",
        date: "March 2025",
        demo: "https://github.com/BioAnalyticResource/ePlant",
        images: ["/projects/gym_website.png"],
        available: true,
    },
    {
        id: 2,
        name: "ePlant",
        description:
            "Contributed to the development of the Chromosome View and Gene Interactions View modules for ePlant, a gene-centric visualization platform for plant genomes. This work was completed as part of my research collaboration with the University of Toronto’s Biology Department",
        date: "March 2025",
        demo: "https://github.com/BioAnalyticResource/ePlant",
        images: ["/projects/eplant_1.png"],
        available: true,
    },
    {
        id: 3,
        name: "QuickSum",
        description:
            "Developed an AI-powered tool for summarizing essays with an emphasis on aesthetic coherence and readability",
        date: "December 2021",
        demo: "https://github.com/y330/quicksum",
        images: ["/projects/quicksum.png"],
        available: true,
    },

    {
        id: 4,
        name: "FragmentQR",
        description:
            "Developed a browser extension that generates QR codes from selected text highlights, streamlining content sharing and cross-device access",
        date: "September 2021",
        demo: "https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj",
        images: ["/projects/fragmentqr_1.png"],
        available: true,
    },
    {
        id: 5,
        name: "Pydash",
        description:
            "Built a Python-based rhythm platformer inspired by Geometry Dash, featuring timing-sensitive obstacles and animated level progression",
        date: "March 2020",
        demo: "https://github.com/y330/Pydash",
        images: ["/projects/pydash.png"],
        available: true,
    },
    {
        id: 6,
        name: "Coming Soon",
        description:
            "New projects are in progress. Check back soon for fresh updates",
        date: "",
        demo: "https://github.com/y330/",
        images: [""],
        available: false,
    },
];
