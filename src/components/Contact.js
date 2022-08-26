import React, { useState } from "react";
import targetElement from "../hooks/targetElement";

const Contact = () => {
    const [containerRef1, isVisible1] = targetElement();
    const [containerRef2, isVisible2] = targetElement({
        rootMargin: '0px 0px 85% 0px',
        threshold: 1.0
      });
    const fadeOne = isVisible1 ? 'appear' : '';
    const fadeTwo = isVisible2 ? 'appear' : '';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const renderInput = (placeholder, classname, value, onChange) => {
        return(
            <div className={`input-box ${classname}`}>
                <input 
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}  
                />
            </div>
        );
    }

    return(
        <section id="contact">
            <div className="contact-container margin-container padded-container">
                <div ref={containerRef1} className={`h2-heading fade-in ${fadeOne}`} >
                        <div className="heading-and-image">
                            <h2>Contact Me</h2>
                        </div>
                </div>

                <form ref={containerRef2} autoComplete="off" className={`fade-in ${fadeTwo}`}>
                    <div className="form-and-send-button">
                        <div className="form-container">
                            <div className="full-width">
                                {renderInput(
                                    'Name',
                                    'name',
                                    name,
                                    setName
                                )}   

                                {renderInput(
                                    'emailaddress@email.com',
                                    'email',
                                    email,
                                    setEmail
                                )}
                            </div>

                            <div>
                                {renderInput(
                                'Subject',
                                'subject',
                                subject,
                                setSubject
                                )}
                            </div>

                            <div className="text-area">
                                <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Message">
                                </textarea>
                            </div>

                        </div>  

                        <div className="send">
                            <a href="/" className="button">Send Message</a>
                        </div>
                    </div>    
                </form>

            </div>
        </section>
    );
}

export default Contact;