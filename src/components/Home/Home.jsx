import React from 'react'
import "./Home.css"
import ishan from "../../assets/ishan.png"
import { ReactTyped } from "react-typed";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Home() {

  useGSAP(() => {
    let tl1 = gsap.timeline() ;

    tl1.from(".line1", {
      y:80,
      duration:0.7,
      opacity:0
    })

    tl1.from(".line2", {
      y:80,
      duration:0.7,
      opacity:0
    })

    tl1.from(".line3", {
      y:80,
      duration:0.7,
      opacity:0
    })

    gsap.from("img", {
      x:200,
      duration:0.7,
      opacity:0
    })

  })
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'm</div>
          <div className="line2">Ishan Gupta</div>
          <div className="line3">
          <ReactTyped
            strings={[
              "Frontend Developer",
              "Competitive Programmer",
            ]}
            typeSpeed={80}
            backSpeed={30}
            loop
          />
          </div>
        </div>
      </div>

      <div className="righthome">
        <img src={ishan} alt="" />
      </div>
    </div>
  )
}

export default Home
