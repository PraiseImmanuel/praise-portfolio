import React from "react";
import "../styles/UsedIntro.css";

const Intro = () => {
    return(
        <div id="animated-intro">
            <div className="fade-out">
                <div className="container">
                    <svg>
                        <filter id="gooey">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
                            <feColorMatrix values="
                                1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 20 -10
                            "></feColorMatrix>
                        </filter>
                    </svg>
                    <span className="first"></span>
                    <span className="second"></span>
                    <span className="third"></span>
                    <span className="fourth"></span>
                    <span className="fifth"></span>
                    <span className="sixth"></span>
                    <span className="seventh"></span>
                    <span className="eighth"></span>
                    <span className="rotate rotate-first"></span>
                    <span className="rotate rotate-second"></span>
                    <span className="rotate rotate-third"></span>
                    <span className="rotate rotate-fourth"></span>
                </div>
                <span className="welcome">Welcome</span>
            </div>
        </div>
    );
}

export default Intro;