import AnimatedTitle from "../animations/AnimatedTitle";
import ProjectGrid from "../components/work/ProjectGrid";
import React from "react";

const Work = () => {
    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
            id="work"
        >


            <AnimatedTitle
                text={"FEATURED WORK"}
                className={
                    "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                }
                wordSpace={"mr-[14px]"}
                charSpace={"mr-[0.001em]"}
            />
            <ProjectGrid />
        </section>
    );
};

export default Work;
