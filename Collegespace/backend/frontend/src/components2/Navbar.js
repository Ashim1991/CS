import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { BsNewspaper} from "react-icons/bs";
import { FaBlogger} from "react-icons/fa";
import {MdOutlineQuestionAnswer} from "react-icons/md";
import {BiChat} from "react-icons/bi";
import {AiFillSchedule} from 'react-icons/ai';
import {CgProfile} from "react-icons/cg";


const Navbar = () => {
  return (
    <> 
    <nav className='main-nav'>
        <div className='logo'>

        </div>
     <div className='menu-link'>
        <ul>
            <li className='link'>
            
                <Link to='/Main'>
                    <BsNewspaper/>
                </Link>
            </li>
            <li className='link'>
            
                <Link to='/bloglayout'>
                    <FaBlogger/>
                </Link>
            </li>
            <li className='link'>
            
                <Link to='/QandA'><MdOutlineQuestionAnswer/></Link>
            </li>
            <li className='link'>
                <Link to='/chat'><BiChat/></Link>
               
            </li>
            <li className='link'>
                <Link to='/schedulemain'><AiFillSchedule/></Link>
               
            </li>
            <li className='link'>
           
                <Link to='/profile'><CgProfile/></Link>
            </li>
        </ul>
     </div>
     <div className='social'>

     </div>
    </nav>
    </>
  )
}

export default Navbar;