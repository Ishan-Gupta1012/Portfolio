import React from 'react'
import "./Contact.css"
import con from "../../assets/contact.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import linked from "../../assets/linked.png"
import git from "../../assets/git.png"
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
            <div className="social-links">
          <a href="https://www.linkedin.com/in/ishan-gupta-08686631a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuVkHFmqNTnWvp4ff0TmKHA%3D%3D" target="_blank" rel="noopener noreferrer">
            <img src={linked} alt="" />
          </a>

          <a href="https://github.com/Ishan-Gupta1012" target="_blank"></a>
          <img src={git} alt="" id = "git"/>


        </div>
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

export default Contact ;