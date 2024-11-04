import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import Portrait from "../components/svg/Portrait";

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
                    <Portrait width={200} height={200} />
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
