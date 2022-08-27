import { useState, useEffect, useRef } from "react";

const targetElement = (options) => {
    // create ref
    const containerRef = useRef(null);
    // state  
    const [ isVisible, setIsVisible ] = useState(false);
    // IntersectionObserver callbackFunction
    const callbackFunction = (entries) => {
      const [ entry ] = entries;
      if (entry.isIntersecting) setIsVisible(true);
    }
    
    useEffect(() => {
      const appearOnScroll = new IntersectionObserver(callbackFunction, options);
      if(containerRef.current){
        appearOnScroll.observe(containerRef.current);
      }
    
      return () => {
        if(containerRef.current) {
          appearOnScroll.unobserve(containerRef.current);
        }
      }
    }, []);

    return [containerRef, isVisible]
}

export default targetElement;