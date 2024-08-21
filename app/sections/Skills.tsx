import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiFigma,
    SiGooglefonts,
    SiAdobephotoshop,
    SiGit,
    SiGithub,
    SiJavascript,
    SiPython,
    SiTypescript,
    SiReact,
    SiSvelte,
    SiNextdotjs,
    SiFlask,
    SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Skills = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TOOLS IM USING."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.1} text="Design" />
                        <div>
                            <AnimatedTools
                                className="grid grid-cols-5 gap-4"
                                delay={0.1}
                                stepSize={0.1}
                                iconSize={50}
                            >
                                <SiAdobephotoshop size={50} title="Photoshop">#2fa0f4</SiAdobephotoshop>
                                <SiFigma size={50} title="Figma">#e93600</SiFigma>
                                <SiGooglefonts size={50} title="Google Fonts"></SiGooglefonts>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Frontend" />
                        <div>
                            <AnimatedTools
                                className="grid grid-cols-5 gap-4"
                                delay={0.2}
                                stepSize={0.1}
                                iconSize={50}
                            >
                                <SiTypescript size={50} title="TypeScript">#0079cc</SiTypescript>
                                <SiJavascript size={50} title="JavaScript">#f5dd1b</SiJavascript>
                                <SiReact size={50} title="React">#02d2fa</SiReact>
                                <SiSvelte size={50} title="Svelte">#fc3f00</SiSvelte>
                                <SiTailwindcss size={50} title="Tailwind CSS">#06b6d4</SiTailwindcss>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Backend" />
                        <div>
                            <AnimatedTools
                                className="grid grid-cols-5 gap-4"
                                delay={0.3}
                                stepSize={0.1}
                                iconSize={50}
                            >
                                <SiFlask size={50} title="Flask">#00f14c</SiFlask>
                                <SiPython size={50} title="Python">#018297</SiPython>
                                <SiNextdotjs size={50} title="Next.js">#6374e8</SiNextdotjs>
                                <FaJava size={50} title="Java">#f98500</FaJava>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Other" />
                        <div>
                            <AnimatedTools
                                className="grid grid-cols-5 gap-4"
                                delay={0.4}
                                stepSize={0.1}
                                iconSize={50}
                            >
                                <SiGithub size={50} title="GitHub"/>
                                <SiGit size={50} title="Git">#e84d30</SiGit>
                                <VscVscode size={50} title="VSCode">#279ded</VscVscode>
                            </AnimatedTools>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
