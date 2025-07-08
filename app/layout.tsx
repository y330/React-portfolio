import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://yonah.vercel.app/"),
    title: "Yonah Aviv - Software Developer",
    description:
        "Software Developer. Passionate about making an impact through technology.",
    generator: "Next.js",
    applicationName: "Yonah Aviv",
    keywords: [
        "Yonah Aviv",
        "Yonah",
        "Aviv",
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "nextjs",
        "svelte",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "toronto",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Yonah Aviv - Software Developer",
        description:
            "Software Developer. Passionate about making an impact through technology.",
        url: "https://yonah.vercel.app",
        siteName: "YonahAviv",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Yonah Aviv - Developer and Entrepreneur",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Yonah Aviv - Software Developer",
        description:
            "Software Developer. Passionate about making an impact through technology.",
        creator: "Yonah Aviv",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
