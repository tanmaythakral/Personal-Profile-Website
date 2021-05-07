import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { useRef, useEffect } = React;

function Body() {
    const circleRef = useRef(null);

    useEffect(() => {
      gsap.to("#thirdCircle", {
        x: 100,
        duration: 10,
        scrollTrigger: {
          trigger: "#thirdCircle",
          markers: true,
          start: "top center",
          end: "bottom 80px",
          scrub: true
        }
      });
    }, []);
  
    return (
      <div className="App">
        <div id="firstCircle"></div>
        <div id="secondCircle"></div>
        <div ref={circleRef} id="thirdCircle"></div>
      </div>
    );
  }
  

  
export default Body;