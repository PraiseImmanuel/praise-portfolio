import "../styles/App.css";
import "../styles/Header.css";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Projects.css";
import "../styles/Contact.css";
import "../styles/Footer.css";

import React, { useState, useEffect } from "react";

import Intro from "./Intro";
import Canvas from "./Canvas";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";


// const AnimatedIntro = () => {
//     return <Intro />;
// }

const Components = () => {
    return(
        <div>
            <Canvas />
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
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            }, 9000);
    }, []);

    return isLoading ? <Intro /> : Components();
    // return Components();
};

export default App;