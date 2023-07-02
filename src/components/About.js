import React from "react";

const About = () => {
    return (
        <section id="about">
            <div className="about-container margin-container padded-container">
                <div className="strokes">
                    <div className="h2-heading">
                        <div className="heading-and-image">
                            <h2>About Me</h2>
                        </div>
                    </div>

                    <div className="about-box-and-image">
                        <div className="about-box-border">
                            <div className="about-box">
                                <p>
                                    Hello there! I’m Praise and let me tell you,
                                    I'm all about snacks, whether it's fried,
                                    boiled, smoked, or raw; ‘Bros Otilor’
                                    <span
                                        role="img"
                                        className="wave"
                                        aria-label="wave"
                                    >
                                        😄
                                    </span>
                                    . My strongest hobby is adding color and
                                    creativity to the world, pixel after pixel.
                                </p>

                                <p>
                                    With a solid understanding of HTML, CSS, and
                                    JavaScript, I am always excited to dive into
                                    React and leverage its power to bring the
                                    wireframe of the UI/UX designer to life with
                                    any necessary technology or library like
                                    Framer Motion, Tailwind CSS, and Redux
                                    toolkit among others; as well as integrating
                                    APIs and collaborating cohesively with the
                                    backend team.
                                </p>

                                <p>
                                    I have a keen eye for detail and also have a
                                    rich experience in Graphic Design. I am
                                    eager to collaborate with experienced
                                    professionals and actively contribute to the
                                    success of innovative projects. I am
                                    currently open to entry roles and Internship
                                    opportunities.
                                </p>
                            </div>
                        </div>

                        <div className="about-img">
                            <img src="/image/about-img-alt.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
