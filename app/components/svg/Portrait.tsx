import React from "react";
import Image from "next/image";

interface PortraitProps {
    width?: number;
    height?: number;
}

const Portrait: React.FC<PortraitProps> = ({ width = 100, height = 100 }) => {
    return (
        <Image
            className={`w-${width} h-${height}`}
            src="/suit_flick.png"
            alt="Portrait"
            width={width}
            height={height}
        />
    );
};

export default Portrait;
