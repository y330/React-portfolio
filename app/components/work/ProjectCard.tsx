import { ProjectProps } from "./projectDetails";
import Link from "next/link";
// import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";
// import { SiGithub } from "react-icons/si";
// import { BsLink45Deg } from "react-icons/bs";

const ProjectCard = ({
    id,
    name,
    description,
    date,
    demo,
    images,
    available,
}: ProjectProps) => {
    const blankSrc = "/projects/construction.png";
    return (
        <motion.div
            className="relative bg-cover bg-no-repeat bg-center z-10 h-[550px] w-[90%] max-w-[1000px] mx-auto items-stretch justify-center py-0 sm:h-[650px] md:h-[600px] lg:h-[500px]"
            initial="initial"
            animate="animate"
        >
            <Container
                width="100%"
                height="100%"
                borderRadius={25}
                color="rgba(255, 255, 255, 0.1)"
                blur={false}
                grain={true}
                top="0px"
                left="0px"
                angle={0}
            >
                <motion.img
                    src={images[0].length === 0 ? blankSrc : images[0]}
                    alt={name}
                    width={500}
                    height={500}
                    className={`absolute md:right-2 lg:right-2 md:w-[80%] lg:max-w-[55%] -bottom-4`}
                    whileHover={{ scale: 1.05 }}
                />

                <div
                    className={`absolute text-white left-10 top-10 lg:top-16 mb-10  md:mb-16 lg:mb-14 `}
                >
                    <AnimatedTitle
                        text={name}
                        className={
                            "max-w-[100%] text-[40px] leading-none text-white md:max-w-[350px] md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
                        }
                        wordSpace={"mr-[0.25em]"}
                        charSpace={"-mr-[0.01em]"}
                    />
                    <AnimatedBody
                        text={description}
                        className={
                            "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
                        }
                    />
                    {date !== "" ? (
                        <AnimatedBody
                            text={`Last modified ${date}`}
                            className="mt-2 text-[13px] italic text-[#ababab]"
                        />
                    ) : (
                        <></>
                    )}

                    <div className={`mt-5 w-full flex`}>
                        <Link
                            href={demo}
                            className={`bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition ${
                                id % 2 !== 0 ? "" : ""
                            }`}
                        >
                            {name.toLowerCase() === "coming soon"
                                ? "View my GitHub"
                                : "View Project"}
                        </Link>
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default ProjectCard;
