import React from "react";
import targetElement from "../hooks/targetElement";

const Contact = () => {
    const [containerRef1, isVisible1] = targetElement();
    const [containerRef2, isVisible2] = targetElement({
        rootMargin: '0px 0px 85% 0px',
        threshold: 1.0
      });
    const fadeOne = isVisible1 ? 'appear' : '';
    const fadeTwo = isVisible2 ? 'appear' : '';

    const renderInput = (placeholder, classname) => {
        return(
            <div className={`input-box ${classname}`}>
                <input type="text" placeholder={placeholder} />
            </div>
        );
    }
    return(
        <div className="contact-container margin-container padded-box">
            <div ref={containerRef1} className={`h2-heading fade-in ${fadeOne}`} >
                    <div className="heading-and-image">
                        <h2>Contact Me</h2>
                    </div>
            </div>

            <form ref={containerRef2} autoComplete="off" className={`fade-in ${fadeTwo}`}>
                <div className="form-and-send-button">
                    <div className="form-container">
                        <div className="full-width">
                            {renderInput('Name', 'name')}
                            {renderInput('emailaddress@email.com', 'email')}
                        </div>

                        <div>
                            {renderInput('Subject', 'subject')}
                        </div>

                        <div className="text-area">
                            <textarea  placeholder="Message">
                            </textarea>
                        </div>

                    </div>  

                    <div className="send">
                        <a href="/" className="project-link">Send Message</a>
                    </div>
                </div>    
            </form>

        </div>
    );
}

export default Contact;