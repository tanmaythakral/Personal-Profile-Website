import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import planet from '../images/planet.png';
import astronaut from '../images/astronaut.png'
import Lottie from 'react-lottie';
import animationData from '../images/60668-black-pow.json';
import amongus from '../images/37725-loading-50-among-us.json'
import starfish from '../images/61393-starfish-orca-collectible.json'
import git from '../images/6637-github-logo.json'

gsap.registerPlugin(ScrollTrigger);

const { useRef, useEffect } = React;

function Body() {
    const circleRef = useRef(null);

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    const defaultOptions1 = {
      loop: true,
      autoplay: true,
      animationData: amongus,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    const defaultOptions2 = {
      loop: true,
      autoplay: true,
      animationData: starfish,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    const defaultOptions3 = {
      loop: true,
      autoplay: true,
      animationData: git,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    useEffect(() => {
      gsap.to("#first", {
        opacity :1,
        duration: 100,
        scrollTrigger: {
          trigger: "#first",
          // markers: true,
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
        duration: 1000,
        scrollTrigger: {
          trigger: "#second",
          // markers: true,
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
          // markers: true,
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
          // markers: true,
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
          // markers: true,
          start: "top 30%",
          end: "bottom 80px",
          pin: true,
          scrub: true
        }
      });
    }, []);

    useEffect(() => {
      gsap.to("#dog_animation", {
        duration: .5,
        y:20,
        scrollTrigger: {
          trigger: "#dog_animation",
          markers: true,
          start: "top 30%",
          end: "bottom 70%",
          scrub : true
        }
      });
    }, []);

    useEffect(() => {
      gsap.to("#amongus_animation", {
        duration: 10000,
        scrollTrigger: {
          trigger: "#amongus_animation",
          markers: true,
          start: "top 30%",
          end: "bottom 70%",
          scrub : true,
          pin : true
        }
      });
    }, []);


  
    return (
      <div className="App">
      <img src= {planet} id = "planet" alt = ""/>
      <img src= {astronaut} id = "astronaut" alt = ""/>
        <div id="maintext"><h1 ><span>&lt;</span>tanmaythakral<span>&gt;</span></h1><p id ="secondarytext">Creative Data Science, Artificial Intelligence <br/> and Frontend development enthusiast</p></div>
        <div ref={circleRef} class="infos" id = "first"><h1>Personal Porfolio</h1><br/><span>&lt;</span><span>Personal Projects Showcase</span><span>&gt;</span></div>
        <div id = 'dog_animation'><Lottie options={defaultOptions}/></div>
        <div ref={circleRef} class="infos" id = "second"><h1>Music Player</h1><br/> <span>Built a music player with Java using the Jlayer dependency <br/> with functionality to play , pause , resume and seek the song <br/>and ability to create and play playlists and store them as a json file</span><br/><br/><a href="https://github.com/tanmaythakral/Music-Player"><i class="fab fa-github fa-3x"></i></a></div>
        <div id = 'amongus_animation'><Lottie options={defaultOptions1}/></div>
         <div ref={circleRef} class="infos" id = "third"><h1>Breast Cancer Analysis</h1><br/><span>Analyis and Hierarchical Clustering of <br/> the TCGA BRCA Breast Cancer dataset <br/>to generate a novel breast cancer classification system</span> <br/><br/><a href="https://tanmaythakral.github.io/murcwebsite/"><i class="fas fa-link fa-3x"></i></a></div>
         <div id = 'starfish_animation'><Lottie options={defaultOptions2}/></div>
         <div ref={circleRef} class="infos" id = "fourth"><h1>Computer Vision <br/>Workout Assistant</h1><br/><span>Detects the form and the <br/> number of repetition of the exercise and reports it to the user</span> <br/><br/><a href="https://github.com/tanmaythakral/Workout-Computer-Vision-Assistor"><i class="fab fa-github fa-3x"></i></a></div>
         <div id = 'git_animation'><Lottie options={defaultOptions3}/></div>
         <div ref={circleRef} class="infos" id = "fifth"><h1>Check out for more <a href="https://github.com/tanmaythakral"><i class="fab fa-github-alt"></i></a> </h1></div>
        </div>
        
    );
  }
  

  
export default Body;