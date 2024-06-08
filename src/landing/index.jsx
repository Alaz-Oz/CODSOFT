import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
    faEnvelope,
    faCopyright,
    faArrowAltCircleDown,
} from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../portfolio/style.css"; // Using the same CSS file as the portfolio
import "./custom.css";
import alaz_oz from "./alaz_oz.ico";
import pattern from "./pattern.jpeg";
import todo from "./todo.jpeg";
import dsa from "./dsa.jpeg";

const scrollToElement = (id) => {
    const nav = document.querySelector("nav");
    const offset = nav.getBoundingClientRect().height;
    const element = document.getElementById(id);
    if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};
function LandingPage() {
    useEffect(() => {
        const Typed = require("typed.js");
        const multitext = document.querySelector(".multitext");
        multitext.innerText = ""; // Remove the default text
        new Typed(".multitext", {
            strings: ["", "Labs"],
            typeSpeed: 200,
            backSpeed: 150,
            backDelay: 5000,
            loop: false,
            showCursor: true,
        });

        // Nav drawer
        const navToggle = document.querySelector(".nav-toggle");
        const navlist = document.querySelector(".navlist");

        // Toggle navigation when nav toggle is clicked
        navToggle.addEventListener("click", function (event) {
            navlist.classList.toggle("show");
            event.stopPropagation(); // Prevent event from propagating to document
        });

        // Hide navigation when something outside nav is clicked
        document.addEventListener("click", function () {
            navlist.classList.remove("show");
        });
    }, []);
    return (
        <>
            <NavBar />
            <HeroSection />
            <div className="document">
                <About />
                <ProjectsSection />
                <MembersSection />
            </div>
            <Footer />
        </>
    );
}
function ProjectsSection() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="grid">
                <ProjectItem
                    tag="#001"
                    title="DSA"
                    description="A collection of data structures and algorithms implemented in various programming languages. This project is a great resource for learning and practicing data structures and algorithms."
                    img={dsa}
                    link="https://github.com/2G-Labs/DSA"
                />
                <ProjectItem
                    tag="#002"
                    title="Todo App"
                    description="An app to manage your tasks and do a lot more than that. Focusses on UI, animations and user experience."
                    img={todo}
                    link="https://github.com/2G-Labs/Pattern-Experiment"
                />
                <ProjectItem
                    tag="#003"
                    title="Pattern Experiment"
                    description="This is an awesome project"
                    img={pattern}
                    link="https://github.com/2G-Labs/Pattern-Experiment"
                />
            </div>
        </section>
    );
}

function ProjectItem({ tag, img, title, description, link }) {
    return (
        <div className="container">
            <div className="tag">{tag}</div>
            <div className="item">
                <img src={img} alt={title} />
                <div>
                    <a href={link}>{title}</a>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

function MembersSection() {
    return (
        <section id="team">
            <h2>Team</h2>
            <div className="members">
            <a className="member" href="https://github.com/Alaz-Oz">
                <img
                    src={alaz_oz}
                    alt="Alaz Oz"
                />
                <h3>Alaz Oz</h3>
            </a>
            <a className="member" href="https://github.com/2G-Afroz">
                <img
                    src={alaz_oz}
                    alt="Afroz"
                />
                <h3>Afroz Alam</h3>
            </a>
            <a className="member" href="https://github.com/2G-Afroz">
                <img
                    src={alaz_oz}
                    alt="2G Afroz"
                />
                <h3>Linus Torvalds</h3>
            </a>
            <a className="member" href="https://github.com/2G-Afroz">
                <img
                    src={alaz_oz}
                    alt="2G Afroz"
                />
                <h3>Dummy</h3>
            </a>
        </div>
        </section>
    );
}

function HeroSection() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div id="hero">
            <span>Welcome to</span>
            <div className="logo hero-title">
                2G<span className="multitext">Labs</span>
            </div>
            <div>Beyond the code.</div>
            <div className={`scrolldownhint ${isScrolled ? "hidden" : ""}`}>
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
                <span>Scroll</span>
            </div>
        </div>
    );
}
function About() {
    return (
        <section id="about">
            <h2>About</h2>
            <p>
                At 2G Labs, we believe in harnessing the power of technology to
                create impactful and practical solutions. Our team is committed
                to conducting in-depth research and applying cutting-edge
                technologies to develop software that tackles various real-world
                problems across different domains.
            </p>
            <p>
                Our primary mission is to leverage our expertise and passion for
                technology to provide efficient, scalable, and user-centric
                software solutions. We strive to address pressing issues and
                improve the lives of individuals and communities through our
                innovative software applications.
            </p>
        </section>
    );
}
function Footer() {
    return (
        <footer>
            <a href="https://github.com/2G-Labs" target="_blank">
                <FontAwesomeIcon icon={faGithub} />{" "}
            </a>{" "}
            <a href="https://linkedin.com/in/2G-Labs" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />{" "}
            </a>{" "}
            <div className="mail">
                <a href="mailto:2g.oz.labs@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> 2g.oz.labs@gmail.com
                </a>
            </div>
            <div className="copyright">
                <FontAwesomeIcon icon={faCopyright} /> 2024 Afroz Alam
            </div>
            <div>Version 1.0</div>
        </footer>
    );
}
function NavBar() {
    return (
        <nav>
            <div>
                <Logo />
                <button className="nav-toggle"></button>
            </div>
            <ul className="navlist">
                <li>
                    <a onClick={() => scrollToElement("about")}>
                        About
                        <span>/{">"}</span>
                    </a>
                </li>
                <li>
                    <a onClick={() => scrollToElement("projects")}>
                        Projects
                        <span>/{">"}</span>
                    </a>
                </li>
                <li>
                    <a onClick={() => scrollToElement("team")}>
                        Team
                        <span>/{">"}</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

function Logo() {
    return (
        <div className="logo">
            2G<span>Labs</span>
        </div>
    );
}

const root = document.createElement("div");
document.body.appendChild(root);
createRoot(root).render(<LandingPage />);
