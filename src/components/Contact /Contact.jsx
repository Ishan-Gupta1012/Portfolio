import React from 'react'
import "./Contact.css"
import con from "../../assets/contact.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function Contact() {

  useGSAP(() => {
    gsap.from(".letfcontact img", {
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".img",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }

    })

    gsap.from("form", {
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"form ",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }

    })
  })

  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={con} alt="" />
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/xyzdbaaa" method='POST'>
                <input type="text" name= "Username" placeholder='Name' />
                <input type="email" name= "Email" placeholder='xyz@gmail.com'/>
                <textarea name="message" id="textarea" placeholder='Message me '></textarea>
                <input type="submit" id= "btn" value="Submit" />
            </form>
        </div>
    </div>

  )
}

export default Contact
