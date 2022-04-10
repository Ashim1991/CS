import React from "react";
import './Body.css';
import image from '../images/photo.jpg';
import pep from '../images/pep.jpg';
import img from '../images/elon.jpg';
const Cards = () => (
     
  <>
  <div className="SecondCard">
  
  <div className="Info">
    <img src={pep} alt="asdf"/>
    <p>'As time goes by, people get to know you better. They pose problems for you, and you have to come up with solutions'</p>
    <h4>-Pep Guardiola </h4>
  </div>
  <div className="Info">
    <img  src={image}  alt="asdf"/>
    <p>'Any fool can know. The point is to understand'</p>
    <h4>-Albert Einstein</h4>
    
  </div>
  <div className="Info">
    <img src={img} alt="asdf"/>
    <p>'We're already cyborgs. Your phone and your computer are extensions of you, but the interface is through finger movements or speech, which are very slow.'</p>
    <h4>-Elon Musk</h4>
  </div>
  </div>
  </>

);

export default Cards;