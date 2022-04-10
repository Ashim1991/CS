import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/online.png';
import {Parallax} from 'react-parallax';
import '../components/Body.css';

const HomePart = () => (
    
    <Parallax>
    <section id="Header" className="d-flex align-item-center">
       <div className="container-fluid ">
          <div className="row">
              <div className="col-10 mx-auto">
                  <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 header-img">
                   <img src={image} height='480' width='580' className="image-fluid animated"    />
               </div>
               <div className="col-md-6 pt-5 pt-lg-0  order-1 order-lg-2 d-flex justify-content-center flex-column">
                  <p>An Internet forum, or message board, is an online discussion site where people can hold conversations in the form of posted messages.[1] They differ from chat rooms in that messages are often longer than one line of text, and are at least temporarily archived. Also, depending on the access level of a user or the forum set-up, a posted message might need to be approved by a moderator before it becomes publicly visible.

Forums have a specific set of jargon associated with them; example: a single conversation is called a "thread", or topic.

A discussion forum is hierarchical or tree-like in structure: a forum can contain a number of subforums, each of which may have several topics. Within a forum's topic, each new discussion started is called a thread and can be replied to by as many people as so wish.

Depending on the forum's settings, users can be anonymous or have to register with the forum and then subsequently log in to post messages. On most forums, users do not have to log in to read existing messages.</p>
                  <div className="mt-3">
                      
                  </div>
               </div>
              
               </div>
              </div>
          </div>

      </div>
       </section>
    </Parallax>
);

export default HomePart;
