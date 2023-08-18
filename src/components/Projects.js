import React from "react";

//render any image inside the project container
const renderImage = (src, alt) => {
    return <img src={src} alt={alt} />;
};

//render a project title
const renderTitle = (title) => {
    return <h3>{title}</h3>;
};

//render a project description
const renderDescription = (description) => {
    return <p>{description}</p>;
};

//render links to a project's code and website
const renderProjectLink = (gitLink, siteLink) => {
    return (
        <div className="project-links">
            <a
                className="button"
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                View Code
            </a>
            <a
                className="button"
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                View Website
            </a>
        </div>
    );
};

const renderProject = (
    siteLink,
    image,
    imageAlt,
    projectNum,
    title,
    descrip,
    codeLink
) => {
    return (
        <div className="project-container-inner">
            <div className="project-image">
                <a
                    target="_blank"
                    href={siteLink}
                    rel="noopener noreferrer"
                    className="image-link-overlay"
                >
                    <div className="filter">{renderImage(image, imageAlt)}</div>
                </a>
            </div>

            <div className="project-title-and-description">
                <div className="project-number">
                    {renderImage(projectNum, "")}
                </div>
                <div className="project-title">{renderTitle(title)}</div>

                <div className="project-description">
                    {renderDescription(descrip)}
                </div>

                {renderProjectLink(codeLink, siteLink)}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects">
            <div className="margin-container">
                <div className="strokes">
                    <div className="h2-heading">
                        <div className="heading-and-image">
                            <h2>Recent Projects</h2>
                        </div>
                    </div>

                    <div className="projects">
                        <div className="project-container">
                            {renderProject(
                                "https://electronic-gadgets.netlify.app",
                                "/image/electronic-gadgets-netlify-app.jpg",
                                "Project one",
                                "/image/one-stroke.png",
                                "E-gadgets Store",
                                `
                        An e-commerce store showcasing electronic gadgets
                         for sale, developed with React.js + Typescript.
                        `,
                                "https://github.com/PraiseImmanuel/e-gadget"
                            )}
                        </div>

                        <div className="project-container">
                            {renderProject(
                                "https://advice-website.netlify.app",
                                "/image/project1.jpg",
                                "Project one",
                                "/image/one-stroke.png",
                                "Advice Generator App",
                                `
                        A web application that generates
                        random advice with nicely 
                        crafted interactivity.
                        `,
                                "https://github.com/PraiseImmanuel/advice-web-app"
                            )}
                        </div>

                        <div className="projects">
                            <div className="project-container">
                                {renderProject(
                                    "https://metabnb-praise.netlify.app/",
                                    "/image/metabnb-praise-netlify-app.jpg",
                                    "Project two",
                                    "/image/one-stroke.png",
                                    "Metabnb",
                                    `
                                    Metabnb offers living spaces within the metaverse
                                    to users, interested in exploring virtual worlds.
                        `,
                                    "https://github.com/PraiseImmanuel/metabnb"
                                )}
                            </div>

                            <div className="project-container">
                                {renderProject(
                                    "https://praiseimmanuel.github.io/ecommerce-product/",
                                    "/image/project2.jpg",
                                    "Project two",
                                    "/image/two-stroke.png",
                                    "E-commerce website",
                                    `
                        A website showcasing 
                        products for sale developed with vanila javascript.
                        `,
                                    "https://github.com/PraiseImmanuel/ecommerce-product"
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
