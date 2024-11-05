import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import Portrait from "../components/svg/Portrait";
import AnimatedTitle from "../animations/AnimatedTitle";
const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative mb-14 flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
                >
                    {/* TODO: add Flip animation that flips to a pciture of me */}
                    <Portrait width={400} height={400} />
                </div>
                <AnimatedTitle
                    text={"YONAH AVIV"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>
        </motion.section>
    );
};

export default Hero;
