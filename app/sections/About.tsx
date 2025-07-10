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
                    text={"DEVELOPING SENSATIONAL SOFTWARE SINCE 2020"}
                    className={
                        "mb-10 text-left text-[35px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[35px] md:mb-16 md:text-[40px] lg:text-[50px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                    delay={1}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="I’m a detail-driven software developer with over five years of experience in Python, Java, Machine Learning, and modern web development." />

                        <AnimatedBody
                            delay={0.1}
                            text="With expertise in both computer science and psychology, I design smart, intuitive soltutions that feel as good as they look."
                        />
                        <AnimatedBody
                            delay={0.2}
                            text="I’m passionate about teamwork, collaboration, and building software that leaves a real impact."
                        />
                        <AnimatedBody
                            delay={0.3}
                            text="Outside of software, I produce music that blends flamenco and Middle Eastern guitar sounds with classic rock and modern r&b."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
