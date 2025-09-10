import React from 'react'
import "./Card.css"
import imag from "../../assets/rea.png"


function Card({title, image,link}) {

  const CardClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="card" onClick={CardClick}>
        <h1>{title}</h1>
        <div className="hovercard">
            <img src={image} alt="" />
        </div>
        
    </div>
  )
}

export default Card
