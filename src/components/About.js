import React from "react";
import targetElement from "../hooks/targetElement";

const About = () => {
    //use custom hook created in targetElement.js to add intersection observer
    //and add the required styling
    
    const [containerRef1, isVisible1] = targetElement();
    const [containerRef2, isVisible2] = targetElement({
        rootMargin: '0px 0px 110% 0px',
        //fix threshold on small device
        threshold: (window.innerWidth >= 768 ? 1.0 : 0.1)
      });
    const fadeOne = isVisible1 ? 'appear' : '';
    const fadeTwo = isVisible2 ? 'appear' : '';

    return(
        <section id="about">
            <div className="about-container margin-container padded-container">
                <div ref={containerRef1} className={`h2-heading fade-in ${fadeOne}`} >
                    <div className="heading-and-image">
                        <h2>About Me</h2>
                    </div>
                </div>
                
                <div ref={containerRef2}  className={`about-box-and-image fade-in ${fadeTwo}`}>
                    <div className="about-box">
                        <p>
                            Hello! I am Praise Immanuel. I love creating things that make daily living easier and more productive. 
                        </p>

                        <p>
                            I specialise in creating and maintaining responsive web-based applications.
                        </p>

                        <p>
                        I am passionate about learning and development with a desire to provide solutions that make the customer experience memorable and lovable,  while maintaining a healthy balance between functionality and visual impact in all my work.
                        </p>

                        <p>
                        Currently, I work with technologies such as HTML, CSS, Bootstrap, JavaScript, jQuery, React.js and Redux.
                        </p>
                    </div>

                    <div className="about-img">
                        <img src="/image/about-img-alt.png" alt="" />
                    </div>
                </div>    
            </div>
        </section>
    );
}

export default About;