import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/img2.png';

const About = () => (
    <section id="Header" className="d-flex align-item-center">
       <div className="container-fluid ">
          <div className="row">
              <div className="col-10 mx-auto">
                  <div className="row">
               <div className="col-md-6 pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1> What are the agenda of
                      <strong className="brand-name"> College Space</strong></h1>
                  <h2 className="my-3"> i will write the agendas of college when i have time soo dont worry about this page this will be the pervect website noone have ever seen in their life and i am working on it soo chill brother</h2>
                  <div className="mt-3">
                      <Link to='/login' className="btn-get-started">Continue</Link>
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
);

export default About;
