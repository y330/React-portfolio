import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import Image from "next/image";

import "./carousel.css";

type CarouselProps = {
    images: string[];
    name: string;
    id: number;
};
const Carousel = ({ images, name, id }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("left");

    // Animations
    const slideVariants = {
        hiddenRight: {
            x: "100%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.5,
            },
        },
    };

    const slidersVariants = {
        hover: {
            scale: 1.2,
            backgroundColor: "#ff33dd",
        },
    };
    const dotsVariants = {
        initial: {
            y: 0,
            scale: 1,
        },
        animate: {
            scale: 1.3,
            transition: { type: "tween", stiffness: 200, damping: "6" },
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 },
        },
    };

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setDirection("left");

        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };
    return (
        <div
            id={`Carousel${id}`}
            className={`Carousel absolute ${
                id % 2 === 0 ? "md:right-2 lg:right-2" : "md:left-2 lg:left-2"
            } sm:w-[100%] md:w-[50%] lg:max-w-[55%] -bottom-4`}
        >
            <AnimatePresence mode="popLayout">
                <motion.img
                    className={`CarouselImage w-auto max-w-[100%]`}
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={name}
                    variants={slideVariants}
                    initial={
                        direction === "right" ? "hiddenRight" : "hiddenLeft"
                    }
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
                    exit="exit"
                />
                <div
                    id={`Carousel${id}Buttons`}
                    className="CarouselButtons flex justify-between w-[100%]"
                >
                    <motion.div
                        id={`Carousel${id}LeftButton`}
                        className={`CarouselButton absolute left-16 sm:left-8 md:left-12 lg:left-16 top-[50%] rounded-full p-2`}
                        variants={slidersVariants}
                        whileHover="hover"
                        onClick={handlePrevious}
                    >
                        <FaChevronLeft
                            className="CarouselButtonSvg"
                            size={20}
                        />
                    </motion.div>

                    <motion.div
                        id={`Carousel${id}RightButton`}
                        className={`CarouselButton absolute right-16 sm:right-8 md:right-12 lg:right-16 top-[50%] rounded-full p-2`}
                        variants={slidersVariants}
                        whileHover="hover"
                        onClick={handleNext}
                    >
                        <FaChevronRight
                            className="CarouselButtonSvg"
                            size={20}
                        />
                    </motion.div>
                </div>
                <div
                    id={`Carousel${id}Indicator`}
                    className={`CarouselIndicator relative bottom-8 flex justify-center gap-2`}
                >
                    {images.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`CarouselDot bg-[#333] border-2 border-[#ff33dd] rounded-full w-[20px] h-[20px] sm:w-[10px] sm:h-[10px] md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px] ${
                                currentIndex === index ? "active" : ""
                            }`}
                            initial="initial"
                            animate={currentIndex === index ? "animate" : ""}
                            whileHover="hover"
                            variants={dotsVariants}
                            onClick={() => handleDotClick(index)}
                        ></motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    );
};
export default Carousel;
