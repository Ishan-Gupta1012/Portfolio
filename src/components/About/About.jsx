import React from "react";
import "./About.css";
import Card from "../Card/Card";
import rea from "../../assets/rea.png"
import c from "../../assets/c.png"
import d from "../../assets/d.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(() => {
    gsap.from(".circle", {
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }

    })

    gsap.from(".lineshort", {
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".lineshort",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }

    })

    gsap.from(".linelong", {
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".linelong",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }

    })

    gsap.from(".aboutdetails h1", {
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }

    })

    gsap.from(".aboutdetails ul", {
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }

    })

    gsap.from(".rightabout", {
      x :100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }

    })

    
  })
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="lineshort"></div>
          <div className="circle"></div>
          <div className="linelong"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>

            <ul>
              <li>
                <span>Name</span> : Ishan Gupta
              </li>
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>

            <ul>
              <li>
                <span>Degree</span> : B-TECH
              </li>

              <li>
                <span>Branch</span> : CSE-AI
              </li>
              <li>
                <span>Colleage</span> : Mahraja Agrasen Institute of Technology
              </li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <div className="skil">
              <div className="skil1">
                <ul>
                  <li>React js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="skil2">
                <ul>
                  <li>JavaScript</li>
                  <li>C++</li>
                  <li>Python</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rightabout">
        <Card title="React, Html, CSS" image ={rea}/>
        <Card title="DSA" image ={d}/>
        <Card title="JS, Python, C++" image = {c}/>
      </div>
    </div>
  );
}

export default About;
