import React from "react";
import ImageCard from "./ImageCard";

const Home = () => {
    return(
        <section id="home">
            <div className="home-container">
                <div className="margin-container">
                    <div className="image-and-intro">
                        <ImageCard />
                        <section className="intro">
                            <h1 className="first-heading">Hello there <span role="img" className="wave" >👋</span>, I am </h1>

                            <div className="headings">
                                <h2 className="second-heading">Praise Immanuel</h2>
                                <h2 className="third-heading">A Frontend <span className="span-h2 gradient">Developer</span></h2>
                            </div>
                        </section>
                    </div>    
                </div>
                
                <div className="social-links animated-links">
                    <div className="line"></div>
                    <ul>
                        <li>
                            <a href="https://twitter.com/_PraiseImmanuel"  target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                <title>Twitter</title>
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/praise-immanuel-919b99209/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                                <title>LinkedIn</title>
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/PraiseImmanuel" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            </a>
                        </li>
                    </ul>

                    <div className="line"></div>
                </div>


                <div className="scroll-down-left">
                    <span className="animated-scroll-down">scroll down</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" className="" /></svg>
                </div>
            </div>
        </section>    
    );
}

export default Home;