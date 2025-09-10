import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import  port from "../../assets/port.png"
import nex from "../../assets/Nexora.png"
import come from "../../assets/coming.png"

gsap.registerPlugin(ScrollTrigger)

function Projects() {

  useGSAP(() => {
    gsap.from("#para", {
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }

    })

    gsap.from(".slider", {
      x :-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }

    })
  })

  return (
    <div id="projects">
        <h1 id = "para">My Projects</h1>
        <div className="slider">

<Card title ="Portfolio" image = {port} link="https://ishangptportfolio.netlify.app/"/>
<Card title = "Virtual AI Assistant" image = {nex} link="https://nexoraai1.netlify.app/"/>
<Card title = "NexaGen AI" image ={come}/>
<Card title = "Coming Soon"/>
<Card title = "Coming Soon"/>
<Card title = "Coming Soon"/>

        </div>
    </div>
  )
}

export default Projects
