import React from "react";
import {Link} from 'react-router-dom';
import "./Footer.css";

const Mainft = () => (
 <div className="Mainfooter">
     <div className="Content">
        <h1>College Space</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima, esse sit consectetur, modi est porro consequuntur pariatur quasi doloremque molestias quod unde ullam illum, voluptates quas hic debitis aut.</p>
     </div>
     <div className="About">
     <h1>About</h1>
     <li>
     <Link to="/">Home</Link>
     </li>
     <li>
     <Link to="/">Services</Link>
     </li>
     <li>
     <Link to="/">About us</Link>
     </li>
     <li>
     <Link to="/">Contact</Link>
     </li>
     </div>
     <div className="Address">
     <h1>Address</h1>
     </div>
     <div className="follow">
     <h1>Follow Us</h1>
     </div>
 </div>
);

export default Mainft;