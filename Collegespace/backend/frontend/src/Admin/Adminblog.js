import React from 'react'
import Nav from './Nav.js/Nav';
import Blog from '../Blogcomponent/Blog';

import './admin.css';
const Adminblog=() =>{
    return (
        <div className='mainadmin'>
            <div className='adminnav'>
            <Nav/>
            </div>
            <div className='adminblog'>
            <Blog/>
            </div>
           
        </div>
    )
}

export default Adminblog;
