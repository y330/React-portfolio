const fetch = require("node-fetch");
const config = require("../google.config.js");
console.log(config.id);
const fetchGoogle = async ({ id }) => {
    console.log(`fetching...${id}`);

    const base = "https://docs.google.com";
    const post = `document/d/${id}/export?format=txt`;
    const url = `${base}/${post}`;

    try {
        const response = await fetch(url);
        let text = await response.text();
        text = `{metadata}
        title: Yonah Aviv - Developer and Entrepreneur
        description: React Developer and Former Coding Teacher. Focused on developing sensational software, studying Computer Science and Psychology in Waterloo, Canada.

        {about}
        headline: DEVELOPING SENSATIONAL SOFTWARE SINCE 2020
        [.background]
        * My passion lies in creating software that is both beautiful and functional.
        * Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative.
        * Currently, I am working as Plant Genetics React Developer for Professor Nicholas Provart.
        * I am a second year Computer Science and Psychology student, currently working as a Plant Genetics React Developer for Professor Nicholas Provart.
        []

        [projects]
        id: 0
        name: Portfolio 2025
        description: This is the third major redevelopment of my portfolio
        [.tech]
        TypeScript
        React
        Next.js
        TailwindCSS
        Framer Motion
        []
        [.techLinks]
        https://www.typescriptlang.org
        https://reactjs.org
         https://nextjs.org
         https://tailwindcss.com
         https://www.framer.com/motion/
        []
        github: https:github/coming-soon
        demo: https://yonah.vercel.app
        image: /projects/portfolio.png
        available: true

        id: 1
        name: ePlant
        description: Developed the Chromosome View and Gene Interactions View for ePlant, a gene-centric visualization tool for plant genomes, using the BAR api
        [.tech]
        TypeScript
        React
        Cytoscape
        []
        [.techLinks]
        https://www.typescriptlang.org
        https://reactjs.org
        https://cytoscape.org/
        []
        github: https://github.com/BioAnalyticResource/ePlant
        demo: https://bioanalyticresource.github.io/ePlant/
        image: /projects/project_eplant.png
        available: true

        id: 3
        name: Coming Soon
        description: I'm currently working on a couple of projects. I'll update this section as soon as I'm done.
        [.tech]
        ComingSoon
        []
        [.techLinks]
        https://coming/soon
        []
        github: https://github.com/nuIIpointerexception/
        demo: https://github.com/nuIIpointerexception/
        image: /projects/construction.webp
        available: false
        `;
        const parsed = require("archieml").load(text);
        const str = JSON.stringify(parsed);
        return str;
    } catch (err) {
        throw new Error(err);
    }
};

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
    try {
        const str = await fetchGoogle(config.id);

        const file = `${config.filepath}`;
        require("fs").writeFileSync(file, str);
    } catch (err) {
        console.log(err);
    }
})();
