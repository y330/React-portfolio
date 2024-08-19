"use client";
import React, { useState, useEffect, useRef } from "react";
// import { ScrollerMotion } from "scroller-motion";
import { useEventListener } from "usehooks-ts";

import PreLoader from "./components/other/PreLoader";
import useBlobity from "blobity/lib/react/useBlobity";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Skills from "./sections/Skills";
import Head from "next/head";

export default function Home() {
    const windowRef = useRef<HTMLElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // @ts-expect-error dom
        window.scrollTo({
            top: 0,
            left: 0,
        });
        // @ts-expect-error dom
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEventListener(
        "resize",
        () => {
            // @ts-expect-error dom
            setIsMobile(window.innerWidth < 768);
        },
        windowRef
    );

    const blobity = useBlobity({
        licenseKey: "opensource",
        focusableElementsOffsetX: 5,
        focusableElementsOffsetY: 5,
        //color: '#666666',
        color: "#66666640",
        dotColor: "#ff33dd",
        invert: false,
        focusableElements:
            "[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
        font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
        fontSize: 14,
        fontWeight: 900,
        opacity: 0.3,
        fontColor: "#ffffff",
        zIndex: 35,
        size: 50,
        radius: 5,
        magnetic: false,
    });

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <div id="HTML" ref={windowRef}>
                <PreLoader />
                <Blur />
                <Color />
                <NavBar />
                {/*<ScrollerMotion // Weird, stuff happening with this
                disabled={isMobile}
                spring={{ mass: 1, stiffness:800, bounce: 300, damping: 100 }}
            >*/}
                <main className="flex flex-col items-center justify-center bg-black">
                    <Hero />
                    <About />
                    <Work />
                    <Skills />
                    {/* <Blog /> TODO: Low Priority */}
                    <Contact />
                    <Footer />
                </main>
                {/*</ScrollerMotion>*/}
            </div>
        </>
    );
}
