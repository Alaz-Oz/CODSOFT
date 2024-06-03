import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
    faEnvelope,
    faCopyright,
} from "@fortawesome/free-regular-svg-icons";

import {
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "devicon/devicon.min.css";
import "./style.css";
import fishInsulterImage from "./fish_insulter.jpeg";
import quickNotesImage from "./quick_notes.jpeg";
import verletModelImage from "./verlet_model.jpeg";

function App() {
    const scrollToElement = (id) => {
        const nav = document.querySelector("nav");
        const offset = nav.getBoundingClientRect().height;
        const element = document.getElementById(id);
        if (element) {
            const y =
                element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const Typed = require("typed.js");
        const multitext = document.querySelector(".multitext");
        multitext.innerText = ""; // Remove the default text
        new Typed(".multitext", {
            strings: ["Developer", "Designer", "Youtuber", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1500,
            loop: true,
            showCursor: false,
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

        // Skills highlight
        const skills = document.querySelector(".skills");
        const collections = document.querySelectorAll(".collection");
        collections.forEach((collection) => {
            collection.addEventListener("mouseover", function () {
                Array.from(skills.children).forEach((skill) =>
                    skill.classList.remove("active")
                );
                collections.forEach((collection) =>
                    collection.classList.remove("mark")
                );
                this.classList.add("mark");
                let x = this;
                while (x.nextElementSibling) {
                    x = x.nextElementSibling;
                    if (x.classList.contains("collection")) {
                        break;
                    }
                    x.classList.add("active");
                }
            });
            collection.addEventListener("mouseout", function () {
                Array.from(skills.children).forEach((skill) =>
                    skill.classList.remove("active")
                );
                collections.forEach((collection) =>
                    collection.classList.remove("mark")
                );
            });
        });
    }, []);

    return (
        <>
            <nav>
                <div>
                    <div className="logo">
                        Alaz<span>Oz</span>
                    </div>
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
                        <a onClick={() => scrollToElement("skills")}>
                            Skills
                            <span>/{">"}</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="document">
                <div className="timeline">
                    <div className="scrollhint">Scroll</div>
                </div>
                <div className="node-1"></div>

                <div className="header">
                    <div className="topline">Hi, My name is</div>
                    <h1 className="name">
                        Afroz <span>Alam</span>
                    </h1>
                    <div className="topline sub-line">
                        I'm <span className="multitext">Developer</span>
                    </div>
                    <div>
                        <a
                            className="btn"
                            onClick={() => window.print()}
                        >
                            Resume
                        </a>
                    </div>
                </div>
                <div id="content">
                    <section id="about">
                        <h2>About</h2>
                        <p>
                            I am a passionate software developer with a focus on
                            Android app development, game development, and
                            personal projects. As a fresher in the industry, I
                            have gained valuable experience by working on
                            various Android app projects and games. I have also
                            collaborated with teams on different projects,
                            showcasing excellent teamwork and communication
                            skills.
                        </p>
                        <p>
                            Currently, I am the founder of{" "}
                            <a
                                href="http://2G-Labs.github.io"
                                target="_blank"
                                className="highlight"
                            >
                                2G-Labs
                            </a>
                            , a software development organization that
                            specializes in providing solutions to real-life
                            problems through technology. 2G-Labs focuses on
                            documentation and research to ensure high-quality
                            software solutions.
                        </p>
                    </section>
                    <section id="projects">
                        <h2>Projects</h2>
                        <div className="grid">
                            <div className="container">
                                <div className="tag">#001</div>
                                <div className="item">
                                    <img
                                        src={fishInsulterImage}
                                        alt="Fish Insulter"
                                    />
                                    <div>
                                        <a href="https://github.com/Alaz-Oz/fish-insulter">
                                            Fish Insulter
                                        </a>
                                        <p>
                                            FishInsulter is a fish shell plugin
                                            that adds humor to the terminal by
                                            insulting you when you type a
                                            command wrong.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="tag">#002</div>
                                <div className="item">
                                    <img
                                        src={quickNotesImage}
                                        alt="Quick Notes"
                                    />
                                    <div>
                                        <a href="https://github.com/Alaz-Oz/quickNotes">
                                            Quick Notes
                                        </a>
                                        <p>
                                            QuickNotes is a note-taking app that
                                            allows you to quickly jot down notes
                                            and save them for later. It is a
                                            simple and easy-to-use app that
                                            helps you stay organized. It works
                                            on the principle of speed and
                                            modularity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="tag">#003</div>
                                <div className="item">
                                    <img
                                        src={verletModelImage}
                                        alt="Verlet Model"
                                    />
                                    <div>
                                        <a>Verlet Model</a>
                                        <p>
                                            VerletModel is a physics engine that
                                            simulates the behavior of particles
                                            in a 2D space. It is based on the
                                            Verlet integration method and is
                                            used to create realistic simulations
                                            of physical systems. This project
                                            aims to research the Verlet
                                            integration
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="skills">
                        <h2>Skills</h2>
                        <div className="skills">
                            <div className="collection">
                                <p>Frontend dev</p>
                            </div>

                            <div>
                                <i className="devicon-html5-plain"></i>
                                <p>HTML</p>
                            </div>
                            <div>
                                <i className="devicon-css3-plain"></i>
                                <p>CSS</p>
                            </div>
                            <div>
                                <i className="devicon-javascript-plain"></i>
                                <p>JavaScript</p>
                            </div>

                            <div className="collection">
                                <p>Backend dev</p>
                            </div>

                            <div>
                                <i className="devicon-nodejs-plain-wordmark"></i>
                                <p>NodeJS</p>
                            </div>
                            <div>
                                <i className="devicon-php-plain"></i>
                                <p>PHP</p>
                            </div>
                            <div>
                                <i className="devicon-webpack-plain"></i>
                                <p>Webpack</p>
                            </div>
                            <div>
                                <i className="devicon-python-plain"></i>
                                <p>Python</p>
                            </div>

                            <div className="collection">
                                <p>Android dev</p>
                            </div>

                            <div>
                                <i className="devicon-java-plain"></i>
                                <p>Java</p>
                            </div>
                            <div>
                                <i className="devicon-kotlin-plain"></i>
                                <p>Kotlin</p>
                            </div>
                            <div>
                                <i className="devicon-android-plain"></i>
                                <p>Android App</p>
                            </div>

                            <div className="collection">
                                <p>Software dev</p>
                            </div>
                            <div>
                                <i className="devicon-c-plain"></i>
                                <p>C lang</p>
                            </div>

                            <div>
                                <i className="devicon-cplusplus-plain"></i>
                                <p>C++</p>
                            </div>
                            <div>
                                <i className="devicon-lua-plain"></i>
                                <p>Lua</p>
                            </div>
                            <div>
                                <i className="devicon-bash-plain"></i>
                                <p>Shell Scripting</p>
                            </div>
                            <div>
                                <i className="devicon-linux-plain"></i>
                                <p>Linux</p>
                            </div>
                            <div>
                                <i className="devicon-archlinux-plain"></i>
                                <p>Arch Linux</p>
                            </div>

                            <div className="collection">
                                <p>Databases</p>
                            </div>

                            <div>
                                <i className="devicon-mysql-plain"></i>
                                <p>SQL</p>
                            </div>
                            <div>
                                <i className="devicon-mongodb-plain"></i>
                                <p>MongoDB</p>
                            </div>

                            <div className="collection">
                                <p>Dev Tools</p>
                            </div>

                            <div>
                                <i className="devicon-neovim-plain"></i>
                                <p>Neovim</p>
                            </div>
                            <div>
                                <i className="devicon-visualstudio-plain"></i>
                                <p>Visual Studio</p>
                            </div>
                            <div>
                                <i className="devicon-figma-plain"></i>
                                <p>Figma</p>
                            </div>
                            <div>
                                <i className="devicon-git-plain"></i>
                                <p>Git</p>
                            </div>
                            <div>
                                <i className="devicon-firebase-plain"></i>
                                <p>Firebase</p>
                            </div>
                        </div>
                    </section>
                </div>
                <footer>
                    <a href="https://github.com/Alaz-Oz" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />{" "}
                    </a>{" "}
                    <a href="https://linkedin.com/in/Alaz-Oz" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />{" "}
                    </a>{" "}
                    <a href="https://instagram.com/Alaz.Oz" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />{" "}
                    </a>{" "}
                    <div className="mail">
                        <a href="mailto:asteroidalaz@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />{" "}
                            asteroidalaz@gmail.com
                        </a>
                    </div>
                    <div className="copyright">
                        <FontAwesomeIcon icon={faCopyright} /> 2024 Afroz Alam
                    </div>
                    <div>Version 1.0</div>
                </footer>
            </div>
        </>
    );
}

const root = document.createElement("div");
document.body.appendChild(root);
createRoot(root).render(<App />);
