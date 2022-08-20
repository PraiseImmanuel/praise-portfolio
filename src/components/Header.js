import React from "react";

const Header = () => {
    return(
        <header className="header">
            <nav className="nav">
                <div className="nav-link one">
                    <a href="/">
                        <span className="displayed">Praise Immanuel</span>
                        <span className="displayed-on-hover">Download CV</span>
                    </a>
                </div>

                <div className="nav-links">
                    <ul>
                        <li className="nav-link two">
                            <a href="/" className="active">
                                <span className="displayed">Home</span>
                                <span className="displayed-on-hover">Home</span>
                            </a>
                        </li>

                        <li className="nav-link three">
                            <a href="/">
                            <span className="displayed">About</span>
                            <span className="displayed-on-hover">About</span>
                            </a>
                        </li>

                        <li className="nav-link four">
                            <a href="/">
                                <span className="displayed">Projects</span>
                                <span className="displayed-on-hover">Projects</span>
                            </a>
                        </li>

                        <li className="nav-link five">
                            <a href="/">
                                <span className="displayed">Contact</span>
                                <span className="displayed-on-hover">Contact</span>                                
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;