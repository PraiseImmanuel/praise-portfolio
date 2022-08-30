import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from 'react-scroll';

// change hamburger icon when neccesary
const displayedIcon = () => {
    const displayedIcon = document.querySelector('.hamburger img');
    document.querySelector('.nav-links').classList.contains('display') ? 
        displayedIcon.setAttribute('src', './image/icon-close.svg') :  
        displayedIcon.setAttribute('src', './image/icon-hamburger.svg');
}

// toggle navlinks display on clicking hamburger
const hamburger = () =>{
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('display');
    displayedIcon();
}

const Header = () => {
    const ref = useRef();

    useEffect(() => {
        //close nav when anywhere except the ul tag is clicked
        const onBodyClick = (event) => {
            //Exempt the ref's tag and children from closing nav
            if(ref.current.contains(event.target)){
                return;
              
            }
            //Notice any click on the nav-link and close
            document.querySelector('.nav-links').classList.remove('display');
            displayedIcon();
         };

        document.querySelector('.nav-links').addEventListener('click', onBodyClick);

        return () => {
            document.removeEventListener('click', onBodyClick)
        }
    }, []);

    return(
        <header className="header">
            <nav className="nav">
                <div className="nav-link one">
                    <a href="https://drive.google.com/file/d/1Q9bPwB0wOX3pvqW13GLAaWXO2NW65bNH/view?usp=sharing"  rel="noopener noreferrer" target="_blank">
                        <span className="displayed">Praise Immanuel</span>
                        <span className="displayed-on-hover">Download CV</span>
                    </a>
                </div>

                <div className="nav-links" >
                    <ul ref={ref}>
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
                </a>

            </nav>
        </header>
    );
}

export default Header;