import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="System Design"
                        icon="/portfolio/icons/design.svg"
                        description="I create design system with unique ideas."
                        projects={7} />
                    <AboutCard
                        title="Web Design"
                        icon="/portfolio/icons/code.svg"
                        description="I develop Back-End with coding super smooth."
                        projects={10} />
                    <AboutCard
                        title="Backend Service"
                        icon="/portfolio/icons/phone.svg"
                        description="I develop multi-backend service."
                        projects={7} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m danny</h1>
                    <h3 className="white">Design is not just what it looks like. Design is how it works!</h3>
                    <p className="gray">Hi, I&apos;m a backend programmer with 2 years of experience, specializing in Spring Boot for developing scalable and robust web applications. I have strong experience in web technologies, RESTful API design, and optimizing code performance. I&apos;ve worked on various projects from small prototypes to enterprise applications, and I&apos;m comfortable working with both SQL and NoSQL databases, as well as integrating with third-party APIs. I value clean, modular, and maintainable code, teamwork, and staying up-to-date with the latest developments in the field.</p>
                </div>
            </div>

            <div className="flex partners justify-space">
                <Image src="/portfolio/images/language/java.png" height={75} width={180} alt="wallety" />
                <Image src="/portfolio/images/language/nodejs.png" height={45} width={180} alt="artisty" />
                <Image src="/portfolio/images/language/springboot.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/portfolio/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/portfolio/images/partners/telefy.png" height={45} width={180} alt="telefy" />
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}