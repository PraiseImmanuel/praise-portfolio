import React from "react";

const About = () => {
    return (
        <section id="about">
            <div className="about-container margin-container">
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
                                    I'm Praise Immanuel, a front-end developer
                                    based in Nigeria. With a knack for crafting
                                    clean designs and seamless user experiences,
                                    I specialize in bringing digital ideas to
                                    life.
                                </p>

                                <p>
                                    Creating user-interfaces and making them
                                    responsive across devices is my expertise. I
                                    thrive in collaborative environments,
                                    working closely with designers and
                                    developers to create great projects.
                                </p>

                                <p>
                                    I am currently open to entry roles and
                                    internship opportunities.
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
