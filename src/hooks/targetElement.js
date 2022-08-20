import { useState, useEffect, useRef } from "react";

const targetElement = (options) => {
    const containerRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);
    
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