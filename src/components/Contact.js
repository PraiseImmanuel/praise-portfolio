import React, { useRef, useState } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
    //use custom hook created in targetElement.js to add intersection observer
    //and add the required styling

    // state properties for controlling input
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // state properties for rendering sumit report
    const [isEmpty, setIsEmpty] = useState(false);
    const [notSent, setNotSent] = useState(false);
    const [isSent, setIsSent] = useState(false);

    // remove submit report message when any input box is clicked
    const removeReport = () => {
        setIsEmpty(false);
        setIsSent(false);
        setNotSent(false);
    };

    //use emailjs to send message to email
    const form = useRef();
    const sendEmail = (event) => {
        // render submit report for empty field
        if (name === "" || email === "" || subject === "" || message === "") {
            setIsEmpty(true);
        } else {
            event.preventDefault();

            emailjs
                .sendForm(
                    "service_0akq076",
                    "template_hb3gmfa",
                    form.current,
                    "OQ3p-qGFWrHW_RoYc"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        // render submit report when message is successfully sent
                        setIsSent(true);
                    },
                    (error) => {
                        console.log(error.text);
                        // render submit report when unable to send message
                        setNotSent(true);
                    }
                );
        }
    };

    // render an input box
    const renderInput = (placeholder, classname, value, onChange) => {
        return (
            <div className={`input-box ${classname}`}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    name={classname}
                    required
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        );
    };

    return (
        <section id="contact">
            <div className="contact-container margin-container">
                <div className="h2-heading">
                    <div className="heading-and-image">
                        <h2>Contact Me</h2>
                    </div>
                </div>

                <form ref={form} autoComplete="off" onSubmit={sendEmail}>
                    <div className="form-and-send-button">
                        <div className="form-container" onClick={removeReport}>
                            <div className="full-width">
                                {renderInput("Name", "name", name, setName)}

                                {renderInput(
                                    "emailaddress@email.com",
                                    "email",
                                    email,
                                    setEmail
                                )}
                            </div>

                            <div>
                                {renderInput(
                                    "Subject",
                                    "subject",
                                    subject,
                                    setSubject
                                )}
                            </div>

                            <div className="text-area">
                                <textarea
                                    name="message"
                                    value={message}
                                    onChange={(event) =>
                                        setMessage(event.target.value)
                                    }
                                    required
                                    placeholder="Message"
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <div
                                className={`error-message ${
                                    isEmpty ? "display-message" : ""
                                }`}
                            >
                                Please fill out required field(s)
                            </div>

                            <div
                                className={`error-message ${
                                    notSent ? "display-message" : ""
                                }`}
                            >
                                Please use twiiter handle
                            </div>

                            <div
                                className={`sent-message ${
                                    isSent ? "display-message" : ""
                                }`}
                            >
                                Message delivered
                            </div>
                        </div>

                        <div className="send">
                            <button onClick={sendEmail} className="button">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
