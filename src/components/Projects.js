import React from "react";
import targetElement from "../hooks/targetElement";

//render any image inside the project container
const renderImage = (src, alt) => {
    return <img src={src} alt={alt} />
}

//render a project title
const renderTitle = (title) => {
    return <h3>{title}</h3>
}

//render a project description
const renderDescription = (description) => {
    return <p>{description}</p>
}

//render links to a project's code and website
const renderProjectLink = (gitLink, siteLink) => {
    return(
        <div className="project-links">
            <a className="button" href={gitLink} target="_blank" rel="noopener noreferrer">View Code</a>
            <a className="button" href={siteLink} target="_blank" rel="noopener noreferrer">View Website</a>
        </div>
    );
}

const Projects = () => {
    const [containerRef1, isVisible1] = targetElement();
    const [containerRef2, isVisible2] = targetElement({
        rootMargin: '0px 0px 65% 0px',
        threshold: 1.0
      });
    const fadeOne = isVisible1 ? 'appear' : '';
    const fadeTwo = isVisible2 ? 'appear' : '';

    return(
        <section id="projects">
            <div className="margin-container padded-container">
                <div ref={containerRef1} className={`h2-heading fade-in ${fadeOne}`} >
                    <div className="heading-and-image">
                        <h2>Recent Projects</h2>
                        <a target="_blank" href="https://icons8.com/icon/aJPLw-4jUCR3/man-technologist" rel="noopener noreferrer">
                            <img src="/image/bag-desktop.png" alt="bag icon" className="icon-photo" />
                        </a>
                    </div>
                </div>

                <div ref={containerRef2} className={`project-container fade-in ${fadeTwo}`}>
                    <div className="project-container-inner">
                        <div className="project-image">
                            <a target="_blank" href="https://advice-website.netlify.app" rel="noopener noreferrer" className="image-link-overlay">
                                <div className="filter">
                                    {renderImage("/image/project1.jpg", "Project one")}
                                </div>
                            </a>
                        </div>

                        <div className="project-title-and-description">
                            <div className="project-number">
                                {renderImage("/image/one-stroke.png" , "")}
                            </div>
                            <div className="project-title">
                                {renderTitle('Advice Generator App')}
                            </div>

                            <div className="project-description">
                                {renderDescription(`
                                    A web application that generates
                                    random advice with nicely 
                                    crafted interactivity.
                                `)}
                            </div>

                            {renderProjectLink("https://github.com/PraiseImmanuel/advice-web-app", "https://advice-website.netlify.app")}
                        </div>
                    </div>

                </div>

            </div>    
        </section>
    );
}

export default Projects;