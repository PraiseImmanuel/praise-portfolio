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

const renderProject = (siteLink, image, imageAlt, projectNum, title, descrip, codeLink ) => {
    return(
            <div className="project-container-inner">
                <div className="project-image">
                    <a target="_blank" href={siteLink} rel="noopener noreferrer" className="image-link-overlay">
                        <div className="filter">
                            {renderImage(image, imageAlt)}
                        </div>
                    </a>
                </div>

                <div className="project-title-and-description">
                    <div className="project-number">
                        {renderImage(projectNum, "")}
                    </div>
                    <div className="project-title">
                        {renderTitle(title)}
                    </div>

                    <div className="project-description">
                        {renderDescription(descrip)}
                    </div>

                    {renderProjectLink(codeLink, siteLink)}
                </div>
            </div>
    );
}


const Projects = () => {
    const [containerRef1, isVisible1] = targetElement();

    const [containerRef2, isVisible2] = targetElement({
        rootMargin: '0px 0px 65% 0px',
        threshold: 1.0
      });

    const [containerRef3, isVisible3] = targetElement({
        rootMargin: '0px 0px 65% 0px',
        threshold: 1.0
    });  
    
    const fadeOne = isVisible1 ? 'appear' : '';
    const fadeTwo = isVisible2 ? 'appear' : '';
    const fadeThree = isVisible3 ? 'appear' : '';

    return(
        <section id="projects">
            <div className="margin-container padded-container">
                <div ref={containerRef1} className={`h2-heading fade-in ${fadeOne}`} >
                    <div className="heading-and-image">
                        <h2>Recent Projects</h2>
                    </div>
                </div>
                <div ref={containerRef2} className={`project-container fade-in ${fadeTwo}`}>
                    {renderProject(
                        "https://advice-website.netlify.app",
                        "/image/project1.jpg",
                        "Project one",
                        "/image/one-stroke.png",
                        'Advice Generator App',
                        `
                        A web application that generates
                        random advice with nicely 
                        crafted interactivity.
                        `, 
                        "https://github.com/PraiseImmanuel/advice-web-app"
                    )}
                </div>

                <div ref={containerRef3} className={`project-container fade-in ${fadeThree}`}>
                    {renderProject(
                        "https://praiseimmanuel.github.io/ecommerce-product/",
                        "/image/project2.jpg",
                        "Project two",
                        "/image/two-stroke.png",
                        'E-commerce website',
                        `
                        A functional website showcasing 
                        products for sale developed with vanila javascript.
                        `, 
                        "https://github.com/PraiseImmanuel/ecommerce-product"
                    )}
                </div>
            </div>    
        </section>
    );
}

export default Projects;