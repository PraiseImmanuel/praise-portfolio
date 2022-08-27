import "../styles/App.css";
import "../styles/Header.css";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Projects.css";
import "../styles/Contact.css";
import "../styles/Footer.css";

import React, { useState, useEffect } from "react";

// import Intro from "./IntendedIntro";
import Intro from "./UsedIntro"
import Canvas from "./Canvas";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";

const Components = () => {
    return(
        <div>
            {/* Make sure canva animation do not run on small devices */}
            ({window.innerWidth >= 768 ? <Canvas /> : <div/>})
            <Header/>
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>  
    )
}


const App = () => {
    // Display welcome animation while page loads
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            }, 6950);
    }, []);

    return isLoading ? <Intro /> : Components();
};

export default App;