import React from "react";
import targetElement from "../hooks/targetElement";

const About = () => {
    const [containerRef1, isVisible1] = targetElement();
    const [containerRef2, isVisible2] = targetElement({
        rootMargin: '0px 0px 88% 0px',
        threshold: 1.0
      });
    const [containerRef3, isVisible3] = targetElement({
        rootMargin: '0px 0px 88% 0px',
        threshold: 1.0
      });  
    const fadeOne = isVisible1 ? 'appear' : '';
    const fadeTwo = isVisible2 ? 'appear' : '';
    const fadeThree = isVisible3 ? 'appear' : '';
    return(
        <section id="about">
            <div className="about-container margin-container padded-container">
                <div ref={containerRef1} className={`h2-heading fade-in ${fadeOne}`} >
                    <div className="heading-and-image">
                        <h2>About Me</h2>
                        <a target="_blank" href="https://icons8.com/icon/aJPLw-4jUCR3/man-technologist" rel="noopener noreferrer">
                            <img src="/image/programmer-desktop.png" alt="Man Techonologist" className="icon-photo" />
                        </a>
                    </div>
                </div>
                
                <div className="about-box-and-image">
                    <div ref={containerRef2} className={`about-box fade-in ${fadeTwo}`}>
                        <p>
                            Hello! I am Praise Immanuel. I love creating things that makes daily living easier and more productive. 
                        </p>

                        <p>
                            I specialise in creating and maintaining responsive web-based applications. I am passionate about communicating and building brand integrity, while maintaining a healthy balance between functionality and visual impact in all my work. 
                        </p>

                        <p>
                        Currently, I work with technologies such as HTML, CSS, Bootstrap, JavaScript, jQuery, React.js and Redux.
                        </p>
                    </div>

                    <div ref={containerRef3} className={`about-img fade-in ${fadeThree}`}>
                        <img src="/image/about-img-alt.png" alt="" />
                    </div>
                </div>    
            </div>
        </section>
    );
}

export default About;