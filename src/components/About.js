import React from "react";

const About = () => {
    return (
        <section id="about">
            <div className="about-container margin-container padded-container">
                <div className="h2-heading">
                    <div className="heading-and-image">
                        <h2>About Me</h2>
                    </div>
                </div>

                <div className="about-box-and-image">
                    <div className="about-box">
                        <p>
                            Hello! I am Praise Immanuel. I love creating things
                            that make daily living easier and more productive.
                        </p>

                        <p>
                            I specialise in creating and maintaining responsive
                            web-based applications.
                        </p>

                        <p>
                            Currently, I work with technologies such as HTML,
                            CSS, Bootstrap, JavaScript, jQuery, React.js and
                            Redux.
                        </p>
                    </div>

                    <div className="about-img">
                        <img src="/image/about-img-alt.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
