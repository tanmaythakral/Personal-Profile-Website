import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import planet from '../images/planet.png';

gsap.registerPlugin(ScrollTrigger);

const { useRef, useEffect } = React;

function Body() {
    const circleRef = useRef(null);


    useEffect(() => {
      gsap.to("#first", {
        opacity :1,
        duration: 100,
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
        duration: 100,
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

    useEffect(() => {
      gsap.to("#third", {
        opacity :1,
        duration: 100,
        scrollTrigger: {
          trigger: "#third",
          markers: true,
          start: "top 30%",
          end: "bottom 80px",
          pin: true,
          scrub: true
        }
      });
    }, []);

    useEffect(() => {
      gsap.to("#fourth", {
        opacity :1,
        duration: 100,
        scrollTrigger: {
          trigger: "#fourth",
          markers: true,
          start: "top 30%",
          end: "bottom 80px",
          pin: true,
          scrub: true
        }
      });
    }, []);
    
    useEffect(() => {
      gsap.to("#fifth", {
        opacity :1,
        duration: 100,
        scrollTrigger: {
          trigger: "#fifth",
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
      <div className="planet_container"><img src= {planet} id = "planet" /></div>
        <div id="maintext"><h1 ><span>&lt;</span>tanmaythakral<span>&gt;</span></h1><p id ="secondarytext">Creative Data Science, Artificial Intelligence <br/> and Frontend development enthusiast</p></div>
        <div ref={circleRef} class="infos" id = "first"><h1>Personal Porfolio</h1><br/><span>&lt;</span><span>Personal Projects Showcase</span><span>&gt;</span></div>
        <div ref={circleRef} class="infos" id = "second"><h1>Music Player</h1><br/> <span>Built a music player with Java using the Jlayer dependency <br/> with functionality to play , pause , resume and seek the song <br/>and ability to create and play playlists and store them as a json file</span><br/><br/><a href="#"><i class="fab fa-github fa-3x"></i></a></div>
         <div ref={circleRef} class="infos" id = "third"><h1>Breast Cancer Analysis</h1><br/><span>Analyis and Hierarchical Clustering of <br/> the TCGA BRCA Breast Cancer dataset <br/>to generate a novel breast cancer classification system</span> <br/><br/><a href="#"><i class="fas fa-link fa-3x"></i></a></div>
         <div ref={circleRef} class="infos" id = "fourth"><h1>Computer Vision <br/>Workout Assistant</h1><br/><span>Detects the form and the <br/> number of repetition of the exercise and reports it to the user</span> <br/><br/><a href="#"><i class="fab fa-github fa-3x"></i></a></div>
         <div ref={circleRef} class="infos" id = "fifth"><h1>Check out for more <a href="#"><i class="fab fa-github-alt"></i></a> </h1></div>
        </div>
        
    );
  }
  

  
export default Body;