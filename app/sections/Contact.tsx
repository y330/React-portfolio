import Link from "next/link";
import { spaceGrotesk } from "../fonts/spaceGrotesk";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
            id="contact"
            initial="initial"
            animate="animate"
        >
            <ContactBackground />
            <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
                <div
                    className={`flex flex-col items-start justify-center ${spaceGrotesk.className} relative w-full sm:items-center lg:max-w-[1440px] `}
                >
                    <AnimatedWords
                        title={"contact me"}
                        style={
                            "flex max-w-[400px] flex-col items-start text-left text-[60px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[80px] md:text-[120px] lg:text-center lg:text-[150px] xl:text-[250px]"
                        }
                    />
                </div>

                <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
                    <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
                        <AnimatedBody
                            text={
                                "Got a question, proposal, project, or want to work together on something?"
                            }
                            className={
                                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                            }
                        />
                        <Link
                            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Lets%20work%20together!&to=avivyonah@gmail.com&body=Hello%20Yonah%2C%20I%20think%20we%20need%20you%20to%20work%20on..."
                            target="_blank"
                            aria-label="Send me an email"
                            className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
                        >
                            <AnimatedBody
                                text={"Send me an email"}
                                className={""}
                            />
                        </Link>
                    </div>

                    <div className="flex sm:flex-wrap gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-10 lg:text-[24px]">
                        <Link
                            href="https://github.com/y330"
                            target="_blank"
                            aria-label="View GitHub Profile"
                        >
                            <AnimatedTitle
                                text={"GITHUB"}
                                className={
                                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[24px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/yonahaviv/"
                            target="_blank"
                            aria-label="View LinkedIn"
                        >
                            <AnimatedTitle
                                text={"LINKEDIN"}
                                className={
                                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[24px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://soundcloud.com/yonah-aviv"
                            target="_blank"
                            aria-label="View SoundCloud Profile"
                        >
                            <AnimatedTitle
                                text={"SOUNDCLOUD"}
                                className={
                                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
