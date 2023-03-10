import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
            <span className="white">Copyright © {year} <Link href="/">danny</Link> - All rights reserved.</span>
            <ul className="flex">
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <Image src="/portfolio/icons/facebook.svg" width={24} height={24} alt="facebook-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <Image src="/portfolio/icons/instagram.svg" width={24} height={24} alt="instagram-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
                        <Image src="/portfolio/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/dannycheungho" target="_blank" rel="noreferrer">
                        <Image src="/portfolio/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                        <Image src="/portfolio/icons/youtube.svg" width={24} height={24} alt="youtube-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}