import React, { useEffect } from "react";
import { useAnimation, motion, Variants, Transition } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectProps } from "../components/work/projectDetails";

type AnimatedProps = {
    className?: string;
    delay?: number;
    stepSize?: number;
    children: React.ReactNode;
};

const Animated: React.FC<AnimatedProps> = ({
    className,
    children,
}) => {
    return (
        <div className={className}>
            {React.Children.map(children, (child, index) => {
                const project = child as React.ReactElement<ProjectProps>;
                return (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            // x:  project.props["id"] % 2 == 0 ? 100 : -100 ,
                            y: 100
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                        }}
                    >
                        {project}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default Animated;
