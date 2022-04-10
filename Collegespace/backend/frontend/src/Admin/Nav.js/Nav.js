import React from 'react'
import {Link} from 'react-router-dom';
import './nav.css';

const Nav=() => {
    return (
        
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light top " >
        <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none topmain">
          <svg class="bi me-2" width="40" height="32">Home</svg>
          <span>Home</span>
        </Link>
        
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/admin" class="nav-link " aria-current="page">
              <svg class="bi me-2" width="16" height="16"><use to="/Main"></use></svg>
              NewsFeed
            </Link>
          </li>
          <li>
            <Link to="/adminblog" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"><use to="/bloglayout"></use></svg>
              blog
            </Link>
          </li>
          <li>
            <Link to="/adminquestion" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"><use to="#table"></use></svg>
              Questions
            </Link>
          </li>
          <li>
            <Link to="/adminsche" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"><use to="#grid"></use></svg>
              Schedules
            </Link>
          </li>
          <li>
            <Link to="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"><use to="#people-circle"></use></svg>
              Direct Message(DM)
            </Link>
          </li>
          <li>
            <Link to="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"><use to="#people-circle"></use></svg>
              User list
            </Link>
          </li>
        </ul>
        <div class="dropdown">
   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Add
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Add Post</a></li>
    <li><a class="dropdown-item" href="#">Add solution</a></li>
    <li><a class="dropdown-item" href="#">Add Blogs</a></li>
    <li><a class="dropdown-item" href="#">Add Important notices</a></li>
  </ul>
</div>
      </div>
      
    )
}

export default Nav;
