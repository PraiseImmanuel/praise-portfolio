import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from 'react-scroll';

const hamburger = () =>{
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('display');
    const displayedIcon = document.querySelector('.hamburger img');
    document.querySelector('.nav-links').classList.contains('display') ? 
        displayedIcon.setAttribute('src', './image/icon-close.svg') :  
        displayedIcon.setAttribute('src', './image/icon-hamburger.svg');

}

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
                             <Link activeClass="active" to="home" onClick={() => scroll.scrollToTop()} >
                                <span className="displayed">Home</span>
                                <span className="displayed-on-hover">Home</span>
                            </Link>
                        </li>

                        <li className="nav-link three">
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
                                <span className="displayed">About</span>
                                <span className="displayed-on-hover">About</span>
                            </Link>
                        </li>

                        <li className="nav-link four">
                            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                                <span className="displayed">Projects</span>
                                <span className="displayed-on-hover">Projects</span>
                            </Link>
                        </li>

                        <li className="nav-link five">
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                                <span className="displayed">Contact</span>
                                <span className="displayed-on-hover">Contact</span>                                
                            </Link>
                        </li>
                    </ul>
                </div>

                <a onClick={hamburger} className="hamburger">
                    <img src="./image/icon-hamburger.svg" alt="" />
                    {/* <img src="./image/icon-close.svg" alt="" /> */}
                </a>

            </nav>
        </header>
    );
}

export default Header;