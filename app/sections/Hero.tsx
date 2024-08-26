import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";
import Name from "../components/svg/Name";
import Logo from "../components/svg/Logo";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";

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
       
                    <Logo width={100} height={100} />
                    {/* <motion.div
                        key={1}
                        initial={{
                            opacity: 0,
                            scale: 2,
                            // x:  project.props["id"] % 2 == 0 ? 100 : -100 ,
                            y: 200
                        }}
                        whileInView={{ opacity: 1, y: 0, scale: 1}}
                        transition={{
                            delay: 0.5,
                            ease: "easeIn"
                        }}
                    > */}
                    <Name width={200} height={100} />
                    {/* </motion.div> */}
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
