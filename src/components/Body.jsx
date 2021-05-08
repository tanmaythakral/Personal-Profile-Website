import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { useRef, useEffect } = React;

function Body() {
    const circleRef = useRef(null);

    useEffect(() => {
      gsap.to("#first", {
        opacity :1,
        duration: 1,
        scrollTrigger: {
          trigger: "#first",
          markers: true,
          start: "top 30%",
          end: "bottom 80px",
          pin: true,
          scrub: true
        }
      });
    }, []);

    useEffect(() => {
      gsap.to("#second", {
        opacity :1,
        duration: 1,
        scrollTrigger: {
          trigger: "#second",
          markers: true,
          start: "top 30%",
          end: "bottom 80px",
          pin: true,
          scrub: true
        }
      });
    }, []);
    
  
    return (
      <div className="App">
        <div id="maintext"><h1 ><span>&lt;</span>tanmaythakral<span>&gt;</span></h1><p id ="secondarytext">Creative Data Science, Artificial Intelligence <br/> and Frontend development enthusiast</p></div>

        <div ref={circleRef} class="infos" id = "first"><h1>Personal Porfolio</h1><br/><span>&lt;</span><span>Personal Projects Showcase</span><span>&gt;</span></div>
        <div ref={circleRef} class="infos" id = "second"><h1>Hello</h1></div>

        </div>
        
    );
  }
  

  
export default Body;