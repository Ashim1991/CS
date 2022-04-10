import React from 'react'
import Nav from './Nav.js/Nav';
import ShowPost from '../PostManagement/ShowPost';

import './admin.css';
const Admin=() =>{
    return (
        <div className='mainadmin'>
            <div className='adminnav'>
            <Nav/>
            </div>
            <div className='adminnavtwo'>
            <ShowPost/>
            </div>
           
        </div>
    )
}

export default Admin;
