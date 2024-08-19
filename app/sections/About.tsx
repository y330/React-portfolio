import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"DEVELOPING SENSATIONAL SOFTWARE SINCE 2018."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="My passion lies in creating software that is both beautiful and functional." />

                        <AnimatedBody
                            delay={0.1}
                            text="Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. "
                        />
                        <AnimatedBody
                            delay={0.2}
                            text="I am a second year Computer Science and Psychology student, currently working as Plant Genetics React Developer for Professor Nicholas Provart."
                        />
                         <AnimatedBody
                        delay={0.3}
                        text="Formerly worked as a Coding Teacher via co-op placement: taught 20+ middle school students how to code in Python and JavaScript"
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
