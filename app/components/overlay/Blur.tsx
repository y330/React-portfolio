import React, { useState, useEffect } from "react";

const Blur = () => {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    const handleScroll = () => {
        // @ts-expect-error dom
        const scrollY = window.scrollY;
        // @ts-expect-error dom
        const windowHeight = window.innerHeight;
        // @ts-expect-error dom
        const bodyHeight = document.body.clientHeight;
        const bottomThreshold = bodyHeight - windowHeight - 25;

        const opacity = scrollY >= bottomThreshold ? 0 : 1;
        setScrollOpacity(opacity);
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            handleScroll();
        };
        // @ts-expect-error dom
        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            // @ts-expect-error dom
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);

    return (
        <div
            className={`fixed inset-0 p-1 w-full h-full backdrop-blur-[8px] pointer-events-none z-50 opacity-${scrollOpacity} overlay-mask`}
        />
    );
};

export default Blur;
