import React from "react";
import targetElement from "../hooks/targetElement";

const Projects = () => {
    const [containerRef1, isVisible1] = targetElement();
    const [containerRef2, isVisible2] = targetElement({
        rootMargin: '0px 0px 65% 0px',
        threshold: 1.0
      });
    const fadeOne = isVisible1 ? 'appear' : '';
    const fadeTwo = isVisible2 ? 'appear' : '';

    return(
        <section>
            <div className="margin-container">
                <div ref={containerRef1} className={`h2-heading fade-in ${fadeOne}`} >
                    <div className="heading-and-image">
                        <h2>Recent Projects</h2>
                        <a target="_blank" href="https://icons8.com/icon/aJPLw-4jUCR3/man-technologist">
                            <img src="/image/bag-desktop.png" alt="bag icon" className="icon-photo" />
                        </a>
                    </div>
                </div>

                <div ref={containerRef2} className={`project-container fade-in ${fadeTwo}`}>
                    <div className="project-container-inner">
                        <div className="project-image">
                            <a className="image-link-overlay">
                                <div className="filter">
                                    <img src="/image/project1.jpg" alt="Project one" />
                                </div>
                            </a>
                        </div>

                        <div className="project-title-and-description">
                            <div className="project-number">
                                <img src="/image/one-stroke.png" alt=""/>
                            </div>
                            <div className="project-title">
                                <h3>Advice Generator App</h3>
                            </div>

                            <div className="project-description">
                                <p>
                                    A web application that generates 
                                    random advice with nicely 
                                    crafted interactivity.
                                </p>
                            </div>

                            <div className="project-links">
                                <div className="project-link">
                                    <a href="">View Code</a>
                                </div>

                                <div className="project-link">
                                    <a href="">View Website</a>
                                </div>
                            </div>                        
                        </div>
                    </div>

                </div>

            </div>    
        </section>
    );
}

export default Projects;