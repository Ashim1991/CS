import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/1.jpg';
import {Parallax} from 'react-parallax';
import '../components/Body.css';

const Body = () => (
    
    <Parallax>
    <section id="Header" className="d-flex align-item-center">
       <div className="container-fluid ">
          <div className="row">
              <div className="col-10 mx-auto">
                  <div className="row">
               <div className="col-md-6 pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1> Grow your knowledge with
                      <strong className="brand-name"> College Space</strong></h1>
                  <h2 className="my-3"> We are creating a digital learning enviroment.</h2>
                  <div className="mt-3">
                      <Link to='/login' className="btn-get-started">Get Started</Link>
                  </div>
               </div>
               <div className="col-lg-6 order-1 order-lg-2 header-img">
                   <img src={image} height='480' width='580' className="image-fluid animated"    />
               </div>
               </div>
              </div>
          </div>

      </div>
       </section>
    </Parallax>
);

export default Body;
